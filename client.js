const net = require('net');

 const connect = function() {

  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('sucessfully connected to game server')
  });

  conn.on('connect', () => {
    conn.write('Name: JEH');
    /* for (let i = 0; i < 10; i++) {
    setTimeout(() => {
    conn.write('Move: up')
    }, i * 1000)
    } */
  });
    
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}


module.exports = { connect };