import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Field, Form, Select } from "components/Form";
import { Button } from "@mui/material";
import {
  Company,
  useAddBranchMutation,
  useCompaniesQuery,
  useCompanyQuery,
  useBranchesQuery,
  useAddUrlMutation,
} from "utils/Graphql";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import {
  GpsFixedOutlined,
  AddBusinessOutlined,
  StoreOutlined,
} from "@mui/icons-material";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  name: yup.string().required("Branch name is required"),
  location: yup.string(),
  company: yup.string().required("Company is required"),
});

const BranchForm = () => {
  const router = useRouter();
  const { cid: companyId } = router.query;
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const [companies, setCompanies] = useState<any>([]);
  const [selectedCompany, setSelectedCompany] = useState<any>("");
  const [disabled, setDisabled] = useState(true);
  const [urlId, setUrlId] = useState<string>("");
  const { data: companiesData, refetch: refreshCompanies } = useCompaniesQuery({
    recordsToGet: "all",
  });
  useBranchesQuery({
    recordsToGet: "all",
  });
  const { data: companyData } = useCompanyQuery(
    { id: companyId?.toString()! },
    { enabled: !!companyId }
  );

  const { mutate: addBranch } = useAddBranchMutation({
    onSuccess: (data: any, error: any) => {
      const { addBranch: branch } = data;
      queryClient.setQueryData(
        ["Branches", { recordsToGet: "all" }],
        (oldData: any = {}) => {
          if (oldData?.branches) {
            oldData.branches.push(branch);
          } else {
            oldData.branches = [branch];
          }
        }
      );
      queryClient.setQueryData(
        ["Companies", { recordsToGet: "all" }],
        (oldData: any = {}) => {
          if (oldData.companies) {
            oldData.companies.map((company: Company) => {
              if (company.id === branch.company.id) {
                company?.branches?.push(branch);
              }
              return company;
            });
          }
        }
      );

      if (branch) {
        enqueueSnackbar(`${branch.name} created sucessfully`, {
          variant: "success",
        });
        addUrl({ urlId, originalUrl: branch.url });
      }
      router.push(companyId ? companyData?.company?.url : branch.url);
    },
  });

  const { mutate: addUrl } = useAddUrlMutation({
    onSuccess: (data: any, error: any) => {
      const { addUrl: url } = data;
      queryClient.setQueryData(
        ["Urls", { recordsToGet: "all" }],
        (oldData: any = {}) => {
          if (oldData?.urls) {
            oldData.urls.push(url);
          } else {
            oldData.urls = [url];
          }
        }
      );

      if (url) {
        enqueueSnackbar("QR Url created sucessfully", {
          variant: "success",
        });
      }
    },
  });

  useEffect(() => {
    setUrlId(nanoid());

    if (companyId && companyData) {
      setSelectedCompany(companyData?.company?.id);
      setCompanies([
        { name: companyData?.company?.name, value: companyData?.company?.id },
      ]);
    } else if (companiesData && companiesData.companies) {
      setDisabled(false);

      if (companiesData?.companies?.length > 0) {
        /**@ts-ignore */
        setSelectedCompany(companiesData?.companies[0]?.id);
        setCompanies(
          companiesData?.companies?.map((company: any) => ({
            name: company?.name,
            value: company?.id,
          }))
        );
      }
    } else {
      refreshCompanies();
    }
  }, [
    setDisabled,
    setSelectedCompany,
    setCompanies,
    companyData,
    companyId,
    companiesData,
    refreshCompanies,
  ]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      location: "",
      company: selectedCompany,
    },
    validationSchema,
    onSubmit: (values) =>
      addBranch({
        name: values.name,
        location: values.location,
        company: values.company,
        urlId,
      }),
  });

  return (
    <Form submit={formik.handleSubmit}>
      <Field
        name="name"
        label="Name"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={AddBusinessOutlined}
      />
      <Field
        name="location"
        label="Location"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={GpsFixedOutlined}
      />
      <Select
        name="company"
        label="Company"
        variant="standard"
        formik={formik}
        data={companies}
        selected={selectedCompany}
        disabled={disabled}
        Icon={StoreOutlined}
        handleChange={formik.handleChange}
      />
      <Button
        sx={{
          mt: 2,
        }}
        color="primary"
        variant="contained"
        type="submit"
      >
        Add Branch
      </Button>
    </Form>
  );
};

export default BranchForm;
