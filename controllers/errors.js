const pageNotFound = (req, res) => {
   res.render("404", { pageTitle: "Page Not Found" });
};

module.exports = { pageNotFound };
