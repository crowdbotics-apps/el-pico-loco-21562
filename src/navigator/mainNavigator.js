import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps144676Navigator from '../features/Maps144676/navigator';
import Add-Item144675Navigator from '../features/Add-Item144675/navigator';
import Maps144671Navigator from '../features/Maps144671/navigator';
import UserProfile144667Navigator from '../features/UserProfile144667/navigator';
import Maps144627Navigator from '../features/Maps144627/navigator';
import Add-Item144626Navigator from '../features/Add-Item144626/navigator';
import Maps144622Navigator from '../features/Maps144622/navigator';
import UserProfile144618Navigator from '../features/UserProfile144618/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps144676: { screen: Maps144676Navigator },
Add-Item144675: { screen: Add-Item144675Navigator },
Maps144671: { screen: Maps144671Navigator },
UserProfile144667: { screen: UserProfile144667Navigator },
Maps144627: { screen: Maps144627Navigator },
Add-Item144626: { screen: Add-Item144626Navigator },
Maps144622: { screen: Maps144622Navigator },
UserProfile144618: { screen: UserProfile144618Navigator },

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
