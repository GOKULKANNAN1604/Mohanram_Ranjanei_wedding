// Image compression script — writes to temp then replaces
import sharp from 'sharp';
import { readdirSync, statSync, renameSync, copyFileSync, unlinkSync } from 'fs';
import { join, extname } from 'path';

const publicDir = './public';
const images = readdirSync(publicDir).filter(f =>
  ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
);

console.log('🖼️  Compressing images for mobile performance...\n');

let totalBefore = 0;
let totalAfter = 0;

for (const file of images) {
  const inputPath = join(publicDir, file);
  const tempPath = join(publicDir, `_tmp_${file}`);
  const beforeSize = statSync(inputPath).size;
  totalBefore += beforeSize;

  try {
    let width, quality;
    if (file.includes('sticker')) {
      width = 400; quality = 72;
    } else {
      width = 800; quality = 72;
    }

    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .jpeg({ quality, progressive: true })
      .toFile(tempPath);

    const afterSize = statSync(tempPath).size;

    if (afterSize < beforeSize) {
      unlinkSync(inputPath);
      renameSync(tempPath, inputPath);
      totalAfter += afterSize;
      const saving = Math.round((1 - afterSize / beforeSize) * 100);
      console.log(`✅ ${file}: ${Math.round(beforeSize/1024)}KB → ${Math.round(afterSize/1024)}KB (-${saving}%)`);
    } else {
      unlinkSync(tempPath);
      totalAfter += beforeSize;
      console.log(`⏭️  ${file}: already optimal`);
    }
  } catch (err) {
    if (err.code) {
      // try copy approach
      try {
        copyFileSync(inputPath, tempPath + '.bak');
        console.log(`⚠️  ${file}: locked, skipping`);
        totalAfter += beforeSize;
      } catch(e) {}
    }
  }
}

const totalSaving = Math.round((1 - totalAfter / totalBefore) * 100);
console.log(`\n🎉 Total: ${Math.round(totalBefore/1024)}KB → ${Math.round(totalAfter/1024)}KB (${totalSaving}% smaller overall)`);
