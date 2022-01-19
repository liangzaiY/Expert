import { useState } from "react";
import Link from "next/link";

import styles from "./slider.module.css";

// 规定list结构 [{ title: string, imgurl: string,}]
const Slider = ({
  list = [],
  query = "",
  param = "",
  url = "",
  margin = 0.2,
  listContainerWidth = 17.2,
  imgWidth = 5.6,
}) => {
  const [index, setIndex] = useState(0);
  const [last, setLast] = useState(false);
  const slider = () => {
    index == list.length - 1 ? setIndex(0) : setIndex(index + 1);
    setLast();
  };

  const containerStyles = { width: `${listContainerWidth}rem` };
  return (
    <div
      className={styles.container}
      style={{ width: `${listContainerWidth}rem` }}
    >
      <div className={styles.next} onClick={slider}>
        <span className={styles.left}>NEXT</span>
        <span>{`>`}</span>
      </div>
      <div className={styles.list_container} style={containerStyles}>
        <ul
          className={styles.list}
          style={{
            // width list.length*(图片宽度+margin)
            width: `${list.length * (margin + imgWidth)}rem`,
            transform: `translateX(-${(1 / list.length) * 100 * index}%)`,
          }}
        >
          {list.map(({ title, imgurl }) => (
            <li key={String(title)} style={{ marginRight: `${margin}rem` }}>
              <Link href={`/${url}?${query}=${param}`}>
                <div className={styles.item}>
                  <img src={imgurl} style={{ width: `${imgWidth}rem` }} />
                  <span>{title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
