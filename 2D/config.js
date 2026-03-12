// config.js - Configuration for both local and remote modes
const CONFIG = {
  // Remote configuration (default)
  remote: {
    WS_URL: "wss://URL_HOME ASSISTANT/api/websocket",
    TOKEN: "LONG LIVE TOKEN"
  },
  
  // Local configuration - SET YOUR LOCAL VALUES HERE
  local: {
    WS_URL: "ws://IP_HOME ASSISTANT/api/websocket",  
    TOKEN: "LONG LIVE TOKEN"
     },
   
  // Current mode (will be set by user choice)
  currentMode: null
};

// Make them globally available
window.CONFIG = CONFIG;
