import React from 'react';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import WorkInProgress from '~src/components/common/work-in-progress/WorkInProgress';

export const TrendingMovies: React.FC = () => {
  return (
    <EmptyCard
      testId="no-trending-movies"
      message={<WorkInProgress width={'100%'} height={'400'} />}
    />
  );
};

export default TrendingMovies;
