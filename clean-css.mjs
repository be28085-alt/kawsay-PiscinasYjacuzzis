import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  
  content = content.replace(/md:group-md:hover:/g, 'md:group-hover:');
  content = content.replace(/group-md:hover:/g, 'md:group-hover:');
  content = content.replace(/md:md:/g, 'md:');
  
  fs.writeFileSync(fp, content, 'utf8');
});
