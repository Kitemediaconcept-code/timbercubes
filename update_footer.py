import glob
import re

files = glob.glob('*.html')
for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove Shop and Product links (accounting for possible line breaks)
    content = re.sub(r'\s*<li><a href="#">Shop</a></li>', '', content)
    content = re.sub(r'\s*<li><a href="#">Product</a></li>', '', content)
    
    # Replace email
    content = content.replace('info@timbercubes.in', 'timbercubes@gmail.com')
    
    # Replace location
    content = content.replace('Calicut, Kerala, India', 'Calicut and Kochi')
    
    # Replace working time
    content = content.replace('9:00 AM - 7:00 PM', '9:00 AM - 10:00 PM')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print(f'Updated {len(files)} files.')
