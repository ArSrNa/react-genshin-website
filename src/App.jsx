import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fontain, Liyue } from "./Home";
const { Footer, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  return (
    <Layout>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Fontain />} />
        </Routes>
      </Content>
    </Layout>
  );
}

function Header() {
  const menus = [
    {
      label: "首页（没做）",
      active: false,
    },
    {
      label: "角色",
      active: true,
    },
    {
      label: "没做",
      active: false,
    },
    {
      label: "没做",
      active: false,
    },
  ];
  return (
    <>
      <div className="header">
        <img
          alt="logo"
          style={{ height: 60 }}
          src={require("./images/header/header.png")}
        />
        {menus.map((menu) => (
          <div
            key={(Math.random() * 1000).toFixed(2)}
            className={`nav-item ${menu.active ? "nav-item-active" : ""}`}
          >
            {menu.label}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
