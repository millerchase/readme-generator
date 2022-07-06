//

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case 'boost':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

    case 'eclipse':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;

    case 'GNU':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

    case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;

    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;

    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case 'unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;

    case 'WTFPL':
      return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;

    default:
      console.log('Error in license selection');
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'apache':
      return `[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)`;
      break;

    case 'boost':
      return `[https://www.boost.org/LICENSE_1_0.txt](https://www.boost.org/LICENSE_1_0.txt)`;
      break;

    case 'BSD':
      return `[https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)`;
      break;

    case 'eclipse':
      return `[https://opensource.org/licenses/EPL-1.0](https://opensource.org/licenses/EPL-1.0)`;
      break;

    case 'GNU':
      return `[https://www.gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0)`;
      break;

    case 'IBM':
      return `[https://opensource.org/licenses/IPL-1.0](https://opensource.org/licenses/IPL-1.0)`;
      break;

    case 'ISC':
      return `[https://opensource.org/licenses/ISC](https://opensource.org/licenses/ISC)`;
      break;

    case 'MIT':
      return `[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)`;
      break;

    case 'unlicense':
      return `[http://unlicense.org/)](http://unlicense.org/)`;
      break;

    case 'WTFPL':
      return `[http://www.wtfpl.net/about/](http://www.wtfpl.net/about/)`;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `${renderLicenseBadge(license)}`;
}

// generate a table of content
function renderTableOfContents(bool) {
  if (!bool) {
    return '';
  }

  return `
  ## Table of Contents
  ___
  
  1. [Installation](#installation)

  2. [Usage](#usage)

  3. [How to contribute](#how-to-contribute)

  4. [Testing](#testing)

  ___
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ___
  
  ${renderLicenseSection(data.license)}

  ${data.description}

  ${renderTableOfContents(data.tableOfContent)}

  
  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## How to contribute

  ${data.contributing}


  ## Testing

  ${data.tests}

  `;
}

module.exports = generateMarkdown;
