import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Forgot,
  Login,
  Onboard,
  Welcome,
  Signup,
  Mail,
  Otp,
  Phone,
  Pin,
  Verify,
} from 'src/screens/auth';

import {
  Home,
  Card,
  New,
  Cards,
  Deposit,
  Send,
  Notifications,
  Profile,
} from 'src/screens/main';

import { PermNotifications } from 'src/screens/permissions';
import { routes } from './routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabsStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.CARDS} component={Cards} />
      <Tab.Screen name={routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Auth Group */}
        <Stack.Group>
          <Stack.Screen name={routes.WELCOME} component={Welcome} />
          <Stack.Screen name={routes.ONBOARD} component={Onboard} />
          <Stack.Screen name={routes.LOGIN} component={Login} />
          <Stack.Screen name={routes.FORGOT} component={Forgot} />
          <Stack.Screen name={routes.SIGNUP} component={Signup} />
          <Stack.Screen name={routes.MAIL} component={Mail} />
          <Stack.Screen name={routes.OTP} component={Otp} />
          <Stack.Screen name={routes.PHONE} component={Phone} />
          <Stack.Screen name={routes.PIN} component={Pin} />
          <Stack.Screen name={routes.VERIFY} component={Verify} />
        </Stack.Group>

        {/* App Group */}
        <Stack.Group>
          <Stack.Screen name={routes.MAIN} component={TabsStack} />
          <Stack.Screen name={routes.CARD} component={Card} />
          <Stack.Screen name={routes.NEWCARD} component={New} />
          <Stack.Screen name={routes.DEPOSIT} component={Deposit} />
          <Stack.Screen name={routes.SEND} component={Send} />
          <Stack.Screen name={routes.NOTIFICATIONS} component={Notifications} />
          <Stack.Screen
            name={routes.PERM_NOTIFICATIONS}
            component={PermNotifications}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
