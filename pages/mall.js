import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../src/components/Map"), { ssr: false });
import NavbarForShow from "../src/components/NavbarForShow";

import styles from "../styles/mall.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <img src="https://img.withmeclub.com/rc-upload-1640941271538-9-8301622195/0.7499446217963728" />
      </div>
      <div className={styles.right}>
        <div>
          <img src="https://img.withmeclub.com/rc-upload-1640941271538-10-2300718807/0.5545847033593512" />
          <img src="https://img.withmeclub.com/rc-upload-1640941271538-12-6036832955/0.7251518798908292" />
        </div>
        <div>
          <img src="https://img.withmeclub.com/rc-upload-1640941271538-13-2745921756/0.27745601541938547" />
          <img src="https://img.withmeclub.com/rc-upload-1640941271538-14-3337701174/0.003636656491932344" />
        </div>
      </div>
    </div>
  );
};

const Mall = () => {
  const indexFromRouter = useRouter()?.query?.index;
  const [index, setIndex] = useState(indexFromRouter || 0);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div className={styles.container}>
      <NavbarForShow
        titleList={["店铺展示", "店铺分布"]}
        color="black"
        choice={index}
        changeIndex={handleClick}
      />
      {index == 0 ? <Content /> : index == 1 ? <Map /> : null}
    </div>
  );
};

export default Mall;
