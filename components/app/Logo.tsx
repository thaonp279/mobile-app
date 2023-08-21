import {Image} from 'react-native'
export function Logo() {
    return (
      <Image
        style={{ width: 55, height: 55}}
        source={require('../../assets/images/logo.png')}
      />
    );
  }