import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/Blue_Logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <Image style={styles.lock} source={require("./assets/user.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
    
        <Image style={styles.lock} source={require("./assets/padlock.png")} />
        
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Image style={styles.eiew} source={require("./assets/private.png")} />
      </View>
 
      <Text>Remember Password</Text>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

       <Text style={styles.rem}>Login with</Text>

       <View style={styles.siteinput}>
       <Image style={styles.site} source={require("./assets/Instagram.png")} />
       <Image style={styles.site} source={require("./assets/Google.png")} />
        <Image style={styles.site} source={require("./assets/Facebook.png")} />
     </View>
          <Text style={styles.forgotbutton}>Forgot Password</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
 
  image: {
    marginBottom: 40,
    width: 200,
    height: 120,
  },

  lock:{
    height:20,
    width:20,
    marginTop:13,
    marginLeft:15,
  },

  eiew:{
    height:20,
    width:20,
    marginTop:13,
    marginLeft: 140,
  },


  site: {
    height:25,
    width:25,
    marginTop:13,
    marginLeft:25,
    flexDirection: 'row'

  },

  loginText:{
    color: "white"
  },

  siteinput: {
  
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 5,
    marginLeft: 120,
    flexDirection: 'row',


  },
  
 
  inputView: {
    backgroundColor: "#ccc",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    justifiyContent: 'space-between',

  
  },
 
  TextInput: {
    height: 45,
    marginLeft: 5,
  },

  forgotbutton: {
    height: 20,
    marginBottom: 20,
    backgroundColor: "white",
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "green",
  },
});