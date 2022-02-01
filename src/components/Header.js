import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,.55),rgba(0,0,0,.75)),url(/back1.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="jumbotron bg-cover text-white py-5"
    >
      <div className="container py-5 text-center">
        <h1 className="display-4 font-weight-bold">React SPA with SQL db</h1>
        <p className="font-italic mb-0 px-5">
          In this example ,i used react application single page with sql
          database with the use of supabase.Just two actions here: create user
          and get users
        </p>
        <p className="font-italic my-3">
          Snippe by
          <a href="https://bootstrapious.com" className="text-white ">
            <u> Saadani Mohamed Amine</u>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
