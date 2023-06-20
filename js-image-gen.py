import os
from PIL import Image

# folder path
dir_path = r'./public/img'

class photo:
    def __init__(self, src, width, height):
        self.src = src
        self.width = width
        self.height = height

res = []

f = open("./src/app/Photos.js", "w")
f.write("const photos = [\n")
f.close()

# Iterate directory
for path in os.listdir(dir_path):
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, path)):
        img = Image.open(os.path.join(dir_path, path))
        widthRatio = img.width / img.height
        dec = str(widthRatio)[::-1].find('.')
        widthWhole = widthRatio * pow(10,dec)
        heightWhole = 1 * pow(10,dec)
        src = "/img/"+path
        res.append(photo(src,widthWhole,heightWhole))
        f = open("./src/app/Photos.js", "a")
        f.write("   {\n")
        f.write("   src: " + repr(src) + ",\n")
        f.write("   width: " + repr(widthWhole) + ",\n")
        f.write("   height: " + repr(heightWhole) + ",\n")
        f.write("   },\n")
        f.close()

f = open("./src/app/Photos.js", "a")
f.write("]\n")
f.write("export default photos")
f.close()