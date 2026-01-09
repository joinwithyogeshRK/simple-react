import { useNavigate } from "react-router-dom";

const Found = () => {
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
      <p>
        <button onClick={handleClick}>click</button>
        this is the found page
      </p>
    </div>
  );
};

export default Found;
