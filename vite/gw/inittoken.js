const {Nats} = require('./nats')


async function main(){

    const topic = `vgw.>`
    Nats.subscribe(topic, async (logs) => {

        console.log("fuck", logs)

    })


    // const Tokens = [
    //
    //     "0x45511ddc6ad771d2709e6e4049c0cf2df8349729", //Foo
    //     "0xbeaad2b3f074fa6dabcb17ffc6044e1627828637", //BNB
    //
    //     "0xbfc8c18155fc12ce94dab8a7136fea7560611033", //BAR
    //
    //     "0xccee568588e5241c59346ec401089df1b609901b",//Keven
    // ]

    const t1={
        Address:"0xa53f528111eb484ec176117981e7e8d09091ec21",
        Symbol:"ONE",
        Name:"ONE TOKEN",
        Decimals:18,
        ViteTokenAddress:"tti_60844084aa2db10609358605" //du
    }

    const t2={
        Address:"0xc246b4da903ae8a7de212a3ed6e3353cdb98602b",
        Symbol:"NICE",
        Name:"NICE TOKEN",
        Decimals:0,
        ViteTokenAddress:"tti_c22aca9ae589f4a96f471240" //du
    }

    Nats.publish("vgw.token.create",t2)
    //
    // const t2={
    //     Address:"0x45511ddc6ad771d2709e6e4049c0cf2df8349729",
    //     Symbol:"Foo",
    //     Name:"foo TOKEN",
    //     Decimals:18,
    //     ViteTokenAddress:"tti_eca58cefe0d22576a5fe950d" //pmt
    //
    // }
    //
    // Nats.publish("vgw.token.create",t2)
    //
    //
    // const t3={
    //     Address:"0xbfc8c18155fc12ce94dab8a7136fea7560611033",
    //     Symbol:"Bar",
    //     Name:"bar TOKEN",
    //     Decimals:18,
    //     ViteTokenAddress:"tti_66067e388e1efb7782a96733" //pmt
    //
    // }
    //
    // Nats.publish("vgw.token.create",t3)
    // const t4={
    //     Address:"0xccee568588e5241c59346ec401089df1b609901b",
    //     Symbol:"kev",
    //     Name:"Keven TOKEN",
    //     Decimals:18,
    //     ViteTokenAddress:"tti_b591d435d1b5f3de28f59dbb" //KEVN
    //
    // }
    //
    // Nats.publish("vgw.token.create",t4)
}
main()
