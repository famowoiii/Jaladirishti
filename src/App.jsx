import "./App.css";
import { Route, Routes } from "react-router-dom";
//import components
import { MyNavbar } from "./components/MyNavbar";
// import Pages
import MyTentang from "./pages/MyTentang";
import MyBeranda from "./pages/MyBeranda";
import MyProgram from "./pages/MyProgram";
import MyBerita from "./pages/MyBerita";
import MyLaporkan from "./pages/MyLaporkan";
function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MyBeranda />} />
        <Route path="/berita" element={<MyBerita />} />
        <Route path="/program" element={<MyProgram />} />
        <Route path="/tentang" element={<MyTentang />} />
        <Route path="/laporkan" element={<MyLaporkan />} />
      </Routes>
    </>
  );
}

export default App;
