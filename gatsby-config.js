module.exports = {
  siteMetadata: {
    title: "fivethreeone",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: { fonts: ["Hind"], display: "swap" },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-styled-components",
  ],
};
