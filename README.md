# Understanding Redux using React Native

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app)
and followed [WTF is Redux? | React Native App | Expo](https://www.youtube.com/watch?v=KcC8KZ_Ga2M)

* **Store** holds our state. There is only one state.
* **Actions** modify state.
* **Reducer** receives the action and modifies the state to give us a new state. 
The _actions_ can not directly modify the state.
* **Dispatcher** send actions to the _reducer_.
* **Subscriber** listens for state change to update the UI using _connect_.