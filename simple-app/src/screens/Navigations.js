import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import MainScreen from '../screens/Home/MainScreen';
import Detail from '../screens/Home/Detail';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Profile from '../screens/Profile/Profile';
import Todo from '../screens/Todos/Todo';
import Loading from '../screens/Loading';
import {Provider} from 'react-redux';
import store from '../redux/store';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export const registerNav = () => {
  Navigation.registerComponent(
    'Loading',
    () => ReduxProvider(Loading),
    () => Loading,
  );
  Navigation.registerComponent('MainScreen', () => MainScreen);
  Navigation.registerComponent('Detail', () => Detail);
  Navigation.registerComponent('Todo', () => ReduxProvider(Todo), () => Todo);
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'Register',
    () => ReduxProvider(Register),
    () => Register,
  );
  Navigation.registerComponent(
    'Profile',
    () => ReduxProvider(Profile),
    () => Profile,
  );
};

registerNav();

const bottomTabs = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            animate: false,
          },
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'MainScreen',
                    options: {
                      topBar: {
                        title: {
                          text: 'Home',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  animate: false,
                  icon: require('../assets/image/logo.png'),
                  text: 'Home',
                  selectedTextColor: 'red',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Todo',
                    options: {
                      topBar: {
                        title: {
                          text: 'Todo List',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  animate: false,
                  icon: require('../assets/image/todos.png'),
                  text: 'Todo List',
                  selectedTextColor: 'red',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Profile',
                    options: {
                      topBar: {
                        title: {
                          text: 'Profile',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  animate: false,
                  icon: require('../assets/image/profile.png'),
                  text: 'Profile',
                  selectedTextColor: 'red',
                },
              },
            },
          },
        ],
      },
    },
  });
export default bottomTabs;

export const showModal = screenName => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: screenName,
            options: {
              topBar: {
                background: {
                  color: '#00BFFF',
                },
                title: {
                  text: 'Register',
                  alignment: 'center',
                },
                rightButtons: [
                  {
                    id: 'close',
                    icon: require('../assets/image/circled-left.png'),
                  },
                ],
              },
            },
          },
        },
      ],
    },
  });
};

export const setRoot = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Login',
      },
    },
  });
};
