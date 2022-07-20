# uploading image in server and storing path in mongo db

This tutorial will give you the insight on how to upload image in the server. For this we have taken a package name called multer. We can do this without using multer as well but because of the simplicity and wide usage we are using multer.

## Steps followed:

1. install multer on backend; npm i multer
2. After writing all the initial setup for the server,
3. I made the server setup to store the images in string-array and the label in string
4. Now is the time to use multer and store the files in server
   => We can write multer code in the server or in the router. I chose to write in the router.
   => First we will simply set the images in the server.
   => Then we will grab the file path and set the file path in mongodb.
   a. now grab the files from req.files;
   b. map the files according to path and store in variable images. as
   ➡️ const images = files.map((img) => img.path);
   c. insert the req.body, and that images in database by spreading req.body and images as object.
