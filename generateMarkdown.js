// Description: This file contains the function to generate the readme template

// function to render the license badge
function renderLicenseBadge(license) {
  return `
![License](https://img.shields.io/badge/License-${license}-blue.svg)`
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
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credit}

## Tests
${data.test}

${renderLicenseSection(data.license)}

## Questions
For any questions, please contact me at:
- Github: [${data.username}](
- Email: ${data.email}
`
}
// exporting generateMarkdown function
module.exports = generateMarkdown;
