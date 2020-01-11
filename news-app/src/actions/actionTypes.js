"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newsAction_1 = require("./newsAction");
exports.loadNews = function () {
    return {
        type: newsAction_1.LOAD_NEWS
    };
};
exports.addNews = function (article) {
    return {
        type: newsAction_1.ADD_NEWS,
        article: article
    };
};
exports.removeNews = function (id) {
    return {
        type: newsAction_1.REMOVE_NEWS,
        id: id
    };
};
exports.editNews = function (article) {
    return {
        type: newsAction_1.EDIT_NEWS,
        article: article
    };
};
