/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function r(u,v){var p;p=function(l){var e,b,g;e=function(b){return function(f,a){return b.b.extend(f,{get stringifyable(){return a()}})}}(l);b=function(b,f){function a(){return 0}function h(a,c){return"string"===typeof a&&"string"===typeof c?a.localeCompare(c):a<=c?a<c?-1:0:1}function c(a,c){b.b.extend(a,{get onResultOf(){return this.f},get reverse(){return this.reverse},get callable(){return this.i}},{get f(){return function(c){return d(c,a)}},get reverse(){return function(){return c||m(a)}},get i(){return a}})}
function d(a,d){function n(c,n){return d(a(c),a(n))}c(n);f(n,function(){return{type:"by-function-comparator","function":a.stringifyable,comparator:d.stringifyable}});return n}function m(a){function d(c,h){return-a(c,h)}c(d,a);f(d,function(){return{type:"reversed-comparator",comparator:a.stringifyable}});return d}c(h);f(h,function(){return{type:"natural-comparator"}});c(a);f(a,function(){return{type:"indifferent-comparator"}});return{r:a,A:h}}(l,e);g=function(b,f){function a(a){b.b.extend(a,{get callable(){return this.i}},
{get i(){return a}})}return{t:function(b){function c(a){return a[b]}a(c);f(c,function(){return{type:"property-accessor",propertyName:b}});return c}}}(l,e);l=function(b,f){function a(){return!0}function h(){return!1}function c(a,c){b.b.extend(a,{get and(){return this.h},get negate(){return this.s},get onResultOf(){return this.f},get or(){return this.m},get callable(){return this.i}},{get h(){return function(c){return d([a,c])}},get s(){return function(){return c||w(a)}},get f(){return function(c){return m(c,
a)}},get m(){return function(c){return e([a,c])}},get i(){return a}})}function d(d){function b(a){for(var c=0,h=d.length;c<h;++c)if(!d[c](a))return!1;return!0}if(!d.length)return a;c(b);f(b,function(){return{type:"and-predicate",components:d.map(function(a){return a.stringifyable})}});return b}function m(a,d){function b(c){return d(a(c))}c(b);f(b,function(){return{type:"by-function-predicate","function":a.stringifyable,predicate:d.stringifyable}});return b}function w(a){function d(c){return!a(c)}
c(d,a);f(d,function(){return{type:"negated-predicate",predicate:a.stringifyable}});return d}function e(a){function d(c){for(var b=0,h=a.length;b<h;++b)if(a[b](c))return!0;return!1}if(!a.length)return h;c(d);f(d,function(){return{type:"or-predicate",components:a.map(function(a){return a.stringifyable})}});return d}c(h);f(h,function(){return{type:"always-false-predicate"}});c(a);f(a,function(){return{type:"always-true-predicate"}});return{r:h,v:a,h:d,H:function(a,d){function b(c){return a(c)}c(b);f(b,
d);return b},m:e,u:function(a){function d(c){return a.test(c)}c(d);f(d,function(){return{type:"regular-expression-predicate",regularExpression:a.source,caseSensitive:!a.ignoreCase,multiline:a.multiline}});return d}}}(l,e);return function(b){return b}({j:b,k:g,predicates:l,J:e,O:function(b,f){return"function"===typeof f||"object"===typeof f?f.stringifyable||f:f}})}(function(){var l;l=function(){function e(b,e){return Object.prototype.hasOwnProperty.call(b,e)}return{w:function(b,e){if(b===e)return!0;
var k=!!e&&"function"===typeof e.valueOf;return!!b&&"function"===typeof b.valueOf&&k&&b.valueOf()===e.valueOf()},extend:function(b,e){Array.prototype.slice.call(arguments,1).forEach(function(e){for(var f=Object.keys(e),a=0,h=f.length;a<h;a++){var c=f[a],d=Object.getOwnPropertyDescriptor(e,c);void 0!==d&&d.enumerable&&Object.defineProperty(b,c,d)}});return b},G:function(b,g){for(var k in b)e(b,k)&&g(k,b[k])},q:e,K:function(b,g){var k={},f;for(f in b)e(b,f)&&(k[f]=g(b[f],f,b));return k}}}();return function(e){return e}(function(e,
b,g){return{c:e,b:b,n:g}}(function(e){function b(a){return a.filter(function(a,c,d){return d.lastIndexOf(a)===c})}function g(a,b){for(var c=a.length,d=-1,e=0;e<c;++e)if(b(a[e])){if(0<=d)throw Error("Multiple elements match the predicate.");d=e}return d}function k(a,b){return a&&"function"===typeof a.valueOf&&b&&"function"===typeof b.valueOf?a.valueOf()<=b.valueOf()?a.valueOf()<b.valueOf()?-1:0:1:a<=b?a<b?-1:0:1}function f(a,b){var c=a.length,d=Array(c),e=Array(c),f;for(f=0;f<c;++f)d[f]=f,e[f]=a[f];
f=a;a=e;e=f;d.sort(function(c,d){return b(a[c],a[d])||c-d});for(f=0;f<c;++f)e[f]=a[d[f]];return e}return{contains:function(a,b){return 0<=a.indexOf(b)},D:function(a){if(50<a.length){for(var f=a.length,c={},d,m=0;m<f;++m)if(d=a[m],"string"===typeof d)if(e.q(c,d))break;else c[d]=!0;else if(a.lastIndexOf(d)!==m)break;if(!(m>=f)){for(var g=a.slice(0,m);m<f;++m)d=a[m],"string"===typeof d?e.q(c,d)||(c[d]=!0,g.push(d)):a.lastIndexOf(d)===m&&g.push(d);a=g}}else a=b(a);return a},F:function(a,b){return Array.prototype.concat.apply([],
a.map(b))},L:function(a,b){var c=g(a,b);if(0>c)throw Error("None of the elements matches the predicate.");return a[c]},M:function(a,b){var c=g(a,b);return 0<=c?a[c]:null},N:function(a,b){var c=b||k;window.chrome?c=f(a,c):(a.sort(c),c=a);return c}}}(l),l,{B:function(e){return e.replace(/([A-Z])/g,function(b){return"-"+b.toLowerCase()})},C:function(e){return e.replace(/-([a-z])/g,function(b){return b[1].toUpperCase()})},format:function(e){var b=arguments;return e.replace(/{(\d+)}/g,function(e,k){var f=
parseInt(k,10)+1;return typeof b.length<=f?e:b[f]})}}))}());return function(l){return l}(function(l,e,b,g,k){function f(b,c){function f(a){return"*"+a}var e=c.toLowerCase()!==c;return 0<=c.indexOf("*")?a(b,c,e):a(b,"*"+c.replace(/([A-Z])/g,f)+"*",e)}function a(a,c,f){c="^"+c.split("*").map(h).join(".*")+"$";var e=new RegExp(c,f?"":"i"),g=a.renderValue;return b.predicates.H(function(a){return e.test(g(a))},function(){return b.predicates.u(e).stringifyable})}function h(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,
"\\$&")}var c=b.predicates.v;g.defineExtension("ko-grid-filtering",{A:[],S:function(a){return a.after("headers").insert("filters",k)},r:function(a,g,h){function k(a){var b=a.id;if(!l[b]){var d=e.observable("");h.extensions["ko-grid-view-state-storage"]&&h.extensions["ko-grid-view-state-storage"].modeIndependent.bind("filters["+b+"]",d);l[b]={text:d,predicate:e.pureComputed(function(){var b=d();return b.length?f(a,b):c})}}return l[b]}var l={};this.__forColumn=k;a=e.pureComputed(function(){var a=h.columns.displayed().filter(function(a){return k(a).predicate()!==
c}).map(function(a){return k(a).predicate().f(b.k.t(a.property))});return b.predicates.h(a)});var p=g.o&&g.o.R||300,t=g.o&&!1===g.o.enabled?a:a.extend({o:p}),q=e.observable(!0);this.__applied=e.pureComputed(function(){q(q()||h.data.rows.displayedSynchronized()&&!h.data.view.dirty());return q()});h.data.predicates.push(e.pureComputed(function(){q(!1);return t()}));this.dispose=function(){t.dispose()}}});return g.declareExtensionAlias("filtering","ko-grid-filtering")}({},u,p,v,'<tr class="ko-grid-tr ko-grid-filter-row" data-bind="css: { applied: extensions.filtering.__applied }">\n    <td class="ko-grid-th ko-grid-filter-cell" data-bind="indexedRepeat: { forEach: columns.displayed, indexedBy: \'id\', as: \'column\'  }">\n        <input class="ko-grid-filter" type="text" data-bind="value: extensions.filtering.__forColumn(column()).text, valueUpdate: [\'keypress\', \'keyup\']"/>\n    </td>\n</tr>'))}
"function"===typeof define&&define.amd?define("knockout ko-grid ko-grid-view-state-storage ko-data-source ko-indexed-repeat ko-grid-view-modes".split(" "),r):window["ko-grid-filtering"]=r(window.ko,window.ko.bindingHandlers.grid);