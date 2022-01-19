import Link from "next/link";
import { Row, Col } from "antd";
import styles from "./explore.module.css";

const Explore = ({ list, name = "小马探索营", preSize = 0.25 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <Row gutter={20}>
        {list.map((ulList) => (
          <Col key={ulList[0].title} xs={24} sm={6}>
            {ulList.map(({ pre, title, img }) => (
              //   <li key={ulList.img}>
              <Link href={`/activity?title=${title}`} key={img}>
                <div>
                  <img className={styles.img} src={img}></img>
                  <div className={styles.text}>
                    <span
                      className={styles.pre}
                      style={{ fontSize: `${preSize}rem` }}
                    >
                      {pre}
                    </span>
                    <span className={styles.title}>{title}</span>
                  </div>
                </div>
              </Link>
              //   </li>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Explore;
