import ActionType from "../actions/types"

const initialState = {
  response_AddSneaker:{},
  allSneakers:[],
  sneakerDetail: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_SNEAKER:
      return{
        ...state,
        response_AddSneaker:action.payload
      }
    case ActionType.GET_SNEAKERS:
      return{
        ...state,
        allSneakers:action.payload
      }
    default:
      return state
  }
}
export default reducer