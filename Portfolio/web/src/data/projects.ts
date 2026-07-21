import logoHanwha from '../assets/logos/hanwha.png'
import logoToinanum from '../assets/logos/toinanum.png'
import logoGsCaltex from '../assets/logos/gs-caltex.png'
import logoKtng from '../assets/logos/ktng.png'
import logoSkBroadband from '../assets/logos/sk-broadband.png'

import imgHanwha1 from '../assets/projects/hanwha-crm-1.jpg'
import imgHanwha2 from '../assets/projects/hanwha-crm-2.jpg'
import imgHanwha3 from '../assets/projects/hanwha-crm-3.jpg'
import imgHanwha4 from '../assets/projects/hanwha-crm-4.jpg'
import imgHanwha5 from '../assets/projects/hanwha-crm-5.jpg'
import imgHanwha6 from '../assets/projects/hanwha-crm-6.jpg'
import imgHanwha7 from '../assets/projects/hanwha-crm-7.jpg'
import imgHanwha8 from '../assets/projects/hanwha-crm-8.jpg'
import imgHanwha9 from '../assets/projects/hanwha-crm-9.jpg'
import imgHanwha10 from '../assets/projects/hanwha-crm-10.jpg'
import imgHanwha11 from '../assets/projects/hanwha-crm-11.jpg'

import imgToinanum1 from '../assets/projects/toinanum-1.jpg'
import imgToinanum2 from '../assets/projects/toinanum-2.jpg'
import imgToinanum3 from '../assets/projects/toinanum-3.jpg'
import imgToinanum4 from '../assets/projects/toinanum-4.jpg'
import imgToinanum5 from '../assets/projects/toinanum-5.jpg'
import imgToinanum6 from '../assets/projects/toinanum-6.jpg'
import imgToinanum7 from '../assets/projects/toinanum-7.jpg'
import imgToinanum8 from '../assets/projects/toinanum-8.jpg'
import imgToinanum9 from '../assets/projects/toinanum-9.jpg'
import imgToinanum10 from '../assets/projects/toinanum-10.jpg'
import imgToinanum11 from '../assets/projects/toinanum-11.jpg'
import imgToinanum12 from '../assets/projects/toinanum-12.jpg'

import imgGsDashboard1 from '../assets/projects/gs-dashboard-1.jpg'
import imgGsDashboard2 from '../assets/projects/gs-dashboard-2.jpg'
import imgGsDashboard3 from '../assets/projects/gs-dashboard-3.jpg'
import imgGsDashboard4 from '../assets/projects/gs-dashboard-4.jpg'

import imgKtgSales1 from '../assets/projects/ktg-sales-1.jpg'
import imgKtgSales2 from '../assets/projects/ktg-sales-2.jpg'
import imgKtgSales3 from '../assets/projects/ktg-sales-3.jpg'
import imgKtgSales4 from '../assets/projects/ktg-sales-4.jpg'
import imgKtgSales5 from '../assets/projects/ktg-sales-5.jpg'
import imgKtgSales6 from '../assets/projects/ktg-sales-6.jpg'
import imgKtgSales7 from '../assets/projects/ktg-sales-7.jpg'

import imgGsFuel1 from '../assets/projects/gs-fuel-1.jpg'
import imgGsFuel2 from '../assets/projects/gs-fuel-2.jpg'
import imgGsFuel3 from '../assets/projects/gs-fuel-3.jpg'
import imgGsFuel4 from '../assets/projects/gs-fuel-4.jpg'
import imgGsFuel5 from '../assets/projects/gs-fuel-5.jpg'
import imgGsFuel6 from '../assets/projects/gs-fuel-6.jpg'
import imgGsFuel7 from '../assets/projects/gs-fuel-7.jpg'
import imgGsFuel8 from '../assets/projects/gs-fuel-8.jpg'
import imgGsFuel9 from '../assets/projects/gs-fuel-9.jpg'
import imgGsFuel10 from '../assets/projects/gs-fuel-10.jpg'

import imgGsPerformance1 from '../assets/projects/gs-performance-1.jpg'
import imgGsPerformance2 from '../assets/projects/gs-performance-2.jpg'
import imgGsPerformance3 from '../assets/projects/gs-performance-3.jpg'
import imgGsPerformance4 from '../assets/projects/gs-performance-4.jpg'
import imgGsPerformance5 from '../assets/projects/gs-performance-5.jpg'
import imgGsPerformance6 from '../assets/projects/gs-performance-6.jpg'

import imgSkSafety1 from '../assets/projects/sk-safety-1.jpg'
import imgSkSafety2 from '../assets/projects/sk-safety-2.jpg'
import imgSkSafety3 from '../assets/projects/sk-safety-3.jpg'
import imgSkSafety4 from '../assets/projects/sk-safety-4.jpg'
import imgSkSafety5 from '../assets/projects/sk-safety-5.jpg'
import imgSkSafety6 from '../assets/projects/sk-safety-6.jpg'
import imgSkSafety7 from '../assets/projects/sk-safety-7.jpg'

