"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFacebookUrl = void 0;
function extractFacebookUrl(data, expression) {
    var facebookLinks = [];
    data.forEach(function (url) {
        var match = expression.test(url);
        if (match) {
            var companySiteName = url.split("/");
            var facebook = url.slice(7, 32);
            var facebookPage = facebook + companySiteName[4] + "/";
            facebookLinks.push(facebookPage);
        }
    });
    return facebookLinks;
}
exports.extractFacebookUrl = extractFacebookUrl;
