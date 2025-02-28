import { useState } from "react";
import "./App.css";

const notificationsData = [
    {
      id: 1,
      type: "like",
      user: "john_doe",
      message: "liked your story",
      time: "2h ago",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      type: "follow",
      user: "emma_watson",
      message: "started following you",
      time: "3h ago",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      type: "comment",
      user: "michael_smith",
      message: "commented: 'Awesome shot!'",
      time: "5h ago",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      type: "mention",
      user: "sophia_jones",
      message: "mentioned you in a story",
      time: "1h ago",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];  

const Notifications = ({ onClose }) => {
  const [notifications, setNotifications] = useState(notificationsData);

  return (
    <div className="notifications-container">
        <div className="notify-div">
            <button className="close-btn" onClick={onClose}>⬅</button>
            <h2 className="notifications-title">Notifications</h2>
        </div>
        <h3 className="day-title">
            Today
        </h3>
      <div className="notifications-list">
        {notifications.map((notif) => (
          <div key={notif.id} className="notification">
            <img src={notif.avatar} alt={notif.user} className="avatar" />
            <div className="notification-content">
              <p>
                <b className="user-name">{notif.user}</b> {notif.message}
              </p>
              <p className="time">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;