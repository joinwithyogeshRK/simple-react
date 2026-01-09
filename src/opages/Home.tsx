import { useNavigate } from "react-router-dom";


const Home = () => {
     const navigate = useNavigate();
       const handleClick = () => {
         // 1️⃣ Send GA event
         if (window.gtag) {
           window.gtag("event", "button_click", {
             event_category: "interaction",
             event_label: "found_page_button",
           });
         }

         // 2️⃣ Navigate
         navigate("/found");
       };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <p>this is the home page</p>
    </div>
  );
}

export default Home
