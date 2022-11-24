"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExactFacebookLink = void 0;
function getExactFacebookLink(data, expression) {
    var facebookLink = [];
    data.forEach(function (url) {
        if (expression.test(url)) {
            facebookLink.push(url);
        }
    });
    return facebookLink;
}
exports.getExactFacebookLink = getExactFacebookLink;
