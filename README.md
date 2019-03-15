# SeleniumJSCodePlayground
This is a mini-replica of the code used by the J.Crew QA Automation Engineering Team.
It is a Code Playground to experiment and practice using the Page Object Model with Selenium WebdriverJS

Why was this repository created:<br />
What if an engineer want to make a change to Base Page and see its effect on codebase?<br />
What if an engineer want to make a change to a Page Object and see its effect on codebase?<br />
What if an engineer wants to make a brief change to tests and see if it will speed up test speed?

Now any engineer can experiment like that instantly. Why? Because this is a mini replica with a simple codebase. This means its easy to understand this entire codebase plus it means all test suites can run VERY FAST.

To run, simply clone this repository and `npm run install`<br />
To run in headless mode, simply uncomment the line in BasePage.js

The tests run on https://library-app.firebaseapp.com - a demo website whose source code never changes. The website was built by the developers of the open-sourced Ember framework as an example web app that uses Ember.

This original codebase for this repository came from tutorials made by: https://www.youtube.com/playlist?list=PLA4JPGpQHctT__mDO9EHvOrWVW0Hkf5Mk <br />All I did was expand upon those tutorials and convert it to a JS Class based Page Object Model.

