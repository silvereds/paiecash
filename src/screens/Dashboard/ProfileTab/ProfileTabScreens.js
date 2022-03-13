import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  CertifyOptionListScreen, 
  CertifyProfileInfoScreen, 
  CertifyProfilePhoneScreen, 
  CertifyProfilePwdScreen 
} from './CertifyProfileScreen/screen';
import ProfileHomeScreen from './HomeProfileTabScreen';
import { COLORS } from '../../../constants';

const stack = createStackNavigator()

const  ProfileTabScreens =({navigation})=>{
  return (
    <stack.Navigator initialRouteName="Manage Profile">

      {/* les routes et screens pour la certification de profile*/}

      <stack.Screen 
        name="Tnformations Personnelles" 
        component={CertifyProfileInfoScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerShown:false
        }}
      />
      <stack.Screen 
        name="Telephone" 
        component={CertifyProfilePhoneScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerShown:false
        }}

      />
      <stack.Screen 
        name="Modifier Le  Mot de Passe" 
        component={CertifyProfilePwdScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerShown:false
        }}
      />
      <stack.Screen 
        name="Certifiez Votre Profile" 
        component={CertifyOptionListScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
          headerShown:false
        }} 
      />
      <stack.Screen 
        name="Manage Profile" 
        component={ProfileHomeScreen} 
        options={{
          title: 'Profile',
          headerShown:false
        }}
      />
    </stack.Navigator>
  );
}
export default ProfileTabScreens
