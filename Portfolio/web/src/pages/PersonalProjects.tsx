import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { personalProjects as PERSONAL_PROJECTS } from '../data/personalProjects'
import { useHorizontalDragScroll } from '../hooks/useHorizontalDragScroll'

export default function PersonalProjects() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  useHorizontalDragScroll(scrollerRef)

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
            { label: '회사 프로젝트', to: '/projects',          active: false, isRoute: true  },
            { label: '개인 프로젝트', to: '/personal-projects', active: true,  isRoute: true  },
            { label: '소개',         to: '#about',             active: false, isRoute: false },
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
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.2em', fontWeight: 500, color: '#11677a', marginBottom: '1rem', textTransform: 'uppercase' }}>PRACTICE LOG</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '4rem', lineHeight: 1.1, fontWeight: 300, color: '#2a2927', marginBottom: '1.5rem' }}>Personal<br/>Lab</h1>
            <p style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '14px', lineHeight: 1.6, color: '#5a5855', maxWidth: '280px' }}>
              업무 밖에서 진행한 개인 실습 프로젝트 모음. 책과 강의로 학습한 UI 패턴을 직접 여러 방식으로 구현하며 React 생태계 이해와 프론트엔드 엔지니어링 역량을 쌓고 있습니다.
            </p>
            <div style={{ marginTop: '3rem', height: '1px', width: '64px', background: 'rgba(111,121,124,0.3)' }} />
          </div>

          {/* Personal project cards */}
          {PERSONAL_PROJECTS.map((p) => (
            <div
              key={p.id}
              className="pproj-card"
              style={{
                flexShrink: 0,
                scrollSnapAlign: 'center',
                width: p.width, minWidth: p.minWidth, maxWidth: p.maxWidth,
                transform: p.offset === 'up' ? 'translateY(-40px)' : 'translateY(40px)',
              }}
            >
              {/* Accession row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.15em', fontWeight: 500, color: 'rgba(90,88,85,0.5)', textTransform: 'uppercase' }}>{p.accession}</span>
                <div style={{ height: '1px', flexGrow: 1, background: 'rgba(111,121,124,0.2)' }} />
              </div>

              {/* Thumbnail — chapter/variant index card (no screenshot yet, so the catalog itself is the visual) */}
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                className="pproj-thumb"
                style={{
                  width: '100%',
                  height: 'clamp(220px, 40vh, 440px)',
                  background: '#1c211f', borderRadius: '0.25rem',
                  position: 'relative', overflow: 'hidden', marginBottom: '2rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  border: '0.5px solid rgba(255,255,255,0.06)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  padding: '1.75rem', boxSizing: 'border-box',
                  textDecoration: 'none', cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(240,235,229,0.45)', textTransform: 'uppercase' }}>UI Component Catalog</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '14px', color: '#65acc1', whiteSpace: 'nowrap' }}>{p.chapters.length} Chapters</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                  {p.chapters.map((c) => (
                    <div key={c.no} title={c.variants.join(' · ')} style={{ border: '0.5px solid rgba(240,235,229,0.14)', borderRadius: '3px', padding: '0.5rem 0.4rem', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', letterSpacing: '0.05em', color: '#65acc1' }}>{c.no}</span>
                      <span style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '11px', color: 'rgba(240,235,229,0.85)', lineHeight: 1.3 }}>{c.label}</span>
                    </div>
                  ))}
                </div>
              </a>

              {/* Card text */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', lineHeight: 1.2, letterSpacing: '0.02em', color: '#2a2927', marginBottom: '0.5rem' }}>
                  {p.nameKr}
                </h2>
                <p style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '14px', lineHeight: 1.6, color: '#5a5855', marginBottom: '1rem' }}>
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {p.tech.split(' · ').map((t) => (
                    <span key={t} style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500,
                      letterSpacing: '0.01em', color: '#11677a', lineHeight: 1.4,
                      background: 'rgba(160,216,239,0.22)', border: '0.5px solid rgba(101,172,193,0.4)',
                      borderRadius: '999px', padding: '0.35rem 0.8rem',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '0.75rem' }}>
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="pproj-link" style={{ textDecoration: 'none', color: '#11677a', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em' }}>
                    라이브 데모 ↗
                  </a>
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="pproj-link" style={{ textDecoration: 'none', color: '#5a5855', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em' }}>
                      GitHub ↗
                    </a>
                  )}
                </div>

                {p.sourceUrl ? (
                  <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '13px', color: '#9cb2af' }}>
                    참고: {p.source}
                  </a>
                ) : (
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '13px', color: '#9cb2af' }}>
                    참고: {p.source}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 40, padding: '2rem 4vw', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', pointerEvents: 'none' }}>
        {/* Left: date indicator */}
        <div style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '18px', lineHeight: 1, color: '#5a5855', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>2026</span>
          <span style={{ color: 'rgba(111,121,124,0.4)' }}>————</span>
          <span>진행 중</span>
        </div>

        {/* Right: scroll hint pill */}
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.2em', fontWeight: 500, color: '#5a5855', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(245,242,238,0.8)', padding: '0.5rem 1rem', borderRadius: '999px', backdropFilter: 'blur(12px)', border: '0.5px solid rgba(111,121,124,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <span>SCROLL OR DRAG TO EXPLORE</span>
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
        .pproj-thumb { transition: transform 0.5s ease, box-shadow 0.5s ease; }
        .pproj-card:hover .pproj-thumb { transform: scale(1.02); box-shadow: 0 28px 56px rgba(0,0,0,0.22); }
        .pproj-link { transition: opacity 0.3s ease; }
        .pproj-link:hover { opacity: 0.6; }
      `}</style>
    </div>
  )
}
