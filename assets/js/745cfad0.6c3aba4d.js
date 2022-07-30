"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[8461],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6584:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={sidebar_position:2},p="Load balance",c={unversionedId:"profile-format/proxygroup/load-balance",id:"profile-format/proxygroup/load-balance",title:"Load balance",description:"A group of proxies, selection will be randomly chosen.",source:"@site/docs/profile-format/proxygroup/load-balance.md",sourceDirName:"profile-format/proxygroup",slug:"/profile-format/proxygroup/load-balance",permalink:"/docs/profile-format/proxygroup/load-balance",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/proxygroup/load-balance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Auto select",permalink:"/docs/profile-format/proxygroup/auto"},next:{title:"[Rule]",permalink:"/docs/profile-format/rule/"}},s={},d=[{value:"Sample",id:"sample",level:2},{value:"Profile sample",id:"profile-sample",level:3},{value:"Policy path sample",id:"policy-path-sample",level:3},{value:"Format",id:"format",level:2},{value:"Param",id:"param",level:2}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load-balance"},"Load balance"),(0,o.kt)("p",null,"A group of proxies, selection will be randomly chosen."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Load balance group selection can not be changed manually"))),(0,o.kt)("h2",{id:"sample"},"Sample"),(0,o.kt)("h3",{id:"profile-sample"},"Profile sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[Proxy Group]\nLoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS\n\n[Rule]\n# traffic match 'www.google.com' will be redirect through AutoTestGroup's selected proxy\nDOMAIN, www.google.com, LoadBalanceGroup\n")),(0,o.kt)("h3",{id:"policy-path-sample"},"Policy path sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"ProxyHTTP = http, 1.2.3.4, 443, username, password\nProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com\nProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false\n")),(0,o.kt)("p",null,"Just like ",(0,o.kt)("a",{parentName:"p",href:"/docs/profile-format/proxy"},"[Proxy]")," Section definition but without section header in it."),(0,o.kt)("p",null,"Use policy path can separate proxies and rules definition, and reduce profile complexity. "),(0,o.kt)("h2",{id:"format"},"Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"{Group name} = load-balance, {proxies, ...}, {policy-path}, {policy-regex-filter}, hidden = {hidden}\n")),(0,o.kt)("h2",{id:"param"},"Param"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,o.kt)("th",{parentName:"tr",align:null},"Note"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"group name"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"name of group, will be used like a key to the group")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"proxies"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"A list of proxy name defined in ","[Proxy]"," section, divided by comma")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"policy-path"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"A list of proxy defined in url content. Content format will be presented below:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"ProxyHTTP1 = http, 1.2.3.4, 443, username, password",(0,o.kt)("br",null),"ProxyHTTP2 = http, 1.2.3.4, 443, username, password"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"policy-regex-filter"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"Usable if policy-path defined.",(0,o.kt)("br",null),"A regular expression which will apply on proxy name in policy-path url content, only proxies which match expression will be reserved.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hidden"),(0,o.kt)("td",{parentName:"tr",align:null},"true",(0,o.kt)("br",null),"false"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to display this proxy group in user interface, even set to false, this group will still take effect.")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"{proxies} and {policy-path} can be used together in the same proxy group"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use a profile url as policy path url, only proxy part of the profile will be used"))))}u.isMDXComponent=!0}}]);