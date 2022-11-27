import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SignupFormScreen, SignupScreen } from "./screens";

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
 <>
 <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="SignupForm" component={SignupFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
        </>
  );
}
