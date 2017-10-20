import redis from "redis";

class RedisConn {

  constructor() {

    const client = redis.createClient({host: process.env.REDIS_HOST});

    client.auth(process.env.REDIS_AUTH);
    // if you'd like to select database 3, instead of 0 (default), call
    // client.select(3, function() { /* ... */ });

    client.on("error", function (err) {
        console.log("Error " + err); // eslint-disable-line
    });

    // client.keys('*', function (err, keys) {
    //   if (err) return console.log(err);
    //
    //   for (let i=0; i<keys.length; i+=1) {
    //     client.get(keys[i], function(err, reply) {
    //       // reply is null when the key is missing
    //       console.log(keys[i], '-->', reply);
    //     });
    //   }
    // });

  }

}

export default RedisConn;
