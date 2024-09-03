import Login from "./Views/Login"
import Accounts from "./Views/Accounts"
import Home from "./Views/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
