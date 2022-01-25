const sharp = require('sharp');
import fs from 'fs';

function get_cached_image(path: string): boolean {
    return fs.existsSync(path);
}

async function resize(width: number, height: number, name: string) {
    let path: string = `./public/cached/${name}_${height}_${width}.jpg`;
    await sharp(`./public/images/${name}.jpg`)
        .resize(width, height)
        .toFile(path, function (err: any) {
            console.log(err)
            throw err;
        });
}

function make_image(width: number, height: number, name: string) {
    let path: string = `./public/cached/${name}_${height}_${width}.jpg`;
    if (get_cached_image(path) == false) {
        try {
            resize(width, height, name).catch((err) => { return false })
        } catch (error: any) {
            return false;
        }
    } else {
        return true;
    }
}

export { make_image }