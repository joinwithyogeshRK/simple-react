import { useNavigate } from "react-router-dom";


const Dash = () => {
    const navigate = useNavigate();
      const handleClick = () => {
        // 1️⃣ Send GA event
        if (window.gtag) {
          window.gtag("event", "button_click", {
            event_category: "interaction",
            event_label: "found_page_button",
            debug_mode: true,
          });
        }

        // 2️⃣ Navigate
        navigate("/about");
      };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <p>this is the dash page </p>
    </div>
  );
}

export default Dash
