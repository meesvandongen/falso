"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[528],{5318:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return p}});var a=r(7378);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},d=Object.keys(e);for(a=0;a<d.length;a++)r=d[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)r=d[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),i=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,d=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(r),p=t,g=m["".concat(c,".").concat(p)]||m[p]||s[p]||d;return r?a.createElement(g,o(o({ref:n},u),{},{components:r})):a.createElement(g,o({ref:n},u))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var d=r.length,o=new Array(d);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var i=2;i<d;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4256:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var a=r(5773),t=r(808),d=(r(7378),r(5318)),o=["components"],l={slug:"/finance"},c="Finance",i={unversionedId:"auto-generated/finance",id:"auto-generated/finance",title:"Finance",description:"`randAccount`",source:"@site/docs/auto-generated/finance.mdx",sourceDirName:"auto-generated",slug:"/finance",permalink:"/falso/docs/finance",editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/finance"},sidebar:"falso",previous:{title:"Entities",permalink:"/falso/docs/entities"},next:{title:"Food",permalink:"/falso/docs/food"}},u=[{value:"<code>randAccount</code>",id:"randaccount",children:[],level:3},{value:"<code>randBitcoinAddress</code>",id:"randbitcoinaddress",children:[],level:3},{value:"<code>randCreditCardCVV</code>",id:"randcreditcardcvv",children:[],level:3},{value:"<code>randCreditCardIssuer</code>",id:"randcreditcardissuer",children:[],level:3},{value:"<code>randCreditCardNumber</code>",id:"randcreditcardnumber",children:[],level:3},{value:"<code>randCurrencyCode</code>",id:"randcurrencycode",children:[],level:3},{value:"<code>randCurrencyName</code>",id:"randcurrencyname",children:[],level:3},{value:"<code>randCurrencySymbol</code>",id:"randcurrencysymbol",children:[],level:3},{value:"<code>randEthereumAddress</code>",id:"randethereumaddress",children:[],level:3},{value:"<code>randIban</code>",id:"randiban",children:[],level:3},{value:"<code>randMask</code>",id:"randmask",children:[],level:3},{value:"<code>randRoutingNumber</code>",id:"randroutingnumber",children:[],level:3},{value:"<code>randTransactionType</code>",id:"randtransactiontype",children:[],level:3}],s={toc:u};function m(e){var n=e.components,r=(0,t.Z)(e,o);return(0,d.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"finance"},"Finance"),(0,d.kt)("h3",{id:"randaccount"},(0,d.kt)("inlineCode",{parentName:"h3"},"randAccount")),(0,d.kt)("p",null,"Generate a random account."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAccount } from '@ngneat/falso';\n\nrandAccount()\nrandAccount({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAccount()}/>;\n}\n")),(0,d.kt)("h3",{id:"randbitcoinaddress"},(0,d.kt)("inlineCode",{parentName:"h3"},"randBitcoinAddress")),(0,d.kt)("p",null,"Generate a random bitcoin-address."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randBitcoinAddress } from '@ngneat/falso';\n\nrandBitcoinAddress()\nrandBitcoinAddress({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randBitcoinAddress()}/>;\n}\n")),(0,d.kt)("h3",{id:"randcreditcardcvv"},(0,d.kt)("inlineCode",{parentName:"h3"},"randCreditCardCVV")),(0,d.kt)("p",null,"Generate a random credit card CVV."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCreditCardCVV } from '@ngneat/falso';\n\nrandCreditCardCVV()\nrandCreditCardCVV({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCreditCardCVV()}/>;\n}\n")),(0,d.kt)("h3",{id:"randcreditcardissuer"},(0,d.kt)("inlineCode",{parentName:"h3"},"randCreditCardIssuer")),(0,d.kt)("p",null,"Generate a random credit card issuer."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCreditCardIssuer } from '@ngneat/falso';\n\nrandCreditCardIssuer()\nrandCreditCardIssuer({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCreditCardIssuer()}/>;\n}\n")),(0,d.kt)("h3",{id:"randcreditcardnumber"},(0,d.kt)("inlineCode",{parentName:"h3"},"randCreditCardNumber")),(0,d.kt)("p",null,"Generate a random credit card number."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCreditCardNumber } from '@ngneat/falso';\n\nrandCreditCardNumber()\nrandCreditCardNumber({ issuer: 'Visa'})\nrandCreditCardNumber({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCreditCardNumber()}/>;\n}\n")),(0,d.kt)("h3",{id:"randcurrencycode"},(0,d.kt)("inlineCode",{parentName:"h3"},"randCurrencyCode")),(0,d.kt)("p",null,"Generate a random currency code."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCurrencyCode } from '@ngneat/falso';\n\nrandCurrencyCode()\nrandCurrencyCode({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCurrencyCode()}/>;\n}\n")),(0,d.kt)("h3",{id:"randcurrencyname"},(0,d.kt)("inlineCode",{parentName:"h3"},"randCurrencyName")),(0,d.kt)("p",null,"Generate a random currency name."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCurrencyName } from '@ngneat/falso';\n\nrandCurrencyName()\nrandCurrencyName({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCurrencyName()}/>;\n}\n")),(0,d.kt)("h3",{id:"randcurrencysymbol"},(0,d.kt)("inlineCode",{parentName:"h3"},"randCurrencySymbol")),(0,d.kt)("p",null,"Generate a random currency symbol."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCurrencySymbol } from '@ngneat/falso';\n\nrandCurrencySymbol()\nrandCurrencySymbol({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCurrencySymbol()}/>;\n}\n")),(0,d.kt)("h3",{id:"randethereumaddress"},(0,d.kt)("inlineCode",{parentName:"h3"},"randEthereumAddress")),(0,d.kt)("p",null,"Generate a random ethereum address."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randEthereumAddress } from '@ngneat/falso';\n\nrandEthereumAddress()\nrandEthereumAddress({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randEthereumAddress()}/>;\n}\n")),(0,d.kt)("h3",{id:"randiban"},(0,d.kt)("inlineCode",{parentName:"h3"},"randIban")),(0,d.kt)("p",null,"Generate a random ibn."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randIban } from '@ngneat/falso';\n\nrandIban()\nrandIban({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randIban()}/>;\n}\n")),(0,d.kt)("h3",{id:"randmask"},(0,d.kt)("inlineCode",{parentName:"h3"},"randMask")),(0,d.kt)("p",null,"Generate a random mask."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randMask } from '@ngneat/falso';\n\nrandMask()\nrandMask({ mask: '@#### @##' })\nrandMask({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randMask()}/>;\n}\n")),(0,d.kt)("h3",{id:"randroutingnumber"},(0,d.kt)("inlineCode",{parentName:"h3"},"randRoutingNumber")),(0,d.kt)("p",null,"Generate a random routing number."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randRoutingNumber } from '@ngneat/falso';\n\nrandRoutingNumber()\nrandRoutingNumber({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randRoutingNumber()}/>;\n}\n")),(0,d.kt)("h3",{id:"randtransactiontype"},(0,d.kt)("inlineCode",{parentName:"h3"},"randTransactionType")),(0,d.kt)("p",null,"Generate a random transaction type."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import { randTransactionType } from '@ngneat/falso';\n\nrandTransactionType()\nrandTransactionType({ length: 10 })\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randTransactionType()}/>;\n}\n")))}m.isMDXComponent=!0}}]);