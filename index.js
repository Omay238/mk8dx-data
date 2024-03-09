const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function convertWebPToPNG(inputFolder, outputFolder) {
    // Ensure the output folder exists
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true });
    }

    // Read all files in the input folder
    fs.readdirSync(inputFolder).forEach((filename) => {
        if (path.extname(filename).toLowerCase() === '.webp') {
            const webpPath = path.join(inputFolder, filename);
            const pngPath = path.join(outputFolder, path.basename(filename, '.webp') + '.png');

            // Convert WebP to PNG using sharp
            sharp(webpPath)
                .toFile(pngPath, (err) => {
                    if (err) {
                        console.error(`Error converting ${webpPath} to ${pngPath}:`, err);
                    } else {
                        console.log(`Converted: ${webpPath} to ${pngPath}`);
                    }
                });
        }
    });
}

// Specify your input and output folders
const inputFolder = '/Users/82637/mk8dx-data/images/webp';
const outputFolder = '/Users/82637/mk8dx-data/images/png';

// Call the function to convert WebP to PNG
convertWebPToPNG(inputFolder, outputFolder);
