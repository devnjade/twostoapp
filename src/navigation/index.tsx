import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabsStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="" component={} />
    </Tab.Navigator>
  );
};

const Navigation: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Auth Group */}
        <Stack.Group>
          <Stack.Screen name="" component={} />
        </Stack.Group>
        {/* Permission Group */}
        <Stack.Group>
          <Stack.Screen name="" component={} />
        </Stack.Group>
        {/* Tab Group */}
        <Stack.Group>
          <Stack.Screen name="" component={} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
