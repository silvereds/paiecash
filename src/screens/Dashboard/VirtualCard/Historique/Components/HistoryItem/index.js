import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {theme} from '../../../../../../core/theme';
import styles from '../../historiqueStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default HistoryItem = ({transaction}) => {
  return (
    <TouchableOpacity style={styles.singleMember}>
      <Image
        style={styles.singleMemberPhoto}
        source={{
          uri: transaction?.accountPhoto,
        }}
      />
      <View style={styles.singleMemberInfo}>
        <Text
          style={styles.selectedMemberName}
          numberOfLines={1}
          ellipsizeMode="tail">
          {transaction?.accountName}
        </Text>
        <Text style={styles.selectedMemberLastSeen}>
          {transaction?.accountNumber}
        </Text>
      </View>
      <View style={styles.justifyEnd}>
        <View style={styles.rowGroup}>
          <Ionicons
            name={transaction.type == 'credit' ? 'add' : 'remove'}
            size={17}
            color={
              transaction.type == 'credit'
                ? theme.colors.primary
                : theme.colors.error
            }
          />
          <Text style={styles[`${transaction.type}Amount`]}>
            {transaction?.amount}
          </Text>
        </View>
        <Text>{transaction.date}</Text>
      </View>
    </TouchableOpacity>
  );
};
