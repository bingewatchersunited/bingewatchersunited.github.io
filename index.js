window.BWU = {};

(function(window, BWU, undefined){
    BWU.createSpinner = function(size){
        function isValid(any){
            return ["string", "number"].indexOf(any) > -1;
        }

        var isArr = Array.isArray(size) && size.every((s) => isValid(s));

        if (!isValid(size) || !isArr) size = [40, 40];
        else if (typeof size === "string") size = size.split("x").map(Number).filter(n => !isNaN(n));
        else if (typeof size === "number") size = [size, size].filter(n => !isNaN(n));
        else if (isArr) size = size.map(Number).filter(n => !isNaN(n));

        if (size.length === 0) size = [40, 40];
        else if (size.length === 1) size[1] = size[0];

        let width = size[0], height = size[1];

        let spinner = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        spinner.setAttribute("viewBox", "0 0 80 80");
        spinner.setAttribute("id", "loading-spinner");
        spinner.setAttribute("width", width || 40);
        spinner.setAttribute("height", height || 40);
        spinner.setAttribute("version", "1.1");
        spinner.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        spinner.setAttribute("preserveAspectRatio", "xMinYMin meet");

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
        text.setAttribute("x", "50%");
        text.setAttribute("y", "52%");
        text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-family", "Montserrat, Helvetical, Arial, sans-serif");
        text.setAttribute("font-size", "10pt");
        text.setAttribute("font-weight", "bold");
        text.textContent = 0;

        path.appendChild(animation);
        spinner.appendChild(path);
        spinner.appendChild(text);

        return spinner;
    };

    BWU.LOADING_TIME /* (in seconds) */ = 18;
    BWU.PROGRESS_INTERVAL = null;

    BWU.progress = function(spinner, time){
        if (typeof time !== "number") time = BWU.LOADING_TIME;
        var index = 1, step = 1 / time,
            percent;

        BWU.PROGRESS_INTERVAL = setInterval(() => {
            percent = Math.round((index * step) * 100);
            percent = (n => n < 10 ? "0" + n : String(n))(percent);

            if (Number(percent) > 100) percent = "100";

            BWU.updateSpinner(spinner, percent);

            if (percent === "100"){
                clearInterval(BWU.PROGRESS_INTERVAL);
                BWU.PROGRESS_INTERVAL = null;

                BWU.loaded();
                return;
            }

            index++;
        }, 1000);
    };

    BWU.updateSpinner = function(spinner, percent){
        if (!(Object(spinner) instanceof SVGElement))
            spinner = document.getElementById("loading-spinner");
        Array.from(spinner.children).forEach(child => {
            if (child.getAttribute("id") === "loading-spinner__text"){
                child.textContent = percent;
            }
        });
    };

    if (window.location.pathname === "/"){
        let int = setTimeout(() => {
            clearTimeout(int);
            int = void 0;
            var Spinner = BWU.createSpinner("100x100"),
                Indicator = document.querySelector(".bwu-indicator");
            
            Indicator.innerHTML = Spinner.outerHTML;
            var spinner = Indicator.querySelector("#loading-spinner");

            BWU.progress(spinner);
        }, 1500);
    }
})(this === window ? this : window, window.BWU);