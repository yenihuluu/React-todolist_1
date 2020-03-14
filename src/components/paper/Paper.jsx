import React from "react"; // Deklarasiin var React dari package/dependencies/react
import PropTypes from "prop-types"; // Deklarasiin var PropType dari package/dependencies/prop-types
import styles from "./paper.module.css";

const Paper = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]) //childrean mempunyai 2 tipe yt array dan single
};

export default Paper; //setiap kali buat Const Paper, jangan lupa untuk di eksport