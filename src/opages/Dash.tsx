import { useNavigate } from "react-router-dom";


const Dash = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate("/about")}>click</button>
      <p>this is the dash page </p>
    </div>
  );
}

export default Dash
