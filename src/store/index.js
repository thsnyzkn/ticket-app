import {
  FETCH_EVENT,
  PAGINATE_NEXT,
  PAGINATE_PREV,
  PAGE_NUMBER
} from "../actions/actionTypes";
const initialState = {
  events: [],
  isLoading: false,
  isError: false,
  query: "",
  page: 0
};
let pageNumber=0;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENT:
      return {
        ...state,
        events: action.events,
       
      };
    case PAGINATE_NEXT:
      return {
        ...state,
        page: action.page,
        events: action.events
      };
    case PAGINATE_PREV:
      return {
        ...state,
        page: action.page,
        events: action.events
      };
    case PAGE_NUMBER:
      return {
        ...state,
        page:action.page + 1
      }
    default:
      return state;
  }
};

export default reducer;
