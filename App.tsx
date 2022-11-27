import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupFormScreen, SignupScreen } from "./screens";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="SignupForm" component={SignupFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
