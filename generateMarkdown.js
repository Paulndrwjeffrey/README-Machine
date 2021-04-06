function renderLicense(license) {
  switch(license) {
    case 'None':
      license = ''
      break
    case 'MIT':
      license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)    This software is covered under the MIT license <https://opensource.org/licenses/MIT>'
      break
    case 'Apache':
      license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)    This software is covered under the Apache license. <https://www.apache.org/licenses/LICENSE-2.0>'
      break
    case 'GPL':
      license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)    This software is covered under the GPL license. <https://www.gnu.org/licenses/gpl-3.0.en.html>'
      break
  }
  return license
}

function generateMarkdown(data) {
  return `
  # ${ data.title }

  ***

  ## Table of Contents
    1. [License](#License)
    2. [Description](#Description)
    3. [Installation](#Installation)
    4. [Usage](#Usage)
    5. [Contributor Guidelines](#ContributorGuidelines)
    6. [Test Instructions](#TestInstructions)
    7. [Questions?](#Questions?)

  ### License
  ${ renderLicense(data.license) }
 
  ### Description
  ${ data.description }

  ### Installation
  ${ data.instructions }

  ### Usage
  ${ data.usage }

  ### Contributor Guidelines
  ${ data.contribute }

  ### Test Instructions
  ${ data.test }
 
  ### Questions? 
  I Have **Answers**. Contact via Email or Github.
  <${ data.email }>
  <https://www.github.com/${ data.github }>
  `
}

module.exports = generateMarkdown
