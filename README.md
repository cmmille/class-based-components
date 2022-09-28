# react-class-based-components

Very basic React application to learn how to use class-based components in React. 

Equivalent features:
* component declaration: 
```
class ComponentName extends Component {}
```
* useState:
```
constructor() {
  super();
  this.state = {name: '', addresses: []}
}
nameChangeHandler = (event) {
  this.setState( {name: event.target.value} ) 
}
```
* useEffect(..., [])
```
componentDidMount() {
  // do something
}
```
* useEffect(..., [name])
```
componentDidUpdate(prevProps, prevState) {
  if (prevState.name !== this.state.name) {
    // do something
  }
}
```
* useContext
```
// const MyContext = React.createContext( { users: []} )
import MyContext from './my-context' 

// Assumes component or parent is wrapped in MyContext.Provider
static contextType = MyContext

myFunction() {
  const myVar = this.context.users
}
```
