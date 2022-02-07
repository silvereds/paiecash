import React, {useEffect, useState} from 'react';
import {PaperSelect} from "react-native-paper-select";
import {theme} from "../../../core/theme";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function FilterCountry({select, setSelect}) {
    const {data, searchData} = useFetchApi(APPENV.domain + '/api/enable-country')
    const [dataSelect, setDataSelect] = useState([])

    useEffect(() => {
        searchData(`?api_key=${APPENV.apiKey}`)
    }, []);

    useEffect(() => {
        if (data.countries !== undefined) {
            let newData = []
            data.countries.map((item, index) =>
                newData.push({_id: item.id, value: `${item.calling_code} ${item.name}`}))
            setDataSelect(newData)
        }
    }, [data])


    return (
        <PaperSelect
            label="Choisir votre pays"
            value={select}
            onSelection={(value) => {
                setSelect(value)
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
