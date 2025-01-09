import React from "react";
import { ServiceDetail, Banner } from "../../../components";
import { gadgets, gadgetservices } from "../../../assets/images";

const servicesContent = {
  title: "Gadgets & Amazon Marketplace",
  image: gadgetservices,
  description:
    "Tap into the world’s largest online marketplace with confidence. We handle every step, from listing and storefront optimization to inventory management, so your products (including gadgets and accessories) gain maximum visibility. Our proven tactics help you stand out and drive sustainable sales growth on Amazon.",
};

const bannerDescription = {
  title: "Gadgets & Amazon Marketplace",
  description:
    "Expand your reach in the competitive Amazon marketplace and gadget space with expert assistance.",
  image: gadgets,
};

function AmazonMarketing() {
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

export default AmazonMarketing;
