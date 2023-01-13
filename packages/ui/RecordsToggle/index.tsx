import { FC } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

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
    updateRecords(record)
  }

  const { textAlign } = styles

  return (
    <div
      style={{
        textAlign,
        marginBottom: 2,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={setRecord}
        exclusive
        onChange={handleToggle}
        aria-label="Platform"
        size="small"
      >
        {records.map(rec => (
          <ToggleButton key={rec.value} value={rec.value}>
            {rec.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  )
}

export default RecordsToggle
