1. What problem does the context API help solve?
Context API helps solve when multiple components need global state data, you can use Context API instead of "prop drilling". Context lets all the components share the global state, which can help make things much less messy.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions - Because the redux store is read only, actions allow us to change the state of the application. Actions contain an action type and associated data, and they are dispatched to a reducer.

reducers - Reducers take an action and update the state according to that action, so reducers are basically functions we write in order to change state in certain situations which are defined by actions.

store - The redux store is pretty much just where the state for all of the application is held, which is why it is known as a 'single source of truth' in redux applications. This is used to make it much easier for every component to gain access to a certain part of state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state that is used by the whole application whereas component state is only used in one single component. A good example for using application state is when you are receiving data that multiple parts of your application will use, and an example for using component state is if you have a small piece of state for a single component that you need to handle.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk is a middleware that gives us the ability to do async things in our actions. redux-thunk allows us to return functions inside of other functions inside our actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite state management system is redux, because I really enjoy the way it works, and I can see that it is really useful and will be useful to me in the future.
