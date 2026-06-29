export type Project = {
  id: string
  name: string
  nameEn: string
  client: string
  period: string
  year: string
  tech: string[]
  tags: string[]
  description: string
  /** CSS gradient for thumbnail placeholder */
  gradient: string
  /** grid column span (out of 12) */
  colSpan: number
  /** portfolio priority */
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'sk-safety',
    name: 'SK브로드밴드 안전 관리 시스템',
    nameEn: 'Safe-B',
    client: 'SK브로드밴드',
    period: '2026.02 — 진행 중',
    year: '2026',
    tech: ['OutSystems'],
    tags: ['대시보드', 'AI CCTV', 'IoT', '안전관리'],
    description: '건설·통신 현장 안전사고 제로를 위한 통합 관제 시스템. AI CCTV, IoT 센서, 지도 API를 단일 대시보드로 통합.',
    gradient: 'linear-gradient(135deg, #1a1040 0%, #3a1a6e 50%, #6b21a8 100%)',
    colSpan: 7,
    featured: true,
  },
  {
    id: 'gs-dashboard',
    name: 'GS칼텍스 여수공장 통합 대시보드',
    nameEn: 'Heater Dashboard',
    client: 'GS칼텍스',
    period: '2025.04 — 2025.06',
    year: '2025',
    tech: ['OutSystems'],
    tags: ['대시보드', '실시간 모니터링', '다크 테마', '공정관리'],
    description: '정유공장 Heater·FlareStack 설비의 Economic·Fuel·GHG 지표를 실시간 시각화하는 산업용 모니터링 시스템.',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0f3460 50%, #16538a 100%)',
    colSpan: 5,
    featured: true,
  },
  {
    id: 'toinanum',
    name: '통일과나눔 재단 홈페이지',
    nameEn: 'Toi & Nanum Foundation',
    client: '통일과나눔 재단',
    period: '2024.09 — 2024.12',
    year: '2024',
    tech: ['OutSystems'],
    tags: ['홈페이지', '슬라이더', '세계지도', '공익'],
    description: '153,800명 후원자를 보유한 민간 통일운동 재단의 공식 홈페이지. Hero 슬라이더, 세계지도, 통계 시각화.',
    gradient: 'linear-gradient(135deg, #e8f4f8 0%, #b8d9eb 50%, #7ab8d4 100%)',
    colSpan: 4,
    featured: true,
  },
  {
    id: 'gs-fuel',
    name: 'GS칼텍스 유가 관리 시스템',
    nameEn: 'Dynamic Pricing System',
    client: 'GS칼텍스',
    period: '2025.10 — 2026.01',
    year: '2025',
    tech: ['Vue'],
    tags: ['대시보드', 'Vue', '가격 시각화', '차트'],
    description: '전국 주유소 Mogas·Diesel 가격을 실시간 모니터링하고 동적 프라이싱 전략을 지원하는 데이터 분석 시스템.',
    gradient: 'linear-gradient(135deg, #1c2a4a 0%, #2d4a7a 50%, #1e6091 100%)',
    colSpan: 5,
    featured: false,
  },
  {
    id: 'ktg-sales',
    name: 'KT&G 영업 관리 시스템',
    nameEn: 'Sales Route Manager',
    client: 'KT&G',
    period: '2025.03 — 2025.05',
    year: '2025',
    tech: ['OutSystems'],
    tags: ['모바일', '영업관리', '경로최적화', '일정관리'],
    description: '영업사원의 일일 판매점 방문 경로를 계획·실행·완료하는 모바일 전용 앱. 드래그 경로 재정렬 UX 구현.',
    gradient: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 50%, #52b788 100%)',
    colSpan: 3,
    featured: false,
  },
  {
    id: 'hanwha-crm',
    name: '한화 파워시스템 CRM',
    nameEn: 'Power CRM',
    client: '한화 파워시스템',
    period: '2024.05 — 2024.08',
    year: '2024',
    tech: ['OutSystems'],
    tags: ['CRM', '안건관리', '차트', '엔터프라이즈'],
    description: '해외 영업 안건 생애주기를 관리하는 엔터프라이즈 CRM. 수주목표 vs 실적 차트, 복합 피벗 테이블 구현.',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #4a4a6a 100%)',
    colSpan: 4,
    featured: false,
  },
]
