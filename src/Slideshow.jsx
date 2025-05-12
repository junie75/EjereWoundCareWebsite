// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "./CustomCarousel.css";

// export default function Slideshow({ array }) {
//   const getConfigurableProps = () => ({
//     showArrows: false,
//     showStatus: false,
//     showIndicators: true,
//     infiniteLoop: true,
//     showThumbs: false,
//     useKeyboardArrows: true,
//     autoPlay: true,
//     stopOnHover: true,
//     swipeable: true,
//     dynamicHeight: false,
//     emulateTouch: true,
//     autoFocus: false,
//     thumbWidth: 100,
//     selectedItem: 0,
//     interval: 5000,
//     transitionTime: 500,
//     swipeScrollTolerance: 5,
//     ariaLabel: undefined,
//   });

//   return (
//     <Carousel {...getConfigurableProps()} className="">
//       {
//         //iterate over the array of objects, each object being a react component?
//         array.map((obj, index) => (
//           //for each object, create a picture element with a
//           //source element for the mobile image and a source element for the desktop image
//           //browser will choose the appropriate image based on the media query
//           //   <picture className="slide desktop" key={index}>
//           //     <source
//           //       type="image/avif"
//           //       srcSet={image.desktop}
//           //       media="(min-width: 1024px)"
//           //       className="slideImage desktop"
//           //     />
//           //     <img
//           //       className="slideImage"
//           //       src={image.mobile}
//           //       alt={`carousel${index + 1}`}
//           //       width={1200}
//           //       height={900}
//           //     />
//           //   </picture>
//           <div className="" key={index} style={{ width: "30%" }}>
//             <div>{obj}</div>
//           </div>
//         ))
//       }
//     </Carousel>
//   );
// }

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Slideshow.css";

export default function Slideshow({ array, orientation = "horizontal" }) {
  // state to store the width of the carousel
  const [width, setWidth] = useState(0);

  // reference to the carousel element
  const carouselRef = useRef();

  //calculate the width of the carousel to determine how far it can scroll by subtracting the visible width from the total width
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carouselRef} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }} //constrains the drag to the width of the carousel so it doesn't scroll past the images
        className="innerCarousel"
      >
        {
          //map through the images and display them in a vertical or horizontal orientation
          orientation === "vertical"
            ? array.map((obj, index) => {
                return (
                  <motion.div className="carouselItemVert" key={index}>
                    {obj}
                  </motion.div>
                );
              })
            : array.map((obj, index) => {
                return (
                  <motion.div className="carouselItemHoriz" key={index}>
                    {obj}
                  </motion.div>
                );
              })
        }
      </motion.div>
    </motion.div>
  );
}
