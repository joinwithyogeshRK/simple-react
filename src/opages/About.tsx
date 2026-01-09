import { useNavigate } from "react-router-dom";


const About = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate("/")}>click</button>
      <p>this is the about page</p>
    </div>
  );
}

export default About
