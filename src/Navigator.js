import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';

import { Splash } from './Main/Splash'
const firstNavigator = createStackNavigator({
    firstBage: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    }
})
const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: Splash,
            navigationOptions:{
                header:null
            }
        }
        ,
        Home1: {
            screen: Splash,
            navigationOptions:{
                header:null
            }
        }
        ,
        Home2: {
            screen: Splash,
            navigationOptions:{
                header:null
            }
        }
        ,
        
    })
     const switcher = createSwitchNavigator({
         first : firstNavigator,
         second : TabNavigator
     })
export default createAppContainer(TabNavigator)