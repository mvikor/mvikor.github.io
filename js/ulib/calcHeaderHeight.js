'use strict';var helpers={debounce:function debounce(a,b){var c=!0,d=!1,e,f=function(){return e=arguments,c?void(c=!1,a.apply(null,e),setTimeout(function(){c=!0,d&&(d=!1,f.apply(null,e))},b)):void(d=!0)};return f},addImgLoadListener:function addImgLoadListener(a,b){var c=function(){b(),a.removeEventListener('load',c)};return a.addEventListener('load',c),c}},calcHeaderHeight={nodesListenersData:[],init:function init(a){var b=this;b.observer&&b.observer.disconnect(),b.nodesListenersData&&b.nodesListenersData.forEach(function(c){c.node.removeEventListener(c.eventType,c.listener)}),b.header=document.querySelector('#body-fict header'),b.sendHeaderHeight=helpers.debounce(function(){a(b.header.offsetHeight)},300),window.addEventListener('resize',b.sendHeaderHeight),Array.prototype.slice.call(b.header.querySelectorAll('img')).forEach(function(c){b.nodesListenersData.push({node:c,eventType:'load',listener:helpers.addImgLoadListener(c,b.sendHeaderHeight)})}),b.initMutationObserver(),b.sendHeaderHeight()},destroy:function destroy(){var a=this;a.observer.disconnect(),a.nodesListenersData.forEach(function(b){b.node.removeEventListener(b.eventType,b.listener)})},initMutationObserver:function initMutationObserver(){var a=this;window.MutationObserver&&(a.observer=new MutationObserver(function(b){a.sendHeaderHeight(),b.forEach(function(c){c.addedNodes&&c.addedNodes.length&&Array.prototype.slice.call(c.addedNodes).forEach(function(d){d.tagName&&'img'===d.tagName.toLowerCase()&&a.nodesListenersData.push({node:d,eventType:'load',listener:helpers.addImgLoadListener(d,a.sendHeaderHeight)})})})}),a.observer.observe(a.header,{childList:!0,attributes:!0,characterData:!1,subtree:!0}))}};window.constructorMode?define('calcHeaderHeight',[],function(){return window.calcHeaderHeight=calcHeaderHeight,calcHeaderHeight}):window.calcHeaderHeight=calcHeaderHeight;
//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map
