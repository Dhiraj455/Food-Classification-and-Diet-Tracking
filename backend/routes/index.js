const initRoutes = (app) => {
    app.use("/api/v1/user", require("./user"));
    app.use("/api/v1/food", require("./food"));
};

module.exports = initRoutes;