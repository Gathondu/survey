import { useCompanyQuery } from '../../utils/graphql'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
} from '@mui/material'
import { AddBusinessOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'

const Company = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isError, error } = useCompanyQuery({
    id: id?.toString()!,
  })

  if (isLoading || !data) {
    return <Typography>Loading</Typography>
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>
  }
  const { company } = data
  return (
    <Box>
      <Card
        sx={{
          mb: 2,
        }}
        key={`${company?.id}`}
      >
        <CardActionArea onClick={() => router.push(`${company?.url}`)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {company?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {company?.location}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button
        variant="contained"
        startIcon={<AddBusinessOutlined />}
        onClick={() => router.push(`/branch/new?cid=${id}`)}
      >
        Add Branch
      </Button>
    </Box>
  )
}

export default Company
