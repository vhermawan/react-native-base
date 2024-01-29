import { Button } from 'react-native';

function Home({ navigation }) {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
    />
  );
}

export default Home;
