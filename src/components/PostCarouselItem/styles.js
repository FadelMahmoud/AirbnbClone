/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    OuterContainer:{
        backgroundColor: 'black',
    },
    innerContainer: {
        margin: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
    },
    image: {
        height: 120,
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 5,
    },
    bedrooms: {
        color: '#827D76',
    },
    description: {
        fontSize: 17,
        lineHeight: 22,
        color: 'black',
    },
    prices: {
        fontSize: 17,
    },
    newPrice: {
        fontWeight: 'bold',
    },
});

export default styles;
