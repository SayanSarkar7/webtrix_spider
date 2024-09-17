import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name,email,message);
    const data={
      Name:name,
      Email:email,
      Message:message
    };
    axios.post('https://sheet.best/api/sheets/a8d6d88c-8d17-4def-93bd-22973adb0bf2',data).then((response)=>{
      console.log(response);
      //clearing from fields
      setName('');
      setEmail('');
      setMessage('');
      
    })
    
  }


  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Abc" onChange={(e)=>setName(e.target.value)} value={name} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Abc@xyz.com" onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell Us About Your Query" onChange={(e)=>setMessage(e.target.value)} value={message}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;