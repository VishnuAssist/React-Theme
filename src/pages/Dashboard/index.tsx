import { Box } from "@mui/material";


const Dashboard = () => {
  return (
    <div>
      <Box
        sx={{
          p: 1,
          bgcolor: "background.paper",
          height: "100hv",
          display: "flex",
          flexDirection: "column",width:"100%"
        }}
      >
        Dashboard page content goes here
      </Box>
    </div>
  );
};

export default Dashboard;
