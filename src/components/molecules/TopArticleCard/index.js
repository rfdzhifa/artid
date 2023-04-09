import React, { useState, useEffect } from "react";
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from "./TopArticleCard.styles";
import { Cover } from "../../../assets";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const TopArticleCard = ({ limit }) => {
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
    const limitedArticle = article && article.length > 0 ? [article[0]] : [];

    return (
        <View>
            {
                limitedArticle.map((article, id) => (
                    <TouchableOpacity key={id} onPress={() => navigation.navigate('DetailArticle', { article, contentId: article.id })}>
                        <View style={styles.container}>
                            <Image source={{ uri: article.cover }} style={styles.cover} />
                            <View style={styles.cardContainer}>
                                <View style={styles.rectangle}>
                                    <Text style={styles.title}>{article.title}</Text>
                                    <Text style={styles.date}>{article.createdAt}</Text>
                                    <Text style={styles.content} numberOfLines={2}>{article.meta}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View >
    );
}

export default TopArticleCard;