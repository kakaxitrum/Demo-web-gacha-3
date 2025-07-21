import { useState } from "react";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import Footer from "../components/Footer"; // Assuming you have a Footer component
const Landing = () => {
  const [isLoading, setIsLoading] =
    useState(true);

  return (
    <div className='min-h-screen'>
      {isLoading ? (
        <Loading
          onFinish={() => setIsLoading(false)}
        />
      ) : (
        <Hero />
      )}
    </div>
  );
};

export default Landing;
