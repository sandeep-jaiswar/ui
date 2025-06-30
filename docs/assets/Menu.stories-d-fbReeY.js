import{R as e}from"./iframe-DPTEoTx4.js";import{B as i}from"./Button-Vw-cbfqZ.js";import{I as A}from"./Icon-eIzZENis.js";const r=e.forwardRef(({items:o,open:n,onClose:s,trigger:a,position:g="bottom-left",className:N="",testId:S,...x},L)=>{const f=e.useRef(null);e.useEffect(()=>{if(!n)return;const t=b=>{f.current&&!f.current.contains(b.target)&&s()},l=b=>{b.key==="Escape"&&s()};return document.addEventListener("mousedown",t),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",l)}},[n,s]);const T=t=>{var l;t.disabled||((l=t.onClick)==null||l.call(t),s())},w={"bottom-left":"top-full left-0 mt-1","bottom-right":"top-full right-0 mt-1","top-left":"bottom-full left-0 mb-1","top-right":"bottom-full right-0 mb-1"};return n?e.createElement("div",{className:"relative inline-block",ref:L,"data-testid":S,...x},a,e.createElement("div",{ref:f,className:`absolute ${w[g]} animate-scale-in z-popover min-w-[200px] rounded-ios-lg border border-separator-opaque bg-background-primary py-2 shadow-modal dark:border-separator-opaque-dark dark:bg-background-secondary-dark ${N} `.trim(),role:"menu"},o.map((t,l)=>t.separator?e.createElement("div",{key:`separator-${l}`,className:"my-1 border-t border-separator-nonOpaque dark:border-separator-nonOpaque-dark"}):e.createElement("button",{key:t.id,type:"button",role:"menuitem",disabled:t.disabled,onClick:()=>T(t),className:`flex w-full items-center px-4 py-2 text-left transition-colors duration-150 ease-ios text-ios-body ${t.disabled?"cursor-not-allowed opacity-50":"cursor-pointer hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark"} ${t.destructive?"text-systemRed-500 dark:text-systemRed-400":"text-label-primary dark:text-label-primary-dark"} `.trim()},t.icon&&e.createElement(A,{name:t.icon,size:"medium",className:"mr-3 flex-shrink-0",color:t.destructive?"error":"primary"}),e.createElement("span",{className:"flex-1"},t.label))))):a||null});r.displayName="Menu";r.__docgenInfo={description:"iOS-inspired context menu component",methods:[],displayName:"Menu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu items"},open:{required:!0,tsType:{name:"boolean"},description:"Is the menu open?"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close handler"},trigger:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Trigger element"},position:{required:!1,tsType:{name:"union",raw:'"bottom-left" | "bottom-right" | "top-left" | "top-right"',elements:[{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'}]},description:"Menu position",defaultValue:{value:'"bottom-left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const c=[{id:"edit",label:"Edit",icon:"settings",onClick:()=>console.log("Edit")},{id:"copy",label:"Copy",icon:"plus",onClick:()=>console.log("Copy")},{id:"separator1",separator:!0},{id:"share",label:"Share",icon:"heart",onClick:()=>console.log("Share")},{id:"separator2",separator:!0},{id:"delete",label:"Delete",icon:"close",destructive:!0,onClick:()=>console.log("Delete")}],z={title:"Advanced/Menu",component:r,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired context menu component."}}},tags:["autodocs"],args:{items:c,open:!0,onClose:()=>{}}},u={},p={args:{open:!1,trigger:e.createElement(i,null,"Open Menu")}},d={render:()=>{const[o,n]=e.useState(null);return e.createElement("div",{className:"grid grid-cols-2 gap-8 p-8"},e.createElement(r,{items:c.slice(0,3),open:o==="bottom-left",onClose:()=>n(null),position:"bottom-left",trigger:e.createElement(i,{onClick:()=>n(o==="bottom-left"?null:"bottom-left")},"Bottom Left")}),e.createElement(r,{items:c.slice(0,3),open:o==="bottom-right",onClose:()=>n(null),position:"bottom-right",trigger:e.createElement(i,{onClick:()=>n(o==="bottom-right"?null:"bottom-right")},"Bottom Right")}),e.createElement(r,{items:c.slice(0,3),open:o==="top-left",onClose:()=>n(null),position:"top-left",trigger:e.createElement(i,{onClick:()=>n(o==="top-left"?null:"top-left")},"Top Left")}),e.createElement(r,{items:c.slice(0,3),open:o==="top-right",onClose:()=>n(null),position:"top-right",trigger:e.createElement(i,{onClick:()=>n(o==="top-right"?null:"top-right")},"Top Right")}))}},m={render:()=>{const[o,n]=e.useState(!1),[s,a]=e.useState(""),g=[{id:"edit",label:"Edit",icon:"settings",onClick:()=>a("Edit clicked")},{id:"copy",label:"Copy",icon:"plus",onClick:()=>a("Copy clicked")},{id:"separator",separator:!0},{id:"delete",label:"Delete",icon:"close",destructive:!0,onClick:()=>a("Delete clicked")}];return e.createElement("div",{className:"space-y-4"},e.createElement(r,{items:g,open:o,onClose:()=>n(!1),trigger:e.createElement(i,{onClick:()=>n(!o)},o?"Close Menu":"Open Menu")}),s&&e.createElement("div",{className:"rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark"},"Last action: ",s))}};var k,y,h;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(h=(y=u.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var C,M,v;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: false,
    trigger: <Button>Open Menu</Button>
  }
}`,...(v=(M=p.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var E,O,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    return <div className="grid grid-cols-2 gap-8 p-8">\r
        <Menu items={mockItems.slice(0, 3)} open={openMenu === "bottom-left"} onClose={() => setOpenMenu(null)} position="bottom-left" trigger={<Button onClick={() => setOpenMenu(openMenu === "bottom-left" ? null : "bottom-left")}>Bottom Left</Button>} />\r
\r
        <Menu items={mockItems.slice(0, 3)} open={openMenu === "bottom-right"} onClose={() => setOpenMenu(null)} position="bottom-right" trigger={<Button onClick={() => setOpenMenu(openMenu === "bottom-right" ? null : "bottom-right")}>\r
              Bottom Right\r
            </Button>} />\r
\r
        <Menu items={mockItems.slice(0, 3)} open={openMenu === "top-left"} onClose={() => setOpenMenu(null)} position="top-left" trigger={<Button onClick={() => setOpenMenu(openMenu === "top-left" ? null : "top-left")}>Top Left</Button>} />\r
\r
        <Menu items={mockItems.slice(0, 3)} open={openMenu === "top-right"} onClose={() => setOpenMenu(null)} position="top-right" trigger={<Button onClick={() => setOpenMenu(openMenu === "top-right" ? null : "top-right")}>Top Right</Button>} />\r
      </div>;
  }
}`,...(I=(O=d.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var B,R,q;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [lastAction, setLastAction] = React.useState<string>("");
    const items = [{
      id: "edit",
      label: "Edit",
      icon: "settings",
      onClick: () => setLastAction("Edit clicked")
    }, {
      id: "copy",
      label: "Copy",
      icon: "plus",
      onClick: () => setLastAction("Copy clicked")
    }, {
      id: "separator",
      separator: true
    }, {
      id: "delete",
      label: "Delete",
      icon: "close",
      destructive: true,
      onClick: () => setLastAction("Delete clicked")
    }];
    return <div className="space-y-4">\r
        <Menu items={items} open={isOpen} onClose={() => setIsOpen(false)} trigger={<Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close Menu" : "Open Menu"}</Button>} />\r
\r
        {lastAction && <div className="rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">\r
            Last action: {lastAction}\r
          </div>}\r
      </div>;
  }
}`,...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const P=["Default","WithTrigger","Positions","Interactive"];export{u as Default,m as Interactive,d as Positions,p as WithTrigger,P as __namedExportsOrder,z as default};
