import React from "react";
import { Header64 } from "@/components/sections/header-64";
import { Layout22 } from "@/components/sections/layout-22";
import { Team12 } from "@/components/sections/team-12";
import { Faq14 } from "@/components/sections/faq-14";
import { Testimonial17 } from "@/components/sections/testimonial-17";

export default function OverOnsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Header64 />
      <Layout22 />
      <Team12 />
      <Faq14 />
      <Testimonial17 />
    </div>
  );
}
