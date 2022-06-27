"use strict";(self.webpackChunksammy_s_portfolio=self.webpackChunksammy_s_portfolio||[]).push([[934],{6413:function(e,a,t){t.d(a,{L:function(){return w},M:function(){return y},P:function(){return x},S:function(){return A},_:function(){return n},a:function(){return s},b:function(){return o},g:function(){return f},h:function(){return d}});var c=t(7294),i=(t(1224),t(5697)),r=t.n(i);function s(){return s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},s.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,c,i={},r=Object.keys(e);for(c=0;c<r.length;c++)a.indexOf(t=r[c])>=0||(i[t]=e[t]);return i}var d=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function o(e,a,t,c,i){return void 0===i&&(i={}),s({},t,{loading:c,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:a?1:0})})}function f(e,a,t,c,i,r,n,d){var o={};r&&(o.backgroundColor=r,"fixed"===t?(o.width=c,o.height=i,o.backgroundColor=r,o.position="relative"):("constrained"===t||"fullWidth"===t)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),n&&(o.objectFit=n),d&&(o.objectPosition=d);var f=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:a?0:1,transition:"opacity 500ms linear"},o)});return f}var b,p=["children"],l=function(e){var a=e.layout,t=e.width,i=e.height;return"fullWidth"===a?c.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/t*100+"%"}}):"constrained"===a?c.createElement("div",{style:{maxWidth:t,display:"block"}},c.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},w=function(e){var a=e.children,t=n(e,p);return c.createElement(c.Fragment,null,c.createElement(l,s({},t)),a,null)},m=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],u=function(e){var a=e.src,t=e.srcSet,i=e.loading,r=e.alt,d=void 0===r?"":r,o=e.shouldLoad,f=n(e,m);return c.createElement("img",s({},f,{decoding:"async",loading:i,src:o?a:void 0,"data-src":o?void 0:a,srcSet:o?t:void 0,"data-srcset":o?void 0:t,alt:d}))},h=function(e){var a=e.fallback,t=e.sources,i=void 0===t?[]:t,r=e.shouldLoad,d=void 0===r||r,o=n(e,g),f=o.sizes||(null==a?void 0:a.sizes),b=c.createElement(u,s({},o,a,{sizes:f,shouldLoad:d}));return i.length?c.createElement("picture",null,i.map((function(e){var a=e.media,t=e.srcSet,i=e.type;return c.createElement("source",{key:a+"-"+i+"-"+t,type:i,media:a,srcSet:d?t:void 0,"data-srcset":d?void 0:t,sizes:f})})),b):b};u.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},h.displayName="Picture",h.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var v=["fallback"],x=function(e){var a=e.fallback,t=n(e,v);return a?c.createElement(h,s({},t,{fallback:{src:a},"aria-hidden":!0,alt:""})):c.createElement("div",s({},t))};x.displayName="Placeholder",x.propTypes={fallback:i.string,sources:null==(b=h.propTypes)?void 0:b.sources,alt:function(e,a,t){return e[a]?new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Validation failed."):null}};var y=function(e){return c.createElement(c.Fragment,null,c.createElement(h,s({},e)),c.createElement("noscript",null,c.createElement(h,s({},e,{shouldLoad:!0}))))};y.displayName="MainImage",y.propTypes=h.propTypes;var k,j,S=function(e,a,t){for(var c=arguments.length,i=new Array(c>3?c-3:0),s=3;s<c;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?r().string.apply(r(),[e,a,t].concat(i)):new Error('The "alt" prop is required in '+t+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:r().object.isRequired,alt:S},z=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],E=["style","className"],N=new Set,O=function(e){var a=e.as,i=void 0===a?"div":a,r=e.image,o=e.style,f=e.backgroundColor,b=e.className,p=e.class,l=e.onStartLoad,w=e.onLoad,m=e.onError,g=n(e,z),u=r.width,h=r.height,v=r.layout,x=function(e,a,t){var c={},i="gatsby-image-wrapper";return"fixed"===t?(c.width=e,c.height=a):"constrained"===t&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:c}}(u,h,v),y=x.style,S=x.className,C=n(x,E),O=(0,c.useRef)(),L=(0,c.useMemo)((function(){return JSON.stringify(r.images)}),[r.images]);p&&(b=p);var J=function(e,a,t){var c="";return"fullWidth"===e&&(c='<div aria-hidden="true" style="padding-top: '+t/a*100+'%;"></div>'),"constrained"===e&&(c='<div style="max-width: '+a+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+t+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),c}(v,u,h);return(0,c.useEffect)((function(){k||(k=Promise.all([t.e(774),t.e(485)]).then(t.bind(t,6485)).then((function(e){var a=e.renderImageToString,t=e.swapPlaceholderImage;return j=a,{renderImageToString:a,swapPlaceholderImage:t}})));var e,a,c=O.current.querySelector("[data-gatsby-image-ssr]");return c&&d()?(c.complete?(null==l||l({wasCached:!0}),null==w||w({wasCached:!0}),setTimeout((function(){c.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==l||l({wasCached:!0}),null==w||w({wasCached:!0}),setTimeout((function(){c.removeAttribute("data-gatsby-image-ssr")}),0)})),void N.add(L)):j&&N.has(L)?void 0:(k.then((function(t){var c=t.renderImageToString,i=t.swapPlaceholderImage;O.current&&(O.current.innerHTML=c(s({isLoading:!0,isLoaded:N.has(L),image:r},g)),N.has(L)||(e=requestAnimationFrame((function(){O.current&&(a=i(O.current,L,N,o,l,w,m))}))))})),function(){e&&cancelAnimationFrame(e),a&&a()})}),[r]),(0,c.useLayoutEffect)((function(){N.has(L)&&j&&(O.current.innerHTML=j(s({isLoading:N.has(L),isLoaded:N.has(L),image:r},g)),null==l||l({wasCached:!0}),null==w||w({wasCached:!0}))}),[r]),(0,c.createElement)(i,s({},C,{style:s({},y,o,{backgroundColor:f}),className:S+(b?" "+b:""),ref:O,dangerouslySetInnerHTML:{__html:J},suppressHydrationWarning:!0}))},L=(0,c.memo)((function(e){return e.image?(0,c.createElement)(O,e):null}));L.propTypes=C,L.displayName="GatsbyImage";var J,T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],q=function(e,a){for(var t=arguments.length,c=new Array(t>2?t-2:0),i=2;i<t;i++)c[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==a&&"height"!==a||!e[a]?r().number.apply(r(),[e,a].concat(c)):new Error('"'+a+'" '+e[a]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),I={src:r().string.isRequired,alt:S,width:q,height:q,sizes:r().string,layout:function(e){if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(J=L,function(e){var a=e.src,t=e.__imageData,i=e.__error,r=n(e,T);return i&&console.warn(i),t?c.createElement(J,s({image:t},r)):(console.warn("Image not loaded",a),null)});A.displayName="StaticImage",A.propTypes=I},1224:function(e){var a=function(e,a){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");a=Object.assign({pascalCase:!1},a);var t;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?a.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var a=!1,t=!1,c=!1,i=0;i<e.length;i++){var r=e[i];a&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,i)+"-"+e.slice(i),a=!1,c=t,t=!0,i++):t&&c&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,i-1)+"-"+e.slice(i-1),c=t,t=!1,a=!0):(a=r.toLowerCase()===r&&r.toUpperCase()!==r,c=t,t=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,a){return a.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),t=e,a.pascalCase?t.charAt(0).toUpperCase()+t.slice(1):t)};e.exports=a,e.exports.default=a},9718:function(e,a,t){var c=t(7294);a.Z=function(e){var a=e.bg,t=e.demoUrl,i=e.title,r=e.date,s=e.codeUrl,n=e.description,d=(e.stacks,e.children);return c.createElement("div",{className:"contents",style:{backgroundColor:a?"rgb(43, 43, 43)":""}},c.createElement("div",{className:"each-project"},c.createElement("a",{target:t?"_blank":"#",rel:"noopener noreferrer",href:t,className:"project-img"},d),c.createElement("div",{className:"project-info"},c.createElement("h1",null,c.createElement("span",null,i),c.createElement("span",{className:"dates"},r)),c.createElement("div",{className:"text-btn"},n&&c.createElement("div",{className:"text"},n.split("\n\n").map((function(e){return c.createElement("p",null,e.split("\n").map((function(e){return c.createElement(c.Fragment,null,e,c.createElement("br",null))})))}))),c.createElement("div",{className:"btn-container"},c.createElement("div",{className:"buttons"},s&&c.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:s},"Code"),t&&c.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t},"Demo")))))))}},9702:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/23fd732288031c7588b7800ba60cbf6f/9484c/markdown-previewer.jpg","srcSet":"/static/23fd732288031c7588b7800ba60cbf6f/3b58f/markdown-previewer.jpg 341w,\\n/static/23fd732288031c7588b7800ba60cbf6f/6aaef/markdown-previewer.jpg 683w,\\n/static/23fd732288031c7588b7800ba60cbf6f/9484c/markdown-previewer.jpg 1365w","sizes":"(min-width: 1365px) 1365px, 100vw"},"sources":[{"srcSet":"/static/23fd732288031c7588b7800ba60cbf6f/7df89/markdown-previewer.webp 341w,\\n/static/23fd732288031c7588b7800ba60cbf6f/2da58/markdown-previewer.webp 683w,\\n/static/23fd732288031c7588b7800ba60cbf6f/c6177/markdown-previewer.webp 1365w","type":"image/webp","sizes":"(min-width: 1365px) 1365px, 100vw"}]},"width":1365,"height":658}')},922:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/c30bcff1bc07f3080aad461afe63e93c/9484c/d3-barchart.jpg","srcSet":"/static/c30bcff1bc07f3080aad461afe63e93c/3b58f/d3-barchart.jpg 341w,\\n/static/c30bcff1bc07f3080aad461afe63e93c/6aaef/d3-barchart.jpg 683w,\\n/static/c30bcff1bc07f3080aad461afe63e93c/9484c/d3-barchart.jpg 1365w","sizes":"(min-width: 1365px) 1365px, 100vw"},"sources":[{"srcSet":"/static/c30bcff1bc07f3080aad461afe63e93c/7df89/d3-barchart.webp 341w,\\n/static/c30bcff1bc07f3080aad461afe63e93c/2da58/d3-barchart.webp 683w,\\n/static/c30bcff1bc07f3080aad461afe63e93c/c6177/d3-barchart.webp 1365w","type":"image/webp","sizes":"(min-width: 1365px) 1365px, 100vw"}]},"width":1365,"height":658}')},3592:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/612c3d56e428cbdbf67f369e6d17c8d1/8b469/anon-message-board.jpg","srcSet":"/static/612c3d56e428cbdbf67f369e6d17c8d1/b80be/anon-message-board.jpg 338w,\\n/static/612c3d56e428cbdbf67f369e6d17c8d1/3b238/anon-message-board.jpg 675w,\\n/static/612c3d56e428cbdbf67f369e6d17c8d1/8b469/anon-message-board.jpg 1350w","sizes":"(min-width: 1350px) 1350px, 100vw"},"sources":[{"srcSet":"/static/612c3d56e428cbdbf67f369e6d17c8d1/eab1f/anon-message-board.webp 338w,\\n/static/612c3d56e428cbdbf67f369e6d17c8d1/fd4db/anon-message-board.webp 675w,\\n/static/612c3d56e428cbdbf67f369e6d17c8d1/a6290/anon-message-board.webp 1350w","type":"image/webp","sizes":"(min-width: 1350px) 1350px, 100vw"}]},"width":1350,"height":656}')},7402:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e28fee0872fd7a2334e55dbf6659ce58/5840f/d3-choropleth-map.jpg","srcSet":"/static/e28fee0872fd7a2334e55dbf6659ce58/b80be/d3-choropleth-map.jpg 338w,\\n/static/e28fee0872fd7a2334e55dbf6659ce58/38a0a/d3-choropleth-map.jpg 676w,\\n/static/e28fee0872fd7a2334e55dbf6659ce58/5840f/d3-choropleth-map.jpg 1351w","sizes":"(min-width: 1351px) 1351px, 100vw"},"sources":[{"srcSet":"/static/e28fee0872fd7a2334e55dbf6659ce58/eab1f/d3-choropleth-map.webp 338w,\\n/static/e28fee0872fd7a2334e55dbf6659ce58/d040a/d3-choropleth-map.webp 676w,\\n/static/e28fee0872fd7a2334e55dbf6659ce58/22208/d3-choropleth-map.webp 1351w","type":"image/webp","sizes":"(min-width: 1351px) 1351px, 100vw"}]},"width":1351,"height":655}')},8712:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f9d81e2ba6603d9d25aa6c17dfd26568/bc2fa/simple-portfolio.jpg","srcSet":"/static/f9d81e2ba6603d9d25aa6c17dfd26568/c4ce5/simple-portfolio.jpg 337w,\\n/static/f9d81e2ba6603d9d25aa6c17dfd26568/9e4cf/simple-portfolio.jpg 675w,\\n/static/f9d81e2ba6603d9d25aa6c17dfd26568/bc2fa/simple-portfolio.jpg 1349w","sizes":"(min-width: 1349px) 1349px, 100vw"},"sources":[{"srcSet":"/static/f9d81e2ba6603d9d25aa6c17dfd26568/87bc5/simple-portfolio.webp 337w,\\n/static/f9d81e2ba6603d9d25aa6c17dfd26568/d9117/simple-portfolio.webp 675w,\\n/static/f9d81e2ba6603d9d25aa6c17dfd26568/9350f/simple-portfolio.webp 1349w","type":"image/webp","sizes":"(min-width: 1349px) 1349px, 100vw"}]},"width":1349,"height":657}')},6526:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#28b8b8","images":{"fallback":{"src":"/static/55bab84b8539911bf874ab3020c1ccba/2fcb3/meteorite-explorer.jpg","srcSet":"/static/55bab84b8539911bf874ab3020c1ccba/3b58f/meteorite-explorer.jpg 341w,\\n/static/55bab84b8539911bf874ab3020c1ccba/87752/meteorite-explorer.jpg 683w,\\n/static/55bab84b8539911bf874ab3020c1ccba/2fcb3/meteorite-explorer.jpg 1365w","sizes":"(min-width: 1365px) 1365px, 100vw"},"sources":[{"srcSet":"/static/55bab84b8539911bf874ab3020c1ccba/7df89/meteorite-explorer.webp 341w,\\n/static/55bab84b8539911bf874ab3020c1ccba/4323c/meteorite-explorer.webp 683w,\\n/static/55bab84b8539911bf874ab3020c1ccba/fe687/meteorite-explorer.webp 1365w","type":"image/webp","sizes":"(min-width: 1365px) 1365px, 100vw"}]},"width":1365,"height":656.0000000000001}')},1626:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e9a0cdba7fbf91eab95b5bd885905567/1c67c/random-quote-machine.jpg","srcSet":"/static/e9a0cdba7fbf91eab95b5bd885905567/3b58f/random-quote-machine.jpg 341w,\\n/static/e9a0cdba7fbf91eab95b5bd885905567/6aaef/random-quote-machine.jpg 683w,\\n/static/e9a0cdba7fbf91eab95b5bd885905567/1c67c/random-quote-machine.jpg 1365w","sizes":"(min-width: 1365px) 1365px, 100vw"},"sources":[{"srcSet":"/static/e9a0cdba7fbf91eab95b5bd885905567/7df89/random-quote-machine.webp 341w,\\n/static/e9a0cdba7fbf91eab95b5bd885905567/2da58/random-quote-machine.webp 683w,\\n/static/e9a0cdba7fbf91eab95b5bd885905567/3aae7/random-quote-machine.webp 1365w","type":"image/webp","sizes":"(min-width: 1365px) 1365px, 100vw"}]},"width":1365,"height":657}')},1239:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/14f375545179ea4b82bda758adcc5f13/fec16/d3-scatter-plot.jpg","srcSet":"/static/14f375545179ea4b82bda758adcc5f13/65bae/d3-scatter-plot.jpg 338w,\\n/static/14f375545179ea4b82bda758adcc5f13/1471e/d3-scatter-plot.jpg 676w,\\n/static/14f375545179ea4b82bda758adcc5f13/fec16/d3-scatter-plot.jpg 1351w","sizes":"(min-width: 1351px) 1351px, 100vw"},"sources":[{"srcSet":"/static/14f375545179ea4b82bda758adcc5f13/2bb1c/d3-scatter-plot.webp 338w,\\n/static/14f375545179ea4b82bda758adcc5f13/69732/d3-scatter-plot.webp 676w,\\n/static/14f375545179ea4b82bda758adcc5f13/8999e/d3-scatter-plot.webp 1351w","type":"image/webp","sizes":"(min-width: 1351px) 1351px, 100vw"}]},"width":1351,"height":658}')},3969:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182828","images":{"fallback":{"src":"/static/cc2a9c895729499099fe1a3af0728710/0189f/calculator.jpg","srcSet":"/static/cc2a9c895729499099fe1a3af0728710/f5a9b/calculator.jpg 341w,\\n/static/cc2a9c895729499099fe1a3af0728710/20435/calculator.jpg 683w,\\n/static/cc2a9c895729499099fe1a3af0728710/0189f/calculator.jpg 1365w","sizes":"(min-width: 1365px) 1365px, 100vw"},"sources":[{"srcSet":"/static/cc2a9c895729499099fe1a3af0728710/f5b17/calculator.webp 341w,\\n/static/cc2a9c895729499099fe1a3af0728710/b516f/calculator.webp 683w,\\n/static/cc2a9c895729499099fe1a3af0728710/2482c/calculator.webp 1365w","type":"image/webp","sizes":"(min-width: 1365px) 1365px, 100vw"}]},"width":1365,"height":654}')},4243:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/5047bd4365462a8e2820fbc8d914d225/9ea9a/maintenance-tracker.jpg","srcSet":"/static/5047bd4365462a8e2820fbc8d914d225/65bae/maintenance-tracker.jpg 338w,\\n/static/5047bd4365462a8e2820fbc8d914d225/9e4cf/maintenance-tracker.jpg 675w,\\n/static/5047bd4365462a8e2820fbc8d914d225/9ea9a/maintenance-tracker.jpg 1350w","sizes":"(min-width: 1350px) 1350px, 100vw"},"sources":[{"srcSet":"/static/5047bd4365462a8e2820fbc8d914d225/2bb1c/maintenance-tracker.webp 338w,\\n/static/5047bd4365462a8e2820fbc8d914d225/d9117/maintenance-tracker.webp 675w,\\n/static/5047bd4365462a8e2820fbc8d914d225/a8c45/maintenance-tracker.webp 1350w","type":"image/webp","sizes":"(min-width: 1350px) 1350px, 100vw"}]},"width":1350,"height":658}')},1393:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#18b898","images":{"fallback":{"src":"/static/6c4a6023ac378b61f580d872cad2cadc/0c2c9/stock-price-checker.jpg","srcSet":"/static/6c4a6023ac378b61f580d872cad2cadc/c4ce5/stock-price-checker.jpg 337w,\\n/static/6c4a6023ac378b61f580d872cad2cadc/9e4cf/stock-price-checker.jpg 675w,\\n/static/6c4a6023ac378b61f580d872cad2cadc/0c2c9/stock-price-checker.jpg 1349w","sizes":"(min-width: 1349px) 1349px, 100vw"},"sources":[{"srcSet":"/static/6c4a6023ac378b61f580d872cad2cadc/87bc5/stock-price-checker.webp 337w,\\n/static/6c4a6023ac378b61f580d872cad2cadc/d9117/stock-price-checker.webp 675w,\\n/static/6c4a6023ac378b61f580d872cad2cadc/95730/stock-price-checker.webp 1349w","type":"image/webp","sizes":"(min-width: 1349px) 1349px, 100vw"}]},"width":1349,"height":658}')},966:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/4223af4dfd3a120bcfbaec3b72e9bac2/1d64c/oneuptime.png","srcSet":"/static/4223af4dfd3a120bcfbaec3b72e9bac2/5ee69/oneuptime.png 341w,\\n/static/4223af4dfd3a120bcfbaec3b72e9bac2/00e92/oneuptime.png 683w,\\n/static/4223af4dfd3a120bcfbaec3b72e9bac2/1d64c/oneuptime.png 1365w","sizes":"(min-width: 1365px) 1365px, 100vw"},"sources":[{"srcSet":"/static/4223af4dfd3a120bcfbaec3b72e9bac2/f5b17/oneuptime.webp 341w,\\n/static/4223af4dfd3a120bcfbaec3b72e9bac2/b516f/oneuptime.webp 683w,\\n/static/4223af4dfd3a120bcfbaec3b72e9bac2/2482c/oneuptime.webp 1365w","type":"image/webp","sizes":"(min-width: 1365px) 1365px, 100vw"}]},"width":1365,"height":654}')},6111:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/2d836bb302443e35b6fbf34e11505072/9ea9a/habit-tracker.jpg","srcSet":"/static/2d836bb302443e35b6fbf34e11505072/65bae/habit-tracker.jpg 338w,\\n/static/2d836bb302443e35b6fbf34e11505072/9e4cf/habit-tracker.jpg 675w,\\n/static/2d836bb302443e35b6fbf34e11505072/9ea9a/habit-tracker.jpg 1350w","sizes":"(min-width: 1350px) 1350px, 100vw"},"sources":[{"srcSet":"/static/2d836bb302443e35b6fbf34e11505072/2bb1c/habit-tracker.webp 338w,\\n/static/2d836bb302443e35b6fbf34e11505072/d9117/habit-tracker.webp 675w,\\n/static/2d836bb302443e35b6fbf34e11505072/a8c45/habit-tracker.webp 1350w","type":"image/webp","sizes":"(min-width: 1350px) 1350px, 100vw"}]},"width":1350,"height":658}')},4655:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d85848","images":{"fallback":{"src":"/static/406ecdddc9ca3c00ecfa6138c965f172/1c67c/pomodoro-timer.jpg","srcSet":"/static/406ecdddc9ca3c00ecfa6138c965f172/3b58f/pomodoro-timer.jpg 341w,\\n/static/406ecdddc9ca3c00ecfa6138c965f172/6aaef/pomodoro-timer.jpg 683w,\\n/static/406ecdddc9ca3c00ecfa6138c965f172/1c67c/pomodoro-timer.jpg 1365w","sizes":"(min-width: 1365px) 1365px, 100vw"},"sources":[{"srcSet":"/static/406ecdddc9ca3c00ecfa6138c965f172/7df89/pomodoro-timer.webp 341w,\\n/static/406ecdddc9ca3c00ecfa6138c965f172/2da58/pomodoro-timer.webp 683w,\\n/static/406ecdddc9ca3c00ecfa6138c965f172/3aae7/pomodoro-timer.webp 1365w","type":"image/webp","sizes":"(min-width: 1365px) 1365px, 100vw"}]},"width":1365,"height":657}')},9409:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/65536f9ba3b3949101b0fce769387dfb/32947/metric-imperial-converter.jpg","srcSet":"/static/65536f9ba3b3949101b0fce769387dfb/65bae/metric-imperial-converter.jpg 338w,\\n/static/65536f9ba3b3949101b0fce769387dfb/9e826/metric-imperial-converter.jpg 676w,\\n/static/65536f9ba3b3949101b0fce769387dfb/32947/metric-imperial-converter.jpg 1351w","sizes":"(min-width: 1351px) 1351px, 100vw"},"sources":[{"srcSet":"/static/65536f9ba3b3949101b0fce769387dfb/2bb1c/metric-imperial-converter.webp 338w,\\n/static/65536f9ba3b3949101b0fce769387dfb/056d4/metric-imperial-converter.webp 676w,\\n/static/65536f9ba3b3949101b0fce769387dfb/505d0/metric-imperial-converter.webp 1351w","type":"image/webp","sizes":"(min-width: 1351px) 1351px, 100vw"}]},"width":1351,"height":661}')},8161:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/35a03d514fe1c8f66985dc82f79fd346/9ea9a/survey-form.jpg","srcSet":"/static/35a03d514fe1c8f66985dc82f79fd346/65bae/survey-form.jpg 338w,\\n/static/35a03d514fe1c8f66985dc82f79fd346/9e4cf/survey-form.jpg 675w,\\n/static/35a03d514fe1c8f66985dc82f79fd346/9ea9a/survey-form.jpg 1350w","sizes":"(min-width: 1350px) 1350px, 100vw"},"sources":[{"srcSet":"/static/35a03d514fe1c8f66985dc82f79fd346/2bb1c/survey-form.webp 338w,\\n/static/35a03d514fe1c8f66985dc82f79fd346/d9117/survey-form.webp 675w,\\n/static/35a03d514fe1c8f66985dc82f79fd346/a8c45/survey-form.webp 1350w","type":"image/webp","sizes":"(min-width: 1350px) 1350px, 100vw"}]},"width":1350,"height":658}')},432:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a030a202fbae53070ef60fb89134445d/8b469/landing-page.jpg","srcSet":"/static/a030a202fbae53070ef60fb89134445d/b80be/landing-page.jpg 338w,\\n/static/a030a202fbae53070ef60fb89134445d/3b238/landing-page.jpg 675w,\\n/static/a030a202fbae53070ef60fb89134445d/8b469/landing-page.jpg 1350w","sizes":"(min-width: 1350px) 1350px, 100vw"},"sources":[{"srcSet":"/static/a030a202fbae53070ef60fb89134445d/eab1f/landing-page.webp 338w,\\n/static/a030a202fbae53070ef60fb89134445d/fd4db/landing-page.webp 675w,\\n/static/a030a202fbae53070ef60fb89134445d/a6290/landing-page.webp 1350w","type":"image/webp","sizes":"(min-width: 1350px) 1350px, 100vw"}]},"width":1350,"height":656}')},2288:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/38c3093ac02e2f45a5088c2bae9a3091/63c83/d3-heat-map.jpg","srcSet":"/static/38c3093ac02e2f45a5088c2bae9a3091/52a65/d3-heat-map.jpg 341w,\\n/static/38c3093ac02e2f45a5088c2bae9a3091/f0c7c/d3-heat-map.jpg 683w,\\n/static/38c3093ac02e2f45a5088c2bae9a3091/63c83/d3-heat-map.jpg 1365w","sizes":"(min-width: 1365px) 1365px, 100vw"},"sources":[{"srcSet":"/static/38c3093ac02e2f45a5088c2bae9a3091/57575/d3-heat-map.webp 341w,\\n/static/38c3093ac02e2f45a5088c2bae9a3091/1952a/d3-heat-map.webp 683w,\\n/static/38c3093ac02e2f45a5088c2bae9a3091/36b73/d3-heat-map.webp 1365w","type":"image/webp","sizes":"(min-width: 1365px) 1365px, 100vw"}]},"width":1365,"height":644}')},1640:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/1f28c4e30ce35fe96d1fabebe5935585/70cbf/d3-tree-map.jpg","srcSet":"/static/1f28c4e30ce35fe96d1fabebe5935585/65bae/d3-tree-map.jpg 338w,\\n/static/1f28c4e30ce35fe96d1fabebe5935585/1471e/d3-tree-map.jpg 676w,\\n/static/1f28c4e30ce35fe96d1fabebe5935585/70cbf/d3-tree-map.jpg 1352w","sizes":"(min-width: 1352px) 1352px, 100vw"},"sources":[{"srcSet":"/static/1f28c4e30ce35fe96d1fabebe5935585/2bb1c/d3-tree-map.webp 338w,\\n/static/1f28c4e30ce35fe96d1fabebe5935585/69732/d3-tree-map.webp 676w,\\n/static/1f28c4e30ce35fe96d1fabebe5935585/1885a/d3-tree-map.webp 1352w","type":"image/webp","sizes":"(min-width: 1352px) 1352px, 100vw"}]},"width":1352,"height":658}')},5052:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/3dfe23ad216e5b7e84ef1e10fbdd7d98/2a74f/tribute-page.jpg","srcSet":"/static/3dfe23ad216e5b7e84ef1e10fbdd7d98/65bae/tribute-page.jpg 338w,\\n/static/3dfe23ad216e5b7e84ef1e10fbdd7d98/75067/tribute-page.jpg 675w,\\n/static/3dfe23ad216e5b7e84ef1e10fbdd7d98/2a74f/tribute-page.jpg 1350w","sizes":"(min-width: 1350px) 1350px, 100vw"},"sources":[{"srcSet":"/static/3dfe23ad216e5b7e84ef1e10fbdd7d98/2bb1c/tribute-page.webp 338w,\\n/static/3dfe23ad216e5b7e84ef1e10fbdd7d98/32c98/tribute-page.webp 675w,\\n/static/3dfe23ad216e5b7e84ef1e10fbdd7d98/8d202/tribute-page.webp 1350w","type":"image/webp","sizes":"(min-width: 1350px) 1350px, 100vw"}]},"width":1350,"height":659}')},654:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/ceda9a59d7467f33ff967ffb97fe150d/1d64c/360soccerconnect.png","srcSet":"/static/ceda9a59d7467f33ff967ffb97fe150d/5ee69/360soccerconnect.png 341w,\\n/static/ceda9a59d7467f33ff967ffb97fe150d/00e92/360soccerconnect.png 683w,\\n/static/ceda9a59d7467f33ff967ffb97fe150d/1d64c/360soccerconnect.png 1365w","sizes":"(min-width: 1365px) 1365px, 100vw"},"sources":[{"srcSet":"/static/ceda9a59d7467f33ff967ffb97fe150d/f5b17/360soccerconnect.webp 341w,\\n/static/ceda9a59d7467f33ff967ffb97fe150d/b516f/360soccerconnect.webp 683w,\\n/static/ceda9a59d7467f33ff967ffb97fe150d/2482c/360soccerconnect.webp 1365w","type":"image/webp","sizes":"(min-width: 1365px) 1365px, 100vw"}]},"width":1365,"height":654}')},6754:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/deb24fb25b3d2d19dab3d08f9678b021/bddd0/documentation-page.jpg","srcSet":"/static/deb24fb25b3d2d19dab3d08f9678b021/b80be/documentation-page.jpg 338w,\\n/static/deb24fb25b3d2d19dab3d08f9678b021/3b238/documentation-page.jpg 675w,\\n/static/deb24fb25b3d2d19dab3d08f9678b021/bddd0/documentation-page.jpg 1350w","sizes":"(min-width: 1350px) 1350px, 100vw"},"sources":[{"srcSet":"/static/deb24fb25b3d2d19dab3d08f9678b021/eab1f/documentation-page.webp 338w,\\n/static/deb24fb25b3d2d19dab3d08f9678b021/fd4db/documentation-page.webp 675w,\\n/static/deb24fb25b3d2d19dab3d08f9678b021/99fb1/documentation-page.webp 1350w","type":"image/webp","sizes":"(min-width: 1350px) 1350px, 100vw"}]},"width":1350,"height":656.9999999999999}')},6047:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/fe560ca7110c975dfac3b3c05c9fb5ea/2ce51/drum-machine.jpg","srcSet":"/static/fe560ca7110c975dfac3b3c05c9fb5ea/3b58f/drum-machine.jpg 341w,\\n/static/fe560ca7110c975dfac3b3c05c9fb5ea/7030e/drum-machine.jpg 682w,\\n/static/fe560ca7110c975dfac3b3c05c9fb5ea/2ce51/drum-machine.jpg 1364w","sizes":"(min-width: 1364px) 1364px, 100vw"},"sources":[{"srcSet":"/static/fe560ca7110c975dfac3b3c05c9fb5ea/7df89/drum-machine.webp 341w,\\n/static/fe560ca7110c975dfac3b3c05c9fb5ea/b6222/drum-machine.webp 682w,\\n/static/fe560ca7110c975dfac3b3c05c9fb5ea/e0f50/drum-machine.webp 1364w","type":"image/webp","sizes":"(min-width: 1364px) 1364px, 100vw"}]},"width":1364,"height":657}')}}]);
//# sourceMappingURL=c169b6902947a77fec05096cb4da441bfcc3d6f1-884cf6bdad07c644137d.js.map