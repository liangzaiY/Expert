import { useState } from "react";

import styles from "./NavbarForShow.module.css";

const NavbarForShow = ({
  titleList = [],
  choice = 0,
  changeIndex = () => {},
  color = "#fff",
}) => {
  const [currentIndex, setCurrentIndex] = useState(choice);

  const handleClick = (index) => {
    setCurrentIndex(index);
    changeIndex(index);
  };

  const style = { color };

  return (
    <div className={styles.container}>
      <ul>
        {titleList.map((title, index) => (
          <li
            key={title}
            style={style}
            className={`${index == currentIndex ? styles.underscore : null} ${
              styles.a
            }`}
            onClick={() => handleClick(index)}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarForShow;
