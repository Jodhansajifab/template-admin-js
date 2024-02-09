"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var adminjs_1 = require("adminjs");
var express_1 = require("@adminjs/express");
var express_2 = require("express");
var user_1 = require("./models/user");
var post_1 = require("./models/post");
var app = (0, express_2.default)();
var sequelize = new sequelize_typescript_1.Sequelize({
    username: "jodhan",
    password: "jodhan123456",
    database: "test_template",
    host: "localhost",
    dialect: "postgres",
    port: 5432,
});
// @ts-ignore
sequelize.addModels([user_1.default, post_1.default]);
var adminJsOptions = new adminjs_1.default({
    resources: [
        { resource: user_1.default },
        { resource: post_1.default },
    ],
    rootPath: '/admin',
});
var adminRouter = express_1.default.buildRouter(adminJsOptions);
app.use(adminJsOptions.options.rootPath, adminRouter);
app.listen(3000, function () {
    console.log('AdminJS is running at http://localhost:3000/admin');
});
