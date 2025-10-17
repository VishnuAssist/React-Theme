import PageHeader from "../../Components/PageHeader";
import HomeIcon from "@mui/icons-material/Home";

const index = () => {
  return (
    <div>
      <PageHeader
        title="index"
        description="Plan, prioritize, and accomplish your tasks with ease."
        btntitle="Add Task"
        icon={<HomeIcon />}
        // onActionClick={""}
      />
    </div>
  );
};

export default index;
