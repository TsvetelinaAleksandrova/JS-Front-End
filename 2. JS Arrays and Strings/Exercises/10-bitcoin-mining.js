function solve(input) {
    let boughtBitcoins = 0;
    let firstBitcoinDay = 0;
    let money = 0;

    for (let i = 0; i < input.length; i++) {
        let goldPerDay = input[i];

        if ((i + 1) % 3 === 0){
            goldPerDay = goldPerDay * 0.7;
        }

        money += goldPerDay * 67.51;

        while (money >= 11949.16) {
            boughtBitcoins += 1;
            money -= 11949.16;
            
            if (firstBitcoinDay === 0) {
                firstBitcoinDay = i + 1;
            }
            
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoins}`)
    if (firstBitcoinDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}
solve([3124.15, 504.212, 2511.124]);