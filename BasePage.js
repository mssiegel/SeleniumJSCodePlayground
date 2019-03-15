const webdriver = require('selenium-webdriver'),
      chrome = require('selenium-webdriver/chrome'),
      By = webdriver.By,
      until = webdriver.until,
      o = new chrome.Options()
      o.addArguments('disable-infobars')
    //  o.addArguments('headless')
const fake = require('./utilities/fake_data')

class BasePage {
  constructor() {
    this.fake = fake
  }

  async createDriver(){
    global.driver = new webdriver.Builder().setChromeOptions(o).forBrowser('chrome').build()
  }

  async visit(theUrl) {
    return await driver.get(theUrl)
  }

  async quit() {
    return await driver.quit()
  }

  async elementLocator(selectorType, el){
    const element = await driver.wait(until.elementLocated(By[selectorType](el)), 15000)
    await driver.wait(until.elementIsVisible(element), 15000)
    return element
  }

  async byCss(css) {
    return await this.elementLocator('css', css)
  }

  async byXpath(xpath) {
    return await this.elementLocator('xpath', xpath)
  }

  async byLinkText(text) {
    return await this.elementLocator('linkText', text)
  }

  async byCssAll(css) {
    return await driver.wait(until.elementsLocated(By.css(css)), 15000);
  }

}

module.exports = BasePage
