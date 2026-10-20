import { Routes, Route, Link } from "react-router-dom";
import About from "./About.jsx";

function Home() {
  return (
    <div className="home">
      <h1>ComicStore</h1>
      <p>Chào mừng đến với cửa hàng truyện tranh của chúng tôi!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Trang chủ</Link> | <Link to="/about-us">Giới thiệu</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;