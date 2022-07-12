/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin: 20,
        height: '100%',
    },
    textInput:{
        fontSize: 20,
        marginBottom: 5,
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#d7dee0',
        paddingVertical: 14,
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: '#d7dee0',
        alignItems: 'center',
        padding: 5,
        borderRadius: 8,
        marginRight: 10,
    },
});

export default styles;
