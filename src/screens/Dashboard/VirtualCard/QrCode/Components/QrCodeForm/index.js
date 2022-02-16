import React, { useState } from 'react'
import Button from '../../../../../../components/Button'
import TextInput from '../../../../../../components/TextInput'
import styles from '../../qrCodeStyle'

const QrCodeForm = ({onSubmitForm, error="", loading}) => {
    const [designation, setDesignation] = useState('')
    const [enterpriseId, setEnterpriseId] = useState('')
    return(
        <>
            <TextInput value={designation} onChangeText={(text) => setDesignation(text)} errorText={error} label="Désignation" disabled={loading} returnKeyType="next" />
            <TextInput value={enterpriseId} onChangeText={(text) => setEnterpriseId(text)} label="ID de l'entreprise" disabled={loading} style={styles.marginVert15} />
            <Button mode="contained" disabled={loading} onPress={() => onSubmitForm(designation, enterpriseId)}>Créer le QR Code</Button>
        </>
        
    )
}

export default QrCodeForm