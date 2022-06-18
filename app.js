const fileInput = document.querySelector('#file-input');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const canvas = document.querySelector('#meme');

let image;

fileInput.addEventListener('change', () => {
    const idUrl = URL.createObjectURL(fileInput.files[0]);
    image = new Image();
    image.src = idUrl;
    image.addEventListener('load', () => {
        updateCanvas(canvas, image, topText.value, bottomText.value);
    })
}, { once: true });

topText.addEventListener('change', () => {
    updateCanvas(canvas, image, topText.value, bottomText.value);
});
bottomText.addEventListener('change', () => {
    updateCanvas(canvas, image, topText.value, bottomText.value);
});

const updateCanvas = (canvas, image, topText, bottomText) => {
    const context = canvas.getContext('2d');
    const width = image.width;
    const height = image.height
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;

    // Update Background
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0);

    // Prepare Text
    context.strokeStyle = 'black';
    context.lineWidth = Math.floor(fontSize / 4);
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.lineJoin = 'round';
    context.font = `${fontSize}px sans-serif`;

    // Top Text
    context.textBaseline = 'top';
    context.strokeText(topText, width / 2, yOffset);
    context.fillText(topText, width / 2, yOffset);
    
    // Bottom Text
    context.textBaseline = 'bottom';
    context.strokeText(bottomText, width / 2, height - yOffset);
    context.fillText(bottomText, width / 2, height - yOffset);
}    