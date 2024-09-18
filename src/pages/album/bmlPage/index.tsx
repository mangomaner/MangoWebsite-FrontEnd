import React, {useEffect, useRef, useState} from 'react';
import styles from './index.less';
import {Carousel, Image, Switch} from "antd";

const ImageComponent = ({src, type}) => {
  switch(type){
    case 1  :
      return(<div className={styles.outImageBox}><Image src={src} className={styles.ima} id={styles.a} preview={{mask: false}}/></div>);
      break;
    case 2  :
      return(<div className={styles.outImageBox}><Image src={src} className={styles.ima} id={styles.b} preview={{mask: false}}/></div>);
      break;
    case 3  :
      return(<div className={styles.outImageBox}><Image src={src} className={styles.ima} id={styles.c} preview={{mask: false}}/></div>);
      break;
    case 4  :
      return(<div className={styles.outImageBox}><Image src={src} className={styles.ima} id={styles.d} preview={{mask: false}}/></div>);
      break;
    case 5  :
      return(<div className={styles.outImageBox}><Image src={src} className={styles.ima} id={styles.e} preview={{mask: false}}/></div>);
      break;
    case 6  :
      return(<div className={styles.outImageBox}><Image src={src} className={styles.ima} id={styles.f} preview={{mask: false}}/></div>);
      break;
    case 7  :
      return(<div className={styles.outImageBox}><Image src={src} className={styles.ima} id={styles.g} preview={{mask: false}}/></div>);
      break;
    default :
      return(<div className={styles.outImageBox}><Image src={src} className={styles.ima} id={styles.d} preview={{mask: false}}/></div>);
  }
}

const VideoSwitch = ({ checked, src, style }) => {
  return (
    <video controls preload="metadata"
           src={
             checked === 1
               ? `/video/bml/${src}`
               : `/video/bml/lowQuality/${src}`
           }
           style={style}
    />
  );
};

const MyVideo = ({src, info, type, author, quality}) => {
  if(type==='mid'){
    return (
      <div className={styles.videoBox}>
        <p style={{fontSize: '3vh', color: 'grey', marginTop: '-3vh', writingMode: 'tb-rl', fontFamily: '华文新魏'}}>{info}</p>
        <VideoSwitch src={src} checked={quality} style={{width:'90vh', marginBottom: '30vh',marginTop:'10vh'}}/>
        <p style={{fontSize: '2vh', color: 'grey', margin: '5vh -3vh 0 0', writingMode: 'tb-rl', fontFamily: '华文新魏'}}>{author}</p>
      </div>
    )
  }
  return (
    <div
      className={styles.videoBox}
      style={{marginLeft: type === 'left' ? '-65vh' : '65vh',}}
    >
      {type === 'left' ?
        <div/> :
        <p style={{
          fontSize: '2vh',
          color: 'grey',
          margin: '5vh -3vh 0 0',
          writingMode: 'tb-rl',
          fontFamily: '华文新魏'
        }}>{author}</p>
      }
      {type === 'left' ?
        <div/> :
        <p style={{
          fontSize: '3vh',
          color: 'grey',
          marginTop: '-3vh',
          writingMode: 'tb-rl',
          fontFamily: '华文新魏'
        }}>{info}</p>
      }
      <VideoSwitch src={src} checked={quality} style={{width: '93vh'}}/>
      {type === 'left' ?
        <p style={{
          fontSize: '3vh',
          color: 'grey',
          marginTop: '-3vh',
          writingMode: 'tb-rl',
          fontFamily: '华文新魏'
        }}>{info}</p> :
        <div/>
      }
      {type === 'left' ?
        <p style={{fontSize: '2vh', color: 'grey', margin: '5vh 0 0 -3vh', writingMode: 'tb-rl',fontFamily: '华文新魏'}}>{author}</p>:
        <div/>
      }
    </div>
  )
}

