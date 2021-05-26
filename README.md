# react-router-dom
- It is not official packaged by Facebook.

1. Installation
```cmd
npm i react-router-dom
```

2. Basic Routing
Import BrowserRouter and Route from react-router-dom

```js
import { BrowserRouter, Route } from 'react-router-dom';
```

then add Route components (pages)

```js
function App() {
  return (
    <BrowserRouter>
      <Route path = "/" component = { Home } />
      <Route path = "/profile" component = { Profile } />
      <Route path = "/about" component = { About } />
    </BrowserRouter>
  );
};
```

if you want to avoid duplicated page, add 'exact' props

```js
<Route path = "/" exact component = { Home } />    
```

## Dynamic routing
  1. Use id  
    - add :id after path  
    - then in profile page, use props.match.params.id to get it's id.  
    following is props object </br>
    ![image](https://user-images.githubusercontent.com/81205807/119598407-d9a91d00-be1d-11eb-8959-6a936a59464b.png)
    
 ```js
    function App() {
      return (
        <BrowserRouter>
          <Route path = "/" exact component = { Home } />
          <Route path = "/profile" exact component = { Profile } />
          <Route path = "/profile/:id" component = { Profile } />
          <Route path = "/about" component = { About } />
        </BrowserRouter>
      );
    };
 ```

    

 2. Use ?key=[value]
    - No need to add route component
    - Use props.location.search to get path </br>
    ![image](https://user-images.githubusercontent.com/81205807/119598612-3c9ab400-be1e-11eb-81e8-d2493a5ade8a.png)

    - How to get value
      1. URLSearchParams (WebAPI)
        - use method get() to obtain value
        - but not supported in IE
        
      2. query-string module
        - installation
          ```cmd
          npm i query-string
          ```
          
        - import query-string to page you want to use value
          ```js
          import queryString from 'query-string';
          ```
          
          then use query.[name of value]
        
  
    

## Switch component
  - Show the first Route component that matches path
  - Browser can show Not Found page if there is no matching path
  - No need to add 'exact' props
  
  import switch component
  ```js
  import Switch from 'react-router-dom';
  ```
  then wrap Route components to switch with Switch component
  
  ```js
  <Switch>
        <Route path = "/profile/:id" component = { Profile } />
        <Route path = "/profile" component = { Profile } />
        <Route path = "/about" component = { About } />
        <Route path = "/" exact component = { Home } />
        <Route component = { NotFound } />
  </Switch>
  ```
  
  DON'T FORGET TO ADD exact PROPS IN ROOT PATH to get 'Not Found' page
  
## Link component
  - import Link component, then use it where you want

  ```js
  <Link to="/">Home</Link>
  ```

## NavLink component
  - able to style active link
  - you must use exact props to avoid duplication
  - you must use inActive props in component with query-string
    - isActive props has methods called 'match' and 'location'
    - 'match' exempts page without isActive props (where match === null)
    - location.search to get the path of a page with query-string

```js
<NavLink 
          to="/about?name=olivia" 
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log(location);
            return match !== null && location.search === '?name=olivia';
          }}>
          About?name=olivia
</NavLink>
```
  
## Alternative of <a> element without reload
  - props.history.push(path)
  
  ```js
    export default function Login(props) {
    function login() {
      setTimeout(() => {
        //페이지를 이동
        props.history.push('/');
      }, 1000); // setTimtout() is to demonstrate loading time
    }

    return (
      <div>
        <h2>Login page</h2>
        <button onClick={ login }>Sign In</button>
      </div>
      )
     }
  ```
  
## WithRouter component
  - Bring props in different component
  - import WithRouter and wrap a component to use props
  
```js
 export default withRouter(function LoginBtn(props) {
  console.log(props);
  function login() {
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  }
  return (
    <button onClick={login}>Sign In</button>
  )
})
```
  
## Redireact component   
  - when rendered, redirect to path of to props
  
  ```js
  const isLogin = true;

  <Route 
    path="/login" 
    render={() => isLogin ? <Redirect to="/" /> : <Login />} 
  />
  ```
