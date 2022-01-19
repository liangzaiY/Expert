import { Carousel } from "antd";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel} autoplay effect="fade" dots={false}>
        <img src={"/img/banner1.jpg"} />
        <img src={"/img/banner2.jpg"} />
        <img src={"/img/banner3.jpg"} />
      </Carousel>
      <Navbar isIndex={true} />
    </div>
  );
}
