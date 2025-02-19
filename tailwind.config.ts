import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "border-main-blue",
    "border-main-orange",
    "border-main-green",
    "border-main-red",
    "hover:bg-main-blue",
    "hover:bg-main-orange",
    "hover:bg-main-green",
    "hover:bg-main-red",
    "bg-main-blue",
    "bg-main-orange",
    "bg-main-green",
    "bg-main-red",
    "bg-black",
    "text-main-blue",
    "text-main-orange",
    "text-main-green",
    "text-main-red",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xxs: "400px",
        "max-xs": { max: "639px" },
        "max-md": { max: "767px" },
      },
      borderColor: {
        "main-green": "#10B981",
      },
      boxShadow: {
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        16: "16rem",
      },
      gap: {
        30: "30px",
        10: "10px",
      },
      borderWidth: {
        2: "2px",
        3: "3px",
        5: "5px",
      },
      transitionProperty: {
        height: "height",
        border: "border",
      },
      colors: {
        "main-green": "#3e7422",
        "main-red": "#8b002a",
        "main-blue": "#1877f2",
        "main-orange": "#ed7609",
        "royal-blue": "#2D3648",
        linkedin: "#0077b5",
        whatsapp: "#25D366",
        cyan: "#00B0F2",
        telegram: "#00b0f2",
        gray: {
          700: "#616161",
        },
      },
      gradientColorStops: (theme) => ({
        white: "#FFFFFF",
        cyan: "#00B0F2",
      }),
      spacing: {
        360: "360px",
        190: "190px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        20: "5rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        times: ['"Times New Roman"', "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
