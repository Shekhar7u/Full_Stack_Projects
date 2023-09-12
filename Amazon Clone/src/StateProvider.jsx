// eslint-disable-next-line no-unused-vars
import React,{createContext,useContext,useReducer} from "react";
//Prepare the datalayer
export const StateContext=createContext();

//wrap our app and provide the Data layer
export const StateProvider=({
    // eslint-disable-next-line react/prop-types
    reducer,initialState,children
})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue= () =>useContext(StateContext);