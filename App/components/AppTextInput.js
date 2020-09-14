import React from 'react'
import { View, TextInput,StyleSheet  } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import Colors from '../Config/Colors'


const AppTextInput = ({icon,...otherProps}) => {
    return (
        <View style={styles.container} >
           {icon&& <MaterialCommunityIcons name={icon}  style={styles.icon} color={Colors.medium} size={20} />}
            <TextInput style={styles.textInput}{...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.light,
        flexDirection:"row",
        padding:15,
        borderRadius:25,
        width:"100%",
        marginVertical:10
    },
    icon:{
        marginRight:10
    },
    textInput:{
     fontSize:18,
     fontFamily :Platform.OS === "android" ? "Roboto" : "Avenir",
     color:Colors.dark
    }
})

export default AppTextInput
