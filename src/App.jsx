import { Navigate, Route, Routes, useLocation } from "react-router";
import NavBar from "/src/components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Layout from "./pages/Dashboard/Layout";
import Quizzes from "./pages/Dashboard/Quizzes/Quizzes";
import requireAuth from "./HOC/requireAuth";
import Annoncements from "./pages/Dashboard/Annoncements/Annoncements";
import Status from "./pages/Dashboard/Status";

const ProtectedDashboard = requireAuth(Layout);

function App() {
  const location = useLocation();
  const hideNavbarOnRoutes = [
    "/layout",
    "/layout/status",
    "/layout/quizzes",
    "/layout/annoncements",
  ];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!shouldHideNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layout" element={<ProtectedDashboard />}>
          <Route index element={<Navigate to="status" />} />
          <Route path="status" element={<Status />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="annoncements" element={<Annoncements />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
