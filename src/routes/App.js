import { Login, SignUp, NotFound, ForgotPassword, Dashboard } from "../pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/forgot-password" exact element={<ForgotPassword />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
