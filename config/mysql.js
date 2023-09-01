var mysql = require("mysql2");
var db_info = {
    host: "database.c5j7kj2hgqne.ap-northeast-2.rds.amazonaws.com", // 데이터베이스 주소
    port: "33062", // 데이터베이스 포트
    user: "admin", // 로그인 계정
    password: "admin123", // 비밀번호
    database: "kokoabank", // 엑세스할 데이터베이스
  };

  module.exports = {
    init: function () {
      return mysql.createConnection(db_info);
    },
    connect: function (conn) {
      conn.connect(function (err) {
        if (err) console.error("mysql connection error : " + err);
        else console.log("mysql is connected successfully!");
      });
    },
  };