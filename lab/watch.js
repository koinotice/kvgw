var address = web3.eth.accounts[0];
var filter = web3.eth.filter('latest');

filter.watch(function(error, result){
    var block = web3.eth.getBlock(result, true);
    console.log('current block #' + block.number);

    if(block.transactions.length)
        for(var index in block.transactions)
            if(block.transactions[index].to == address)
                console.log(block.transactions[index]);
});
