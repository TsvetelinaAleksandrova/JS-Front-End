function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultelement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', function(event) {
        const currentWidth = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const progress = Math.floor((currentWidth / elementWidth) * 100);
        
        resultelement.textContent = `${progress}%`;
    })
}