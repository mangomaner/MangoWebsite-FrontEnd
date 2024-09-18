import React, {useEffect, useRef, useState} from 'react';
import styles from './index.less';

const Register: React.FC = () => {
  const bannerRef = useRef<HTMLUListElement>(null);
  const [pics, setPics] = useState<HTMLLIElement[]>([]);
  const [dots, setDots] = useState<HTMLDivElement[]>([]);
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const urlList: string[] = [
    "/album/bml",
    "/album/bw",
    "https://blog.csdn.net/weekdawn/article/details/120763773",
    "https://www.bilibili.com/",
    "https://space.bilibili.com/174501086/dynamic?spm_id_from=333.1365.list.card_avatar.click",
  ];
  let currentIndex = 0;
  let left = 0;
  let leftShift = 0;
  let right = 0;
  let rightShift = 0;

  const updateDots = () => {
    dots[currentIndex].style.background="rgb(48, 72, 77)";
    dots[left].style.background="rgb(123, 168, 175)";
    dots[right].style.background="rgb(123, 168, 175)";
  };

  //更新照片
  const updatePics = () => {
    left = currentIndex - 1 < 0 ? pics.length - 1 : currentIndex - 1;
    leftShift = left - 1 < 0 ? pics.length - 1 : left - 1;
    right = (currentIndex + 1) % pics.length;
    rightShift = (currentIndex + 2) % pics.length;

    pics[left].style.left = "0px";
    pics[left].style.opacity = '0.5';
    pics[left].style.zIndex=`2`;
    pics[left].style.transform="scale(1)";
    pics[currentIndex].style.zIndex = '100';
    pics[currentIndex].style.left = "27vh";
    pics[currentIndex].style.transform = "scale(1.3)";
    pics[currentIndex].style.opacity = '1';
    pics[right].style.zIndex=`3`;
    pics[right].style.transform="scale(1)";
    pics[right].style.left = "54vh";
    pics[right].style.opacity = '0.5';

    if(leftShift === right){  //只有三张图

    }
    else if(leftShift === rightShift){  //四张图
      pics[leftShift].style.opacity = '0';
    }
    else{   //五张以上
      pics[leftShift].style.opacity = '0';
      pics[rightShift].style.opacity = '0';
    }
    pics[currentIndex].onmouseout=function(){
      pics[currentIndex].style.cursor = ''; // 改变指针样式
      pics[left].style.cursor = ''; // 改变指针样式
      pics[right].style.cursor = ''; // 改变指针样式
    }
    console.log(currentIndex);
    pics[currentIndex].onclick=function(){
      window.location.href = (urlList[currentIndex]);
    }
    pics[currentIndex].onmouseover=function(){
      pics[currentIndex].style.cursor = 'pointer'; // 改变指针样式
    }
  };

  const getPre = () => {
    currentIndex = (currentIndex+1) % pics.length;

    if (!bannerRef.current || !timerRef.current) return;
    updatePics();
    updateDots();

    pics[left].onclick=function(){
      getNext();
    }
    pics[right].onclick=function(){
      getPre();
    }
  };

  const getNext = () => {
    currentIndex = currentIndex - 1 < 0 ? pics.length - 1 : currentIndex - 1;

    if (!bannerRef.current || !timerRef.current) return;
    updatePics();
    updateDots();
    pics[left].onclick=function(){
      getNext();
    }
    pics[right].onclick=function(){
      getPre();
    }
  };

  useEffect(() => {
    //防止多创建，多次执行本函数时直接返回
    if(pics.length > 0)return;
    if (!bannerRef.current) return;
    const banner = bannerRef.current;

    for (let i = 1; i <= 5; i++) {
      const li = document.createElement('li');
      const img = document.createElement('img');

      img.src = `/image/pics0${i}.jpg`;
      img.style.width = "102vh";
      img.style.height = "57vh";

      li.appendChild(img);

      banner.appendChild(li);
      pics.push(li);
      pics[pics.length - 1].style.left = "0px";

      img.addEventListener('mouseenter', () => {
        clearInterval(timerRef.current!);
      });
      img.addEventListener('mouseleave', () => {
        timerRef.current = setInterval(getPre, 3000);
      });

      const dot = document.createElement("div");
      dot.style.left = `${140 * (i + 1)*3/22}vh`;
      dot.style.name = `${i}`;
      dots.push(dot);
      banner.appendChild(dot);

      if (i > 3) {
        li.id = `${i - 3}`;
      } else {
        li.id = `${i + 2}`;
      }
    }
    left = currentIndex - 1 < 0 ? pics.length - 1 : currentIndex - 1;
    leftShift = left - 1 < 0 ? pics.length - 1 : left - 1;
    right = (currentIndex + 1) % pics.length;
    rightShift = (currentIndex + 2) % pics.length;
    pics[leftShift].style.opacity = '0';
    pics[left].style.left = "0px";
    pics[left].style.opacity = '0.5';
    pics[left].style.zIndex=`1`;
    pics[left].style.transform="scale(1)";
    pics[currentIndex].style.zIndex = '100';
    pics[currentIndex].style.left = "27vh";
    pics[currentIndex].style.transform = "scale(1.3)";
    pics[currentIndex].style.opacity = '1';
    pics[right].style.left = "54vh";
    pics[right].style.opacity = '0.5';
    pics[right].style.zIndex=`1`;
    pics[right].style.transform="scale(1)";
    pics[rightShift].style.opacity = '0';

    dots[0].style.backgroundColor = "rgb(48, 72, 77)";

    timerRef.current = setInterval(getPre, 3000);
    setTimeout(getPre, 1000);

    window.scrollTo(0, 0);

    return () => {
      clearInterval(timerRef.current!);
    };
  }, []); // 空数组依赖意味着这个 effect 只会在组件挂载和卸载时运行

  return (
    <div className={styles.mid}>
      <ul ref={bannerRef} id="banner" className={styles.banner}>
      </ul>
    </div>
  );
};

export default Register;
