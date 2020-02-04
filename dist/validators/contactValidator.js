"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (input) => {
    const { name, mobile } = input;
    let error = {};
    if (!name) {
        error.name = "name is required";
    }
    const isBdNumber = RegExp(/^[0]?[880]\d{12}$/);
    if (!mobile) {
        error.mobile = "mobile is required";
    }
    else if (!isBdNumber.test(mobile)) {
        error.mobile = "Invalid mobile number";
    }
    const isValid = Object.keys(error).length === 0;
    return { error, isValid };
};
