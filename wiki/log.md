# 작업 이력 (Log)

> **[이 페이지의 역할]**
> 위키에 어떤 자료가 언제 추가되었는지 추적한다.
> 포트폴리오 콘텐츠의 출처와 변경 이력을 투명하게 관리한다.

---

## 2026-07-21 (5)

### GS칼텍스 전략 성과관리 — As-Is/To-Be 비교 슬라이드 + 문구 수정

- **조치:**
  - `ProjectImage` 타입에 `compare?: { src, label }` 필드 추가 — 있으면 hero 영역에 두 이미지를 나란히(모바일은 세로로) 표시하는 비교 슬라이드로 렌더링
  - GS칼텍스 전략 성과관리 이미지 배열에서 As-Is(1번)와 경영진 보고 화면(6번, To-Be로 재명명)을 하나의 비교 슬라이드로 병합 → 전체 슬라이드 6장 → 5장
  - As-Is 원본 스크린샷 자체가 세로로 매우 긴 이미지(3840×7760)라서, 좁은 패널에 배치되면 자연스럽게 "스크롤이 긴 화면"이라는 문제가 시각적으로도 드러남 — To-Be(3840×2160)의 컴팩트함과 대비되어 효과적
  - 라이트박스에 `lightboxOverride` 상태 추가 — 비교 슬라이드에서 As-Is/To-Be 중 하나를 클릭하면 그 이미지만 단독으로 확대(시퀀스 이동 없이)
  - `projects.ts`의 gs-performance `impact` 문구 "정적 디자인 한 장을" → "정적인 디자인을"로 수정
  - `wiki/project-gs-performance.md`의 화면 구성 섹션도 As-Is/To-Be 비교 슬라이드 구조에 맞춰 갱신
  - Playwright로 데스크톱(1440px)·모바일(390px) 뷰 모두 스크린샷 확인 — 모바일에서는 flexbox `min-height:0` 누락으로 두 번째 패널이 잘려 보이던 버그를 발견해 수정

### GS칼텍스 유가 관리 시스템 — 핵심 기능 재정의 (가격 차트 → 지도 검색 UX)

- **배경:** 이 프로젝트의 실제 핵심은 가격 모니터링 차트가 아니라 지도 기반 입지 분석(LCC 타당성 분석)의 **전국→시군구→명칭 단계별 검색 UX**라는 사용자 확인
- **조치:**
  - `projects.ts`: `desc`/`skills`/`impact`를 단계별 지역 검색 UX 중심으로 재작성 (`단계별 지역 검색 UX`, `지도 마커 시각화`, `Vue 컴포넌트 재사용`)
  - 이미지 슬라이더 순서를 지도 검색 흐름에 맞게 정정: 전국 → 시군구 → 명칭 → 마커(기존에는 전국 → 마커 → 시군구 → 명칭으로 드릴다운 순서가 뒤섞여 있었음)
  - `wiki/project-gs-fuel.md`: 핵심 Takeaway와 시스템 개요를 지도 검색 UX 중심으로 재편, 가격 대시보드는 보조 기능으로 재분류

---

## 2026-07-21 (3)

### 프로젝트 상세 페이지 — Problem/Solution 서술형 제거, 스킬 태그 + 이미지 기승전결 구조로 개편

- **배경:** Problem/Solution/Result/Takeaway 4단 문단 구성이 "주절주절" 읽혀서 면접관이 한눈에 파악하기 어렵다는 피드백. 문단 대신 (1) 사진 배치 순서로 스토리를 보여주고 (2) 핵심 스킬을 태그로 즉시 인지시키는 구조로 전환 요청
- **조치:**
  - `Project` 타입에서 `problem`/`solution`/`result`/`learning` 4개 필드 제거, `skills: string[]`(핵심 스킬 3개 태그) + `impact: string`(성과 한 줄 요약) 2개로 대체 — 내용은 기존에 검증된 문제/해결 서술을 압축 재사용, 새로운 사실 추가 없음
  - `ProjectDetail.tsx` 사이드바에서 Problem/Solution/Result/Takeaway 4개 문단 섹션 삭제 → **Key Skills**(알약형 태그, `portfolio-design-mood.md`의 Blue Cider 토큰 `sky-blue #a0d8ef` / `cider-blue #65acc1` 사용) + **Impact**(좌측 강조선 콜아웃 박스, CRAP Contrast 원칙 적용) 2개 섹션으로 교체
  - KT&G 영업 관리 시스템 이미지 순서를 업무 흐름(기승전결)에 맞춰 재배치: 업무시작 → 전체메뉴 → 방문일정조회 → 할일목록 → 광고물관리 메뉴 → 방문종료 메뉴 → 실적조회(결과로 마무리)
  - 나머지 6개 프로젝트는 기존 이미지 순서가 이미 기승전결(문제/맥락 → 핵심 기능 → 디테일 → 결과 화면)에 부합해 순서 유지
  - wiki 각 프로젝트 페이지의 `포트폴리오 서술 구조` 문단은 그대로 보존 — 사이트에는 압축 표시하되, wiki는 여전히 전체 서술이 남아있는 Single Source of Truth 역할

