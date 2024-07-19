import React, { useState, useEffect } from "react";
import "./ChatWidget.css";

const ChatWidget = ({ isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  // const [opened, setOpened] = useState(false);
  const [opened, setOpened] = useState(
    //get the value from local storage, if it's not there, default to false
    sessionStorage.getItem("chatWidgetOpened") === "true"
  );

  const [phoneClicked, setPhoneClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);
  const [addressClicked, setAddressClicked] = useState(false);
  const [faxClicked, setFaxClicked] = useState(false);

  const toggleIcon = (iconName) => {
    switch (iconName) {
      case "phone":
        setPhoneClicked(!phoneClicked);
        break;
      case "email":
        setEmailClicked(!emailClicked);
        break;
      case "address":
        setAddressClicked(!addressClicked);
        break;
      case "fax":
        setFaxClicked(!faxClicked);
        break;
      default:
        break;
    }
  };

  const toggleWidget = () => {
    //if the widget is open, close it, if it's closed, open it
    setIsOpen(!isOpen);

    //if widget is being closed, close the icon popups
    if (!isOpen) {
      setPhoneClicked(false);
      setEmailClicked(false);
      setAddressClicked(false);
      setFaxClicked(false);
    }

    //if the widget is opened for the fist time, set the opened state to true
    if (!isOpen && !opened) {
      setOpened(true);
      //save the opened state to local storage
      sessionStorage.setItem("chatWidgetOpened", "true");
      //reset the notification and shake states
      setShowNotification(false);
      setShouldShake(false);

      // Remove after 24 hours
      // setTimeout(() => {
      //   sessionStorage.removeItem("chatWidgetOpened");
      //   setOpened(false); // Optionally reset opened state in component
      //   // }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
      // }, 10 * 1000); // 2 minutes for testing
    }
  };

  useEffect(() => {
    // localStorage.removeItem("chatWidgetOpened");
    // Shake animation will last 0.5s, so remove it after that
    if (!opened) {
      const timer = setTimeout(() => {
        setShouldShake(true);
      }, 3000);
      const timer2 = setTimeout(() => {
        setShowNotification(true);
      }, 4000);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [opened]);

  // const openUserMaps = (event) => {
  //   event.preventDefault();

  //   const query = encodeURIComponent(
  //     "Ejere Wound Care and Hyperbaric Oxygen Therapy, 730 Eureka St, Weatherford, TX 76086"
  //   );
  //   const userAgent = navigator.userAgent;

  //   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  //     // Open in Apple Maps on iOS
  //     // window.location.href = `http://maps.apple.com/?q=${query}`;
  //     window.open(`http://maps.apple.com/?q=${query}`, "_blank");
  //   } else {
  //     // Open in Google Maps on web and Android
  //     // window.location.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
  //     window.open(
  //       `https://www.google.com/maps/search/?api=1&query=${query}`,
  //       "_blank"
  //     );
  //   }
  // };

  return (
    <div className="widgetContainer">
      <div
        className={`messageBubble ${!isOpen && showNotification ? "" : "hide"}`}
      >
        <p>Contact Us</p>
      </div>
      <div className="chat-widget">
        {isOpen && (
          <div className="chat-widget-content">
            <a
              href="#"
              className={`chat-widget-item ${isOpen ? "roll-out" : ""}`}
              aria-label="Phone"
            >
              <span
                className={`material-symbols-outlined icon-contact ${
                  phoneClicked ? "join" : ""
                }`}
                onClick={() => toggleIcon("phone")}
              >
                <span
                  className={`icon-contact rollOut ${
                    !phoneClicked ? "hide" : ""
                  }`}
                >
                  {phoneClicked ? "Phone: (682) 582-2898" : ""}
                </span>
                phone
              </span>
            </a>
            <a
              href="#"
              className={`chat-widget-item ${isOpen ? "roll-out" : ""}`}
              aria-label="Email"
            >
              <span
                className={`material-symbols-outlined icon-contact ${
                  emailClicked ? "join" : ""
                }`}
                onClick={() => toggleIcon("email")}
              >
                <span
                  className={`icon-contact rollOut ${
                    !emailClicked ? "hide" : ""
                  }`}
                >
                  {emailClicked ? "referrals@ejerewoundcare.com" : ""}
                </span>
                Mail
              </span>
            </a>
            <a
              href="#"
              // onClick={openUserMaps}
              className={`chat-widget-item ${isOpen ? "roll-out" : ""}`}
              aria-label="Address"
            >
              <span
                className={`material-symbols-outlined icon-contact ${
                  addressClicked ? "join" : ""
                }`}
                onClick={() => toggleIcon("address")}
              >
                <span
                  className={`icon-contact rollOut ${
                    !addressClicked ? "hide" : ""
                  }`}
                >
                  {addressClicked
                    ? "730 Eureka St., Weatherford, TX, 76086"
                    : ""}
                </span>
                location_on
              </span>
            </a>
            <a
              href="#"
              className={`chat-widget-item ${isOpen ? "roll-out" : ""}`}
              aria-label="Fax"
            >
              <span
                className={`material-symbols-outlined icon-contact ${
                  faxClicked ? "join" : ""
                }`}
                onClick={() => toggleIcon("fax")}
              >
                <span
                  className={`icon-contact rollOut ${
                    !faxClicked ? "hide" : ""
                  }`}
                >
                  {faxClicked ? "Fax: 682-268-2137" : ""}
                </span>
                fax
              </span>
            </a>
          </div>
        )}
        {isOpen ? (
          <div className="toggleContainer">
            <span
              className="material-symbols-outlined icon-contact chat-widget-toggle"
              onClick={toggleWidget}
            >
              close
            </span>
          </div>
        ) : (
          <div className="toggleContainer">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;
