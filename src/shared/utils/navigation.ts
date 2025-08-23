import { createRef } from 'react';

import { type NavigationContainerRef } from '@react-navigation/core';
import { type ParamListBase } from '@react-navigation/native';

import { Screens } from '../types/screens';

export type NavigationParams = Record<PropertyKey, unknown>;
type RouteName = Screens | string;

class NavigationClass {
  navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

  navigate = (routeName: RouteName, params?: unknown) => {
    setTimeout(
      () => this.navigationRef.current?.navigate(routeName, params as NavigationParams),
      0
    );
  };

  replace = (routeName: string, params?: unknown) => {
    setTimeout(
      () =>
        this.navigationRef.current?.reset({
          index: 0,
          routes: [{ name: routeName, params: params as NavigationParams }],
        }),
      0
    );
  };

  pop = () => {
    this.navigationRef.current?.goBack();
  };
}

export const Navigation = new NavigationClass();
export const handleGoBack = Navigation.pop;
