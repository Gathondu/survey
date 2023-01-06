import { useBranchQuery } from '../../utils/graphql'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from '@mui/material'
import { SupportAgentOutlined } from '@mui/icons-material'
import QRCode from 'ui/QRCode'
import { useRouter } from 'next/router'

const Branch = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading, isError, error } = useBranchQuery({
    id: id?.toString()!,
  })

  if (isLoading || !data) {
    return <Typography>Loading</Typography>
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>
  }
  const { branch } = data

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Card key={`${branch?.id}`}>
          <CardActionArea onClick={() => router.push(`${branch?.url}`)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {branch?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {branch?.location}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Button
        sx={{
          mr: 2,
        }}
        variant="contained"
        startIcon={<SupportAgentOutlined />}
        onClick={() => router.push(`/employee/new?bid=${id}`)}
      >
        Add Employee
      </Button>
      <QRCode
        url={`${process.env.REACT_APP_BASE_URL}/review/new?uid=${branch?.urlId}`}
        title={branch?.name!}
      />
    </>
  )
}

export default Branch
