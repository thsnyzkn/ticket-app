import {FETCH_EVENT} from "./actionTypes";
import axios from "axios";



export const fetchEvents=(query="",page=0)=>{
  return async (dispatch) => {
    try{
        const result = await axios(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&page=${page}&size=20&apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3`)
        dispatch(setEvents(result))
    }catch(error){
        throw(error)
    }
  }
}

const setEvents = (events)=>{
  return {
    type:FETCH_EVENT,
    payload:events
  }
}