'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  r: number
  shimmer: number
  shimmerSpeed: number
}

type Orb = {
  x: number
  y: number
  r: number
  hue: number
  phase: number
  speed: number
}

function flowAngle(x: number, y: number, t: number) {
  return (
    Math.sin(x * 0.0024 + t * 0.00022) * 1.15 +
    Math.cos(y * 0.0018 - t * 0.00018) * 0.85 +
    Math.sin((x + y) * 0.0011 + t * 0.00012) * 0.45
  )
}

export default function HeroAetherField() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const hero = wrap.closest('.hero') as HTMLElement | null
    const scene = hero?.querySelector('.hero-grid') as HTMLElement | null

    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }
    const particles: Particle[] = []
    const orbs: Orb[] = []

    let width = 0
    let height = 0
    let dpr = 1
    let frame = 0
    let visible = true
    let lastTime = performance.now()

    const resize = () => {
      const bounds = (hero ?? wrap).getBoundingClientRect()
      width = Math.max(1, bounds.width)
      height = Math.max(1, bounds.height)
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const seed = () => {
      const count = width < 720 ? 38 : 72
      particles.length = 0
      orbs.length = 0

      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.35 + Math.random() * 0.65,
          vx: 0,
          vy: 0,
          r: 0.6 + Math.random() * 1.8,
          shimmer: Math.random() * Math.PI * 2,
          shimmerSpeed: 0.008 + Math.random() * 0.018,
        })
      }

      orbs.push(
        { x: width * 0.72, y: height * 0.38, r: width * 0.22, hue: 214, phase: 0.2, speed: 0.00012 },
        { x: width * 0.28, y: height * 0.62, r: width * 0.18, hue: 199, phase: 1.4, speed: 0.00009 },
        { x: width * 0.55, y: height * 0.18, r: width * 0.14, hue: 220, phase: 2.6, speed: 0.00008 },
      )
    }

    const draw = (now: number) => {
      if (!visible) return

      const dt = Math.min(now - lastTime, 32)
      lastTime = now
      const t = now

      mouse.x += (mouse.tx - mouse.x) * 0.035
      mouse.y += (mouse.ty - mouse.y) * 0.035

      ctx.clearRect(0, 0, width, height)

      orbs.forEach((orb, index) => {
        orb.phase += orb.speed * dt
        const ox = orb.x + Math.cos(t * 0.00018 + orb.phase) * 36
        const oy = orb.y + Math.sin(t * 0.00014 + orb.phase * 1.2) * 28
        const radius = orb.r * (0.88 + Math.sin(orb.phase + index) * 0.08)
        const glow = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius)
        glow.addColorStop(0, `hsla(${orb.hue}, 92%, 72%, 0.16)`)
        glow.addColorStop(0.45, `hsla(${orb.hue}, 88%, 68%, 0.06)`)
        glow.addColorStop(1, 'hsla(214, 90%, 70%, 0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(ox, oy, radius, 0, Math.PI * 2)
        ctx.fill()
      })

      const mx = mouse.x * width
      const my = mouse.y * height

      particles.forEach((p) => {
        const angle = flowAngle(p.x, p.y, t)
        const force = 0.045 * p.z
        p.vx += Math.cos(angle) * force
        p.vy += Math.sin(angle) * force - 0.012 * p.z

        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.hypot(dx, dy) || 1
        if (dist < 160) {
          const pull = ((160 - dist) / 160) * 0.045
          p.vx += (dx / dist) * pull
          p.vy += (dy / dist) * pull
        }

        p.vx *= 0.96
        p.vy *= 0.96
        p.x += p.vx * (dt * 0.06)
        p.y += p.vy * (dt * 0.06)
        p.shimmer += p.shimmerSpeed * dt

        if (p.y < -12) p.y = height + 8
        if (p.y > height + 12) p.y = -8
        if (p.x < -12) p.x = width + 8
        if (p.x > width + 12) p.x = -8
      })

      ctx.lineWidth = 0.7
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]
        if (!a) continue
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          if (!b) continue
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = dx * dx + dy * dy
          if (dist > 6400) continue
          const alpha = (1 - dist / 6400) * 0.11 * Math.min(a.z, b.z)
          ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      particles.forEach((p) => {
        const pulse = 0.45 + Math.sin(p.shimmer) * 0.55
        const alpha = (0.18 + pulse * 0.42) * p.z
        const radius = p.r * (0.7 + pulse * 0.55)
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 4.2)
        glow.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
        glow.addColorStop(0.35, `rgba(147, 197, 253, ${alpha * 0.45})`)
        glow.addColorStop(1, 'rgba(37, 99, 235, 0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius * 4.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(255, 255, 255, ${0.35 + pulse * 0.45})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fill()
      })

      if (scene) {
        const shiftX = Math.sin(t * 0.00022) * 8 + (mouse.x - 0.5) * 14
        const shiftY = Math.cos(t * 0.00018) * 6 + (mouse.y - 0.5) * 10
        scene.style.transform = `translate3d(${shiftX.toFixed(2)}px, ${shiftY.toFixed(2)}px, 0)`
      }

      frame = window.requestAnimationFrame(draw)
    }

    const onPointerMove = (event: PointerEvent) => {
      const bounds = (hero ?? wrap).getBoundingClientRect()
      mouse.tx = (event.clientX - bounds.left) / bounds.width
      mouse.ty = (event.clientY - bounds.top) / bounds.height
    }

    const onPointerLeave = () => {
      mouse.tx = 0.5
      mouse.ty = 0.5
    }

    resize()
    seed()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      seed()
    })
    resizeObserver.observe(hero ?? wrap)

    const visibility = new IntersectionObserver(
      ([entry]) => {
        const next = entry.isIntersecting
        if (next && !visible) {
          visible = true
          lastTime = performance.now()
          frame = window.requestAnimationFrame(draw)
        }
        visible = next
        if (!visible) window.cancelAnimationFrame(frame)
      },
      { threshold: 0.05 },
    )
    visibility.observe(hero ?? wrap)

    hero?.addEventListener('pointermove', onPointerMove)
    hero?.addEventListener('pointerleave', onPointerLeave)
    frame = window.requestAnimationFrame(draw)

    return () => {
      visible = false
      window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibility.disconnect()
      hero?.removeEventListener('pointermove', onPointerMove)
      hero?.removeEventListener('pointerleave', onPointerLeave)
      if (scene) scene.style.transform = ''
    }
  }, [])

  return (
    <div className="hero-aether" ref={wrapRef} aria-hidden="true">
      <div className="hero-aether-veil" />
      <div className="hero-aether-shimmer" />
      <canvas ref={canvasRef} className="hero-aether-canvas" />
    </div>
  )
}
