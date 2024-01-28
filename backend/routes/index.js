const initRoutes = (app) => {
    app.use("/api/v1/user", require("./user"));
};

module.exports = initRoutes;