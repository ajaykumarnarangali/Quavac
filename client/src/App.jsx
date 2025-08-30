import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path={'/home'} element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App