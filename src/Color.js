export default class Color {
    constructor(colorHEXA, colorRGB) {
        this.colorRGB = colorRGB;
        this.colorHEXA = colorHEXA;
    }

    hexa(){
        return this.colorHEXA;
    }

    rgb(){
        return `rgb(${this.colorRGB})`
    }

}