export type ProjectImage = {
  src: string
  /** 디테일 페이지 슬라이더/라이트박스에 표시되는 화면 타이틀 */
  label: string
  /** As-Is → To-Be처럼 짝을 이루는 비교 이미지 — 있으면 hero에 두 이미지를 나란히 표시 */
  compare?: { src: string; label: string }
}

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
  /** 이 프로젝트에서 드러나는 핵심 스킬/기술 키워드 (3~5개, 태그로 표시) */
  skills: string[]
  /** 핵심 성과를 한 줄로 요약 */
  impact: string
  width: string
  minWidth: string
  maxWidth: string
  aspect: string
  offset: 'up' | 'down'
  logo: string
  /** 로고 브랜드 컬러를 반영한 썸네일 배경 그라데이션 */
  tint: string
  /** 대표 이미지 슬라이드 — 프로젝트 기승전결 순서로 배치 (최소 1장) */
  images: ProjectImage[]
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
    skills: ['다중 그룹핑 피벗 테이블', '병렬 비교 차트', '다중 탭 SPA 구조'],
    impact: '복잡한 다차원 영업 데이터를 표+차트로 분리해 한눈에 비교 가능하게 구현',
    width: '35vw', minWidth: '400px', maxWidth: '600px',
    aspect: '4/5',
    offset: 'up',
    logo: logoHanwha,
    tint: 'linear-gradient(135deg, #fff4e9 0%, #ffdfc2 100%)',
    images: [
      { src: imgHanwha1, label: '로그인' },
      { src: imgHanwha2, label: '안건 목록' },
      { src: imgHanwha3, label: '안건 목록 (테이블형)' },
      { src: imgHanwha4, label: '프로젝트 등록' },
      { src: imgHanwha5, label: '프로젝트 상세' },
      { src: imgHanwha6, label: '견적 입력' },
      { src: imgHanwha7, label: '업무 관리' },
      { src: imgHanwha8, label: '이슈 관리' },
      { src: imgHanwha9, label: '공지 게시판' },
      { src: imgHanwha10, label: '자료실' },
      { src: imgHanwha11, label: '프로젝트 현황' },
    ],
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
    skills: ['카운트업 애니메이션', '세계지도 시각화', 'Hero 슬라이더'],
    impact: '숫자와 이미지 중심으로 재단의 규모를 첫 화면에서 직관적으로 전달',
    width: '30vw', minWidth: '350px', maxWidth: '500px',
    aspect: '3/4',
    offset: 'down',
    logo: logoToinanum,
    tint: 'linear-gradient(135deg, #eef1fb 0%, #dfe3f5 100%)',
    images: [
      { src: imgToinanum1, label: '홈페이지 메인' },
      { src: imgToinanum2, label: '인사말' },
      { src: imgToinanum3, label: '연혁' },
      { src: imgToinanum4, label: '조직도 1' },
      { src: imgToinanum5, label: '조직도 2' },
      { src: imgToinanum6, label: '공지사항' },
      { src: imgToinanum7, label: '공지사항 상세' },
      { src: imgToinanum8, label: '스토리 갤러리' },
      { src: imgToinanum9, label: '통일미래준비사업' },
      { src: imgToinanum10, label: '통일정보플랫폼' },
      { src: imgToinanum11, label: '통일 컨퍼런스' },
      { src: imgToinanum12, label: '후원 안내' },
    ],
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
    skills: ['트리 내비게이션', '컬러 코딩 상태 표시', '다크 테마 대시보드'],
    impact: '수십 개 공정 유닛의 이상 징후를 단일 화면에서 즉시 포착 가능하게 구현',
    width: '35vw', minWidth: '400px', maxWidth: '600px',
    aspect: '16/9',
    offset: 'up',
    logo: logoGsCaltex,
    tint: 'linear-gradient(135deg, #eaf6f2 0%, #dcedf7 100%)',
    images: [
      { src: imgGsDashboard1, label: '대시보드' },
      { src: imgGsDashboard2, label: 'CDU 모니터링 1' },
      { src: imgGsDashboard3, label: 'CDU 모니터링 2' },
      { src: imgGsDashboard4, label: 'CDU 모니터링 3' },
    ],
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
    skills: ['드래그 경로 재정렬', '상태 배지 시스템', '모바일 터치 UX'],
    impact: '이동 중에도 방문 순서를 조정하고 진행 상태를 실시간으로 확인 가능하게 구현',
    width: '28vw', minWidth: '320px', maxWidth: '450px',
    aspect: '4/5',
    offset: 'down',
    logo: logoKtng,
    tint: 'linear-gradient(135deg, #f6f4f1 0%, #e8e2da 100%)',
    images: [
      { src: imgKtgSales1, label: '업무 시작' },
      { src: imgKtgSales4, label: '전체 메뉴' },
      { src: imgKtgSales6, label: '방문 일정 조회' },
      { src: imgKtgSales5, label: '할 일 목록' },
      { src: imgKtgSales2, label: '광고물 관리' },
      { src: imgKtgSales3, label: '방문 종료' },
      { src: imgKtgSales7, label: '실적 조회' },
    ],
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
    desc: '전국 주유소 가격 모니터링 + 지도 기반 입지 분석. 전국→시군구→명칭 단계별 검색 UX가 핵심.',
    skills: ['단계별 지역 검색 UX', '지도 마커 시각화', 'Vue 컴포넌트 재사용'],
    impact: '전국→시군구→명칭 단계별 검색 UX로 방대한 입지 데이터를 빠르게 탐색 가능하게 구현',
    width: '32vw', minWidth: '380px', maxWidth: '550px',
    aspect: '16/10',
    offset: 'up',
    logo: logoGsCaltex,
    tint: 'linear-gradient(135deg, #eaf6f2 0%, #dcedf7 100%)',
    images: [
      { src: imgGsFuel1, label: '가격 대시보드' },
      { src: imgGsFuel2, label: '주유소 목록' },
      { src: imgGsFuel3, label: '상세 검색' },
      { src: imgGsFuel4, label: '가격 시뮬레이션' },
      { src: imgGsFuel5, label: '지도검색 (전국)' },
      { src: imgGsFuel7, label: '지도검색 (시군구)' },
      { src: imgGsFuel8, label: '지도검색 (명칭)' },
      { src: imgGsFuel6, label: '지도검색 (마커)' },
      { src: imgGsFuel9, label: '입지 시뮬레이션' },
      { src: imgGsFuel10, label: '성과평가 결과' },
    ],
  },
  {
    id: 'gs-performance',
    accession: 'ARC.006',
    nameKr: 'GS칼텍스 전략 성과관리 시스템',
    nameEn: 'GS Caltex Strategic Performance Management',
    client: 'GS칼텍스',
    period: '2025.10 — 2026.01',
    role: '프론트엔드 UI 구현',
    tech: 'OutSystems',
    desc: 'As-Is 스크롤 과다 문제 개선. 경영진 보고 화면에 호버 포커싱 인터랙션 직접 설계.',
    skills: ['호버 인터랙션 설계', '게이지 바 애니메이션', '포커스 디밍 UX'],
    impact: '정적인 디자인을 인터랙티브 UX로 확장해 스크롤 없이 프로젝트 현황 파악 가능',
    width: '30vw', minWidth: '360px', maxWidth: '520px',
    aspect: '4/3',
    offset: 'down',
    logo: logoGsCaltex,
    tint: 'linear-gradient(135deg, #eaf6f2 0%, #dcedf7 100%)',
    images: [
      { src: imgGsPerformance1, label: 'As-Is', compare: { src: imgGsPerformance6, label: 'To-Be' } },
      { src: imgGsPerformance2, label: 'KPI 관리 (요약)' },
      { src: imgGsPerformance3, label: 'KPI 관리 (목록)' },
      { src: imgGsPerformance4, label: 'KPI 관리 (일정)' },
      { src: imgGsPerformance5, label: '워크스트림 관리' },
    ],
  },
  {
    id: 'sk-safety',
    accession: 'ARC.007',
    nameKr: 'SK브로드밴드 안전 관리 시스템',
    nameEn: 'SK Broadband Safe-B',
    client: 'SK브로드밴드',
    period: '2026.02 — 진행 중',
    role: 'UI 설계 및 프론트엔드 개발 전담',
    tech: 'OutSystems',
    desc: '건설·통신 현장 통합 안전 관제. AI CCTV·IoT 센서·지도 API 연동 대시보드.',
    skills: ['반응형 CSS 그리드 설계', '8인 개발팀 협업 표준화', 'AI CCTV·IoT 대시보드'],
    impact: '필드 수가 달라도 항상 정렬되는 CSS 클래스 체계를 설계해 8인 개발팀 전체에 표준 적용',
    width: '30vw', minWidth: '350px', maxWidth: '500px',
    aspect: '1/1',
    offset: 'up',
    logo: logoSkBroadband,
    tint: 'linear-gradient(135deg, #fff1ee 0%, #ffe0d6 100%)',
    images: [
      { src: imgSkSafety1, label: '로그인' },
      { src: imgSkSafety2, label: '안전 관제 대시보드' },
      { src: imgSkSafety3, label: '전체 메뉴' },
      { src: imgSkSafety4, label: 'Safety Patrol 현황' },
      { src: imgSkSafety5, label: '작업허가서 상세' },
      { src: imgSkSafety6, label: '작업허가 신청' },
      { src: imgSkSafety7, label: '결재 상신함' },
    ],
  },
]

export function getProjectById(id: string | undefined): Project | undefined {
  return projects.find((p) => p.id === id)
}
