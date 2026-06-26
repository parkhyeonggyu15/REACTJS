//01
function handlerClick_01(){
    console.log("clicked_01...");
}

export function Component_Event_01(){
    return (
        <div>
            <h2>Component_Event_01...</h2>
            <button onClick={handlerClick_01}>CLICK_ME</button>
        </div>
    )
}

export function Component_Event_02(){
    //state

    //handler
    function handlerClick_02(){
        console.log("clicked_02...")
    }
    //jsx
    return (
        <div>
            <h2>Component_Event_02...</h2>
            <button onClick={handlerClick_02}>CLICK_ME</button>
        </div>
    )
}
export function Component_Event_03(){
    //state

    //handler
    function handlerKeyDown(e){
        console.log("keyDown...",e.target.value);
    }
    //ul
    return (
        <div>
            <h2>Component_Event_03...</h2>
            <input onKeyDown={handlerKeyDown} />
        </div>
    )
}