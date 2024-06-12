import Loader from '~src/routes/home/Loader';

describe('Home page data Loader', () => {
  it('renders the loader component', () => {
    const homeData = Loader();
    expect(homeData).toBeDefined();
  });
});
