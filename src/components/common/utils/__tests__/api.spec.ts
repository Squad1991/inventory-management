import { vi } from 'vitest';
import { fetchData } from '~src/components/common/utils/api';

describe('api', () => {
  it('should fetch data from the specified URL', async () => {
    vi.spyOn(window, 'fetch').mockReturnValue(
      Promise.resolve(new Response('{"data": "some data"}')),
    );
    const url = 'https://example.com/api/data';
    const data = await fetchData<{ data: string }>({ url });
    expect(data.data).toBe('some data');
  });
});
