import { useNavigate } from "react-router-dom";


const Home = () => {
     const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/found")}>click</button>
      <p>this is the home page</p>
    </div>
  );
}

export default Home
