import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SeasonImg from "../src/components/SeasonImg";
import styles from "../styles/imagedisplay.module.css";
const season = ["22SS", "21AW", "21SS", "20AW"];

const list = [
  {
    season: "22ss",
    videoSrc:
      "https://img.withmeclub.com/rc-upload-1639549901785-6-7259413058/0.022758390318065258",
    img: "https://mstarimg.imlatin.com/bhdtsaBjhspmKrrN.jpg",
    imgList: [
      "https://mstarimg.imlatin.com/X8kaetCDh8ihQt6h.jpg",
      "https://mstarimg.imlatin.com/fw3pXhydcHGn4Ak3.jpg",
      "https://mstarimg.imlatin.com/WjiRZ2EaZEKFf6S6.jpg",
    ],
  },
  {
    season: "21aw",
    videoSrc:
      "https://img.withmeclub.com/rc-upload-1639549901785-5-6052703172/0.9648884775813926",
    img: "https://mstarimg.imlatin.com/Ydx6PZPEzi3ZiSx6.jpg",
    imgList: [
      "https://mstarimg.imlatin.com/Pzb3xjT63bhWxBTC.jpg",
      "https://mstarimg.imlatin.com/PtdXwX3zGn4Gc4MS.jpg",
      "https://mstarimg.imlatin.com/f34RNTsjGNeNjpxn.jpg",
    ],
  },
  {
    season: "21ss",
    videoSrc:
      "https://img.withmeclub.com/rc-upload-1639549901785-4-3713649738/0.026301859019763896",
    img: "https://mstarimg.imlatin.com/CY5aWzdPkw2pBANx.jpg",
    imgList: [
      "https://mstarimg.imlatin.com/DQnSZQiBm4a3xGzi.jpg",
      "https://mstarimg.imlatin.com/Yh6EQNmQKydsmN56.jpg",
      "https://mstarimg.imlatin.com/ffryNwTY5bxGJYMB.jpg",
    ],
  },
  {
    season: "20aw",
    videoSrc:
      "https://img.withmeclub.com/rc-upload-1639549901785-3-6646149694/0.4470725282026542",
    img: "https://mstarimg.imlatin.com/YDiKAxancMcfYJKA.jpg",
    imgList: [
      "https://mstarimg.imlatin.com/mTNZpWnDipPEGhaB.jpg",
      "https://mstarimg.imlatin.com/jQrwpxb5WY7Ry2Je.jpg",
      "https://mstarimg.imlatin.com/kkADakjR6idpstfx.jpg",
    ],
  },
];

const ImageDisplay = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const { videoSrc, img, imgList } = list[index];

  useEffect(() => {
    setIndex(router?.query?.season || 0);
  }, []);

  const changeIndex = (index) => {
    setIndex(index);
  };

  return (
    <div>
      <ul className={styles.ulbox}>
        {season.map((item, i) => (
          <li className={styles.libox} key={String(item)}>
            <a
              className={`${index == i ? styles.underscore : null}`}
              onClick={() => changeIndex(i)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      {/* 给视频设置缓存 */}
      <video
        className={styles.video}
        controls
        autoPlay={true}
        crossOrigin="anonymous"
        preload="metadata"
        // loop={true}
        poster={img}
        src={videoSrc}
      ></video>
      <SeasonImg imgList={imgList} />
    </div>
  );
};

export default ImageDisplay;
