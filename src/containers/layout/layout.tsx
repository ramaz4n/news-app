import styled from 'styled-components/native';
import { Header } from '../../components/header/header.tsx';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { News } from '../../components/news/news.tsx';
import { PropsWithChildren } from 'react';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${APP_COLORS.light_grey};
`;

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};
