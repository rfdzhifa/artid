import React from "react";
import { Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./FlatList.styles";
import { Cover } from "../../../assets";
import { dummyArticle } from "../../../assets/dummy/dummyArticle";

const ListArticle = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailArticle', { item })}>
                    <Image source={Cover} style={styles.cover} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.date}>9 Desember 2022</Text>
                        <Text style={styles.content} numberOfLines={2}>{item.content}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View>
            <FlatList
                data={dummyArticle}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                bounces={false}
            />
        </View>
    );
}

export default ListArticle;