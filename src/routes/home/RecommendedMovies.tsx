import React from 'react';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import WorkInProgress from '~src/components/common/work-in-progress/WorkInProgress';

export const RecommendedMovies: React.FC = () => {
  return (
    <EmptyCard
      testId="no-recommended-movies"
      message={<WorkInProgress width={'100%'} height={'400'} />}
    />
  );
};

export default RecommendedMovies;
