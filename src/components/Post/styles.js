/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 12,
    },
    bedrooms: {
        marginTop: 10,
        marginBottom: 3,
        color: '#827D76',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
        color: 'black',
    },
    prices: {
        fontSize: 18,
        marginVertical: 5,
    },
    oldPrice: {
        color: '#827D76',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#827D76',
        textDecorationLine: 'underline',
    },
});

export default styles;
