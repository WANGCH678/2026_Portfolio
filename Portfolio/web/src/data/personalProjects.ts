export type PersonalProject = {
  id: string
  /** 개인 아카이브 번호 (회사 프로젝트의 ARC.00X와 구분되는 IND 프리픽스) */
  accession: string
  nameKr: string
  nameEn: string
  period: string
  /** 실습/학습 출처 (책, 강의 등) */
  source: string
  sourceUrl?: string
  liveUrl: string
  githubUrl?: string
  tech: string
  /** 리스트 카드용 짧은 요약 */
  desc: string
  /** 이 프로젝트에서 비교/실험한 구현 방식 (챕터 — 구현 방식 목록) */
  chapters: { no: string; label: string; variants: string[] }[]
  width: string
  minWidth: string
  maxWidth: string
  offset: 'up' | 'down'
}

export const personalProjects: PersonalProject[] = [
  {
    id: 'core-frontend-ui',
    accession: 'IND.001',
    nameKr: '코어 프론트엔드 UI 실습',
    nameEn: 'Core Frontend UI Practice',
    period: '2026.08 — 진행 중',
    source: '『코어 프런트엔드 UI』 실습',
    sourceUrl: 'https://product.kyobobook.co.kr/detail/S000219349738',
    liveUrl: 'https://core-front-end-ui.vercel.app/',
    githubUrl: 'https://github.com/WANGCH678/CoreFrontEndUI',
    tech: 'React 19 · TypeScript · TanStack Router · SCSS Modules',
    desc: '실무에서 매일 쓰는 UI 패턴 16종을, 서로 다른 구현 방식으로 비교하며 만든 컴포넌트 카탈로그.',
    chapters: [
      { no: '01', label: '아코디언', variants: ['단일/다중 오픈', '높이 애니메이션'] },
      { no: '02', label: '탭 메뉴', variants: ['기본형', '인디케이터 애니메이션'] },
      { no: '03', label: '툴팁', variants: ['포지셔닝 계산', '뷰포트 충돌 보정'] },
      { no: '04', label: '반응형 텍스트 박스', variants: ['입력 동기화 렌더링'] },
      { no: '05', label: '여러줄 말줄임', variants: ['CSS 전용', 'JS 라인 측정'] },
      { no: '06', label: '폼', variants: ['Uncontrolled', 'Controlled', '커스텀 useForm 훅'] },
      { no: '07', label: '지연 로딩', variants: ['직접 계산', 'IntersectionObserver', 'Vanilla JS'] },
      { no: '08', label: '페이지네이션', variants: ['전통형 내비게이션', '무한 스크롤 (React)', '무한 스크롤 (Vanilla)'] },
      { no: '09', label: '캐러셀', variants: ['기본형', '무한 루프', '3D 캐러셀'] },
      { no: '10', label: '스크롤 스파이', variants: ['scroll 이벤트', 'IntersectionObserver'] },
      { no: '11', label: '스낵바', variants: ['Vanilla', 'Context', 'Portal + Hook'] },
      { no: '12', label: '모달', variants: ['Context', 'createPortal', 'HTML <dialog>'] },
      { no: '13', label: '팝오버', variants: ['createPortal', 'HTML Dialog', 'HTML Popover API'] },
      { no: '14', label: '드롭다운', variants: ['커스텀 훅 기반 상태 관리'] },
      { no: '15', label: '자동완성', variants: ['비동기 검색 + 디바운스'] },
      { no: '16', label: '갤러리', variants: ['캐러셀형', '라이트박스형'] },
    ],
    width: '34vw', minWidth: '420px', maxWidth: '600px',
    offset: 'up',
  },
]

export function getPersonalProjectById(id: string | undefined): PersonalProject | undefined {
  return personalProjects.find((p) => p.id === id)
}
