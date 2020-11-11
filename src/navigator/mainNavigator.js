import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps171182Navigator from '../features/Maps171182/navigator';
import Additem171181Navigator from '../features/Additem171181/navigator';
import Maps171177Navigator from '../features/Maps171177/navigator';
import UserProfile171173Navigator from '../features/UserProfile171173/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps171182: { screen: Maps171182Navigator },
Additem171181: { screen: Additem171181Navigator },
Maps171177: { screen: Maps171177Navigator },
UserProfile171173: { screen: UserProfile171173Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
