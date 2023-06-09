
## Edu-React-PTT.G02 (React-PTT-v2)

The topics here are the titles of the lessons covered for React Course Group-02.

- Day 01-03 Level-1 (React Introduction)

- Day 04-07 Level-2 (Building Web Applications with React and Redux)

- Day 08-09 Level-3 (Advanced React)
---
**Create a Project**
To create a new React project, run the following command:
`npx create-react-app [... project name ...]`

**Run the Project**
To run the project, use the following command:
`npm start`

**Stop the Project**
To stop the project, press `CTRL + C` in the terminal.

**Terminal Commands**
- Open a Folder: `cd [... name / path ...]`
- Open the Parent Folder: `cd ..`
- List Folders: `ls`
- Clear the Terminal:
- Windows: `cls`
- Linux/MacOS: `clear`
---
### Day01
1. npx create-react-app [projectName] or .
2. Folder Structure
3. Component

### Day02
01. Summary
02. Components
03. JSX Field - JS Code Field - Class Field
04. Using CSS (inline Style, external Style, Style File)
05. Props
06. PropTypes - PropTypes->shape
07. Default Props
08. State
09. Events
10. Bind
11. React Developer Tools
> [Link for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)

>Note: https://www.wappalyzer.com/ for web site technology analyzer

12. Class vs Functional Component
13. STATE - useState
14. Import Logic
15. Phone Book with Class Component
```node
npx create-react-app phonebook
```

### Day03
01. Summary
02. APP.1 - Phone Book with Class Component
03. APP.2 - Phone Book with Functional Component

- Create Project
- Remove File/Code
- Create Component Folder/Files (Contact-Form-List)
- Import Components on DOM Node
- Coding/Import Style /main.css
- Coding Contact,List,Form Component

04. Script fileds & Build Application
05. Life Cycle
- React Life Cycle Methods
> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

06. Life Cycle in Functional Component
07. Hooks - useState, useEffect, useRef
08. Exam

  

### Day04
01. Summary
02. Fetch
 > Fake Data API: https://jsonplaceholder.typicode.com/
03. Axios
```
npm i axios
```
04. Routes
```
npm i react-router-dom
```
> [BrowserRouter , Link (to), Routes, Route (path,index, no match *,any
> text *, params :), Nested Route, NavLink ]

05. Slide : DOM & Events
06. APP.3 - Keyboard-events-app
07. Higher Order Component (HOC)
  
### Day05
01. Summary
02. HOC
03. Reausable HOC
04. Pure Component
05. Context API (context-sample project)
06. Promise Slide & Coding
07. Slide : Redux (redux-sample project) - Modern Redux

> Store - dispatch(action) - action=>{type:'...',payload:'...'} Reducer
> (Store_Brain-State_Management-State_Object) - subscribe

08. Redux Flow Chart : https://github.com/reduxjs/redux/issues/653
09. Introduction to Redux
    ```
    npm install redux
    ```
