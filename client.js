const net = require('net');

 const connect = function() {

  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('sucessfully connected to game server')
  });

  conn.on('connect', () => {
    conn.write('Name: JEH');
  });
    
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = { connect };
const { IP, PORT } = require('./constants');