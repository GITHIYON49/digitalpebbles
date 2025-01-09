import React from "react";
import { ServiceDetail, Banner } from "../../../components";
import { appdevelopment, appservices } from "../../../assets/images";

const servicesContent = {
  title: "App Development",
  image: appservices,
  description:
    "Ready to put your brand at users’ fingertips? Our app development specialists design intuitive, high-performing mobile applications across iOS and Android. Expect smooth navigation, modern design, and features that delight your customers—keeping them coming back time and again.",
};

const bannerDescription = {
  title: "App Development",
  description: "Mobile applications are the future of customer engagement.",
  image: appdevelopment,
};

function AppDevelopment() {
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

export default AppDevelopment;
