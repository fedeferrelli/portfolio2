import React, { useState, useEffect } from "react";
import ShowSectionName from "../../utils/ShowSectionName";
import HomeMain from "../Skills/SkillsMain";

function Skills() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMain(true);
    }, 2000);
  }, []);

  return (
    <main className="flex w-full m-auto h-full">
      {showMain ? <HomeMain /> : <ShowSectionName name="Skills" />}
    </main>
  );
}

export default Skills;
