import React, {useEffect, useState} from 'react';
import {PaperSelect} from "react-native-paper-select";
import {theme} from "../../../core/theme";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function FilterCountry(props) {
    const {data, searchData} = useFetchApi(APPENV.domain + '/api/enable-country')
    const [select, setSelect] = useState()
    const [dataSelect, setDataSelect] = useState([])

    useEffect(() => {
        searchData(`?api_key=${APPENV.apiKey}`)
    }, []);

    console.log(data)

    useEffect(() => {
        if (data.countries !== undefined) {
            let newData = []
            data.countries.map((item, index) =>
                newData.push({_id: item.id, value: `${item.calling_code} ${item.name}`}))
            setDataSelect(newData)
        }
    }, [data])

    // const dataSelect = [
    //     {_id: '1', value: 'BLUE'},
    //     {_id: '2', value: 'RED'},
    //     {_id: '3', value: 'GREEN'},
    //     {_id: '4', value: 'YELLOW'},
    //     {_id: '5', value: 'BROWN'},
    //     {_id: '6', value: 'BLACK'},
    //     {_id: '7', value: 'WHITE'},
    //     {_id: '8', value: 'CYAN'},
    // ]

    return (
        <PaperSelect
            label="Choisir votre pays"
            value={select}
            onSelection={(value: any) => {
                console.log(value)
            }}
            arrayList={[...dataSelect]}
            selectedArrayList={dataSelect}
            multiEnable={false}
            dialogTitleStyle={{color: theme.colors.primary}}
            checkboxColor={theme.colors.primary}
            checkboxLabelStyle={{color: theme.colors.text, fontWeight: '700'}}
            textInputBackgroundColor={theme.colors.surface}
            textInputColor={theme.colors.text}
            textInputMode='flat'
        />
    );
}
