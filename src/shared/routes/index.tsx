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
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />

              <Stack.Screen
                name="RegisterCitizen"
                component={RegisterCitizenScreen}
              />
            </Stack.Navigator>
          ) : (
            <StackLogin.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <StackLogin.Screen name="Login" component={LoginScreen} />
            </StackLogin.Navigator>
          )}
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
