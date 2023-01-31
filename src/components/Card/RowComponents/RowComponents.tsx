import React, { useContext } from 'react'
import { Button } from '../../Button/Button'
import { Main } from '../../Main/Main'

export const RowComponents = ({buttonText1,buttonText2,Date,dispatch,state,cardHeading}:any) => {
  
  return (
    <div>
        <>
          {
            Date?.map((element:any)=>{
              return(
              <div>
                {element.date}
                {element.status==="all" && <><Button text={buttonText1} onClick={() => dispatch({ type: "planned", payload: element })} /><Button text={buttonText2} onClick={() => dispatch({ type: "floater", payload: element })} /></>}
                {element.status==="planned" && <><Button text={buttonText1} onClick={() => dispatch({ type: "all", payload: element })} /><Button text={buttonText2} onClick={() => dispatch({ type: "floater", payload: element })} /></>}
                {element.status==="floater" && <><Button text={buttonText1} onClick={() => dispatch({ type: "planned", payload: element })} /><Button text={buttonText2} onClick={() => dispatch({ type: "all", payload: element })} /></>}
                
              </div>
              )
            })
          }
        </>
       
    </div>
  )
}

