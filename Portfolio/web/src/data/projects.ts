import logoHanwha from '../assets/logos/hanwha.png'
import logoToinanum from '../assets/logos/toinanum.png'
import logoGsCaltex from '../assets/logos/gs-caltex.png'
import logoKtng from '../assets/logos/ktng.png'
import logoSkBroadband from '../assets/logos/sk-broadband.png'

import imgHanwha from '../assets/projects/hanwha-crm.jpg'
import imgToinanum from '../assets/projects/toinanum.jpg'
import imgGsDashboard from '../assets/projects/gs-dashboard.jpg'
import imgKtgSales from '../assets/projects/ktg-sales.jpg'
import imgGsFuel from '../assets/projects/gs-fuel.jpg'
import imgSkSafety from '../assets/projects/sk-safety.jpg'

import imgHanwhaDetail from '../assets/projects/hanwha-crm-detail.png'
import imgGsDashboardDetail from '../assets/projects/gs-dashboard-detail.jpg'
import imgKtgSalesDetail from '../assets/projects/ktg-sales-detail.jpg'
import imgGsFuelDetail from '../assets/projects/gs-fuel-detail.jpg'
import imgSkSafetyDetail from '../assets/projects/sk-safety-detail.jpg'

export type Project = {
  id: string
  /** 아카이브 번호 (전시 넘버링 모티프) */
  accession: string
  nameKr: string
  nameEn: string
  client: string
  period: string
  role: string
  tech: string
  /** 리스트 카드용 짧은 요약 */
  desc: string
  /** 문제 + 원인 (Provenance) */
  problem: string
  /** 해결 + 구현 (Scholarly Note) */
  solution: string
  result: string
  learning: string
  width: string
  minWidth: string
  maxWidth: string
  aspect: string
  offset: 'up' | 'down'
  logo: string
  /** 로고 브랜드 컬러를 반영한 썸네일 배경 그라데이션 */
  tint: string
  /** 대표 이미지 슬라이드 (최소 1장) */
  images: string[]
}

