const sharp = require('sharp');
import fs from 'fs';

function get_cached_image(path: string): boolean {
    return fs.existsSync(path);
}


async function make_image(width: number, height: number, name: string) {
    let path: string = `./public/cached/${name}_${height}_${width}.jpg`;
    if (get_cached_image(path) == false) {
        await sharp(`./public/images/${name}.jpg`)
            .resize(width, height)
            .toFile(path)
            .then(() => { return true })
            .catch(() => { return false });
    } else {
        return true;
    }
}

export { make_image }