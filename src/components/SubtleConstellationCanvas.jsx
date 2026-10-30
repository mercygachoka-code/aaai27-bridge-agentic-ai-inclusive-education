import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * SubtleConstellationCanvas
 * A gentle, benign 3D network of drifting nodes with soft interconnections.
 * Represents multi-agent systems and bridges between teachers, AI, and inclusive learners.
 * Calibrated with low opacity and slow orbital rotation so it stays gentle and non-distracting.
 */
export default function SubtleConstellationCanvas() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene & Camera setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 85

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Particle nodes count & positions
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 38 : 64
    const maxConnectionDistance = isMobile ? 18 : 22

    const positions = new Float32Array(particleCount * 3)
    const velocities = []
    const colors = new Float32Array(particleCount * 3)

    // Palette: Deep Indigo, Teal (#159A9C), and Warm Gold (#F2B84B)
    const colorTeal = new THREE.Color('#159A9C')
    const colorGold = new THREE.Color('#F2B84B')
    const colorSoftWhite = new THREE.Color('#CBD5E1')

    const spreadX = 80
    const spreadY = 50
    const spreadZ = 40

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * spreadX
      positions[i3 + 1] = (Math.random() - 0.5) * spreadY
      positions[i3 + 2] = (Math.random() - 0.5) * spreadZ

      // Very slow, peaceful drifting velocity
      velocities.push({
        x: (Math.random() - 0.5) * 0.022,
        y: (Math.random() - 0.5) * 0.022,
        z: (Math.random() - 0.5) * 0.015,
      })

      // Assign subtle color weight
      const rand = Math.random()
      let c = colorSoftWhite
      if (rand < 0.45) c = colorTeal
      else if (rand < 0.75) c = colorGold

      colors[i3] = c.r
      colors[i3 + 1] = c.g
      colors[i3 + 2] = c.b
    }

    // Nodes geometry
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    )

    // Subtle circular blurred texture for soft nodes
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.7)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 32, 32)
    const texture = new THREE.CanvasTexture(canvas)

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 3.5 : 4.5,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const pointCloud = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(pointCloud)

    // Connecting lines geometry & material
    const maxLines = (particleCount * (particleCount - 1)) / 2
    const linePositions = new Float32Array(maxLines * 6)
    const lineColors = new Float32Array(maxLines * 6)

    const linesGeometry = new THREE.BufferGeometry()
    linesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    )
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const lineMesh = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(lineMesh)

    // Mouse parallax tracking (damped & gentle)
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      mouse.targetX = x * 3.5
      mouse.targetY = y * 2.5
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })

    // Resize handler
    const onResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('resize', onResize)

    // Animation Loop
    let animationFrameId
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const delta = clock.getDelta()
      const posAttr = particlesGeometry.attributes.position
      const p = posAttr.array

      // Smooth camera parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.03
      mouse.y += (mouse.targetY - mouse.y) * 0.03
      camera.position.x = mouse.x
      camera.position.y = mouse.y
      camera.lookAt(0, 0, 0)

      // Very slow global rotation
      pointCloud.rotation.y += 0.0006
      lineMesh.rotation.y = pointCloud.rotation.y

      // Update particle positions gently
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const v = velocities[i]

        p[i3] += v.x
        p[i3 + 1] += v.y
        p[i3 + 2] += v.z

        // Soft rebound inside boundary box
        if (Math.abs(p[i3]) > spreadX / 2) v.x *= -1
        if (Math.abs(p[i3 + 1]) > spreadY / 2) v.y *= -1
        if (Math.abs(p[i3 + 2]) > spreadZ / 2) v.z *= -1
      }
      posAttr.needsUpdate = true

      // Update connecting lines based on distance
      let vertexCount = 0
      let colorCount = 0

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const i3 = i * 3
          const j3 = j * 3

          const dx = p[i3] - p[j3]
          const dy = p[i3 + 1] - p[j3 + 1]
          const dz = p[i3 + 2] - p[j3 + 2]
          const distSq = dx * dx + dy * dy + dz * dz

          if (distSq < maxConnectionDistance * maxConnectionDistance) {
            const dist = Math.sqrt(distSq)
            const alpha = 1.0 - dist / maxConnectionDistance

            linePositions[vertexCount++] = p[i3]
            linePositions[vertexCount++] = p[i3 + 1]
            linePositions[vertexCount++] = p[i3 + 2]

            linePositions[vertexCount++] = p[j3]
            linePositions[vertexCount++] = p[j3 + 1]
            linePositions[vertexCount++] = p[j3 + 2]

            const r = (colors[i3] + colors[j3]) * 0.5 * alpha * 0.5
            const g = (colors[i3 + 1] + colors[j3 + 1]) * 0.5 * alpha * 0.6
            const b = (colors[i3 + 2] + colors[j3 + 2]) * 0.5 * alpha * 0.8

            lineColors[colorCount++] = r
            lineColors[colorCount++] = g
            lineColors[colorCount++] = b

            lineColors[colorCount++] = r
            lineColors[colorCount++] = g
            lineColors[colorCount++] = b
          }
        }
      }

      linesGeometry.setDrawRange(0, vertexCount / 3)
      linesGeometry.attributes.position.needsUpdate = true
      linesGeometry.attributes.color.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      linesGeometry.dispose()
      linesMaterial.dispose()
      texture.dispose()
      renderer.dispose()
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
