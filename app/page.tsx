import Accordioncomponent from "@/components/accardion";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Showcase from "@/components/showcase";
import Blog from "@/components/blog";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-[90%]">
      <Showcase />
      <Blog />
      <Card/>
      <Accordioncomponent />
      <Footer />
    </div>
  );
};

export default Home;
