import { Outlet } from "react-router-dom"
import Browse from "./components/Browse"

function App() {
  
  return (
    <>
      <Browse />
      <Outlet />
    </>
  )
}

export default App
