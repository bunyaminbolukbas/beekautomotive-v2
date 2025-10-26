import React from "react";
import { Header62 } from "@/components/sections/header-62";
import { Layout1 } from "@/components/sections/layout-01";
import { Testimonial13 } from "@/components/sections/testimonial-13";
import { Layout3 } from "@/components/sections/layout-03";
import { Testimonial13_1 } from "@/components/sections/testimonial-13_1";
import { Layout1_1 } from "@/components/sections/layout-01_1";
import { Testimonial13_2 } from "@/components/sections/testimonial-13_2";
import { Layout1_2 } from "@/components/sections/layout-01_2";
import { Testimonial13_3 } from "@/components/sections/testimonial-13_3";
import { Layout1_3 } from "@/components/sections/layout-01_3";
import { Testimonial13_4 } from "@/components/sections/testimonial-13_4";
import { Layout1_4 } from "@/components/sections/layout-01_4";
import { Layout81Review } from "@/components/sections/layout-81-review";

export default function ReviewsPage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <Header62 />
      <Layout1 />
      <Testimonial13 />
      <Layout3 />
      <Testimonial13_1 />
      <Layout1_1 />
      <Testimonial13_2 />
      <Layout1_2 />
      <Testimonial13_3 />
      <Layout1_3 />
      <Testimonial13_4 />
      <Layout1_4 />
      <Layout81Review />
    </div>
  );
}
