import { FC } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useMobileContext } from "utils";

interface IProps {
  records?: { value: string; label: string }[];
  setRecord: string;
  updateRecords: Function;
}

const RecordsToggle: FC<IProps> = ({
  records = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "deleted", label: "Deleted" },
  ],
  setRecord,
  updateRecords,
}) => {
  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    record: string
  ) => {
    updateRecords(record);
  };

  const isMobile = useMobileContext();

  return (
    <div
      style={{
        textAlign: isMobile ? "start" : "end",
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
        {records.map((rec) => (
          <ToggleButton key={rec.value} value={rec.value}>
            {rec.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};

export default RecordsToggle;
