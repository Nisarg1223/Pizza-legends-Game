class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {

    // Map image
    const image = new Image();

    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };

    image.src = "/images/maps/Demolower.png";

    const x = 1;
    const y = 4;

    // Shadow image
    const shadow = new Image();

    shadow.onload = () => {
      this.ctx.drawImage(
        shadow,
        0,
        0,
        32,
        32,
        x * 16 - 8,
        y * 16 - 18,
        32,
        32
      );
    };

    shadow.src = "/images/characters/shadow.png";

    // Hero image
    const hero = new Image();

    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        0,
        0,
        32,
        32,
        x * 16 - 8,
        y * 16 - 18,
        32,
        32
      );
    };

    hero.src = "/images/characters/people/hero.png";
  }
}