const fs = require('fs').promises;
const path = require('path');

async function main() {
    const root = __dirname;
    const photosDir = path.join(root, 'photos');
    const outFile = path.join(root, 'photos.json');

    const entries = await fs.readdir(photosDir, { withFileTypes: true });
    const manifest = {};

    for (const ent of entries) {
        if (!ent.isDirectory()) continue;
        const area = ent.name;
        const files = await fs.readdir(path.join(photosDir, area));
        const images = files.filter(f => /\.(jpe?g|png|gif|webp|bmp)$/i.test(f));
        if (images.length) {
            // store relative paths that the browser can fetch
            manifest[area] = images.map(f => `photos/${area}/${f}`);
        }
    }

    await fs.writeFile(outFile, JSON.stringify(manifest, null, 2), 'utf8');
    console.log('Wrote', outFile);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});