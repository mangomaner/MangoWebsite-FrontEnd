import React, {useState, useEffect, useRef} from 'react';
import styles from './index.less';
import {Carousel, Image} from 'antd';

const ImageComponent = ({src, type, ...props}) => {
  switch(type){
    case 1  :
      return(<div className={styles.outImageBox}><Image {...props} src={src} className={styles.ima} id={styles.a} preview={{mask: false}}/></div>);
      break;
    case 2  :
      return(<div className={styles.outImageBox}><Image {...props} src={src} className={styles.ima} id={styles.b} preview={{mask: false}}/></div>);
      break;
    case 3  :
      return(<div className={styles.outImageBox}><Image {...props} src={src} className={styles.ima} id={styles.c} preview={{mask: false}}/></div>);
      break;
    case 4  :
      return(<div className={styles.outImageBox}><Image {...props} src={src} className={styles.ima} id={styles.d} preview={{mask: false}}/></div>);
      break;
    case 5  :
      return(<div className={styles.outImageBox}><Image {...props} src={src} className={styles.ima} id={styles.e} preview={{mask: false}}/></div>);
      break;
    case 6  :
      return(<div className={styles.outImageBox}><Image {...props} src={src} className={styles.ima} id={styles.f} preview={{mask: false}}/></div>);
      break;
    case 7  :
      return(<div className={styles.outImageBox}><Image {...props} src={src} className={styles.ima} id={styles.g} preview={{mask: false}}/></div>);
      break;
    default :
      return(<div className={styles.outImageBox}><Image {...props} src={src} className={styles.ima} id={styles.d} preview={{mask: false}}/></div>);
  }
}