10. Counter with Redux Core
11. redux devtools extension
    - [Configure Link](https://github.com/zalmoxisus/redux-devtools-extension)
12. Modern Redux - Redux Toolkit
> SRC::: https://redux.js.org/tutorials/essentials/part-2-app-structure
```
npx create-react-app [my-app] --template redux
```
    
### Day06
01. Summary
02. Install Redux Toolkit
03. Using Modern Redux
	- 13.1.	https://medium.com/@fdikmen/redux-toolkit-ile-modern-redux-kullan%C4%B1m%C4%B1-5b59f8055da6
	- 13.2.	https://medium.com/@fdikmen/reduxta-action-creators-ve-action-types-24c28c651547
	- 13.3.	https://medium.com/@fdikmen/redux-toolkit-ile-asenkron-i%CC%87%C5%9Flemleri-y%C3%B6netme-redux-thunk-41dde4ba4c07

    > createSlice (userSlice.js)
    > create/configure Store (App/store.js)
    > Provide Store for all Components (index.js)
    > useDispatch / useSelector (Component=> User.js)

04. Thunk Middleware
05. Using Redux Tookit Template
06. Second parameter (thunkAPI) in createAsyncThunk
07. Final Project for React Traning - MovieApp
   


### Day07
01. Summary
02. Slide : Building Web Applications with React and Redux
03. MovieApp (Project Continue)
    - Create React app With Redux Template
    ```
    npx create-react-app movie-app --template redux
    ```
    - Install Semantic UI 
    ```
    npm install semantic-ui-react semantic-ui-css
    ```
        - import Semantic UI CSS in index.js
        ```
        import 'semantic-ui-css/semantic.min.css'
        ```
    - Project Folder Structure <br/>
    https://medium.com/@fdikmen/a-redux-toolkit-project-structure-guide-58093baa88a5

    - Using Template from SemanticUI

    - Create components (MovieAdd & MovieList)

    - Configure Menu (React Router DOM)

    ```
    npm i react-router-dom  
    ```
        - Using BrowserRouter (index.js)
        - Using Link (HeaderSection.js)
        - Using Routes/Route (RootRouter.js)
        - Import RootRouter in HomePage.js
    - Using Message Component From SemanticUI for Home/404 JSX Code (RootRouter.js)
    - Using RTK - Create Slice File (movieSlice.js) with rxslice
    - import reducer to Store (store.js)
    - Using [mockApi.io](https://mockapi.io/)
    - Create base Axios Instance (/API/axiosConfig.js)
    - Coding FetchMovie method in Slice (MovieSlice.js)
    - Using FetchMovie in Slice ExtraReducer (MovieSlice.js)
    - Get data from Store in MovieList.js
    - Create CardComponent
    - Coding CreateMovie method in Slice (MovieSlice.js)
    - Using CreateMovie in Slice ExtraReducer (MovieSlice.js)



### Day08
01. Summary
02. Source Book (Handbook)
03. Table of Content
04. Introduction to React Native
05. Introduction to TypeScript
- tsrnf  || tsrnc || rnf || rnc
- View, Text, SafeAreaView, Props, State, LifeCycle Methods, Events - TwoDataBind
- Alert.alert, Alert.prompt, Button, TouchableOpacity, TouchableHightlight, ScrollView, FlatList
- style- stylesheets, ActivityIndicator,Dimensions, Platform
06. ActivityIndicator - ReactNative-Navigator
07. JSPromise
08. Lazy (npx create-react-app lazy-suspense-sample)
09. Suspense
10. React Fragment=>  <> ... </>
11. i18n l10n
Note: https://www.merixstudio.com/blog/internationalization-i18n-localization-l10n-react-apps/?utm\_source=facebook&utm\_medium=social&utm_campaign=posting
```node
npm i react-intl
```
12. Isomorphic
13. NextJS
- node -v || node --version
```node
npx create-next-app
```
- npm run dev
14. Final-Project


### Day09
01. NextJS snippets
02. npx create-next-app lesson-sample
- cd xxxPath-Urlxxx  && npm run dev
03. Routes
- static route => Folder/page.js
- dynamic route => [Folder]/page.js
- using params => props.params.XXParameterNameXX
- Catch All Routes => [...Folder]/page.js
- Multiple Routes static+dynamic
- Optional catch-all Routes => [[...Folder]]/page.js
- Route Group => (GroupName)/Folder
04. Link
- src
- prefetch
- replace
05. app-Folder
- jsx, js, tsx
- layout.js => children,...res
- page.js
- loading.js
- error.js
- notFound() => not-found.js
06. pages/404.js | pages/500.js
07. Search Params => props.searchParams => Query Params
Params => props.params => STD Params
08. Data Fetch (fetch/axios)
- fetch => next: {revalidate: 1000}
- Promise.All
09. "use client" --- "use server"
10. Images
- FakeData: https://picsum.photos/200/300
- placeholder - blurDataURL
- quality
- fill
- src - height - width - alt
11. Fonts
12. Script
12. Tailwind CSS
13. FlowBite
14. Final-Project
npx create-next-app finalproject
- cd xxxPath-Urlxxx  && npm run dev
- head.js
- styles
- reset.css (https://meyerweb.com/eric/tools/css/reset/)
- global.css
- React Icons [npm i react-icons]
- components/header/index.js && components/header/styles.modules.css
- components/footer/index.js && components/footer/styles.modules.css
(https://symbl.cc/en/)
- .env
- services/movie.js
- Loading


Live Share Link;<br/>
https://prod.liveshare.vsengsaas.visualstudio.com/join?AEE0B2CCAD60DC7E5CE9F778D236A52729CA