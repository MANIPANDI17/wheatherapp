// import React from 'react';
// import Register from './components/register';

// function App() {
//   return (
//     <div className="App">
//       <Register />
//     </div>
//   );
// }

// export default App;

// import React, { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Signup from "../src/dashbord/signup";
// import Login from "../src/dashbord/login";
// import Dashboard from "../src/dashbord/dashbord";
// import { AuthProvider, AuthContext } from "../src/dashbord/contact";

// function PrivateRoute({ children }) {
//   const { user } = useContext(AuthContext);
//   return user ? children : <Navigate to="/login" />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css"

// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "", password: "", age: "" });
//   const [editId, setEditId] = useState(null);

//   const API_URL = "http://localhost:5001/users";

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const res = await axios.get(API_URL);
//     setUsers(res.data);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (editId) {
//       await axios.put(`${API_URL}/${editId}`, form);
//       setEditId(null);
//     } 
//     else {
//       await axios.post(API_URL, form);
//     }
//     setForm({ name: "", email: "", password: "", age: "" });
//     fetchUsers();
//   };


//   const handleEdit = (user) => {
//     setForm(user);
//     setEditId(user._id);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     fetchUsers();
//   };

//   return (
//     <div className="container">
      

//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//         <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//         <input type="password"  name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
//         <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
//         <button type="submit">{editId ? "Update User" : "Add User"}</button>
//       </form>

  
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th><th>Email</th><th>Password</th><th>Age</th><th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u) => (
//             <tr key={u.id}>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//               <td>{u.password}</td>
//               <td>{u.age}</td>
//               <td>
//                 <button onClick={() => handleEdit(u)}>Edit</button>
//                 <button onClick={() => handleDelete(u._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//   );
// }

// import React, { useState } from "react";
// import axios from "axios";
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function OtpForm() {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState("email"); // "email" | "otp"
//   const [msg, setMsg] = useState("");

//   const sendOtp = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/send-otp", { email });
//       setMsg(res.data.message);
//       setStep("otp");
//     } catch (err) {
//       setMsg("Failed to send OTP");
//     }
//   };
 
//   const verifyOtp = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/verify-otp", { email, otp });
//       setMsg(res.data.message);
//     } catch (err) {
//       setMsg("Invalid OTP");
//     }
//   };


//   const resendOtp = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/resend-otp", { email });
//       setMsg(res.data.message);
//     } catch (err) {
//       setMsg("Failed to resend OTP");
//     }
//   };



//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
//       <h2>OTP Verification</h2>

//       {step === "email" && (
//         <>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br /><br />
//           <button onClick={sendOtp}>Send OTP</button>
//         </>
//       )}

//       {step === "otp" && (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <br /><br />
          
//       <Button variant="success " onClick={verifyOtp}> verifyOtp</Button>
//           <Button variant="warning" onClick={resendOtp}>resendOtp</Button>
//         </>
//       )}
        
//       <p>{msg}</p>
//     </div>    
    
//   );
// }

// export default OtpForm;

import React from 'react'
import Weather from '../src/wheatherapp/wheather'  // ✅ Capitalized import

const App = () => {
  return (
    <div className='app'>
      <Weather />   {Weather}
    </div>
  )
}

export default App