---

## 2026-07-21 (2)

### 프로젝트 상세 페이지 — 문제/해결 서술 전면 개편

- **배경:** 디테일 페이지의 문제/해결/결과/배운점 서술이 너무 일반적이어서, 면접관이 봤을 때 "이 사람이 실제로 어떤 문제를 어떻게 해결했는지"가 와닿지 않는다는 피드백
- **원칙 확인:** 실제로 없었던 일을 지어내는 것은 금지 — 사용자가 구체적 사실을 알려준 프로젝트만 그 사실 기반으로 작성하고, 그 외는 기존에 검증된 화면 구성 사실(스크린샷 기반)만으로 재작성

- **사실 기반으로 새로 반영 (사용자 제공 정보):**
  - **GS칼텍스 전략 성과관리:** As-Is 화면 스크롤 과다 문제 → 디자이너에게 정적 디자인(경영진 보고 화면) 1장만 전달받은 상태에서 호버 인터랙션(프로젝트 호버 시 기간만큼 게이지 바 애니메이션 + 나머지 프로젝트 디밍)을 직접 설계. `wiki/project-gs-performance.md`, `projects.ts` 반영
  - **SK브로드밴드 안전 관리:** 고객사가 요구한 "필드 수와 무관하게 정렬된 폼 레이아웃"을 개발자 8명이 나눠 작업하는 환경에서, 필드 개수에 따라 컬럼이 자동 조정되는 CSS 클래스 체계를 직접 설계해 표준화. `wiki/project-sk-safety.md`, `projects.ts` 반영 (작업허가서 상세, 일반 작업허가 신청 화면에 해당)

- **기존 화면 사실 기반으로 재작성 (스크린샷 근거, 새로운 뒷이야기 추가 없음):**
  - 한화 파워시스템 CRM — 다차원 데이터를 피벗 테이블 + 병렬 막대그래프로 분리 표현
  - 통일과나눔 재단 홈페이지 — 카운트업 애니메이션 + 세계지도로 규모를 시각적으로 강조
  - GS칼텍스 여수공장 대시보드 — 트리 내비 + 멀티탭 + 컬러 코딩으로 계층 정보 구조화
  - KT&G 영업 관리 — 드래그 재정렬 + 상태 배지로 모바일 동선 관리
  - GS칼텍스 유가 관리 — Mogas/Diesel 병렬 패널 + 재사용 가능한 시계열 차트 컴포넌트
  - 각 wiki 페이지의 `포트폴리오 서술 구조` 섹션 동기화, `[[project-toinanum]]` → `[[project-tongilnanum]]` 끊어진 링크 수정 (project-ktg-sales.md)

---

## 2026-07-21

### 프로젝트 상세 이미지 갱신 + 신규 프로젝트 추가

- **입력 자료:**
  - `raw/Project Image/` 하위 프로젝트별 폴더 (gscaltex_dynamic, gscaltex_performance, gscaltex_ys, hanhwa, KTnG, skb, tongilnanum) — 프로젝트별 상세 화면 스크린샷 일괄 정리본
  - 사용자 확인: GS칼텍스 전략 성과관리 프로젝트 기간(2025.10~2026.01), 역할(프론트엔드 UI 구현), 기술(OutSystems)

- **조치:**
  - `Portfolio/web/src/data/projects.ts`의 각 프로젝트 `images` 배열을 raw 폴더의 실제 상세 화면 스크린샷 전체로 교체 (기존 대표 1~2장 → 프로젝트당 4~12장 슬라이드)
  - 신규 프로젝트 **GS칼텍스 전략 성과관리 시스템** 추가 (`id: gs-performance`, ARC.006, GS칼텍스 유가 관리 시스템 직후 · SK브로드밴드 안전 관리 시스템 직전에 배치, SK브로드밴드는 ARC.007로 조정)
  - `wiki/project-gs-performance.md` 생성 (전략 KPI 관리, 워크스트림 관리, Business Council 보고 화면 구성)
  - `wiki/project-gs-fuel.md` 교차참조에 `[[project-gs-performance]]` 추가
  - 더 이상 쓰이지 않는 구 썸네일/디테일 이미지 파일 삭제

- **비고:** `raw/local/`, `wiki/local/`은 `.gitignore` 대상 — 회사 리스트 등 비공개 자료는 이번 작업에서 다루지 않음

---

## 2026-07-16

