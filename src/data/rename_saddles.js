const fs = require('fs');
const path = require('path');
const crypto = require('crypto'); // For generating random hashes

// Directory containing the saddle images
const imageDir = path.join(__dirname, '../assets/saddle_images');

// Path to save the generated mapping file
const outputMappingPath = path.join(__dirname, 'saddleList.js');

// Function to generate a random hash for file names
function generateHash() {
  return crypto.randomBytes(8).toString('hex'); // 16-character hash
}

// Function to rename files and generate a mapping
async function renameSaddles() {
  const files = fs.readdirSync(imageDir); // Read all files in the directory
  const mapping = {}; // Object to store the mapping

  for (const file of files) {
    const ext = path.extname(file); // Get the file extension
    const originalName = path.basename(file, ext); // Get the original name without the extension

    // Skip non-image files
    if (!['.png', '.jpg', '.jpeg'].includes(ext.toLowerCase())) {
      console.log(`Skipping non-image file: ${file}`);
      continue;
    }

    // Generate a random hash for the new file name
    const newFileName = `${generateHash()}${ext}`;

    // Rename the file
    fs.renameSync(path.join(imageDir, file), path.join(imageDir, newFileName));

    // Add the mapping of hash to the original name
    mapping[newFileName.replace(ext, '')] = originalName; // Map hash to original saddle name
  }

  // Write the mapping to the saddleList.js file
  const mappingContent = `export default ${JSON.stringify(mapping, null, 2)};`;
  fs.writeFileSync(outputMappingPath, mappingContent);

  console.log(`Renaming complete. Mapping saved to: ${outputMappingPath}`);
}

// Run the script
renameSaddles().catch(err => console.error(err));
