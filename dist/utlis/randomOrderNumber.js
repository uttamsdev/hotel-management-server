"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomOrderNumber = void 0;
function generateRandomOrderNumber() {
    return 'ORD' + Math.floor(Math.random() * 100000);
}
exports.generateRandomOrderNumber = generateRandomOrderNumber;
