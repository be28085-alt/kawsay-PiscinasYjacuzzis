import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  
  content = content.replace(/\b(group-hover:scale-\d+)\b/g, 'md:$1');
  content = content.replace(/\b(hover:scale-\d+)\b/g, 'md:$1');
  content = content.replace(/\b(hover:-?translate-[xy]-\d+)\b/g, 'md:$1');
  content = content.replace(/\b(group-hover:-?translate-[xy]-\d+)\b/g, 'md:$1');
  content = content.replace(/\b(group-hover:shadow-[a-zA-Z0-9-]+)\b/g, 'md:$1');
  content = content.replace(/\b(hover:shadow-[a-zA-Z0-9-]+)\b/g, 'md:$1');
  content = content.replace(/\bmd:md:/g, 'md:');
  
  fs.writeFileSync(fp, content, 'utf8');
});

console.log("CSS optimizations applied to prevent mobile stuttering.");
