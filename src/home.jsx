import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
import './css/official.css';
import { Image } from 'antd';
SwiperCore.use([Autoplay, EffectFade]);

export default function Liyue() {
    const characters = [{
        name: 'xiao',
    }]
    return (<div className='character'>
        <Background />
        <CharacterData />
    </div>)
}
function Background() {
    return (<>
        <div className="background-image" style={{
            backgroundImage: `url(${require('./images/background/1.jpg')})`,
            animation: `img-scale 80s infinite linear`
        }} />
        <div className="background-image" style={{
            backgroundImage: `url(${require('./images/background/2.jpg')})`,
            animation: `bg-change 15s infinite linear, img-scale 80s infinite linear`
        }} />
    </>)
}

function CharacterData() {
    const CharacterCV = ({ cvName }) => (
        <div className='character-cv'>
            <div style={{
                position: 'relative',
                overflow: 'hidden',
            }}>
                {cvName || 'undefined'}
            </div>
        </div>
    )

    const CharacterIntro = ({ intro }) => (

        <div class="character-intro">
            <div style={{
                position: 'relative',
                overflow: 'auto',
                width: 480,
                maxHeight: 130
            }}>
                {<div style={{ overflowY: 'auto', paddingRight: 20 }}>{intro}</div> || 'undefined'}
            </div>
        </div>

    )
    const intro = <>
        守护璃月港的「三眼五显仙人」之一，妙称「护法夜叉大将」。<br />
        虽然外表看起来是一个少年人，但一些有关他的传说，已在古卷中流传千年。<br />
        对望舒客栈中一道名为「杏仁豆腐」的菜颇为喜爱。<br />
        究其原因，是因为「杏仁豆腐」的味道，与他曾经吞噬过的「美梦」十分相似。</>
    return (<>
        <div className="character-content">
            <img className='character-name' src={require('./images/character/Xiao/ctext.png')} />
            <CharacterCV />
            <CharacterIntro intro={<>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde delectus itaque repellat culpa sed vero rerum saepe nihil voluptatem consequatur</>} />
            <img style={{ opacity: 1, transform: 'translateX(0)' }} src={require('./images/character/Xiao/index.png')} draggable="false" class="character__person animated"></img>
            <img className='element-icon' src={require('./images/elements/Anemo.png')} />
        </div>
    </>)
}