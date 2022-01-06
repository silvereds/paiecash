import React from 'react';
import DatePicker from 'react-native-datepicker'

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
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    padding: 10,
                    height: 60,
                    borderRadius: 3,
                    borderColor: '#555',
                    backgroundColor: 'white',
                    alignItems: 'center'
                },
                dateText: {
                    fontSize: 20,
                    color: "black",
                    textAlign: "left"
                }
            }}
            onDateChange={(date) => setDate(date)}
        />
    )
}
