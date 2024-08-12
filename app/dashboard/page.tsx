"use client";
import React, { useState } from "react";
import Searchsection from "./_items/Searchsection";
import Alltemplates from "./_items/Alltemplates";
import Footer from "../Home/_components/Footer";
import Header from "./_items/Header";

function Dashboard() {
  const [userSearch, setUserSearch] = useState<string>();
  return (
    <div>
      <Searchsection onSearchInput={(value: string) => setUserSearch(value)} />
      <Alltemplates searchInput={userSearch} />
      <Footer />
    </div>
  );
}

export default Dashboard;
