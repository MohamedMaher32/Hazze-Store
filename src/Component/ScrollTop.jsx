import React, { useEffect, useState } from 'react'
export default function ScrollTop() {
    let [ScrollTop, setScrollTop] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                setScrollTop(true)
            }
            else {
                setScrollTop(false)
            }
        })
    }, [])
    let ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            {ScrollTop && (
                <i className="fa-solid fa-arrow-up" style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    padding: "10px",
                    fontSize: "20px",
                    cursor: "pointer",
                    backgroundColor: "#e32879",
                    color: "#fff",
                    textAlign: "center",

                }} onClick={ScrollUp}></i>
            )}
        </>
    )
}
