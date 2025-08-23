import Svg from 'react-native-svg';

import { APP_COLORS } from '../../constants/app-colors';
import { ICONS } from '../../constants/icon-list';
import { IconProps } from '../../types/icon';

export const Icon = ({
  name,
  color = APP_COLORS.white,
  height = 18,
  size,
  width = 18,
}: IconProps) => {
  const { viewBox, data } = ICONS[name];


  return (
    <Svg
      fill={color}
      height={size || height}
      viewBox={viewBox || '0 0 512 512'}
      width={size || width}
    >
      {data}
    </Svg>
  );
};

