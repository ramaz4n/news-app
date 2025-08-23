import { JSX, PropsWithChildren } from 'react';

import { ActivityIndicator } from 'react-native';

import { Row, RowProps } from '../../../containers/row/row';
import { APP_COLORS } from '../../constants/app-colors';

interface LoadWrapperProps extends PropsWithChildren {
  isLoading: boolean;
  renderLoader?: JSX.Element;
  rowProps?: RowProps;
}

export const LoadWrapper = ({
  children,
  renderLoader,
  rowProps,
  isLoading,
}: LoadWrapperProps): JSX.Element => {
  if (isLoading)
    return (
      renderLoader || (
        <Row jc='center' {...rowProps}>
          <ActivityIndicator color={APP_COLORS.white} />
        </Row>
      )
    );

  return children as JSX.Element;
};
