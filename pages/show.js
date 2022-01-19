import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";
// import Swiper from "swiper";
import Slider from "../src/components/slider";
import Explore from "../src/components/explore";
import NavbarForShow from "../src/components/NavbarForShow";

import "swiper/css";
// install Swiper modules
SwiperCore.use([Mousewheel]);

import styles from "../styles/show.module.css";

const list = [
  {
    title: `2021 狂爱M.latin`,
    imgurl: "https://mstarimg.imlatin.com/ebPC76HJnfCZFbYp.latin",
  },
  {
    title: `西湖音乐节   “嘿！小孩”市集`,
    imgurl: "https://mstarimg.imlatin.com/MGetec256PXDbxf8.jpg",
  },
  {
    title: `和创园   “嘿！小孩”六一亲子市集`,
    imgurl: "https://mstarimg.imlatin.com/Z3CyCXWECbNH4Qwy.jpg",
  },
];

const exploreList = [
  [
    {
      pre: `小马粉丝节｜`,
      title: `狂爱！春天`,
      img: "https://mstarimg.imlatin.com/hPFyihjPdXBhQ3bn.jpg",
    },
    {
      pre: `小马探索营｜`,
      title: `狄原美术馆一日艺术游`,
      img: "https://mstarimg.imlatin.com/xFAm3cbZz8kyadar.jpg",
    },
    {
      pre: `小马探索营｜`,
      title: `宝石山探秘`,
      img: "https://mstarimg.imlatin.com/QDZP8YzaK3MSesE4.jpg",
    },
  ],
  [
    {
      pre: ` 小马探索营｜`,
      title: `不负春光不负卿`,
      img: "https://mstarimg.imlatin.com/PQMxZw7TbyR7xCz3.jpg",
    },
    {
      pre: `星球照相馆｜`,
      title: `星品领航员`,
      img: "https://mstarimg.imlatin.com/EbZDz8iGQG27afkF.jpg",
    },
  ],
  [
    {
      pre: `文创活动｜`,
      title: `妈妈！送您一朵花花`,
      img: "https://mstarimg.imlatin.com/8aHnEnWkZFGNpd66.jpg",
    },
    {
      pre: `文创活动｜`,
      title: `蓝染手工业艺`,
      img: "https://mstarimg.imlatin.com/itSGTT3Ydxb4NQr8.jpg",
    },
    {
      pre: `文创活动｜`,
      title: `宇宙大爆炸读书会`,
      img: "https://mstarimg.imlatin.com/siKE6S8pkpMMAK3Z.jpg",
    },
  ],
  [
    {
      pre: `小马探索营｜`,
      title: `星空露营寻觅之旅`,
      img: "https://mstarimg.imlatin.com/5QAFbJxBMGZCCYZd.jpg",
    },
    {
      pre: `快闪｜`,
      title: `宇宙大爆炸`,
      img: "https://mstarimg.imlatin.com/E54aZwxcst43dHAm.jpg",
    },
    {
      pre: `成长纪念日｜`,
      title: `一起来玩YA`,
      img: "https://mstarimg.imlatin.com/nt3CR3MTmi6GmpQE.jpg",
    },
  ],
];

const sliderProps = {
  list,
};

const eventlist = [
  {
    title: "SHOW",
    video:
      "https://img.withmeclub.com/rc-upload-1640749295609-2-1828324648/0.9220572062034853",
    poster: "https://mstarimg.imlatin.com/3WExCpzxADwp33Ak.jpg",
  },
  {
    title: "小马探索营",
    video:
      "https://img.withmeclub.com/rc-upload-1640749295609-4-9576877364/0.32731947822892193",
    poster: "https://mstarimg.imlatin.com/4niNHACEQyynFeh2.jpg",
  },
];

// 如果从activity页面跳转回来保持index不变，在activity页面增加跳转按钮，携带query {index=1}
const Show = () => {
  const indexFromRouter = useRouter()?.query?.index || 0;
  const [height, setHeight] = useState(0);
  const [index, setIndex] = useState(indexFromRouter);
  useEffect(() => {}, []);

  useEffect(() => {
    setHeight(window.innerHeight);
    return () => {};
  }, []);

  // console.log(eventlist[index].title);

  const { title, video, poster } = eventlist[index];

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <div className={styles.container}>
      {/* <Swiper
        direction={"vertical"}
        height={height}
        autoHeight={true}
        mousewheel={{ releaseOnEdges: true }}
        speed={500}
      >
        <SwiperSlide> */}
      <NavbarForShow
        titleList={["SHOW", "小马探索营"]}
        choice={index}
        changeIndex={handleChangeIndex}
        color={"#fff"}
      />
      <div className={styles.video_container}>
        {/* <div style={{ height: `100vh`, overflow: "hidden" }}> */}

        <video
          className={styles.video}
          controls
          src={video}
          poster={poster}
          autoPlay={true}
        ></video>
        {/* </div> */}
      </div>
      {/* </SwiperSlide> */}

      {/* <SwiperSlide> */}
      {title == "SHOW" ? (
        <Slider {...sliderProps} />
      ) : (
        <Explore list={exploreList} />
      )}
      {/* </SwiperSlide> */}
      {/* </Swiper> */}
    </div>
  );
};

export default Show;
