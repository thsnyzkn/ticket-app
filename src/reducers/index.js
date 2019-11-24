import {
  FETCH_EVENT_SUCCESS,
  FETCH_EVENTS_BEGIN,
  PAGINATE_NEXT,
  PAGINATE_PREV,
  PAGE_NUMBER,
  FETCH_EVENT_ERROR,
  SEARCH_QUERY,
  FETCH_EVENT_DETAIL
} from "../actions/actionTypes";
const initialState = {
  events: [],
  loading: false,
  error: null,
  query: "",
  page: 0,
  id:""
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        events: action.events,
        page:0,
        loading:false
      };
    case FETCH_EVENTS_BEGIN:
      return {
        ...state,
        loading:true,
      }
    case FETCH_EVENT_ERROR:
      return {
        ...state,
        error:action.error
      }
    case FETCH_EVENT_DETAIL:
      return {
        ...state,
        id:action.id
      }
    case PAGINATE_NEXT:
      return {
        ...state,
        page: action.page,
        events: action.events,
        loading:false
      };
    case PAGINATE_PREV:
      return {
        ...state,
        page: action.page,
        events: action.events,
        loading:false
      };
    case PAGE_NUMBER:
      return {
        ...state,
        page:action.page 
      }
    case SEARCH_QUERY:
      return {
        ...state,
        query:action.query
      }
    default:
      return state;
  }
};


