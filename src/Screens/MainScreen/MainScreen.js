import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Header from '../../Components/Header'
import axios from 'axios'

import SearchableDropdown from 'react-native-searchable-dropdown'
import {useNavigation } from '@react-navigation/native'


const MainScreen = () => {

    const navigation = useNavigation();
    const [items, setItems] = useState('No stations')
    useEffect(() => {
        axios
          .get("https://rata.digitraffic.fi/api/v1/metadata/stations")
          .then(response => setItems(response.data.map((station) =>
                { 
                    let obj= {};
                    obj.id = station.stationShortCode; 
                    obj.name = station.stationName; 
                return obj;
                }) 
          ))
      }, []);

    return (
        <View style={styles.container}>
            <Header/>
            <SearchableDropdown
                onTextChange={(text) => console.log(text)}
                onItemSelect={(item) => navigation.navigate('TrainsScreen', {
                    item: item,
                    })
                }
                containerStyle={{ padding: 5 }}
                textInputStyle={{
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    backgroundColor: '#FAF7F6',
                    margin : 5,
                    borderRadius: 5,
                }}
                itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#FAF9F8',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5,
                }}
                itemTextStyle={{
                    color: '#222',
                }}
                itemsContainerStyle={{
                    maxHeight: '60%',
                }}
                items={items}
                defaultIndex={2}
                placeholder="Search station"
                resetValue={false}
                underlineColorAndroid="transparent"
        />
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
      backgroundColor : '#8B8B8B',
      flex: 1,
    },})


export default MainScreen