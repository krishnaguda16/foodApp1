import React from 'react'
import { NativeBaseProvider, extendTheme, Text, Button} from 'native-base';
import AppStack from './src/navigation/appStack/index';
import store from './src/redux/store'
import { Provider } from 'react-redux';
import theme from './src/themes/nativeTheme'
import {StatusBar} from "react-native";
import GetLocation from 'react-native-get-location';
import { convertRemToAbsolute } from 'native-base/lib/typescript/theme/tools';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Clipboard from '@react-native-clipboard/clipboard';
import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';


const App = () => {

  const [locationText, setLocationText] = React.useState("")

  Geolocation.watchPosition(
    (position) => {
      console.log('changed  from previous position');
      console.log(position);
      setLocationText(position)
    },
    (error) => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );

  React.useEffect(() => {    
    PushNotification.configure({
      onRegister: async function (token) {
        console.log("TOKEN:", token.token);
        getCurretnLocation(token.token)
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
    
  },[])



  

  const getCurretnLocation = (tokenData) =>{
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

  }



  const postData = async (lt,tokenData) => {
    let data = {
      "appName":"test",
      "latitude":lt.coords.longitude,
      "longitude":lt.coords.latitude,
      "tokenData":tokenData
    }
    await axios.post("https://otrackerdevapi.onpassive.com/notification/pushNotifications", data, {
      "domain-id":"123456"
    })
    .then(res => {
      console.log("response data")
      console.log(res)
    })
    .catch(err => console.log(err))
  }



  return (
    <Provider store={store} theme={theme}>
      <StatusBar
          animated={true}
          backgroundColor="#eee"
      />
      <NativeBaseProvider>
          <Text>{locationText ? `Longitude: ${locationText.coords.longitude}, Latitude: ${locationText.coords.latitude}` : null}</Text>          
          <AppStack />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App;
