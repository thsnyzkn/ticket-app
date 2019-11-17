import {
  FETCH_EVENT_SUCCESS,
  FETCH_EVENTS_BEGIN,
  FETCH_EVENT_ERROR,
  PAGINATE_NEXT,
  PAGINATE_PREV,
  SEARCH_QUERY,
  PAGE_NUMBER,
  FETCH_EVENT_DETAIL
} from "./actionTypes";
import axios from "axios";
const BASE_API = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3&size=10`


export const fetchEvents = (query,page) => {
  return async dispatch => {
    dispatch(fetchBegins())
    try {
      const result = await axios.get(
        `${BASE_API}&keyword=${query}&page=${page}`
      );
      dispatch(setEvents(result.data._embedded.events,query,page));
    } catch (error) {
      const err = dispatch(fetchFailure(error))
      throw err.response
    }
    
  };
};
export const fetchNextPage = (query,page) => {
  return async dispatch => {
    dispatch(setPage(page++))
    dispatch(fetchBegins())
    try {
      const result = await axios.get(
        `${BASE_API}&keyword=${query}&page=${page}`
      );
      dispatch(nextPages(result.data._embedded.events,page));
    } catch (error) {
      const err = dispatch(fetchFailure(error))
      throw err.response
    }
  };
};
export const fetchPrevPage = (query,page) => {
  return async dispatch => {
    dispatch(setPage(page--))
    dispatch(fetchBegins())
    try {
      const result = await axios.get(
        `${BASE_API}&keyword=${query}&page=${page}`
      );
      dispatch(prevPages(result.data._embedded.events,page));
    } catch (error) {
      const err = dispatch(fetchFailure(error))
      throw err.response
    }
  };
};
export const fetchDetails = (id) => {
    return async dispatch => {
      dispatch(fetchBegins())
      try {
          const result = await axios.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3`);
          dispatch(setDetails(result.data,id))
      }catch(error){
        const err = dispatch(fetchFailure(error))
      throw err.response
      }
    }
  }

export const search = (query) => {
  return {
    type:SEARCH_QUERY,
    query
  }
}
export const fetchBegins = () => {
  return {
    type: FETCH_EVENTS_BEGIN
  };
};
export const fetchFailure = (error) => {
  return {
    type:FETCH_EVENT_ERROR,
    error
  }
}

export const setPage = (page) => {
  return {
    type: PAGE_NUMBER,
    page
  };
};

export const nextPages = (events,page) =>{
  return{
    type:PAGINATE_NEXT,
    events,
    page
    
  }
}
export const prevPages = (events,page) =>{
  return{
    type:PAGINATE_PREV,
    events,
    page
  }
}
const setDetails = (event,id) => {
  return {
    type:FETCH_EVENT_DETAIL,
    event,
    id
  }
}
const setEvents = (events,query,page) => {
  return {
    type: FETCH_EVENT_SUCCESS,
    events,
    query,
    page
  };
};


