import { useEffect, useRef } from 'react'

/**
 * SubtleConstellationCanvas
 * Natural, mathematical network of nodes and connecting lines.
 * Strictly flat colors (solid Teal #159A9C and Warm Gold #F2B84B) without neon radial glows or AI gradients.
 */
export default function SubtleConstellationCanvas() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    container.appendChild(canvas)

    let width = (canvas.width = container.clientWidth)
    let height = (canvas.height = container.clientHeight)

    const isMobile = window.innerWidth < 768
    const nodeCount = isMobile ? 32 : 52
    const maxConnectionDist = isMobile ? 120 : 150

    // Solid palette tokens
    const TEAL = 'rgba(21, 154, 156, '
    const GOLD = 'rgba(242, 184, 75, '
    const WHITE = 'rgba(230, 238, 248, '

    const nodes = []
    for (let i = 0; i < nodeCount; i++) {
      const type = Math.random() < 0.45 ? 'teal' : Math.random() < 0.75 ? 'gold' : 'white'
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.1,
        y: (Math.random() - 0.5) * height * 1.1,
        z: (Math.random() - 0.5) * 350,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        vz: (Math.random() - 0.5) * 0.16,
        radius: Math.random() * 1.4 + 1.6,
        type,
      })
    }

    // Mouse parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 30
      mouse.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    const onResize = () => {
      if (!container) return
      width = canvas.width = container.clientWidth
      height = canvas.height = container.clientHeight
    }
    window.addEventListener('resize', onResize)

    let animId
    let angle = 0

    const render = () => {
      animId = requestAnimationFrame(render)

      mouse.x += (mouse.targetX - mouse.x) * 0.03
      mouse.y += (mouse.targetY - mouse.y) * 0.03

      angle += 0.0008
      const cosA = Math.cos(angle)
      const sinA = Math.sin(angle)

      ctx.clearRect(0, 0, width, height)

      const fov = 480
      const centerX = width / 2 + mouse.x
      const centerY = height / 2 + mouse.y

      const projected = []
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i]

        n.x += n.vx
        n.y += n.vy
        n.z += n.vz

        const boundX = (width * 1.1) / 2
        const boundY = (height * 1.1) / 2
        const boundZ = 200

        if (Math.abs(n.x) > boundX) n.vx *= -1
        if (Math.abs(n.y) > boundY) n.vy *= -1
        if (Math.abs(n.z) > boundZ) n.vz *= -1

        const rx = n.x * cosA - n.z * sinA
        const rz = n.z * cosA + n.x * sinA + 520

        const scale = fov / Math.max(rz, 100)
        const sx = centerX + rx * scale
        const sy = centerY + n.y * scale
        const r = Math.max(n.radius * scale * 1.2, 1.0)
        const alpha = Math.min(Math.max((rz - 220) / 500, 0.25), 0.75)

        projected.push({ sx, sy, r, alpha, type: n.type })
      }

      // Draw crisp, thin connecting lines
      for (let i = 0; i < nodeCount; i++) {
        const p1 = projected[i]
        for (let j = i + 1; j < nodeCount; j++) {
          const p2 = projected[j]
          const dx = p1.sx - p2.sx
          const dy = p1.sy - p2.sy
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxConnectionDist) {
            const lineAlpha = (1 - dist / maxConnectionDist) * 0.18
            ctx.beginPath()
            ctx.moveTo(p1.sx, p1.sy)
            ctx.lineTo(p2.sx, p2.sy)
            ctx.strokeStyle = `${TEAL}${lineAlpha})`
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        }
      }

      // Draw clean, flat circular dots
      for (let i = 0; i < nodeCount; i++) {
        const p = projected[i]
        const colorPrefix = p.type === 'teal' ? TEAL : p.type === 'gold' ? GOLD : WHITE

        ctx.beginPath()
        ctx.arc(p.sx, p.sy, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${colorPrefix}${p.alpha * 0.85})`
        ctx.fill()
      }
    }

    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      if (container && canvas) {
        container.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  )
}