export const projects: Project[] = [
  {
    id: 'hanwha-crm',
    accession: 'ARC.001',
    nameKr: '한화 파워시스템 CRM',
    nameEn: 'Hanwha Power CRM',
    client: '한화 파워시스템',
    period: '2024.05 — 2024.08',
    role: '프론트엔드 UI 구현',
    tech: 'OutSystems',
    desc: '해외 영업 안건 생애주기 관리 CRM. 수주목표 vs 실적 차트, 복합 피벗 테이블.',
    problem: '해외 영업 안건 현황과 실적을 흩어진 엑셀로만 관리하고 있었습니다.',
    solution: '안건 생애주기를 다중 탭 CRM으로 통합하고, 목표 대비 실적 차트와 피벗 테이블을 구현했습니다.',
    result: '영업팀이 하나의 화면에서 현황·일정·실적을 한눈에 확인하게 되었습니다.',
    learning: '숫자와 추세를 함께 보여줘야 데이터가 설득력을 갖는다는 것을 배웠습니다.',
    width: '35vw', minWidth: '400px', maxWidth: '600px',
    aspect: '4/5',
    offset: 'up',
    logo: logoHanwha,
    tint: 'linear-gradient(135deg, #fff4e9 0%, #ffdfc2 100%)',
    images: [imgHanwha, imgHanwhaDetail],
  },
  {
    id: 'toinanum',
    accession: 'ARC.002',
    nameKr: '통일과나눔 재단 홈페이지',
    nameEn: 'Toi & Nanum Foundation',
    client: '통일과나눔 재단',
    period: '2024.09 — 2024.12',
    role: 'UI 설계 및 프론트엔드 개발 전담',
    tech: 'OutSystems',
    desc: '153,800명 후원자 재단 공식 홈페이지. Hero 슬라이더, 세계지도, 통계 시각화.',
    problem: '재단의 사업 규모와 후원자 스토리를 전달할 공식 홈페이지가 없었습니다.',
    solution: 'Hero 슬라이더와 카운트업 통계, 세계지도로 재단의 임팩트를 시각화했습니다.',
    result: '후원자 15만 명 규모를 첫 화면에서 직관적으로 전달하는 홈페이지가 완성되었습니다.',
    learning: '퍼블릭 웹은 데이터의 정확성보다 브랜드 스토리텔링이 핵심이라는 것을 배웠습니다.',
    width: '30vw', minWidth: '350px', maxWidth: '500px',
    aspect: '3/4',
    offset: 'down',
    logo: logoToinanum,
    tint: 'linear-gradient(135deg, #eef1fb 0%, #dfe3f5 100%)',
    images: [imgToinanum],
  },
  {
    id: 'gs-dashboard',
    accession: 'ARC.003',
    nameKr: 'GS칼텍스 여수공장 통합 대시보드',
    nameEn: 'GS Caltex Heater Dashboard',
    client: 'GS칼텍스',
    period: '2025.04 — 2025.06',
    role: 'UI 설계 및 프론트엔드 개발 전담',
    tech: 'OutSystems',
    desc: '정유공장 설비 실시간 모니터링. 다크 테마, CDU 카드 그리드, 멀티탭 구조.',
    problem: '수십 개 공정 유닛의 데이터가 흩어져 있어 이상 징후를 바로 파악할 수 없었습니다.',
    solution: '트리 내비게이션과 멀티탭, 컬러 코딩 카드 그리드로 다크 테마 대시보드를 설계했습니다.',
    result: '운영자가 단일 화면에서 이상 징후를 즉시 파악할 수 있게 되었습니다.',
    learning: '데이터가 조밀할수록 정보의 우선순위 설계가 중요하다는 것을 확인했습니다.',
    width: '35vw', minWidth: '400px', maxWidth: '600px',
    aspect: '16/9',
    offset: 'up',
    logo: logoGsCaltex,
    tint: 'linear-gradient(135deg, #eaf6f2 0%, #dcedf7 100%)',
    images: [imgGsDashboard, imgGsDashboardDetail],
  },
  {
    id: 'ktg-sales',
    accession: 'ARC.004',
    nameKr: 'KT&G 영업 관리 시스템',
    nameEn: 'KT&G Sales Route Manager',
    client: 'KT&G',
    period: '2025.03 — 2025.05',
    role: '프론트엔드 UI 구현',
    tech: 'OutSystems',
    desc: '영업사원 일일 판매점 방문 경로 관리 모바일 앱. 드래그 경로 재정렬 UX.',
    problem: '영업사원이 하루 수십 곳을 방문하는 동선을 실시간으로 관리하지 못했습니다.',
    solution: '모바일에서 경로 계획부터 완료까지 처리하는 원스톱 UX를 만들었습니다.',
    result: '버튼 하나로 일과를 완결하고, 방문 상태가 실시간으로 보이게 되었습니다.',
    learning: '모바일은 정보량보다 액션 진입점의 명확성이 중요하다는 것을 배웠습니다.',
    width: '28vw', minWidth: '320px', maxWidth: '450px',
    aspect: '4/5',
    offset: 'down',
    logo: logoKtng,
    tint: 'linear-gradient(135deg, #f6f4f1 0%, #e8e2da 100%)',
    images: [imgKtgSales, imgKtgSalesDetail],
  },
  {
    id: 'gs-fuel',
    accession: 'ARC.005',
    nameKr: 'GS칼텍스 유가 관리 시스템',
    nameEn: 'GS Caltex Dynamic Pricing',
    client: 'GS칼텍스',
    period: '2025.10 — 2026.01',
    role: '프론트엔드 UI 구현',
    tech: 'Vue',
    desc: '전국 주유소 Mogas·Diesel 가격 실시간 모니터링. 시계열 차트, 프라이싱 시뮬레이션.',
    problem: '수백 개 주유소 가격을 수동 관리해 시장 변동에 빠르게 대응하지 못했습니다.',
    solution: 'Vue로 전국 가격을 실시간 시각화하고 프라이싱 시뮬레이션을 붙였습니다.',
    result: '담당자가 단일 화면에서 가격 추이와 경쟁사 비교를 즉시 확인하게 되었습니다.',
    learning: '동일한 구조의 데이터는 처음부터 재사용 가능하게 설계해야 한다는 것을 배웠습니다.',
    width: '32vw', minWidth: '380px', maxWidth: '550px',
    aspect: '16/10',
    offset: 'up',
    logo: logoGsCaltex,
    tint: 'linear-gradient(135deg, #eaf6f2 0%, #dcedf7 100%)',
    images: [imgGsFuel, imgGsFuelDetail],
  },
  {
    id: 'sk-safety',
    accession: 'ARC.006',
    nameKr: 'SK브로드밴드 안전 관리 시스템',
    nameEn: 'SK Broadband Safe-B',
    client: 'SK브로드밴드',
    period: '2026.02 — 진행 중',
    role: 'UI 설계 및 프론트엔드 개발 전담',
    tech: 'OutSystems',
    desc: '건설·통신 현장 통합 안전 관제. AI CCTV·IoT 센서·지도 API 연동 대시보드.',
    problem: '현장의 안전 데이터가 시스템별로 흩어져 있어 통합 관제가 불가능했습니다.',
    solution: 'AI CCTV·IoT·지도 API를 하나의 대시보드로 묶고, 작업허가 전 과정을 UI로 구현했습니다.',
    result: '근로자는 모바일로 신청하고 관리자는 실시간 대시보드로 관제하는 구조가 만들어졌습니다.',
    learning: '여러 외부 시스템을 통합할 땐 프론트엔드의 데이터 정규화가 핵심임을 배우고 있습니다.',
    width: '30vw', minWidth: '350px', maxWidth: '500px',
    aspect: '1/1',
    offset: 'down',
    logo: logoSkBroadband,
    tint: 'linear-gradient(135deg, #fff1ee 0%, #ffe0d6 100%)',
    images: [imgSkSafety, imgSkSafetyDetail],
  },
]

export function getProjectById(id: string | undefined): Project | undefined {
  return projects.find((p) => p.id === id)
}
