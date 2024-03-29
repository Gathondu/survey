import { useFormik } from 'formik'
import * as yup from 'yup'
import Form from 'ui/Form'
import FormField from 'ui/FormField'
import { Button } from '@mui/material'
import { useAddCompanyMutation, useCompaniesQuery } from '../../utils/graphql'
import { useSnackbar } from 'notistack'
import { useQueryClient } from '@tanstack/react-query'
import {
  GpsFixedOutlined,
  AddBusinessOutlined,
  HttpOutlined,
} from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useScreenSizeContext } from 'ui'

const validationSchema = yup.object({
  name: yup.string().required('Company name is required'),
  location: yup.string(),
  website: yup.string(),
})

const CompanyForm = () => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()
  const router = useRouter()
  const { isMobile } = useScreenSizeContext()
  useCompaniesQuery({
    recordsToGet: 'all',
  })
  const { mutate: addCompany } = useAddCompanyMutation({
    onSuccess: (data: any, error: any) => {
      const { addCompany: company } = data
      queryClient.setQueryData(
        ['Companies', { recordsToGet: 'all' }],
        (oldData: any = {}) => {
          if (oldData.companies) {
            oldData.companies.push(company)
          }
        },
      )

      if (company) {
        enqueueSnackbar(`${company.name} created sucessfully`, {
          variant: 'success',
        })
      }

      router.push(company.url)
    },
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
      website: '',
    },
    validationSchema,
    onSubmit: values =>
      addCompany({
        name: values.name,
        location: values.location,
        website: values.website,
      }),
  })

  return (
    <Form
      submit={formik.handleSubmit}
      styles={{ width: isMobile ? '100%' : '50%' }}
    >
      <FormField
        name="name"
        label="Name"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={AddBusinessOutlined}
      />
      <FormField
        name="location"
        label="Location"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={GpsFixedOutlined}
      />
      <FormField
        name="website"
        label="Website"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={HttpOutlined}
      />
      <Button
        sx={{
          mt: 2,
        }}
        color="primary"
        variant="contained"
        type="submit"
      >
        Add Company
      </Button>
    </Form>
  )
}

export default CompanyForm
