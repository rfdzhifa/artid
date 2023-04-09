import React from "react";
import { Image, View } from 'react-native';
import styles from "./Splash.styles";
import { IconLogo } from "../../assets";

const Splash = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Image source={IconLogo} style={styles.logo} />
        </View>
    );
}

export default Splash;