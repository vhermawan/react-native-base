import { Text } from 'react-native';

function Profile({ navigation, route }) {
  return <Text>This is {route.params.name}'s profile</Text>;
}

export default Profile;
