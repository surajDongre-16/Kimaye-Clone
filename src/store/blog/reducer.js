import * as types from './actionTypes'

const initialState = {
    loading: false,
    error: "",
    blogs: [],
    currentBlog: {}
}

export const blogReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case types.FETCH_BLOG_POST_REQUEST : {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case types.FETCH_BLOG_POST_SUCCESS : {
            return {
                ...state,
                loading: false,
                error: false,
                blogs: payload,
            }
        }

        case types.FETCH_BLOG_POST_FAILURE : {
            return {
                ...state,
                loading: false,
                error: payload,
            }
        }

        case types.FETCH_SINGLE_BLOG_REQUEST: {
            return {
              ...state,
              loading: true,
              error: "",
            };
          }
      
          case types.FETCH_SINGLE_BLOG_SUCCESS: {
            return {
              ...state,
              loading: false,
              currentBlog: payload,
            };
          }
      
          case types.FETCH_SINGLE_BLOG_FAILURE: {
            return {
              ...state,
              loading: false,
              error: payload,
            };
          }

        default: {
            return state
        }
    }
}