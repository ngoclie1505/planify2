import { BrowserRouter, Routes, Route } from "react-router-dom";

//sidebar
import Home from "./pages/Home.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import MyPlan from "./pages/MyPlan.jsx";
import Saved from "./pages/SavedPlan.jsx";
import Commu from "./pages/ExplorePage.jsx";
import Add from "./pages/CreatePlan.jsx";
import About from "./pages/About.jsx";

//header
import MyProfile from "./pages/MyProfile.jsx";

//other
import LoginSignup from "./pages/LoginSignup.jsx"
import Admin from "./pages/Admin.jsx";

//view
import ViewPlan from "./pages/ViewPlan.jsx"
import UserView from "./components/users/UserView"; // Hoặc đường dẫn của bạn

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/myplan" element={<MyPlan />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/commu" element={<Commu />} />
          <Route path="/add" element={<Add />} />

          <Route path="/myprofile" element={<MyProfile />} />


          <Route path="/about" element={< About />} />

          {/* Detail */}
          <Route path="/plans/:id" element={<ViewPlan />} />
          <Route path="/users/:userId" element={<UserView />} />
        </Route>
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
