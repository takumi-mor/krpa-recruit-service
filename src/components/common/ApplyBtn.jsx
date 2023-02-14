import React from "react";
import classes from "./ApplyBtn.module.css";

const ApplyBtn = () => {
  return (
    <div className={classes.bg}>
      <div className={classes.btn}>
        <a
          className={classes.text}
          href="https://docs.google.com/forms/d/e/1FAIpQLSf7whP3d_6b8WiO6VboGdj-AQi2Ctn3TdK_tU6hZVRMlwkeGQ/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          申し込む
        </a>
      </div>
    </div>
  );
};

export default ApplyBtn;
