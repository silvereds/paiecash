import React from 'react'
import {Button as PaperButton} from 'react-native-paper'
import {theme} from '../../core/theme'
import styles from './ButtonStyle'

export default function Button({mode, style, ...props}) {
    return (
        <PaperButton
            style={[
                styles.button,
                mode === 'outlined' && {backgroundColor: theme.colors.surface},
                style,
            ]}
            labelStyle={styles.text}
            mode={mode}
            {...props}
        />
    )
}
