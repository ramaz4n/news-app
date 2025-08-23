import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../shared/constants/routes';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {ROUTES.map(({ component, name }) => (
        <Stack.Screen key={name} component={component} name={name} />
      ))}
    </Stack.Navigator>
  );
};
