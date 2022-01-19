import { useState, useRef, useEffect } from "react";

import styles from "../styles/story.module.css";

const storyList = {
  mlatin: {
    logo: "/img/mlt.png",
    imgsrc: "https://mstarimg.imlatin.com/Ah3pJPT3JFntPPnZ.latin",
    text: `上海博越服饰有限公司，成立于2004年一直专注于儿童服饰的设计
    与经营零售。是一家集设计、开发生产销售为一体的原创设计师童装
    品牌。旗下拥有趣味设计师童装品牌M.latin(马·拉丁)及零售与体验
    一体的旗舰店 with me with M.latin。`,
  },
  withme: {
    logo: "/img/wm.png",
    imgsrc: "https://mstarimg.imlatin.com/YpPWRmHiECQkXQe3.jpg",
    text: `关注孩子的陪伴与成长，
    致力于打造一个满足好奇、激发想象、鼓励创造的发生地，
    回应童年的各种奇思妙想。
    在with me，我们有小马探索营、成长纪念日、小小设计师
    手作灵感屋等充满趣味的体验模块，欢迎来玩耍～`,
  },
  mhj: {
    logo: "/img/MHJ.png",
    imgsrc: "https://mstarimg.imlatin.com/HEaTATfEcPd3MiYE.jpg",
    text: `MANHOJIA （曼花家）是马.拉丁旗下的新生代原创设计师品牌。
    品牌以“熊朋友”为原型，创造的自有虚拟形象“HOHO”熊以及他的
    好朋友们。为正在“好奇探索期”和“成长矛盾期”的3-14的儿童和
    家长们展现一个勇敢，乐观，率性的元气小孩的形象。“熊朋友”
    亦是家长们以朋友的平等可视的态度与孩子相处。`,
  },
};

const nameList = [`With me`, `MANHOJIA+`];

const Story = () => {
  const [storyItem, setStoryItem] = useState("mlatin");
  const [isSpread, setIsSpread] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isBackActive, setIsBackActive] = useState(false);
  const [isLiActive, setIsLiActive] = useState(false);
  const refContainer = useRef(null);
  useEffect(() => {
    refContainer.current.addEventListener("touchstart", function () {});
    return () => {};
  }, []);

  const backTomlt = () => {
    setStoryItem("mlatin");
    setIsBackActive(true);
    setIsActive(false);
  };

  const More = ({ isSpread }) => {
    return (
      <div
        className={`${styles.more} ${isActive ? styles.active : null}`}
        onClick={() => {
          setIsSpread(!isSpread);
          setIsActive(true);
        }}
      >
        <span>MORE</span>
        <img src={"/img/more.png"} />
      </div>
    );
  };

  const Back = () => {
    return (
      <div
        className={`${styles.back} ${isBackActive ? styles.active : null}`}
        onClick={backTomlt}
      >
        <img className={styles.backimg} src={"/img/more.png"}></img>
        <span>BACK</span>
      </div>
    );
  };

  const changeStoryItem = (name) => {
    setIsSpread(false);
    setStoryItem(name == `With me` ? "withme" : "mhj");
    setIsLiActive(true);
    setIsBackActive(false);
  };

  const { logo, imgsrc, text } = storyList[storyItem];
  return (
    <div className={styles.container} ref={refContainer}>
      <div className={styles.content}>
        <img src={imgsrc}></img>
        <div className={styles.text_container}>
          <div className={styles.text}>
            <img className={styles.title} src={logo}></img>
            <div className={styles.introduce}>{text}</div>
          </div>
        </div>
      </div>
      <div className={styles.select}>
        {/* more和back组件 */}
        {storyItem == "mlatin" ? <More isSpread={isSpread} /> : <Back />}
        <ul className={`${isSpread ? styles.visible : styles.hidden}`}>
          {nameList.map((name) => (
            <li
              className={`${isLiActive ? styles.active : null}`}
              key={String(name)}
              onClick={() => changeStoryItem(name)}
            >
              <a>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Story;
