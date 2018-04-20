'use strict';(function(){var a={block:{},maps:{},isInitEventConstructor:!1,initConstructor:function initConstructor(b,c,d){var e=this;if(c){var f=b.closest('.ul-container');e.block[f.attr('id')]={id:f.attr('id'),mapSettings:c},this.renderMap(b,c,!0,function(g){e.isInitEventConstructor||e.constructorEvents(),d(g)})}},constructorEvents:function constructorEvents(){var b=this;b.isInitEventConstructor=!0;var c=function(){b.block&&$.each(b.block,function(){var d=this;setTimeout(function(){d.map&&d.map.fitToViewport(d.mapSettings.options.bounds)},1e3)})};$(window).off('.mapBackgroundResizeConstructor').on('addElelment.mapBackgroundResizeConstructor',c).on('colResized.mapBackgroundResizeConstructor',c).on('endWidgetEdit.mapBackgroundResizeConstructor',c)},initPublish:function initPublish(){var b=this;$.each($('.ul-container','#body-fict'),function(){var c=$(this);if('map'==c.attr('data-bgtype')){var d=null;try{d=JSON.parse(c.attr('data-map-settings'))}catch(e){console.error('map settings JSON parse failed')}if(!d)return;b.block[c.attr('id')]={id:c.attr('id'),mapSettings:d},b.renderMap($('.js-background-map',c),d,!1)}})},renderMap:function renderMap(b,c,d,e){var f=this,g=['map-helper/'+c.options.provider];'google'===c.options.provider&&g.push('json!/widgets/maps/json/styles_googlemaps.json'),c.markers||(c.markers=[]),f.block[b.closest('.ul-container').attr('id')].map=null,require(g,function(h,i){b.empty(),h({$el:b,mapOpts:{mapTypeId:c.options.mapTypeId,styles:i?i[c.options.styleNumber]:null,draggable:d,mapTypeControl:d,zoomControl:d,panControl:d,streetViewControl:d,scrollWheel:!1,bounds:{northWest:{latitude:c.options.bounds.northWest.latitude,longitude:c.options.bounds.northWest.longitude},southEast:{latitude:c.options.bounds.southEast.latitude,longitude:c.options.bounds.southEast.longitude}}},markers:c.markers.filter(function(j){return j.isEnabled}).map(function(j){return{id:j.id,latitude:+j.latitude,longitude:+j.longitude,text:f.getMarkerText(j.title,j.description),isDraggable:d}})},function(j){f.block[b.closest('.ul-container').attr('id')]={id:b.closest('.ul-container').attr('id'),mapSettings:c,map:j},f.event(),e&&e(j)})})},getMarkerText:function getMarkerText(b,c){if(!b&&!c)return'';var d=[];return b&&d.push('<b>'+b+'</b>'),c&&d.push(c),'<span style="color: #000;">'+d.join('<br>')+'</span>'},event:function event(){var b=this;$(window).off('resize.mapBackgroundResize'),$(window).on('resize.mapBackgroundResize',function c(){$.each(b.block,function(){var d=this,e=$('.js-background-map',$('#'+d.id));e.length&&b.block[d.id].map&&b.block[d.id].map&&setTimeout(function(){b.block&&b.block[d.id]&&b.block[d.id].map&&b.block[d.id].map.fitToViewport(d.mapSettings.options.bounds)},1e3)})})}};window.constructorMode?define('mapBgRender',['jquery'],function(){return a}):require(['jquery'],function(){a.initPublish()})})();
//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map
