import React from "react";
import { Image, View, Text } from 'react-native';
import styles from "./TopArticleCard.styles";
import { Cover } from "../../../assets";

const TopArticleCard = () => {
    return (
        <View style={styles.container}>
            <Image source={Cover} style={styles.cover} />
            <View style={styles.cardContainer}>
                <View style={styles.rectangle}>
                    <Text style={styles.title}>Seni Rupa</Text>
                    <Text style={styles.date}>9, December 2022</Text>
                    <Text style={styles.content} numberOfLines={2}>Seni Rupa adalah cabang seni yang membentuk karya seni dengan media yang bisa ditangkap mata dan dirasakan ...</Text>
                </View>
            </View>
        </View>
    );
}

export default TopArticleCard;