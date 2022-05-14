import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from '~/modules/Home/Views/HomeScreen';
import { LoginScreen } from '~/modules/Login/Views/LoginScreen';
import { RegisterCitizenScreen } from '~/modules/RegisterCitizen/Views/RegisterCitizenScreen';
import { RegisterScreen } from '~/modules/Register/Views/RegisterScreen';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      enabled={false}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="RegisterCitizen"
              component={RegisterCitizenScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
