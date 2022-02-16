"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[585],{5318:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(7378);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),i=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=i(n),m=a,g=s["".concat(l,".").concat(m)]||s[m]||p[m]||o;return n?t.createElement(g,c(c({ref:r},u),{},{components:n})):t.createElement(g,c({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,c[1]=d;for(var i=2;i<o;i++)c[i]=n[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1033:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var t=n(5773),a=n(808),o=(n(7378),n(5318)),c=["components"],d={slug:"/commerce"},l="Commerce",i={unversionedId:"auto-generated/commerce",id:"auto-generated/commerce",title:"Commerce",description:"`randAccessory`",source:"@site/docs/auto-generated/commerce.mdx",sourceDirName:"auto-generated",slug:"/commerce",permalink:"/falso/docs/commerce",editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/commerce"},sidebar:"falso",previous:{title:"Comic book",permalink:"/falso/docs/comic book"},next:{title:"Company",permalink:"/falso/docs/company"}},u=[{value:"<code>randAccessory</code>",id:"randaccessory",children:[],level:3},{value:"<code>randClothingSize</code>",id:"randclothingsize",children:[],level:3},{value:"<code>randDepartment</code>",id:"randdepartment",children:[],level:3},{value:"<code>randProductAdjective</code>",id:"randproductadjective",children:[],level:3},{value:"<code>randProductCategory</code>",id:"randproductcategory",children:[],level:3},{value:"<code>randProductDescription</code>",id:"randproductdescription",children:[],level:3},{value:"<code>randProductMaterial</code>",id:"randproductmaterial",children:[],level:3},{value:"<code>randProductName</code>",id:"randproductname",children:[],level:3}],p={toc:u};function s(e){var r=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commerce"},"Commerce"),(0,o.kt)("h3",{id:"randaccessory"},(0,o.kt)("inlineCode",{parentName:"h3"},"randAccessory")),(0,o.kt)("p",null,"Generate a random accessory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAccessory } from '@ngneat/falso';\n\nrandAccessory()\nrandAccessory({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAccessory()}/>;\n}\n")),(0,o.kt)("h3",{id:"randclothingsize"},(0,o.kt)("inlineCode",{parentName:"h3"},"randClothingSize")),(0,o.kt)("p",null,"Generate a random clothing size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randClothingSize } from '@ngneat/falso';\n\nrandClothingSize()\nrandClothingSize({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randClothingSize()}/>;\n}\n")),(0,o.kt)("h3",{id:"randdepartment"},(0,o.kt)("inlineCode",{parentName:"h3"},"randDepartment")),(0,o.kt)("p",null,"Generate a random department."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDepartment } from '@ngneat/falso';\n\nrandDepartment()\nrandDepartment({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDepartment()}/>;\n}\n")),(0,o.kt)("h3",{id:"randproductadjective"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductAdjective")),(0,o.kt)("p",null,"Generate a random product adjective."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductAdjective } from '@ngneat/falso';\n\nrandProductAdjective()\nrandProductAdjective({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randProductAdjective()}/>;\n}\n")),(0,o.kt)("h3",{id:"randproductcategory"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductCategory")),(0,o.kt)("p",null,"Generate a random product category."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductCategory } from '@ngneat/falso';\n\nrandProductCategory()\nrandProductCategory({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randProductCategory()}/>;\n}\n")),(0,o.kt)("h3",{id:"randproductdescription"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductDescription")),(0,o.kt)("p",null,"Generate a random product description."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductDescription } from '@ngneat/falso';\n\nrandProductDescription()\nrandProductDescription({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randProductDescription()}/>;\n}\n")),(0,o.kt)("h3",{id:"randproductmaterial"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductMaterial")),(0,o.kt)("p",null,"Generate a random product material."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductMaterial } from '@ngneat/falso';\n\nrandProductMaterial()\nrandProductMaterial({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randProductMaterial()}/>;\n}\n")),(0,o.kt)("h3",{id:"randproductname"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductName")),(0,o.kt)("p",null,"Generate a random product name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductName } from '@ngneat/falso';\n\nrandProductName()\nrandProductName({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randProductName()}/>;\n}\n")))}s.isMDXComponent=!0}}]);