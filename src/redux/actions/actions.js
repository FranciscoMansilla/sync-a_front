import axios from "axios"
import ActionType from "./types"




const actions = {
  login: (data)=>{
    return (dispatch)=>{

    }
  },
  AddSneaker: (data)=>{
    return(dispatch)=>{
      axios.post(`/sneaker/`,data)
      .then(response => 
        dispatch({
          type: ActionType.ADD_SNEAKER,
          payload: response.data,
        })
      );
    }
  }
}

export default actions