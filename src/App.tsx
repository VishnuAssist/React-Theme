import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import MilkEntry from "./pages/MilkEntry"
import AddProvider from "./pages/AddProvider"
import Sale from "./pages/Sale"
import Stock from "./pages/Stock"
import Payment from "./pages/Payment"
import Summery from "./pages/Summery"
import Info from "./pages/Info"
import Expense from "./pages/Expense"



function App() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query)
    // Implement your search logic here
  }

  return (
    <Router>
      <Layout onSearch={handleSearch}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/milk-entry" element={<MilkEntry />} />
          <Route path="/add-provider" element={<AddProvider />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/summery" element={<Summery />} />
          <Route path="/info" element={<Info />} />
          <Route path="/expense" element={<Expense />} />
          
        </Routes>
      </Layout>
    </Router>
  )
}

export default App