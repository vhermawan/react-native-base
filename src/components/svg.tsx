import React, { memo } from 'react';
import { SPLASH_1 } from '@images';
import { s, vs } from 'react-native-size-matters';

type TSvgProps = {
  images: string;
  size?: number;
  fill?: string | null;
  opacity?: number;
};

const Svg = (props: TSvgProps) => {
  const { images, size = 100, fill = null, opacity = 1 } = props;

  const svgs = {
    splash_1: SPLASH_1,
  };

  const SvgImage = svgs[images];
  return <SvgImage width={s(size)} height={vs(size)} fill={fill} fillOpacity={opacity} />;
};

export default memo(Svg);
