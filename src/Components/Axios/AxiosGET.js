import React from 'react';
import {} from 'react-native';
import axios from 'axios'
import { useState } from 'react';

const stationsURL = 'https://rata.digitraffic.fi/api/v1/metadata/stations'


const AxiosGET = () => {
    axios({
        method: 'get',
        url: `${stationsURL}`,
    }).then((response) => {
        return (
            response.data
        )})

}



export default AxiosGET;