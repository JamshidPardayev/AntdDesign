import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100vh] mx-auto p-4 gap-4 bg-gray-300">
      <Link to={"/component"} className="h-[50px] border border-violet-700 text-gray-700 bg-violet-300 hover:bg-violet-400 duration-300 hover:text-white font-bold text-center content-center rounded-[10px] shadow-[0px_0px_2px_2px_#8a2be2]">Antd Components</Link>
      <Link to={"/page"} className="h-[50px] border border-violet-700 text-gray-700 bg-violet-300 hover:bg-violet-400 duration-300 hover:text-white font-bold text-center content-center rounded-[10px] shadow-[0px_0px_2px_2px_#8a2be2]">Antd Page</Link>
    </div>
  );
};

export default Home;
