"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Capitulo = _interopRequireDefault(require("@/pages/Capitulo3.vue"));

var _Capitulo2 = _interopRequireDefault(require("@/pages/Capitulo4.vue"));

var _Capitulo3 = _interopRequireDefault(require("@/pages/Capitulo1.vue"));

var _Capitulo4 = _interopRequireDefault(require("@/pages/Capitulo2.vue"));

var _AcercaDe = _interopRequireDefault(require("@/pages/AcercaDe.vue"));

var _Inicio = _interopRequireDefault(require("@/pages/Inicio.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: "/",
  name: "Home",
  component: _Inicio["default"]
}, {
  path: "/capitulo3",
  name: "Capitulo 3",
  component: _Capitulo["default"]
}, {
  path: "/capitulo2",
  name: "Capitulo 2",
  component: _Capitulo4["default"]
}, {
  path: "/capitulo1",
  name: "Capitulo 1",
  component: _Capitulo3["default"]
}, {
  path: "/capitulo4",
  name: "Capitulo 4",
  component: _Capitulo2["default"]
}, {
  path: "/acerca-de",
  name: "acerca de",
  component: _AcercaDe["default"]
}];
var router = (0, _vueRouter.createRouter)({
  mode: 'history',
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes,
  scrollBehavior: function scrollBehavior(to) {
    if (to.hash) {
      setTimeout(function () {
        document.querySelector(to.hash).scrollIntoView({
          behavior: 'auto'
        });
      }, 100);
      return {
        selector: to.hash,
        behavior: 'auto'
      };
    }
  }
});
var _default = router;
exports["default"] = _default;