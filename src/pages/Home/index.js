import React, { useState, useEffect } from "react";
import { Image, View, ScrollView, Text, SafeAreaView } from 'react-native';
import styles from "./Home.styles";
import { RowArticle, TopArticleCard } from "../../components/molecules";
import { Gap } from "../../components";

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.page}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.scrollPage}>
                <TopArticleCard />
                <Gap height={30} />
                <View style={styles.container}>
                    <Text style={styles.textDivider}>Recommendations</Text>
                    <Gap height={30} />
                    <RowArticle />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home; 