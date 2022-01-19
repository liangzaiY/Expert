import { useState } from "react";
import Link from "next/link";

import styles from "../styles/contact.module.css";

const Back = () => {
  return (
    <Link href={"/"}>
      <div className={styles.back}>
        <img className={styles.backimg} src={"/img/more.png"}></img>
        <span>BACK</span>
      </div>
    </Link>
  );
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (isVisible) => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.container}>
      <Back />
      <div className={styles.left}>
        <img src="https://img.withmeclub.com/rc-upload-1641437429282-4-3747327171/0.551887291894237" />
      </div>
      <div className={styles.right}>
        <div className={styles.text}>
          <p className={styles.chinese}>
            {`原创设计师童装品牌，来自生活和大自然的想象力与创造力温暖
          的插画绘本。尊重儿童的个体和特质，强调孩子心灵的陪伴。
          温暖，趣味，成长。`}
          </p>
          <p className={styles.english}>
            {`The original designer children’s clothing brand, comes from the life and the nature imagination and the creativity warm
        illustration picture book. Respect children’s individuality and idiosyncrasy,emphasize the accompany of children’s soul. 
          Warmth, fun, growth.`}
          </p>
          <div className={styles.contactus}>CONTACT US</div>
        </div>
        <div className={styles.socialaccount}>
          <div>
            <Link href={"https://weibo.com/2312869064/profile?topnav=1&wvr=6"}>
              <div className={styles.item}>
                <div>
                  <img src="/img/wb.png" />
                </div>
                <span>@马拉丁_Mlatin</span>
              </div>
            </Link>
          </div>
          <div>
            <div className={`${styles.item} ${styles.wxbox}`}>
              <img
                style={{
                  width: "1.2rem",
                  visibility: `${isVisible ? "visible" : "hidden"}`,
                }}
                className={styles.qrcode}
                src="https://mstarimg.imlatin.com/G4xYb5imt5iK2my8.png_720x720g"
              />
              <div onClick={() => handleClick(isVisible)}>
                <img src="/img/vx.png" />
              </div>
              <span>马拉丁小马帮</span>
            </div>
          </div>
          <div>
            <Link
              href={
                "https://mlatin.tmall.com/view_shop.htm?spm=a220o.1000855.w20280620-22481643025.3.71d9374cntA2T9&shop_id=62379610&scm=1048.1.1.12&rn=b70eb23de917cbf398e6110a27f48201&scene=taobao_shop"
              }
            >
              <div className={styles.item}>
                <div>
                  <img src="/img/tm.png" />
                </div>
                <span>mlatin.tmall.com</span>
              </div>
            </Link>
          </div>
          <div>
            <Link
              href={
                "https://www.xiaohongshu.com/user/profile/5c8a14410000000016002256?xhsshare=CopyLink&appuid=5c8a14410000000016002256&apptime=1641458353"
              }
            >
              <div className={styles.item}>
                <div>
                  <img src="/img/xhs.png" />
                </div>
                <span>#小红书#马拉丁</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
