import React from 'react'
import { View, TextInput,StyleSheet  } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import Colors from '../Config/Colors'


const AppTextInput = ({icon}) => {
    return (
        <View style={styles.container} >
           {icon&& <MaterialCommunityIcons name={icon} />}
            <TextInput style={styles.textInput} />
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
    textInput:{
     fontSize:18
    }
})

export default AppTextInput
