
import React, { useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OtpForm() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("email"); // "email" | "otp"
  const [msg, setMsg] = useState("");

  const sendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/send-otp", { email });
      setMsg(res.data.message);
      setStep("otp");
    } catch (err) {
      setMsg("Failed to send OTP");
    }
  };
 
  const verifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/verify-otp", { email, otp });
      setMsg(res.data.message);
    } catch (err) {
      setMsg("Invalid OTP");
    }
  };

  const resendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/resend-otp", { email });
      setMsg(res.data.message);
    } catch (err) {
      setMsg("Failed to resend OTP");
    }
  };



  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>OTP Verification</h2>

      {step === "email" && (
        <>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}

      {step === "otp" && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <br /><br />
          
      <Button variant="success " onClick={verifyOtp}> verifyOtp</Button>
          <Button variant="warning" onClick={resendOtp}>resendOtp</Button>
        </>
      )}
        
      <p>{msg}</p>
    </div>    
    
  );
}

export default OtpForm;


