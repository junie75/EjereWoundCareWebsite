import React, { useState, useEffect } from "react";
import "./ChatWidget.css";

const ChatWidget = ({ isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasShaken, setHasShaken] = useState(false);
  const [opened, setOpened] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !opened) {
      setOpened(true);
      setShowNotification(false);
      setShouldShake(false);
    }
  };

  useEffect(() => {
    // Shake animation will last 0.5s, so remove it after that
    if (isHomePage) {
      const timer = setTimeout(() => {
        setShouldShake(true);
      }, 1000);
      //   setShowNotification(true);
      const timer2 = setTimeout(() => {
        setShowNotification(true);
      }, 2000);
      //   return () => {
      //     clearTimeout(timer);

      //   };
    }
  }, [isHomePage, hasShaken]);

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-widget-content">
          <a
            href="tel:3022723625"
            className="chat-widget-item"
            aria-label="Phone"
          >
            <span className="material-symbols-outlined icon-contact">
              phone
            </span>
          </a>
          <a
            href="mailto:referrals@ejerewoundcare.com"
            className="chat-widget-item"
            aria-label="Email"
          >
            <span className="material-symbols-outlined icon-contact">Mail</span>
          </a>
          <a
            // href="https://www.instagram.com/manmadekennels1"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-widget-item"
            aria-label="Instagram"
          >
            <span className="material-symbols-outlined icon-contact">Home</span>
          </a>
          <a
            href="https://www.instagram.com/manmadekennels1"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-widget-item"
            aria-label="Instagram"
          >
            <span className="material-symbols-outlined icon-contact">fax</span>
          </a>
        </div>
      )}

      {isOpen ? (
        <span
          className="material-symbols-outlined icon-contact chat-widget-toggle"
          onClick={toggleWidget}
        >
          close
        </span>
      ) : (
        <span
          className={`material-symbols-outlined icon-contact chat-widget-toggle ${
            shouldShake ? "shake-animation" : ""
          }`}
          onClick={toggleWidget}
        >
          chat
          {/* {showNotification && <span className="notifBubble">2</span>} */}
          <span className={`notifBubble ${showNotification ? "" : "hide"}`}>
            2
          </span>
        </span>
      )}
    </div>
  );
};

export default ChatWidget;
