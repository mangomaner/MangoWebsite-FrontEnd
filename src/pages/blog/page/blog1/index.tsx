import React from 'react';
import styles from '../index.less'
import {Image, Typography} from 'antd';

const { Paragraph, Text } = Typography;


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


            <br/>
            <h2>第一步：安装插件及NTQQ(即QQ9，已安装的不必再安装)</h2>
            <h3>1.下载<a
              href="https://github.com/super1207/install_llob/releases" target={'_blank'} rel={"noopener noreferrer"}>LLOneBot </a>
              (需要能够访问GitHub)。
            </h3>
            <h3>2.在官网安装<a
              href="https://im.qq.com/index/" target={'_blank'} rel={"noopener noreferrer"}>QQ</a>。
            </h3>
            <h3>3.在QQ关闭的情况下点击LLOneBot进行安装</h3>
            <img src={'/blog/LLBot.png'} style={{width: '80%', marginLeft: '4vh'}}/>
            <p>安装完成后打开QQ（打不开则右键——以管理员身份运行），在设置界面左侧出现LiteLoaderQQNT、LLOneBot两个配置则安装成功</p>
            <h3>4.配置LLOneBot</h3>
            <p>请按下图进行配置，启用反向WebSocket服务（记得在右下角点击保存！）</p>
            <div className={styles.code}>
              <p style={{marginTop: '2vh'}}>ws://127.0.0.1:8080/onebot/v11/ws</p>
            </div>
            <p>并上报Bot自身发送的消息</p>
            <img src={'/blog/LLOneBot1.png'} style={{width: '80%', marginLeft: '4vh'}}/>
            <img src={'/blog/LLOneBot2.png'} style={{width: '80%', marginLeft: '4vh'}}/>
            <p>若对LLOneBot有疑问，详情可见：<a target={'_blank'} rel={"noopener noreferrer"}
              href="https://llonebot.github.io/zh-CN/guide/getting-started">LLOneBot-快速开始</a>
            </p>
            <br/>


            <h2>第二步：安装Python</h2>
            <p>请安装Python3.9以上版本，详见：<a target={'_blank'} rel={"noopener noreferrer"}
              href="https://blog.csdn.net/qq_53280175/article/details/121107748">安装Python</a>
              ，(教程中CTRL+R的组合键错误，应为Windows+R)
            </p>
            <p>安装完毕后，使用Windows+R键，输入cmd并回车，在弹出的终端输入pip show
              pip，确认是否安装成功</p>
            <img src={'/blog/pip.png'} style={{width: '80%', marginLeft: '4vh'}}/>


            <br/><br/>
            <h2>第三步：安装NoneBot</h2>
            <h3>1.安装 pipx</h3>
            {/*<Paragraph copyable>This is a copyable text.</Paragraph>*/}
            <p>在终端中输入下列代码</p>
            <div className={styles.code}>
              <p style={{marginTop: '2vh'}}>python -m pip install --user pipx</p>
              <p>python -m pipx ensurepath</p>
            </div>
            <p>如果在此步骤的输出中出现了“open a new
              terminal”或者“re-login”字样，那么请关闭当前终端并重新打开一个新的终端。</p>
            <h3>2.重启终端后安装脚手架</h3>
            <div className={styles.code}>
              <p style={{marginTop: '2vh'}}>pipx install nb-cli</p>
            </div>


            <br/><br/>
            <h2>第四步：搭建Bot</h2>
            <h3>1.新建文件夹</h3>
            {/*<Paragraph copyable>This is a copyable text.</Paragraph>*/}
            <p>新建一个文件夹放置你的Bot</p>
            <p>在你文件夹的地址栏输入cmd并回车（目的是在这个文件夹中打开终端，也可以自己cd进入目标目录，但你需要知道你在做什么）</p>
            <img src={'/blog/dir.png'} style={{width: '80%', marginLeft: '4vh'}}/>

            <p>在弹出的终端中输入： </p>
            <div className={styles.code}>
              <p style={{marginTop: '2vh'}}>nb create</p>
            </div>
            <p>这一指令将会执行创建项目的流程，你将会看到一些询问：</p>

            <div className={styles.code}>
              <p style={{marginTop: '2vh'}}>[?] 选择一个要使用的模板: bootstrap (初学者或用户)</p>
              <p>[?] 项目名称: 输入你喜欢的项目名</p>
            </div>

            <p>其他选项 请注意，多选项使用空格选中或取消，回车确认。</p>

            <div className={styles.code}>
              <p style={{marginTop: '2vh'}}>[?] 要使用哪些适配器? OneBot V11(OneBot V11 协议)</p>
              <p>[?] 要使用哪些驱动器? FastAPI (FastAPI 驱动器)</p>
              <p>[?] 立即安装依赖? (Y/n) Yes</p>
              <p>[?] 创建虚拟环境? (Y/n) Yes</p>
            </div>


            <br/><br/>
            <h2>第五步：Bot，启动！</h2>
            <p>在你Bot项目文件夹的地址栏输入cmd并回车</p>
            <img src={'/blog/start.png'} style={{width: '80%', marginLeft: '4vh'}}/>
            <p>在弹出的终端中输入： </p>
            <div className={styles.code}>
              <p style={{marginTop: '2vh'}}>nb run</p>
            </div>
            <p>出现下图的connection open，并能成功接收到消息即搭建成功，接下来可以去下载插件或自己编写插件</p>
            <img src={'/blog/success.png'} style={{width: '80%', marginLeft: '4vh'}}/>


            <br/><br/>
            <h2>第六步：添加插件(建议使用测试通过的插件)</h2>
            <p>NoneBot 提供了一个<a target={'_blank'} rel={"noopener noreferrer"}
              href="https://nonebot.dev/store/plugins">商店</a>，商店内容均由社区开发者贡献。你可以在商店中查找你需要的适配器和插件等，进行安装或者参考其文档等。
            </p>
            <h3>下面以smart-reply插件安装为例</h3>
            <p>在你Bot项目文件夹的地址栏输入cmd并回车输入： </p>
            <div className={styles.code}>
              <p style={{marginTop: '2vh'}}>nb plugin install nonebot-plugin-smart-reply</p>
            </div>
            <p>导入成功后重新启动Bot，在QQ中戳一戳</p>
            <img src={'/blog/chuo.png'} style={{width: '80%', marginLeft: '4vh'}}/>
            <p>即为成功</p>
            <h3>若要配置发送语音消息等功能，请在QQ中添加FFmpeg</h3>
            <p>下载<a href={'https://www.gyan.dev/ffmpeg/builds/'} target={'_blank'} rel={"noopener noreferrer"}>FFmpeg</a></p>
            <img src={'/blog/FFmpegDownload.png'} style={{width: '80%', marginLeft: '4vh'}}/>
            <p>请将压缩包解压到你想存放的地方<br/>（压缩包若无法打开，则右键其他方式打开——7-Zip File Manager）</p>
            <p>打开QQ设置，选择FFmpeg，打开你刚刚解压的文件夹，进入bin文件夹，选择ffmpeg.exe即可</p>
            <img src={'/blog/FFmpeg.png'} style={{width: '80%', marginLeft: '4vh'}}/>
            <img src={'/blog/FFmpegSelect.png'} style={{width: '80%', marginLeft: '4vh'}}/>
            <h3>更多有关插件内容可参考<a href={"https://nonebot.dev/docs/tutorial/create-plugin"}
                                         target={'_blank'} rel={"noopener noreferrer"}>编写插件</a>
            </h3>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Register;
