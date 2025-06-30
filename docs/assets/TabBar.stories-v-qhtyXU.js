import{R as t}from"./iframe-DPTEoTx4.js";import{I as L}from"./Icon-eIzZENis.js";import{t as N}from"./animations-DDGOJxN6.js";const y=t.forwardRef(({items:r,activeTab:i,defaultActiveTab:c,onChange:l,showSwipeIndicators:M=!0,className:P="",testId:_,...j},d)=>{var w;const[F,x]=t.useState(i??c??((w=r[0])==null?void 0:w.id)??""),K=t.useRef(null),v=t.useRef(new Map);t.useEffect(()=>{i!==void 0&&x(i)},[i]);const T=e=>{const o=r.find(s=>s.id===e);if(!o||o.disabled)return;i===void 0&&x(e),l==null||l(e);const n=`${o.label} tab selected${o.badge?`, ${o.badge} notifications`:""}`,a=document.createElement("div");a.setAttribute("aria-live","polite"),a.setAttribute("aria-atomic","true"),a.className="sr-only",a.textContent=n,document.body.appendChild(a),setTimeout(()=>document.body.removeChild(a),1e3)},z=(e,o)=>{var E;const n=r.findIndex(m=>m.id===o);let a=n;switch(e.key){case"ArrowLeft":e.preventDefault(),a=n>0?n-1:r.length-1;break;case"ArrowRight":e.preventDefault(),a=n<r.length-1?n+1:0;break;case"Home":e.preventDefault(),a=0;break;case"End":e.preventDefault(),a=r.length-1;break;default:return}let s=0;for(;(E=r[a])!=null&&E.disabled&&s<r.length;)a=e.key==="ArrowLeft"||e.key==="End"?a>0?a-1:r.length-1:a<r.length-1?a+1:0,s++;const b=r[a];if(b&&!b.disabled){const m=v.current.get(b.id);m&&(m.focus(),T(b.id))}},k=r.length>5;return t.createElement("div",{ref:e=>{K.current=e,typeof d=="function"?d(e):d&&(d.current=e)},className:`flex items-center border-t border-separator-nonOpaque bg-background-primary bg-opacity-95 backdrop-blur-sm safe-bottom dark:border-separator-nonOpaque-dark dark:bg-background-primary-dark dark:bg-opacity-95 ${k?"scrollbar-hide overflow-x-auto":"justify-around"} px-2 py-1 ${P}`.trim(),role:"tablist","aria-label":"Main navigation","data-testid":_,...j},r.map((e,o)=>{const n=F===e.id,a=e.disabled;return t.createElement("button",{key:e.id,ref:s=>{s?v.current.set(e.id,s):v.current.delete(e.id)},type:"button",role:"tab","aria-selected":n,"aria-disabled":a,"aria-label":e["aria-label"]||`${e.label}${e.badge?`, ${e.badge} notifications`:""}`,disabled:a,onClick:()=>T(e.id),onKeyDown:s=>z(s,e.id),className:`flex min-w-0 ${k?"min-w-[80px]":"flex-1"} min-h-[44px] flex-col items-center justify-center px-2 py-2 ${N.default} ${n?"text-systemBlue-500 dark:text-systemBlue-400":"text-label-tertiary dark:text-label-tertiary-dark"} ${a?"cursor-not-allowed opacity-50":"hover:text-systemBlue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 dark:hover:text-systemBlue-300"}`.trim(),tabIndex:n?0:-1},t.createElement("div",{className:"relative mb-1"},e.icon&&t.createElement(L,{name:e.icon,size:"medium",className:`${N.default} ${n?"scale-110":""}`}),e.badge&&e.badge>0&&t.createElement("div",{className:"absolute -right-1 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-systemRed-500 px-1 font-medium text-white text-ios-caption-2","aria-hidden":"true"},e.badge>99?"99+":e.badge)),t.createElement("span",{className:"max-w-full truncate font-medium text-ios-caption-2"},e.label))}),k&&M&&t.createElement(t.Fragment,null,t.createElement("div",{className:"pointer-events-none absolute bottom-0 left-0 top-0 w-4 bg-gradient-to-r from-background-primary to-transparent dark:from-background-primary-dark"}),t.createElement("div",{className:"pointer-events-none absolute bottom-0 right-0 top-0 w-4 bg-gradient-to-l from-background-primary to-transparent dark:from-background-primary-dark"})))});y.displayName="TabBar";y.__docgenInfo={description:`iOS-inspired tab bar component for bottom navigation with comprehensive accessibility.

Features:
- Horizontal scrolling for overflow tabs
- Badge support with proper accessibility
- Keyboard navigation (Arrow keys, Home, End)
- Touch-friendly 44px minimum touch targets
- Smooth animations with reduced motion support
- Screen reader announcements for tab changes

@example
\`\`\`tsx
<TabBar
  items={[
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'search', label: 'Search', icon: 'search', badge: 3 },
    { id: 'profile', label: 'Profile', icon: 'settings' }
  ]}
  activeTab={currentTab}
  onChange={setCurrentTab}
/>
\`\`\``,methods:[],displayName:"TabBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabBarItem"}],raw:"TabBarItem[]"},description:"Array of tab items to display"},activeTab:{required:!1,tsType:{name:"string"},description:"Currently active tab ID"},defaultActiveTab:{required:!1,tsType:{name:"string"},description:"Default active tab ID for uncontrolled usage"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Callback fired when tab selection changes"},showSwipeIndicators:{required:!1,tsType:{name:"boolean"},description:"Whether to show swipe indicators on mobile",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test identifier for automated testing"}}};const h=[{id:"home",label:"Home",icon:"home"},{id:"search",label:"Search",icon:"search"},{id:"favorites",label:"Favorites",icon:"heart",badge:3},{id:"profile",label:"Profile",icon:"settings"}],Q={title:"Navigation/TabBar",component:y,parameters:{layout:"fullscreen",docs:{description:{component:"iOS-inspired tab bar component for bottom navigation."}}},tags:["autodocs"],args:{items:h}},u={},p={args:{items:[{id:"home",label:"Home",icon:"home"},{id:"messages",label:"Messages",icon:"search",badge:5},{id:"notifications",label:"Notifications",icon:"heart",badge:99},{id:"profile",label:"Profile",icon:"settings",badge:150}]}},f={args:{items:[...h,{id:"disabled",label:"Disabled",icon:"close",disabled:!0}]}},g={render:()=>{var c;const[r,i]=t.useState("home");return t.createElement("div",{className:"flex h-screen flex-col"},t.createElement("div",{className:"flex-1 bg-background-secondary p-4 dark:bg-background-secondary-dark"},t.createElement("h1",{className:"mb-4 text-2xl font-bold"},(c=h.find(l=>l.id===r))==null?void 0:c.label," Tab"),t.createElement("p",null,"Content for the ",r," tab goes here.")),t.createElement(y,{items:h,activeTab:r,onChange:i}))}};var I,B,S;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(S=(B=u.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var D,A,$;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "home",
      label: "Home",
      icon: "home"
    }, {
      id: "messages",
      label: "Messages",
      icon: "search",
      badge: 5
    }, {
      id: "notifications",
      label: "Notifications",
      icon: "heart",
      badge: 99
    }, {
      id: "profile",
      label: "Profile",
      icon: "settings",
      badge: 150
    }]
  }
}`,...($=(A=p.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var C,R,q;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [...mockItems, {
      id: "disabled",
      label: "Disabled",
      icon: "close",
      disabled: true
    }]
  }
}`,...(q=(R=f.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var H,O,W;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = React.useState("home");
    return <div className="flex h-screen flex-col">\r
        <div className="flex-1 bg-background-secondary p-4 dark:bg-background-secondary-dark">\r
          <h1 className="mb-4 text-2xl font-bold">{mockItems.find(item => item.id === activeTab)?.label} Tab</h1>\r
          <p>Content for the {activeTab} tab goes here.</p>\r
        </div>\r
\r
        <TabBar items={mockItems} activeTab={activeTab} onChange={setActiveTab} />\r
      </div>;
  }
}`,...(W=(O=g.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const U=["Default","WithBadges","WithDisabled","Interactive"];export{u as Default,g as Interactive,p as WithBadges,f as WithDisabled,U as __namedExportsOrder,Q as default};
