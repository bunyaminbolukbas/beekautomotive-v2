import React from "react";
import { Header64 } from "@/components/sections/header-64";
import { Layout22 } from "@/components/sections/layout-22";
import { Team12 } from "@/components/sections/team-12";
import { KernwoordenHome } from "@/components/sections/kernwoorden-home";
import { TestimonialWithStory } from "@/components/sections/testimonial-with-story";

export default function OverOnsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Header64 />
      <Layout22 />
      <Team12 />
      <KernwoordenHome />
      <TestimonialWithStory />
    </div>
  );
}
