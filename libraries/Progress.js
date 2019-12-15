class Progress {
    constructor(options){
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svgAttrs = {};
        this.svgAttrs["viewBox"] = "0 0 80 80";
        this.svgAttrs["id"] = "progress-container";
        this.svgAttrs["class"] = "Progress progress-container";
        this.svgAttrs["version"] = "1.1";
        this.svgAttrs["xmlns:xlink"] = "http://www.w3.org/1999/xlink";
        this.svgAttrs["preserveAspectRatio"] = "xMinYMin meet";

        this.size = options.size;

        let isValid = any => ["string", "number"].indexOf(typeof any) > -1;
        let isArr = Array.isArray(this.size) && this.size.every(s => isValid(s));

        if (!isValid(this.size) || isArr) this.size = [80, 80];
        else if (typeof this.size === "string") this.size = this.size.split("x").slice(0, 2).filter(n => !isNaN(n));
        else if (typeof this.size === "number") this.size = [this.size, this.size].filter(n => !isNaN(n));
        else if (isArr) this.size = this.size.slice(0, 2).map(Number).filter(n => !isNaN(n));

        if (this.size.length === 0) this.size = [80, 80];
        else if (this.size.length === 1) this.size[1] = this.size[0];

        this.width = this.size[0];
        this.height = this.size[1];

        this.strokeWidthInner = options.strokeWidthInner || 4;
        this.strokeWidthOuter = options.strokeWidthOuter || 6;

        if (isNaN(this.strokeWidthInner) || !isFinite(this.strokeWidthInner)) this.strokeWidthInner = 4;
        if (isNaN(this.strokeWidthOuter) || !isFinite(this.strokeWidthOuter)) this.strokeWidthOuter = 6;

        this.svgAttrs["width"] = this.width;
        this.svgAttrs["height"] = this.height;

        Object.entries(this.svgAttrs).forEach(entry => this.svg.setAttribute(entry[0], entry[1]));

        this.circ1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circ1Attrs = {};
        this.circ1Attrs["cx"] = "50%";
        this.circ1Attrs["cy"] = "50%";
        this.circ1Attrs["stroke-width"] = this.strokeWidthOuter;
        this.circ1Attrs["fill"] = "none";
        this.circ1Attrs["id"] = "progress-circle__inner";
        this.circ1Attrs["class"] = "ProgressCircleInner progress-circle__inner";

        Object.entries(this.circ1Attrs).forEach(entry => this.circ1Attrs.setAttribute(entry[0], entry[1]));

        this.circ2 = document.createElementNS("http://www.w3.org/1999/svg", "circle");
        this.circ2Attrs = Object.assign({}, this.circ1Attrs);
        this.circ2Attrs["stroke-width"] = this.strokeWidthInner;
        this.circ2Attrs["stroke-linejoin"] = "round";
        this.circ2Attrs["stroke-linecap"] = "round";
        this.circ2Attrs["id"] = "progress-circle__outer";
        this.circ2Attrs["class"] = "ProgressCircleOuter progress-circle__outer";

        Object.entries(this.circ2Attrs).forEach(entry => this.circ2.setAttribute(entry[0], entry[1]));

        this.transform = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        this.transformAttrs = {};
        this.transformAttrs["attributeType"] = "xml";
        this.transformAttrs["attributeName"] = "";
        this.transformAttrs["dur"] = "0.6s";
        this.transformAttrs["repeatCount"] = "indefinite";

        return this;
    }
}