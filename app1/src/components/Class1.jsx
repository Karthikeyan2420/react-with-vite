
import { Fragment } from 'react'
import '../css/class1.css'
export const Class1 = () => {
    const c1="high";const c2="mark";const istrue=false;
  return (
    <Fragment>{/* fragment is used to group a list of children without adding extra nodes to the DOM */}
    
    <p>just show something</p>
    <h1 className='high'>React Fragment</h1>
    <h1 className={c1}>react + vite</h1>
    <h2 className={istrue?c1:c2}>Find</h2>
    <h3 style={{backgroundColor:"black",color:"red"}}>inline css</h3>
    </Fragment>

    
  )
}
