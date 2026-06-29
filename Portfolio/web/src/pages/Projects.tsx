import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ── 프로젝트 데이터 (Stitch CompanyProject_Sample_01.html 기준) ── */
const PROJECTS = [
  {
    id:       'hanwha-crm',
    accession: 'ARC.001',
    nameKr:   '한화 파워시스템 CRM',
    nameEn:   'Hanwha CRM Redesign',
    client:   '한화 파워시스템',
    period:   '2024.05 — 2024.08',
    tech:     'OutSystems',
    desc:     '해외 영업 안건 생애주기 관리 CRM. 수주목표 vs 실적 차트, 복합 피벗 테이블.',
    gradient: 'linear-gradient(135deg, #f0ebe5, #d4c9bc, #9cb2af)',
    width: '35vw', minWidth: '400px', maxWidth: '600px',
    aspect:   '4/5',
    offset:   'up',
    visual:   'crm',
  },
  {
    id:       'toinanum',
    accession: 'ARC.002',
    nameKr:   '통일과나눔 재단 홈페이지',
    nameEn:   'Toi & Nanum Foundation',
    client:   '통일과나눔 재단',
    period:   '2024.09 — 2024.12',
    tech:     'OutSystems',
    desc:     '153,800명 후원자 재단 공식 홈페이지. Hero 슬라이더, 세계지도, 통계 시각화.',
    gradient: 'linear-gradient(135deg, #f5f2ee, #e0d8ce, #c4bab0)',
    width: '30vw', minWidth: '350px', maxWidth: '500px',
    aspect:   '3/4',
    offset:   'down',
    visual:   'circle',
  },
  {
    id:       'gs-dashboard',
    accession: 'ARC.003',
    nameKr:   'GS칼텍스 여수공장 통합 대시보드',
    nameEn:   'GS Caltex Dashboard',
    client:   'GS칼텍스',
    period:   '2025.04 — 2025.06',
    tech:     'OutSystems',
    desc:     '정유공장 설비 실시간 모니터링. 다크 테마, CDU 카드 그리드, 멀티탭 구조.',
    gradient: 'linear-gradient(135deg, #e8ddd4, #c9b8a8, #9cb2af)',
    width: '35vw', minWidth: '400px', maxWidth: '600px',
    aspect:   '16/9',
    offset:   'up',
    visual:   'grid',
  },
  {
    id:       'ktg-sales',
    accession: 'ARC.004',
    nameKr:   'KT&G 영업 관리 시스템',
    nameEn:   'KT&G Sales Manager',
    client:   'KT&G',
    period:   '2025.03 — 2025.05',
    tech:     'OutSystems',
    desc:     '영업사원 일일 판매점 방문 경로 관리 모바일 앱. 드래그 경로 재정렬 UX.',
    gradient: 'linear-gradient(135deg, #f0ebe5, #a0d8ef)',
    width: '28vw', minWidth: '320px', maxWidth: '450px',
    aspect:   '4/5',
    offset:   'down',
    visual:   'fade',
  },
  {
    id:       'gs-fuel',
    accession: 'ARC.005',
    nameKr:   'GS칼텍스 유가 관리 시스템',
    nameEn:   'GS Oil Dynamic Pricing',
    client:   'GS칼텍스',
    period:   '2025.10 — 2026.01',
    tech:     'Vue',
    desc:     '전국 주유소 Mogas·Diesel 가격 실시간 모니터링. 시계열 차트, 프라이싱 시뮬레이션.',
    gradient: 'linear-gradient(135deg, #e8e4de, #bdc8c5)',
    width: '32vw', minWidth: '380px', maxWidth: '550px',
    aspect:   '16/10',
    offset:   'up',
    visual:   'circles',
  },
  {
    id:       'sk-safety',
    accession: 'ARC.006',
    nameKr:   'SK브로드밴드 안전 관리 시스템',
    nameEn:   'SK Broadband Safe-B',
    client:   'SK브로드밴드',
    period:   '2026.02 — 진행 중',
    tech:     'OutSystems',
    desc:     '건설·통신 현장 통합 안전 관제. AI CCTV·IoT 센서·지도 API 연동 대시보드.',
    gradient: 'linear-gradient(135deg, #f0ebe5, #d4e8f0, #a0d8ef)',
    width: '30vw', minWidth: '350px', maxWidth: '500px',
    aspect:   '1/1',
    offset:   'down',
    visual:   'border',
  },
]

