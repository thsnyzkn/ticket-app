import {FETCH_EVENT} from "../actions/actionTypes";
const initialState = {
  events: [],
  query: "",
  page:0,
  isLoading:false,
  isError:false,
};

const reducer = (state=initialState,action)=>{
  switch(action.type){
    case FETCH_EVENT:
      return state = Object.assign({},state,{events:[...action.payload]});
    default:
      return state;
  }
}

export default reducer;

