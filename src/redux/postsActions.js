import axios from 'axios';

export const dismissPosts = () => {
  return { type: 'DISMISS_ALL_POSTS' };
};


export const postsRequest = () => {
  return { type: 'FETCH_POSTS_REQUEST' };
};

export const postsRequestSuccess = data => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: data
  };
};

export const postsRequestError = error => {
  return {
    type: 'FETCH_POSTS_ERROR',
    payload: error
  };
};

export const loadPosts = () => async dispatch => {
  dispatch(postsRequest());

  try {
    const response = await axios.get('http://localhost:3000/api/v1/queries/top50');

    dispatch(postsRequestSuccess(response.data));
  } catch (error) {
    dispatch(postsRequestError(error.toString()));
  }
};
