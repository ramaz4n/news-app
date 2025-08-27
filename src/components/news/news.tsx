import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { Filters } from '../filters/filters.tsx';
import { useNews } from '../../shared/hooks/use-news.ts';
import { AppLoader } from '../app-loader/app-loader.tsx';
import { Header } from '../header/header.tsx';
import { WINDOW } from '../../shared/constants/global.ts';
import { $newsList } from '../../shared/models/news-model.ts';
import { useUnit } from 'effector-react';
import { NewsItem } from '../news-item/news-item.tsx';
import { FlatList } from 'react-native';
import { $newsFilter, setNewsFilter } from '../../shared/models/news-filter-model.ts';

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  height: ${WINDOW.height};
  background-color: ${APP_COLORS.black};
  align-items: center;
  gap: 15px;
`;

const Text = styled.Text`
  font-size: 30px;
  color: ${APP_COLORS.red};
`;

export const News = () => {
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
      setNewsFilter({ ...newsFilters, page: newsFilters.page + 1 });
    }
  };

  return (
    <Wrapper>
      <Header />
      <Filters />

      <FlatList
        data={newsList}
        style={{ backgroundColor: APP_COLORS.black, gap: 10 }}
        keyExtractor={(item) => item.url}
        renderItem={({ item, index }) => (
          <NewsItem
            urlToImage={item.urlToImage}
            key={index}
            title={item.title}
            publishedAt={item.publishedAt.split('T')[0]}
            sourceName={item.source.name}
          />
        )}
        onEndReached={() => getMoreNews()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoading ? <AppLoader isImage={true} /> : null}
      />
    </Wrapper>
  );
};
