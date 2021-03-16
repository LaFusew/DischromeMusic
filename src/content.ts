import { MessageType } from "./background";

export interface RuntimeMessage {
  type: MessageType;
  youtubeVideo?: boolean; 
  url?: string,
}

if (/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/.test(window.location.href)) {
  let message: RuntimeMessage = {
    type: 'URL',
    youtubeVideo: true,
    url: window.location.href
  }
  chrome.runtime.sendMessage(message, (res) => console.log(res));
} else {
  chrome.runtime.sendMessage({type: 'WRONG_URL'}, (res) => console.log(res));
}


chrome.runtime.onMessage.addListener((message, sender, sendRes) => {
  console.log(message);
  sendRes(window.location.href);
})