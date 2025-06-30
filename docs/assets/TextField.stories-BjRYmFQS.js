import{R as e,r as re}from"./iframe-DPTEoTx4.js";const m=e.forwardRef(({label:g,error:u,helperText:h,className:C,onChange:r,value:x,variant:G="light",...t},J)=>{const[ae,y]=re.useState(!1),K=()=>{r&&r("")},M=()=>{y(!0)},Q=()=>{y(!1)},X="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm",Y=u?"border-red-500 focus:ring-red-500 focus:border-red-500":G==="dark"?"bg-gray-800 text-white border-gray-700 focus:ring-blue-600 focus:border-blue-600":"bg-white text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500",Z=t.disabled?"opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-700 dark:text-gray-400":"";return e.createElement("div",null,g&&e.createElement("label",{htmlFor:t.id,className:"block text-sm font-medium text-gray-700 dark:text-gray-300"},g),e.createElement("div",{className:"relative mt-1"},e.createElement("input",{ref:J,type:"text",className:`${X} ${Y} ${Z} ${C||""} pr-8`.trim(),onChange:ee=>r==null?void 0:r(ee.target.value),value:x,onFocus:M,onBlur:Q,...t}),x&&r&&!t.disabled&&e.createElement("button",{type:"button",className:"absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 text-gray-500 focus:outline-none dark:text-gray-400",onClick:K,"aria-label":"Clear input"},"×")),(h||u)&&e.createElement("p",{className:`mt-1 text-xs ${u?"text-red-600":"text-gray-500 dark:text-gray-400"}`},h))});m.displayName="TextField";m.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"light"',computed:!1}}},composes:["Omit"]};const te=()=>{},ne={title:"Components/TextField",component:m,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired text field component with support for different variants, states, and validation."}}},tags:["autodocs"],argTypes:{variant:{options:["light","dark"],control:{type:"radio"},description:"TextField variant"},disabled:{control:{type:"boolean"},description:"Disable the text field"},error:{control:{type:"boolean"},description:"Show error state"},label:{control:{type:"text"},description:"Field label"},placeholder:{control:{type:"text"},description:"Placeholder text"},helperText:{control:{type:"text"},description:"Helper or error text"}},args:{onChange:te}},a={args:{placeholder:"Enter text...",variant:"light"}},s={args:{value:"Hello, world!",placeholder:"Enter text...",variant:"light"}},o={args:{placeholder:"Enter text...",variant:"dark"}},n={args:{value:"Hello, world!",placeholder:"Enter text...",variant:"dark"}},l={args:{placeholder:"Enter text...",disabled:!0,variant:"light"}},i={args:{placeholder:"Enter text...",error:!0,helperText:"This is an error message.",variant:"light"}},d={args:{label:"Username",placeholder:"Enter your username",variant:"light"}},c={args:{label:"Email Address",placeholder:"Enter your email",helperText:"We will never share your email with anyone.",variant:"light"}},p={args:{label:"Password",placeholder:"Enter your password",type:"password",required:!0,variant:"light"}};var b,v,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    variant: "light"
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var E,w,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: "Hello, world!",
    placeholder: "Enter text...",
    variant: "light"
  }
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var k,S,F;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    variant: "dark"
  }
}`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var W,q,D;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: "Hello, world!",
    placeholder: "Enter text...",
    variant: "dark"
  }
}`,...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var H,N,R;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    disabled: true,
    variant: "light"
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var $,A,L;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    error: true,
    helperText: "This is an error message.",
    variant: "light"
  }
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var _,O,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    variant: "light"
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var B,I,U;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    helperText: "We will never share your email with anyone.",
    variant: "light"
  }
}`,...(U=(I=c.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var V,j,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    required: true,
    variant: "light"
  }
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const le=["Default","WithText","Dark","DarkWithText","Disabled","Error","WithLabel","WithLabelAndHelper","Required"];export{o as Dark,n as DarkWithText,a as Default,l as Disabled,i as Error,p as Required,d as WithLabel,c as WithLabelAndHelper,s as WithText,le as __namedExportsOrder,ne as default};
