import React from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import "../css/Home.css"; // Import external CSS

function Welcome() {
  const navigate = useNavigate();

  const handleContinue = async () => {
    // Insert new viewer record
    const { error } = await supabase.from("viewer").insert([{ name: "julia_pangit" }]);

    if (error) {
      console.error("Error inserting viewer:", error.message);
    } else {
      console.log("Viewer added successfully!");
      navigate("/home"); // Navigate to Home page
    }
  };

  return (
    <div className="welcome-container">
      <h1>Welcome! 🖕</h1>
      <button onClick={handleContinue} className="continue-button">
        CONTINUE
      </button>
    </div>
  );
}

export default Welcome;
