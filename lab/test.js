const d=[]
for(var i=1;i<20;i++){
    const e={
                tokenId: '1',
                walletAddress: '1',
                type:1,
                inTxHash:i+"abc"
            }

    d.push(e)
}
for(var i=1;i<20;i++){
    const e={
                tokenId: '1',
                walletAddress: '1',
                type:0,
                inTxHash:i+"abc"
            }

    d.push(e)
}
console.log(d)
