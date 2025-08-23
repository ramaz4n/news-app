import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { Filters } from '../filters/filters.tsx';
import { useNews } from '../../shared/hooks/use-news.ts';

const Wrapper = styled.View`
  width: 100%;
  background-color: ${APP_COLORS.green};
  justify-content: center;
  align-items: center;
`;

export const News = () => {
  const { isLoading, isError, data, error } = useNews();

  console.log(data);

  return (
    <Wrapper>
      <Filters />
    </Wrapper>
  );
};
