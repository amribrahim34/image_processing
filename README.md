# image_processing

## test

you have to run npm run build first before you run npm run test because the test is run against the js files not the ts , also you have to change the APP_ENV in the .env file to production if you wish to test in a browser

## How to use

you should provide in the url the width , the height and the filename without the extension

## Running the project

you must run npm run build which will compile typescript to javascript
for testing write npm run test

## API

you can access the image from /api/images
and provide the required parameters in the url as query parameters
the final url must be /api/images?filename=?&width=?&height=?
and ofcourse replace the ? by your data
