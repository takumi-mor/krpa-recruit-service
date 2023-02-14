import React from "react";
import classes from "./Conparison.module.css";

const Comparison = () => {
  return (
    <>
      <section className={classes.bg}>
        <h3 className={classes.firstText}>料金とサービス比較</h3>
        <div className={classes.table}>
          <div className={classes.trHeader}>
            <div className={classes.header}>
              <p>比較</p>
            </div>
            <div className={classes.header}>
              <p>クリパー</p>
            </div>
            <div className={classes.header}>
              <p>人材紹介</p>
            </div>
            <div className={classes.header}>
              <p>人材広告</p>
            </div>
            <div className={classes.header}>
              <p>
                ダイレクト <br /> リクルーティング
              </p>
            </div>
          </div>
          <div className={classes.tbody}>
            <div className={classes.section}>
              <div className={classes.content}>母集団の質</div>
              <div className={classes.content}>母集団の量</div>
              <div className={classes.content}>料金</div>
              <div className={classes.content}>受託範囲</div>
            </div>
            <div className={`${classes.section} ${classes.orangeBackground}`}>
              <div className={classes.content}>高い</div>
              <div className={classes.content}>少数</div>
              <div className={classes.content}>成果報酬（25%）</div>
              <div className={classes.content}>全て受託</div>
            </div>
            <div className={classes.section}>
              <div className={classes.content}>低い</div>
              <div className={classes.content}>多数</div>
              <div className={classes.content}>成果報酬（30%）</div>
              <div className={classes.content}>一部受託</div>
            </div>
            <div className={classes.section}>
              <div className={classes.content}>低い</div>
              <div className={classes.content}>多数</div>
              <div className={classes.longContent}>
                掲載費 + <br /> 広告費 + <br /> オプション
              </div>
              <div className={classes.content}>なし</div>
            </div>
            <div className={classes.section}>
              <div className={classes.content}>高い</div>
              <div className={classes.content}>少数</div>
              <div className={classes.longContent}>
                月額費用 + <br /> 成果報酬
              </div>
              <div className={classes.content}>なし</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comparison;
