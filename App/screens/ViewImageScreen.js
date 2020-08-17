import React from 'react'
import { Image, View,StyleSheet } from 'react-native'
import Colors from '../Config/Colors'

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image style={styles.image} resizeMode="contain" source={require("../assets/chair.jpg")}/>
        </View>
    )
}

export default ViewImageScreen


const styles = StyleSheet.create({
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:Colors.primary,
        position:"absolute",
        top:40,
        left:30,
        zIndex:1
    },
    container:{
        flex:1,
        backgroundColor:Colors.black
    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:Colors.secondory,
        position:"absolute",
        top:40,
        right:30 ,
        zIndex:1
    },
    image:{
        width:"100%",
        height:"100%"
        
    },

})