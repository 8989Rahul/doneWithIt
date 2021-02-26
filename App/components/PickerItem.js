import React from "react"
import { TouchableOpacity,StyleSheet } from "react-native"
import AppText from "./AppText"

export default PickerItem =({label,onClick})=>{
    return(
        <TouchableOpacity onPress={onClick}>
            <AppText style={styles.text}>
                {label}
            </AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        padding:20
    }
})