function CardVisual({ type }: { type: string }) {
  if (type === 'crm') return (
    <>
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.25rem' }}>
        <div style={{ height: '8px', width: '48px', background: 'rgba(255,255,255,0.4)', marginBottom: '12px', borderRadius: '999px' }} />
        <div style={{ height: '8px', width: '96px', background: 'rgba(255,255,255,0.2)', borderRadius: '999px' }} />
      </div>
    </>
  )
  if (type === 'circle') return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '128px', height: '128px', borderRadius: '50%', border: '0.5px solid rgba(90,88,85,0.1)' }} />
  )
  if (type === 'grid') return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '66%', height: '50%', border: '0.5px solid rgba(90,88,85,0.1)', borderRadius: '0.25rem', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', padding: '8px' }}>
      <div style={{ background: 'rgba(90,88,85,0.05)', borderRadius: '0.25rem' }} />
      <div style={{ background: 'rgba(90,88,85,0.05)', borderRadius: '0.25rem', gridColumn: 'span 2' }} />
      <div style={{ background: 'rgba(90,88,85,0.05)', borderRadius: '0.25rem', gridColumn: 'span 3' }} />
    </div>
  )
  if (type === 'fade') return (
    <div style={{ position: 'absolute', right: 0, top: 0, width: '75%', height: '100%', background: 'linear-gradient(to left, rgba(255,255,255,0.2), transparent)' }} />
  )
  if (type === 'circles') return (
    <>
      <div style={{ position: 'absolute', left: '2rem', bottom: '2rem', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(90,88,85,0.05)', mixBlendMode: 'multiply' }} />
      <div style={{ position: 'absolute', left: '5rem', bottom: '3rem', width: '96px', height: '96px', borderRadius: '50%', background: 'rgba(90,88,85,0.05)', mixBlendMode: 'multiply' }} />
    </>
  )
  if (type === 'border') return (
    <>
      <div style={{ position: 'absolute', inset: '2rem', border: '0.5px solid rgba(90,88,85,0.1)' }} />
      <div style={{ position: 'absolute', inset: '3rem', border: '0.5px solid rgba(90,88,85,0.05)' }} />
    </>
  )
  return null
}

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        el.scrollLeft += e.deltaY * 2
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#F5F2EE', fontFamily: 'Noto Serif KR, serif', position: 'relative' }}>

      {/* Noise texture overlay */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        pointerEvents: 'none', zIndex: 50, opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* ── Navigation ── */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 40,
        padding: '2rem 4vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(245,242,238,0.72)', backdropFilter: 'blur(24px)',
        borderBottom: '0.5px solid rgba(111,121,124,0.2)',
      }}>
        {/* Left nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          {[
            { label: '회사 프로젝트', to: '/projects', active: true,  isRoute: true  },
            { label: '개인 프로젝트', to: '#personal', active: false, isRoute: false },
            { label: '소개',         to: '#about',    active: false, isRoute: false },
          ].map(({ label, to, active, isRoute }) => (
            isRoute
              ? <Link key={label} to={to} className={active ? 'nav-active-state' : 'nav-underline-anim'} style={{ textDecoration: 'none', position: 'relative', color: active ? '#4f6265' : 'rgba(90,88,85,0.6)', fontFamily: 'Noto Serif KR, serif', fontSize: '14px', fontWeight: active ? 500 : 400, transition: 'opacity 0.3s', letterSpacing: '0.02em' }}>{label}</Link>
              : <a     key={label} href={to}  className={active ? 'nav-active-state' : 'nav-underline-anim'} style={{ textDecoration: 'none', position: 'relative', color: active ? '#4f6265' : 'rgba(90,88,85,0.6)', fontFamily: 'Noto Serif KR, serif', fontSize: '14px', fontWeight: active ? 500 : 400, transition: 'opacity 0.3s', letterSpacing: '0.02em' }}>{label}</a>
          ))}
        </div>

        {/* Center brand */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', lineHeight: 1.2, letterSpacing: '0.1em', color: '#2a2927', textTransform: 'uppercase' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>WANG</Link>
        </div>

        {/* Right metadata */}
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', letterSpacing: '0.1em', color: '#5a5855', textTransform: 'uppercase' }}>
          Seoul, KR — 2026
        </div>
      </nav>

      {/* ── Horizontal scroll gallery — absolute fill between fixed nav/footer ── */}
      <div style={{ position: 'absolute', top: '8rem', left: 0, right: 0, bottom: '5.5rem', zIndex: 10 }}>
        <div
          ref={scrollerRef}
          style={{
            width: '100%', height: '100%',
            overflowX: 'auto', overflowY: 'hidden',
            display: 'flex', alignItems: 'center',
            padding: '80px 20vw', boxSizing: 'border-box', gap: '8rem',
          }}
        >
          {/* Intro spacer */}
          <div style={{ flexShrink: 0, width: '20vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.2em', fontWeight: 500, color: '#11677a', marginBottom: '1rem', textTransform: 'uppercase' }}>COLLECTION</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '4rem', lineHeight: 1.1, fontWeight: 300, color: '#2a2927', marginBottom: '1.5rem' }}>Corporate<br/>Archives</h1>
            <p style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '14px', lineHeight: 1.6, color: '#5a5855', maxWidth: '280px' }}>
              2024년부터 현재까지 참여한 기업 프로젝트 모음. CRM·대시보드·재단 홈페이지·안전 관제 등 다양한 도메인의 엔터프라이즈 시스템을 개발했습니다.
            </p>
            <div style={{ marginTop: '3rem', height: '1px', width: '64px', background: 'rgba(111,121,124,0.3)' }} />
          </div>

          {/* Project cards */}
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="proj-card"
              style={{
                flexShrink: 0,
                scrollSnapAlign: 'center',
                width: p.width, minWidth: p.minWidth, maxWidth: p.maxWidth,
                transform: p.offset === 'up' ? 'translateY(-40px)' : 'translateY(40px)',
                cursor: 'pointer',
              }}
            >
              {/* Accession row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.15em', fontWeight: 500, color: 'rgba(90,88,85,0.5)', textTransform: 'uppercase' }}>{p.accession}</span>
                <div style={{ height: '1px', flexGrow: 1, background: 'rgba(111,121,124,0.2)' }} />
              </div>

              {/* Thumbnail canvas — height capped so it never bleeds into footer */}
              <div
                className="proj-thumb"
                style={{
                  width: '100%',
                  height: 'clamp(200px, 38vh, 420px)',
                  background: p.gradient, borderRadius: '0.25rem',
                  position: 'relative', overflow: 'hidden', marginBottom: '2rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                  border: '0.5px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.7s ease',
                }}
              >
                <CardVisual type={p.visual} />
              </div>

              {/* Card text */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 className="proj-title" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', lineHeight: 1.2, letterSpacing: '0.02em', color: '#2a2927', marginBottom: '0.5rem', transition: 'color 0.3s' }}>
                  {p.nameKr}
                </h2>
                <p style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '14px', lineHeight: 1.6, color: '#5a5855' }}>
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 40, padding: '2rem 4vw', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', pointerEvents: 'none' }}>
        {/* Left: date indicator */}
        <div style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '18px', lineHeight: 1, color: '#5a5855', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>2024.05</span>
          <span style={{ color: 'rgba(111,121,124,0.4)' }}>————</span>
          <span>진행 중</span>
        </div>

        {/* Right: scroll hint pill */}
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.2em', fontWeight: 500, color: '#5a5855', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(245,242,238,0.8)', padding: '0.5rem 1rem', borderRadius: '999px', backdropFilter: 'blur(12px)', border: '0.5px solid rgba(111,121,124,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <span>SCROLL TO NAVIGATE</span>
          <span style={{ fontSize: '14px' }}>→</span>
        </div>
      </footer>

      {/* CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500&display=swap');

        /* Hide scrollbar */
        div[style*="overflowX: auto"]::-webkit-scrollbar { display: none; }

        /* Nav underline animations */
        .nav-underline-anim::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: -6px;
          left: 0;
          background-color: #65acc1;
          transform-origin: bottom right;
          transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
        }
        .nav-underline-anim:hover { color: #5a5855 !important; }
        .nav-underline-anim:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .nav-active-state::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -6px;
          left: 0;
          background-color: #65acc1;
        }

        /* Card hover */
        .proj-card:hover .proj-thumb { transform: scale(1.02); }
        .proj-card:hover .proj-title { color: #11677a !important; }
      `}</style>
    </div>
  )
}
