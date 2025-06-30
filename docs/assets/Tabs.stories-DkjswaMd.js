import{R as e}from"./iframe-DPTEoTx4.js";const d=e.forwardRef(({items:s,activeTab:t,defaultActiveTab:c,onChange:m,variant:b="default",className:C="",testId:O,...B},R)=>{var g;const[y,v]=e.useState(t??c??((g=s[0])==null?void 0:g.id)??"");e.useEffect(()=>{t!==void 0&&v(t)},[t]);const _=a=>{t===void 0&&v(a),m==null||m(a)},p=s.find(a=>a.id===y),$=b==="segmented"?"bg-fill-secondary dark:bg-fill-secondary-dark rounded-ios p-1 flex":"flex border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark",z=b==="segmented"?"flex-1 text-center py-2 px-4 rounded-ios-sm text-ios-subhead font-medium transition-all duration-200 ease-ios":"px-4 py-3 text-ios-subhead font-medium border-b-2 transition-all duration-200 ease-ios";return e.createElement("div",{ref:R,className:C,"data-testid":O,...B},e.createElement("div",{className:$,role:"tablist"},s.map(a=>{const u=y===a.id,n=a.disabled,V=b==="segmented"?u?"bg-background-primary dark:bg-background-tertiary-dark text-label-primary dark:text-label-primary-dark shadow-ios-1":"text-label-secondary dark:text-label-secondary-dark hover:text-label-primary dark:hover:text-label-primary-dark":u?"border-systemBlue-500 text-systemBlue-500 dark:text-systemBlue-400":"border-transparent text-label-secondary dark:text-label-secondary-dark hover:text-label-primary dark:hover:text-label-primary-dark";return e.createElement("button",{key:a.id,type:"button",role:"tab","aria-selected":u,"aria-disabled":n,disabled:n,onClick:()=>!n&&_(a.id),className:` ${z} ${V} ${n?"cursor-not-allowed opacity-50":"cursor-pointer"} `.trim()},a.label)})),e.createElement("div",{className:"mt-4",role:"tabpanel"},p==null?void 0:p.content))});d.displayName="Tabs";d.__docgenInfo={description:"iOS-inspired tabs component for content organization",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Tab items"},activeTab:{required:!1,tsType:{name:"string"},description:"Active tab ID"},defaultActiveTab:{required:!1,tsType:{name:"string"},description:"Default active tab ID"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Tab change handler"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "segmented"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"segmented"'}]},description:"Tabs variant",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const A=[{id:"overview",label:"Overview",content:e.createElement("div",{className:"p-4"},"Overview content goes here. This tab shows general information.")},{id:"details",label:"Details",content:e.createElement("div",{className:"p-4"},"Detailed information is displayed in this tab.")},{id:"settings",label:"Settings",content:e.createElement("div",{className:"p-4"},"Configuration options and settings are shown here.")},{id:"disabled",label:"Disabled",content:e.createElement("div",{className:"p-4"},"This tab is disabled."),disabled:!0}],Y={title:"Data Display/Tabs",component:d,parameters:{layout:"padded",docs:{description:{component:"iOS-inspired tabs component for content organization."}}},tags:["autodocs"],args:{items:A.slice(0,3)}},r={},i={args:{variant:"segmented"}},o={args:{items:A}},l={render:()=>{const[s,t]=e.useState("tab1"),c=[{id:"tab1",label:"Tab 1",content:e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"mb-2 font-semibold"},"Dynamic Tab 1"),e.createElement("p",null,"Current active tab: ",s))},{id:"tab2",label:"Tab 2",content:e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"mb-2 font-semibold"},"Dynamic Tab 2"),e.createElement("button",{onClick:()=>t("tab3"),className:"rounded bg-systemBlue-500 px-3 py-1 text-white"},"Switch to Tab 3"))},{id:"tab3",label:"Tab 3",content:e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"mb-2 font-semibold"},"Dynamic Tab 3"),e.createElement("p",null,"You can programmatically control which tab is active."))}];return e.createElement(d,{items:c,activeTab:s,onChange:t})}};var f,T,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var x,k,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "segmented"
  }
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var D,E,S;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: mockItems // Include disabled tab
  }
}`,...(S=(E=o.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var w,I,q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = React.useState("tab1");
    const dynamicItems = [{
      id: "tab1",
      label: "Tab 1",
      content: <div className="p-4">\r
            <h3 className="mb-2 font-semibold">Dynamic Tab 1</h3>\r
            <p>Current active tab: {activeTab}</p>\r
          </div>
    }, {
      id: "tab2",
      label: "Tab 2",
      content: <div className="p-4">\r
            <h3 className="mb-2 font-semibold">Dynamic Tab 2</h3>\r
            <button onClick={() => setActiveTab("tab3")} className="rounded bg-systemBlue-500 px-3 py-1 text-white">\r
              Switch to Tab 3\r
            </button>\r
          </div>
    }, {
      id: "tab3",
      label: "Tab 3",
      content: <div className="p-4">\r
            <h3 className="mb-2 font-semibold">Dynamic Tab 3</h3>\r
            <p>You can programmatically control which tab is active.</p>\r
          </div>
    }];
    return <Tabs items={dynamicItems} activeTab={activeTab} onChange={setActiveTab} />;
  }
}`,...(q=(I=l.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const L=["Default","Segmented","WithDisabled","Interactive"];export{r as Default,l as Interactive,i as Segmented,o as WithDisabled,L as __namedExportsOrder,Y as default};
