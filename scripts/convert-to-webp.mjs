import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.resolve('src/assets');
const QUALITY = 80; // Good balance between quality and size

async function convertToWebP() {
  const files = fs.readdirSync(ASSETS_DIR);
  
  const imageFiles = files.filter(f => 
    /\.(png|jpe?g)$/i.test(f) && !f.endsWith('.webp')
  );

  console.log(`Found ${imageFiles.length} images to convert...\n`);

  let totalOriginal = 0;
  let totalWebP = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(ASSETS_DIR, file);
    const outputName = file.replace(/\.(png|jpe?g)$/i, '.webp');
    const outputPath = path.join(ASSETS_DIR, outputName);

    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;

    try {
      await sharp(inputPath)
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const webpSize = fs.statSync(outputPath).size;
      totalWebP += webpSize;

      const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
      console.log(`✅ ${file.padEnd(40)} ${(originalSize / 1048576).toFixed(2)} MB → ${(webpSize / 1048576).toFixed(2)} MB  (-${savings}%)`);
    } catch (err) {
      console.error(`❌ Error converting ${file}:`, err.message);
    }
  }

  console.log(`\n${'='.repeat(70)}`);
  console.log(`Total original: ${(totalOriginal / 1048576).toFixed(2)} MB`);
  console.log(`Total WebP:     ${(totalWebP / 1048576).toFixed(2)} MB`);
  console.log(`Savings:        ${((1 - totalWebP / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`${'='.repeat(70)}`);
}

convertToWebP();
