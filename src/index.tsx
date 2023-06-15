import { QuarkElement, customElement } from "quarkc"
import style from "./index.less?inline"

declare global {
  interface HTMLElementTagNameMap {
    "quark-element-demo-celebrate": MyCeleBrate;
  }
}

@customElement({ tag: "quark-element-demo-celebrate", style })
export default class MyCeleBrate extends QuarkElement {

  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  h1: HTMLElement
  particles = []
  rect: DOMRect
  paused = false

  handleClick = () => {
    this.paused = !this.paused
  }


  componentDidMount() {
    this.ctx = this.canvas.getContext('2d')
    this.rect = this.h1.getBoundingClientRect()
    setInterval(this.tick, 16)
  }

  tick = () => {
    if (!this.paused) {
      this.createParticle()
      this.destroyParticle()
      this.renderParticles()
    }
  }

  randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  createParticle() {
    if (this.particles.length < 100) {
      this.particles.push({
        x: 25,
        y: 20,
        vx: -1 + Math.random() * 2,
        vy: -2 + Math.random() * -5,
        r: 2 + 2 * Math.random(),
        opacity: 1,
        color: this.randomColor()
      })
    }
  }

  renderParticles() {
    this.ctx.save()
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    this.ctx.translate(this.rect.left, this.rect.top)
    this.ctx.rotate(Math.PI / 6)
    this.particles.forEach((particle) => {
      particle.opacity -= 0.01
      if (particle.opacity < 0) particle.opacity = 0
      particle.vy += 0.03
      particle.x += particle.vx
      particle.y += particle.vy
      this.ctx.fillStyle = particle.color
      this.ctx.globalAlpha = particle.opacity
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.r, 0, 2 * Math.PI);
      this.ctx.fill();
    })
    this.ctx.restore()
  }

  destroyParticle() {
    for (let i = 0, len = this.particles.length; i < len; i++) {
      const particle = this.particles[i]
      if (!particle.opacity) {
        this.particles.splice(i, 1)
        i--
        len--
      }
    }
  }

  render() {
    return (
      <>
        <h1 ref={e => this.h1 = e} onClick={this.handleClick}>🎉 Hello Quarkc!</h1>
        <canvas
          ref={e => this.canvas = e}
          width={window.innerWidth}
          height={window.innerHeight}>
        </canvas>
      </>
    );
  }
}
