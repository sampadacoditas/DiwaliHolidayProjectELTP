import React, { useReducer, createContext } from "react";
import { database } from "../../Mock/Mock";
import { Card } from "../Card/Card";
import { reducer } from "../Card/ReducerFunction/ReducerFunction";
import styles from "./Main.module.scss"

export const Context=createContext<any>({});

// eslint-disable-next-line react-hooks/rules-of-hooks

export const Main = () => {
  const [state,dispatch]=useReducer<any>(reducer,database)
  // @ts-ignore
  const all:any=state.filter((item:any)=>{
    return item.status==="all";
  })
  // @ts-ignore
  const planned:any=state.filter((item:any)=>{
    return item.status==="planned";
  })
  // @ts-ignore
  const floater:any=state.filter((item:any)=>{
    return item.status==="floater";
  })
  return (
    // <Context.Provider value={{dispatch,state}}>
      <div className={styles.main}>
       
        <Card Date={all} dispatch={dispatch}
        cardHeading={"Not On All Leave"} buttonText1={"planned"} buttonText2={"floater"} />
        <Card  Date={planned} dispatch={dispatch}
        cardHeading={"Planned Leave"} buttonText1={"all"} buttonText2={"floater"} />
        <Card Date={floater} dispatch={dispatch}
        cardHeading={"floater Leave"} buttonText1={"planned"} buttonText2={"all"}/>
      </div>
      // </Context.Provider>
  
  );
};
