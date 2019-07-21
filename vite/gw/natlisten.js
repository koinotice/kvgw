const {Nats} = require('./nats')


async function main(){

    const topic = `vgw.>`
    Nats.subscribe(topic, async (logs) => {

        console.log("fuck", logs)

    })

}
main()
