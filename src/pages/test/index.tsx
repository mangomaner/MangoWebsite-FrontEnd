import React from 'react';
import styles from './index.less';
import {Carousel} from "antd";
import homestyle from './css/homestyle.css';
import cardstyle from './css/cardStyle.css';


const Register: React.FC = () => {

  window.scrollTo(0, 0);

  const contentStyle: React.CSSProperties = {
    width: '96vh',
    height: '54vh',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div>
      <meta name="referrer" content="no-referrer"/>
      <div className={styles.outBox}>
        <div className={styles.container}>
          <div className={styles.carouselContainer}>
            <Carousel autoplay style={{width: "96vh"}} draggable arrows>
              <div>
                <img className={styles.imgCarousel} style={contentStyle} src="/image/head.png"/>
              </div>
              <div>
                <img className={styles.imgCarousel} style={contentStyle} src="/image/head1.jpeg"/>
              </div>
              <div>
                <img className={styles.imgCarousel} style={contentStyle} src="/image/about3.jpg"/>
              </div>
            </Carousel>
          </div>

          <div className={styles.sideContent}>
            <a href="https://www.yhdmw123.com/play/2430-2-1.html">
              <div className={cardstyle.card}>
                <img src={"/image/steins_gate.jpg"}/>
                <p>Steins Gate</p>
              </div>
            </a>
            <a href="https://www.yhdmw123.com/play/8953-1-1.html">
              <div className={cardstyle.card}>
                <img src={"/image/mygo.jpg"}/>
                <p>Bang Dream! It's Mygo!!!!!</p>
              </div>
            </a>
            <a href="https://www.bilibili.com/bangumi/play/ss425?spm_id_from=333.337.0.0">
              <div className={cardstyle.card}>
                <img src={"/image/超炮.jpg"}/>
                <p>某科学的超电磁炮</p>
              </div>
            </a>
            <a href="https://www.yhdmw123.com/play/13335-1-1.html">
              <div className={cardstyle.card}>
                <img src={"/image/败犬女主.jpg"}/>
                <p>败犬女主太多了</p>
              </div>
            </a>
          </div>
        </div>
        {/*<a href="#" className={styles.downLink}><img src="/image/down.gif" alt="down.gif" className={styles.downImg}/></a>*/}
      </div>
      <main className={homestyle.main}>
        <section className={homestyle.sec}>

          <a href="/about">
            <div className={homestyle.part1}>
              <div className={homestyle.pt}>
                <div className={homestyle.imghid}>
                  <div className={homestyle.img}></div>
                </div>
                <div className={homestyle.txt}>
                  <br/>
                  <h1>关于</h1>
                  <br/>
                  <p>有关我的一些信息</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/src/pages/blog">
            <div className={homestyle.part2}>
              <div className={homestyle.pt}>
                <div className={homestyle.txt}>
                  <br/><br/>
                  <h1>博客</h1>
                  <br/>
                  <p>关于我的博客</p>
                </div>
                <div className={homestyle.imghid}>
                  <div className={homestyle.img}></div>
                </div>
              </div>
            </div>
          </a>

          <a href="/album">
            <div className={homestyle.part3}>
              <div className={homestyle.pt}>
                <div className={homestyle.imghid}>
                  <div className={homestyle.img}></div>
                </div>
                <div className={homestyle.txt}>
                  <br/>
                  <h1>相册</h1>
                  <br/>
                  <p>我的相册</p>
                </div>
              </div>
            </div>
          </a>
          {/*<a href="/html/join.html">*/}
          {/*  <div className={homestyle.part4}>*/}
          {/*    <div className={homestyle.pt}>*/}
          {/*      <div className={homestyle.txt}>*/}
          {/*        <h1>加入</h1>*/}
          {/*        <p>&emsp;&emsp;加入我们</p>*/}
          {/*        <p>&emsp;&emsp;My contact information, welcome everyone who is interested to join us</p>*/}
          {/*      </div>*/}
          {/*      <div className={homestyle.imghid}>*/}
          {/*        <div className={homestyle.img}></div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</a>*/}
        </section>

      </main>

      {/*<video controls width={640} height={360} poster="/pic/about.jpg">*/}
      {/*  <source src="/Record_2024-08-07-21-01-53_149003a2d400f6adb210d7.mp4" type="video/mp4"/>*/}
      {/*  您的浏览器不支持 video 标签。*/}
      {/*</video>*/}

    </div>


  );
};
export default Register;
