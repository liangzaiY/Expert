import { useState } from "react";
import Link from "next/link";
import Navbar from "../src/components/Navbar.jsx";
import styles from "../styles/look.module.css";

const list = [
  {
    imgurl: "https://mstarimg.imlatin.com/wBydxTFtnbfScArz.jpg",
    season: "22SS",
  },
  {
    imgurl: "https://mstarimg.imlatin.com/JKRjQr63xKwDcFA2.jpg",
    season: "21AW",
  },
  {
    imgurl: "https://mstarimg.imlatin.com/mJbHRcd6J2z2hy5Q.jpg",
    season: "21SS",
  },
  {
    imgurl: "https://mstarimg.imlatin.com/5htRbFdJZbASAXi3.jpg",
    season: "20AW",
  },
];

const Look = () => {
  const [index, setIndex] = useState(0);
  const [last, setLast] = useState(false);
  const slider = () => {
    index == list.length - 1 ? setIndex(0) : setIndex(index + 1);
    setLast();
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Navbar className={styles.nav} isIndex={false}></Navbar>
          {/* <div className={styles.next} onClick={slider}>
          <span className={styles.left}>NEXT</span>
          <span>{`>`}</span>
        </div> */}
        </div>
        <div className={styles.list_container}>
          <ul
            className={styles.list}
            style={{
              // width 图片宽度+margin
              width: `${list.length * 4.44}rem`,
              transform: `translateX(-${(1 / list.length) * 100 * index}%)`,
            }}
          >
            {list.map(({ season, imgurl }) => (
              <li key={String(season)}>
                <Link href={`/lookdetail?season=${season}`}>
                  <div className={styles.item}>
                    <img src={imgurl} />
                    <span>{season}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Look;
