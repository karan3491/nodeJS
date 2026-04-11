// src/services/cacheService.js
const redisClient = require('../config/redis');

async function setCache(key, value, ttl = 3600) {
  await redisClient.hSet(key, value, { EX: ttl });
}

async function getCache(key) {
  const data = await redisClient.hGetAll(key);
  return data;
}

module.exports = { setCache, getCache };
