//setup data layer
// we need this to track the basket
import React , {createContext , useReducer ,useContext} from 'react'
import reducer from './reducer'

// this is data layer

const initialState = {
    basket: [],
    user : null,
}
export const StateContext = createContext();

// build a provider and wrap entire app inside it
export const StateProvider = ({children}) => {

    

    return(
    <StateContext.Provider value = {useReducer(reducer , initialState)}>           
    {children}
    </StateContext.Provider>
    ) 
}

export const useStateValue = () => useContext(StateContext)
