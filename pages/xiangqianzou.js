import NavbarForShow from "../src/components/NavbarForShow";
import Explore from "../src/components/explore";

import styles from "../styles/xiangqianzou.module.css";

const exploreList = [
  [
    {
      pre: `2015.05｜`,
      title: `发起小马公益`,
      img: "https://mstarimg.imlatin.com/xAfWaxRMsQeZ22af.jpg",
    },
    {
      pre: `2018.01｜`,
      title: `小马公益联合`,
      img: "https://mstarimg.imlatin.com/n2nYZ28JBR4nyY6W.jpg",
    },
  ],
  [
    {
      pre: `2015.08｜`,
      title: `小马公益正式成立`,
      img: "https://mstarimg.imlatin.com/FHh4CrMxDsmCbih5.jpg",
    },
    {
      pre: `2018.10｜`,
      title: `“向前走”暖暖校服走进四川叙永`,
      img: "https://mstarimg.imlatin.com/7PDJNhkdGdrNJz4X.jpg",
    },
  ],
  [
    {
      pre: `2015.09｜`,
      title: `小马公益走进大凉山`,
      img: "https://mstarimg.imlatin.com/6RB7Fxyw45RmBd3d.jpg",
    },
    {
      pre: `2016.07｜`,
      title: `小马公益发起“益本书”活动`,
      img: "https://mstarimg.imlatin.com/iwJbyWdPeeYaAhms.jpg",
    },
    {
      pre: `2019.05｜`,
      title: `小马粉丝走进叙永`,
      img: "https://mstarimg.imlatin.com/2peFBDpAm7QaHAXh.jpg",
    },
  ],
  [
    {
      pre: `2016.03｜`,
      title: `小马公益拨款捐赠大凉山校舍`,
      img: "https://mstarimg.imlatin.com/SBMsmB3z2aBF7bQM.jpg",
    },
    {
      pre: `2017.05｜`,
      title: `小马公益发起六一特别企划活动，捐赠六一新衣和祝福卡片`,
      img: "https://mstarimg.imlatin.com/yxiRBJyd6GiD466t.jpg",
    },
  ],
];

const XiangQianZou = () => (
  <div className={styles.container}>
    <NavbarForShow className={styles.navbar} titleList={["向前走公益"]} />
    <div>
      <img
        style={{ width: "100%" }}
        src={
          "https://img.withmeclub.com/rc-upload-1641716748223-2-2708644036/0.54064468258025"
        }
      />
    </div>
    <Explore list={exploreList} name="向前走公益" preSize={0.26} />
  </div>
);

export default XiangQianZou;
