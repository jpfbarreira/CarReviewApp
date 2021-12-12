module.exports = (app) => {
  const { application } = require("express");
  const controller = require("../controladores/controller.js");

  var router = require("express").Router();

  router.get("/", controller.findall);

  router.get("/topgear", controller.findtopgear);
  router.get("/autocar", controller.findautocar);
  router.get("/autoexpress", controller.findautoexpress);
  router.post("/registar", controller.registar);

  router.post("/login", controller.login);

  // Rota para verificar e ativar o utilizador
  router.get("/auth/confirm/:confirmationCode", controller.verificaUtilizador);

  app.use("/reviews", router);
};
