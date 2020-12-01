/** @format */

import React from "react";
import styles from "./dashboard.module.css";

const Dashboard = (props) => {
  const temp = [
    {
      name: "Lee",
      company: "sandbank",
      color: "Light",
      job: "CEO",
      email: "hm@sandbank.io",
      description: "Life goes on",
    },
    {
      name: "Lee",
      company: "sandbank",
      color: "Light",
      job: "CEO",
      email: "hm@sandbank.io",
      description: "Life goes on",
    },
    {
      name: "Lee",
      company: "sandbank",
      color: "Light",
      job: "CEO",
      email: "hm@sandbank.io",
      description: "Life goes on",
    },
  ];
  return (
    <>
      <div className={styles.header}>
        <img src="/images/logo.png" alt="" />
        <h1>Business Card Maker</h1>
        <button className={styles.logoutBtn}>Logout</button>
      </div>
      <div className={styles.content}>
        <div className={styles.lists}>
          <h2 className={styles.listsHeader}>Card Maker</h2>
          <ul className={styles.listsBox}>
            {temp.map((list) => (
              <li className={styles.list}>
                <div className={styles.container}>
                  <input
                    className={styles.name}
                    type="text"
                    value={list.name}
                  />
                  <input className={styles.company} type="text" />
                  <select className={styles.color} name="color">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="colorful">Colorful</option>
                  </select>
                </div>
                <div className={styles.container}>
                  <input className={styles.job} type="text" />
                  <input className={styles.email} type="text" />
                </div>
                <div className={styles.container}>
                  <input className={styles.description} type="text" />
                </div>
                <div className={styles.container}>
                  <button className={styles.selectBtn}>No file</button>
                  <button className={styles.deleteBtn}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.preview}>
          <h2 className={styles.previewHeader}>Card Preview</h2>
          <ul className={styles.previewBox}>
            {temp.map((card) => (
              <li className={styles.card}>
                <div className={styles.cardImg}>
                  <img src="/images/default_logo.png" alt="" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardName}>{card.name}</h3>
                  <span className={styles.cardCompany}>{card.company}</span>
                  <hr />
                  <span className={styles.cardJob}>{card.job}</span>
                  <span className={styles.cardEmail}>{card.email}</span>
                  <span className={styles.cardDescription}>
                    {card.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
