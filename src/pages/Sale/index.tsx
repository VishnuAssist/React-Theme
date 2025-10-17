import PageHeader from "../../Components/PageHeader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const index = () => {
  return (
    <div>
      <PageHeader
        title="Sale"
        description="Track and record your daily milk sales seamlessly."
        btntitle="Add Sale"
        icon={<ShoppingCartIcon />}
        // onActionClick={""}
      />
    </div>
  );
};

export default index;
