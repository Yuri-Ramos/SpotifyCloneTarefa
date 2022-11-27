import { DateTimePickerAndroid, DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function CreateAccountScreen () { 

const [dateValue, setDateValue]= useState<Date>(new Date());

const onChange = (event: DateTimePickerEvent,date?:Date | undefined) =>{
  if (!date) return;
  setDateValue(date);
}


const showPicker = () => {
  

  DateTimePickerAndroid.open({
    value: dateValue,
    onChange,
    mode: 'date',
  })
}





return (
<View style={styles.container}>
  <View>

  <Text style={styles.title}> Whats's your name?</Text>
  <TextInput style={styles.input}/>

  </View>
  <Text style={styles.title}> Whats's your date of birth?</Text>
  <Text style={styles.input}  onPressIn={showPicker}>
    {dateValue.toLocaleDateString()}
  </Text>
  <View>
  <Text style={styles.title}> Whats's your gender?</Text>
  <TextInput style={styles.input}/>

  </View>

  <TouchableOpacity style={styles.buttonContainer}> 
  
    <Text style={styles.buttonText}> Next </Text>
  </TouchableOpacity>
  
</View>
  );
}

const styles = StyleSheet.create({

  container: {
  padding: 10,
  flex:1,
  justifyContent: "space-around",

  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 50,

  },
  input: {
    backgroundColor:'#717171',
    color: '#fff',
    fontSize: 20,
    padding: 15,
    borderRadius: 4,
  },
buttonContainer:{
  width: "auto",
  backgroundColor:'#fff',
  color: '#fff',
  borderRadius: 25,
  alignItems: 'center',
  padding:12,

},
buttonText:{
  fontWeight: "bold",
  fontSize: 20,

}

});