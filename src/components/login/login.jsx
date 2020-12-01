/** @format */

import React from "react";
// import { useHistory } from "react-router-dom";
import styles from "./login.module.css";

const Login = (props) => {
  // const history = useHistory();
  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src="/images/logo.png" alt="" />
          <h1>Business Card Maker</h1>
        </div>
        <div className={styles.content}>
          <h1>Login</h1>
          <button onClick={props.onGoogle} className={styles.loginBtn}>
            Google
          </button>
          <button className={styles.loginBtn}>Github</button>
        </div>
        <div className={styles.footer}>Code your dream</div>
      </div>
    </>
  );
};

export default Login;
