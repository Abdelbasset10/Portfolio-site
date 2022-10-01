const initialState = {
    darkMode:false
}

const themeReducer = (state=initialState,action) => {
    switch(action.type){
        case 'DARK': 
            return {...state,darkMode :true}
        case 'LIGHT' : 
        return {...state,darkMode :false}
        default : return state    
    }
}

export default themeReducer