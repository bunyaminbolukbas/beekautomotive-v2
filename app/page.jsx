import React from "react";
import { Header114 } from "@/components/sections/header-114";
import { Product11 } from "@/components/sections/product-11";
import { LayoutMaatwerk } from "@/components/sections/layout-maatwerk";
import { Layout194 } from "@/components/sections/layout-194";
import { KernwoordenHome } from "@/components/sections/kernwoorden-home";
import { TestimonialWithStory } from "@/components/sections/testimonial-with-story";
// import { Testimonial17 } from "@/components/sections/testimonial-17";

export default function HomePage() {
  return (
    <>
      <Header114 />
      <Product11 />
      <LayoutMaatwerk />
      <Layout194 />
      <KernwoordenHome />
      <TestimonialWithStory />
    </>
  );
}
