> **[핵심 Takeaway]**
> `raw/layout_01~03.html`은 실제 완성 디자인이 아니라 **구조 참고용 템플릿**이다 (각각 중국풍 "수도자" 컨셉, 프랑스 미술관 "MUSÉE" 컨셉의 더미 콘텐츠) — 구성·인터랙션 구조만 가져오고 텍스트·이미지는 [[career-nulenn]]·프로젝트 데이터로 전부 교체해야 한다.
> 특히 layout_02/03의 "갤러리 아카이브" 메타포(전시번호, 매체, 크기, 소장처 같은 라벨 구조)는 프로젝트를 "작품"처럼 큐레이션하는 포트폴리오 톤으로 재해석하기 좋다.

# 포트폴리오 레이아웃 구조 레퍼런스

| 파일 | 매핑 페이지 | 템플릿 컨셉(더미) |
|------|------------|------------------|
| `raw/layout_01.html` | 메인/소개 페이지 | "寻道 — Chronicles of a Digital Cultivator" (수도자 테마) |
| `raw/layout_02.html` | 프로젝트 리스트 페이지 | "MUSÉE — Digital Archive" (미술관 아카이브 테마) |
| `raw/layout_03.html` | 프로젝트 상세 페이지 | "MUSÉE" 작품 상세 뷰 (사이드 패널형) |

---

## layout_01 — 메인/소개 페이지

**사용자 지시사항 ([raw/레이아웃 가이드.md](../raw/레이아웃 가이드.md)):** 가운데 배경은 캔버스로 물이 계속 흐르는 효과를 줘야 함.

**구조 요소 (더미 템플릿 기준):**
- `viewport` / `canvas-area` — 중앙 캔버스 영역 (물 흐름 애니메이션 적용 대상)
- `nav-links` — 상단 내비게이션 (한글/영문 병기 구조: `nav-cn` + `nav-en`)
- `primary-title` / `secondary-block` — Hero 타이틀 + 부제 블록
- `floating-poem` — 부유하는 텍스트 요소 (장식적 카피)
- `footer-mark` — 하단 마크/서명 영역

**재해석 방향:** 물 흐름 캔버스는 [[portfolio-design-mood]]의 "하늘·구름·청량함" 무드와 자연스럽게 연결됨 (예: canvas 파티클을 하늘색 톤으로).

## layout_02 — 프로젝트 리스트 페이지

**사용자 지시사항 ([raw/레이아웃 가이드.md](../raw/레이아웃 가이드.md)):** 좌우로 스크롤 가능해야 하고, 연도 대신 프로젝트 기간에 따라 이미지를 나열해야 함.

**구조 요소 (더미 템플릿 기준):**
- `gallery-container` — 가로 스크롤 컨테이너
- `artwork` / `img-wrapper` / `artwork-details` — 프로젝트 카드 단위 (썸네일 + 메타 정보)
- `artwork-label` / `artwork-meta` — "전시 번호(accession-no) · Room · 매체 · 크기" 형식의 라벨 → 프로젝트에서는 "기간 · 발주처 · 기술 스택"으로 치환
- `timeline-indicator` — 스크롤 위치를 나타내는 타임라인 인디케이터 (연도 대신 프로젝트 기간 순서로 재해석)
- `scroll-hint` — 스크롤 유도 UI

**매핑 예시:** `INV. 82.1.402 / Room 04 / Oil on canvas, 110×85cm` → `2026.02~진행중 / SK브로드밴드 / OutSystems` 같은 프로젝트 메타 라벨로 치환 (실제 데이터는 [[career-nulenn]] 프로젝트 이력 표 기준).

## layout_03 — 프로젝트 상세 페이지

**구조 요소 (더미 템플릿 기준):**
- `artwork-hero` — 상단 대표 이미지
- `artwork-sidebar` — 우측(또는 하단) 상세 정보 패널
- `data-grid` / `data-item` (`data-key` + `data-value`) — 키-값 쌍 정보 그리드 → "발주처 / 기간 / 역할 / 기술" 등 프로젝트 페이지의 표 형태 정보와 1:1 매핑 가능
- `provenance-text` / `acquisition-note` — 서술형 설명 영역 → 포트폴리오의 "문제-원인-해결-구현-결과-배운점" 서술 구조([project-context.md](../project-context.md))가 들어갈 자리
- `close-btn` — 상세 뷰 닫기 (모달형 또는 라우팅형 상세 페이지 구조 시사)

---

## 종합 노트

세 레이아웃 모두 "박물관 전시품을 큐레이션하듯 보여주는" 구조를 공유한다. 실제 구현 시:

1. 더미 텍스트(수도자/미술관 컨셉)는 전부 제거하고 실제 프로젝트 데이터로 교체
2. 색상은 각 템플릿의 원래 톤이 아니라 [[portfolio-design-mood]]의 Blue Cider 팔레트로 재구성
3. React + TypeScript 컴포넌트로 재작성 (Stitch 결과 코드 그대로 사용 금지 — [project-context.md](../project-context.md) 원칙)

---

*관련 페이지: [[portfolio-design-mood]], [[skill-color-theory]], [[career-nulenn]]*
*최종 수정: 2026-07-16*
