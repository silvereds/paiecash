 {/* <View style={{alignItems:'center',marginTop:SIZES.padding}}>
            <ImageBackground source={require('./../../../../assets/background.jpg')} style={{height:200,width:SIZES.width*0.95}}>
              <View style={{flexDirection:'row',paddingHorizontal:SIZES.padding,marginTop:SIZES.padding,justifyContent:'space-between'}}>
                <Image source={require('./../../../../assets/logo-blanc.png')}  style={{tintColor:"#fff",height:50,width:50}}/>
                <View style={{justifyContent:'flex-end',alignItems:'center'}} >
                    <Text style={styles.statusProfileError}>
                      Profile non certifier
                    </Text>
                    <Text style={styles.statusSubscription}>
                      Aucun abonnement
                    </Text>
                </View>
                <ProgressCircle
                      percent={authData.user?.percentCertification}
                      radius={30}
                      borderWidth={10}
                      color={theme.colors.error}
                      shadowColor="#f4f4f4"
                      bgColor="#fff">
                      <Text style={styles.projectProgress}>{authData.user?.percentCertification}%</Text>
                </ProgressCircle>
              </View>
              <View style={{paddingHorizontal:SIZES.padding,marginTop:SIZES.padding,justifyContent:'space-between'}}>
                    <View style={styles.projectTitleWrapper}>
                      <TouchableOpacity>
                        <MaterialCommunityIcons
                          name="account-alert"
                          size={30}
                          color={theme.colors.textWhite}
                        />
                      </TouchableOpacity>
                      <Text style={styles.projectTitle}>
                        {authData.user?.firstName} {authData.user?.lastName}
                      </Text>
                    </View>
                    <View style={styles.projectTitleWrapper}>
                      <TouchableOpacity>
                        <MaterialCommunityIcons
                          name="mail"
                          size={30}
                          color={theme.colors.textWhite}
                        />
                      </TouchableOpacity>
                      <Text style={styles.projectTitle}>
                        {authData.user?.email} 
                      </Text>
                    </View>
              </View>
            </ImageBackground>
          </View> */}