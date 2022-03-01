import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import styles from './HomeTabStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../../core/theme';
import projectState from '../../../../helpers/projectState';
import tasksState from '../../../../helpers/taskState';
import AuthentificationContext from '../../../../context/AuthentificationContext';
import ListService from '../components/ListService';
import Partenaires from '../components/Partenaires';
import Toast from 'react-native-toast-message';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import SkeletonWidgets from './SkeletonWidgets';

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function HomeTabScreens({navigation}) {
  const {authData} = useContext(AuthentificationContext);
  const project = projectState.projects[2];
  const tasks = tasksState.tasks;
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(loading){
      setTimeout(function() {
        setLoading(false)
      }, 3000)
    }
  }, [loading])

  return (
    <SafeAreaView style={styles.container}>
      <SkeletonContent
        containerStyle={{flex: 1, width: '100%'}}
        isLoading={loading}
        layout={SkeletonWidgets}>
        <ScrollView style={{flex: 1}}>
          <TabScreenHeader
            leftComponent={() => (
              <TouchableOpacity style={styles.headerText}>
                <Text style={styles.headerTextDisabled}>Paiecash</Text>
              </TouchableOpacity>
            )}
            isSearchBtnVisible={true}
            isMoreBtnVisible={true}
          />
          <View>
            <View style={styles.projectDetailsSection}>
              <View style={styles.projectTeamAndProgress}>
                <View style={styles.projectProgressWrapper}>
                  <ProgressCircle
                    percent={15}
                    radius={35}
                    borderWidth={10}
                    color={theme.colors.error}
                    shadowColor="#f4f4f4"
                    bgColor="#fff">
                    <Text style={styles.projectProgress}>15 %</Text>
                  </ProgressCircle>
                </View>
                <View>
                  <View style={styles.projectTitleWrapper}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="account-alert"
                        size={30}
                        color={theme.colors.error}
                      />
                    </TouchableOpacity>
                    <Text style={styles.projectTitle}>
                      {authData.user?.firstName} {authData.user?.lastName}
                    </Text>
                  </View>
                  <Text style={styles.statusProfileError}>
                    Profile non certifier
                  </Text>
                  <Text style={styles.statusSubscription}>
                    Aucun abonnement
                  </Text>
                </View>
              </View>
              <View style={styles.part2}>
                <View style={styles.fullWidth}>
                  <TouchableOpacity
                    onPress={() =>
                      Toast.show({
                        type: 'info',
                        text1: 'Vous devez remplir vos informations avant',
                      })
                    }>
                    <Text style={styles.chooseAnOption}>
                      Choisir un abonnement
                    </Text>
                  </TouchableOpacity>
                </View>
                {/*<View style={{width: '40%'}}>*/}
                {/*    <Text style={styles.projectStatus}>*/}
                {/*        Retrait*/}
                {/*    </Text>*/}
                {/*</View>*/}
              </View>
            </View>
            <Partenaires />
            <ListService styles={styles} />
          </View>
        </ScrollView>
      </SkeletonContent>
    </SafeAreaView>
  );
}
