import { renderHook, waitFor } from '@testing-library/react';
import useIsMounted from '../src/hooks/useIsMounted';

describe('useIsMounted hook', () => {

  it('should return true when mounted', async () => {
    const { result } = renderHook(() => useIsMounted());
    await waitFor(() => {
      expect(result.current.current).toBe(true);
    })
  });

  it('should return false after unmount', async () => {
    const { result, unmount } = renderHook(() => useIsMounted());
    await waitFor(() => {
      expect(result.current.current).toBe(true);
    })
    unmount()
    await waitFor(() => {
      expect(result.current.current).toBe(false);
    })
  });
});
