(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(8),c=(a(0),a(268)),r={id:"terminology",title:"Terminology"},o={unversionedId:"terminology",id:"terminology",isDocsHomePage:!1,title:"Terminology",description:"Overview",source:"@site/docs/terminology.md",slug:"/terminology",permalink:"/docs/next/terminology",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/terminology.md",version:"current",lastUpdatedBy:"Samuel Stanton",lastUpdatedAt:1614621005,sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/next/intro"},next:{title:"Tutorials intro",permalink:"/docs/next/tutorials/intro"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Input Configs",id:"input-configs",children:[{value:"Primary Config",id:"primary-config",children:[]},{value:"Structured Config",id:"structured-config",children:[]},{value:"Defaults List",id:"defaults-list",children:[]},{value:"Config Group",id:"config-group",children:[]},{value:"Config Group Option",id:"config-group-option",children:[]},{value:"Config Node",id:"config-node",children:[]},{value:"Package",id:"package",children:[]},{value:"Package Directive",id:"package-directive",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Output Config Object",id:"output-config-object",children:[]},{value:"Misc",id:"misc",children:[{value:"Config Search Path",id:"config-search-path",children:[]},{value:"Plugins",id:"plugins",children:[]}]}],b={toc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"TODO: Update this page prior tp the 1.1 release."))),Object(c.b)("p",null,"This page describes some common concepts in Hydra.\nMost of the concepts are described in much more details throughout the documentation."),Object(c.b)("h2",{id:"input-configs"},"Input Configs"),Object(c.b)("p",null,"Input configs are used to construct the config object used by the application.",Object(c.b)("br",{parentName:"p"}),"\n","Supported input configs are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Config Files (",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://yaml.org/"}),"YAML")," files)"),Object(c.b)("li",{parentName:"ul"},"Command line arguments"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#structured-config"}),"Structured Configs")," (Python ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/dataclasses.html"}),"@dataclasses"),")")),Object(c.b)("h3",{id:"primary-config"},"Primary Config"),Object(c.b)("p",null,"The input config named in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/your_first_app/simple_cli"}),Object(c.b)("inlineCode",{parentName:"a"},"@hydra.main()"))," or in\nthe ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/experimental/compose_api"}),Object(c.b)("inlineCode",{parentName:"a"},"Compose API")),".  "),Object(c.b)("h3",{id:"structured-config"},"Structured Config"),Object(c.b)("p",null,"A @dataclass or an instance of a @dataclass that is used to construct a config. These enable both runtime and static type checking."),Object(c.b)("p",null,"There are two primary patterns for using Structured configs:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"As an ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#input-configs"}),"Input Config"),"."),Object(c.b)("li",{parentName:"ul"},"As a schema validating Config Files and command line arguments.")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:'title="Example:"',title:'"Example:"'}),"@dataclass\nclass User:\n  name: str\n  age: int\n")),Object(c.b)("h3",{id:"defaults-list"},"Defaults List"),Object(c.b)("p",null,"A list in an ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#input-configs"}),"Input Config")," that instructs Hydra how to build the config.\nThe list is typically composed of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#config-group-option"}),"Config Group Options"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Example: config.yaml"',title:'"Example:','config.yaml"':!0}),"defaults:\n  - db: mysql\n  - schema: school\n")),Object(c.b)("h3",{id:"config-group"},"Config Group"),Object(c.b)("p",null,"A Config Group is a mutually exclusive set of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#config-group-option"}),"Config Group Options"),".\nConfig Groups can be hierarchical and in that case the path elements are separated by a forward slash ('/')\nregardless of the operating system."),Object(c.b)("h3",{id:"config-group-option"},"Config Group Option"),Object(c.b)("p",null,"One of the configs in a Config Group."),Object(c.b)("h3",{id:"config-node"},"Config Node"),Object(c.b)("p",null,"A Config Node is either a ",Object(c.b)("inlineCode",{parentName:"p"},"Value Node")," (a primitive type), or a ",Object(c.b)("inlineCode",{parentName:"p"},"Container Node"),".  A ",Object(c.b)("inlineCode",{parentName:"p"},"Container Node")," is a list or dictionary of ",Object(c.b)("inlineCode",{parentName:"p"},"Value Nodes"),"."),Object(c.b)("h3",{id:"package"},"Package"),Object(c.b)("p",null,"A Package is the path to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#config-node"}),"Config Node")," in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#output-config-object"}),"Config Object"),". "),Object(c.b)("h3",{id:"package-directive"},"Package Directive"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/advanced/overriding_packages"}),"Package Directive")," specifies the root ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#package"}),"Package")," of a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#input-configs"}),"Config File")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"TODO: fix"))),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Input config: mi6/agent/james_bond.yaml"',title:'"Input',"config:":!0,'mi6/agent/james_bond.yaml"':!0}),"# @package _group_\ncodename: '007'\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Resulting config"',title:'"Resulting','config"':!0}),"mi6:\n    agent:\n        codename: '007'\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#config-group"}),"Config Group"),": mi6/agent"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#config-group-option"}),"Config Group Option"),": james_bond  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#config-node"}),"Container Nodes"),": ",Object(c.b)("inlineCode",{parentName:"li"},"{codename: '007'}"),", ","\xa0",". . . ","\xa0",",",Object(c.b)("inlineCode",{parentName:"li"},"{mi6: {agent: {codename: '007'}}}")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#config-node"}),"Value Node"),": '007'"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#package"}),"Packages")," ",Object(c.b)("inlineCode",{parentName:"li"},"<empty>"),", ",Object(c.b)("inlineCode",{parentName:"li"},"mi6"),", ",Object(c.b)("inlineCode",{parentName:"li"},"mi6.agent"),", ",Object(c.b)("inlineCode",{parentName:"li"},"mi6.agent.codename")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#package-directive"}),"Package directive")," : ",Object(c.b)("inlineCode",{parentName:"li"},"@package _group_"),", which expands to ",Object(c.b)("inlineCode",{parentName:"li"},"mi6.agent"))),Object(c.b)("h2",{id:"output-config-object"},"Output Config Object"),Object(c.b)("p",null,"The config for the application. It is a dictionary of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#config-node"}),"Config Nodes")," generated from the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#input-configs"}),"Input Configs"),"."),Object(c.b)("h2",{id:"misc"},"Misc"),Object(c.b)("h3",{id:"config-search-path"},"Config Search Path"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/advanced/search_path"}),"Config Search Path")," is a list of paths that are searched in order to find configs. It is similar to\nthe Python ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"}),"PYTHONPATH"),"."),Object(c.b)("h3",{id:"plugins"},"Plugins"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/advanced/plugins"}),"Plugins")," extend Hydra's capabilities. Some examples are Launcher and Sweeper."))}p.isMDXComponent=!0},268:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(r,".").concat(u)]||s[u]||d[u]||c;return a?i.a.createElement(m,o(o({ref:t},b),{},{components:a})):i.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var b=2;b<c;b++)r[b]=a[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);