import { useNavigate } from "react-router-dom";


const About = () => {
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
        navigate("/dash");
      };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <p>this is the about page</p>
    </div>
  );
}

export default About
