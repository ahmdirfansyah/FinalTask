import React, { Component } from 'react';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('screen').height
const styles = {
    parentContainer: {
        height: deviceHeight,
        justifyContent: 'center',
    },
    textStyle:{
        fontSize:14,
        textAlign:'center',
        paddingTop:32
    },
    container: {
        backgroundColor: "#fff"
    },
    loader: {
        flex:2,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 1,
        margin: 3,
        backgroundColor: "#fff"
    }
};
export default styles;