const express = require('express');
const router = express.Router();
// 导入MySQL模块
let db = require("../database/model");
/* GET home page. */
router.post('/login', function(req, res, next) {
    let user_name = req.body.name;
    let password = req.body.password;
    let param = {
        name: user_name,
        password: password
    };
    db.login(param, res, next);
});

module.exports = router;
