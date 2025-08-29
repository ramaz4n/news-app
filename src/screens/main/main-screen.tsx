import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';

import { useNews } from '../../shared/hooks/use-news.ts';

import { WINDOW } from '../../shared/constants/global.ts';
import { $newsList } from '../../shared/models/news-model.ts';
import { useUnit } from 'effector-react';

import { FlatList } from 'react-native';
import { $newsFilter, changeNewsFilter } from '../../shared/models/news-filter-model.ts';
import { Header } from '../../components/header/header.tsx';
import { Filters } from '../../components/filters/filters.tsx';
import { NewsItem } from '../../components/news-item/news-item.tsx';
import { AppLoader } from '../../components/app-loader/app-loader.tsx';
import { Search } from '../../components/search/search.tsx';

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  height: ${WINDOW.height};
  background-color: ${APP_COLORS.black};
  align-items: center;
  gap: 15px;
`;

export const MainScreen = () => {
  const { isLoading, data, isError, error } = useNews();

  const [newsList, newsFilters] = useUnit([$newsList, $newsFilter]);

  // console.log('data: ', data);
  // console.log('isLoading: ', isLoading);
  //
  // console.log('isError: ', isError);
  // console.log('error: ', error);

  // console.log('newsList: ', newsList);

  const getMoreNews = () => {
    if (newsFilters.page) {
      changeNewsFilter({ ...newsFilters, page: newsFilters.page + 1 });
    }
  };

  return (
    <Wrapper>
      <Header />
      <Search />
      <Filters />
      <FlatList
        data={newsList}
        style={{ backgroundColor: APP_COLORS.black, gap: 10, padding: 0 }}
        keyExtractor={(item) => item.url}
        renderItem={({ item, index }) => <NewsItem item={item} key={index} />}
        onEndReached={() => getMoreNews()}
        onEndReachedThreshold={0.3}
        ListFooterComponent={isLoading ? <AppLoader isImage={true} /> : null}
      />
    </Wrapper>
  );
};
