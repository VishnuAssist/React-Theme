import PageHeader from "../../Components/PageHeader";
import InventoryIcon from "@mui/icons-material/Inventory";


const Stock = () => {
  return (
    <div>
      <PageHeader
        title="Stock"
        description="Monitor your stock levels and manage inventory flow."
        btntitle="Add Stock"
        icon={<InventoryIcon />}
        // onActionClick={""}
      />
    </div>
  );
};

export default Stock;
