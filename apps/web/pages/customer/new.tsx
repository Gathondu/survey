import { ChangeEvent, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Field, PhoneInput, Form } from 'ui/Form'
import { Button, Box, FormControlLabel } from '@mui/material'
import { useAddCustomerMutation, useCustomersQuery } from '../../utils/graphql'
import { useSnackbar } from 'notistack'
import { useQueryClient } from '@tanstack/react-query'
import { AddBusinessOutlined } from '@mui/icons-material'
import { CountryData } from 'react-phone-input-2'
import { useRouter } from 'next/router'
import { useScreenSizeContext } from 'utils/Context'

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string(),
  email: yup.string().required('Please enter a valid email address'),
  promotions: yup.bool(),
})

const CustomerForm = () => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()
  const router = useRouter()
  const [countryCode, setCountryCode] = useState('')
  const [phone, setPhone] = useState('')
  const { isMobile } = useScreenSizeContext()
  useCustomersQuery({
    recordsToGet: 'all',
  })
  const { mutate: addCustomer } = useAddCustomerMutation({
    onSuccess: (data: any, error: any) => {
      const { addCustomer: customer } = data
      queryClient.setQueryData(
        ['Customers', { recordsToGet: 'all' }],
        (oldData: any = {}) => {
          if (oldData.customers) {
            oldData.customers.push(customer)
          }
        },
      )

      if (customer) {
        enqueueSnackbar(`${customer.name} created sucessfully`, {
          variant: 'success',
        })
      }

      router.push(customer.url)
    },
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      countryCode: '',
      phone: '',
      promotions: '',
      email: '',
    },
    validationSchema,
    onSubmit: values => {
      Object.assign(values, {
        phone,
        countryCode,
        promotions: !!values.promotions,
      })
      //@ts-ignore
      addCustomer(values)
    },
  })

  const handlePhoneChange = (
    value: string,
    data: CountryData,
    event: ChangeEvent,
    formattedValue: string,
  ): void => {
    setPhone(value.slice(data.dialCode.length))
    setCountryCode(`+${data.dialCode}`)
  }

  return (
    <Form
      submit={formik.handleSubmit}
      styles={{ width: isMobile ? '100%' : '50%' }}
    >
      <Field
        name="firstName"
        label="First Name"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={AddBusinessOutlined}
      />
      <Field
        name="lastName"
        label="Last Name"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={AddBusinessOutlined}
      />
      <Field
        type="email"
        name="email"
        label="Email"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={AddBusinessOutlined}
      />
      <Box>
        <FormControlLabel
          control={<PhoneInput handlePhoneChange={handlePhoneChange} />}
          label=""
        />

        <FormControlLabel
          control={
            <input
              value={formik.values.promotions}
              onChange={formik.handleChange}
              type="checkbox"
              name="promotions"
            />
          }
          label="Promotions"
        />
      </Box>
      <Button
        sx={{
          mt: 2,
        }}
        color="primary"
        variant="contained"
        type="submit"
      >
        Add Customer
      </Button>
    </Form>
  )
}

export default CustomerForm
