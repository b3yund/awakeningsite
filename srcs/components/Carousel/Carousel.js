import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import styles from './Carousel.module.css';




function Carousel({ component, theList }) {
  const lefBtnRef = useRef(null);
  const rgtBtnRef = useRef(null);
  const slideRef = useRef(null);
  const [slideIn, setSlideIn] = useState(false);
  const [count, setCount] = useState(0);
  const [theWidth, setTheWidth] = useState(50);
  const [currentMargin, setCurrentMargin] = useState(0);
  const [comingMargin, setComingMargin] = useState(0);
  const slides = theList
  

  useEffect(() => { 
    if (slideRef.current) {
      setTheWidth(toVW(slideRef.current.getBoundingClientRect().width));
    }
  }, [slideRef])


  function getMargins() {
    const slideVW = theWidth;
    console.log(count)
    const prevMargin = (count - 1 >= 0) ? (count - 1) % slides.length * -1 * slideVW : ((slides.length - 1) * -1 * slideVW);
    const curMargin = (count % slides.length * -1) * slideVW;
    const nextMargin = ((count + 1) % slides.length * -1) * slideVW;
    return [prevMargin, curMargin, nextMargin]
  }

  function prevAnim() {
    disableButtons();
    setSlideIn(true);
    setTimeout(() => {
      setSlideIn(false);
      enableButtons();
    }, 2000);
    const margList = getMargins();
    setCurrentMargin(margList[1]);
    setComingMargin(margList[0]);
    setCount(prevCount => prevCount - 1 >= 0 ? prevCount - 1 : slides.length - 1);
  }
  

  function nextAnim() {
    disableButtons();
    setSlideIn(true);
    setTimeout(() => {setSlideIn(false); enableButtons()}, 2000);
    const margList = getMargins()
    setCurrentMargin(margList[1])
    setComingMargin(margList[2])
    setCount(count + 1)
  }

  function toVW(objWidth) {
    return objWidth / window.innerWidth * 100;
  }

  function disableButtons() {
    lefBtnRef.current.disabled = true
    rgtBtnRef.current.disabled = true
  }

  function enableButtons() {
    lefBtnRef.current.disabled = false
    rgtBtnRef.current.disabled = false
  }

  return (
    <div className={styles.carContainer}>
      <button className={styles.slideButtons} id={styles.prevButton} ref={lefBtnRef} onClick={() => {prevAnim()}}>&lt;</button>
      <div id={styles.content} ref={slideRef} style={{'--theWidth': theWidth}}> {/*contentWidth*/}
        <div id={slideIn ? styles.slidesAnim : styles.slides} style={{'--currentMargin': currentMargin, '--nextMargin': comingMargin, width: (String(theWidth * slides.length) + 'vw'), marginLeft: (String(comingMargin) + 'vw')}}>
          {slides.map((slide, index) => (
          React.cloneElement(component, {...slide, wid: theWidth, className: styles.item, key: index})
          ))}
        </div>
      </div>
      <button className={styles.slideButtons} id={styles.nextButton} ref={rgtBtnRef} onClick={() => {nextAnim();}}>&gt;</button>
    </div>
  );
}

export default Carousel;
