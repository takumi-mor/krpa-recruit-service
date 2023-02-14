import React from "react";
import classes from "./Topview.module.css";

const Topview = () => {
  return (
    <>
      <section className={classes.bg}>
        <div className={classes.text}>
          <h1 className={classes.text}>
            採用フローを一気通貫で受託し、
            <br />
            効率的な採用活動をサポート。
          </h1>
        </div>
      </section>
    </>
  );
};

export default Topview;
