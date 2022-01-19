import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";

const season = [`22SS`, `21AW`, `21SS`, "20AW"];

const Navbar = ({ isIndex }) => {
  const router = useRouter();
  const navToImgdisplay = (i, e) => {
    e.preventDefault();
    router.push({
      pathname: "/imagedisplay",
      query: { season: i },
    });
    // window.open(`http://localhost:3000/imagedisplay?season=${i}`);
  };

  return (
    <>
      <ul
        className={`${styles.navbar} ${
          isIndex ? styles.navbar_index : styles.navbar_look
        }`}
      >
        <li>
          <a>形象大片</a>
          <ul className={styles.second}>
            {season.map((item, i) => (
              <li className={styles.subtitle} key={String(item)}>
                <a onClick={(e) => navToImgdisplay(i, e)}>{item}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link href="/look">LOOK</Link>
        </li>
        <li>
          <Link href="/story">品牌故事</Link>
        </li>
        <li>
          <a>新鲜事</a>
          <ul className={styles.second}>
            <li>
              <Link href="/show?index=0">SHOW</Link>
            </li>
            <li>
              <Link href="/show?index=1">小马探索营</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/xiangqianzou">向前走</Link>
        </li>
        <li>
          <a>店铺展示</a>
          <ul className={styles.second}>
            <li>
              <Link href="/mall?index=0">商场</Link>
            </li>
            <li>
              <Link href="/mall?index=1">分布</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">联系我们</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
