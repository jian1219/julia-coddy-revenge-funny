import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import "../css/Home.css"; // Import external CSS

import eyes from "../icons/eye.png"

function Home() {
    const [viewers, setViewers] = useState([]);

    useEffect(() => {
      fetchViewers();
    }, []);
  
    async function fetchViewers() {
      const { data, error } = await supabase.from("viewer").select("*");
  
      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setViewers(data);
      }
    }



  const targetDate = new Date("2025-02-19T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
       <div className="absolute">
            <div className="flex">
                <img src={eyes} alt="" />
                <h2>{viewers.length}</h2>
            </div>
       </div>
      
        <h3>WTF, this countdown is taking its sweet-ass time, but the surprise will be worth the fucking wait!" ⏳❄️🔥</h3>
        <div className="countdown">
            <span>{timeLeft.days}d</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
            <span>{timeLeft.seconds}s</span>
        </div>  
    </div>
  );
}

export default Home;
