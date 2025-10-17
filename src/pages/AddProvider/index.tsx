import PageHeader from "../../Components/PageHeader";
import AddIcon from "@mui/icons-material/Add";

const index = () => {
  return (
    <div>
      <PageHeader
        title="Add Provider"
        description="Easily register and manage your milk providers."
        btntitle="Add Care Record"
        icon={<AddIcon />}
        // onActionClick={""}
      />
    </div>
  );
};

export default index;
