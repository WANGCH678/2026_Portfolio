# 작업 이력 (Log)

> **[이 페이지의 역할]**
> 위키에 어떤 자료가 언제 추가되었는지 추적한다.
> 포트폴리오 콘텐츠의 출처와 변경 이력을 투명하게 관리한다.

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
