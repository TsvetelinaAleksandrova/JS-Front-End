function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(2n)');
    for (const evenRow of evenRowElements) {
        evenRow.style.backgroundColor = 'teal'
    }
}