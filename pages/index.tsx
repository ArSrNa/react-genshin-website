import Router from "next/router";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

export default function Home() {
  return (
    <>
      <div className="home">
        <Poster />
        <News />
        <Countries />
      </div>
      <Footer />
    </>
  );
}

function Footer() {
  return <div style={{textAlign: "center", height: 50, lineHeight: "50px"}}>Powered by Ar-Sr-Na</div>;
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
        <div className="poster-video-entry" style={{display: "flex"}}>
          <button className="poster-video">播放</button>
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
          className="city-list-char"
        />
        <div className="city-list-item-p">{title}</div>
        <img
          src="/images/css/city-list-after.png"
          className={`contries-list-after ${active && "contries-list-after-active"}`}
        />
        <img className={`contries-bg ${active && "contries-bg-active"}`} src={image} />
      </div>
    );
  }
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
    {
      title: "纳塔",
      image:
        "https://fastcdn.mihoyo.com/content-v2/hk4e/125194/2c8b4d9e141fec8647521b0101072da9_8964691950824209902.jpg",
      character:
        "https://fastcdn.mihoyo.com/content-v2/hk4e/125194/c5bf858c248410045b2d9410aeccb4a8_5850608775649588427.png",
      href: "/character",
    },
  ];
  return (
    <>
      {lists.map(props => (
        <CtContainer {...props} />
      ))}
      <div>
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            zIndex: 3,
            fontSize: 36,
            color: "rgba(255,255,255,0.3)",
            lineHeight: "260px",
            width: "100%",
            height: 260,
            textAlign: "center",
            textShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            margin: "0 !important",
            overflow: "hidden",
          }}>
          敬请期待
        </div>
        <img
          src="/images/index/tbc.jpg"
          style={{
            height: 260,
            filter: "brightness(.6)",
            transition: "all 0.4s 0s ease-out;",
            width: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      </div>
    </>
  );
}

function News() {
  const [current, setCurrent] = useState(0);
  interface pics {
    url: string;
    link: string;
  }

  const pics: Array<pics> = [
    {
      url: "https://fastcdn.mihoyo.com/content-v2/hk4e/125584/662f176cdc5fea0d77ca7058550dbd97_176400324373884350.jpg",
      link: "https://ys.mihoyo.com/main/news/detail/125544",
    },
    {
      url: "https://fastcdn.mihoyo.com/content-v2/hk4e/125583/ea03686153569ae2531794fa7bbedcc7_2611713081370530863.jpg",
      link: "https://ys.mihoyo.com/main/news/detail/125489",
    },
    {
      url: "https://fastcdn.mihoyo.com/content-v2/hk4e/125582/17f5ab37170165a753d591f76695546b_7229644327172953439.jpg",
      link: "https://ys.mihoyo.com/main/news/detail/125355",
    },
    {
      url: "https://fastcdn.mihoyo.com/content-v2/hk4e/125580/c7d28b7637fcb45a1d8c542d2956b9d8_5674096414546517505.jpg",
      link: "https://ys.mihoyo.com/main/news/detail/125325",
    },
  ];

  const newsList = [
    [
      {
        title: "《原神》「神铸赋形」活动祈愿现已开启，「双手剑·山王长牙」「长柄武器·薙草之稻光」概率UP！",
        time: "2024/09/17",
        path: "/main/news/detail/125835",
      },
    ],
  ];

  return (
    <>
      <div
        className="news"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: 910,
          background: `url("/images/index/news_bg.jpg") no-repeat center / cover`,
          color: "#fff",
        }}>
        <h3>新闻资讯</h3>
        <div className="news-main">
          <Swiper
            loop
            pagination
            width={640}
            autoplay={{delay: 2000}}
            style={{width: 640, overflow: "hidden", marginLeft: 0, marginRight: 0}}>
            {pics.map(n => {
              return (
                <SwiperSlide>
                  <img style={{width: 640, overflow: "hidden"}} src={n.url} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="news-content">
            <div className="news-tab-list">
              {["最新", "新闻", "公告", "活动"].map((n, i) => (
                <div
                  className={`news-tab-item ${current === i && "news-tab-item--active"}`}
                  onClick={() => setCurrent(i)}>
                  {n}
                </div>
              ))}
            </div>
            <ul className="news-list">
              {newsList[current] !== void "我永远喜欢甘雨" &&
                newsList[current].map((news, i) => (
                  <li>
                    <a href={`https://ys.mihoyo.com${news.path}`} className="news-item" title={news.title}>
                      <p className="news-title ellipsis">{news.title}</p>
                      <p className="news-date">{news.time}</p>
                    </a>
                  </li>
                ))}
            </ul>
            <a href="https://ys.mihoyo.com/main/news" target="_blank" className="news-more">
              查看全部资讯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
