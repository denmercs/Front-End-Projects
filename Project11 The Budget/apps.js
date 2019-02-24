// creating a module

// BUDGET CONTROLLER
let budgetController = (function() {
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            exp: [],
            inc: []
        }, 
        total: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            let newItem, ID;

            // create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }

            else {
                ID = 0;
            }

            // create new item based on 'inc' or 'exp' tye
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push it into our data strcuture

            data.allItems[type].push(newItem);

            // return to the new element
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    };

})();


// UI CONTROLLER
let UIController = (function() {

    // Private variables in an object
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    // Return is used to make this public
    return {
        getinput: function() {

            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }
    

})();

//GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

    // Setup for event listeners
    let setupEventListeners = function() {
         // calling the method pass from UICtrl to get access the DOM variables
        let DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();            
            }
    
        });
    };

   
    // function to add item
    let ctrlAddItem = function() {
        let input, newItem;

        // 1. get the field input data
        input = UICtrl.getinput();

        // 2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. add the new item to the UI 

        // 4. calculate the budget

        // 5. display the budget on the UI
        
    };

    // public access and setup the init to start the app
    return {
        init: function() {
            setupEventListeners();
        }
    }


})(budgetController, UIController);


controller.init();