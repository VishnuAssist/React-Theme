import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"

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
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App