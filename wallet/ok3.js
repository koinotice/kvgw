const redis = require('./redis')
let client = redis.createClient({
    host:"localhost",
    port:"7090"
})
async function main(){
    client.on("error", function (err) {
        console.log("Error " + err);
    });
}
main()