### 위키 건강검진 + 문제 해결

- **건강검진 발견 사항:**
  1. 프로젝트 위키 6개 페이지의 이미지 링크가 전부 깨져 있었음 (`../raw/Image/` 참조 → 실제 폴더명은 `raw/Project Image/`)
  2. `raw/회사 리스트.md`(채용공고 5건)가 위키화되지 않아 "이직 회사" 섹션이 비어 있었음
  3. `raw/디자인 가이드.md`, `raw/디자인 규칙.md`, `raw/레이아웃 가이드.md`, `raw/layout_01~03.html`이 위키화되지 않아 "기술/노하우"·"포트폴리오" 섹션이 비어 있었음
  - 끊어진 [[위키링크]], callout takeaway 누락, 포지셔닝 불일치는 없었음

- **조치:**
  - `project-gs-dashboard.md`, `project-gs-fuel.md`, `project-hanwha-crm.md`, `project-ktg-sales.md`, `project-sk-safety.md`, `project-toinanum.md`의 이미지 경로 일괄 수정
  - `raw/회사 리스트.md` → `wiki/company-edencrew.md`, `company-miridih.md`, `company-sagak.md`, `company-wishist.md`, `company-archisketch.md` 5개 페이지 생성 (각 회사 자격요건 대비 [[career-nulenn]] 매칭 분석 포함)
  - `raw/디자인 규칙.md`(색채학+CRAP 원칙) → `wiki/skill-color-theory.md` 생성
  - `raw/디자인 가이드.md`(Blue Cider 무드) → `wiki/portfolio-design-mood.md` 생성
  - `raw/레이아웃 가이드.md` + `layout_01~03.html` 구조 → `wiki/portfolio-layout-reference.md` 생성
  - `wiki/index.md` 전체 목차 갱신 (이직 회사·기술노하우·포트폴리오 섹션 채움, 총 16페이지)
  - `wiki/career-nulenn.md` 교차참조에 5개 company 페이지 추가

---

## 2026-06-07

### 경력 + 프로젝트 위키 일괄 생성

- **입력 자료:**
  - `raw/Career.md` — 기본정보, 전체 프로젝트 경력표, 참고사항
  - `raw/Image/` — 프로젝트 스크린샷 20개 (6개 프로젝트)

- **생성된 위키 페이지:**

| 파일 | 내용 |
|------|------|
| `wiki/career-nulenn.md` | ㈜늘엔 경력 전체 — 직책·자격증·프로젝트 목록·FE 포지셔닝 재해석 |
| `wiki/project-sk-safety.md` | SK브로드밴드 안전 관리 시스템 (Safe-B) — AI CCTV·IoT·지도 연동 대시보드 |
| `wiki/project-gs-dashboard.md` | GS칼텍스 여수공장 통합 대시보드 — 다크 테마 공정 모니터링 |
| `wiki/project-gs-fuel.md` | GS칼텍스 유가 관리 시스템 — Dynamic Pricing, Vue 프레임워크 |
| `wiki/project-ktg-sales.md` | KT&G 영업 관리 시스템 — 모바일 방문 경로 관리 |
| `wiki/project-hanwha-crm.md` | 한화 파워시스템 CRM — 엔터프라이즈 안건 관리 |
| `wiki/project-toinanum.md` | 통일과나눔 재단 홈페이지 — 퍼블릭 웹 |

- **업데이트:** `wiki/index.md` 전체 목차 반영
- **이미지 없어 페이지 미생성:** GS칼텍스 인사시스템, SCREEN SPE Korea, 천재교육 (추후 자료 추가 시 생성 예정)

### 포트폴리오 우선순위 판단

이미지 분석 후 포트폴리오 Featured Project 추천 순위:

1. **SK브로드밴드 안전 관리 시스템** — 현재 진행중, AI+IoT 연동, 기술적 복잡도 최고
2. **GS칼텍스 여수공장 대시보드** — 다크 테마, 시각적 임팩트, 데이터 시각화 역량
3. **통일과나눔 재단 홈페이지** — 퍼블릭 웹 디자인 완성도, 포트폴리오 웹사이트와 유사한 형식
4. **KT&G 영업 관리** — 모바일 UX 차별화 포인트

---

## 2026-06-07 (초기화)

### 위키 시스템 초기화

- **작업:** Frontend Career Wiki 구조 생성
- **생성된 파일:**
  - `CLAUDE.md` — 위키 운영 규칙 (3가지 운영 방법 정의)
  - `raw/README.md` — 원본 자료 보관소 안내
  - `wiki/index.md` — 전체 목차
  - `wiki/log.md` — 이 파일
- **참고:** `project-context.md` 읽어 포트폴리오 방향 파악 완료

---

*관련 페이지: [[index]]*
