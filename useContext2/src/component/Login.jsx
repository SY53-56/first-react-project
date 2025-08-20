import React , {useState,useContext} from 'react'
import userContext from '../context/UserContext'

export default function Login() {
    const [username,setUsername] = useState("")
    const [password ,setPassword] = useState('')

    const {setUser} = useContext(userContext)
  function handleSubmit(e){
 e.preventDefault()
 setUser({username,password})
  }
  return (
    <div>
        <h1>login</h1>
        <input type="text" name="" id="" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input type="text" name="" id=""value={password}  placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
