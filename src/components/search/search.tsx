import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { WINDOW } from '../../shared/constants/global.ts';
import { useState } from 'react';
import { Icon } from '../../shared/ui/icon/icon.tsx';
import { changeNewsFilter } from '../../shared/models/news-filter-model.ts';
import { debounce } from '../../shared/utils/debounce.ts';
import { defaultSearchFilters } from '../../shared/constants/default-search-filters.ts';
import { setQueryType } from '../../shared/models/news-model.ts';
import { Keyboard } from 'react-native';

const Wrapper = styled.View`
  border-radius: 20px;
  width: ${WINDOW.width};
  background-color: ${APP_COLORS.white};
  flex-direction: row;
  align-items: start;
  padding: 5px 10px;
`;

const StyledTextInput = styled.TextInput`
  width: 80%;
  font-size: 22px;
  font-weight: bold;
  color: ${APP_COLORS.black};
  background-color: ${APP_COLORS.white};
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${APP_COLORS.grey};
  flex-direction: row;
  gap: 5px;
  border-radius: 15px;
  padding: 5px 10px;
`;

const StyledText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${APP_COLORS.white};
`;

export const Search = () => {
  const [inputData, setInputData] = useState<string>('');

  const handleSearch = (text: string) => {
    setInputData(() => text);

    if (text === '') debounce(() => changeNewsFilter(defaultSearchFilters))();
  };

  const onFocus = () => {
    setQueryType('everything');
    Keyboard.isVisible();
  };

  const onSearchClick = () => {
    changeNewsFilter({ ...defaultSearchFilters, q: inputData, page: 1 });
  };

  return (
    <Wrapper>
      <StyledTextInput
        placeholder='Поиск...'
        value={inputData}
        onChangeText={handleSearch}
        onFocus={() => onFocus()}
        onBlur={() => Keyboard.dismiss()}
        autoCapitalize='none'
        autoCorrect={false}
      />

      <StyledTouchableOpacity
        style={{ backgroundColor: inputData ? APP_COLORS.blue : APP_COLORS.grey }}
        disabled={!inputData}
        onPress={() => onSearchClick()}
      >
        <StyledText>Поиск</StyledText>
        <Icon name={'search'} size={15} />
      </StyledTouchableOpacity>
    </Wrapper>
  );
};
