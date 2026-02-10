import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      <button onClick={() => alert(message)}>Send</button>
    </div>
  );
}

export default Contact;