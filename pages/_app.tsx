import "./App.css";
import {Layout} from "antd";
import {useEffect, useState} from "react";
import Router from "next/router";
import "swiper/swiper-bundle.css";
import "./css/official.css";
const {Footer, Sider, Content} = Layout;

function App({Component, pageProps}) {
  return <Main Component={Component} pageProps={pageProps} />;
}

function Main({Component, pageProps}) {
  return (
    <Layout>
      <Header />
      <Content style={{width: "100%"}}>
        <Component {...pageProps} />
      </Content>
    </Layout>
  );
}

function Header() {
  const [current, setCurrent] = useState<string>("/");
  const menus: Array<{label: string; href: string; disabled?: boolean}> = [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "角色",
      href: "/characters",
    },
    {
      label: "没做",
      href: "/1",
      disabled: true,
    },
    {
      label: "没做",
      href: "/2",
      disabled: true,
    },
  ];
  return (
    <>
      <div className="header">
        <img alt="logo" style={{height: 60}} src="/images/header/header.png" />
        {menus.map(menu => (
          <div
            key={(Math.random() * 1000).toFixed(2)}
            onClick={() => {
              if (menu.disabled) return;
              setCurrent(menu.href);
              Router.push(menu.href);
            }}
            style={{
              cursor: menu.disabled ? "not-allowed" : "unset",
            }}
            className={`nav-item ${menu.href === current ? "nav-item-active" : ""}`}>
            {menu.label}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
