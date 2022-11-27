import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { MainStacknavigatorParamList } from './navigation/type';
import { CreateAccountScreen, SignupScreen } from "./screens";

const Stack = createNativeStackNavigator<MainStacknavigatorParamList>();
export default function App() {
  
  return (
 <>
 <StatusBar style="auto" />
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="CreateAccoun" component={CreateAccountScreen} options={{
            headerShown: true,
            title: "Create Screen",

        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
        </>
  );
}
