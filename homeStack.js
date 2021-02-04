import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './components/Home';
import ReviewDetail from  './components/ReviewDetail';
import About from './components/About';
import NewReviewDetail from './components/NewReviewDetail';
import ReviewList from './components/ReviewList';

const screens = {
    Home:{
        screen:Home
    },
    About:{
        screen:About
    },
    ReviewDetail:{
        screen:ReviewDetail
    },
    ReviewList:{
        screen:ReviewList
    },
    NewReviewDetail:{
        screen:NewReviewDetail
    },
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);