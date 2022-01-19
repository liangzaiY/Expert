import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";

import "swiper/css";
import styles from "../styles/lookdetail.module.css";

SwiperCore.use([Mousewheel]);

const list = [
  {
    season: "22SS",
    img: "https://mstarimg.imlatin.com/5AcfY6KbyQhtP3r7.jpg",
    icon: "https://mstarimg.imlatin.com/dCrzFsRYczCmJAez.png",
    text: `最后，她想象了这样的场景:
    她的这位小妹妹，
    以后将成为一位母亲。
    而她将会毕生保留着童年的纯洁珍爱之心,
    她还会逗引儿童们，
    用许多奇异的故事，
    或许就是很久以前这个梦游奇境，
    使得他们的眼睛变得更加明亮热切。
    她也将共享儿童们纯洁的烦恼，
    因为这些烦恼就存在于她自己的童年，
    以及那愉快的夏日回忆中。`,
    imgList: {
      bigKids: [
        [
          "https://mstarimg.imlatin.com/DCkzPEwcHJF6GS6h.jpg",
          "https://mstarimg.imlatin.com/EyNW6pXEYBWAsEEH.jpg",
          "https://mstarimg.imlatin.com/4RpFGS3J2XMcRj27.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/pXBjHb7kAM2i8SCM.jpg",
          "https://mstarimg.imlatin.com/kTWf8aSQdNHr3j76.jpg",
          "https://mstarimg.imlatin.com/h3fz4EezB2xywECp.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/PdkRRDXdJYshmDYN.jpg",
          "https://mstarimg.imlatin.com/kyckzCmyQExbNwbY.jpg",
          "https://mstarimg.imlatin.com/CGkEZ5ANAyeBG6mH.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/WmrSGKdc58DfRtSy.jpg",
          "https://mstarimg.imlatin.com/ZbKFbiMYtKpcCQGJ.jpg",
          "https://mstarimg.imlatin.com/Xtz7ENwDypzp8czF.jpg",
        ],
      ],
      smallKids: [
        [
          "https://mstarimg.imlatin.com/c8w3isdE2y4xQCPt.jpg",
          "https://mstarimg.imlatin.com/kaBpDejrZm8C5pz4.jpg",
          "https://mstarimg.imlatin.com/jyzweteXYhwsPsfe.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/2rGnSDFSmt3Kx8QY.jpg",
          "https://mstarimg.imlatin.com/2Zzahf22fHQBnh6w.jpg",
          "https://mstarimg.imlatin.com/YQebMQM6t2PdyCMj.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/GHeMcX28j2FRXHE4.jpg",
          "https://mstarimg.imlatin.com/SYsfsATGZDkxry3Z.jpg",
          "https://mstarimg.imlatin.com/xKcr8j5n6SAD5NtY.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/KhXsBCrSfidQJXAT.jpg",
          "https://mstarimg.imlatin.com/FEmbJyGizpiJKCpz.jpg",
          "https://mstarimg.imlatin.com/Pd8hr2GTpwG6JwC8.jpg",
        ],
      ],
      coolkids: [
        [
          "https://mstarimg.imlatin.com/NG3bXX2S4eWppcWc.jpg",
          "https://mstarimg.imlatin.com/RyfHBhzp4YkJGSD6.jpg",
          "https://mstarimg.imlatin.com/yN5hc3GTZxMnzchH.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/Ym4B6ntZAYyP2Ehs.jpg",
          "https://mstarimg.imlatin.com/P2jMcBK6NidC7ahA.jpg",
          "https://mstarimg.imlatin.com/M4CSzwYHmykcAdcK.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/HCiatx2bc3ahDkGx.jpg",
          "https://mstarimg.imlatin.com/rB7w6sGTZzRBTAB4.jpg",
          "https://mstarimg.imlatin.com/PRCDyJh83C8BdzJJ.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/PDfApz6t8HDKRkKR.jpg",
          "https://mstarimg.imlatin.com/YHAsarESCKrN7PTe.jpg",
          "https://mstarimg.imlatin.com/E3SfwYsZfTYyEcXH.jpg",
        ],
      ],
    },
  },
  {
    season: "21AW",
    img: "https://mstarimg.imlatin.com/YDKsBFdNksm2Mr33.jpg",
    icon: "https://mstarimg.imlatin.com/eMcMMbDcRfcD44Ni.png",
    text: `2021秋冬，M.latin在韦斯·安德森的动画电影《了不起的狐狸爸爸》与自编自导的剧情电影《月升王国》里面汲取元素，一起通过色彩、图案以及幽默好玩的细节感受独特的韦斯.安德森。`,
    imgList: {
      bigKids: [
        [
          `https://mstarimg.imlatin.com/Bda2eFMYMSGZw8ft.jpg`,
          "https://mstarimg.imlatin.com/fERYjmzGX2biAKJ6.jpg",
          "https://mstarimg.imlatin.com/CFpEjxapbZsmt4hR.jpg",
        ],
        [
          `https://mstarimg.imlatin.com/HrkrEEdZzMdi4hkT.jpg`,
          `https://mstarimg.imlatin.com/DSh4X2nDzMdBSzAn.jpg`,
          `https://mstarimg.imlatin.com/bnewd7NxXiHTiNbA.jpg`,
        ],
        [
          "https://mstarimg.imlatin.com/CrbRrwjz6bicckyc.jpg",
          "https://mstarimg.imlatin.com/CFePwQnFPJ3Pss5d.jpg",
          "https://mstarimg.imlatin.com/tCwm4753jJ2JeiBM.jpg",
        ],
        [
          `https://mstarimg.imlatin.com/3tABWaBYatC5YCFh.jpg`,
          `https://mstarimg.imlatin.com/KtnfCtXytz2PfTZx.jpg`,
          `https://mstarimg.imlatin.com/NxXihRk5KRKXeXQD.jpg`,
        ],
      ],
      smallKids: [
        [
          "https://mstarimg.imlatin.com/fE4nHyFSiRFki3z7.jpg",
          "https://mstarimg.imlatin.com/FDHNPzr3r2YjbKnB.jpg",
          "https://mstarimg.imlatin.com/TyhxyxJbM6pd8Pif.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/cHTradDkP7D8pQdz.jpg",
          "https://mstarimg.imlatin.com/xAYbSpybCRAtse3y.jpg",
          "https://mstarimg.imlatin.com/M4bKsaNKGCf44ztP.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/f8BjSbReQaFi5fCZ.jpg",
          "https://mstarimg.imlatin.com/cSnxEYpwxAyFS5EN.jpg",
          "https://mstarimg.imlatin.com/BR5Fh3crrDGFzWs3.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/Nmxjd2C6XjB8Qkd8.jpg",
          "https://mstarimg.imlatin.com/6syMa8arJz4pf8zM.jpg",
          "https://mstarimg.imlatin.com/KG3XfAh2EJiTwTQ4.jpg",
        ],
      ],
      coolkids: [
        [
          "https://mstarimg.imlatin.com/kcKTRFD5tCimxxjX.jpg",
          "https://mstarimg.imlatin.com/kXahKFKBHjdYw8ad.jpg",
          "https://mstarimg.imlatin.com/rRZaRiAwJCN7WcJC.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/iSAB583sZ8sAYJCr.jpg",
          "https://mstarimg.imlatin.com/eyjYdexebscSzEfh.jpg",
          "https://mstarimg.imlatin.com/kmDS53R5NZatwfc5.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/s3xCrbHRzzztACCW.jpg",
          "https://mstarimg.imlatin.com/AeHxcDyfcsYRwaxJ.jpg",
          "https://mstarimg.imlatin.com/Aw4A6TC3aBtdj3A3.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/z7kED65N4bGH8F85.jpg",
          "https://mstarimg.imlatin.com/7mfDFSdZ3PEiG553.jpg",
          "https://mstarimg.imlatin.com/eyYnRfZkXFN2N2hT.jpg",
        ],
      ],
    },
  },
  {
    season: "21SS",
    img: "https://mstarimg.imlatin.com/TPzrnWJR43Rm3pRa.jpg",
    icon: "https://mstarimg.imlatin.com/jxJjAWSMfrHF7nSs.png",
    text: `觉醒，爱。
    在孩提时代，我们不知道，我们对树木、河流和飞禽的爱也叫爱。
    在我七岁的时候，菩提树、橡树、枫树就那么存在着。
    现在，我知道，它们有可能不存在，它们的命运跟人有关。
    在课堂上，不管老师唠叨什么，我都不会听，我总是在笔记本上描画着自己的理想国......`,
    imgList: {
      bigKids: [
        [
          `https://mstarimg.imlatin.com/kwjjQkRX4zHNyddf.jpg`,
          `https://mstarimg.imlatin.com/faMeaFhh4JKyjGQE.jpg`,
          `https://mstarimg.imlatin.com/fS6rGCE3mNiDNPdb.jpg`,
        ],
        [
          `https://mstarimg.imlatin.com/mxmtZfFhZWaWemYQ.jpg`,
          `https://mstarimg.imlatin.com/Ynrr5tfhtMJCm64x.jpg`,
          `https://mstarimg.imlatin.com/XwWXtXnXPcss3hfF.jpg`,
        ],
        [
          `https://mstarimg.imlatin.com/aS8BkCZws4WhkSFm.jpg`,
          `https://mstarimg.imlatin.com/4M46pcBRFFQw57hF.jpg`,
          `https://mstarimg.imlatin.com/CYJC848yxc76ePtQ.jpg`,
        ],
        [
          `https://mstarimg.imlatin.com/8ahT4mtGjKA35NkZ.jpg`,
          `https://mstarimg.imlatin.com/EDMnf8sGd7x8MPFz.jpg`,
          `https://mstarimg.imlatin.com/wrFpGxAhxeHappzn.jpg`,
        ],
      ],
      smallKids: [
        [
          "https://mstarimg.imlatin.com/zjZS6FACSNTMDydn.jpg",
          "https://mstarimg.imlatin.com/kEWfAfsPmBEZHBGQ.jpg",
          "https://mstarimg.imlatin.com/7fD8EDSMeWkHn7yd.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/yWfhYHfpEaerMhkz.jpg",
          "https://mstarimg.imlatin.com/SPxTZnjCi6yzhdKS.jpg",
          "https://mstarimg.imlatin.com/H85EwiYbGyynG62w.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/ADhYjTBiYzNMyKhx.jpg",
          "https://mstarimg.imlatin.com/mWwhsMG4NrDXCkyZ.jpg",
          "https://mstarimg.imlatin.com/FaJeesn5KZQY2Jfc.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/YcirSpW3Rw5y7Z52.jpg",
          "https://mstarimg.imlatin.com/pPn82aX4WfHmHaMz.jpg",
          "https://mstarimg.imlatin.com/azyZykPCSQw4EDyW.jpg",
        ],
      ],
      coolkids: [
        [
          "https://mstarimg.imlatin.com/KKdQhMfnh4yfBpdY.jpg",
          "https://mstarimg.imlatin.com/5YG26Dj8yaTTN57x.jpg",
          "https://mstarimg.imlatin.com/YpN86H8nXXfJK58d.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/iS7ibDQWa7McpPZK.jpg",
          "https://mstarimg.imlatin.com/fsR5mWK2CbQQBYTn.jpg",
          "https://mstarimg.imlatin.com/j5sQPEd7bbT23RRY.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/dHTrkBFMGFaKiX4S.jpg",
          "https://mstarimg.imlatin.com/2a6GYhSknm8Nx4ac.jpg",
          "https://mstarimg.imlatin.com/zEA4tPM5HYTFn8w4.jpg",
        ],
        [
          "https://mstarimg.imlatin.com/zTKX2JES5yYPH8f6.jpg",
          "https://mstarimg.imlatin.com/Zyd2DSEti6xfC5n2.jpg",
          "https://mstarimg.imlatin.com/tdKw7zwCr2prkS4S.jpg",
        ],
      ],
    },
  },
  {
    season: "20AW",
    img: "https://mstarimg.imlatin.com/f67EeRSwXrDs8Emr.jpg",
    icon: "https://mstarimg.imlatin.com/zhZ85dWN8pGfBwkX.png",
    text: `更深的意义寓于我童年听到的童话故事之中
    而不是生活交给我的真理之中。
    童话从来都不是在遥远的地方古老的时代发生的
    它对应着我们内心的真实。
    太阳以东，月亮以西，童话其实从来不骗人。`,
    imgList: {
      bigKids: [
        [
          `https://mstarimg.imlatin.com/SGQZ2Xxc5yedpeBs.jpg`,
          `https://mstarimg.imlatin.com/eMSET7JjSBhYbnT8.jpg`,
          `https://mstarimg.imlatin.com/7eeWt4eyFZdJQ3A3.jpg`,
        ],
        [
          `https://mstarimg.imlatin.com/37Ahja3wATimrESw.jpg`,
          `https://mstarimg.imlatin.com/ktjYYPhasedBpC8r.jpg`,
          `https://mstarimg.imlatin.com/5QPET7GYmjJa8m84.jpg`,
        ],
        [
          `https://mstarimg.imlatin.com/QjfW23aGP5JiRfGY.jpg`,
          `https://mstarimg.imlatin.com/zcNHGFYGXJF7m6BD.jpg`,
          `https://mstarimg.imlatin.com/wwDs8EtPcXQHy5z3.jpg`,
        ],
        [
          `https://mstarimg.imlatin.com/rPAtT7d4T62Zbapb.jpg`,
          `https://mstarimg.imlatin.com/hAGfhG6wNQspHsMR.jpg`,
          `https://mstarimg.imlatin.com/ZXdXiBBNHPbEmMdf.jpg`,
        ],
      ],
      smallKids: [[], [], [], []],
      coolkids: [[], [], [], []],
    },
  },
];

