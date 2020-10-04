import React, { useState, createContext } from "react";

const config = { 
    showFooter: true,
    showHeader: true,
    showSideBar: true
 }
export const GlobalContext = createContext({
  config,
  changeConfig: ()=>{}
});


export function GlobalProvider(props) {
const [state,setState] = useState({config,changeConfig});

function changeConfig(config){
  config = {...state.config,...config};
  setState({...state,config});
}

return (
   <GlobalContext.Provider value={state}>
      {props.children}
    </GlobalContext.Provider>
  );
}
