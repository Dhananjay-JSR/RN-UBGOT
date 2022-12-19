
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './HomePage';
import InspirePage from './InspirePage';
import MeditatePage from './MeditatePage';
import NurturePage from './NurturerPage';

const Drawer = createDrawerNavigator();




export default function DrawerNavigator(){
    return <>
    <Drawer.Navigator>
        <Drawer.Screen options={{
          headerShown:false
        }} name='Home' component={HomePage}/> 
        <Drawer.Screen options={{
          headerShown:false
        }} name='Inspire' component={InspirePage}/> 
        <Drawer.Screen options={{
          headerShown:false
        }} name='Meditate' component={MeditatePage}/> 
        <Drawer.Screen options={{
          headerShown:false
        }} name='Nurturer' component={NurturePage}/>
    </Drawer.Navigator>
    </>
}