import {ADD_NEWS, EDIT_NEWS, LOAD_NEWS, REMOVE_NEWS} from "./newsAction";
import {Article} from "../enteties/Article";

export const loadNews = () : NewsActionType => {
    return {
        type: LOAD_NEWS
    }
}

export const addNews = (article: Article) : NewsActionType => {
    return {
        type: ADD_NEWS,
        article
    }
}

export const removeNews = (id: string) : NewsActionType=> {
    return {
        type: REMOVE_NEWS,
        id
    }
}

export const editNews = (article : Article) : NewsActionType => {
    return {
        type: EDIT_NEWS,
        article
    }
}

export interface  ActionTypeBase {
    type: string;
}

export interface NewsActionType extends ActionTypeBase{
    id? : string;
    article? : Article;
}

export interface ArticleActionType extends ActionTypeBase{
    id? : string;
    rate?: number;
    comment?: string;
    complain?: string;
}