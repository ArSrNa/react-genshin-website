import Router from "next/router";
import {useState} from "react";

export default function Home() {
  return (
    <>
      <Poster />
      {/* <News /> */}
      新闻资讯太简单了，过
      <Countries />
    </>
  );
}

function Poster() {
  return (
    <>
      <video
        src="https://ys.mihoyo.com/main/_nuxt/videos/bg.3e78e80.mp4"
        autoPlay
        loop
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          objectFit: "cover",
          justifyContent: "center",
          //   position: "absolute",
          zIndex: 0,
        }}
      />

      <div className="home-upper">
        <div className="poster__video-entry" style={{display: "flex"}}>
          <button className="poster__video">播放</button>
        </div>

        <div style={{display: "flex", gap: 15, color: "white"}}>
          <div>二维码</div>
          <img src="/images/cgi.png" />
          卧槽他居然是图片层叠通过鼠标事件替换的，这个工作量太大了
        </div>
      </div>
    </>
  );
}

interface CountriesType {
  title: string;
  image: string;
  character: string;
  href: string;
}
function Countries() {
  const lists: Array<CountriesType> = [
    {
      title: "蒙德城",
      image: "https://uploadstatic.mihoyo.com/contentweb/20200211/2020021114213984258.jpg",
      character: "https://uploadstatic.mihoyo.com/contentweb/20220121/2022012117384457834.png",
      href: "/character",
    },
    {
      title: "璃月港",
      image: "https://uploadstatic.mihoyo.com/contentweb/20200515/2020051511071844630.jpg",
      character: "https://uploadstatic.mihoyo.com/contentweb/20210624/2021062410110987203.png",
      href: "/character",
    },
    {
      title: "稻妻城",
      image: "https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011394586258.jpg",
      character: "https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917013922761.png",
      href: "/character",
    },
    {
      title: "须弥城",
      image:
        "https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/b01e3edba8378a485bd2f8b2075e4e86_8655330006701981250.jpg",
      character:
        "https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/9ec9dfd134fa8701b8d25ed856303ea1_4280333980101063155.png",
      href: "/character",
    },
    {
      title: "枫丹廷",
      image:
        "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/f3ac9aac39dd292a18d79cd5fe3f37ff_431332308480891397.jpg",
      character:
        "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/826bcfa79f4c46c9c63b4c2bcd117f78_2311645273450413299.png",
      href: "/character",
    },
  ];
  return (
    <>
      {lists.map(props => (
        <CtContainer {...props} />
      ))}
    </>
  );
}

function CtContainer({title, image, character, href}) {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => Router.push(href)}
      onMouseEnter={e => setActive(true)}
      onMouseOut={e => setActive(false)}
      style={{overflow: "hidden", height: 260}}>
      <div
        style={{
          backgroundImage: `url(${character})`,
          opacity: active ? 1 : 0,
          border: active ? "rgba(255,255,255,1) solid 6px" : "rgba(255,255,255,0) solid 6px",
        }}
        className="city__list-char"
      />
      <div
        className="city__list-item-p"
        style={{
          opacity: active ? 1 : 0,
        }}>
        {title}
      </div>
      <img
        src="/images/css/city-list-after.png"
        style={{
          opacity: active ? 1 : 0,
          position: "absolute",
          zIndex: 3,
          width: 210,
          height: 10,
          marginTop: 160,
          left: "50%",
          transform: "translateX(-50%)",
          transition: "all .5s ease-in-out",
        }}
      />
      <img
        src={image}
        style={{
          height: 260,
          filter: "brightness(.6)",
          transition: "all 0.4s 0s ease-out;",
          width: "100%",
          transform: active ? "scale(1.05)" : "scale(1)",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
    </div>
  );
}
