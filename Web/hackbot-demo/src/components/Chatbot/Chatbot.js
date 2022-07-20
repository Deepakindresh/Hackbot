import React from 'react'

function Chatbot() {
  return (
    <div style={{position:"sticky", backgroundColor:"black", zIndex: "999", display:"flex", justifyContent: "left", marginLeft:"5px"}}>
        <iframe src="https://web.powerva.microsoft.com/environments/Default-d4963ce2-af94-4122-95a9-644e8b01624d/bots/new_bot_466369c749634a8a82af1716433ff342/webchat" style={{width: "30%", height: "400px", backgroundColor:"white", position:"fixed", bottom:"0"}}></iframe>
    </div>
  )
}

export default Chatbot