import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';


import { Splash } from './Main/Splash'
import { Intro } from './Main/Intro'
import { Login } from './Main/Login'
import { SignUp } from './Main/SignUp'
import { Reset } from './Main/Reset'
//import { Shadow } from './Components/Shadow'
import { Home } from './Core/Home';


const GreenBottomTab = createBottomTabNavigator({
    Splash1: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },

    Splash2: {
        screen: Splash,
        /*  navigationOptions: {
             header: null
         } */
    },
    Splash3: {
        screen: Intro,
        /* navigationOptions: {
            header: null 
        }*/
    },
    
})

const GreenHome = createStackNavigator(
    {
        Splash: {
            screen: Splash,
            navigationOptions: {
                header: null,

            },

        },
        Intro: {
            screen: Intro,
            navigationOptions: {
                header: null ,
                
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null 
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                header: null 
            }
        },
        Reset: {
            screen: Reset,
            navigationOptions: {
                header: null 
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                header: null 
            }
        },
        

    }
);



const switcher = createSwitchNavigator({
    frist: GreenHome,
    second: GreenBottomTab
})

export default createAppContainer(GreenHome);