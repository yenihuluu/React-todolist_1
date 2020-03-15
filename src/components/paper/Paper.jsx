//import React from "react"; // Deklarasiin var React dari package/dependencies/react
//IMPORTANT : import react di coment karena menggunakan emotion, dan emotion-theming
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types"; // Deklarasiin var PropType dari package/dependencies/prop-types
// import styles from "./paper.module.css"; IMPORTANT : ini di coment krn menggunakan emotion
import * as styles from "./paper.styles";

const Paper = ({ children }) => {
  const theme = useTheme();
  return (
    //   <div className={styles.container}>
    //     <div className={styles.frame}>{children}</div>
    //   </div>
    // );
    //IMPORTANT : diatas sebelum pake emotion
    <div css={styles.paper({ theme })}>
      <div css={styles.frame({ theme })}>{children}</div>
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
