(function(global, factory){
    "use strict";

    if (typeof module === "object" && typeof module.exports === "object"){
        module.exports = global.document ? factory(global) : 
            function(w){
                if (!w.document){
                    throw new Error("Viewport requires a window with a document");
                }

                return factory(w);
            };
    } else {
        factory(global);
    }
})(typeof window !== "undefined" ? window : this, function(){
    "use strict";

    var ViewportConfig = {};

    if ("ViewportConfig" in window && typeof window.ViewportConfig === "object"){
        ViewportConfig = window.ViewportConfig;
    }

    var _useVersion = ViewportConfig.version || "main";

    if (_useVersion === "dev"){
        var script = document.createElement("script");
        script.src = "/dev.js";
        script.type = "text/javascript";
        document.head.appendChild(script);
        return true;
    } else if (_useVersion === "legacy"){
        var script = document.createElement("script");
        script.src = "/legacy.js";
        script.type = "text/javascript";
        document.head.appendChild(script);
        return true;
    }

    function ViewportEvent(name, viewportInit){
        if (typeof name === "undefined") name = "change";
        if (typeof viewportInit === "undefined") viewportInit = {};
        this.name = name;
        this.delta = 0;
        this.width = 0;
        this.height = 0;
        this.aspectRatio = 0;
        this.resolution = 0;
        this.target = document.body;
        this.mode = null;
    }
});