const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

function extractSection(content, startComment, endComment) {
    const startIdx = content.indexOf(`<!-- ${startComment} -->`);
    const endIdx = content.indexOf(`<!-- ${endComment} -->`) + `<!-- ${endComment} -->`.length;
    return content.substring(startIdx, endIdx);
}

const hero = extractSection(content, "header intro", "end header intro");
const aboutUs = extractSection(content, "about us", "end about us");
const whatWeDo = extractSection(content, "what we do", "end what we do");
const howWeDo = extractSection(content, "how we do", "end how we do");
const whoWeHelp = extractSection(content, "who we help", "end who we help");
const pricing = extractSection(content, "pricing", "end pricing");
const whyUs = extractSection(content, "why us", "end why us");
const portfolio = extractSection(content, "portfolio", "end portfolio");
const testimonials = extractSection(content, "testimonials", "end testimonials");
const contact = extractSection(content, "contact form", "end contact form");

const beforeHero = content.substring(0, content.indexOf("<!-- header intro -->"));
const afterContact = content.substring(content.indexOf("<!-- end contact form -->") + "<!-- end contact form -->".length);

const newContent = beforeHero + 
    hero + "\n\n\t\t" +
    whoWeHelp + "\n\n\t\t" +
    whatWeDo + "\n\n\t\t" +
    portfolio + "\n\n\t\t" +
    howWeDo + "\n\n\t\t" +
    whyUs + "\n\n\t\t" +
    testimonials + "\n\n\t\t" +
    pricing + "\n\n\t\t" +
    aboutUs + "\n\n\t\t" +
    contact + afterContact;

fs.writeFileSync('index.html', newContent);
console.log("Rearranged successfully");
