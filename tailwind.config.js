export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maskImage: {
        'radial': 'radial-gradient(circle, transparent 35%, black 35.5%)',
      },
      backgroundColor: {
        'overlay': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        LinkColor: "#1B8FDB",

        BluePrimary: "#003150",
        Blue1: "#325D7A",
        Blue2: "#688DA5",
        Blue3: "#D7ECF9",
        Blue4: "#F3F9FF",
        BluePrimaryDark: "#00253D",

        YellowPrimary: "#F1AC23",
        Yellow1: "#E8BF51",
        Yellow2: "#EECF7E",
        Yellow3: "#F9ECC8",
        YellowPrimaryDark: "#CE8E0D",

        GreyPrimary: "#141414",
        Grey1: "#424141",
        Grey2: "#888888",
        Grey3: "#FDFEFF",

        gradientBlueStart: "#133B55",
        gradientBlueEnd: "#2467B2",

        gradientBlueLightStart: "#D7ECF9",
        gradientBlueLightEnd: "#F0F9FF",

        gradientYellowStart: "#F1AC23",
        gradientYellowEnd: "#FFCF7F",
      },
      screens: {
        xxs: "320px",

        xs: "375px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        xxl: "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-radial-lg': {
          WebkitMask: 'radial-gradient(ellipse 50% 100%, transparent 35%, black 35.5%)',
          mask: 'radial-gradient(ellipse 50% 100%, transparent 35%, black 35.5%)',
        },
        '.mask-radial-sm': {
          WebkitMask: 'radial-gradient(ellipse 90% 100%, transparent 33%, black 33.5%)',
          mask: 'radial-gradient(ellipse 90% 100%, transparent 33%, black 33.5%)',
        },
        '.mask-radial-mob': {
          WebkitMask: 'radial-gradient(ellipse 130% 60%, transparent 25%, black 25.5%)',
          mask: 'radial-gradient(ellipse 130% 60%, transparent 25%, black 25.5%)',
        },
      });
    },
  ],
};
