import { useNavigate } from "react-router-dom";


const Found = () => {
     const navigate = useNavigate();
  return (
    <div>
      <p>
        <button onClick={() => navigate("/dash")}>click</button>
        this is the found page
      </p>
    </div>
  );
}

export default Found
