//Component for the chat widget that appears on the bottom right of the screen
//and displays contact information when clicked

import React, { useState, useEffect } from "react";
import "./ChatWidget.css";

const ChatWidget = ({ isHomePage }) => {
  //state variables for the chat widget
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const [opened, setOpened] = useState(
    //get the value from local storage, if it's not there, default to false
    sessionStorage.getItem("chatWidgetOpened") === "true"
  );

  //state variables for the icon-contact popups
  const [phoneClicked, setPhoneClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);
  const [addressClicked, setAddressClicked] = useState(false);
  const [faxClicked, setFaxClicked] = useState(false);

  //function to toggle the icon-contact information popups
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
    }
  };

  useEffect(() => {
    //if the widget has not been opened for the first time, set a timer to shake the widget
    //and show the notification
    if (!opened) {
      // Set an interval to shake the widget and show the notification every 10 seconds
      const interval = setInterval(() => {
        // Shake the widget and then show the notification after 1 second to give the shake animation time to complete
        setShouldShake(true);
        const notificationTimer = setTimeout(() => {
          setShowNotification(true);
        }, 1000);

        // Reset the shake and notification after they are shown for 9 seconds, leaving a 1 second gap between the notification and the shake again
        const resetTimer = setTimeout(() => {
          setShouldShake(false);
          setShowNotification(false);
        }, 9000);

        // Clean up the timers to prevent memory leaks
        return () => {
          clearTimeout(notificationTimer);
          clearTimeout(resetTimer);
        };
      }, 10000);

      // Clean up the interval when the component is unmounted or opened changes
      return () => {
        clearInterval(interval);
      };
    }
  }, [opened]);

  return (
    <div className="widgetContainer">
      <div
        //if the widget is closed and showNotification is true, show the contact us message bubble
        className={`messageBubble ${!isOpen && showNotification ? "" : "hide"}`}
      >
        <p>Contact Us</p>
      </div>
      <div className="chat-widget">
        {
          //if the widget is open, show the contact information popups
          isOpen && (
            <div className="chat-widget-content">
              <a
                href="#"
                // if the widget is being opened, set the roll-out class to animate the icons
                className={`chat-widget-item ${isOpen ? "roll-out" : ""}`}
                aria-label="Phone"
              >
                <span
                  //if the icon is clicked, add the join class to add the contact information to the icon
                  className={`material-symbols-outlined icon-contact ${
                    phoneClicked ? "join" : ""
                  }`}
                  onClick={(e) => {
                    //prevent the page from reloading when the icon is clicked
                    e.preventDefault();
                    //toggle the icon information showing and not showing
                    toggleIcon("phone");
                  }}
                >
                  <span
                    //if the icon is clicked, show the contact information
                    className={`icon-contact rollOut ${
                      !phoneClicked ? "hide" : ""
                    }`}
                  >
                    {phoneClicked ? "Phone: (682) 582-2898" : ""}
                  </span>
                  call
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
                  onClick={(e) => {
                    e.preventDefault();
                    toggleIcon("email");
                  }}
                >
                  <span
                    className={`icon-contact rollOut ${
                      !emailClicked ? "hide" : ""
                    }`}
                  >
                    {emailClicked ? "referrals@ejerewoundcare.com" : ""}
                  </span>
                  mail
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
                  onClick={(e) => {
                    e.preventDefault();
                    toggleIcon("address");
                  }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    toggleIcon("fax");
                  }}
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
          )
        }
        {
          //if the widget is open, show the close icon, if it's closed, show the chat icon
          isOpen ? (
            <div className="toggleContainer">
              <span
                className="material-symbols-outlined icon-contact chat-widget-toggle"
                //when clicked close the widget
                onClick={toggleWidget}
              >
                close
              </span>
            </div>
          ) : (
            <div className="toggleContainer">
              <span
                //if shouldShake is true, add the shake-animation class to the icon
                className={`material-symbols-outlined icon-contact chat-widget-toggle ${
                  shouldShake ? "shake-animation" : ""
                }`}
                onClick={toggleWidget}
              >
                chat
                {/* if showNotification is true, show the notification bubble */}
                <span
                  className={`notifBubble ${showNotification ? "" : "hide"}`}
                >
                  2
                </span>
              </span>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ChatWidget;
