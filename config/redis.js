const { createClient } = require('redis');

// const redisClient = createClient({
//   username: process.env.REDISU,
//     password: process.env.REDISP,
//     socket: {
//         host: process.env.REDISURL,
//         port: process.env.REDISPORT
//     }
// });
// redisClient.on('error', (err) => console.error('Redis Error:', err)); 
// redisClient.on('connect', () => console.log('🔌 Redis socket connected')); 
// redisClient.on('ready', () => console.log('✅ Redis client ready'));

// redisClient.on('error', (err) => console.error('Redis Error:', err));
// redisClient.connect();

redisClient=[];

module.exports = redisClient;