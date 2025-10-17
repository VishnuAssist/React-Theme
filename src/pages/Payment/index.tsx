import PageHeader from "../../Components/PageHeader";
import PaymentIcon from "@mui/icons-material/Payment";


const index = () => {
  return (
    <div>
      <PageHeader
        title="Payment"
        description="Handle provider payments quickly and securely."
        btntitle="Add Payment"
        icon={<PaymentIcon />}
        // onActionClick={""}
      />
    </div>
  );
};

export default index;
