const initialState={
    movie:{},
}

const movieReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_GETMOVIE_SUCCESS":
            return{
                ...state,
                movie:action.payload,
              }
         default:{
            return{
                ...state
            }
        }    
    }
}

export default movieReducer;