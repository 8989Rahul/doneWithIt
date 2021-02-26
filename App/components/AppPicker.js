import React, { useState } from 'react'
import { View,StyleSheet, Modal, Button  } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import defaultStyles from "../Config/Styles"
import AppText from './AppText'
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import PickerItem from './PickerItem'

const AppPicker = ({icon,items,placeholder}) => {
    const [modalVisible,setModalVisible] = useState(false)
    return (
       <>
         <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
         <View style={styles.container} >
           {icon&& <MaterialCommunityIcons name={icon}  style={styles.icon} color={defaultStyles?.Colors?.medium} size={20} />}
            <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons name="chevron-down"  style={styles.icon} color={defaultStyles?.Colors?.medium} size={20} />
        </View>
         </TouchableWithoutFeedback>
         <Modal visible={modalVisible} animationType="slide" >
             <Button title="Close" onPress={()=>setModalVisible(false)} />
             <FlatList 
                data={items}
                keyExtractor={item=>item.value.toString()} 
                renderItem={({item})=><PickerItem label={item.label} onClick={()=>console.log(item)} /> }
             /> 
         </Modal>
       </> 
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
    },
    text:{
        flex:1
    }
})

export default AppPicker
