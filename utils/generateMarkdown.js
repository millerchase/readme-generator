const {
  renderLicenseBadge,
  renderLicenseSection,
  renderTableOfContents,
  deployedLinkHandler,
  questionsSectionHandler
} = require('../src/page-template');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}


${renderLicenseBadge(data.license)}

${data.description}

${deployedLinkHandler(data.deployedLink)}

___

${renderTableOfContents(data.tableOfContent)}


## Installation

${data.installation}


## Usage

${data.usage}


## How to contribute

${data.contributing}


## Testing

${data.tests}

## License

${renderLicenseSection(data)}

## Questions

${questionsSectionHandler(data.username, data.email)}

  `;
}

module.exports = generateMarkdown;
