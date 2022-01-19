import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "../styles/activity.module.css";

const list = [
  {
    title: `宝石山探秘`,
    imgList: [
      "https://mstarimg.imlatin.com/R2ahd8SRNbEdXGxs.jpg",
      "https://mstarimg.imlatin.com/arftfizDbNjiHEMW.jpg",
      "https://mstarimg.imlatin.com/hwYHGp8yt7DGY8Wn.jpg",
      "https://mstarimg.imlatin.com/2BnMBjTZFWkPbK5C.jpg",
      "https://mstarimg.imlatin.com/er7czK5KKyiYG56K.jpg",
      "https://mstarimg.imlatin.com/3sc4GamKNjGXPSTE.jpg",
      "https://mstarimg.imlatin.com/WXMc5QijBWZ4BA8N.jpg",
      "https://mstarimg.imlatin.com/phjC5w7ZGKZG3wnw.jpg",
      "https://mstarimg.imlatin.com/mrHZYWNsnCCaSyfz.jpg",
    ],
  },
  {
    title: `不负春光不负卿`,
    imgList: [
      "https://mstarimg.imlatin.com/AjwsmSNkdYjXBEwp.jpg",
      "https://mstarimg.imlatin.com/btZwJdjMNsGFzZiW.jpg",
      "https://mstarimg.imlatin.com/Bc23wQ5jjj22p6Nj.jpg",
      "https://mstarimg.imlatin.com/YnczxB2Xeisa56ZP.jpg",
      "https://mstarimg.imlatin.com/XTSKka3Twj6RbefM.jpg",
      "https://mstarimg.imlatin.com/GMkwfYNE3Qj5NXiA.jpg",
      "https://mstarimg.imlatin.com/7SnXb5dmckxQrxfs.jpg",
      "https://mstarimg.imlatin.com/p6KyYdQzJSsEXxPP.jpg",
      "https://mstarimg.imlatin.com/Bb3YMN7FkPYS2PQi.jpg",
      "https://mstarimg.imlatin.com/SQYTXGKBkYFsxQaW.jpg",
      "https://mstarimg.imlatin.com/BXSb64rZrkTYAWRr.jpg",
      "https://mstarimg.imlatin.com/iMepTtpJQQ2i2RmB.jpg",
      "https://mstarimg.imlatin.com/QCRAMEtTKpiYXKn8.jpg",
      "https://mstarimg.imlatin.com/nSj5dZ8fGGS6Jx7P.jpg",
      "https://mstarimg.imlatin.com/px7dtRCJeCd3f5zf.jpg",
      "https://mstarimg.imlatin.com/zartbCRwk2fZFMPm.jpg",
      "https://mstarimg.imlatin.com/ePT4jfjkF8cyEMAB.jpg",
      "https://mstarimg.imlatin.com/C6xaGZy5wYjpCwiX.jpg",
      "https://mstarimg.imlatin.com/QZM3ExeyzA3SpxkH.jpg",
      "https://mstarimg.imlatin.com/TYkdrfdnPmwWfdSi.jpg",
    ],
  },
  {
    title: `狄原美术馆一日艺术游`,
    imgList: [
      "https://mstarimg.imlatin.com/WyJsXDwWW3w2Fk8e.jpg",
      "https://mstarimg.imlatin.com/KxEB7YYrdpapNJs6.jpg",
      "https://mstarimg.imlatin.com/rRAkmaaK7hH6WBsD.jpg",
      "https://mstarimg.imlatin.com/6HjNeeSjpCKFzPpk.jpg",
      "https://mstarimg.imlatin.com/ZSy4bJaGbcsQTb3A.jpg",
      "https://mstarimg.imlatin.com/hbwzKthtdpjdsRbF.jpg",
      "https://mstarimg.imlatin.com/6bWFsZfM63DYhDbw.jpg",
      "https://mstarimg.imlatin.com/Ghi3P7G3cyMNdjXX.jpg",
      "https://img.withmeclub.com/rc-upload-1640941271538-2-5614834151/0.27623993082063536",
    ],
  },
  {
    title: `星空露营寻觅之旅`,
    imgList: [
      "https://mstarimg.imlatin.com/hTDsWnEdyCcMr65X.jpg",
      "https://mstarimg.imlatin.com/GBy524pnNQcsJkAz.jpg",
      "https://mstarimg.imlatin.com/hNeW3kRYnX6JxPmA.jpg",
      "https://mstarimg.imlatin.com/iKWWesZdzWtEpa6P.jpg",
      "https://mstarimg.imlatin.com/5xPHknyzjFXyxJfr.jpg",
      "https://mstarimg.imlatin.com/Jk5xNChY2wS6WT5p.jpg",
      "https://img.withmeclub.com/rc-upload-1640749295609-4-9576877364/0.32731947822892193", //视频
      "https://mstarimg.imlatin.com/sGYSbGWj2pCJW2Ss.jpg",
      "https://mstarimg.imlatin.com/RjrEHcBYpyrsi4K8.jpg",
      "https://mstarimg.imlatin.com/24EExjz8WSPC8bxr.jpg",
      "https://mstarimg.imlatin.com/ZbeQSXfxkSHMdssJ.jpg",
      "https://mstarimg.imlatin.com/fBfm87ZFRmPTs76G.jpg",
      "https://mstarimg.imlatin.com/yxytf8hmfXyk4t48.jpg",
      "https://mstarimg.imlatin.com/7dKbmCAZQ4i5H3BQ.jpg",
      "https://mstarimg.imlatin.com/3SxK83wG2ywpAm4p.jpg",
      "https://mstarimg.imlatin.com/QkK2Arr8t2a7AbyC.jpg",
      "https://mstarimg.imlatin.com/Kf7XcRSwrYe7QSwc.jpg",
      "https://mstarimg.imlatin.com/y8zEJHKhtScMzwX8.jpg",
    ],
  },
  {
    title: "狂爱！春天",
    imgList: [
      "https://mstarimg.imlatin.com/fSaCDpFxiyZzGAnp.jpg",
      "https://mstarimg.imlatin.com/rYd3YXEbcpxtzKXm.jpg",
      "https://mstarimg.imlatin.com/W8KnBAxwxErh6Q62.jpg",
      "https://mstarimg.imlatin.com/53dirMaHd33kmMHt.jpg",
      "https://mstarimg.imlatin.com/s5BQcyEhiQQQmEi6.jpg",
      "https://mstarimg.imlatin.com/BtNRXPkAR3GRMmke.jpg ",
      "https://mstarimg.imlatin.com/QGJQFZKR8y5jkb4h.jpg",
      "https://mstarimg.imlatin.com/A2RyY6ab8HJXfMzX.jpg",
    ],
  },
  {
    title: "星品领航员",
    imgList: [
      "https://mstarimg.imlatin.com/xtbCEniidKHH3Mh3.jpg",
      "https://mstarimg.imlatin.com/xx3BQPNQ4zwampTW.jpg",
      "https://mstarimg.imlatin.com/Et6SySwxEKW6QRY7.jpg",
      "https://mstarimg.imlatin.com/WmT6YAzTTs8EMfR2.jpg",
      "https://mstarimg.imlatin.com/pXCGWKtAktcnSD5j.jpg",
      "https://mstarimg.imlatin.com/HwTJy6mcSChjKHXd.jpg",
      "https://mstarimg.imlatin.com/siJWx24T7FfzS4Ei.jpg",
      "https://mstarimg.imlatin.com/TJ2zAiapciBmJX7f.jpg",
      "https://mstarimg.imlatin.com/rr58hEn6zAwZrRnr.jpg",
      "https://mstarimg.imlatin.com/MeGXSiG6XCcBN6eB.jpg",
      "https://mstarimg.imlatin.com/XNCfrAhyCM7yhJhZ.jpg",
      "https://mstarimg.imlatin.com/xz5fGQCW24ZrZrCf.jpg",
      "https://mstarimg.imlatin.com/ZZCHMEYFQbW8m52P.jpg",
      "https://mstarimg.imlatin.com/JMhrRsH8xCi4N3Yj.jpg",
      "https://mstarimg.imlatin.com/Ni6nZBRXmKkHwNWK.jpg",
      "https://mstarimg.imlatin.com/C3NKd2zxtbbeJTmC.jpg",
      "https://mstarimg.imlatin.com/QXsJtdD3zbniCZ6R.jpg",
      "https://mstarimg.imlatin.com/HXNsxsKE4iPK4FW4.jpg",
      "https://mstarimg.imlatin.com/Rxf3HGNGzryrjrzZ.jpg",
      "https://mstarimg.imlatin.com/RBJScRTmmntxFans.jpg",
      "https://mstarimg.imlatin.com/SsyF45ZrWb33XpR3.jpg",
    ],
  },
  {
    title: "",
    imgList: [],
  },
  {
    title: "",
    imgList: [],
  },
  {
    title: "",
    imgList: [],
  },
  {
    title: "",
    imgList: [],
  },
  {
    title: "",
    imgList: [],
  },
];

const Activity = () => {
  const [currentTitle, setcurrentTitle] = useState("");
  const titleFromRouter = useRouter()?.query?.title;

  useEffect(() => {
    if (titleFromRouter) setcurrentTitle(titleFromRouter);
  });
  const { title, imgList } = list.find((item) => item.title == currentTitle);
  return (
    <div className={styles.container}>
      {imgList.map((src) => (
        <div className={styles.img_container} key={src}>
          {src.endsWith(".jpg") ? (
            <img src={src}></img>
          ) : (
            <video className={styles.video} src={src} controls />
          )}
        </div>
      ))}
    </div>
  );
};

export default Activity;
