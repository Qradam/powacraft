/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{html,js}",
        "./components/**/*.{html,js}",
        "index.html",
        "ateam.html",
        "dynmap.html",
        "vip.html",
        "prikazy.html",
    ],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            spacing: {
                13: "3.25rem",
                15: "3.75rem",
                76: "18rem",
                128: "32rem",
                118: "23rem",
                119: "29rem",
                120: "80vh",
                144: "36rem",
                164: "42rem",
            },
        },

        fontFamily: {
            poppins: ["Poppins"],
            poiret: ["Poiret One"],
            quicksand: ["Quicksand"],
            raleway: ["Raleway"],
            montserrat: ["Montserrat"],
            cookie: ["Cookie"],
            lato: ["Lato"],
            righteous: ["Righteous"],
        },
    },
    plugins: [],
};