(this["webpackJsonpapp2.12-2.14"]=this["webpackJsonpapp2.12-2.14"]||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(17),r=n.n(a),i=n(18),o=n(4),s=n(6),l=n.n(s),u=(n(40),n(0)),j=function(e){var t=e.handleFilterName;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Find a country"}),Object(u.jsx)("h4",{children:"get country's statistics and capital's weather"}),Object(u.jsx)("input",{placeholder:"Type country's name",onChange:t})]})},d=(n(42),function(e){var t=e.country,n=Object(c.useState)(void 0),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){l.a.get("https://api.weatherapi.com/v1/current.json?key=".concat("0eef3600e40f46eeae680210220605","&q=").concat(t.name.common,"&aqi=no")).then((function(e){return i(e.data)}))}),[t.name.common]),console.log(r),void 0===r?Object(u.jsx)("div",{children:"Fetching data..."}):Object(u.jsxs)("div",{className:"weather__container",children:[Object(u.jsxs)("h1",{children:["Weather in ",t.capital,":"]}),Object(u.jsxs)("div",{children:["It's ",r.current.condition.text.toLocaleLowerCase(),"."]}),Object(u.jsx)("p",{children:Object(u.jsx)("img",{className:"weather__logo",width:"100px",src:r.current.condition.icon,alt:t.name.capital})}),Object(u.jsxs)("div",{children:["Todays temperature: ",r.current.temp_c," \xb0C"]}),Object(u.jsxs)("div",{children:["Humidity is ",r.current.humidity,"%"]})]})}),h=function(e){var t=e.country;return console.log(t),Object(u.jsxs)("div",{className:"country__container",children:[Object(u.jsxs)("div",{className:"statistics__container",children:[Object(u.jsx)("h1",{children:t.name.common}),Object(u.jsxs)("div",{children:["Capital ",t.capital]}),Object(u.jsxs)("div",{children:["Population ",t.population]}),Object(u.jsx)("h3",{children:"Languages"}),Object.values(t.languages).map((function(e){return Object(u.jsx)("ul",{children:e},e)})),Object(u.jsx)("p",{children:Object(u.jsx)("img",{src:t.flags.svg,alt:t.name.common})})]}),Object(u.jsx)(d,{country:t})]})},m=function(e){var t=e.displayedCountries,n=e.handleShowClick,c=t.length;if(console.log("Countries length",c),c>10)return"Too many matches, specify another filter.";if(c<=10&&c>1)return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsxs)("ul",{className:"",children:[e.name.common,Object(u.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Show country"})]},e.name.common)}))});if(1===c){var a=t[0];return Object(u.jsx)(h,{country:a})}return Object(u.jsx)("div",{children:"No matches found "})},b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(o.a)(r,2),d=s[0],h=s[1];Object(c.useEffect)((function(){l.a.get("https://restcountries.com/v3.1/all").then((function(e){a(e.data)})).catch((function(e){return console.error("Cannot fetch data")}))}),[]);return Object(u.jsxs)("div",{className:"app__container",children:[Object(u.jsx)(j,{handleFilterName:function(e){var t=e.target.value.toLocaleLowerCase(),c=Object(i.a)(n).filter((function(e){return e.name.common.toLocaleLowerCase().includes(t)}));h(c)}}),Object(u.jsx)(m,{displayedCountries:d,handleShowClick:function(e){var t=[];t.push(e),h(t)}})]})};n(43).config(),r.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.43d03f54.chunk.js.map