import React from 'react'
import { NativeBaseProvider, extendTheme, Text, Button} from 'native-base';
import AppStack from './src/navigation/appStack/index';
import store from './src/redux/store'
import { Provider } from 'react-redux';
import theme from './src/themes/nativeTheme'
import {StatusBar} from "react-native";
import GetLocation from 'react-native-get-location'
import { convertRemToAbsolute } from 'native-base/lib/typescript/theme/tools';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Clipboard from '@react-native-clipboard/clipboard';

const App = () => {

  const [locationText, setLocationText] = React.useState("")
  const [tokenId, setTokenId] = React.useState("")
  const [updateTime, setUpdateTime] = React.useState(0)

  const getNotification = () => {
      // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: async function (token) {
        console.log("TOKEN:", token.token);
        // Clipboard.setString(token.token);
        // let tokenData = await Clipboard.getString();
        // console.log("Token data:", tokenData);
        // setTokenId(tokenData)
        getCurretnLocation(token.token)
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  }

  React.useEffect(() => {
    setInterval(()=> {
      getNotification()
    },60000)
    console.log('updateTime')
    console.log(updateTime)
  }, [])


  const getCurretnLocation = (tokenData) =>{
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
    .then(location => {
      console.log('tokenId');
      console.log(tokenData);
      console.log(location);
      postData(location,tokenData)
      setLocationText(location)
      setUpdateTime(updateTime + 1)
    })
    .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
    })
  }



  const postData = async (lt,tokenData) => {
    let data = {
      "appName": "test",
      "latitude": lt.longitude,
      "longitude": lt.latitude,
      "token1": tokenData

    }
    // await axios.post("https://otrackerdevapi.onpassive.com/notification/pushNotifications", data)
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
          {/* <Text>{locationText ? `Longitude: ${locationText.longitude}, Latitude: ${locationText.latitude}` : null}</Text> */}
          {/* <Button onPress={() => getCurretnLocation()}>Get Current Location</Button> */}
          <AppStack />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App;


