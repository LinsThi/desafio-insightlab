import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from '~/modules/Home/Views/HomeScreen';
import { LoginScreen } from '~/modules/Login/Views/LoginScreen';
import { RegisterCitizenScreen } from '~/modules/RegisterCitizen/Views/RegisterCitizenScreen';
import { RegisterScreen } from '~/modules/Register/Views/RegisterScreen';
import { useSelector } from 'react-redux';
import { AplciationState } from '../@types/Entity/AplicationState';

import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  REGISTER_CITIZEN_SCREEN,
} from '~/shared/constants/routes/index';

const Stack = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();

export function StackRoutes() {
  const { isLogged } = useSelector((state: AplciationState) => state.user);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      enabled={false}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          {isLogged ? (
            <Stack.Navigator
              initialRouteName={HOME_SCREEN}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />

              <Stack.Screen
                name={REGISTER_CITIZEN_SCREEN}
                component={RegisterCitizenScreen}
              />
            </Stack.Navigator>
          ) : (
            <StackLogin.Navigator
              initialRouteName={HOME_SCREEN}
              screenOptions={{ headerShown: false }}
            >
              <StackLogin.Screen name={LOGIN_SCREEN} component={LoginScreen} />
              <StackLogin.Screen
                name={REGISTER_SCREEN}
                component={RegisterScreen}
              />
            </StackLogin.Navigator>
          )}
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
