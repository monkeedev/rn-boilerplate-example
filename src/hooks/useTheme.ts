import { colors } from '@theme';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(colors[scheme ?? 'light']);

  useEffect(() => {
    setTheme(colors[scheme ?? 'light']);
  }, [scheme]);

  return { theme, scheme };
};
