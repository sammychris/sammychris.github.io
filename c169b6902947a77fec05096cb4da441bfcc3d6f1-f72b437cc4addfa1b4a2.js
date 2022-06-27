"use strict";(self.webpackChunksammy_s_portfolio=self.webpackChunksammy_s_portfolio||[]).push([[934],{6413:function(e,t,r){r.d(t,{L:function(){return f},M:function(){return C},P:function(){return E},S:function(){return P},_:function(){return s},a:function(){return o},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return l}});var a=r(7294),n=(r(1224),r(5697)),i=r.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,p=["children"],g=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,r=s(e,p);return a.createElement(a.Fragment,null,a.createElement(g,o({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return a.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},b=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,c=s(e,v),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(y,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:u})})),d):d};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],E=function(e){var t=e.fallback,r=s(e,w);return t?a.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(m=b.propTypes)?void 0:m.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var C=function(e){return a.createElement(a.Fragment,null,a.createElement(b,o({},e)),a.createElement("noscript",null,a.createElement(b,o({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=b.propTypes;var L,k,S=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:S},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],N=new Set,_=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=s(e,I),v=i.width,y=i.height,b=i.layout,w=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(v,y,b),E=w.style,C=w.className,S=s(w,T),x=(0,a.useRef)(),_=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var O=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,v,y);return(0,a.useEffect)((function(){L||(L=Promise.all([r.e(774),r.e(485)]).then(r.bind(r,6485)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=x.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void N.add(_)):k&&N.has(_)?void 0:(L.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;x.current&&(x.current.innerHTML=a(o({isLoading:!0,isLoaded:N.has(_),image:i},h)),N.has(_)||(e=requestAnimationFrame((function(){x.current&&(t=n(x.current,_,N,c,p,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){N.has(_)&&k&&(x.current.innerHTML=k(o({isLoading:N.has(_),isLoaded:N.has(_),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},S,{style:o({},E,c,{backgroundColor:u}),className:C+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,a.memo)((function(e){return e.image?(0,a.createElement)(_,e):null}));O.propTypes=x,O.displayName="GatsbyImage";var q,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],j=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:S,width:j,height:j,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(q=O,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=s(e,A);return n&&console.warn(n),r?a.createElement(q,o({image:r},i)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=z},1224:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},252:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(7294),n=r(5444),i=r(6413),o=function(e){var t=e.name;e.props;return a.createElement(n.i1,{query:"2080156107",render:function(e){var r=e.images.edges.find((function(e){var r=e.node;return r.name===t||r.relativePath.includes(t)})),n=(0,i.c)(r.node);return console.log({imageData:n,file:r.node}),a.createElement("img",{src:"/static/ceda9a59d7467f33ff967ffb97fe150d/360soccerconnect.png"})}})},s=(r(7064),function(e){var t=e.bg,r=e.demoUrl,n=e.title,i=e.date,s=e.codeUrl,l=e.description,c=(e.stacks,e.children);return a.createElement("div",{className:"contents",style:{backgroundColor:t?"rgb(43, 43, 43)":""}},a.createElement("div",{className:"each-project"},a.createElement("a",{target:r?"_blank":"#",rel:"noopener noreferrer",href:r,className:"project-img"},a.createElement(o,{name:"360soccerconnect"}),c),a.createElement("div",{className:"project-info"},a.createElement("h1",null,a.createElement("span",null,n),a.createElement("span",{className:"dates"},i)),a.createElement("div",{className:"text-btn"},l&&a.createElement("div",{className:"text"},l.split("\n\n").map((function(e){return a.createElement("p",null,e.split("\n").map((function(e){return a.createElement(a.Fragment,null,e,a.createElement("br",null))})))}))),a.createElement("div",{className:"btn-container"},a.createElement("div",{className:"buttons"},s&&a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:s},"Code"),r&&a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r},"Demo")))))))})}}]);
//# sourceMappingURL=c169b6902947a77fec05096cb4da441bfcc3d6f1-f72b437cc4addfa1b4a2.js.map