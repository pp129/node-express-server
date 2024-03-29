let UserSQL = {
    insert:
        "INSERT INTO tab_user_info(user_name,user_password) VALUES(?,?)",
    queryAll: "SELECT * FROM tab_user_info",
    getUserById: "SELECT * FROM tab_user_info WHERE user_id = ? ",
    getUserByName:"SELECT * FROM tab_user_info WHERE user_name = ? ",
    update:"UPDATE tab_user_info SET user_name = ?,user_password = ? WHERE user_id = ?"
};
module.exports = UserSQL;
