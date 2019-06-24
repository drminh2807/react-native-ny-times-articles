import { FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from "./actionType";
import { fetchMostViewed } from "../API";

export const getArticles = () => dispatch => {
  dispatch({ type: FETCH_ARTICLES_REQUEST })
  fetchMostViewed({}).then(res => {
    dispatch({
      type: FETCH_ARTICLES_SUCCESS,
      articles: res.results
    })
  }).catch(error => {
    dispatch({
      type: FETCH_ARTICLES_FAILURE,
      error,
    })
  })
}