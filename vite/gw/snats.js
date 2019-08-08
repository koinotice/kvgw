
const {Nats} = require('./nats')

async function main(){
 //  Nats.publish("vgw.balance.check")
   Nats.publish("vgw.balance.collect")




}

main()
