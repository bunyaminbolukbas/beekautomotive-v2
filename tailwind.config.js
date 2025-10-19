import relumeTailwindPreset from "@relume_io/relume-tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./home/**/*.{js,ts,jsx,tsx}",
    "./aanbod/**/*.{js,ts,jsx,tsx}",
    "./contact/**/*.{js,ts,jsx,tsx}",
    "./over-ons/**/*.{js,ts,jsx,tsx}",
    "./reviews/**/*.{js,ts,jsx,tsx}",
    "./voertuig/**/*.{js,ts,jsx,tsx}",
    "./services-afleverpakket-/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [relumeTailwindPreset],
};

export default config;
