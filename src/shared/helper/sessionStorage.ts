import { Developer } from 'shared/constants';
import { SelectionInfo } from './message';

type SelectionKey = 'developer' | 'themes' | 'themeContents';

export const saveInStorage = (
  key: SelectionKey,
  content: Developer | string[]
) => {
  sessionStorage.setItem(key, JSON.stringify(content));
};

export const loadFromStorage = (
  key: SelectionKey
): string | string[] | null => {
  const storageValue = sessionStorage.getItem(key);

  if (storageValue == null) {
    return null;
  }

  if (key === 'developer') {
    return JSON.parse(storageValue) as string;
  }

  return JSON.parse(storageValue) as string[];
};

export const loadSelection = (): SelectionInfo => {
  const loadedDeveloper = loadFromStorage('developer');
  const developer: Developer = isDeveloper(loadedDeveloper)
    ? loadedDeveloper
    : 'frontend';

  const loadedThemes = loadFromStorage('themes');
  const themes = Array.isArray(loadedThemes) ? loadedThemes : [];

  const loadedThemeContents = loadFromStorage('themeContents');
  const themeContents = Array.isArray(loadedThemeContents)
    ? loadedThemeContents
    : [];

  return {
    developer,
    themes,
    themeContents,
  };
};

const isDeveloper = (
  developer: string | string[] | null
): developer is Developer =>
  developer === 'frontend' || developer === 'backend' || developer === 'ios';
