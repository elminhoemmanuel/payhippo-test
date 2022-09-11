/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {

        extend: {
            colors: {
                blue: {
                    b1: "#274ABC",
                    b2: "#0B305E",
                },
                skyblue: {
                    s1: "#EFF6FF",
                    s2: "#AAB6E5",
                },
                powderlue: {
                    p1: "#AAB6E5",
                },
                nude: {
                    n1: "#FAF5EF",
                },

            }
        },

        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        }
    },
    plugins: [],
    content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
