function solve(length, numbers) {
    let result = numbers
        .slice(0, length)
        .reverse()
        .join(' ');
    
    console.log(result);
}