import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';

const Wrapper = styled.View`
  width: 90%;
  background-color: ${APP_COLORS.white};
  justify-content: center;
  align-items: center;
`;

export const NewsItem = () => {
  return <Wrapper></Wrapper>;
};
