1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.concat(), Object.assign(), Array.map()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that contain a type and a payload. They contain data to be sent or dispatched to the reducer to tell the reducer what data to change and the reducer’s purpose is to update the store with that data. The store is a single source of truth because all components have access to it at any time.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is an immutable and read only and can be managed and synced across every level of the application while component state can only be created and managed via components and managing it can be a hassle. Class components can be used to create local state and methods that track an input field in a form or when you need lifecycle methods, but the application state can be used all the time.

4.  What is middleware?

a tool to intercept some process, but in redux it gives user a chance to do things to the data that is in an action creator

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware that has the the capability to handle asynchronous operations inside action creators. Since the flow from actions to reducers are synchronous, redux thunk makes making API calls possible by delaying the flow between actions and reducers.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()
