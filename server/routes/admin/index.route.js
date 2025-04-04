const dashboardRoutes = require("./dashboard.route");
const postRoutes = require("./post.route");
const systemConfig = require("../../config/system");

module.exports = (app) =>{
    const PATH_ADMIN = systemConfig.prefixAdmin;
    app.use(PATH_ADMIN +'/dashboard', dashboardRoutes);
    app.use(PATH_ADMIN +'/posts', postRoutes);
}
