import React from "react";
import { Image, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const splash = () => {
    return(
        <View style = {{
            backgroundColor: "#FCFCFC",
            flex:1, 
            alignItems:'center', 
            justifyContent: 'center', 
            padding: 70
            }}>
                <Image source={require('../assets/Logo.png')}
                style = {{width: 130, height:27.88}}
                ></Image>
        </View>
    );
}
