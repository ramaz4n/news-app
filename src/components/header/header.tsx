import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';

const Wrapper = styled.View`
  height: 40px;
  width: 100%;
  background-color: ${APP_COLORS.blue};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${APP_COLORS.black};
`;

export const Header = () => {
  return (
    <Wrapper>
      <Title>Новости</Title>
    </Wrapper>
  );
};
