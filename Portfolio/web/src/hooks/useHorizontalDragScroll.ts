import { useEffect, type RefObject } from 'react'

/**
 * 가로 스크롤 갤러리에 휠 스크롤 → horizontal 변환 + 마우스 드래그 스크롤을 붙인다.
 * 드래그 중인 클릭은 무시해, 카드가 <a>/<Link>여도 드래그 후 실수로 이동하지 않는다.
 */
export function useHorizontalDragScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        el.scrollLeft += e.deltaY * 2
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })

    let isDragging = false
    let didDrag = false
    let startX = 0
    let startScrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      // 네이티브 링크/이미지 드래그가 mousemove 스트림을 가로채는 것을 막는다.
      e.preventDefault()
      isDragging = true
      didDrag = false
      startX = e.pageX
      startScrollLeft = el.scrollLeft
      el.style.cursor = 'grabbing'
      el.style.userSelect = 'none'
    }
    const onDragStart = (e: DragEvent) => e.preventDefault()
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const walk = e.pageX - startX
      if (Math.abs(walk) > 5) didDrag = true
      el.scrollLeft = startScrollLeft - walk
    }
    const endDrag = () => {
      if (!isDragging) return
      isDragging = false
      el.style.cursor = 'grab'
      el.style.userSelect = ''
    }
    const onClickCapture = (e: MouseEvent) => {
      if (didDrag) {
        e.preventDefault()
        e.stopPropagation()
        didDrag = false
      }
    }

    el.style.cursor = 'grab'
    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', endDrag)
    el.addEventListener('mouseleave', endDrag)
    el.addEventListener('click', onClickCapture, { capture: true })
    el.addEventListener('dragstart', onDragStart)

    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', endDrag)
      el.removeEventListener('mouseleave', endDrag)
      el.removeEventListener('click', onClickCapture, { capture: true })
      el.removeEventListener('dragstart', onDragStart)
    }
  }, [ref])
}
