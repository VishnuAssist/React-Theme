import PageHeader from "../../Components/PageHeader";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";


const index = () => {
  return (
    <div>
      <PageHeader
        title="Milk Entry"
        description="Record daily milk entries accurately and efficiently."
        btntitle="Add Milk Entry"
        icon={<LocalDrinkIcon />}
        // onActionClick={""}
      />
    </div>
  );
};

export default index;
