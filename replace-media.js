const fs = require('fs');
let content = fs.readFileSync('css/style.css', 'utf8');

// Change the mobile breakpoint to 991px to cover tablets as well, matching the navbar-expand-lg
content = content.replace(/@media \(max-width:767px\)/g, '@media (max-width:991px)');

fs.writeFileSync('css/style.css', content);
console.log('Updated css media queries.');
