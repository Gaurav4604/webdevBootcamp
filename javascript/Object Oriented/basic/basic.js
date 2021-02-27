function hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// making objects using factory functions
function colorMaker(r, g, b) {
    colors = {};
    colors.r = r;
    colors.g = g;
    colors.b = b;

    colors.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`
    }
    colors.hex = function () {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return colors;
}

const obj = colorMaker(12, 234, 19);
console.log(obj.rgb());
console.log(obj.hex());