import React from "react";
import classes from "./Service.module.css";

const Service = () => {
  return (
    <>
      <section className={classes.bg}>
        <h3>
          弊社が <span className={classes.color}>一気通貫</span> でサポート！
        </h3>
        <ul className={classes.contents}>
          <li>
            <p className={classes.no}>1.</p>
            <div className={classes.content}>
              <p>ヒアリング</p>
            </div>
          </li>
          <li>
            <p className={classes.no}>2.</p>
            <div className={classes.content}>
              <p>求人作成・運用</p>
            </div>
          </li>
          <li>
            <p className={classes.no}>3.</p>
            <div className={classes.content}>
              <p>応募対応・一次面談</p>
            </div>
          </li>
          <li>
            <p className={classes.no}>4.</p>
            <div className={classes.content}>
              <p>面接日時調整</p>
            </div>
          </li>
          <li>
            <p className={classes.no}>5.</p>
            <div className={classes.content}>
              <p>入社前サポート</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Service;
