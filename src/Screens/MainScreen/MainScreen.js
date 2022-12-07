import React from 'react'
import { View, Pressable, Text, Platform, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../Components/Header'
import AxiosGET from '../../Components/Axios/AxiosGET'

const MainScreen = () => {

    return (
        <View>
            <Header/>
            <Pressable onPress={AxiosGET}>
                <Text>Testi</Text>
            </Pressable>
        </View>
    )
}

export default MainScreen