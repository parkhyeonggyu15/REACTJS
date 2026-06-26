import {useState,useEffect} from "react"

const EventComponent_04 = ()=>{
    const [state,setState] = useState("")

    const handlerChange = (e)=>{
        // console.log("onChange...",e)
        const {name,value,type,checked} = e.target;
        console.log(name,value,type,checked);
        setState(value);
    }
    return (

        <div>
            <hr/>
            {state} 
            <hr/> 
            <input type="text" onChange={handlerChange} /> <br />
            <input type="checkbox" onChange={handlerChange} /> 체크박스<br />
            <input type="radio" name="radio" value="r1" onChange={handlerChange} /> 선택1<br />
            <input type="radio" name="radio" value="r2" onChange={handlerChange} /> 선택2<br />
        </div>
    )
}

export default EventComponent_04;