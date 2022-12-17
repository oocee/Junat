import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from '../../Components/Header'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'



const TrainsScreen = () => {
    const route = useRoute();
    const [trainTimes, setTrainTimes] = useState([''])
    const stationObj = (route.params.item)
    console.log(stationObj.id)

    
    useEffect(() => {
        axios
          .get(`https://rata.digitraffic.fi/api/v1/live-trains/station/${stationObj.id}?minutes_before_departure=15&minutes_after_departure=15&minutes_before_arrival=15&minutes_after_arrival=15`)
          .then(response =>  setTrainTimes(response.data))
      }, []);
    
    return (
        <View style= {styles.container}>
            <Header/>

            <View style={styles.heading}>
              <Text style={styles.headingText} >{stationObj.name}</Text>
            </View>

            <ScrollView>
                <View style={styles.trainData}>
                  <Text style={styles.dataHeader}>Number</Text>
                  <Text style={styles.dataHeader}>Type</Text>
                  <Text style={styles.dataHeader}>Line ID</Text>
                </View>
              {trainTimes.map((times) => {
                  return(
                  <View style={styles.trainData} key={times.trainNumber}>
                    <Text style={styles.data} >{times.trainNumber}</Text>
                    <Text style={styles.data} >{times.trainType}</Text>
                    <Text style={styles.data} >{times.commuterLineID}</Text>
                  </View>
                  )
                }
              )}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#8B8B8B'
  },
  heading : {
    alignItems: "center", 
    justifyContent: "center", 
    flexDirection: "row",
    borderBottomColor : 'grey',
    borderBottomWidth : 1,
    backgroundColor: '#3C7D3E',
    margin : 30,
    borderRadius: 10,
  },
  headingText : {
    fontWeight: "bold",
    fontSize: '40',
    padding: 30,
    color : 'white'
  },
  trainData : {
    alignItems: "center",
    justifyContent: "space-between", 
    flexDirection: "row",
    borderColor: 'grey',
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#D9D9D9"
  },
  dataHeader : {
    padding: 20,
    fontWeight: "bold"
  },
  data : {
    padding: 20,
  }

})

export default TrainsScreen