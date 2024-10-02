"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUsernameOrPasswordError = exports.UnabletoSaveUserError = void 0;
class UnabletoSaveUserError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.UnabletoSaveUserError = UnabletoSaveUserError;
class InvalidUsernameOrPasswordError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.InvalidUsernameOrPasswordError = InvalidUsernameOrPasswordError;