const Register: React.FC = () => {

  const [showNewContent1, setShowNewContent1] = useState(false); // 新增的状态变量
  const imageAreaRef1 = useRef(null); // 创建一个ref用来获取元素的位置信息
  const [showNewContent2, setShowNewContent2] = useState(false); // 新增的状态变量
  const imageAreaRef2 = useRef(null); // 创建一个ref用来获取元素的位置信息
  const [showNewContent3, setShowNewContent3] = useState(false); // 新增的状态变量
  const imageAreaRef3 = useRef(null); // 创建一个ref用来获取元素的位置信息
  const [showNewContent4, setShowNewContent4] = useState(false); // 新增的状态变量
  const imageAreaRef4 = useRef(null); // 创建一个ref用来获取元素的位置信息
  const [showNewContent5, setShowNewContent5] = useState(false); // 新增的状态变量
  const imageAreaRef5 = useRef(null); // 创建一个ref用来获取元素的位置信息
  const [showNewContent6, setShowNewContent6] = useState(false); // 新增的状态变量
  const imageAreaRef6 = useRef(null); // 创建一个ref用来获取元素的位置信息
  const [showNewContent7, setShowNewContent7] = useState(false); // 新增的状态变量
  const imageAreaRef7 = useRef(null); // 创建一个ref用来获取元素的位置信息

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // 新增的状态变量


  useEffect(() => {
    const videoElements = document.querySelectorAll('video');
    const audioElement = document.querySelector('audio');

    console.log(isVideoPlaying)
    isVideoPlaying ? audioElement?.pause(): isAudioPlaying ? audioElement?.play():audioElement?.pause();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVideoPlaying]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (imageAreaRef6.current) {
      const imageAreaTop6 = imageAreaRef6.current.offsetTop;
      if (scrollPosition > imageAreaTop6 && !isAudioPlaying) {
        setIsAudioPlaying(true);
        document.querySelector('audio')?.play();
      }
    }
    if (imageAreaRef1.current) {
      const imageAreaTop1 = imageAreaRef1.current.offsetTop;
      if (scrollPosition > imageAreaTop1) {
        setShowNewContent2(true);
      }
    }
    if (imageAreaRef2.current) {
      const imageAreaTop2 = imageAreaRef2.current.offsetTop + 400;
      if (scrollPosition > imageAreaTop2) {
        setShowNewContent3(true);
      }
    }
    if (imageAreaRef3.current) {
      const imageAreaTop3 = imageAreaRef3.current.offsetTop;
      if (scrollPosition > imageAreaTop3) {
        setShowNewContent4(true);
      }
    }
    if (imageAreaRef4.current) {
      const imageAreaTop4 = imageAreaRef4.current.offsetTop;
      if (scrollPosition > imageAreaTop4) {
        setShowNewContent5(true);
      }
    }
    if (imageAreaRef5.current) {
      const imageAreaTop5 = imageAreaRef5.current.offsetTop;
      if (scrollPosition > imageAreaTop5) {
        setShowNewContent6(true);
      }
    }
    if (imageAreaRef6.current) {
      const imageAreaTop6 = imageAreaRef6.current.offsetTop;
      if (scrollPosition > imageAreaTop6) {
        setShowNewContent7(true);
      }
    }
  };

  // const addImage = () => {
  //   const newSrc = `/image/bml/new-image-${Math.floor(Math.random() * 10)}.jpg`;
  //   setImages([...images, { src: newSrc }]);
  // };

  return (
    <div className={styles.back}>
    <div className={styles.cont}>
        <audio autoPlay={!isVideoPlaying && isAudioPlaying} src="/audio/若我不曾见过太阳.ogg" loop={true}/>
        <p style={{fontSize: '6vh', marginTop: '10vh'}}>————Welcome back to BW2024————</p>
        <p style={{fontSize: '2.2vh', color: 'grey'}}><a href="/album/bml">BML</a>结束后，坐上了22:30的返程地铁</p>
        <p style={{fontSize: '2.2vh', color: 'grey', marginTop: '-1vh'}}>虽然第二天要早起，</p>
        <p style={{fontSize: '2.2vh', color: 'grey', marginTop: '-1vh'}}>但还是凌晨一点才睡...</p><br/>
        <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '-6vh'}}>-----———————————-----</p>
        <p style={{fontSize: '2vh', color: 'grey', marginTop: '-3vh'}}>2024.7.14 - 04:30 AM</p>
        <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '-3vh'}}>-----———————————-----</p>
        <p style={{fontSize: '2.5vh', color: 'grey'}}>经过了充足的睡眠后（确信）</p>
        <p style={{fontSize: '2.5vh', color: 'grey'}}>收拾东西，准备</p>
        <p style={{fontSize: '2.5vh', color: 'grey'}}>出发！</p>
        <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '-2vh'}}>-----———————————-----</p>
        <p style={{fontSize: '2vh', color: 'grey', marginTop: '-3vh'}}>2024.7.14 - 06:30 AM</p>
        <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '-3vh'}}>-----———————————-----</p>
        <p style={{fontSize: '2.5vh', color: 'grey'}}>准备进场</p>

        <div className={styles.imageArea}>
          <ImageComponent src="/image/bw/潘帽.jpg" type={getRandomInt()} style={{width: '35vh'}}/><br/>
          <ImageComponent src="/image/bw/进场排队1.jpg" type={getRandomInt()} style={{width: '70vh'}}/><br/>
          <ImageComponent src="/image/bw/碧蓝航线.jpg" type={getRandomInt()} style={{width: '35vh'}}/><br/>
          <ImageComponent src="/image/bw/进场排队2.jpg" type={4} style={{width: '70vh'}}/><br/>
        </div>

        {/*——————Area1——————*/}
      <div ref={imageAreaRef1}>
        <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '-2vh'}}>-----———————————-----</p>
        <p style={{fontSize: '2vh', color: 'grey', marginTop: '-3vh'}}>2024.7.14 - 08:30 AM</p>
        <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '-3vh'}}>-----———————————-----</p>
        <p style={{fontSize: '2.5vh', color: 'grey'}}>排了好久终于进来咯</p>
        <ImageComponent src="/image/bw/进场1.jpg" type={4} style={{width: '70vh'}}/><br/>
        <p style={{fontSize: '2.5vh', color: 'grey'}}>直奔三号馆！</p>
        <ImageComponent src="/image/bw/三号馆.png" type={4} style={{width: '70vh'}}/>
        <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '4vh'}}>毛崩三无料</p>
        <div className={styles.imageArea}>
          <ImageComponent src="/image/bw/崩三展台.jpg" type={4} style={{width: '70vh'}}/>
          <ImageComponent src="/image/bw/崩三展台1.jpg" type={4} style={{width: '70vh'}}/><br/>
          <ImageComponent src="/image/bw/崩三袋子.jpg" type={4} style={{width: '70vh'}}/>
          <ImageComponent src="/image/bw/崩三贴纸.jpg" type={4} style={{width: '70vh'}}/>
        </div>
        <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
          <source src="/video/bw/BW-阿波卡利斯如是说.mp4" type="video/mp4"/>
        </video>
      </div>


      {/*——————Area2——————*/}
      {showNewContent2 && (
        <div ref={imageAreaRef2}>
          <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '4vh'}}>继续毛</p>

          <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/原神展台.jpg" type={4} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/合影卡.jpg" type={4} style={{width: '70vh'}}/>
            </div>

            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '4vh'}}>毛毛毛</p>

            <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/索尼试用.jpg" type={4} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/孤独摇滚.jpg" type={4} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/索尼.jpg" type={4} style={{width: '70vh'}}/>
            </div>

            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '4vh'}}>狠狠毛</p>

            <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/机革展台.jpg" type={4} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/机革coser.jpg" type={4} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/机革.jpg" type={4} style={{width: '70vh'}}/>
            </div>

            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '4vh'}}>接着毛</p>

            <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/ROG.jpg" type={4} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/ROG2.jpg" type={4} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/ROG3.jpg" type={4} style={{width: '70vh'}}/>
            </div>

            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '4vh'}}>毛无料的时候也到处逛</p>

            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)}
                   style={{height: 'auto'}} preload="metadata"
            >
              <source src="/video/bw/萨姆.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.2vh', color: 'grey', marginTop: '-2vh'}}>左下的摄影好像是大元呐━━━∑(ﾟ□ﾟ*川━</p>
          </div>
        )}


      {showNewContent3 && (
        <div ref={imageAreaRef3}>
          <div className={styles.imageArea}>
            <ImageComponent src="/image/bw/崩坏学园2.jpg" type={getRandomInt()} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/崩铁展台.jpg" type={getRandomInt()} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/白菜痛车.jpg" type={getRandomInt()} style={{width: '65vh'}}/>
              <ImageComponent src="/image/bw/机革展台2.jpg" type={getRandomInt()} style={{width: '33vh'}}/>
              <ImageComponent src="/image/bw/星瞳摊位.jpg" type={getRandomInt()} style={{width: '65vh'}}/>
              <ImageComponent src="/image/bw/卡芙卡.jpg" type={getRandomInt()} style={{width: '33vh'}}/>
              <ImageComponent src="/image/bw/指挥官.jpg" type={getRandomInt()} style={{width: '65vh'}}/>
              <ImageComponent src="/image/bw/初音痛车.jpg" type={getRandomInt()} style={{width: '33vh'}}/>
              <ImageComponent src="/image/bw/初音通车2.jpg" type={getRandomInt()} style={{width: '65vh'}}/>
              <ImageComponent src="/image/bw/芙宁娜痛车.jpg" type={getRandomInt()} style={{width: '65vh'}}/>

            </div>
            <p style={{fontSize: '2vh', color: 'grey'}}>好毛又好玩</p>
            <ImageComponent src="/image/bw/三月七.jpg" type={4} style={{width: '50vh'}}/>

            <p style={{fontSize: '3vh', color: 'grey'}}>先歇一会</p>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-舞台.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '3.5vh', color: 'grey', marginTop: '10vh'}}>——开始游场!——</p>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/老K.mp4" type="video/mp4"/>
            </video>
            <ImageComponent src="/image/bw/N7.jpg" type={4} style={{width: '75vh'}}/>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>老K 和 N~7~姐~姐~!!</p>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-工作那位莱特.mp4" type="video/mp4"/>
            </video>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-水神遇刺（水龙刺的（悲.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>水神遇刺！(水龙刺的)悲</p>


            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)}
                   style={{width: '40vh', height: 'auto'}} preload="metadata">
              <source src="/video/bw/BW-猫雷.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>猫雷</p>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-绝区零舞台.mp4" type="video/mp4"/>
            </video>

            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-绝区零游场.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>河，河野华？！</p>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-3号馆游场（天依舞台）.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.5vh', color: 'grey'}}>去看看天依</p>
            <ImageComponent src="/image/bw/天依吧唧.jpg" type={4} style={{width: '33vh'}}/>
            <p style={{fontSize: '2vh', color: 'grey'}}>感谢在贩售区发天依吧唧的好兄弟</p>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-毕业旅行.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>和舰长们看看短片</p>
          </div>
        )}


      {showNewContent4 && (
        <div ref={imageAreaRef4}>
          <div className={styles.imageArea}>
            <ImageComponent src="/image/bw/阿梓.jpg" type={getRandomInt()} style={{width: '65vh'}}/>
              <ImageComponent src="/image/bw/hanser立牌.jpg" type={getRandomInt()} style={{width: '33vh'}}/>
            </div>

            <p style={{fontSize: '2.3vh', color: 'grey'}}>呜呜没预约痛失hanser的肛肠医院袋┭┮﹏┭┮</p>

            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-3号馆游场 (7).mp4" type="video/mp4"/>
            </video>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-3号馆游场 (2).mp4" type="video/mp4"/>
            </video>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-3号馆游场 (4).mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>乱逛</p>
          </div>
        )}


        {showNewContent5 && (
          <div ref={imageAreaRef5}>
            <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/ROG领无料.png" type={5} style={{width: '65vh'}}/>
              <ImageComponent src="/image/bw/ROG领东西.jpg" type={4} style={{width: '33vh'}}/>
              <ImageComponent src="/image/bw/华硕.jpg" type={3} style={{width: '65vh'}}/>
            </div>

            <p style={{fontSize: '2.3vh', color: 'grey'}}>回去ROG领东西</p>
            <p style={{fontSize: '2vh', color: 'grey'}}>感谢STAFF们！本来基本都送完了还东拼西凑拿出来发_(≧∇≦」∠)_</p>

            <ImageComponent src="/image/bw/神の无料.jpg" type={4} style={{width: '33vh'}}/>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>特别是这个折叠凳!神!!</p>

            <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/中药袋（正面）.jpg" type={5} style={{width: '65vh'}}/>
              <ImageComponent src="/image/bw/中药袋（背面）.jpg" type={4} style={{width: '33vh'}}/>
            </div>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>坐在门口被路过的医师治好了魔芋爽</p>

            <p style={{fontSize: '3vh', color: 'grey', marginTop: '5vh'}}>接着逛</p>

            <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/游场1.jpg" type={getRandomInt()} style={{width: '75vh'}}/>
              <ImageComponent src="/image/bw/崩三大屏.jpg" type={getRandomInt()} style={{width: '75vh'}}/>
              <ImageComponent src="/image/bw/孤独摇滚牌子.jpg" type={getRandomInt()} style={{width: '33vh'}}/>
              <ImageComponent src="/image/bw/游场2.jpg" type={getRandomInt()} style={{width: '70vh'}}/>
              <ImageComponent src="/image/bw/休息.jpg" type={getRandomInt()} style={{width: '33vh'}}/>
              <ImageComponent src="/image/bw/游场3.jpg" type={getRandomInt()} style={{width: '65vh'}}/>
              <ImageComponent src="/image/bw/幻兽帕鲁.jpg" type={getRandomInt()} style={{width: '65vh'}}/>
              <ImageComponent src="/image/bw/绝区零展台.jpg" type={getRandomInt()} style={{width: '65vh'}}/>
            </div>

            <p style={{fontSize: '3.5vh', color: 'grey', marginTop: '10vh'}}>————准备散场咯————</p>

            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-签名.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>咱也是出息了，签上名了（</p>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-绳匠集邮.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>散场游场的时候遇到了话痨大仙!!</p>

            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-散场游场.mp4" type="video/mp4"/>
            </video>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-1号馆游场.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>横穿两馆去汇合</p>
          </div>
        )}



        {showNewContent6 && (
          <div ref={imageAreaRef6}>
            <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/散场游场1.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/散场游场2.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/散场游场3.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/散场游场4.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/散场游场5.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/散场游场6.png" type={getRandomInt()} style={{width: '55vh'}}/>
            </div>

            <p style={{fontSize: '3.5vh', color: 'grey', marginTop: '10vh'}}>最后再逛逛</p>

            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-1号馆游场 (2).mp4" type="video/mp4"/>
            </video>
            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} preload="metadata">
              <source src="/video/bw/BW-寻找扭蛋.mp4" type="video/mp4"/>
            </video>
          </div>
        )}


        {showNewContent7 && (
          <div ref={imageAreaRef7}>
            <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/最后1.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/最后3.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/最后4.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/最后6.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/最后5.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/最后7.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/最后8.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/最后9.png" type={getRandomInt()} style={{width: '55vh'}}/>
              <ImageComponent src="/image/bw/最后10.png" type={getRandomInt()} style={{width: '55vh'}}/>
            </div>
            <ImageComponent src="/image/bw/三月七扇子.jpg" type={4} style={{width: '50vh'}}/>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>最后被好心人投喂了三月七扇子</p>
            <ImageComponent src="/image/bw/BW2024.png" type={4} style={{width: '100vh'}}/>
            <p style={{fontSize: '2.3vh', color: 'grey'}}>BiliBili World 2024</p>
            <p style={{fontSize: '3.5vh', color: 'grey', marginTop: '10vh'}}>————归程————</p>

            <video controls onPlay={() => setIsVideoPlaying(true)} onPause={() => setIsVideoPlaying(false)} style={{width: '90vh', height: 'auto'}} preload="metadata">
              <source src="/video/bw/BW-最后の集邮.mp4" type="video/mp4"/>
            </video>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '-3vh'}}>最后的集邮</p>
            <ImageComponent src="/image/bw/打车.jpg" type={4} style={{width: '66vh'}}/>

            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '0vh'}}>-----———————————-----</p>
            <p style={{fontSize: '2vh', color: 'grey', marginTop: '-3vh'}}>2024.7.14</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '-3vh'}}>-----———————————-----</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>这天</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>近十万人聚在一起</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>大家从五湖四海赶来</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>彼此大多素不相识</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>但却莫名熟悉</p>
            <ImageComponent src="/image/bw/崩三排队.jpg" type={4} style={{width: '80vh'}}/>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>我们有着相同的爱好</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>看着相同的故事</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>推着相同的角色</p>
            <ImageComponent src="/image/bw/轻音少女.jpg" type={4} style={{width: '80vh'}}/>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>这里没有生活的条条框框</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>但有人与人的信任与尊重</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>彼此放下戒备</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>留下真诚</p>
            <ImageComponent src="/image/bw/集邮.jpg" type={4} style={{width: '40vh'}}/>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>在这里</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>我们与要好的朋友相聚</p>
            <ImageComponent src="/image/bw/合影.jpeg" type={4} style={{width: '60vh'}}/>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>在这里</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>我们与关注的UP相逢</p>
            <ImageComponent src="/image/bw/雀巢.jpg" type={4} style={{width: '60vh'}}/>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>在这里</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>我们与喜欢的角色相见</p>
            <ImageComponent src="/image/bw/流萤集邮.jpg" type={4} style={{width: '80vh'}}/>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>接下来的人生中</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>也许再也没有机会彼此相见</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>但我们仍将自己珍视的东西赠予对方</p>
            <div className={styles.imageArea}>
              <ImageComponent src="/image/bw/马哈鱼.jpg" type={4} style={{width: '80vh'}}/>
              <ImageComponent src="/image/bw/乐队.jpg" type={4} style={{width: '80vh'}}/>
            </div>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>即便只有这一面之缘</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>我们仍庆幸能与对方相遇</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>希望对方能够知道</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>我们热爱着相同的东西</p>
            <p style={{fontSize: '2.5vh', color: 'grey', marginTop: '1vh'}}>仅此而已</p>
            {/*<ImageComponent src="/image/bw/终抵群星.jpg" type={4} style={{width: '33vh'}}/>*/}
            <p style={{fontSize: '2vh', color: 'grey', marginTop: '15vh'}}>谨以此篇回忆，作为这场现实之梦的谢幕礼</p>
            <p style={{fontSize: '3.5vh', color: 'black', marginTop: '5vh'}}>————<a
              href="https://www.bilibili.com/video/BV16f87eHEDh/?spm_id_from=333.999.0.0&vd_source=208401fb90d8206150a16871df1f9400">终</a>————
            </p>
            <p style={{fontSize: '2vh', color: 'grey', marginTop: '-3vh'}}>The End</p>
          </div>
        )}

        {/*<button onClick={addImage}>Add Image</button>*/}
      </div>
    </div>
  )
    ;
};

function getRandomInt() {
  return (1 + Math.round(Math.random() * 6));
}

export default Register;
