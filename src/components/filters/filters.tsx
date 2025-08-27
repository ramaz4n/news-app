import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { FILTERS } from '../../shared/constants/filters.ts';

const Wrapper = styled.View`
  margin-top: 10px;
  height: 40px;
  width: 100%;
  background-color: ${APP_COLORS.black};
  justify-content: center;
  gap: 20px;
  flex-direction: row;
  align-items: center;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${APP_COLORS.blue};
  border-radius: 10px;
  padding: 5px 10px;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${APP_COLORS.white};
`;

export const Filters = () => {
  return (
    <Wrapper>
      {FILTERS.map((filter) => (
        <StyledTouchableOpacity key={filter.name}>
          <StyledText>{filter.name}</StyledText>
        </StyledTouchableOpacity>
      ))}
    </Wrapper>
  );
};
