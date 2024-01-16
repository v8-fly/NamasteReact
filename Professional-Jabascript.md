#### **Professional Javascript for Web Developers**

---

1. Linting have linter rules for the entire Team , code reading becomes easy , debugging becomes easy
2. Add comments ( Where should you add comments ? stated below)
   1. Functions and Methods (short description of purpose , assumptions made , arguments present , whether or not functions returns value )
   2. Ideally functions should be small if it turns out to be big separate individual big section of tasks with comments
   3. Something unique business requirement , will now help now as well as anytime soon or later your revisit
   4. Hacks 😂 Hope you get it
3. Variable and Function Naming -- _With proper naming, code reads like a narrative of what is happening, making it easier to understand._
   1. Variable names should be nouns, such as "car" or "person".
   2. Function names should begin with a verb, such as getName(). Functions that return Boolean values typically begin with is, as in isEnabled().
   3. **USE LOGICAL NAMES** Don't worry about the length its for another human be kind
   4. Variable , functions and method name should begin with lowersace and camelCase eg getName() , isTruthy
   5. Classes should be Capital Eg PersonFactory
4. Loose Coupling -- _Tightly coupled software is difficult to maintain and invariably has to be rewritten frequently._
   1. Whenever parts of an application depend too closely on one another, the code becomes too tightly coupled and hard to maintain.
   2. The typical problem arises when objects refer directly to one another in such a way that a change to one always requires a change to the other.
5. Decouple Application Logic/Event Handlers

   ```javascript
   function handleKeyPress(event) {
     if (event.keyCode == 13) {
       let target = event.target
       let value = 5 * parseInt(target.value)
       if (value > 10) {
         document.getElementById("error-msg").style.display = "block"
       }
     }
   }
   ```

   _INSTEAD USE_

   ```javascript
   function validateValue(value) {
     value = 5 * parseInt(value)
     if (value > 10) {
       document.getElementById("error-msg").style.display = "block"
     }
   }
   function handleKeyPress(event) {
     if (event.keyCode == 13) {
       let target = event.target
       validateValue(target.value)
     }
   }
   ```

   But why is above approach better than first one reason is
   The problem with this approach is twofold. First, there is no way to cause the application logic to occur other than through the event, which makes it difficult to debug. What if the anticipated result didn’t occur? Does that mean that the event handler wasn’t called or that the application logic failed? Second, if a subsequent event causes the same application logic to occur, you’ll need to duplicate the functionality or else extract it into a separate function. Either way, it requires more changes to be made than are really necessary.
   Secondly, you can test code without attaching events, making it easier to create unit tests or to automate application flow.

   Here are a few rules to keep in mind for loose coupling of application and business logic:
   ➤➤ Don't pass event object into other methods , pass only data from the event object that you need
   ➤➤ Every action that is possible in application should be possible even without xecuting event handler
   ➤➤ Event handlers should process the event and then hand off processing to application logic.

   _Keeping above approach in mind is a huge maintainability win in any code base, opening up numerous possibilities for testing and further development._

6. Respect Object Ownership - As the Saying goes ⏩️ nothing in JavaScript is sacred

   1. Don’t add properties to instances or prototypes.
   2. Don’t add methods to instances or prototypes.
   3. Don’t redefine existing methods.

   Instead what to do
   ➤➤ Create a new object with the functionality you need, and let it interact with the object of interest.
   ➤➤ Create a custom type that inherits from the type you want to modify. You can then modify the custom type with the additional functionality.

7. Avoid Globals
