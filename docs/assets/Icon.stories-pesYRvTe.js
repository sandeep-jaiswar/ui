import{R as e}from"./iframe-DPTEoTx4.js";import{I as r}from"./Icon-eIzZENis.js";import{T as N}from"./Typography-RJZoBOJc.js";const T={title:"Foundation/Icon",component:r,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired icon component with system icons and custom SVG support."}}},tags:["autodocs"],argTypes:{name:{control:"select",options:["chevron","plus","minus","close","check","search","heart","star","home","settings"],description:"System icon name"},size:{control:"select",options:["small","medium","large","xlarge"],description:"Icon size"},color:{control:"select",options:["primary","secondary","tertiary","system","success","warning","error","custom"],description:"Icon color"},customColor:{control:"color",description:"Custom color value",if:{arg:"color",eq:"custom"}}},args:{name:"star"}},a={},s={render:()=>e.createElement("div",{className:"grid grid-cols-5 gap-4"},["chevron","plus","minus","close","check","search","heart","star","home","settings"].map(n=>e.createElement("div",{key:n,className:"text-center"},e.createElement(r,{name:n,size:"large"}),e.createElement(N,{variant:"caption2",className:"mt-1"},n))))},o={render:()=>e.createElement("div",{className:"flex items-center gap-4"},e.createElement(r,{name:"star",size:"small"}),e.createElement(r,{name:"star",size:"medium"}),e.createElement(r,{name:"star",size:"large"}),e.createElement(r,{name:"star",size:"xlarge"}))},c={render:()=>e.createElement("div",{className:"flex gap-4"},e.createElement(r,{name:"heart",color:"primary"}),e.createElement(r,{name:"heart",color:"system"}),e.createElement(r,{name:"heart",color:"success"}),e.createElement(r,{name:"heart",color:"warning"}),e.createElement(r,{name:"heart",color:"error"}))},t={render:()=>e.createElement(r,{size:"large"},e.createElement("circle",{cx:"8",cy:"8",r:"6",fill:"currentColor"}))};var m,l,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,d,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-5 gap-4">\r
      {["chevron", "plus", "minus", "close", "check", "search", "heart", "star", "home", "settings"].map(iconName => <div key={iconName} className="text-center">\r
          <Icon name={iconName} size="large" />\r
          <Typography variant="caption2" className="mt-1">\r
            {iconName}\r
          </Typography>\r
        </div>)}\r
    </div>
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Icon name="star" size="small" />\r
      <Icon name="star" size="medium" />\r
      <Icon name="star" size="large" />\r
      <Icon name="star" size="xlarge" />\r
    </div>
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var I,v,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Icon name="heart" color="primary" />\r
      <Icon name="heart" color="system" />\r
      <Icon name="heart" color="success" />\r
      <Icon name="heart" color="warning" />\r
      <Icon name="heart" color="error" />\r
    </div>
}`,...(E=(v=c.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var z,f,x;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Icon size="large">\r
      <circle cx="8" cy="8" r="6" fill="currentColor" />\r
    </Icon>
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const w=["Default","SystemIcons","Sizes","Colors","CustomIcon"];export{c as Colors,t as CustomIcon,a as Default,o as Sizes,s as SystemIcons,w as __namedExportsOrder,T as default};
