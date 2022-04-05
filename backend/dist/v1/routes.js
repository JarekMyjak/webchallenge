"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
// Home page route.
routes.get('/health', function (req, res) {
    res.send({ date: new Date().toISOString(), status: 'live' });
});
// About page route.
routes.get('/about', function (req, res) {
    res.send('About this wiki');
});
exports.default = routes;
//# sourceMappingURL=routes.js.map