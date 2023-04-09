import type { NextPage } from "next";
import Footer from "./../components/layout/Footer";
import { useEffect } from "react";
import axios from "axios";

const Home: NextPage = () => {
  // useEffect(() => {
  //   axios.get("/api/test").then((res) => console.log(res.data));
  // }, []);

  return (
    <>
      <div style={{ height: "200vh" }}>
        <p>메인페이지</p>
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Home;
