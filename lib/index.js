var d = Object.defineProperty;
var f = (i, e, t) => e in i ? d(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var r = (i, e, t) => (f(i, typeof e != "symbol" ? e + "" : e, t), t);
import { customElement as p, QuarkElement as h } from "quarkc";
function x(i, e, t, s) {
  var a = arguments.length, n = a < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(i, e, t, s);
  else
    for (var c = i.length - 1; c >= 0; c--)
      (o = i[c]) && (n = (a < 3 ? o(n) : a > 3 ? o(e, t, n) : o(e, t)) || n);
  return a > 3 && n && Object.defineProperty(e, t, n), n;
}
const u = `h1{text-align:center;position:absolute;left:50%;margin-left:-148px;bottom:50px;cursor:pointer;white-space:nowrap}
`;
let l = class extends h {
  constructor() {
    super(...arguments);
    r(this, "ctx");
    r(this, "canvas");
    r(this, "h1");
    r(this, "particles", []);
    r(this, "rect");
    r(this, "paused", !1);
    r(this, "handleClick", () => {
      this.paused = !this.paused;
    });
    r(this, "tick", () => {
      this.paused || (this.createParticle(), this.destroyParticle(), this.renderParticles());
    });
  }
  componentDidMount() {
    this.ctx = this.canvas.getContext("2d"), this.rect = this.h1.getBoundingClientRect(), setInterval(this.tick, 16);
  }
  randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  createParticle() {
    this.particles.length < 100 && this.particles.push({
      x: 25,
      y: 20,
      vx: -1 + Math.random() * 2,
      vy: -2 + Math.random() * -5,
      r: 2 + 2 * Math.random(),
      opacity: 1,
      color: this.randomColor()
    });
  }
  renderParticles() {
    this.ctx.save(), this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight), this.ctx.translate(this.rect.left, this.rect.top), this.ctx.rotate(Math.PI / 6), this.particles.forEach((t) => {
      t.opacity -= 0.01, t.opacity < 0 && (t.opacity = 0), t.vy += 0.03, t.x += t.vx, t.y += t.vy, this.ctx.fillStyle = t.color, this.ctx.globalAlpha = t.opacity, this.ctx.beginPath(), this.ctx.arc(t.x, t.y, t.r, 0, 2 * Math.PI), this.ctx.fill();
    }), this.ctx.restore();
  }
  destroyParticle() {
    for (let t = 0, s = this.particles.length; t < s; t++)
      this.particles[t].opacity || (this.particles.splice(t, 1), t--, s--);
  }
  render() {
    return h.h(
      h.Fragment,
      null,
      h.h("h1", { ref: (t) => this.h1 = t, onClick: this.handleClick }, "🎉 Hello Quarkc!"),
      h.h("canvas", { ref: (t) => this.canvas = t, width: window.innerWidth, height: window.innerHeight })
    );
  }
};
l = x([
  p({ tag: "quarkc-demo-celebrate", style: u })
], l);
const v = l;
export {
  v as default
};
