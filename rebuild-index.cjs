const fs = require('fs');

const indexHTML = fs.readFileSync('index.html', 'utf-8');
const featuresHTML = fs.readFileSync('features.html', 'utf-8');
const ourWorkHTML = fs.readFileSync('our-work.html', 'utf-8');

// Extraction
const getSection = (html, startMarker, endMarker) => {
    const regex = new RegExp(`<!-- ${startMarker} -->(.*?)(<!-- ${endMarker} -->)`, 's');
    const match = html.match(regex);
    if (!match) throw new Error(`Could not find section ${startMarker}`);
    return `<!-- ${startMarker} -->${match[1]}<!-- ${endMarker} -->`;
};

const headerIntro = indexHTML.substring(0, indexHTML.indexOf('<!-- services -->'));
const servicesSection = getSection(indexHTML, 'services', 'end services');
const aboutUsSection = getSection(indexHTML, 'about us', 'end about us');
const counterSection = getSection(indexHTML, 'counter', 'end counter');
const pricingSection = getSection(indexHTML, 'pricing', 'end pricing');
const footerAndBelow = indexHTML.substring(indexHTML.indexOf('<!-- footer -->'));

const featuresSection = getSection(featuresHTML, 'features', 'end features');
const ourWorkSection = getSection(ourWorkHTML, 'our work', 'end our work');
const testimonialSection = getSection(ourWorkHTML, 'testimonial', 'end testimonial');

// Modifications
const whatWeDoSection = servicesSection
    .replace('<span>Sevices</span>', '<span>What we do</span>')
    .replace('<h2>Choose our<br>creative services</h2>', '<h2>What we do</h2>');

const howWeDoSection = featuresSection
    .replace('<!-- features -->', '<!-- how we do -->')
    .replace('<!-- end features -->', '<!-- end how we do -->')
    .replace('<h4>This all feeatures <br>We will give for you</h4>', '<h4>How we do it</h4>')
    .replace('<div class="features">', '<div class="features section">');

const whyUsSection = counterSection
    .replace('<!-- counter -->', '<!-- why us -->')
    .replace('<!-- end counter -->', '<!-- end why us -->');

const portfolioSection = ourWorkSection
    .replace('<!-- our work -->', '<!-- portfolio -->')
    .replace('<!-- end our work -->', '<!-- end portfolio -->')
    .replace('<div class="our-work">', `
		<div class="our-work section">
			<div class="container">
				<div class="title-section">
					<span>Portfolio</span>
					<h2>Our Recent Work</h2>
				</div>
			</div>
	`);

const contactFormSection = `
		<!-- contact form -->
		<div class="contact-us section">
			<div class="container">
				<div class="title-section">
					<span>Contact</span>
					<h2>Get in touch</h2>
				</div>
				<div class="row">
					<div class="col-md-8 offset-md-2">
						<form>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Name">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input type="email" class="form-control" placeholder="Email">
									</div>
								</div>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Subject">
							</div>
							<div class="form-group">
								<textarea class="form-control" rows="5" placeholder="Message"></textarea>
							</div>
							<button type="submit" class="button">Send Message</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- end contact form -->
`;

const newIndex = [
    headerIntro,
    aboutUsSection,
    whatWeDoSection,
    howWeDoSection,
    pricingSection,
    whyUsSection,
    contactFormSection,
    testimonialSection,
    portfolioSection,
    footerAndBelow
].join('\\n\\n');

fs.writeFileSync('index.html', newIndex);
console.log('Rebuilt index.html successfully!');
