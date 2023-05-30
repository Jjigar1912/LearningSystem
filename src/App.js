import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import home from "./components/home";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Course from "./components/Admin/Course/Course";
import Add from "./components/Admin/AddCourse/Add";
import './App.css';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" Component={home}>
          </Route>
          <Route path="/admin/dashboard" Component={Dashboard} />
          <Route path="/admin/course" Component={Course} />
          <Route path="/admin/addCourse" Component={Add} />
        </Routes>
      </Router>
  );
}

export default App;
