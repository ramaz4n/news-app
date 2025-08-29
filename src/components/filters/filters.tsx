import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { CategoryFilterType, FILTERS } from '../../shared/constants/filters.ts';
import { WINDOW } from '../../shared/constants/global.ts';
import { setQueryType } from '../../shared/models/news-model.ts';
import { changeNewsFilter } from '../../shared/models/news-filter-model.ts';

const Wrapper = styled.View`
  width: ${WINDOW.width};
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
  border-radius: 15px;
  padding: 5px 10px;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${APP_COLORS.white};
`;

export const Filters = () => {
  const onFilterClick = (filter: CategoryFilterType) => {
    setQueryType(filter.queryType);
    changeNewsFilter({ country: 'ru', category: filter.name, page: 1 });
  };

  return (
    <Wrapper>
      {FILTERS.map((filter) => (
        <StyledTouchableOpacity key={filter.name} onPress={() => onFilterClick(filter)}>
          <StyledText>{filter.name}</StyledText>
        </StyledTouchableOpacity>
      ))}
    </Wrapper>
  );
};
