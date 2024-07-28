export type Developer = "backend" | "frontend" | "ios";

export const BACKGROUND = "background: linear-gradient(0deg, #9e9e9e,#e7e7e7);";

export interface Message {
  role: string;
  content: string;
}

export const SELECT_ALL = "전체 선택";

export const THEMES = {
  backend: [],
  frontend: ["HTML / CSS", "자바스크립트", "타입스크립트", "리액트"],
  ios: [],
};

export const THEME_CONTENTS: { [key: string]: string[] } = {
  "HTML / CSS": [
    "시맨틱 태그",
    "Flexbox / Grid 레이아웃",
    "미디어 쿼리, 반응형 디자인",
    "CSS 전처리기",
    "CSS 애니메이션, 트랜지션",
    "웹 접근성",
  ],
  자바스크립트: [
    "스코프",
    "프로토타입",
    "this 바인딩",
    "클로저",
    "Array.Prototype 메서드",
    "Number.Prototype 메서드",
    "String.Prototype 메서드",
    "브라우저의 렌더링 과정",
    "이벤트 전파 / 위임",
    "이벤트 루프, 태스크 큐",
    "비동기 처리",
    "Promise, async/await",
  ],
  타입스크립트: [
    "인터페이스와 타입 앨리어스",
    "제네릭",
    "유니언 및 인터섹션 타입",
    "타입 가드",
    "열거형",
    "타입 유추",
    "디코레이터",
    "유틸리티 타입",
  ],
  리액트: [
    "리액트 렌더와 커밋",
    "리액트 Hooks",
    "컴포넌트 상태 관리",
    "컨텍스트 API",
    "React Router",
    "고차 컴포넌트",
    "리액트 성능 최적화",
    "테스팅",
  ],
};
