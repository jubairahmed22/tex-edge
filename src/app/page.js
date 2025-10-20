import Banner from "@/components/HomePageSections/Banner";
import CallToAction from "@/components/HomePageSections/CallToAction";
import Counter from "@/components/HomePageSections/counter";
import Industries from "@/components/HomePageSections/Industries";
import KeySolutions from "@/components/HomePageSections/KeySolutions";
import Slider from "@/components/HomePageSections/Slider";
import TexEdge from "@/components/HomePageSections/TexEdge";
import TrustedPartner from "@/components/HomePageSections/TrustedPartner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <Slider></Slider>
      <TexEdge></TexEdge>
      <KeySolutions></KeySolutions>
      <Industries></Industries>
      <Counter></Counter>
      <TrustedPartner></TrustedPartner>

      {/* <Banner></Banner> */}
      <CallToAction></CallToAction>
    </div>
  );
}
