import React from "react";
import { Header62Service } from "@/components/sections/header-62-service";
import { Layout300 } from "@/components/sections/layout-300";
import { Layout7 } from "@/components/sections/layout-7";
import { Layout207 } from "@/components/sections/layout-207";
import { Layout493 } from "@/components/sections/layout-493";
import { Layout494 } from "@/components/sections/layout-494";

export default function ServicesAfleverpakketPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Header62Service />
      <Layout300 />
      <Layout7 />
      <Layout207 />
      <Layout493 />
      <Layout494 />
    </div>
  );
}
