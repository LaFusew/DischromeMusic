import { RuntimeMessage } from "./content";

export type MessageType = 'ADD' | 'CLEAR' | 'URL' | 'WRONG_URL'; 

// This file is ran as a background script
console.log("Hello from background script!");

chrome.runtime.onMessage.addListener((message:RuntimeMessage, sender, sendResponce) => {

  if(message.type == 'ADD') {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      console.log(tabs[0]);  
  });
  }

  if(message.type == 'CLEAR') {
    console.log('discord webhook clear');
  }
});

