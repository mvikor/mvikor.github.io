'use strict';var _Mathmin=















Math.min;(function(){window.constructorMode||require(['jquery'],function(a){var b=null,c=a(window),d=c.height(),e=c.scrollTop(),f=e+d,g=_Mathmin(100,d),














j=a(['.ul-widget','.ul-blog-post'].join(','),'#main'),
k=a(['.ul-absolute-widgets .ul-widget','.ul-w-spacer'].join(','),'#main'),

l=j.
not(k).
filter(function(){

return a(this).offset().top>f;
}).
addClass('ul-scroll-animate').
attr('data-animation-type','fade'),





m=function(){return function(){
if(!l.length)




return a(window).off('.scrollAnimation'),a(document).off('.scrollAnimation'),void b.disconnect();


var p=c.scrollTop(),
q=p+d,
r=a();

l.each(function(){

var s=a(this),
t=s.offset().top,
u=t+s.outerHeight();(



t>=p&&u<=q||

t+g<q&&t>p||

u<p)&&(

r=r.add(s));


}),


r.attr('data-was-animated','true'),


l=l.not(r);

}}(),









n=function(){return function(p,q){
var
s,
t,r=!1;

















return t=function(){return function(){s=arguments,r||(p.apply(null,s),r=!0,l.length&&setTimeout(function(){r=!1,t.apply(null,s)},q))}}(),t;
}}();


a(window).
on('scroll.scrollAnimation',n(m,500)).
on('resize.scrollAnimation',function(){
d=c.height(),
g=_Mathmin(100,d);
}),(


'ontouchstart'in window||'onmsgesturechange'in window)&&
a(document).
on('touchmove.scrollAnimation MSPointerMove.scrollAnimation pointermove.scrollAnimation',n(m,500)),



b=new MutationObserver(n(m,500)),
b.observe(document.body,{
childList:!0,
attributes:!1,
characterData:!1,
subtree:!0});


});

})();
//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map
