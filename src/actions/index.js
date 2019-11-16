import {
  FETCH_EVENT,
  SEARCH_ITEM,
  PAGINATE_NEXT,
  PAGINATE_PREV,
  PAGE_NUMBER
} from "./actionTypes";
import axios from "axios";

export const fetchEvents = (query,page) => {
  return async dispatch => {
    try {
      const result = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3&keyword=${query}&page=${page}`
      );
      dispatch(setEvents(result.data._embedded.events));
      console.log("fetchEvents", result.data._embedded);
    } catch (error) {
      throw error.response;
    }
    
  };
};
export const fetchNextPage = (query,page) => {
  page++;
  return async dispatch => {
    try {
      const result = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3&keyword=${query}&page=${page}`
      );
     
      dispatch(nextPages(result.data._embedded.events,page));
      
      console.log("fetchNextEvents", result.data._embedded);
    } catch (error) {
      throw error.response;
    }
  };
};
export const fetchPrevPage = (query,page) => {
  page--;
  return async dispatch => {
    try {
      const result = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3&keyword=${query}&page=${page}`
      );
   
      dispatch(prevPages(result.data._embedded.events,page));
      
      console.log("fetchPrevEvents", result.data._embedded);
    } catch (error) {
      throw error.response;
    }
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
const setEvents = (events) => {
  return {
    type: FETCH_EVENT,
    events
  };
};
const setPage = (page) => {
  return {
    type: PAGE_NUMBER,
    page
  }
}

