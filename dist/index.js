"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var dayOfWeek = function (params) { return dayjs_1.default(params).format('dddd'); };
exports.default = dayOfWeek;
//# sourceMappingURL=index.js.map