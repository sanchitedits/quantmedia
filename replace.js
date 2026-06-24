const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/col-md-3/g, 'col-lg-3 col-md-6 mb-4');
content = content.replace(/col-md-4 col-work/g, 'col-lg-4 col-md-6 col-work mb-4');
content = content.replace(/"col-md-4"/g, '"col-lg-4 col-md-6 mb-4"');
content = content.replace(/col-md-6 col-sm-12/g, 'col-lg-6 col-md-12 mb-4');
content = content.replace(/"col-md-6"/g, '"col-lg-6 col-md-12 mb-4"');
content = content.replace(/"col-md-8"/g, '"col-lg-8 col-md-10"');

fs.writeFileSync('index.html', content);
console.log('Updated grid classes.');
