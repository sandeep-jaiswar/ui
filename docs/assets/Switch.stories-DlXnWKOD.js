import{R as e}from"./iframe-DPTEoTx4.js";import{T as a}from"./Typography-RJZoBOJc.js";const r=e.forwardRef(({checked:t,defaultChecked:o=!1,size:n="medium",disabled:s=!1,color:Me="green",onChange:x,label:C,labelPosition:Re="right",className:qe="",testId:De,...Ie},Oe)=>{const[l,L]=e.useState(t??o);e.useEffect(()=>{t!==void 0&&L(t)},[t]);const P=()=>{if(s)return;const A=!l;t===void 0&&L(A),x==null||x(A)},Be={small:"w-8 h-5",medium:"w-12 h-7",large:"w-16 h-9"},je={small:"w-3 h-3",medium:"w-5 h-5",large:"w-7 h-7"},Ge={green:"bg-systemGreen-500 dark:bg-systemGreen-600",blue:"bg-systemBlue-500 dark:bg-systemBlue-600",orange:"bg-systemOrange-500 dark:bg-systemOrange-600",red:"bg-systemRed-500 dark:bg-systemRed-600",purple:"bg-systemPurple-500 dark:bg-systemPurple-600"},$e="relative inline-flex items-center rounded-full transition-all duration-200 ease-ios focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 cursor-pointer",Ve=s?"opacity-50 cursor-not-allowed":"",_e=l?Ge[Me]:"bg-fill-tertiary dark:bg-fill-tertiary-dark",Je={small:l?"translate-x-3":"translate-x-0.5",medium:l?"translate-x-5":"translate-x-1",large:l?"translate-x-7":"translate-x-1"},z=e.createElement("button",{ref:Oe,type:"button",role:"switch","aria-checked":l,"aria-label":C,disabled:s,className:`${$e} ${Be[n]} ${_e} ${Ve} ${qe}`.trim(),onClick:P,"data-testid":De,...Ie},e.createElement("span",{className:`${je[n]} transform rounded-full bg-white shadow-ios-1 transition-transform duration-200 ease-ios ${Je[n]}`}));return C?e.createElement("div",{className:`flex items-center gap-3 ${Re==="left"?"flex-row-reverse":""}`},z,e.createElement("label",{className:"cursor-pointer select-none text-label-primary text-ios-body dark:text-label-primary-dark",onClick:P},C)):z});r.displayName="Switch";r.__docgenInfo={description:"iOS-inspired switch component following Apple's toggle design",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Is the switch checked?"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled component",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Switch size",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Is the switch disabled?",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"green" | "blue" | "orange" | "red" | "purple"',elements:[{name:"literal",value:'"green"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"red"'},{name:"literal",value:'"purple"'}]},description:"Switch color when checked",defaultValue:{value:'"green"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Change handler"},label:{required:!1,tsType:{name:"string"},description:"Switch label"},labelPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Label position",defaultValue:{value:'"right"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const Ue=()=>{},He={title:"Components/Switch",component:r,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired switch component following Apple's toggle design. Perfect for boolean settings and preferences."}}},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Is the switch checked?"},size:{control:"select",options:["small","medium","large"],description:"Switch size"},color:{control:"select",options:["green","blue","orange","red","purple"],description:"Switch color when checked"},disabled:{control:"boolean",description:"Disable the switch"},label:{control:"text",description:"Switch label"},labelPosition:{control:"select",options:["left","right"],description:"Label position"}},args:{onChange:Ue}},c={args:{}},i={args:{checked:!0}},d={args:{label:"Enable notifications"}},m={args:{disabled:!0,label:"Disabled switch"}},p={args:{size:"small",label:"Small switch"}},u={args:{size:"medium",label:"Medium switch"}},g={args:{size:"large",label:"Large switch"}},h={args:{checked:!0,color:"green",label:"Green switch"}},y={args:{checked:!0,color:"blue",label:"Blue switch"}},b={args:{checked:!0,color:"orange",label:"Orange switch"}},f={args:{checked:!0,color:"red",label:"Red switch"}},v={args:{checked:!0,color:"purple",label:"Purple switch"}},w={args:{label:"Label on left",labelPosition:"left"}},k={args:{label:"Label on right",labelPosition:"right"}},S={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(r,{size:"small",label:"Small"}),e.createElement(r,{size:"medium",label:"Medium"}),e.createElement(r,{size:"large",label:"Large"})),parameters:{docs:{description:{story:"All switch sizes displayed together."}}}},E={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(r,{checked:!0,color:"green",label:"Green"}),e.createElement(r,{checked:!0,color:"blue",label:"Blue"}),e.createElement(r,{checked:!0,color:"orange",label:"Orange"}),e.createElement(r,{checked:!0,color:"red",label:"Red"}),e.createElement(r,{checked:!0,color:"purple",label:"Purple"})),parameters:{docs:{description:{story:"All switch colors displayed together."}}}},T={render:()=>e.createElement("div",{className:"max-w-sm space-y-6 rounded-ios-lg bg-background-secondary p-6 dark:bg-background-secondary-dark"},e.createElement(a,{variant:"headline"},"Settings"),e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",null,e.createElement(a,{variant:"body"},"Push Notifications"),e.createElement(a,{variant:"footnote",color:"secondary"},"Receive notifications on your device")),e.createElement(r,{defaultChecked:!0})),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",null,e.createElement(a,{variant:"body"},"Dark Mode"),e.createElement(a,{variant:"footnote",color:"secondary"},"Use dark appearance")),e.createElement(r,{color:"blue"})),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",null,e.createElement(a,{variant:"body"},"Location Services"),e.createElement(a,{variant:"footnote",color:"secondary"},"Allow location access")),e.createElement(r,{color:"orange",defaultChecked:!0})),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",null,e.createElement(a,{variant:"body"},"Analytics"),e.createElement(a,{variant:"footnote",color:"secondary"},"Share usage data")),e.createElement(r,{disabled:!0})))),parameters:{docs:{description:{story:"Example settings panel with various switch configurations."}}}},N={render:()=>{const[t,o]=e.useState({notifications:!0,darkMode:!1,location:!0,analytics:!1});return e.createElement("div",{className:"max-w-md space-y-6"},e.createElement(a,{variant:"headline"},"Interactive Settings"),e.createElement("div",{className:"space-y-4"},e.createElement(r,{checked:t.notifications,onChange:n=>o(s=>({...s,notifications:n})),label:"Push Notifications",color:"green"}),e.createElement(r,{checked:t.darkMode,onChange:n=>o(s=>({...s,darkMode:n})),label:"Dark Mode",color:"blue"}),e.createElement(r,{checked:t.location,onChange:n=>o(s=>({...s,location:n})),label:"Location Services",color:"orange"}),e.createElement(r,{checked:t.analytics,onChange:n=>o(s=>({...s,analytics:n})),label:"Analytics",color:"purple"})),e.createElement("div",{className:"mt-6 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark"},e.createElement(a,{variant:"subhead"},"Current Settings:"),e.createElement(a,{variant:"footnote",color:"secondary"},JSON.stringify(t,null,2))))},parameters:{docs:{description:{story:"Interactive example showing switch state management."}}}};var M,R,q;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {}
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var D,I,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var B,j,G;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications"
  }
}`,...(G=(j=d.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var $,V,_;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: "Disabled switch"
  }
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var J,U,W;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small switch"
  }
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var F,H,K;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Medium switch"
  }
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Large switch"
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "green",
    label: "Green switch"
  }
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "blue",
    label: "Blue switch"
  }
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,le;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "orange",
    label: "Orange switch"
  }
}`,...(le=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,ie,de;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "red",
    label: "Red switch"
  }
}`,...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,pe,ue;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "purple",
    label: "Purple switch"
  }
}`,...(ue=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,he,ye;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: "Label on left",
    labelPosition: "left"
  }
}`,...(ye=(he=w.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var be,fe,ve;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: "Label on right",
    labelPosition: "right"
  }
}`,...(ve=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,ke,Se;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Switch size="small" label="Small" />\r
      <Switch size="medium" label="Medium" />\r
      <Switch size="large" label="Large" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All switch sizes displayed together."
      }
    }
  }
}`,...(Se=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Ee,Te,Ne;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Switch checked color="green" label="Green" />\r
      <Switch checked color="blue" label="Blue" />\r
      <Switch checked color="orange" label="Orange" />\r
      <Switch checked color="red" label="Red" />\r
      <Switch checked color="purple" label="Purple" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All switch colors displayed together."
      }
    }
  }
}`,...(Ne=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var xe,Ce,Le;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-6 rounded-ios-lg bg-background-secondary p-6 dark:bg-background-secondary-dark">\r
      <Typography variant="headline">Settings</Typography>\r
\r
      <div className="space-y-4">\r
        <div className="flex items-center justify-between">\r
          <div>\r
            <Typography variant="body">Push Notifications</Typography>\r
            <Typography variant="footnote" color="secondary">\r
              Receive notifications on your device\r
            </Typography>\r
          </div>\r
          <Switch defaultChecked />\r
        </div>\r
\r
        <div className="flex items-center justify-between">\r
          <div>\r
            <Typography variant="body">Dark Mode</Typography>\r
            <Typography variant="footnote" color="secondary">\r
              Use dark appearance\r
            </Typography>\r
          </div>\r
          <Switch color="blue" />\r
        </div>\r
\r
        <div className="flex items-center justify-between">\r
          <div>\r
            <Typography variant="body">Location Services</Typography>\r
            <Typography variant="footnote" color="secondary">\r
              Allow location access\r
            </Typography>\r
          </div>\r
          <Switch color="orange" defaultChecked />\r
        </div>\r
\r
        <div className="flex items-center justify-between">\r
          <div>\r
            <Typography variant="body">Analytics</Typography>\r
            <Typography variant="footnote" color="secondary">\r
              Share usage data\r
            </Typography>\r
          </div>\r
          <Switch disabled />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example settings panel with various switch configurations."
      }
    }
  }
}`,...(Le=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};var Pe,ze,Ae;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      darkMode: false,
      location: true,
      analytics: false
    });
    return <div className="max-w-md space-y-6">\r
        <Typography variant="headline">Interactive Settings</Typography>\r
\r
        <div className="space-y-4">\r
          <Switch checked={settings.notifications} onChange={checked => setSettings(prev => ({
          ...prev,
          notifications: checked
        }))} label="Push Notifications" color="green" />\r
\r
          <Switch checked={settings.darkMode} onChange={checked => setSettings(prev => ({
          ...prev,
          darkMode: checked
        }))} label="Dark Mode" color="blue" />\r
\r
          <Switch checked={settings.location} onChange={checked => setSettings(prev => ({
          ...prev,
          location: checked
        }))} label="Location Services" color="orange" />\r
\r
          <Switch checked={settings.analytics} onChange={checked => setSettings(prev => ({
          ...prev,
          analytics: checked
        }))} label="Analytics" color="purple" />\r
        </div>\r
\r
        <div className="mt-6 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">\r
          <Typography variant="subhead">Current Settings:</Typography>\r
          <Typography variant="footnote" color="secondary">\r
            {JSON.stringify(settings, null, 2)}\r
          </Typography>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing switch state management."
      }
    }
  }
}`,...(Ae=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:Ae.source}}};const Ke=["Default","Checked","WithLabel","Disabled","Small","Medium","Large","Green","Blue","Orange","Red","Purple","LabelLeft","LabelRight","AllSizes","AllColors","SettingsPanel","InteractiveExample"];export{E as AllColors,S as AllSizes,y as Blue,i as Checked,c as Default,m as Disabled,h as Green,N as InteractiveExample,w as LabelLeft,k as LabelRight,g as Large,u as Medium,b as Orange,v as Purple,f as Red,T as SettingsPanel,p as Small,d as WithLabel,Ke as __namedExportsOrder,He as default};
