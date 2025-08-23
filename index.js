/**
 * @format
 */

import App from './App';

import { PortalProvider } from '@gorhom/portal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRegistry, LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { name as appName } from './app.json';

import { APP_COLORS } from './src/shared/constants/app-colors';

LogBox.ignoreAllLogs();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const StyledGestureHandlerRootView = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${APP_COLORS.black};
`;

const testApp = () => {
  return (
    <StyledGestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <PortalProvider>
            <App />
          </PortalProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </StyledGestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => testApp);
