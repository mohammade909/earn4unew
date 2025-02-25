import React from "react";
import Header from "../CoreFile/Header";
import Footer from "../CoreFile/Footer";
import TradingSection from "./TradingSection";
import AboutSection from "./AboutSection";
import Features from "./Features";
import WhyChoose from "./WhyChooseUs";
import BusinessStats from "./BusinessStats";
import Banner from "./Banner";
import Faq from "./Faq";
import { HeroSection } from "./HeroSection";
import TreadingView from "./TreadingView";
import Pricing from "./Pricing";
import Popup from "./Popup";
import NewsLetters from "./NewsLetters";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyChoose />
      <TreadingView />
      <TradingSection />
      <Features />
      <Banner />
      <Pricing />
      <BusinessStats />
      <AboutSection />
      <NewsLetters />
      
      <Faq />
      <Footer />
      <Popup />
    </>
  );
};
