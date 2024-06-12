import React from 'react';
import Image from '~src/components/common/image/Image';
import { AppUrls } from '~src/components/common/utils/constants';
type MoviePosterProps = React.ComponentProps<typeof Image>;

const MoviePoster: React.FC<MoviePosterProps> = ({ src, ...rest }) => {
  return <Image src={`${AppUrls.IMAGE}/${src}`} {...rest} />;
};

export default React.memo(MoviePoster);
