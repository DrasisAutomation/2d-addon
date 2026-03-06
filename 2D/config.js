// config.js - Configuration for both local and remote modes
const CONFIG = {
  // Remote configuration (default)
  remote: {
    WS_URL: "wss://demo.lumihomepro1.com/api/websocket",
    TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzNGNlNThiNDk1Nzk0NDVmYjUxNzE2NDA0N2Q0MGNmZCIsImlhdCI6MTc2NTM0NzQ5MSwiZXhwIjoyMDgwNzA3NDkxfQ.Se5PGwx0U9aqyVRnD1uwvCv3F-aOE8H53CKA5TqsV7U"
  },
  
  // Local configuration - SET YOUR LOCAL VALUES HERE
  local: {
    WS_URL: "ws://192.168.2.25:8123/api/websocket",  
    TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzNGNlNThiNDk1Nzk0NDVmYjUxNzE2NDA0N2Q0MGNmZCIsImlhdCI6MTc2NTM0NzQ5MSwiZXhwIjoyMDgwNzA3NDkxfQ.Se5PGwx0U9aqyVRnD1uwvCv3F-aOE8H53CKA5TqsV7U"
 },
   
  // Current mode (will be set by user choice)
  currentMode: null
};

// Make them globally available
window.CONFIG = CONFIG;