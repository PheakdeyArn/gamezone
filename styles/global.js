import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F2F3F4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleText: {
        fontFamily: 'Nunito_Bold',
        fontSize: 24,
    },

    contextText: {
        fontFamily: 'Nunito_Regular',
        fontSize: 14,
    },

    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#48C9B0",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 5,
      }, 

    appButtonText: {
        fontSize: 14,
        color: "#fff",
        alignSelf: "center",
        fontFamily: 'Nunito_Regular',
    }

});