// Usersnap config - 2020-03-22 14:02:07
!function(){
var c=window._usersnapconfig||{},nc={"emailBox": true, "title": false, "consoleRecorder": true, "valign": "default", "commentBox": true, "colors": {"primary": "#e37655", "secondary": "#66AACB"}, "label": true, "assignee": false, "theme": "default2018", "btnText": "Report Issue", "apiKey": "6076e5cb-ce38-4f1b-a8fd-35c0b59384a4", "usecase": "easyfb", "halign": "default", "tools": ["comment", "pen"]};
for(var e in nc)nc.hasOwnProperty(e)&&(void 0!==c[e]&&"apiKey"!==e||(c[e]=nc[e]));
window._usersnapconfig=c;
/* global document, _usersnapconfig */
(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    var ua =(navigator.userAgent || navigator.vendor || window.opera);
    var ismob = (/Android|iPhone|iPad|iPod/i).test(ua) && !(/Firefox/i).test(ua);
    var lM = {
        'en': 'en',
        'fr': 'fr',
        'es': 'es',
        'pl': 'pl',
        'fa': 'fa',
        'de': 'de-formal',
        'de-formal': 'de-formal',
        'de-informal': 'de-informal',
        'it': 'it',
        'jp': 'jp',
        'ko': 'ko',
        'hu': 'hu',
        'da': 'da',
        'sk': 'sk',
        'cz': 'cz',
        'no': 'no',
        'nl': 'nl',
        'fi': 'fi',
        'pt': 'pt',
        'sv': 'sv',
        'tr': 'tr',
        'ru': 'ru',
        'hr': 'hr',
        'bg': 'bg',
        'zh': 'zh',
        'zh-tw': 'zh-TW',
        'zh-hant': 'zh-TW',
        'is': 'is',
        'fr-ca': 'fr-CA',
        'pt-br': 'pt-BR',
        'es-419': 'es-419',
        'ro': 'ro'
    };
  
    //auto detect language
    if ((typeof(_usersnapconfig) === 'undefined') ||
        (typeof(_usersnapconfig.lang) === 'undefined') ||
        (_usersnapconfig.lang === 'auto')) {
        //try to detect language
        var lang = [].concat(navigator.languages || []).concat(navigator.language?navigator.language.match(/^([a-z]{2,3})(?:-[a-zA-Z]{4})?(?:-[a-zA-Z]{2,3})?$/):[]).concat(navigator.userLanguage||[]).concat(['en']);
        for(var i = 0; i < lang.length; i++) {
            if (typeof(lM[lang[i].toLowerCase()]) !== 'undefined') {
                _usersnapconfig.lang = lM[lang[i].toLowerCase()];
                break;
            }
        }
    }
    
    var cdnurl = '//d3mvnvhjmkxpjz.cloudfront.net/';
    if((typeof(_usersnapconfig) !== 'undefined') && 
        (typeof(_usersnapconfig.hostconfig) !== 'undefined') && 
        (typeof(_usersnapconfig.hostconfig.homeHost) !== 'undefined')) {
        cdnurl = _usersnapconfig.hostconfig.homeHost;
    }

    if((typeof(_usersnapconfig) !== 'undefined') &&
            (typeof(_usersnapconfig.lang) !== 'undefined')) {
        if(typeof(lM[_usersnapconfig.lang.toLowerCase()]) === 'undefined') {
            if(ismob) {
                s.src = cdnurl + 'js/12669/usersnap2-mob-12669-en.js';
            } else {
                s.src = cdnurl + 'js/12669/usersnap2-12669-en.js';
            }
        } else {
            if(ismob) {
                s.src = cdnurl + 'js/12669/usersnap2-mob-12669-' + lM[_usersnapconfig.lang.toLowerCase()] + '.js';
            } else {
                s.src = cdnurl + 'js/12669/usersnap2-12669-' + lM[_usersnapconfig.lang.toLowerCase()] + '.js';
            }

        }
    } else {
        if(ismob) {
            s.src = cdnurl + 'js/12669/usersnap2-mob-12669-en.js';
        } else {
            s.src = cdnurl + 'js/12669/usersnap2-12669-en.js';
        }
    }
    if((typeof(_usersnapconfig) !== 'undefined') && (typeof(_usersnapconfig.medalliaCSP) !== 'undefined') && _usersnapconfig.medalliaCSP === true) {
        s.src = cdnurl + 'js/12669/usersnap2-medalliacsp-en.js';
    }
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
}());

}();
