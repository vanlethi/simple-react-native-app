import {Navigation} from 'react-native-navigation';
import bottomTabs, {setRoot, registerNav} from './src/screens/Navigations';
import {AsyncStorage} from 'react-native';

console.disableYellowBox = true;

registerNav();
Navigation.events().registerAppLaunchedListener(async () => {
  const token = await AsyncStorage.getItem('latestUser');
  console.log('lastest user ==>', token);
  token == null ? setRoot() : bottomTabs();
});
