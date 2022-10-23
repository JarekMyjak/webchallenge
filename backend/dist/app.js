"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const env = process.env;
const app = (0, express_1.default)();
const port = env.PORT || 3030;
const mongoConnectionString = env.MONGODBURL;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
require('./services/jwtStrategy');
require('./services/githubStrategy');
function mongoSetup() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(mongoConnectionString);
    });
}
mongoSetup().catch(err => console.log(err));
mongoose_1.default.connection.on('open', info => {
    console.log('mongoDB connection open ', info ? info : "");
});
app.get('/', (req, res) => {
    res.send(`<h1>hello user ${req.user}<h1>`);
});
app.use('/', routes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map