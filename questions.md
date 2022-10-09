#### 1. What is the difference between Component and PureComponent? give an example where it might break my app.

PureComponent and Component, in react class-based as almost the same thing, just changing the way that rerenders in screen. In the classes React we used to have shouldComponentUpdate method that allows creating logic for when the component should rerender, and PureComponents don't have this method since they already take care of rerendering logic for you, the rerender will occur after a shallow comparison (deeper comparing) between state and props. Component doesn't will compare state and props and will rerender whenever shouldComponentUpdate is called.

#### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

You can block context propagation with the shouldComponentUpdate method. With context, if we think about what we are doing, we are managing the state of our application, since you are passing down state changes for your components in DOM tree. shouldComponentUpdate can block these state changes coming for the context being updated.

#### 3. Describe 3 ways to pass information from a component to its PARENT.

1. Simplest way: callback function in parent to receive info from the child, and pass this callback function as a prop for child component.
2. ContextApi: we can use a shared ContextProvider between parent and child, to pass info for the parent from the child since we were using the same Context in both Components.
3. MobX: We can create a class store in MobX that should have a method that receives info, and send this info to another parent component using the same store.

#### 4. Give 2 ways to prevent components from re-rendering

React.memo: we can select what props we want to compare and create some logic to prevent re-rendering when we want. React.useMemo: we can store values in the useMemo hook, in a way to avoid rerendering when this values change for example.

#### 5. What is a fragment and why do we need it? Give an example where it might break my app.

React fragments is for don't use divs adrift, so that's it.

```
<>
  <button>button 1</button>
  <button>button 2</button>
</>
```

this is possible because the fragment. Otherwise will break the app.

#### 6. Give 3 examples of the HOC pattern.

HOC is a PureFunction, and basically somethimes is used to inject functionality for some components. const NewComponent = higherOrderComponent(WrappedComponent); // following this pattern

Random counter example

```
import React, { Component } from "react";

const HOC = (Component, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: data,
      };
    }
    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <Component
          CountNumber={this.state.count}
          handleClick={this.handleClick}
        />
      );
    }
  };
};
export default HOC;

passing countNumber and handleClick to LikesCount, and changing Like button.
class LikesCount extends Component {
  render() {
    return (
      <div>
        {this.props.CountNumber} <br />
        <button onClick={this.props.handleClick}>Like👍🏻</button>
      </div>
    );
  }
}

const EnhancedLikes = HOC(LikesCount, 5);
export default EnhancedLikes;

we can implement this same logic in another component like comment with comment counter.
class CommentsCount extends Component {
  render() {
    return (
      <div>
        Total Comments : {this.props.CountNumber} <br />
        <button onClick={this.props.handleClick}>Add Comment!</button>
      </div>
    );
  }
}

const EnhancedComments = HOC(CommentsCount, 10);
export default EnhancedComments;

we can implement again the same logic for readers counter.
class ReaderCount extends Component {
  render() {
    return (
      <div>
        Total Readers : {this.props.CountNumber} <br />
      </div>
    );
  }
}

const EnhancedReaders = HOC(ReaderCount, initialReaders);
export default EnhancedReaders;
```

#### 7. what's the difference in handling exceptions in promises, callbacks and async...await.

Promises: Should you use Promise.catch(e => { error handling logic }) Callbacks: return callback(new Error('error message')) Async, Await: try { await someAsyncLogic(); } catch(err) { console.log(err) }

So the diference are obvius in syntax, but we also have the difference between executions on each type of function.

#### 8. How many arguments does setState take and why is it async.

setState have 2 arguments the first argument is what we want to pass as a new state, and the second is what gonna be run after setState run, like a callback function. The async nature, is because each execution of setState in the component is batched in other words, we group setState and put together if they should run togheter.

#### 9. List the steps needed to migrate a Class to Function Component.

Remove class declaration. Delete the constructor. Convert your methods for functions, our better, you can export this methods to better legibility. Remove this references. If have, remove bindings. If have remove this.setState's, and create logic using hooks. Use useEffect to handle life cycle methods. Pray for work! hehe

#### 10. List a few ways styles can be used with components.

Styled-components my personal favorite way, so basically you can use this third library to pass styles as css, or styled in js, and pass styles for your component. CSS, you can import css directly in jsx/tsx files and use css in your components using style prop.

#### 11. How to render an HTML string coming from the server.

You can use dangerouslySetInnerHTML prop, and handle html string direcly in your component. But this make your application expose to your XSS cross-site. So
