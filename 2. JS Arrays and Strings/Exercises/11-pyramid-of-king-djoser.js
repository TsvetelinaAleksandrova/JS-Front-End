function solve(baseBlocksCount, blockHeight) {
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;
    let step = 0;

    while (baseBlocksCount > 0) {
        step += 1;
        let blocksPerLayerCount = baseBlocksCount * baseBlocksCount;
        let innerBlocksCount = (baseBlocksCount - 2) * (baseBlocksCount - 2);
        let outerBlocksCount = blocksPerLayerCount - innerBlocksCount;

        if (baseBlocksCount <= 2) {
            goldRequired += blocksPerLayerCount * blockHeight;
        } else if (step % 5 === 0) {
            lapisLazuliRequired += outerBlocksCount * blockHeight;
            stoneRequired += innerBlocksCount * blockHeight;
        } else {
            marbleRequired += outerBlocksCount * blockHeight;
            stoneRequired += innerBlocksCount * blockHeight;
        }
        baseBlocksCount -= 2;
    }

    let totalHeight = Math.floor(step * blockHeight);

    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}
