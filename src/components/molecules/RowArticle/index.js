import React, { useState, useEffect } from "react";
import { Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./RowArticle.styles";
import axios from "axios";

const RowArticle = () => {
    const navigation = useNavigation();

    const [article, setArticle] = useState();
    useEffect(() => {
        getArticle();
    }, []);

    const getArticle = () => {
        axios.get(`http://192.168.228.70:5000/api/contents`)
            .then((res) => {
                setArticle(res.data.data);
                console.log(article)
            })
            .catch((error) => console.log(error))
    }

    return (
        <View style={styles.rowListContainer}>
            {
                article?.map((article, i) => (
                    <TouchableOpacity key={i} onPress={() => navigation.navigate('DetailArticle', { article, contentId: article.id })} style={styles.rowListContainer}>
                        <View style={styles.container}>
                            <Image source={{ uri: article.cover }} style={styles.cover} />
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{article.title}</Text>
                                <Text style={styles.date}>{article.createdAt}</Text>
                                <Text style={styles.content} numberOfLines={2}>{article.meta}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
        </View>
    );
}

export default RowArticle;