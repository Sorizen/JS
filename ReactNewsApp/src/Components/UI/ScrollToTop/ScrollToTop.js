import React from "react";
import './ScrollToTop.css';
const ScrollToTop = (props) =>{
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    window.addEventListener('scroll', props.setVisible);
    return(
        <div className="ScrollToTop-wrapper">
            <div className={'ScrollToTop-button'} onClick={scrollToTop}>
                <span>Scroll to top</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3333C5.40001 18.3333 1.66668 14.6 1.66668 9.99998C1.66668 5.39998 5.40001 1.66665 10 1.66665C14.6 1.66665 18.3333 5.39998 18.3333 9.99998C18.3333 14.6 14.6 18.3333 10 18.3333ZM9.16668 9.99998L9.16668 13.3333H10.8333V9.99998L13.3333 9.99998L10 6.66665L6.66668 9.99998H9.16668Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}
export default ScrollToTop