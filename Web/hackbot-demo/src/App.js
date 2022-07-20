import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import { BotButton } from './components/Chatbot/ChatbotElements';


function App() {
  const [chatbotSwitch, setChatbotSwitch] = useState(false)
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <div>
        <BotButton onClick={() => setChatbotSwitch(!chatbotSwitch)}>
          <img src='https://uxwing.com/wp-content/themes/uxwing/download/37-communication-chat-call/chatbot.png' style={{height: "2rem", width: "2rem"}} alt="+"></img>
        </BotButton>

      </div>
      {
        chatbotSwitch ? <Chatbot /> : null
      }
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
