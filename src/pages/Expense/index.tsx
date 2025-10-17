import PageHeader from "../../Components/PageHeader";
import ReceiptIcon from "@mui/icons-material/Receipt";


const Expense = () => {
  return (
    <div>
      <PageHeader
        title="Expense"
        description="Record and track all business-related expenses."
        btntitle="Add Expense"
        icon={<ReceiptIcon />}
        // onActionClick={""}
      />
    </div>
  );
};

export default Expense;
