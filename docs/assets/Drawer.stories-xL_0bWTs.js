import{R as e}from"./iframe-DPTEoTx4.js";import{B as l}from"./Button-Vw-cbfqZ.js";import{I as o}from"./Icon-eIzZENis.js";import{L as K,a as h}from"./List-D2cxUMrs.js";const f=e.forwardRef(({open:t,onClose:r,position:a="right",size:n="medium",title:g,children:$,showClose:y=!0,closeOnBackdrop:z=!0,closeOnEscape:v=!0,className:A="",testId:H,..._},U)=>{e.useEffect(()=>{if(!t||!v)return;const s=J=>{J.key==="Escape"&&r()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t,v,r]),e.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const W=s=>{z&&s.target===s.currentTarget&&r()},j={small:{left:"w-64",right:"w-64",top:"h-48",bottom:"h-48"},medium:{left:"w-80",right:"w-80",top:"h-64",bottom:"h-64"},large:{left:"w-96",right:"w-96",top:"h-80",bottom:"h-80"},full:{left:"w-full",right:"w-full",top:"h-full",bottom:"h-full"}},F={left:"left-0 top-0 h-full",right:"right-0 top-0 h-full",top:"top-0 left-0 w-full",bottom:"bottom-0 left-0 w-full"},G={left:t?"translate-x-0":"-translate-x-full",right:t?"translate-x-0":"translate-x-full",top:t?"translate-y-0":"-translate-y-full",bottom:t?"translate-y-0":"translate-y-full"};return t?e.createElement("div",{className:"fixed inset-0 z-modal flex",onClick:W,"data-testid":H},e.createElement("div",{className:"animate-fade-in absolute inset-0 bg-black/50 backdrop-blur-sm"}),e.createElement("div",{ref:U,className:`absolute ${F[a]} ${j[n][a]} transform bg-background-primary shadow-modal transition-transform duration-300 ease-ios dark:bg-background-secondary-dark ${G[a]} ${A} `.trim(),..._},(g||y)&&e.createElement("div",{className:"flex items-center justify-between border-b border-separator-nonOpaque p-4 dark:border-separator-nonOpaque-dark"},g&&e.createElement("h2",{className:"font-semibold text-label-primary text-ios-headline dark:text-label-primary-dark"},g),y&&e.createElement("button",{type:"button",onClick:r,className:"rounded-ios p-1 text-label-tertiary transition-colors hover:bg-fill-quaternary hover:text-label-primary dark:text-label-tertiary-dark dark:hover:bg-fill-quaternary-dark dark:hover:text-label-primary-dark","aria-label":"Close drawer"},e.createElement(o,{name:"close",size:"medium"}))),e.createElement("div",{className:"flex-1 overflow-auto p-4"},$))):null});f.displayName="Drawer";f.__docgenInfo={description:"iOS-inspired drawer/sidebar component",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:"Is the drawer open?"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close handler"},position:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"Drawer position",defaultValue:{value:'"right"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"Drawer size",defaultValue:{value:'"medium"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Drawer title"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Drawer content"},showClose:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"true",computed:!1}},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:"Close on backdrop click",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close on escape key",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const Z={title:"Advanced/Drawer",component:f,parameters:{layout:"fullscreen",docs:{description:{component:"iOS-inspired drawer/sidebar component."}}},tags:["autodocs"],args:{open:!0,onClose:()=>{},children:"Drawer content goes here"}},i={args:{position:"right",title:"Right Drawer"}},c={args:{position:"left",title:"Left Drawer"}},m={args:{position:"top",title:"Top Drawer"}},p={args:{position:"bottom",title:"Bottom Drawer"}},d={args:{title:"Navigation",children:e.createElement(K,{variant:"plain"},e.createElement(h,{leftContent:e.createElement(o,{name:"home",color:"system"}),rightContent:e.createElement(o,{name:"chevron",color:"tertiary"}),onClick:()=>console.log("Home")},"Home"),e.createElement(h,{leftContent:e.createElement(o,{name:"search",color:"system"}),rightContent:e.createElement(o,{name:"chevron",color:"tertiary"}),onClick:()=>console.log("Search")},"Search"),e.createElement(h,{leftContent:e.createElement(o,{name:"settings",color:"system"}),rightContent:e.createElement(o,{name:"chevron",color:"tertiary"}),onClick:()=>console.log("Settings")},"Settings"))}},u={render:()=>{const[t,r]=e.useState(!1),[a,n]=e.useState("right");return e.createElement("div",{className:"space-y-4 p-6"},e.createElement("div",{className:"flex flex-wrap gap-2"},e.createElement(l,{onClick:()=>{n("left"),r(!0)}},"Open Left"),e.createElement(l,{onClick:()=>{n("right"),r(!0)}},"Open Right"),e.createElement(l,{onClick:()=>{n("top"),r(!0)}},"Open Top"),e.createElement(l,{onClick:()=>{n("bottom"),r(!0)}},"Open Bottom")),e.createElement(f,{open:t,onClose:()=>r(!1),position:a,title:`${a.charAt(0).toUpperCase()+a.slice(1)} Drawer`},e.createElement("div",{className:"space-y-4"},e.createElement("p",null,"This is a ",a," drawer."),e.createElement("p",null,"Click outside or press Escape to close."),e.createElement(l,{onClick:()=>r(!1)},"Close Drawer"))))}};var w,b,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    position: "right",
    title: "Right Drawer"
  }
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var C,E,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    position: "left",
    title: "Left Drawer"
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var S,O,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    position: "top",
    title: "Top Drawer"
  }
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var N,x,T;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    position: "bottom",
    title: "Bottom Drawer"
  }
}`,...(T=(x=p.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var B,L,q;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: "Navigation",
    children: <List variant="plain">\r
        <ListItem leftContent={<Icon name="home" color="system" />} rightContent={<Icon name="chevron" color="tertiary" />} onClick={() => console.log("Home")}>\r
          Home\r
        </ListItem>\r
        <ListItem leftContent={<Icon name="search" color="system" />} rightContent={<Icon name="chevron" color="tertiary" />} onClick={() => console.log("Search")}>\r
          Search\r
        </ListItem>\r
        <ListItem leftContent={<Icon name="settings" color="system" />} rightContent={<Icon name="chevron" color="tertiary" />} onClick={() => console.log("Settings")}>\r
          Settings\r
        </ListItem>\r
      </List>
  }
}`,...(q=(L=d.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var R,P,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [position, setPosition] = React.useState<"left" | "right" | "top" | "bottom">("right");
    return <div className="space-y-4 p-6">\r
        <div className="flex flex-wrap gap-2">\r
          <Button onClick={() => {
          setPosition("left");
          setIsOpen(true);
        }}>\r
            Open Left\r
          </Button>\r
          <Button onClick={() => {
          setPosition("right");
          setIsOpen(true);
        }}>\r
            Open Right\r
          </Button>\r
          <Button onClick={() => {
          setPosition("top");
          setIsOpen(true);
        }}>\r
            Open Top\r
          </Button>\r
          <Button onClick={() => {
          setPosition("bottom");
          setIsOpen(true);
        }}>\r
            Open Bottom\r
          </Button>\r
        </div>\r
\r
        <Drawer open={isOpen} onClose={() => setIsOpen(false)} position={position} title={\`\${position.charAt(0).toUpperCase() + position.slice(1)} Drawer\`}>\r
          <div className="space-y-4">\r
            <p>This is a {position} drawer.</p>\r
            <p>Click outside or press Escape to close.</p>\r
            <Button onClick={() => setIsOpen(false)}>Close Drawer</Button>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const ee=["Right","Left","Top","Bottom","WithNavigation","Interactive"];export{p as Bottom,u as Interactive,c as Left,i as Right,m as Top,d as WithNavigation,ee as __namedExportsOrder,Z as default};
