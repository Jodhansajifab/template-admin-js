import {Sequelize} from 'sequelize-typescript';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import User from "./models/user"
import Post from "./models/post"

const app = express();

const sequelize = new Sequelize({
    username: "jodhan",
    password: "jodhan123456",
    database: "test_template",
    host: "localhost",
    dialect: "postgres",
    port: 5432,
});

// @ts-ignore
sequelize.addModels([User, Post]);

const adminJsOptions = new AdminJS({
    resources: [
        {resource: User},
        {resource: Post},
    ],
    rootPath: '/admin',
});

const adminRouter = AdminJSExpress.buildRouter(adminJsOptions);
app.use(adminJsOptions.options.rootPath, adminRouter);

app.listen(3000, () => {
    console.log('AdminJS is running at http://localhost:3000/admin');
});
