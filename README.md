Project Folder stucture:

All the sections are in src/components , There all the sections are in there respective folders

- Navbar
- Hero(Home)
- About
- Skills
- Projects
- Achievements
- Contact
- Footer


Finally there is a folder name called `utils` which contains 'data.js' that has all contents:

- First, the data.js has projects & certificates.


/* projets */
- In projects there is an attribute called 'id', which should be unique for every project start from 0, 1, 2, ....
- every project contains these attributes {id, title, description, image, category, url}
- To add new image, go to src/assets folder and paste the image. Then go to src/utils/data.js then import the image at the top like 

-> `import imageName from '../assets/imageName.png'` for png
-> `import imageName from '../assets/imageName.jpg'` for jpg



/* certificates */
- Same as for certificates, the 'id' attribute should be unique.
- every certificate contains these attributes {id, title, description, image, date, year, month, url}
- To add new image, go to src/assets folder and paste the image. Then go to src/utils/data.js then import the image at the top like 

-> `import imageName from '../assets/imageName.png'` for png
-> `import imageName from '../assets/imageName.jpg'` for jpg
