const sharp = require('sharp');
import fs from 'fs';

function make_image(width: number, height: number, name: string) {
    let path: string = `./public/cached/${name}_${height}_${width}.jpg`;
    if (get_cached_image(path) == false) {
        return sharp(`./public/images/${name}.jpg`)
            .resize(width, height)
            .toFile(path, function (err: any) {
                console.log(err)
                return err;
            });
    }
    return true;
}

function get_cached_image(path: string): boolean {
    return fs.existsSync(path);

}

export { make_image, get_cached_image }