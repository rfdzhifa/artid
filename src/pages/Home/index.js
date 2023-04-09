import React from "react";
import { Image, View, ScrollView, Text } from 'react-native';
import styles from "./Home.styles";
import { TopArticleCard } from "../../components/molecules";
import { Gap } from "../../components";
import ListArticle from "../../components/molecules/FlatList";

const Home = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.scrollPage}>
                <TopArticleCard />
                <Gap height={30} />
                <Text style={styles.textDivider}>Recommendations</Text>
                <Gap height={30} />
                <ListArticle />
                <Gap height={30} />
            </ScrollView>
        </View>
    );
}

export default Home; 