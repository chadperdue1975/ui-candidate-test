     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        //return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         return str.split('').reverse().join('');
     }


     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
       // FILL THIS IN
       var min =  Math.min.apply(Math, values);
       return min;
         
     }

      var array = [1, 2, 3, 4, 5, 2, 4];
     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
         var distinctArray = values.filter(function(elem, pos) {
            return values.indexOf(elem) == pos;
          }); 
         console.log(distinctArray)
     }

     findDistinctValues(array);
     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        var i = 1;
        while(i<101)
        {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz")
            }
            else if (i % 5 == 0) {
                console.log("Buzz")
            }
            else if (i % 3 == 0){
                console.log("Fizz")
            }else{
                console.log(i)
            }
            i++;
        }
         // FILL THIS IN
     }


     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
        for (var i = 0; i < fruitsToRemove.length; i++) {
            for (var x = 0; x < fruits.length; x++) {
                if (fruitsToRemove[i]==fruits[x]) {
                    fruits.splice(x, 1);
                };
            };
        }
         // FILL THIS IN
     }


     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        // FILL THIS IN
        if(toPush.constructor === Array){
           for (var i = 0; i < toPush.length; i++) {
            array.push(toPush[i]); 
        }
        }
        else{
            array.push(toPush);

        }
         console.log(array)
     }

    

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        var mySplit = [];
        if (sourceStr == "") {
            // console.log(mySplit)
        }else{
        mySplit = sourceStr.split(",");
        // console.log(mySplit);
        }
         // FILL THIS IN
     }


     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
     }

     // write an example of a javascript closure

     function locationName(city, state){
        var location = "Your location is ";
        function makeFullLocation () {
            return location + city + ", " + state;
        }
        return makeFullLocation();
     }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var people = [
        {
            "firstName": 'Chad',          
            "lastName": 'Perdue',
            "city": 'Lebanon',
            "state": 'Indiana',
            "zip": '46052',
            "phoneNumbers": [
                {   
                    "location": "home",
                    "phone": "765-481-0471"
                },
                {   
                    "location": "home",
                    "phone": "765-481-0129"
                },
            ]          
        },
        {
            "firstName": 'Jaxon',          
            "lastName": 'Perdue',
            "city": 'Zionsvilee',
            "state": 'Indiana',
            "zip": '46022',
            "phoneNumbers": [
                {   
                    "location": "home",
                    "phone": "765-481-0421"
                },
                {   
                    "location": "home",
                    "phone": "765-481-0229"
                },
            ]            
        },
        {
            "firstName": 'Wyatt',          
            "lastName": 'Perdue',
            "city": 'Chicago',
            "state": 'Illinois',
            "zip": '33333',
            "phoneNumbers": [
                {   
                    "location": "home",
                    "phone": "765-481-0171"
                },
                {   
                    "location": "home",
                    "phone": "765-481-1129"
                },
            ]            
        }
    ]


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
