window.BWU = {};

(function(window, BWU, undefined){
    BWU.createSpinner = function(size){
        function isValid(any){
            return ["string", "number"].indexOf(any) > -1;
        }

        var isArr = Array.isArray(size) && size.every((s) => isValid(s));

        if (!isValid || !isArr) size = [40, 40];
        else if (typeof size === "string") size = size.split("x").map(Number).filter(n => !isNaN(n));
        else if (typeof size === "number") size = [size, size].filter(n => !isNaN(n));
        else if (isArr) size = size.map(Number).filter(n => !isNaN(n));

        if (size.length === 0) size = [40, 40];
        else if (size.length === 1) size[1] = size[0];

        let width = size[0], height = size[1];

        let spinner = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        spinner.viewBox = "0 0 80 80";
        spinner.id = "loading-spinner";
        spinner.width = width;
        spinner.height = height;
        spinner.setAttribute("version", "1.1");
        spinner.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        spinner.setAttribute("preserveAspectRatio", "xMinyMin meet");

        let pathData = `M40,72C22.4,72,8,57.6,8,40C8,22.4,
            22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2
            s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6,
            28,28,28c1.1,0,2,0.9,2,2S41.1,72,40,72z`

        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.id = "loading-spinner__path";
        path.setAttribute("d", pathData);

        let animation = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        animation.setAttribute("attributeType", "xml");
        animation.setAttribute("attributeName", "transform");
        animation.setAttribute("type", "rotate");
        animation.setAttribute("from", "0 40 40");
        animation.setAttribute("to", "360 40 40");
        animation.setAttribute("dur", "0.6s");
        animation.setAttribute("repeatCount", "indefinite");

        let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.id = "loading-spinner__text";
        text.x = 30;
        text.y = 37;
        text.setAttribute("font-family", "Montserrat, Helvetical, Arial, sans-serif");
        text.setAttribute("font-size", "4px");
        text.textContent = 0;

        path.appendChild(animation);
        spinner.appendChild(path);
        spinner.appendChild(text);

        return spinner;
    };
})(this === window ? this : window, window.BWU);