const VerticalVideo = ({src, info, author, quality, upOrDown}) =>{
    return(
      <div
        className={styles.videoBox}
        style={{
          marginLeft: '22vh',
          marginTop: upOrDown === 'no' ? '0vh' : upOrDown==='up'?'-50vh':'40vh',
          marginBottom: upOrDown === 'no' ? '0vh' : upOrDown==='up'?'20vh':'-10vh',
        }}
      >
        <p style={{fontSize: '3vh', color: 'grey', marginTop: '-3vh', writingMode: 'tb-rl', fontFamily: '华文新魏'}}>{info}</p>
        <VideoSwitch
          src={src}
          checked={quality}
          style={{
            width: '48vh',
          }}/>
        <p style={{fontSize: '2vh', color: 'grey', margin: '5vh -3vh 0 0', writingMode: 'tb-rl', fontFamily: '华文新魏'}}>{author}</p>
      </div>
    )
}

const Register: React.FC = () => {
  const [quality, setQuality] = useState(0); // 初始值设为1，代表原画
  const [showNewContent1, setShowNewContent1] = useState(false); // 新增的状态变量
  const imageAreaRef1 = useRef(null); // 创建一个ref用来获取元素的位置信息
  const [showNewContent2, setShowNewContent2] = useState(false); // 新增的状态变量
  const imageAreaRef2 = useRef(null); // 创建一个ref用来获取元素的位置信息
  const [showNewContent3, setShowNewContent3] = useState(false); // 新增的状态变量
  const imageAreaRef3 = useRef(null); // 创建一个ref用来获取元素的位置信息

  const handleQualityChange = (checked) => {
    setQuality(checked ? 1 : 0); // 开关打开时切换到高清，关闭时切换到原画
  };
  function getRandomInt(): number {
    return (1 + Math.round(Math.random() * 6));
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (imageAreaRef1.current) {
      const imageAreaTop1 = imageAreaRef1.current.offsetTop;
      if (scrollPosition > imageAreaTop1) {
        setShowNewContent2(true);
      }
    }
    if (imageAreaRef2.current) {
      const imageAreaTop2 = imageAreaRef2.current.offsetTop;
      if (scrollPosition > imageAreaTop2) {
        setShowNewContent3(true);
      }
    }


  };

  return (
    <div className={styles.back}>
      <div className={styles.cont}>
        <p style={{
          fontSize: '6vh',
          marginTop: '10vh',
          marginBottom: '-1vh'
        }}>————前情提要————</p>
        <p style={{fontSize: '2vh', color: 'grey'}}>2024.6.30</p>
        {/*<Switch checkedChildren="原画" unCheckedChildren="高清" defaultChecked onChange={handleQualityChange}/><br/>*/}
        {/*{quality === 1 ? <p style={{fontSize: '2vh', color: 'grey'}}>原画模式播放视频请注意流量消耗 (约45mb/min)</p> :*/}
        {/*  <p style={{fontSize: '2vh', color: 'grey'}}>高清模式(与B站视频消耗一致)</p>}*/}
        <Image src={"/image/bml/fubi.jpg"} className={styles.ima} style={{width: '38vh'}}
               preview={{mask: false}}/><br/>
        <p style={{fontSize: '2vh', color: 'grey', margin: '2vh'}}>bml晚上六点开票咯，为了抢bw热热身</p>
        <Image src={"/image/bml/ifLine.jpg"} className={styles.ima} style={{width: '36vh'}}
               preview={{mask: false}}/><br/>
        <p style={{fontSize: '5vh', color: 'grey'}}>于是乎，不出意外地出了意外...</p>
        <Image src={"/image/bml/woce.png"} className={styles.ima} style={{width: '40vh', marginLeft: '6vh'}}
               preview={{mask: false}}/>
        <Image src={"/image/bml/ticket.jpg"} className={styles.ima} style={{width: '40vh', marginLeft: '10vh'}}
               preview={{mask: false}}/>
        <Image src={"/image/bml/menu.jpg"} className={styles.ima}
               style={{width: '30vh', marginLeft: '10vh', marginRight: '15vh'}}
               preview={{mask: false}}/>
        <br/>
        <p style={{fontSize: '4vh', color: 'grey'}}>事已至此，我踏马莱纳!!</p>
        <p style={{fontSize: '2vh', color: 'grey', marginTop: '-3vh'}}>2024.7.11</p>
        <Image src={"/image/bml/xiache.jpg"} className={styles.ima} style={{width: '50vh'}}
               preview={{mask: false}}/>
        <p style={{fontSize: '4vh', color: 'grey'}}>经历了两天的<a href={"/album"}>上海之旅</a>后：</p>
        <p style={{fontSize: '2vh', color: 'grey', marginTop: '-3vh'}}>2024.7.12-13</p>



        <div ref={imageAreaRef1}>
          <div className={styles.imageArea}>
            <ImageComponent src={"/image/bml/soyo精选.jpg"} type={5}/>
            <ImageComponent src={"/image/bml/酒店.jpg"} type={4}/>
            <ImageComponent src={"/image/bml/panpan.jpg"} type={3}/>
            <ImageComponent src={"/image/bml/投影仪.jpg"} type={4}/>
          </div>

          <br/>

          <video controls src="/video/bml/蓝白碗.mp4"/>
          <video controls src={"/video/bml/春日影.mp4"}/>
          <p style={{fontSize: '2vh', color: 'grey', marginTop: '-3vh'}}>酒店里持续到凌晨四点的OP&ED鉴赏回</p>
          <br/>
        </div>



        {showNewContent2 && (
          <div ref={imageAreaRef2}>
            <p style={{fontSize: '6vh', marginTop: '10vh', marginLeft: '2vh', marginBottom: '-1vh'}}>————初 见————</p>
            <p style={{fontSize: '2vh', color: 'grey'}}>2024.7.13 17:20</p>
            <Carousel autoplay className={styles.ima} style={{width: "130vh", marginLeft: '40vh'}} draggable>
              <div>
                <img src={"/image/bml/map.png"} style={{width: '131vh'}}/>
              </div>
              <div>
                <img src={"/image/bml/subway.jpg"} style={{width: '131vh', height: '72.5vh'}}/>
              </div>
              <div>
                <img src={"/image/bml/虹馆外.jpg"} style={{width: '131vh', height: '72.5vh'}}/>
              </div>
              <div>
                <img src={"/image/bml/虹馆.jpg"} style={{width: '131vh', height: '72.5vh'}}/>
              </div>
            </Carousel>
            <p style={{fontSize: '2vh', color: 'grey', marginTop: '3vh'}}>穿过地铁站熙熙攘攘的bw返程人群后...</p>
            <p style={{fontSize: '2vh', color: 'grey'}}>国家会展中心-虹馆EH</p>
            <br/>
            <div className={styles.imageArea}>
              <ImageComponent src="/image/bml/电梯.jpg" type={getRandomInt()}/>
              <ImageComponent src="/image/bml/海报.jpg" type={getRandomInt()}/>
              <ImageComponent src="/image/bml/大屏.jpg" type={getRandomInt()}/>
              <ImageComponent src="/image/bml/馆内.jpg" type={getRandomInt()}/>
              <ImageComponent src="/image/bml/应援棒.jpg" type={getRandomInt()}/>
              <ImageComponent src="/image/bml/关灯.jpg" type={getRandomInt()}/>
              <ImageComponent src="/image/bml/预备.jpg" type={getRandomInt()}/><br/>
            </div>
            <p style={{fontSize: '6vh', marginTop: '5vh'}}>————伟大的揭幕表演！————</p>
            <p style={{fontSize: '2vh', color: 'grey', marginTop: '-5vh', marginBottom: '10vh'}}>2024.7.13
              18：00-21：40</p>

            <MyVideo src="开场.mp4" info="开 场" type='left' author='' quality={quality}/>
            <MyVideo src="倒计时.mp4" info="倒 计 时" type='right' author='' quality={quality}/>
            <MyVideo src="《idol》.mp4" info="i d o l" type='left' author='—R A B' quality={quality}/>
            <MyVideo src="BML-晓之车.mp4" info="晓 之 车" type='right' author='—阿梓' quality={quality}/>
            <MyVideo src="BML-龙与虎op.mp4" info="龙与虎OP——プレパレード" type='left' author='—Finana Ryugu'
                     quality={quality}/>
            <MyVideo src="《Cage》.mp4" info="C a g e" type='right' author='—Lumi' quality={quality}/>
            <MyVideo src="又一个夜晚-洛天依.mp4" info="又 一 个 夜 晚" type='left' author='—洛天依' quality={quality}/>
            <MyVideo src="霜雪千年.mp4" info="霜 雪 千 年" type='right' author='—洛天依' quality={quality}/>
            <MyVideo src="BML-《MORE!JUMP!MORE!》.mp4" info="MORE! JUMP! MORE!" type='left' author='' quality={quality}/>
            <p style={{fontSize: '3vh', color: 'grey', margin: '5vh 0 -1vh 10vh'}}>中场</p>
            <MyVideo src="BML-中场.mp4" info="《放那么多票，你卖谁了？》" type='mid' author='fnmdp,nmsl?'
                     quality={quality}/>
            <p style={{fontSize: '2vh', color: 'grey', margin: '-27vh 0 23vh 10vh'}}>放那么多票，你卖谁了？</p>
            <div className={styles.lineBox} style={{marginTop: '5vh'}}>
              <VerticalVideo src="BML-Ave Mujika.mp4" info="Ave Mujika" author='—Ave Mujika' quality={quality}
                             upOrDown='up'/>
              <VerticalVideo src="强风大背头、萝莉控.mp4" info="强风大背头&肃清萝莉控" author='—R A B' quality={quality}
                             upOrDown='down'/>
              <VerticalVideo src="BML-pls的表情包.mp4" info="猫meme之潘の表情包" author='prprprprprpr' quality={quality}
                             upOrDown='up'/>
              <VerticalVideo src="BML-型月.mp4" info="型月组曲《若能看到明月》" author='🌙🌙🌙' quality={quality}
                             upOrDown='down'/>
            </div>
            <p style={{fontSize: '3vh', color: 'grey', margin: '15vh 0 -1vh 10vh'}}>中场</p>
            <MyVideo src="BML-放那么多票，你卖谁了.mp4" info="贴脸开大" type='mid' author='B站可能...后边忘了'
                     quality={quality}/>
            <div className={styles.lineBox} style={{marginTop: '5vh'}}>
              <VerticalVideo src="BML-我的悲伤是水做的.mp4" info="我的悲伤是水做的" author='—ChiliChill'
                             quality={quality} upOrDown='up'/>
              <VerticalVideo src="BML-恶魔之子.mp4" info="恶魔之子" author='—Higuchi Ai' quality={quality}
                             upOrDown='down'/>
              <VerticalVideo src="BML-一路走好.mp4" info="巨人最终季ED—一路走好" author='—Higuchi Ai' quality={quality}
                             upOrDown='up'/>
              <VerticalVideo src="BML-yello.mp4" info="Yellow" author='—神山羊' quality={quality} upOrDown='down'/>
              <VerticalVideo src="卡其脱离太.mp4" info="卡其脱离太（" author='—SPYAIR' quality={quality} upOrDown='up'/>
              <VerticalVideo src="BML-银魂ED.mp4" info="银魂ED—Some like it hot" author='—SPYAIR' quality={quality}
                             upOrDown='down'/>
            </div>
            <p style={{fontSize: '3vh', color: 'grey', margin: '12vh 0 5vh 10vh'}}>尾声</p>
            <MyVideo src="BML-时间胶囊.mp4" info="时 间 胶 囊" type='left' author='—TIME' quality={quality}/>
            <MyVideo src="BML-再来一杯.mp4" info="再 来 一 杯" type='right' author='—全体' quality={quality}/>

            {/*<MyVideo src="bml-中场.mp4" info="开 场" type='left' author='' quality={quality}/>*/}
            {/*<MyVideo src="bml-中场.mp4" info="倒 计 时" type='right' author='' quality={quality}/>*/}
            {/*<MyVideo src="bml-中场.mp4" info="i d o l" type='left' author='—R A B' quality={quality}/>*/}
            {/*<MyVideo src="bml-中场.mp4" info="晓 之 车" type='right' author='—阿梓' quality={quality}/>*/}
            {/*<MyVideo src="bml-中场.mp4" info="龙与虎OP——プレパレード" type='left' author='—Finana Ryugu' quality={quality}/>*/}
            {/*<MyVideo src="bml-中场.mp4" info="C a g e" type='right' author='—Lumi' quality={quality}/>*/}
            {/*<MyVideo src="bml-中场.mp4" info="又 一 个 夜 晚" type='left' author='—洛天依' quality={quality}/>*/}
            {/*<MyVideo src="bml-中场.mp4" info="霜 雪 千 年" type='right' author='—洛天依' quality={quality}/>*/}
            {/*<MyVideo src="bml-中场.mp4" info="MORE! JUMP! MORE!" type='left' author='' quality={quality}/>*/}
            {/*<p style={{fontSize: '3vh', color: 'grey', margin: '5vh 0 -1vh 10vh'}}>中场</p>*/}
            {/*<MyVideo src="bml-中场.mp4" info="《放那么多票，你卖谁了？》" type='mid' author='fnmdp,nmsl?' quality={quality}/>*/}
            {/*<p style={{fontSize: '2vh', color: 'grey', margin: '-27vh 0 23vh 10vh'}}>放那么多票，你卖谁了？</p>*/}
            {/*<div className={styles.lineBox} style={{marginTop: '5vh'}}>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="Ave Mujika" author='—Ave Mujika' quality={quality}*/}
            {/*                 upOrDown='up'/>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="强风大背头&肃清萝莉控" author='—R A B' quality={quality}*/}
            {/*                 upOrDown='down'/>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="猫meme之潘の表情包" author='prprprprprpr'*/}
            {/*                 quality={quality} upOrDown='up'/>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="型月组曲《若能看到明月》" author='🌙🌙🌙' quality={quality}*/}
            {/*                 upOrDown='down'/>*/}
            {/*</div>*/}
            {/*<p style={{fontSize: '3vh', color: 'grey', margin: '15vh 0 -1vh 10vh'}}>中场</p>*/}
            {/*<MyVideo src="bml-中场.mp4" info="贴脸开大" type='mid' author='B站可能...后边忘了' quality={quality}/>*/}
            {/*<div className={styles.lineBox} style={{marginTop: '5vh'}}>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="我的悲伤是水做的" author='—ChiliChill'*/}
            {/*                 quality={quality} upOrDown='up'/>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="恶魔之子" author='—Higuchi Ai' quality={quality}*/}
            {/*                 upOrDown='down'/>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="巨人最终季ED—一路走好" author='—Higuchi Ai'*/}
            {/*                 quality={quality} upOrDown='up'/>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="Yellow" author='—神山羊' quality={quality}*/}
            {/*                 upOrDown='down'/>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="卡其脱离太（" author='—SPYAIR' quality={quality}*/}
            {/*                 upOrDown='up'/>*/}
            {/*  <VerticalVideo src="bml-pls的表情包.mp4" info="银魂ED—Some like it hot" author='—SPYAIR'*/}
            {/*                 quality={quality} upOrDown='down'/>*/}
            {/*</div>*/}
            {/*<p style={{fontSize: '3vh', color: 'grey', margin: '12vh 0 5vh 3vh'}}>尾声</p>*/}
            {/*<MyVideo src="bml-中场.mp4" info="时 间 胶 囊" type='left' author='—TIME' quality={quality}/>*/}
            {/*<MyVideo src="bml-中场.mp4" info="再 来 一 杯" type='right' author='—全体' quality={quality}/>*/}

            <p style={{fontSize: '6vh', marginLeft: '2vh', marginTop: '5vh'}}>————完结撒花————</p>
            <p style={{fontSize: '2vh', color: 'grey', marginTop: '-5vh', marginBottom: '8vh'}}>2024.7.13 21：40</p>
            <p style={{fontSize: '2vh', color: 'grey', marginTop: '-5vh', marginBottom: '4vh'}}> 至此，演出落幕。</p>
          </div>
        )}


        {showNewContent3 && (
          <div ref={imageAreaRef3}>
            <ImageComponent src="/image/bml/场馆前.jpg" type={4}/>
            <div className={styles.imageArea}>
              <ImageComponent src="/image/bml/散场.jpg" type={4}/>
              <ImageComponent src="/image/bml/应援棒合照.jpg" type={4}/>
              <ImageComponent src="/image/bml/舞台.jpg" type={4}/>
            </div>

            <MyVideo src="BML-散场.mp4" info="" type='left' author='' quality={quality}/>
            <MyVideo src="BML-散场选歌场.mp4" info="" type='right' author='' quality={quality}/>
            <MyVideo src="BML-wota艺.mp4" info="" type='left' author='' quality={quality}/>
            <MyVideo src="BML-被出警.mp4" info="" type='right' author='' quality={quality}/><br/>
            <ImageComponent src="/image/bml/路牌.jpg" type={4}/>

            <p style={{fontSize: '4vh', color: 'grey', marginTop: '5vh'}}>------BML2024至此圆满落幕，但我们的旅途<a
              href={"/album/bw"}>还未结束</a>------</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
