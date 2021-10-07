import React, { useEffect } from "react";
import "../CSS/Notification.css";
import { useStateValue } from "./StateProvider";
function Notification({ tops, notf }) {
  const [{ notification }, dispatch] = useStateValue();

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "CHANGE__NOT",
      });
    }, 3000);
  }, []);
  return (
    <div className="notification" style={{ top: tops }}>
      <img src={notf.image} className="notification__image" />
      <div className="notification__info">
        <h5>{notf.title}</h5>
      </div>
    </div>
  );
}

export default Notification;
