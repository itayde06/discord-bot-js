const { createCanvas } = require("canvas");
const fs = require("fs");

module.exports = (width, height, text, textHeight) => {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    context.fillStyle = "#764abc";
    context.fillRect(0, 0, width, height);

    context.font = "bold 40px 'Open Sans'"
    context.textAlign = "center";
    context.fillStyle = "#fff";

    context.fillText(text, width / 2, (height / 2) + textHeight);

    return canvas.toBuffer("image/png");
}