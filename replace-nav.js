const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/navbar-expand-md/g, 'navbar-expand-lg');

fs.writeFileSync('index.html', content);
console.log('Updated navbar.');