const LookDetail = () => {
  const [seasonOfChoice, setSeasonOfChoice] = useState("22SS");
  const [size, setSize] = useState("大童");
  const [isSpread, setisSpread] = useState(false);
  const [kidsChoice, setKidsChoice] = useState("bigKids");
  const [flag, setFlag] = useState(false);
  const [height, setHeight] = useState(0);
  const [sizeList, setSizeList] = useState([
    { title: "大童", size: "bigKids" },
    { title: "小童", size: "smallKids" },
    { title: "潮童", size: "coolkids" },
  ]);
  const page = useRef(0);
  const listDom = useRef(null);
  // 获取query
  const router = useRouter();
  useEffect(() => {
    // SwiperCore.use([Mousewheel]);
    // console.log();
    const seasonFromRouter = router?.query?.season || "22SS";
    setSeasonOfChoice(seasonFromRouter);

    // window.addEventListener("resize", handleScroll);
    // return () => window.removeEventListener("resize", handleScroll);
    setHeight(window.innerHeight);
  });

  useEffect(() => {
    if (seasonOfChoice == "20AW")
      setSizeList([{ title: "大童", size: "bigKids" }]);
  }, [seasonOfChoice]);

  const { season, img, icon, text, imgList } = list.find(
    (value) => value.season == seasonOfChoice
  );

  const handleSpread = () => {
    setisSpread(!isSpread);
  };

  const chooseSize = (title, size) => {
    setSize(title);
    setisSpread(false);
    setKidsChoice(size);
  };

  const handleScroll = (e) => {
    // console.log(scroll);
    // list.scrollIntoView();
    // console.log(listDom.current);
    // const clientHeight = document.documentElement.clientHeight;
    // console.log(e);
    // const scrollTop = e.target.scrollingElement.scrollTop;
    // if (scrollTop > 0 && scrollTop < clientHeight) {
    //   listDom.current.scrollIntoView({ behavior: "smooth" });
    //   listDom.current.scrollIntoView();
    // }
    // window.scrollTo({
    //   top: 989,
    //   behavior: "smooth",
    // });
  };

  return (
    <div className={styles.lookdetail} ref={page}>
      {/* <div> */}
      <div className={styles.header_container}>
        <div className={styles.header}>
          <img className={styles.header_img} src={img}></img>
          <div className={styles.text}>
            <div className={styles.title}>
              <span>{season}</span>
              <img src={icon} />
            </div>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div className={styles.list_container} id="list" ref={listDom}>
        <div className={styles.size} onClick={handleSpread}>
          <span>{size}</span>
          <img
            className={`${styles.arrow} ${
              isSpread ? styles.spread : styles.select_hidden
            }`}
            src={"/img/arrow.png"}
          />
        </div>
        <ul
          className={`${styles.select} ${
            isSpread ? styles.visible : styles.hidden
          }`}
        >
          {sizeList.map(({ title, size }) => (
            <li key={title}>
              <a onClick={() => chooseSize(title, size)}>{title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.list_kids}>
          {imgList[kidsChoice].map((ul) => (
            <ul className={styles.list_ul} key={ul[0]}>
              {ul.length > 0 &&
                ul.map((url) => (
                  <li key={url}>
                    <img className={styles.img} src={url} />
                  </li>
                ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );

  // return (
  // <Swiper
  //   direction={"vertical"}
  //   // mousewheel={{ releaseOnEdges: true }}
  //   mousewheel={true}
  //   autoHeight={true}
  //   height={height}
  //   speed={500}
  // >
  //   <SwiperSlide>
  //     <div className={styles.header_container}>
  //       <div className={styles.header}>
  //         <img className={styles.header_img} src={img}></img>
  //         <div className={styles.text}>
  //           <div className={styles.title}>
  //             <span>{season}</span>
  //             <img src={icon} />
  //           </div>
  //           <p>{text}</p>
  //         </div>
  //       </div>
  //     </div>
  //   </SwiperSlide>
  //   <SwiperSlide>
  //     <div
  //       style={{
  //         height: `100vh`,
  //         overflowY: `scroll`,
  //       }}
  //     >
  //       <div className={styles.list_container} id="list" ref={listDom}>
  //         <div className={styles.size} onClick={handleSpread}>
  //           <span>{size}</span>
  //           <img
  //             className={`${styles.arrow} ${
  //               isSpread ? styles.spread : styles.select_hidden
  //             }`}
  //             src={"/img/arrow.png"}
  //           />
  //         </div>
  //         <ul
  //           className={`${styles.select} ${
  //             isSpread ? styles.visible : styles.hidden
  //           }`}
  //         >
  //           {sizeList.map(({ title, size }) => (
  //             <li>
  //               <a onClick={() => chooseSize(title, size)}>{title}</a>
  //             </li>
  //           ))}
  //         </ul>
  //         <div className={styles.list_kids}>
  //           {imgList[kidsChoice].map((ul) => (
  //             <ul className={styles.list_ul} key={ul[0]}>
  //               {ul.map((url) => (
  //                 <li key={url}>
  //                   <img className={styles.img} src={url} />
  //                 </li>
  //               ))}
  //             </ul>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </SwiperSlide>
  // </Swiper>
  // );
};

export default LookDetail;
