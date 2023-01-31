import React from 'react'
import styles from "./Card.module.scss"
import { ICard } from './Card.types'
import { RowComponents } from './RowComponents/RowComponents'
export const Card = ({cardHeading,buttonText1,buttonText2,Date,dispatch,state}:ICard) => {
 
  return (
    <div className={styles.card}>
        <div className={styles.cardHeading}>{cardHeading}</div>
        <RowComponents Date={Date}
        state={state}
        dispatch={dispatch}
        cardHeading={cardHeading}
        buttonText1={buttonText1}
        buttonText2={buttonText2}/>
        
    </div>
  )
}
