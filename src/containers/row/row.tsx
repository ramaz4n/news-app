import { PropsWithChildren } from 'react';

import { ViewProps, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export interface RowProps extends PropsWithChildren, ViewProps {
  ai?: ViewStyle['alignItems'];
  direction?: ViewStyle['flexDirection'];
  fw?: ViewStyle['flexWrap'];
  jc?: ViewStyle['justifyContent'];
}

const RowView = styled.View<RowProps>`
  flex-direction: ${({ direction }) => direction ?? 'row'};
  justify-content: ${({ jc }) => jc ?? 'flex-start'};
  align-items: ${({ ai }) => ai ?? 'center'};
  ${({ fw }) => fw && `flex-wrap: ${fw};`}
`;

export const Row = ({
  children,
  jc = 'flex-start',
  ai = 'center',
  direction = 'row',
  fw,
  style,
  ...props
}: RowProps) => (
  <RowView direction={direction} jc={jc} ai={ai} {...props}>
    {children}
  </RowView>
);
