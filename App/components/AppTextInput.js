import React from 'react'
import { View, TextInput,StyleSheet  } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import defaultStyles from "../Config/Styles"

const AppTextInput = ({icon,...otherProps}) => {
    return (
        <View style={styles.container} >
           {icon&& <MaterialCommunityIcons name={icon}  style={styles.icon} color={defaultStyles?.Colors?.medium} size={20} />}
            <TextInput style={defaultStyles.text}{...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles?.Colors?.light,
        flexDirection:"row",
        padding:15,
        borderRadius:25,
        width:"100%",
        marginVertical:10
    },
    icon:{
        marginRight:10
    }
})

export default AppTextInput
