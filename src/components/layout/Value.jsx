import React from "react";
import classes from "./Value.module.css";

const Value = () => {
  return (
    <>
      <section className={classes.bg}>
        <div>
          <h3 className={classes.h3}>
            他社よりも <span className={classes.color}>高い成約率</span>
            を実現！
          </h3>
          <div>
            <div className={classes.firstFilter}>
              <p className={classes.p}>
                貴社の求めている職種や、人材について詳しくヒアリング
              </p>
            </div>
            <div className={classes.filter}>
              <p className={classes.p}>事前の面談で貴社の魅力を訴求</p>
            </div>
            <div className={classes.filter}>
              <p className={classes.p}>
                求職者の募集から入社まで一気通貫でサポート
              </p>
            </div>
          </div>
          <h3 className={classes.lastState}>
            担当者が貴社と求職者の要望を高いレベルで把握し、
            <br />
            業界平均よりも高い<span className={classes.color}>51%</span>
            の成約率を実現！
          </h3>
        </div>
      </section>
    </>
  );
};

export default Value;
