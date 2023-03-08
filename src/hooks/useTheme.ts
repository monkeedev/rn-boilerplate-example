import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { colors } from '../theme/colors';

export const useTheme = () => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(colors[scheme ?? 'light']);

  useEffect(() => {
    setTheme(colors[scheme ?? 'light']);
  }, [scheme]);

  return { theme, scheme };
};
