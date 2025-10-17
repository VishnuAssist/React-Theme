import PageHeader from "../../Components/PageHeader";
import AssessmentIcon from "@mui/icons-material/Assessment";

const index = () => {
  return (
    <div>
      <PageHeader
        title="Summary"
        description="Get a complete overview of your daily performance."
        icon={<AssessmentIcon />}
      />
    </div>
  );
};

export default index;
