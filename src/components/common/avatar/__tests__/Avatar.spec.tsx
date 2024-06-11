import { render } from '@testing-library/react';
import React from 'react';
import Avatar from '~src/components/common/avatar/Avatar';

describe('Avatar component', () => {
  it('renders correctly', () => {
    const tree = render(<Avatar imageUrl="www.dummyurl.com" size={20} />);
    expect(tree).toMatchSnapshot();
  });
});
