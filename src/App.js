import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Crud app with react and supabase</title>
        <link rel="icon" href="/supabase.jpeg" />
      </Helmet>
      <Header />
      <Users />
    </div>
  );
};

export default App;
