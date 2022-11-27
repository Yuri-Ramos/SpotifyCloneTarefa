import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export function CreateAccountScreen () { 
const [isShowDatePicker, setIsShowTimePicker]= useState(false);
const showPicker = () => {
  setIsShowTimePicker(true);
}

return (
<View style={styles.container}>
  <Text style={styles.title}> Whats's your date of birth?</Text>
  
  <Text style={styles.input}  onPressIn={showPicker}>
  octuber, 10,2020 
  </Text>
  
 
  {isShowDatePicker && (<RNDateTimePicker
  mode="date"
  textColor="#000"
  accentColor="#000"
  value={new Date()}
/>
)}

</View>
  );
}

const styles = StyleSheet.create({

  container: {
  padding: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 50,

  },
  input: {
    backgroundColor:'#ddd',
    color: '#fff',
    fontSize: 20,
    padding: 15,
    borderRadius: 4,
  }


});