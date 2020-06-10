/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.2 (2020-06-10)
 */
!function(u){"use strict";var n,t,e,r,o,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=function(n,t){var e,r=n.dom,o=n.selection.getSelectedBlocks();o.length&&(e=r.getAttrib(o[0],"dir"),c.each(o,function(n){r.getParent(n.parentNode,'*[dir="'+t+'"]',r.getRoot())||r.setAttrib(n,"dir",e!==t?t:null)}),n.nodeChanged())},d=function(n){return function(){return n}},f=d(!1),a=d(!0),m=function(){return s},s=(n=function(n){return n.isNone()},{fold:function(n,t){return n()},is:f,isSome:f,isNone:a,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:d(null),getOrUndefined:d(undefined),or:e,orThunk:t,map:m,each:function(){},bind:m,exists:f,forall:a,filter:m,equals:n,equals_:n,toArray:function(){return[]},toString:d("none()")}),g=function(e){var n=d(e),t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:a,isNone:f,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return g(n(e))},each:function(n){n(e)},bind:r,exists:r,forall:r,filter:function(n){return n(e)?o:s},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(f,function(n){return t(e,n)})}};return o},h=function(n){return null===n||n===undefined?s:g(n)},y=function(n){if(null===n||n===undefined)throw new Error("Node cannot be null or undefined");return{dom:d(n)}},T={fromHtml:function(n,t){var e=(t||u.document).createElement("div");if(e.innerHTML=n,!e.hasChildNodes()||1<e.childNodes.length)throw u.console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node");return y(e.childNodes[0])},fromTag:function(n,t){var e=(t||u.document).createElement(n);return y(e)},fromText:function(n,t){var e=(t||u.document).createTextNode(n);return y(e)},fromDom:y,fromPoint:function(n,t,e){var r=n.dom();return h(r.elementFromPoint(t,e)).map(y)}},v=(r="function",function(n){return typeof n===r}),p=("undefined"!=typeof u.window?u.window:Function("return this;")(),o=3,function(n){return n.dom().nodeType===o}),w=function(n,t){var e,r,o=n.dom(),i=u.window.getComputedStyle(o).getPropertyValue(t);return""!==i||(r=p(e=n)?e.dom().parentNode:e.dom())!==undefined&&null!==r&&r.ownerDocument.body.contains(r)?i:N(o,t)},N=function(n,t){return(e=n).style!==undefined&&v(e.style.getPropertyValue)?n.style.getPropertyValue(t):"";var e},O=function(t,r){return function(e){var n=function(n){var t=T.fromDom(n.element);e.setActive(("rtl"===w(t,"direction")?"rtl":"ltr")===r)};return t.on("NodeChange",n),function(){return t.off("NodeChange",n)}}};!function D(){i.add("directionality",function(n){var t,e;(t=n).addCommand("mceDirectionLTR",function(){l(t,"ltr")}),t.addCommand("mceDirectionRTL",function(){l(t,"rtl")}),(e=n).ui.registry.addToggleButton("ltr",{tooltip:"Left to right",icon:"ltr",onAction:function(){return e.execCommand("mceDirectionLTR")},onSetup:O(e,"ltr")}),e.ui.registry.addToggleButton("rtl",{tooltip:"Right to left",icon:"rtl",onAction:function(){return e.execCommand("mceDirectionRTL")},onSetup:O(e,"rtl")})})}()}(window);