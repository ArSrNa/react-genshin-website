import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, EffectFade} from "swiper";
SwiperCore.use([Autoplay, EffectFade]);

export default function Liyue() {
  return (
    <div className="character">
      <Background bg={["/images/background/Liyue/1.jpg", "/images/background/Liyue/2.jpg"]} />
      <CharacterInfo
        element={"/images/elements/Anemo.png"}
        index={"/images/character/Xiao/index.png"}
        cName={"/images/character/Xiao/ctext.png"}
        intro={
          <>
            守护璃月港的「三眼五显仙人」之一，妙称「护法夜叉大将」。
            <br />
            虽然外表看起来是一个少年人，但一些有关他的传说，已在古卷中流传千年。
            <br />
            对望舒客栈中一道名为「杏仁豆腐」的菜颇为喜爱。
            <br />
            究其原因，是因为「杏仁豆腐」的味道，与他曾经吞噬过的「美梦」十分相似。
          </>
        }
      />
    </div>
  );
}

export function Fontain() {
  const characters = [
    {
      name: "Furina",
    },
  ];
  return (
    <div className="character">
      <Background
        bg={[
          "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/3ce8f43e9de08e1988aafc00fdff2410_8142185104639306099.jpg",
          "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/34ec75c9ed70f793cdd698ad1a4764e5_731983624099835302.jpg",
        ]}
      />
      <CharacterInfo
        intro={
          <>
            「众水、众方、众民与众律法的女王」，深受民众喜爱。
            <br />
            热衷于欧庇克莱歌剧院上演的每一场审判，也总是在意着「观众」的眼光。
          </>
        }
        element={"/images/elements/Hydro.png"}
        index={"/images/character/Furina/index.png"}
        cName={"/images/character/Furina/ctext.png"}
      />
    </div>
  );
}

function Background({bg}) {
  return (
    <>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${bg[0]})`,
          animation: `img-scale 80s infinite linear`,
        }}
      />
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${bg[1]})`,
          animation: `bg-change 15s infinite linear, img-scale 80s infinite linear`,
        }}
      />
    </>
  );
}

function CharacterInfo({intro, cName, index, element}) {
  const CharacterCV = ({cvName}) => (
    <div className="character-cv">
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}>
        {cvName}
      </div>
    </div>
  );

  const CharacterIntro = ({intro}) => (
    <div className="character-intro">
      <div
        style={{
          position: "relative",
          overflow: "auto",
          width: 480,
          maxHeight: 130,
        }}>
        {<div style={{overflowY: "auto", paddingRight: 20}}>{intro}</div> || "undefined"}
      </div>
    </div>
  );

  return (
    <>
      <div className="character-content">
        <img className="character-name" src={cName} alt="cName" />
        <CharacterCV cvName="undefined" />
        <CharacterIntro intro={intro} />
        <img
          style={{opacity: 1, transform: "translateX(0)"}}
          src={index}
          draggable="false"
          className="character-person animated"
          alt="mainImg"
        />
        <img className="element-icon" src={element} alt="elementImg" />
      </div>
    </>
  );
}
