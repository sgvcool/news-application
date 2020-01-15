"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newsAction_1 = require("./newsAction");
var articleActions_1 = require("./articleActions");
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
exports.markAsRead = function (id) {
    return {
        type: articleActions_1.MARK_AS_READ,
        id: id
    };
};
exports.addToFavorite = function (id) {
    return {
        type: articleActions_1.ADD_TO_FAVORITE,
        id: id
    };
};
exports.addToReadLater = function (id) {
    return {
        type: articleActions_1.ADD_TO_READ_LATER,
        id: id
    };
};
exports.rateArticle = function (id, rate) {
    return {
        type: articleActions_1.RATE_ARTICLE,
        id: id,
        rate: rate
    };
};
