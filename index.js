(function(global){
    /**
     * @function safeJSONParse
     * @param {String|String[]} result
     */
    function safeJSONParse(result){
        if (!arguments.length) return null;

        if (Array.isArray(result)){
            result = result.map((string) => safeJSONParse(string));
        } else {
            try {
                result = JSON.parse(result);
            } catch (ignore){}
        }

        return result;
    }

    function noop(){}

    function getNewsReq(type){
        var progress = noop;

        if (arguments.length === 2 && typeof arguments[1] === "function") progress = arguments[1];

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest(), url = getUrl("news.php", { type: type });

            xhr.open("GET", url, true);

            xhr.addEventListener("progress", progress);

            xhr.addEventListener("readystatechange", function(){
                if (this.readyState === this.DONE){
                    if (this.status === 200){
                        var response;
                        if ("response" in this) response = this.response;
                        else response = safeJSONParse(this.responseText);
                        resolve(response);
                    } else reject();
                }
            });

            xhr.send(null);
        });
    }

    /**
     * @function getNews
     * @param {String|Number} type
     */
    async function getNews(type){
        if (!arguments.length) type = "main";

        if (typeof type === "number") type = BWU.newsType[type];

        var news = await getNewsReq(type);

        if (typeof news !== "object") return {};

        return news;
    }

    class BWUNews {
        constructor(){
            this.items = [];
            this.now = new Date();
            return this;
        }

        async getNews(){
            
        }
    }
})(window);