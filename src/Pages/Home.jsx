import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="">
      <h1>Home</h1>
      <p>hello from the Home page Of workShops</p>
      <span>You can navigate to get Your WorkShop From here </span>
      <Link to="/workshop">WorkShop</Link>
    </main>
  );
};

export default Home;
