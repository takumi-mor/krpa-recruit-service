import React from "react";
import classes from "./Problem.module.css";

const Problem = () => {
  return (
    <>
      <section className={classes.bg}>
        <h3>
          こんな<span className={classes.color}>お悩み</span>ありませんか？
        </h3>
        <div className={classes.div}>
          <div className={classes.row}>
            <p className={classes.text}>採用以外の業務が忙しい</p>
            <p className={classes.text}>志願者の途中離脱率が高い</p>
          </div>
          <div className={classes.row}>
            <p className={classes.text}>応募対応に人員を割けない</p>
            <p className={classes.text}>応募者の感度が高くない</p>
          </div>
        </div>
        <div className={classes.image}></div>
      </section>
    </>
  );
};

export default Problem;
