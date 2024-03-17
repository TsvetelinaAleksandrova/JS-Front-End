function solve(spiceYield) {
    let days = 0;
    totalSpice = 0;
    
    while (spiceYield >= 100) {
        totalSpice += spiceYield;
        spiceYield -= 10;
        days += 1;
    }

    if (totalSpice >= (days + 1) * 26) {
        totalSpice -= (days + 1) * 26;
    }
    console.log(days);
    console.log(totalSpice);
}
solve(450);