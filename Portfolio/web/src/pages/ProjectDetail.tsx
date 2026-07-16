import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects, getProjectById } from '../data/projects'

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  const d = direction === 'left' ? 'M10 2L4 8L10 14' : 'M6 2L12 8L6 14'
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** 기술 스택별 색상 — 한눈에 OutSystems/Vue를 구분하기 위한 태그 컬러 */
function techTagColor(tech: string) {
  if (tech.includes('Vue')) {
    return { bg: 'rgba(66,184,131,0.14)', text: '#2f8f63', border: 'rgba(66,184,131,0.35)' }
  }
  return { bg: 'rgba(101,172,193,0.16)', text: '#11677a', border: 'rgba(101,172,193,0.4)' }
}

function TechTag({ tech }: { tech: string }) {
  const c = techTagColor(tech)
  return (
    <span style={{
      display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
      letterSpacing: '0.02em', color: c.text, background: c.bg, border: `0.5px solid ${c.border}`,
      borderRadius: '999px', padding: '0.25rem 0.75rem', width: 'fit-content',
    }}>
      {tech}
    </span>
  )
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = getProjectById(id)
  const images = project?.images ?? []

  const [activeImage, setActiveImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // 다른 프로젝트로 이동하면 슬라이드/라이트박스 상태를 초기화한다
  useEffect(() => {
    setActiveImage(0)
    setLightboxOpen(false)
  }, [id])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      else if (e.key === 'ArrowLeft') setActiveImage((i) => (i - 1 + images.length) % images.length)
      else if (e.key === 'ArrowRight') setActiveImage((i) => (i + 1) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, images.length])

  if (!project) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', background: '#F5F2EE', fontFamily: 'Noto Serif KR, serif', color: '#5a5855' }}>
        <p>존재하지 않는 프로젝트입니다.</p>
        <Link to="/projects" style={{ color: '#11677a' }}>← 컬렉션으로 돌아가기</Link>
      </div>
    )
  }

  const index = projects.findIndex((p) => p.id === project.id)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const hasMultiple = images.length > 1

  const goPrevImage = () => setActiveImage((i) => (i - 1 + images.length) % images.length)
  const goNextImage = () => setActiveImage((i) => (i + 1) % images.length)

  return (
    <div className="detail-root" style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#F5F2EE', fontFamily: 'Noto Serif KR, serif', position: 'relative' }}>

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
        <Link
          to="/projects"
          className="close-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', color: 'rgba(90,88,85,0.7)', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.15em', fontWeight: 500, textTransform: 'uppercase' }}
        >
          <span aria-hidden="true" style={{ fontSize: '14px', lineHeight: 1 }}>←</span>
          <span className="nav-label">Return to Collection</span>
        </Link>

        <div className="nav-brand" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', lineHeight: 1.2, letterSpacing: '0.1em', color: '#2a2927', textTransform: 'uppercase' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>WANG</Link>
        </div>

        <div className="nav-label" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', letterSpacing: '0.1em', color: '#5a5855', textTransform: 'uppercase' }}>
          {project.accession}
        </div>
      </nav>

      {/* ── Main: hero + sidebar grid ── */}
      <main style={{
        position: 'absolute', top: '5.4rem', left: 0, right: 0, bottom: 0,
        display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 450px',
        zIndex: 10,
      }} className="detail-main">

        {/* Hero image slider */}
        <section className="detail-hero" style={{
          position: 'relative', height: '100%', overflow: 'hidden',
          background: '#E5E4E1', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '4vw',
        }}>
          <img
            src={images[activeImage]}
            alt={`${project.nameKr} 화면 ${activeImage + 1}`}
            onClick={() => setLightboxOpen(true)}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', boxShadow: '0 40px 100px rgba(0,0,0,0.12)', borderRadius: '2px', cursor: 'zoom-in' }}
          />

          <span className="hero-zoom-hint">
            <span aria-hidden="true">⤢</span> 클릭하여 확대
          </span>

          {hasMultiple && (
            <>
              <button type="button" className="hero-arrow hero-arrow-prev" onClick={goPrevImage} aria-label="이전 화면"><ChevronIcon direction="left" /></button>
              <button type="button" className="hero-arrow hero-arrow-next" onClick={goNextImage} aria-label="다음 화면"><ChevronIcon direction="right" /></button>

              <div className="hero-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`hero-dot${i === activeImage ? ' active' : ''}`}
                    onClick={() => setActiveImage(i)}
                    aria-label={`${i + 1}번 화면 보기`}
                  />
                ))}
              </div>

              <span className="hero-counter">{String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
            </>
          )}
        </section>

        {/* Sidebar */}
        <aside className="detail-sidebar" style={{
          height: '100%', overflowY: 'auto',
          borderLeft: '0.5px solid rgba(111,121,124,0.2)',
          padding: '3.5vw 2.5vw', display: 'flex', flexDirection: 'column', gap: '2.75rem',
        }}>
          {/* Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9cb2af', borderBottom: '0.5px solid rgba(111,121,124,0.2)', paddingBottom: '0.75rem' }}>Identity</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontStyle: 'italic', lineHeight: 1.15, fontWeight: 400, color: '#2a2927' }}>
              {project.nameKr}
            </h1>
            <p style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '13px', lineHeight: 1.7, color: '#5a5855' }}>
              {project.nameEn}<br />
              {project.client} · {project.tech}
            </p>
          </div>

          {/* Details & Dimensions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9cb2af', borderBottom: '0.5px solid rgba(111,121,124,0.2)', paddingBottom: '0.75rem' }}>Details</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { key: '발주처', value: project.client },
                { key: '기간', value: project.period },
                { key: '역할', value: project.role, emphasize: true },
                { key: '기술', value: project.tech, tag: true },
              ].map(({ key, value, tag, emphasize }) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9cb2af' }}>{key}</span>
                  {tag ? (
                    <TechTag tech={value} />
                  ) : (
                    <span style={{
                      fontFamily: 'Noto Serif KR, serif', fontSize: '13px', letterSpacing: '0.02em',
                      color: '#2a2927', fontWeight: emphasize ? 600 : 400,
                    }}>
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Problem */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9cb2af', borderBottom: '0.5px solid rgba(111,121,124,0.2)', paddingBottom: '0.75rem' }}>Problem</span>
            <p style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '15px', fontWeight: 500, lineHeight: 1.7, color: '#2a2927' }}>
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9cb2af', borderBottom: '0.5px solid rgba(111,121,124,0.2)', paddingBottom: '0.75rem' }}>Solution</span>
            <p style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '14px', lineHeight: 1.75, color: '#5a5855' }}>
              {project.solution}
            </p>
          </div>

          {/* Result */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9cb2af', borderBottom: '0.5px solid rgba(111,121,124,0.2)', paddingBottom: '0.75rem' }}>Result</span>
            <p style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '14px', lineHeight: 1.75, color: '#5a5855' }}>
              {project.result}
            </p>
          </div>

          {/* Takeaway */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9cb2af', borderBottom: '0.5px solid rgba(111,121,124,0.2)', paddingBottom: '0.75rem' }}>Takeaway</span>
            <p style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '15px', fontWeight: 500, lineHeight: 1.7, color: '#2a2927' }}>
              {project.learning}
            </p>
          </div>

          {/* Footer: accession + prev/next */}
          <div style={{ marginTop: 'auto', paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9cb2af' }}>Accession Number</span>
              <span style={{ fontFamily: 'Noto Serif KR, serif', fontSize: '13px', letterSpacing: '0.02em', color: '#2a2927' }}>{project.accession}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.5px solid rgba(111,121,124,0.2)', paddingTop: '1.25rem' }}>
              <Link to={`/projects/${prev.id}`} className="detail-nav-link" style={{ textDecoration: 'none', color: '#5a5855', fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                ← {prev.nameEn}
              </Link>
              <Link to={`/projects/${next.id}`} className="detail-nav-link" style={{ textDecoration: 'none', color: '#5a5855', fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'right' }}>
                {next.nameEn} →
              </Link>
            </div>
          </div>
        </aside>
      </main>

      {/* ── Lightbox ──
          닫기/화살표/카운터는 backdrop-filter가 걸린 .lightbox의 자식이 아니라
          detail-root의 형제로 렌더링한다. filter/backdrop-filter가 있는 조상은
          position: fixed 자식의 containing block을 바꿔버려서, .lightbox 안에 두면
          "fixed"가 실제로는 스크롤되는 .lightbox 박스 기준으로 계산되어 버린다. */}
      {lightboxOpen && (
        <>
          <div className="lightbox" onClick={() => setLightboxOpen(false)}>
            <img
              src={images[activeImage]}
              alt={`${project.nameKr} 확대 이미지 ${activeImage + 1}`}
              className="lightbox-img"
            />
          </div>

          <button type="button" className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="닫기">×</button>

          {hasMultiple && (
            <>
              <button type="button" className="lightbox-arrow lightbox-arrow-prev" onClick={goPrevImage} aria-label="이전 화면"><ChevronIcon direction="left" /></button>
              <button type="button" className="lightbox-arrow lightbox-arrow-next" onClick={goNextImage} aria-label="다음 화면"><ChevronIcon direction="right" /></button>
              <span className="lightbox-counter">{activeImage + 1} / {images.length}</span>
            </>
          )}
        </>
      )}

      {/* CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500&display=swap');

        .close-btn { transition: opacity 0.3s ease; }
        .close-btn:hover { opacity: 0.6; }

        .detail-nav-link { transition: color 0.3s ease; }
        .detail-nav-link:hover { color: #11677a !important; }

        .detail-sidebar::-webkit-scrollbar { width: 3px; }
        .detail-sidebar::-webkit-scrollbar-track { background: transparent; }
        .detail-sidebar::-webkit-scrollbar-thumb { background: rgba(111,121,124,0.3); }

        /* Hero slider controls */
        .hero-zoom-hint {
          position: absolute; bottom: 1.5rem; right: 1.5rem;
          display: flex; align-items: center; gap: 0.4rem;
          font-family: 'Inter', sans-serif; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #5a5855; background: rgba(245,242,238,0.85); backdrop-filter: blur(12px);
          padding: 0.4rem 0.8rem; border-radius: 999px; border: 0.5px solid rgba(111,121,124,0.2);
          opacity: 0; transition: opacity 0.3s ease; pointer-events: none;
        }
        .detail-hero:hover .hero-zoom-hint { opacity: 1; }

        .hero-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px; border-radius: 50%; border: 0.5px solid rgba(111,121,124,0.25);
          background: rgba(245,242,238,0.85); backdrop-filter: blur(12px);
          color: #2a2927; font-size: 22px; line-height: 1; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s ease, opacity 0.3s ease; opacity: 0;
        }
        .detail-hero:hover .hero-arrow { opacity: 1; }
        .hero-arrow:hover { background: rgba(245,242,238,1); }
        .hero-arrow-prev { left: 1.5rem; }
        .hero-arrow-next { right: 1.5rem; }

        .hero-dots {
          position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
          display: flex; gap: 0.5rem;
        }
        .hero-dot {
          width: 6px; height: 6px; border-radius: 50%; border: none; padding: 0;
          background: rgba(90,88,85,0.3); cursor: pointer; transition: background 0.3s ease, transform 0.3s ease;
        }
        .hero-dot.active { background: #65acc1; transform: scale(1.3); }

        .hero-counter {
          position: absolute; top: 1.5rem; right: 1.5rem;
          font-family: 'Inter', sans-serif; font-size: 10px; letter-spacing: 0.1em; color: #5a5855;
          background: rgba(245,242,238,0.85); backdrop-filter: blur(12px);
          padding: 0.3rem 0.7rem; border-radius: 999px; border: 0.5px solid rgba(111,121,124,0.2);
        }

        /* Lightbox — fixed 85vw width, height follows aspect ratio, scrolls if taller than viewport */
        .lightbox {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(18,18,18,0.92); backdrop-filter: blur(4px);
          overflow-y: auto;
          padding: 8vh 0;
          box-sizing: border-box;
          animation: lightbox-fade-in 0.2s ease;
        }
        @keyframes lightbox-fade-in { from { opacity: 0; } to { opacity: 1; } }

        .lightbox-img {
          display: block;
          width: 85vw; max-width: 85vw; height: auto;
          margin: 0 auto;
          box-shadow: 0 20px 80px rgba(0,0,0,0.5); cursor: zoom-out;
        }

        .lightbox-close {
          position: fixed; top: 2rem; right: 2rem; z-index: 210;
          width: 40px; height: 40px; border-radius: 50%; border: 0.5px solid rgba(255,255,255,0.25);
          background: rgba(18,18,18,0.4); color: #f0ebe5; font-size: 26px; line-height: 1; cursor: pointer;
          display: flex; align-items: center; justify-content: center; transition: background 0.3s ease;
        }
        .lightbox-close:hover { background: rgba(255,255,255,0.1); }

        .lightbox-arrow {
          position: fixed; top: 50%; transform: translateY(-50%); z-index: 210;
          width: 52px; height: 52px; border-radius: 50%; border: 0.5px solid rgba(255,255,255,0.25);
          background: rgba(18,18,18,0.4); color: #f0ebe5; font-size: 26px; line-height: 1; cursor: pointer;
          display: flex; align-items: center; justify-content: center; transition: background 0.3s ease;
        }
        .lightbox-arrow:hover { background: rgba(255,255,255,0.1); }
        .lightbox-arrow-prev { left: 2rem; }
        .lightbox-arrow-next { right: 2rem; }

        .lightbox-counter {
          position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); z-index: 210;
          font-family: 'Inter', sans-serif; font-size: 11px; letter-spacing: 0.15em; color: rgba(240,235,229,0.8);
          background: rgba(18,18,18,0.4); padding: 0.3rem 0.9rem; border-radius: 999px;
        }

        @media (max-width: 1000px) {
          .detail-root { height: auto !important; min-height: 100vh; overflow: visible !important; }
          .detail-main { grid-template-columns: 1fr !important; overflow-y: visible; height: auto !important; position: static !important; padding-top: 5.4rem; }
          .detail-sidebar { border-left: none !important; border-top: 0.5px solid rgba(111,121,124,0.2); height: auto !important; overflow-y: visible !important; }
          .hero-arrow, .hero-zoom-hint { opacity: 1; }
        }

        @media (max-width: 640px) {
          .nav-label { display: none !important; }
          .nav-brand { font-size: 22px !important; }
          .lightbox-arrow { width: 40px; height: 40px; font-size: 20px; }
        }
      `}</style>
    </div>
  )
}
