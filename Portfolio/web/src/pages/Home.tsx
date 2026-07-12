import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ── Stitch Home_Sample_01.html 과 동일한 raw WebGL 셰이더 ── */
const VERT_SRC = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`

const FRAG_SRC = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
          -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amplitude * snoise(st);
    st *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  float aspect = u_resolution.x / u_resolution.y;
  st.x *= aspect;

  float time = u_time * 0.05;

  vec2 q = vec2(0.);
  q.x = fbm(st + vec2(time));
  q.y = fbm(st + vec2(1.0));

  vec2 r = vec2(0.);
  r.x = fbm(st + 1.0*q + vec2(1.7,9.2) + 0.15*time);
  r.y = fbm(st + 1.0*q + vec2(8.3,2.8) + 0.126*time);

  float f = fbm(st + r);

  vec3 mistBlue = vec3(0.878, 0.918, 0.925); // #e0eaec
  vec3 skyBlue  = vec3(0.627, 0.847, 0.937); // #a0d8ef
  vec3 grayBlue = vec3(0.612, 0.698, 0.686); // #9cb2af
  vec3 ivory    = vec3(0.941, 0.922, 0.898); // #f0ebe5

  vec3 color = mix(ivory, mistBlue, clamp((f*f)*4.0, 0.0, 1.0));
  color = mix(color, skyBlue,  clamp(length(q), 0.0, 1.0) * 0.6);
  color = mix(color, grayBlue, clamp(length(r.x), 0.0, 1.0) * 0.4);

  float grain = fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453) * 0.02;
  color += grain;

  gl_FragColor = vec4(color, 1.0);
}`

type NavItem = { kr: string; en: string; to: string; isRoute: boolean }
const NAV_ITEMS: NavItem[] = [
  { kr: '회사 프로젝트', en: 'Company Projects', to: '/projects', isRoute: true  },
  { kr: '개인 프로젝트', en: 'Personal Projects', to: '#personal', isRoute: false },
  { kr: '소개',         en: 'About',             to: '#about',   isRoute: false  },
]

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    function syncSize() {
      const w = canvas!.clientWidth  || 1280
      const h = canvas!.clientHeight || 720
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width  = w
        canvas!.height = h
      }
    }
    const ro = new ResizeObserver(syncSize)
    ro.observe(canvas)
    syncSize()

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext
    if (!gl) return

    function makeShader(type: number, src: string) {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, makeShader(gl.VERTEX_SHADER, VERT_SRC))
    gl.attachShader(prog, makeShader(gl.FRAGMENT_SHADER, FRAG_SRC))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, 'a_position')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uTime  = gl.getUniformLocation(prog, 'u_time')
    const uRes   = gl.getUniformLocation(prog, 'u_resolution')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 }
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width && rect.height) {
        mouse.x = (e.clientX - rect.left) / rect.width  * canvas.width
        mouse.y = (1 - (e.clientY - rect.top) / rect.height) * canvas.height
      }
    }
    window.addEventListener('mousemove', onMouseMove)

    let raf: number
    function render(t: number) {
      syncSize()
      gl.viewport(0, 0, canvas!.width, canvas!.height)
      if (uTime)  gl.uniform1f(uTime,  t * 0.001)
      if (uRes)   gl.uniform2f(uRes,   canvas!.width, canvas!.height)
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      ro.disconnect()
    }
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>

      {/* Top margin band */}
      <div style={{ width: '100%', height: '18vh', flexShrink: 0, zIndex: 10, backdropFilter: 'blur(12px)', background: 'rgb(245, 242, 238)' }} />

      {/* Middle canvas — fallback gradient + WebGL on top at opacity 0.6 multiply */}
      <div style={{ flexGrow: 1, position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #f0ebe5 0%, #e0eaec 45%, #a0d8ef 100%)' }}>
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', opacity: 0.6, mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Bottom margin band */}
      <div style={{ width: '100%', height: '18vh', flexShrink: 0, zIndex: 10, backdropFilter: 'blur(12px)', background: 'rgb(245, 242, 238)' }} />

      {/* Content layer — absolute over everything */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 20 }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'auto' }}>

          {/* 1. Left Navigation */}
          <nav className="nav-group" style={{ position: 'absolute', left: '14vw', top: '22vh' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2.8rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_ITEMS.map(({ kr, en, to, isRoute }) => (
                <li key={kr} className="nav-item" style={{ width: 'fit-content', cursor: 'pointer' }}>
                  {isRoute ? (
                    <Link to={to} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span className="nav-underline" style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif', fontWeight: 400, fontSize: '1.5rem', letterSpacing: '0.3em', color: '#4f6265' }}>{kr}</span>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.78rem', color: '#9cb2af' }}>{en}</span>
                    </Link>
                  ) : (
                    <a href={to} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span className="nav-underline" style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif', fontWeight: 400, fontSize: '1.5rem', letterSpacing: '0.3em', color: '#4f6265' }}>{kr}</span>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.78rem', color: '#9cb2af' }}>{en}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* 2. Right-bottom info block */}
          <div style={{ position: 'absolute', right: '18vw', bottom: '22vh', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '1.5rem', color: '#4f6265' }}>Frontend Developer</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '1.3rem',  color: '#4f6265' }}>Wang Cheolhwan</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0.5rem' }}>
              <span style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif', fontWeight: 300, fontSize: '1.3rem',   letterSpacing: '0.4em',  color: '#6f7f82' }}>왕 철 환</span>
              <span style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif', fontWeight: 300, fontSize: '0.72rem', letterSpacing: '0.18em', color: 'rgb(49 107 99);', marginTop: '0.25rem' }}>React 프론트엔드 개발자</span>
            </div>
          </div>

          {/* 3. Footer */}
          <div style={{ position: 'absolute', left: '8vw', bottom: '4.5vh' }}>
            <span style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif', fontWeight: 300, fontSize: '0.75rem', letterSpacing: '0.2em', color: '#9cb2af' }}>2026년 · 개인 포트폴리오</span>
          </div>

        </div>
      </div>

      {/* Stitch-identical CSS */}
      <style>{`
        .nav-group:hover .nav-item { opacity: 0.3; }
        .nav-group .nav-item:hover { opacity: 1; }
        .nav-item { transition: opacity 0.5s; }
        .nav-underline { position: relative; }
        .nav-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #65acc1;
          transition: width 0.3s ease-out;
        }
        .nav-item:hover .nav-underline::after { width: 100%; }
      `}</style>
    </div>
  )
}
