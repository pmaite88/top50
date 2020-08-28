import axios from 'axios';

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
    const fakeData = [
      { id: 1, title: "Some title That is too long but it will work anyway", date: '1 day ago', author: 'Pepe', comments: '12'},
      { id: 2, title: "Some title", date: '3 day ago', author: 'Some long name', comments: '3'},
      { id: 3, title: "One title", date: '13 days ago', author: 'Mario', comments: '1'},
    ];

    dispatch(postsRequestSuccess(fakeData));
  } catch (error) {
    dispatch(postsRequestError(error.toString()));
  }
};
