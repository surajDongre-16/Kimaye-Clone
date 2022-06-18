import * as types from './actionTypes'
import axios from 'axios'

const fetchBlogPostRequest = (payload) => {
    return {
        type: types.FETCH_BLOG_POST_REQUEST,
        payload
    }
}

const fetchBlogPostSuccess = (payload) => {
    return {
        type: types.FETCH_BLOG_POST_SUCCESS,
        payload
    }
}

const fetchBlogPostFailure = (payload) => {
    return {
        type: types.FETCH_BLOG_POST_FAILURE,
        payload
    }
}

const fetchBlogPost = (payload) => (dispatch) => {
    dispatch(fetchBlogPostRequest())
    axios.get("http://localhost:8080/Blogs")
    .then((res)=>dispatch(fetchBlogPostSuccess(res.data)))
    .catch((err)=>dispatch(fetchBlogPostFailure(err.data)))
}

const fetchSingleBlogRequest = (payload) => {
    return {
      type: types.FETCH_SINGLE_BLOG_REQUEST,
      payload,
    };
  };
  
  const fetchSingleBlogSuccess = (payload) => {
    return {
      type: types.FETCH_SINGLE_BLOG_SUCCESS,
      payload,
    };
  };
  
  const fetchSingleBlogFailure = (payload) => {
    return {
      type: types.FETCH_SINGLE_BLOG_FAILURE,
      payload,
    };
  };

  const fetchSingleBlog = (payload) => (dispatch) => {
    dispatch(fetchSingleBlogRequest());
    axios.get(`http://localhost:8080/Blogs/${payload}`)
    .then((res)=>dispatch(fetchSingleBlogSuccess(res.data)))
    .catch((err)=>dispatch(fetchSingleBlogFailure(err.data)))
  }

export { fetchBlogPost, fetchSingleBlog }