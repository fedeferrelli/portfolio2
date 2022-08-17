import React, { useState, useEffect } from "react";
import ShowSectionName from "../../utils/ShowSectionName";
import BlogMain from "./BlogMain"

function Blog() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMain(true);
    }, 1000);
  }, []);

  return (
    <main className="flex w-full m-auto h-full">
      {showMain ? <BlogMain /> : <ShowSectionName name="BLOG" />}
    </main>
  );
}

export default Blog;
