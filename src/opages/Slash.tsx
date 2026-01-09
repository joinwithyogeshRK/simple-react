import { useNavigate } from "react-router-dom"


const Slash = () => {
    const navigate = useNavigate()
  return (
    <div>
      this si the slash page 
<button onClick={()=> navigate('/home')}>click</button>
    </div>
  )
}

export default Slash
