import { useState, useEffect } from 'react';

interface MediaQuery {
  matches: boolean;
  media: string;
}

function useMediaQuery(query: string): MediaQuery {
  const [matches, setMatches] = useState(false);
  const [mediaQuery, setMediaQuery] = useState<MediaQuery>({
    matches: false,
    media: query,
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    function handleMatchChange(event: MediaQueryListEvent) {
      setMatches(event.matches);
      setMediaQuery({ matches: event.matches, media: event.media });
    }

    mediaQueryList.addListener(handleMatchChange);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeListener(handleMatchChange);
    };
  }, [query]);

  return mediaQuery;
}

export default useMediaQuery;
