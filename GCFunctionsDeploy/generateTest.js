const { exec } = require('child_process');
const path = require('path');

async function generatePDF(latexFilePath, outputFilePath) {
    console.log('Attempting to generate pdf using tectonic as compiling method'); // Status

    const tectonicPath = path.join(__dirname, 'tectonicEXE', 'tectonic');

    console.log(tectonicPath);

    return new Promise((resolve, reject) => {
        exec(`${tectonicPath}  ${latexFilePath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error in Generating PDF: ${error}`);
                reject(error);
            } else {
                console.log('PDF created successfully');
                resolve();
            }
        });
    });
}

// Function exports
module.exports = {
    generatePDF
}