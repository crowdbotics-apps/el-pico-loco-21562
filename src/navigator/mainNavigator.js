import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item144771Navigator from '../features/Add-Item144771/navigator';
import Maps144767Navigator from '../features/Maps144767/navigator';
import UserProfile144763Navigator from '../features/UserProfile144763/navigator';
import BlankScreen44144740Navigator from '../features/BlankScreen44144740/navigator';
import BlankScreen43144739Navigator from '../features/BlankScreen43144739/navigator';
import BlankScreen42144738Navigator from '../features/BlankScreen42144738/navigator';
import BlankScreen31144725Navigator from '../features/BlankScreen31144725/navigator';
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
Add-Item144771: { screen: Add-Item144771Navigator },
Maps144767: { screen: Maps144767Navigator },
UserProfile144763: { screen: UserProfile144763Navigator },
BlankScreen44144740: { screen: BlankScreen44144740Navigator },
BlankScreen43144739: { screen: BlankScreen43144739Navigator },
BlankScreen42144738: { screen: BlankScreen42144738Navigator },
BlankScreen31144725: { screen: BlankScreen31144725Navigator },
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
