const fs = require('fs');

let content = fs.readFileSync('g:/Timbercubes/testimonials.html', 'utf-8');

// Extract the grid
const gridStartMatch = content.match(/<div class="testimonials-grid">/);
const gridEndMatch = content.match(/<\/div>\s*<\/div>\s*<\/section>/);

if (!gridStartMatch || !gridEndMatch) {
    console.log("Could not find grid boundaries in testimonials.html");
    process.exit(1);
}

const gridStart = gridStartMatch.index;
const gridEnd = gridEndMatch.index;

const gridContent = content.substring(gridStart, gridEnd);

const cardRegex = /<div class="testimonial-card">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
const cards = [...gridContent.matchAll(cardRegex)].map(m => m[0]);

console.log("Found " + cards.length + " cards in testimonials.html");

function getAuthor(card) {
    const match = card.match(/<div class="testimonial-author">— (.*?)<\/div>/);
    return match ? match[1] : '';
}

const cardMap = {};
cards.forEach(card => {
    const author = getAuthor(card);
    if (author.includes('Sharafudheen')) cardMap['Sharafudheen'] = card;
    else if (author.includes('Faizal')) cardMap['Faizal'] = card;
    else if (author.includes('Shiyas')) cardMap['Shiyas'] = card;
    else if (author.includes('Sunil')) cardMap['Sunil'] = card;
    else if (author.includes('Rashid')) cardMap['Rashid'] = card;
    else if (author.includes('Anwer')) cardMap['Anwer'] = card;
    else if (author.includes('Noushadali')) cardMap['Noushadali'] = card;
    else if (author.includes('Saritha')) cardMap['Saritha'] = card;
    else if (author.includes('Aswany')) cardMap['Aswany'] = card;
    else if (author.includes('Hashif')) cardMap['Hashif'] = card;
    else if (author.includes('Salim')) cardMap['Salim'] = card;
    else if (author.includes('Sabahussalam')) cardMap['Sabahussalam'] = card;
    else console.log("Unknown author: " + author);
});

// The user wants Noushadali and Saritha always first, followed by the previously requested pairs
const sortedCards = [
    cardMap['Noushadali'],
    cardMap['Saritha'],
    cardMap['Sharafudheen'],
    cardMap['Faizal'],
    cardMap['Shiyas'],
    cardMap['Sunil'],
    cardMap['Rashid'],
    cardMap['Anwer'],
    cardMap['Aswany'],
    cardMap['Hashif'],
    cardMap['Salim'],
    cardMap['Sabahussalam']
].filter(Boolean);

console.log("Sorted " + sortedCards.length + " cards");

const newGridContent = '<div class="testimonials-grid">\n            ' + sortedCards.join('\n\n            ') + '\n          ';

const newContent = content.substring(0, gridStart) + newGridContent + content.substring(gridEnd);

fs.writeFileSync('g:/Timbercubes/testimonials.html', newContent, 'utf-8');
console.log("Updated testimonials.html");

// Now update index.html as well
let indexContent = fs.readFileSync('g:/Timbercubes/index.html', 'utf-8');
const indexGridStartMatch = indexContent.match(/<div class="testimonials-grid">/);
const indexGridEndMatch = indexContent.match(/<\/div>\s*<!-- View More Button -->/);
if (indexGridStartMatch && indexGridEndMatch) {
    const indexGridStart = indexGridStartMatch.index;
    const indexGridEnd = indexGridEndMatch.index;
    const newIndexContent = indexContent.substring(0, indexGridStart) + newGridContent + indexContent.substring(indexGridEnd);
    fs.writeFileSync('g:/Timbercubes/index.html', newIndexContent, 'utf-8');
    console.log("Updated index.html");
} else {
    console.log("Could not find grid boundaries in index.html");
}
