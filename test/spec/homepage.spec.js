describe('angularjs homepage', function() {
	

  it('should greet the named user', function() {
	  browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');

//    element(by.model('yourName')).sendKeys('Julie');
    
    expect(browser.getTitle()).toEqual('Apartments');
//    expect(browser.getTitle()).toEqual('Apartments');
//    element(by.model('hero.name')).sendKeys('A value aa');
    
    element.all(by.css('.badge')).first().isPresent().then(function(result) {

		if (result) {
			var inputel = element.all(by.css('.badge')).first();

			browser.sleep(1000);
			inputel.click();			
			browser.sleep(1000);
			expect(element.all(by.tagName('h2')).get(1).getText()).toEqual('Mr. Nice details!');
    	   	
		}
    	
    	
    });
  

//    var greeting = element(by.binding('yourName'));
//
//    expect(greeting.getText()).toEqual('Hello Julie!');
  });

//  describe('todo list', function() {
//    var todoList;
//
//    beforeEach(function() {
//      browser.get('http://localhost:3000');
//
//      todoList = element.all(by.repeater('todo in todos'));
//    });
//
//    it('should list todos', function() {
//      expect(todoList.count()).toEqual(2);
//      expect(todoList.get(1).getText()).toEqual('build an angular app');
//    });
//
//    it('should add a todo', function() {
//      var addTodo = element(by.model('todoText'));
//      var addButton = element(by.css('[value="add"]'));
//
//      addTodo.sendKeys('write a protractor test');
//      addButton.click();
//
//      expect(todoList.count()).toEqual(3);
//      expect(todoList.get(2).getText()).toEqual('write a protractor test');
//    });
//  });
  
});