import{R as e}from"./iframe-DPTEoTx4.js";import{B as d}from"./Button-Vw-cbfqZ.js";import{I as o}from"./Icon-eIzZENis.js";const i=e.forwardRef(({title:l,leftContent:q,rightContent:w,showBack:R=!1,onBack:S,variant:c="default",className:I="",testId:O,...C},z)=>{const D={default:"bg-background-primary dark:bg-background-primary-dark border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark",large:"bg-background-primary dark:bg-background-primary-dark border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark pb-2",transparent:"bg-transparent"},L={default:"text-ios-headline",large:"text-ios-large-title",transparent:"text-ios-headline"};return e.createElement("nav",{ref:z,className:` ${D[c]} flex items-center justify-between bg-opacity-95 px-4 py-3 backdrop-blur-sm dark:bg-opacity-95 ${I} `.trim(),"data-testid":O,...C},e.createElement("div",{className:"flex min-w-0 flex-1 items-center"},R&&e.createElement("button",{type:"button",onClick:S,className:"mr-3 p-1 text-systemBlue-500 transition-colors hover:text-systemBlue-600 dark:text-systemBlue-400 dark:hover:text-systemBlue-300","aria-label":"Go back"},e.createElement(o,{name:"chevron",size:"medium",className:"rotate-180"})),q),l&&e.createElement("div",{className:"flex-1 px-4 text-center"},e.createElement("h1",{className:`${L[c]} truncate font-semibold text-label-primary dark:text-label-primary-dark`},l)),e.createElement("div",{className:"flex min-w-0 flex-1 items-center justify-end"},w))});i.displayName="NavigationBar";i.__docgenInfo={description:"iOS-inspired navigation bar component",methods:[],displayName:"NavigationBar",props:{title:{required:!1,tsType:{name:"string"},description:"Navigation title"},leftContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Left side content"},rightContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right side content"},showBack:{required:!1,tsType:{name:"boolean"},description:"Show back button",defaultValue:{value:"false",computed:!1}},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Back button handler"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "large" | "transparent"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"large"'},{name:"literal",value:'"transparent"'}]},description:"Navigation bar variant",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const V={title:"Navigation/NavigationBar",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"iOS-inspired navigation bar component."}}},tags:["autodocs"]},a={args:{title:"Home"}},t={args:{title:"Details",showBack:!0,onBack:()=>console.log("Back pressed")}},r={args:{title:"Messages",rightContent:e.createElement("div",{className:"flex gap-2"},e.createElement(d,{variant:"ghost",size:"small"},e.createElement(o,{name:"search"})),e.createElement(d,{variant:"ghost",size:"small"},e.createElement(o,{name:"plus"})))}},n={args:{title:"Large Title",variant:"large"}},s={args:{title:"Transparent",variant:"transparent"}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "Home"
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Details",
    showBack: true,
    onBack: () => console.log("Back pressed")
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,k,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Messages",
    rightContent: <div className="flex gap-2">\r
        <Button variant="ghost" size="small">\r
          <Icon name="search" />\r
        </Button>\r
        <Button variant="ghost" size="small">\r
          <Icon name="plus" />\r
        </Button>\r
      </div>
  }
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var B,h,N;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: "Large Title",
    variant: "large"
  }
}`,...(N=(h=n.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var x,T,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Transparent",
    variant: "transparent"
  }
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const $=["Default","WithBackButton","WithActions","LargeTitle","Transparent"];export{a as Default,n as LargeTitle,s as Transparent,r as WithActions,t as WithBackButton,$ as __namedExportsOrder,V as default};
