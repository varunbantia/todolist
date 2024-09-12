import { StyleSheet,Text,View,Image } from "react-native";
import React from "react";
const logoImg=require("./assets/unnamed (1).png")
const Fallback=()=>{
return (
<View style={{alignItems:"center"}}>
<Image source={require('../../image/unnamed1.png')} style={{ height: 300, width: 300 }} />
<Text>Start Adding Your Task</Text>
</View>
)
} 
export default Fallback;
const styles=StyleSheet.create({})
