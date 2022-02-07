import React from 'react';
import DatePicker from 'react-native-datepicker'
import styles from './DatePickerStyle'
/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function DatePickerComponents({date, setDate}) {

    return (
        <DatePicker
            style={{width: '100%', marginVertical: 20,}}
            date={date}
            mode="date"
            placeholder="select date"
            format="DD MMMM YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: styles.dateIcon,
                dateInput: styles.dateInput,
                dateText: styles.dateText
            }}
            onDateChange={(date) => setDate(date)}
        />
    )
}
