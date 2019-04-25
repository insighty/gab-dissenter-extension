/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Mozilla Firefox",slug:"firefox",version:"0.1.7"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",DISSENTER_HOME_PAGE_URI="https://dissenter.com",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",COMMENT_COUNT_URI="https://dissenter.com/notification/comment-count?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",BACKGROUND_ACTION_GET_KEY="get_key",BACKGROUND_ACTION_SET_KEY="set_key",BACKGROUND_ACTION_SET_BADGE="set_badge",BACKGROUND_ACTION_TAB_UPDATED="tab_updated",COLOR_GAB_GREEN="#21cf7b",SEARCH_ENGINES=[{name:"DuckDuckGo",url:"https://duckduckgo.com/?q=",icon:"duckduckgo.svg"},{name:"Startpage",url:"https://www.startpage.com/do/search?q=",icon:"startpage.png"},{name:"Bing",url:"https://www.bing.com/search?q=",icon:"bing.svg"},{name:"Yahoo!",url:"https://search.yahoo.com/search?p=",icon:"yahoo.svg"},{name:"Google",url:"https://www.google.com/search?q=",icon:"google.svg"}],STORAGE_BASE="gab_dissenter_extension_data",TWITTER_BUTTONS_ENABLED="twitter_buttons_enabled",REDDIT_BUTTONS_ENABLED="reddit_buttons_enabled",YOUTUBE_BUTTONS_ENABLED="youtube_buttons_enabled",WINDOW_SIDEBAR_UNAVAILABLE_ENABLED="window_sidebar_unavailable_enabled",WEBSITE_COMMENT_BADGE_ENABLED="website_comment_badge_enabled",DISSENT_DISQUS_BUTTONS_ENABLED="dissent_disqus_buttons_enabled",WIKIPEDIA_BUTTONS_ENABLED="wikipedia_buttons_enabled",NT_DEFAULT_SEARCH_ENGINE="nt_default_search_engine",NT_TOP_SITES_ENABLED="nt_top_sites_enabled",NT_TOP_SITES_LIMIT="nt_top_sites_limit",NT_TOP_SITES_SIZE="nt_top_sites_size",NT_TOP_SITES_SHAPE="nt_top_sites_shape",NT_TOP_SITES_HIGHLIGHT="nt_top_sites_highlight",NT_TOP_SITES_SHOW_TITLE="nt_top_sites_show_title",NT_DATETIME_SHOW_DATE="nt_datetime_show_date",NT_DATETIME_SHOW_TIME="nt_datetime_show_time",NT_COLORS_SEARCH="nt_colors_search",NT_COLORS_TEXT="nt_colors_text",NT_BACKGROUND_RANDOM="nt_background_random",NT_BACKGROUND_SOLID_COLOR="nt_background_solid_color",NT_BACKGROUND_IMAGE="nt_background_image",NT_BACKGROUND_RANDOM_GRADIENT="nt_background_random_gradient",NT_DISSENTER_ENABLED="nt_dissenter_enabled",NT_DISSENTER_DEFAULT_TAB="nt_dissenter_default_tab",STORAGE_DEFAULT_PARAMS={};STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WEBSITE_COMMENT_BADGE_ENABLED]=!1,STORAGE_DEFAULT_PARAMS[DISSENT_DISQUS_BUTTONS_ENABLED]=!1,STORAGE_DEFAULT_PARAMS[WIKIPEDIA_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[NT_DEFAULT_SEARCH_ENGINE]=SEARCH_ENGINES[0],STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_ENABLED]=!1,STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_LIMIT]=10,STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SIZE]="md",STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHAPE]="circle",STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_HIGHLIGHT]="light",STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHOW_TITLE]=!0,STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_DATE]=!0,STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_TIME]=!0,STORAGE_DEFAULT_PARAMS[NT_COLORS_SEARCH]="white",STORAGE_DEFAULT_PARAMS[NT_COLORS_TEXT]="white",STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_RANDOM]=!1,STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_SOLID_COLOR]="",STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_IMAGE]="",STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_RANDOM_GRADIENT]=!0,STORAGE_DEFAULT_PARAMS[NT_DISSENTER_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[NT_DISSENTER_DEFAULT_TAB]="home";var STORAGE_KEY_ALL="all",isObject=function(t){return!isArray(t)&&!isDate(t)&&(null!==t&&"object"==typeof t)},isString=function(t){return"string"==typeof t||t instanceof String},isDate=function(t){return!isString(t)&&!isArray(t)&&null!=t&&null!=t&&(t&&"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t))},isArray=function(t){return Array.isArray(t)};function ready(t){var _=document;"loading"==_.readyState?_.addEventListener("DOMContentLoaded",t):t()}function getQueryStringValue(t){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function getDissenterDLogoAsSVG(t,_,e,E){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.style.setProperty("height",t,"important"),n.style.setProperty("width",_,"important"),n.setAttribute("version","1.1"),n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),n.setAttribute("viewBox","0 0 500 500");var A=document.createElementNS("http://www.w3.org/2000/svg","g");A.style.setProperty("transform","translate(17, 37)","important");var T=document.createElementNS("http://www.w3.org/2000/svg","path");T.setAttribute("d","M244.885937,0 L193.657763,0 L65.5018905,0 L45.5665325,0 C20.4992438,0 0,20.5016933 0,45.5466667 L0,381.453333 C0,406.504 20.4992438,427 45.5665325,427 L65.5018905,427 L193.657763,427 L244.885937,427 C389.348933,427 467,326.3134 467,213.5 C467,100.6866 393.563837,0 244.885937,0"),T.setAttribute("fill",e);var o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M309.275885,155 L121.729792,155 C115.246045,155 110,149.623395 110,143.002906 C110,136.376605 115.246045,131 121.729792,131 L309.275885,131 C315.759633,131 321,136.376605 321,143.002906 C321,149.623395 315.759633,155 309.275885,155"),o.setAttribute("fill",E);var r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M309.275885,225 L121.729792,225 C115.246045,225 110,219.623395 110,213.002906 C110,206.376605 115.246045,201 121.729792,201 L309.275885,201 C315.759633,201 321,206.376605 321,213.002906 C321,219.623395 315.759633,225 309.275885,225"),r.setAttribute("fill",E);var i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("d","M121.78718,296 C115.271711,296 110,290.623395 110,284.002906 C110,277.376605 115.271711,272 121.78718,272 L247.218525,272 C253.733994,272 259,277.376605 259,284.002906 C259,290.623395 253.733994,296 247.218525,296 L121.78718,296 Z"),i.setAttribute("fill",E),A.appendChild(T),A.appendChild(o),A.appendChild(r),A.appendChild(i),n.appendChild(A),n}function addManyClasses(t,_){if(!isArray(_))return!1;for(var e=0,E=_.length;e<E;e++)t.classList.add(_[e])}function removeManyClasses(t,_){if(!isArray(_))return!1;for(var e=0,E=_.length;e<E;e++)t.classList.remove(_[e])}var Popup=function(){var e=this,_=document.getElementById("popup-iframe"),n="";function A(t){setTimeout(function(){_.setAttribute("src",t),_.classList.remove("hidden")},250)}e.onPopupOpen=function(t){if(isObject(t)){var _=t.url||"",e=encodeURIComponent(n=_),E=BASE_URI+e;-1==_.indexOf("://")&&(E=DISSENTER_HOME_PAGE_URI),A(E)}else A(DISSENTER_HOME_PAGE_URI)},e.init=function(t){if(t&&isString(t))e.onPopupOpen({url:t});else if(BROWSER_CONFIG.slug===BROWSER_SAFARI_SLUG){var _=safari.application.activeBrowserWindow.activeTab;e.onPopupOpen(_),safari.application.addEventListener("popover",function(t){n!==_.url&&safari.extension.popovers[0].contentWindow.location.reload()},!0)}else browser.tabs.query({active:!0,currentWindow:!0},function(t){if(!t||!isArray(t))return!1;var _=t[0];e.onPopupOpen(_)})}};if(BROWSER_CONFIG.slug===BROWSER_SAFARI_SLUG){var popup=new Popup;popup.init()}else document.addEventListener("DOMContentLoaded",function(){var t=getQueryStringValue("url");(new Popup).init(t)});