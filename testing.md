#### **Steps for Configuring Testing in React**

Chapter-13 1.20.26

---

1. npm install --save-dev @testing-library/react
2. npm install --save-dev jest
3. Configure Jest
   1. jest --init but since its a package npm jest --init
   2. jest-environment-jsdom needs to be installed as well
4. testMatch: **/**tests**/**/_.[jt]s?(x), \*\*/?(_.)+(spec|test).[tj]s?(x) - 0 matches
   1. Basically its not finding either a
      1. **\_\_test\_\_** folder which has wither js | ts | jsx | tsx file
      2. OR its not finding anyfiles with .test.js | .test.jsx | .spec.js | .spec.jsx |
   2. Now craete a folder **\_\_test\_\_** and iniside that files with .test.js as a convention
5. Now again Cannot use import statement outside a module
   1. Problem is our normal javascript dosent understamd our import {} from './' oe something like that
   2. **BABEL** will help us here Babel is so cool is understands everything and makes other people understand
   3. Refer this https://jestjs.io/docs/28.x/getting-started#using-babel
6. npm install --save-dev babel-jest @babel/core @babel/preset-env
   1. create babel.config.js OR .babelrc OR babel.config.json or babelrc and folllow https://jestjs.io/docs/28.x/getting-started#using-babel
      I prefer .babelrc
7. Now you can atleast run your normal .js test
8. Add coverage in .gitignore

---

Now Lets write unit test cases in React

1. First thing we are not runnig our test on browser we are running it on jsdom (jest.config refer)
2. Our code i-e our test does not understand jsx
3. Bebel will help here us out
   remember preset-env - Heelpec us while understanding import
4. @babel/preset-react will make jsdom understand jsx
5. js dom is trying to read the logo as javascript it does not understand images
   1. When jest does not understand's someting we create and We will create a mock for it
   2. Be consistent in import and export if import where its not understanding is default not named the mock export should also be default
   3. create \_\_mocks\_\_ in src folder
   4. Now how will my code get to know to use dummy.png image
   5. We will add a configuration in jest.config
      moduleNameMapper check it
   6. Now provider error
   7. We need to create an actual store]
   8. Just how we do in our actuall app
   9. Now you provided provider you provided store (meaning we have supplied initial state to our app)
   10. If you are using Link jsdom does not understand it hance we also need to wrap a router provider
   11. We use static router jsdom does not undeerstand browser router
   12. The Test case passes DINKACHIKA YAAHHH HOOOOO
6. fetch is a browser thing hence we get error fetch not defined
   We mock our fetch also
   ```javascript
   global.fetch = jest.fn(() => {
     return Promise.resolve({
       json: () => Promise.resolve(VideoData),
     })
   })
   ```
7. toBeinTheDocument this will require this package

   ```javascript
   import "@testing-library/jest-dom"
   ```

8. Sometimes you will have to wait while writing tests
   How do u wait ?
   ```javascript
   await waitFor(() =>
     expect(VideoContainerComponent.getByTestId("video-card-div"))
   )``
   ```
   This will wait untill video-card-div is not there in dom
9. We can fire all kind of events in jsDom How can we do it ?

   ```javascript
   fireEvent.change(input, {
     target: {
       value: "Sandeep Maheshwari",
     },
   })

   fireEvent.click(screen.getElementById("data-testid"))
   ```
