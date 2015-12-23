//exports.config = {
//  capabilities: {
//    'browserstack.user' : process.env.BROWSERSTACK_USER,
//    'browserstack.key' : process.env.BROWSERSTACK_KEY,
//
//    // Needed for testing localhost
//    'browserstack.local' : 'true',
//
//    // Settings for the browser you want to test
//    // (check docs for difference between `browser` and `browserName`
//    'browser' : 'Chrome',
//    'browser_version' : '36.0',
//    'os' : 'OS X',
//    'os_version' : 'Mavericks',
//    'resolution' : '1024x768'
//  },
//



exports.config = {
		  // The address of a running selenium server.
		  seleniumAddress: 'http://hub.browserstack.com/wd/hub',

		  // Capabilities to be passed to the webdriver instance.
		  capabilities: {
		    'browserName': 'internet explorer',
		    'browser_version' : '10',
//		    'browserstack.tunnel': 'true',
		    'browserstack.local' : 'true',
		    'browserstack.debug': 'true',
		    'browserstack.user' : process.env.BROWSERSTACK_USERNAME,
		    'browserstack.key': process.env.BROWSERSTACK_KEY
		  },

		  // Spec patterns are relative to the current working directly when
		  // protractor is called.
		  specs: [
		    'test/**/*.spec.js'
		  ],

		  // Options to be passed to Jasmine-node.
		  jasmineNodeOpts: {
		    showColors: true,
		    defaultTimeoutInterval: 30000
		  }
		};