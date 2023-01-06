import { useEmployeeQuery } from '../../utils/graphql'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'

const Employee = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isError, error } = useEmployeeQuery({
    id: id?.toString()!,
  })

  if (isLoading || !data) {
    return <Typography>Loading</Typography>
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>
  }
  const { employee } = data

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Card key={`${employee?.id}`}>
          <CardActionArea onClick={() => router.push(`${employee?.url}`)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {employee?.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {employee?.phoneNumber}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  )
}

/*
TODO: Employee Specific QR Code:

Create a specific QR code tied to the employee that can provide more
specific reviews with employee details
**/

export default Employee
