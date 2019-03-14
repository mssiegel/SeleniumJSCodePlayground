const BasePage = require('../BasePage')
const NavBarPage = require('../pageObjects/NavBarPage')

class NavBarScenarios extends BasePage {
  async goToLibrariesPage(){
    const librariesLink = await NavBarPage._librariesLink
    await librariesLink.click()
  }

}

module.exports = NavBarScenarios
