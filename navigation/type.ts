import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

export type MainStacknavigatorParamList ={
    Signup: undefined;
    CreateAccoun: undefined;
}

export type SignupScreenNavigationProp = NativeStackNavigationProp<
MainStacknavigatorParamList, 'Signup
>;