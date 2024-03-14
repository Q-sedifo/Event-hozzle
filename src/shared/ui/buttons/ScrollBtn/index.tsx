"use client"
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export const ScrollBtn = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const handleScroll = (e: Event) => {
    if (window.scrollY > 500) {
      setIsShow(true)
      return
    }

    setIsShow(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return isShow ? (
    <button className="fixed bottom-5 right-5 z-[20] flex items-center justify-center bg-cyan p-3 text-white" onClick={handleClick}>
      <FaArrowUp className="h-[20px] w-[20px]"/>
    </button>
  ) : null
}