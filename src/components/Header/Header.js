import React,{useState} from "react"
import ExpenseAdd from "../NewExpense/ExpenseAdd"
import NewExpense from "../NewExpense/NewExpense"

const Header=(props)=>{
    const [show,setShow]=useState(true)

    const clickHandler=()=>{
        setShow(!show)
    }

    return(
        <div>
            {show===true ? 
            (<ExpenseAdd onClicking={clickHandler}/>)
            :
            (<NewExpense onClicking={clickHandler} onAddExpense={props.add}/>)
            }
        </div>
    )
}

export default Header