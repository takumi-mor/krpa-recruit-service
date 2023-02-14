import React from "react";
import Value from "../components/layout/Value";
import Problem from "../components/layout/Problem";
import Service from "../components/layout/Service";
import Topview from "../components/layout/Topview";
import Comparison from "../components/layout/Comparison";
import ApplyBtn from "../components/common/ApplyBtn";

const Home = () => {
  return (
    <>
      <Topview />
      <Problem />
      <ApplyBtn />
      <Service />
      <ApplyBtn />
      <Comparison />
      <ApplyBtn />
      <Value />
      <ApplyBtn />
    </>
  );
};

export default Home;
