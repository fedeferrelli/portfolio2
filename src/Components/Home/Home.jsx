import React, { useState, useEffect } from "react";
import ShowSectionName from "../../utils/ShowSectionName";
import HomeMain from "./HomeMain";

function Home() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMain(true);
    }, 1000);
  }, []);

  return (
    <main className="flex w-full m-auto h-full">
      {showMain ? <HomeMain /> : <ShowSectionName name="Home" />}
    </main>
  );
}

export default Home;
