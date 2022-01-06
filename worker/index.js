const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fibr(index) {
  if (index < 2) return 1;
  return fibr(index - 1) + fibr(index - 2);
}

function fibt(index){
  const fibt = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765];
  return fibt[index];
}

function fib(n) {
  if (n==0) return 0;
  if (n==1) return 1;
  return fib(n-1)+fib(n-2);
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
