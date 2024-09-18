import React from 'react';
import styles from './index.less'
import {Image} from "antd";

const Register: React.FC = () => {

  window.scrollTo(0, 0);


  return (

    // 版心
    <div className={styles.container}>
      {/*左侧个人信息*/}
      <div className={styles.containerLeft}>

        <div className={styles.card}>
          <img src="/image/sleep-everywhere.jpg" className={styles.avtar} alt=""/>
            <h3>Mangoman</h3>
            {/*<a href="https://gitee.com/fang-qiuhui">gitee 地址</a>*/}
            <div className={styles.counter}>
              <span>文章</span>
              <span>分类</span>
            </div>
            <div className={styles.counter}>
              <span>1</span>
              <span>1</span>
            </div>
        </div>
      </div>
      {/*右侧内容详情*/}
      <div className={styles.containerRight}>
        {/*每篇博客包含标题，摘要，时间*/}
        <div className={styles.blog}>
          <div className={styles.title}>QQ机器人搭建</div>
          <div className={styles.date}>2024-09-12</div>
          <div className={styles.desc}>
            基于NTQQ的机器人搭建，零基础教程。
          </div>
          <a href="/src/pages/blog/blog1" className={styles.detail}>查看全文 &gt;&gt;</a>
        </div>
        {/*<div className={styles.blog}>*/}
        {/*  <div className={styles.title}>我的第二篇博客</div>*/}
        {/*  <div className={styles.date}>2022-07-23</div>*/}
        {/*  <div className={styles.desc}>*/}
        {/*    关注Stella_sss，一起学编程！Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aperiam*/}
        {/*    voluptatum dolore suscipit quasi temporibus hic nemo aut voluptate eos impedit, quis repellendus doloribus*/}
        {/*    sapiente similique veritatis atque aspernatur esse.*/}
        {/*  </div>*/}
        {/*  <a href="blog_content.html?blogId=2" className={styles.detail}>查看全文 &gt;&gt;</a>*/}
        {/*</div>*/}



      </div>
    </div>

  );
};
export default Register;
