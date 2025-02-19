import React from "react";
import { ServiceDetail, Banner } from "../../../components";
import { ecommerce, ecommerceservices } from "../../../assets/images";

const servicesContent = {
  title: "E-Commerce Platforms",
  image: ecommerceservices,
  description:
    "Stay one step ahead of the competition by offering a seamless online buying experience. We help businesses set up and optimize e-commerce platforms that are tailored to your unique branding, product mix, and growth strategies—driving conversions and ensuring satisfied shoppers.",
};

const bannerDescription = {
  title: "E-Commerce Platforms",
  description:
    "Empower your business with a robust e-commerce platform that drives sales and enhances customer satisfaction.",
  image: ecommerce,
};

function Ecommerce() {
  return (
    <>
      <Banner
        className={"text-cyan-500"}
        bannerDescription={bannerDescription}
      />
      <ServiceDetail servicesContent={servicesContent} />
    </>
  );
}

export default Ecommerce;
