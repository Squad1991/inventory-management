import React from 'react';
import Image from '~src/components/common/image/Image';
import { AppUrls } from '~src/components/common/utils/constants';
type MoviePosterProps = React.ComponentProps<typeof Image>;

/**
 * Render img with image hosted base url. This should only be used where the image is hosted on movie db.
 */

const MoviePoster: React.FC<MoviePosterProps> = ({ src, ...rest }) => {
  return <Image src={`${AppUrls.IMAGE}/${src}`} {...rest} />;
};

export default React.memo(MoviePoster);
