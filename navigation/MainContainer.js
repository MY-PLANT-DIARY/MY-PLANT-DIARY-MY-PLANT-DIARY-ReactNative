import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getHeaderTitle, Header, HeaderTitle } from '@react-navigation/elements';
import {View,Text, Platform} from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import DiaryScreen from './screens/DiaryScreen';
import MypageScreen from './screens/MypageScreen';
import SnsScreen from './screens/SnsScreen';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const diaryName = "Diary";
const mypageName = "Mypage";
const snsName = "Sns";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        initialRouteName={homeName}
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            }else if (rn === snsName) {
              iconName = focused ? 'compass' : 'compass-outline';
            }
            else if (rn === diaryName) {
              iconName = focused ? 'journal' : 'journal-outline';
            }
            else if (rn === mypageName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveBackgroundColor:'#8E5C21',
          tabBarActiveBackgroundColor:'#8E5C21',
          tabBarShowLabel:false,
          
        })
      }
        tabBarOptions={{
          activeTintColor: '#77B255',
          inactiveTintColor: 'white',
          labelStyle: { paddingBottom: 5, fontSize: 10 },
          style: { padding: 10, height: 100},
          

        }}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{title:'MY PLANT DIARY'}}/>
        <Tab.Screen name={detailsName} component={DetailsScreen} options={{title:'MY PLANT DIARY'}}/>
        <Tab.Screen name={snsName} component={SnsScreen} options={{title:'MY PLANT DIARY'}}/>
        <Tab.Screen name={diaryName} component={DiaryScreen} options={{title:'MY PLANT DIARY'}}/>
        <Tab.Screen name={mypageName} component={MypageScreen} options={{title:'MY PLANT DIARY'}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default MainContainer;
