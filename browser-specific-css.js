/*!
* Browser Specific CSS 1.0
* http://www.idiotinside.com/browser-specific-css/
*
* Suresh Kumar
* https://github.com/sureshdsk
*
* Released under the MIT license
*
*/
function browserSpecificCss(){
}
browserSpecificCss.prototype.run = function() {var u=navigator.userAgent,IE6=/msie 6/i.test(u),IE7=/msie 7/i.test(u),IE8=/msie 8/i.test(u),IE9=/msie 9/i.test(u),IE10=/msie 10/i.test(u),IE11=/Trident.*rv[ :]*11\./i.test(u),SAFARI=/safari/i.test(u),FIREFOX=/firefox/i.test(u),CHROME=/chrome/i.test(u),OPR=/opr/i.test(u),OPERA=/opera/i.test(u),KONQ=/konqueror/i.test(u),MAXTHON=/maxthon/i.test(u),ROCK=/rockMelt/i.test(u),FLOCK=/flock/i.test(u),IPHONE=/iphone/i.test(u),IPAD=/ipad/i.test(u),IPOD=/ipod/i.test(u),MAC=/mac/i.test(u),WINDOWS=/win/i.test(u),WINXP=/nt 5.1/i.test(u),VISTA=/nt 6.0/i.test(u),WIN7=/nt 6.1/i.test(u),WIN8=/nt 6.2/i.test(u),WIN8=/nt 6.3/i.test(u),LINUX=/linux/i.test(u),ANDROID=/android/i.test(u),BLACKBERRY=/blackberry/i.test(u)||/BB10/i.test(u)||/PlayBook/i.test(u),SYMBIAN=/symbianos/i.test(u),FIREFOXMOBILE=/fennec/i.test(u),IEMOBILE=/iemobile/i.test(u),WINPHONE=u.match(/windows phone/i),OPERAMINI=/opera mini/i.test(u),OPERAMOBILE=/opera mobi/i.test(u),BOLT=/bolt/i.test(u),b="",p="",d="";if(IE6)b="ie ie6";if(IE7)b="ie ie7";if(IE8)b="ie ie8";if(IE9)b="ie ie9";if(IE10)b="ie ie10";if(IE11)b="ie ie11";if(SAFARI)b="safari";if(CHROME)b="chrome";if(OPR)b="opera";if(OPERA)b="opera";if(FIREFOX)b="firefox";if(KONQ)b="konqueror";if(MAXTHON)b="maxthon";if(ROCK)b="rockmelt";if(FLOCK)b="flock";if(OPERAMOBILE)b="operamobile";if(OPERAMINI)b="operamini";if(IEMOBILE)b="iemobile";if(FIREFOXMOBILE)b="firefoxmobile";if(BOLT)b="bolt";if(WINDOWS)p="win";if(MAC)p="mac";if(LINUX)p="linux";if(WINXP)p="win winxp";if(VISTA)p="win vista";if(WIN7)p="win win7";if(WIN8)p="win win8";if(WINPHONE)p="wphone";if(IPHONE){d="iphone";p="ios";b=""}if(IPAD){d="ipad";p="ios";b=""}if(IPOD){d="ipod";p="ios";b=""}if(SYMBIAN){if(/safari/i.test(b)){b=""}p="symbian"}if(ANDROID){if(/safari/i.test(b)){b=""}p="",d="android"}if(BLACKBERRY){b="";d="blackberry"}document.documentElement.className +=d+" "+p+" "+b;};
var BrowserDetect = new browserSpecificCss();
BrowserDetect.run();
