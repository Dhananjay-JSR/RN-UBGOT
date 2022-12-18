// import StartUpPage from "./Components/StartupPage";
import HomePage from "./Components/Screens/HomePage"
import InspirePage from "./Components/Screens/InspirePage"
import LoginPage from "./Components/Screens/LoginPage"
import MeditatePage from "./Components/Screens/MeditatePage"
import NurturePage from "./Components/Screens/NurturerPage"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from "./Components/Screens/DrawerNavigator"

// export default function App (){
//   // return <LoginPage/>
//   // return <NurturePage/>
//   // return <InspirePage/>
//   // return <MeditatePage/>
//   return <HomePage/>


// }

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{
          headerShown:false
        }} name="Home" component={LoginPage}/>
        <Stack.Screen options={{
          headerShown:false
        }} name="Main" component={
          DrawerNavigator
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}