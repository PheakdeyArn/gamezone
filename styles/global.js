import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F2F3F4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        backgroundColor: '#48C9B0'
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
    },

    itemListContainer: {
        marginTop: 30,
        width: '90%',
    },

    detailItemWrapper: {
        paddingTop: 10,
       
    },

    detailItem: {
        // maxWidth: '80%',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 20,
    },

    detailItemText: {
        fontSize: 18,
        fontFamily: 'Nunito_Bold',
        color: '#99A3A4'
    }

});