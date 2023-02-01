import { FC } from 'react'
import { ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material'
import { tokens } from '../Theme'
import { useScreenSizeContext } from '../ScreenSize'

interface IProps {
  records?: { value: string; label: string }[]
  setRecord: string
  updateRecords: Function
  styles: {
    textAlign: 'start' | 'end'
  }
}

const RecordsToggle: FC<IProps> = ({
  records = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'deleted', label: 'Deleted' },
  ],
  setRecord,
  updateRecords,
  styles,
}) => {
  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    record: string,
  ) => {
    if (record !== null) {
      updateRecords(record)
    }
  }

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { isMobile } = useScreenSizeContext()
  const { textAlign } = styles

  return (
    <div
      style={{
        textAlign,
        marginBottom: 2,
        marginRight: isMobile ? 0 : 20,
        marginLeft: isMobile ? 20 : 0,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={setRecord}
        exclusive
        onChange={handleToggle}
        aria-label="records"
        size="small"
        sx={{
          '& .Mui-selected': {
            color: `${colors.grey[400]}`,
          },
        }}
      >
        {records.map(rec => (
          <ToggleButton
            key={rec.value}
            value={rec.value}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            {rec.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  )
}

export default RecordsToggle
