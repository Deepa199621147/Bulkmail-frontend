import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";


function SendEmail() {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [recipients, setRecipients] = useState('');
  const [content, setContent] = useState('');

  const [isSending, setIsSending] = useState(false);

  const sendMail = async () => {

    setIsSending(true);

    const data = {
      name,
      subject,
      recipientEmail:recipients.split(",").map(email => email.trim()),// Splitting and trimming the recipients
      content
    };

    const response = await fetch('http://localhost:8000/users/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(data),
    } );
    const result = await response.json();

    setIsSending(false);
    
    if (response.ok) {
      setName('');
      setSubject('');
      setRecipients('');
      setContent('');
      toast.success(result.message);
    }
    else {
      toast.error(result.message);
    }


  }
  return (
    <div className="fullScreenContainer">
      <div className="loginform">
        <h1>Email Sender</h1>
        <p>Send Bulk Emails using our app</p>
        <div className="inputSection">
          <input 
            type="text" 
            placeholder="Enter your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <select 
            placeholder="Choose the type"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="" disabled>
              Choose subject
            </option>
            <option value="Diwali Sale Offer">Diwali Sale Offer</option>
            <option value="Christmas Sale offer">Christmas Sale offer</option>
            <option value="Ramzan Sale offer">Ramzan Sale offer</option>
          </select>
          
          <textarea 
            placeholder="Enter message" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <input
            type="text"
            placeholder="Enter Recipients Email address (comma separated)"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
          />

          <div className="buttonSection">
            <button className="secondary">Cancel</button>
            <button className="primary" onClick={sendMail}>
              {
                isSending ? "Sending" : "Send Email"
              }
              </button>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default SendEmail;
