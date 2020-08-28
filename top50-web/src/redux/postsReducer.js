const initialState = { data: [], isLoading: false, error: null };

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, data: { isLoading: true } };

    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        data: action.payload, isLoading: false, error: null
      };

    case 'FETCH_POSTS_ERROR':
      return {
        ...state,
        data: [], isLoading: false, error: action.payload
      };

    case 'DISMISS_ALL_POSTS':
      return {
        ...state,
        data: [], isLoading: false, error: action.payload
      };

    default:
      return state;
  }
};

export default postsReducer;
