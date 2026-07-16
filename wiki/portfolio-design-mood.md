> **[핵심 Takeaway]**
> 포트폴리오 사이트의 무드는 "블루 사이다"(파란 하늘·청량함·차분함) 컨셉으로 확정되어 있고, 색상 토큰까지 구체적으로 정의되어 있다 — 실제 구현 시 이 토큰을 CSS 변수/Tailwind 설정으로 그대로 가져다 쓰면 된다.
> 디자인은 Stitch MCP로 생성하되 결과 코드를 그대로 쓰지 않고 React+TypeScript로 재작성한다는 원칙([project-context.md](../project-context.md) 참고)이 이 무드에도 동일하게 적용된다.

# 포트폴리오 디자인 무드 — Blue Cider

| 항목 | 내용 |
|------|------|
| 컨셉 키워드 | 파란 하늘, 시원한 사이다, 여름, 청량함, 차분함, 투명함, 부드러운 구름, 깨끗한 인상 |
| 목표 인상 | 시원하지만 차갑지 않음 / 산뜻하지만 과하지 않음 / 차분하고 여백이 많음 |
| Stitch 프로젝트 | https://stitch.withgoogle.com/projects/14275670028539609542 |
| 참고 이미지 | `Pasted image 20260612003121.png`, `Pasted image 20260612003152.png` (색감·여백·타이포·그라데이션 방향성만 참고, 구성 그대로 복제 금지) |

---

## 컬러 토큰

```css
:root {
  --sky-blue-100: #a0d8ef;
  --mist-blue-100: #e0eaec;
  --warm-ivory-100: #f0ebe5;
  --cider-blue-500: #65acc1;
  --gray-blue-500: #9cb2af;
}
```

| 토큰 | Hex | 용도 |
|------|-----|------|
| `--sky-blue-100` | `#a0d8ef` | 포인트 배경, 라벨, 아이콘, 얇은 라인 |
| `--mist-blue-100` | `#e0eaec` | 메인 배경, 카드 배경 |
| `--warm-ivory-100` | `#f0ebe5` | 여백 배경, 텍스트 박스, 대비 완화 |
| `--cider-blue-500` | `#65acc1` | 주요 버튼, 강조 텍스트, active 상태 |
| `--gray-blue-500` | `#9cb2af` | 보조 텍스트, 비활성 UI |

**사용 규칙:**
- 흰색 대신 `#f0ebe5` 또는 `#e0eaec`를 섞어 부드럽게 표현
- 진한 네이비·순수 블랙 최소화
- 강조색(`#65acc1`)은 넓은 면적에 과용하지 않음

## 그라데이션

```css
/* 메인 배경 */
background: linear-gradient(135deg, #f0ebe5 0%, #e0eaec 35%, #a0d8ef 100%);

/* 카드 배경 */
background: linear-gradient(135deg, #e0eaec 0%, #9cb2af 100%);
```

주의: 경계가 강한 그라데이션 금지, 채도 높은 블루 단독 사용 금지, blur/opacity/soft overlay 활용.

## 타이포그래피

```css
.title {
  color: #4f6265;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: -0.03em;
}
.description {
  color: #6f7f82;
  font-size: 15px;
  line-height: 1.7;
}
```

얇은 산세리프, 자간은 살짝 좁게(`-0.02em`), 순수 검정 대신 `#4f6265` 계열 사용. 본문은 너무 많은 텍스트를 한 번에 넣지 않는다.

## 레이아웃 원칙

1. 여백을 넓게 둔다 — 요소를 빽빽하게 채우지 않는다
2. 배경은 사진처럼 흐릿하고 부드럽게 처리
3. 포인트 컬러는 작은 면적에만 사용
4. 직선보다 부드러운 라운드, 흐린 경계, 투명감 활용

**권장 UI 요소:** rounded card, soft gradient section, thin divider, pale blue label, translucent button, glass-like panel, floating circle decoration, cloud-like blurred shape

## 컴포넌트 스펙

```css
.primary-button {
  background: #65acc1;
  color: #ffffff;
  border-radius: 999px;
  padding: 12px 20px;
  font-weight: 400;
  border: none;
}
.secondary-button {
  background: rgba(224, 234, 236, 0.7);
  color: #4f6265;
  border: 1px solid rgba(101, 172, 193, 0.35);
  border-radius: 999px;
}
.soft-card {
  background: rgba(240, 235, 229, 0.72);
  border: 1px solid rgba(160, 216, 239, 0.35);
  border-radius: 24px;
  box-shadow: 0 16px 40px rgba(101, 172, 193, 0.12);
  backdrop-filter: blur(16px);
}
.sky-section {
  background:
    radial-gradient(circle at 20% 20%, rgba(160, 216, 239, 0.55), transparent 32%),
    radial-gradient(circle at 80% 10%, rgba(240, 235, 229, 0.75), transparent 30%),
    linear-gradient(135deg, #f0ebe5 0%, #e0eaec 45%, #a0d8ef 100%);
}
```

## Do / Don't

**Do:** 연한 블루·회색 블루 중심 / 여름·사이다·하늘·구름을 추상적으로 반영 / 버튼·포인트 요소만 선명한 블루 / 부드러운 그라데이션과 투명감 / 차분하고 깨끗한 UI

**Don't:** 강한 원색 파랑을 넓게 사용 / 검정 대비를 너무 강하게 / 요소 과다 배치 / 참고 이미지 그대로 복제 / 복잡한 장식 패턴

---

*관련 페이지: [[skill-color-theory]], [[portfolio-layout-reference]]*
*최종 수정: 2026-07-16*
