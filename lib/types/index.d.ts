import { QuarkElement } from "quarkc";
declare global {
    interface HTMLElementTagNameMap {
        "quark-element-demo-celebrate": MyCeleBrate;
    }
}
export default class MyCeleBrate extends QuarkElement {
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    h1: HTMLElement;
    particles: any[];
    rect: DOMRect;
    paused: boolean;
    handleClick: () => void;
    componentDidMount(): void;
    tick: () => void;
    randomColor(): string;
    createParticle(): void;
    renderParticles(): void;
    destroyParticle(): void;
    render(): any;
}
