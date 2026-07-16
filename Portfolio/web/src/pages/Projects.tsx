import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects as PROJECTS } from '../data/projects'

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
      <div style={{ position: 'absolute', top: '5.4rem', left: 0, right: 0, bottom: '5.5rem', zIndex: 10 }}>
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
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="proj-card"
              style={{
                flexShrink: 0,
                scrollSnapAlign: 'center',
                width: p.width, minWidth: p.minWidth, maxWidth: p.maxWidth,
                transform: p.offset === 'up' ? 'translateY(-40px)' : 'translateY(40px)',
                cursor: 'pointer',
                textDecoration: 'none', color: 'inherit', display: 'block',
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
                  background: p.tint, borderRadius: '0.25rem',
                  position: 'relative', overflow: 'hidden', marginBottom: '2rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                  border: '0.5px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '3rem', boxSizing: 'border-box',
                }}
              >
                <img
                  src={p.logo}
                  alt={`${p.client} 로고`}
                  className="proj-logo-bg"
                  style={{ maxWidth: '55%', maxHeight: '55%', width: 'auto', height: 'auto', objectFit: 'contain', transition: 'transform 0.7s ease' }}
                />
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
            </Link>
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
        .proj-thumb { transition: transform 0.7s ease; }
        .proj-card:hover .proj-thumb { transform: scale(1.03); }
        .proj-card:hover .proj-logo-bg { transform: scale(1.05); }
        .proj-card:hover .proj-title { color: #11677a !important; }
      `}</style>
    </div>
  )
}
