/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { FlashMessage } from './src/shared/ui/flash-message/flash-message.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/containers/main-stack/main-stack.tsx';
import { Navigation } from './src/shared/utils/navigation.ts';

const ViewContainer = styled.View<{
  insetTop: number;
  insetBottom: number;
  insetLeft: number;
  insetRight: number;
}>`
  flex: 1;
  padding-top: ${({ insetTop }) => insetTop}px;
  padding-bottom: ${({ insetBottom }) => insetBottom}px;
  padding-left: ${({ insetLeft }) => insetLeft}px;
  padding-right: ${({ insetRight }) => insetRight}px;
`;

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ViewContainer
      insetTop={safeAreaInsets.top}
      insetBottom={safeAreaInsets.bottom}
      insetLeft={safeAreaInsets.left}
      insetRight={safeAreaInsets.right}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlashMessage />
      <NavigationContainer ref={Navigation.navigationRef}>
        <MainStack />
      </NavigationContainer>
    </ViewContainer>
  );
}

export default App;

declare global {
  interface Console {
    blog: (arg: unknown) => void;
  }
}

console.blog = function (arg: unknown) {
  return console.log(JSON.stringify(arg, null, 2));
};
