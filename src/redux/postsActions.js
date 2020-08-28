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
    const response = await axios.get(process.env.REACT_APP_TOP_50_URL);

    dispatch(postsRequestSuccess(response.data));
  } catch (error) {
    dispatch(postsRequestError(error.toString()));
  }
};
