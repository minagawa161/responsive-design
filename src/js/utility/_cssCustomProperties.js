import { DESIGN_WIDTHS } from "../utility/_variable";

export class CssCustomProperties {
  #el;
  #currentWidth;
  #vw;
  #svh;

  constructor(el) {
    this.#el = el || document.body;
  }

  #setVw = () => {
    this.#vw = this.#el.clientWidth * 0.01;
    document.documentElement.style.setProperty("--vw", `${this.#vw}px`);
  };
  #setScrollbarWidth = () => {
    const scrollbarWidth = window.innerWidth - this.#el.clientWidth;
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`
    );
  };
  #setSvh = () => {
    this.#svh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--svh", `${this.#svh}px`);
  };
  #resize = () => {
    if (this.#currentWidth === this.#el.clientWidth) {
      return;
    }
    this.#currentWidth = this.#el.clientWidth;
    this.#setVw();
    this.#setScrollbarWidth();
    this.#setSvh();
  };
  initialize = () => {
    this.#currentWidth = this.#el.clientWidth;
    this.#setVw();
    this.#setScrollbarWidth();
    this.#setSvh();
    // ScrollTriggerがdebounceつけるとおかしくなる
    window.addEventListener("resize", this.#resize);
  };
  getLength = (number) => {
    this.#vw = this.#el.clientWidth * 0.01;
    this.#svh = window.innerHeight * 0.01;
    return Math.min(
      ((Math.min(this.#vw, this.#svh) * number) / DESIGN_WIDTHS.mobile) * 100,
      number * 1.5
    );
  };
  getLengthMd = (number) => {
    this.#vw = this.#el.clientWidth * 0.01;
    return Math.min(
      ((this.#vw * number) / DESIGN_WIDTHS.desktop) * 100,
      number * 1.25
    );
  };
}
