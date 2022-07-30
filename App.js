import React from 'react'
import { NativeBaseProvider, extendTheme, Text, Button, Box} from 'native-base';
import AppStack from './src/navigation/appStack/index';
import store from './src/redux/store'
import { Provider } from 'react-redux';
import theme from './src/themes/nativeTheme'
import {StatusBar,PermissionsAndroid} from "react-native";
import GetLocation from 'react-native-get-location';
import { convertRemToAbsolute } from 'native-base/lib/typescript/theme/tools';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Clipboard from '@react-native-clipboard/clipboard';
import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';




const App = () => {

  const [locationText, setLocationText] = React.useState("")
  const [displayLoction, setDisplayLoction] = React.useState(false)
  

  React.useEffect(async () => { 
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{'title': 'Example App','message': 'Example App access to your location '})
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
        // alert("You can use the location");
        PushNotification.configure({
          onRegister: async function (token) {
            console.log("TOKEN:", token.token);
            Clipboard.setString(token.token);
            await Clipboard.getString();
            getCurretLocation(token.token)
            
          },
    
          onNotification: function (notification) {
            console.log("NOTIFICATION:", notification);
            notification.finish(PushNotificationIOS.FetchResult.NoData);
          },
    
          onAction: function (notification) {
            console.log("ACTION:", notification.action);
            console.log("NOTIFICATION:", notification);
          },

          onRegistrationError: function(err) {
            console.error(err.message, err);
          },
          permissions: {
            alert: true,
            badge: true,
            sound: true,
          },
          popInitialNotification: true,
          requestPermissions: true,
        }); 
      } else {
        console.log("location permission denied")
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err)
    }
    return () => {
      
    }
    

  },[])



  

  const getCurretLocation = (tokenData) =>{
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            postData(position,tokenData)
            setLocationText(position)
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );

      
      Geolocation.watchPosition(
        (position) => {
          console.log('changed  from previous position');
          console.log(position.coords.longitude);
          alert("changed")
          setLocationText(position)
          // setDisplayLoction
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );

  }



  const postData = async (lt,tokenData) => {
    // let data = {
    //   "appName":"test",
    //   "latitude":lt.coords.longitude,
    //   "longitude":lt.coords.latitude,
    //   "tokenData":tokenData
    // }
    // await axios.post("some", data, {
    //   "domain-id":"123456"
    // })
    // .then(res => {
    //   console.log("response data")
    //   console.log(res)
    // })
    // .catch(err => console.log(err))
  }



  return (
    <Provider store={store} theme={theme}>
      <StatusBar
          animated={true}
          backgroundColor="#eee"
      />
      <NativeBaseProvider>
          <Box backgroundColor="#fff">
              <Text color="#000">{locationText ? `Longitude: ${locationText.coords.longitude}, Latitude: ${locationText.coords.latitude}` : null}</Text>
          </Box>
          
          <AppStack />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App;
