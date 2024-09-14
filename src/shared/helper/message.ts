import { Developer } from 'shared/constants';

export interface SelectionInfo extends ThemeInfo {
  developer: Developer;
}

interface ThemeInfo {
  themes: string[];
  themeContents: string[];
}

const parseSystemInitMessage = ({ developer, themes }: SelectionInfo) => {
  const developerMap = {
    frontend: '프론트엔드',
    backend: '백엔드',
    ios: 'IOS',
  };

  return {
    role: 'system',
    content: `당신은 ${
      developerMap[developer]
    } 개발에 관한 기술 면접을 진행하는 면접관입니다. 다음 지침을 따라 주세요:

    ${themes.join(' ')}와 관련된 랜덤한 질문을 해주세요.
    1. 제가 답변을 하면, 그 답변을 평가하여 100점 만점으로 점수를 매겨주세요.
    2. 매긴 점수의 이유를 설명해주세요.
    3. 100점짜리 답변 예시를 제공해주세요.
    4. 추가 학습을 위한 관련 검색 키워드를 제안해주세요.
    5. 제 이전 답변과 관련된 꼬리질문을 해주세요.
    6. 각 답변에 대해 이 과정을 반복해 주세요.
    7. 추가적으로 답변을 할 때에 마크다운 형식과 코드 예시는 금지합니다.`,
  };
};

const parseThemeInitMessage = (themeContents: string[]) => {
  return {
    role: 'system',
    content: `${themeContents.join('\n')} \n위 주제들을 기억하고 있어주세요.`,
  };
};

export const initializeMessages = (selectionInfo: SelectionInfo) => {
  const systemInitMessage = parseSystemInitMessage(selectionInfo);
  const themeInitMessage = parseThemeInitMessage(selectionInfo.themeContents);

  return [systemInitMessage, themeInitMessage];
};
