import { Login, SignUp, NotFound, ForgotPassword, Dashboard, Profile, PastPapers, Course, CoursePastPapers, CourseSummary, Forum } from "../pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../auth/AuthContext'


import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/forgot-password" exact element={<ForgotPassword />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/course" exact element={<Course />} />
            <Route path="/forum" exact element={<Forum />} />
            <Route path="/:id/past-papers" exact element={<CoursePastPapers />} />
            <Route path="/:id/summary" exact element={<CourseSummary />} />
            <Route path="/settings" exact element={<Profile />} />
            <Route path="/past-papers" exact element={<PastPapers />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
