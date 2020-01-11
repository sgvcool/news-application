import {ADD_NEWS, LOAD_NEWS} from "./newsAction";
import {Article} from "../enteties/Article";

export const loadNews = () => {
    return {
        type: LOAD_NEWS
    }
}

export const addNews = (article: Article) => {
    return {
        type: ADD_NEWS,
        article
    }
}