import { useState } from "react"
import Welcome from "./Welcome"
function InteractiveWelcome(){
    const [name,setName] = useState("")
    const change = ((e)=>{
        const nam = e.target.value
        setName(nam)
    })
    return(
        <form>
            <Welcome userName ={name}/>
            <input type="text" onChange={change}/>
        </form>
    )
}
export default InteractiveWelcome