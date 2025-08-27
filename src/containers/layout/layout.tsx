import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { PropsWithChildren } from 'react';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${APP_COLORS.light_grey};
`;

export const Layout = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
