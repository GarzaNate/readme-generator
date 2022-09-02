// function to render license badge
function renderLicenseBadge(license) {
  return `![${license}](${renderLicenseLink(license)})`
}

// function to render license link
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/LICENSE-${license}-blueviolet`
}

// function to render the license section on readme file
function renderLicenseSection(license) {
  return `
## License
${renderLicenseBadge(license)}`
}

// function to generate the readme template
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.test}

## Credits
${data.credit}

${renderLicenseSection(data.license)}

## Contact
* Email: ${data.email}
* Github: ${data.username}
`;
}
// exporting generateMarkdown function
module.exports = generateMarkdown;
