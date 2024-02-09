"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const adminjs_1 = __importDefault(require("adminjs"));
const express_1 = __importDefault(require("@adminjs/express"));
const express_2 = __importDefault(require("express"));
const user_1 = __importDefault(require("./models/user"));
const post_1 = __importDefault(require("./models/post"));
const app = (0, express_2.default)();
const sequelize = new sequelize_typescript_1.Sequelize({
    username: "jodhan",
    password: "jodhan123456",
    database: "test_template",
    host: "localhost",
    dialect: "postgres",
    port: 5432,
});
// @ts-ignore
sequelize.addModels([user_1.default, post_1.default]);
const adminJsOptions = new adminjs_1.default({
    resources: [
        { resource: user_1.default },
        { resource: post_1.default },
    ],
    rootPath: '/admin',
});
const adminRouter = express_1.default.buildRouter(adminJsOptions);
app.use(adminJsOptions.options.rootPath, adminRouter);
app.listen(3000, () => {
    console.log('AdminJS is running at http://localhost:3000/admin');
});
