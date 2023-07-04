import React, {useEffect, useState} from 'react'

const DownToUp = () => {
    const [scrollToTop, setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const myStyle = {
        position: "fixed",
        bottom: "50px",
        right: "50px",
        width: "40px",
        height: "40px",
        fontSize: "22px",
        color: "#FFF",
        border: "none",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "#A08040",
    }
    return (
        <div>
            {scrollToTop && (
                <button style={myStyle} onClick={scrollUp}><i class="fas fa-arrow-up"></i></button>
            )}
        </div>
    )
}

export default DownToUp
