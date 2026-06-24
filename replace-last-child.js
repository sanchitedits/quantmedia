const fs = require('fs');
let content = fs.readFileSync('css/style.css', 'utf8');

content = content.replace(/\.counter \.col-md-4:last-child \.entry/g, '.counter [class*="col-"]:last-child .entry');
content = content.replace(/\.pricing \.col-md-4:last-child \.entry/g, '.pricing [class*="col-"]:last-child .entry');

fs.writeFileSync('css/style.css', content);
console.log('Updated css last-child selectors.');
