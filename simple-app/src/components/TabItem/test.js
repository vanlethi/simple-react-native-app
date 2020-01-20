/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
// import tab_navigation from './src/MainNavigator';
// import Setting from './src/TabItem/Setting';
// import sideMenu from './src/sideMenu_left';
import MainScreen from './src/ex5/Home/MainScreen';
import Detail from './src/ex5/Home/Detail';
import Login from './src/ex5/Login/Login';
import Profile from './src/ex5/Profile/Profile';
import Todo from './src/ex5/Todos/Todo';
// Navigation.registerComponent('tab_navigation', () => tab_navigation);
// Navigation.registerComponent('Setting', () => Setting);
// Navigation.registerComponent('sideMenu', () => sideMenu);
Navigation.registerComponent('MainScreen', () => MainScreen);
Navigation.registerComponent('Detail', () => Detail);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Todo', () => Todo);
Navigation.registerComponent('Profile', () => Profile);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            backgroundColor: 'white',
            currentTabIndex: 0,
          },
        },
        children: [
          {
            component: {
              name: 'MainScreen',
              options: {
                bottomTab: {
                  icon: require('./src/image/logo.png'),
                  selectedIconColor: 'black',
                  text: 'Home',
                },
              },
            },
          },
          {
            component: {
              name: 'Todo',
              options: {
                bottomTab: {
                  icon: require('./src/image/todos.png'),
                  selectedIconColor: 'black',
                  text: 'Todo List',
                },
              },
            },
          },
          {
            component: {
              name: 'Login',
              options: {
                bottomTab: {
                  icon: require('./src/image/profile.png'),
                  selectedIconColor: 'black',
                  text: 'Profile',
                },
              },
            },
          },
        ],
      },
    },
  });
});

// root: {
//   sideMenu: {
//     left: {
//       component: {
//         name: 'sideMenu',
//         passProps: {
//           text: 'This is a left side menu screen',
//         },
//       },
//     },
//     center: {
//       stack: {
//         options: {
//           topBar: {
//             title: {
//               text: 'UPCOMING EVENT',
//               alignment: 'center',
//             },
//           },
//         },
//         children: [
//           {
//             component: {
//               name: 'MainScreen',
//             },
//           },
//         ],
//       },
//     },
//   },
// },
