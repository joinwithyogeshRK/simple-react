import { useNavigate } from "react-router-dom"


const Slash = () => {
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
        navigate("/home");
      };
  return (
    <div>
      this si the slash page 
<button onClick={handleClick}>click</button>
    </div>
  )
}

export default Slash
