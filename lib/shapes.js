class Shape {
  constructor(vals) {
    this.letters = vals[0],
      this.backgroundColor = vals[2],
      this.textColor = vals[3]
  }
}

class Triangle extends Shape {
  constructor(vals) {
    super(vals)
    this.shape = vals[1]
  }

  getSVG() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points='150,0 25,200 275,200' fill="${this.backgroundColor.color}" />
  <text x="145" y="150" font-family="Roboto Mono, monospace" font-size="60" text-anchor="middle" fill="${this.textColor.color}">${this.letters}</text>
</svg>
`
  }
}

class Circle extends Shape {
  constructor(vals) {
    super(vals)
    this.shape = vals[1]
  }
  getSVG() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r='80' fill="${this.backgroundColor.color}" />
  <text x="150" y="125" font-family="Roboto Mono, monospace" font-size="60" text-anchor="middle" fill="${this.textColor.color}">${this.letters}</text>
</svg>
`
  }
}

class Square extends Shape {
  constructor(vals) {
    super(vals)
    this.shape = vals[1]
  }
  getSVG() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="150" height="150" x="75" y="25" fill="${this.backgroundColor.color}" />
  <text x="92" y="120" font-family="Roboto Mono, monospace" font-size="60" text-anchor="center" fill="${this.textColor.color}">${this.letters}</text>
</svg>
`
  }
}

module.exports = {
  Triangle,
  Circle,
  Square
}
