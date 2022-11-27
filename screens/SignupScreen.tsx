import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from 'react-native';
import { LoginButton } from '../components/Button';
export  function SignupScreen () {
  const navigation = useNavigation();
  return (
    <>
    <View>
      <Text>

   
      </Text>
    </View>
      
      <View style={styles.container}>
        <View style={styles.containerTitle}> 
        <FontAwesome style={styles.logo} name="spotify" size={65} color="#fff" />
        <Text style={styles.title}>Millions of songs.</Text>
        <Text style={styles.title}>Free on Music</Text>
        </View>

        <View style={styles.containerButton}>
          <LoginButton color="primary" title="Sign up free"
          onPress={() => {
            navigation.navigate("SignupForm");
          }} 
          />
          <LoginButton color="secondary" title="Continue with Google" icon={<FontAwesome name="google" size={24} color="#fff" />} />
          <LoginButton color="secondary" title="Continue with Facebook" icon={<FontAwesome name="facebook" size={24} color="#fff" />} />
          <LoginButton color="secondary" title="Continue with Apple" icon={<FontAwesome name="apple" size={24} color="#fff" />} />
          <LoginButton color="clear" title="Log In" />
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 50,

  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo:{
    marginVertical: 20,
  },
});
