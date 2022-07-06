/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    image:{
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
        width: '50%',
        marginLeft: 25,
    },
    button:{
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginLeft: 25,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    searchButton:{
        position: 'absolute',
        top:25,
        /*elevation: 10,*/
        zIndex: 10,
        backgroundColor: 'white',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default styles;
