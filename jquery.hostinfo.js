$.extend({
    getHostInformation: function (url) {
        var info = {};
        if (typeof url == 'string')
        {
            var slashIndex = url.match(/\/\//i) == null ? null : url.match(/\/\//i).index;
            if (slashIndex == null) {
                url = location.origin + url;
              
                slashIndex = url.match(/\/\//i) == null ? null : url.match(/\/\//i).index;
            }
            info.href = url;
            info.protocol = slashIndex == null ? '' : url.substr(0, slashIndex);
            url = slashIndex == null ? url : url.substr(slashIndex + 2)
            var sharpIndex = url.match(/[#]+/i) == null ? null : url.match(/[#]+/i).index;

            info.hash = sharpIndex == null ? '' : url.substr(sharpIndex);
            url = sharpIndex == null ? url : url.substr(0, sharpIndex);

            var queryIndex = url.match(/[?]+/i) == null ? null : url.match(/[?]+/i).index;
            info.query = queryIndex == null ? '' : url.substr(queryIndex);
            url = queryIndex == null ? url : url.substr(0, queryIndex);

            var url2 = $.grep(url.split('/'), function (a) { return a != '' });
            var hostInfo = url2[0].split(':');
            info.host = hostInfo.join(':');
            info.port = (hostInfo.length > 1 ? hostInfo[1] : '');
            info.hostname = hostInfo[0];
            url2 = url2.slice(1);
            info.pathname = '/' + url2.join('/');

            info.origin = info.protocol + '//' + info.host;
        }
        else if (typeof url == 'undefined') {
            info["host"] = location.host;
            info["protocol"] = location.protocol;
            info["pathname"] = location.pathname;
            info["href"] = location.href;
            info["hash"] = location.hash;
            info["hostname"] = location.hostname;
            info["port"] = location.port;
            info["origin"] = info["protocol"] + '//' + info["host"];
            info["query"] = location.search;
            if (info.port == '') {
                info.port = info.protocol == 'http:' ? 80 : info.protocol == 'https:' ? 443 : '';
            }
        }
		return info;
	}
});
