import{R as e}from"./iframe-DPTEoTx4.js";import{T as s}from"./Typography-RJZoBOJc.js";const l=e.forwardRef(({value:a,defaultValue:n=50,min:r=0,max:t=100,step:ke=1,disabled:N=!1,color:Oe="blue",showValue:q=!1,formatValue:R,onChange:$,label:C,className:Ie="",testId:Me,...Ae},Ge)=>{const[o,P]=e.useState(a??n);e.useEffect(()=>{a!==void 0&&P(a)},[a]);const Le=_e=>{if(N)return;const B=Number(_e.target.value);a===void 0&&P(B),$==null||$(B)},D=(o-r)/(t-r)*100,Ke={blue:"accent-systemBlue-500",green:"accent-systemGreen-500",orange:"accent-systemOrange-500",red:"accent-systemRed-500",purple:"accent-systemPurple-500"},We=R?R(o):o.toString();return e.createElement("div",{className:`space-y-2 ${Ie}`},(C||q)&&e.createElement("div",{className:"flex items-center justify-between"},C&&e.createElement("label",{className:"font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark"},C),q&&e.createElement("span",{className:"text-label-secondary text-ios-subhead dark:text-label-secondary-dark"},We)),e.createElement("div",{className:"relative"},e.createElement("input",{ref:Ge,type:"range",min:r,max:t,step:ke,value:o,disabled:N,onChange:Le,className:`h-2 w-full cursor-pointer appearance-none rounded-full bg-fill-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-fill-tertiary-dark ${Ke[Oe]} slider-thumb:appearance-none slider-thumb:w-5 slider-thumb:h-5 slider-thumb:rounded-full slider-thumb:bg-white slider-thumb:shadow-ios-2 slider-thumb:border-2 slider-thumb:border-white slider-thumb:cursor-pointer slider-thumb:transition-all slider-thumb:duration-200 hover:slider-thumb:scale-110 active:slider-thumb:scale-95`,style:{background:`linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${D}%, rgb(var(--fill-tertiary)) ${D}%, rgb(var(--fill-tertiary)) 100%)`},"data-testid":Me,...Ae})),e.createElement("div",{className:"flex justify-between text-label-tertiary text-ios-caption-1 dark:text-label-tertiary-dark"},e.createElement("span",null,r),e.createElement("span",null,t)))});l.displayName="Slider";l.__docgenInfo={description:"iOS-inspired slider component for selecting numeric values",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"Slider value"},defaultValue:{required:!1,tsType:{name:"number"},description:"Default value for uncontrolled component",defaultValue:{value:"50",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"Minimum value",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum value",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step increment",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Is the slider disabled?",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"blue" | "green" | "orange" | "red" | "purple"',elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"green"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"red"'},{name:"literal",value:'"purple"'}]},description:"Slider color",defaultValue:{value:'"blue"',computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"Show value label",defaultValue:{value:"false",computed:!1}},formatValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Custom value formatter"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Change handler"},label:{required:!1,tsType:{name:"string"},description:"Slider label"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const Fe=()=>{},He={title:"Form Controls/Slider",component:l,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired slider component for selecting numeric values within a range. Perfect for settings, filters, and value selection."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Slider value"},min:{control:{type:"number"},description:"Minimum value"},max:{control:{type:"number"},description:"Maximum value"},step:{control:{type:"number",min:.1,step:.1},description:"Step increment"},disabled:{control:"boolean",description:"Disable the slider"},color:{control:"select",options:["blue","green","orange","red","purple"],description:"Slider color"},showValue:{control:"boolean",description:"Show current value"},label:{control:"text",description:"Slider label"}},args:{onChange:Fe,value:50}},u={args:{}},i={args:{label:"Volume",showValue:!0}},c={args:{showValue:!0}},m={args:{disabled:!0,label:"Disabled slider"}},d={args:{color:"blue",label:"Blue slider",showValue:!0}},p={args:{color:"green",label:"Green slider",showValue:!0}},g={args:{color:"orange",label:"Orange slider",showValue:!0}},v={args:{color:"red",label:"Red slider",showValue:!0}},b={args:{color:"purple",label:"Purple slider",showValue:!0}},h={args:{min:10,max:90,value:50,label:"Custom range (10-90)",showValue:!0}},f={args:{min:0,max:1,step:.1,value:.5,label:"Decimal step (0.1)",showValue:!0,formatValue:a=>a.toFixed(1)}},y={args:{min:0,max:1e3,step:10,value:500,label:"Large range (0-1000)",showValue:!0}},V={args:{min:0,max:100,value:75,label:"Opacity",showValue:!0,formatValue:a=>`${a}%`}},w={args:{min:-10,max:40,value:22,label:"Temperature",showValue:!0,formatValue:a=>`${a}°C`,color:"orange"}},S={args:{min:0,max:1e3,step:10,value:250,label:"Price Range",showValue:!0,formatValue:a=>`$${a}`,color:"green"}},x={render:()=>e.createElement("div",{className:"w-80 space-y-6"},e.createElement(l,{color:"blue",value:20,label:"Blue",showValue:!0}),e.createElement(l,{color:"green",value:40,label:"Green",showValue:!0}),e.createElement(l,{color:"orange",value:60,label:"Orange",showValue:!0}),e.createElement(l,{color:"red",value:80,label:"Red",showValue:!0}),e.createElement(l,{color:"purple",value:100,label:"Purple",showValue:!0})),parameters:{docs:{description:{story:"All slider colors displayed together."}}}},E={render:()=>e.createElement("div",{className:"max-w-sm space-y-8"},e.createElement(s,{variant:"headline"},"Audio Settings"),e.createElement("div",{className:"space-y-6"},e.createElement(l,{label:"Master Volume",value:75,showValue:!0,formatValue:a=>`${a}%`,color:"blue"}),e.createElement(l,{label:"Music Volume",value:60,showValue:!0,formatValue:a=>`${a}%`,color:"green"}),e.createElement(l,{label:"Effects Volume",value:80,showValue:!0,formatValue:a=>`${a}%`,color:"orange"}),e.createElement(l,{label:"Voice Volume",value:90,showValue:!0,formatValue:a=>`${a}%`,color:"purple"}),e.createElement(l,{label:"Bass",min:-10,max:10,value:2,showValue:!0,formatValue:a=>a>0?`+${a}`:`${a}`,color:"red"}),e.createElement(l,{label:"Treble",min:-10,max:10,value:-1,showValue:!0,formatValue:a=>a>0?`+${a}`:`${a}`,color:"red"}))),parameters:{docs:{description:{story:"Example audio settings panel with various slider configurations."}}}},T={render:()=>{const[a,n]=e.useState({brightness:75,contrast:50,saturation:60,temperature:6500});return e.createElement("div",{className:"max-w-md space-y-8"},e.createElement(s,{variant:"headline"},"Display Settings"),e.createElement("div",{className:"space-y-6"},e.createElement(l,{label:"Brightness",value:a.brightness,onChange:r=>n(t=>({...t,brightness:r})),showValue:!0,formatValue:r=>`${r}%`,color:"blue"}),e.createElement(l,{label:"Contrast",value:a.contrast,onChange:r=>n(t=>({...t,contrast:r})),showValue:!0,formatValue:r=>`${r}%`,color:"green"}),e.createElement(l,{label:"Saturation",value:a.saturation,onChange:r=>n(t=>({...t,saturation:r})),showValue:!0,formatValue:r=>`${r}%`,color:"orange"}),e.createElement(l,{label:"Color Temperature",min:2700,max:6500,step:100,value:a.temperature,onChange:r=>n(t=>({...t,temperature:r})),showValue:!0,formatValue:r=>`${r}K`,color:"red"})),e.createElement("div",{className:"mt-8 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark"},e.createElement(s,{variant:"subhead"},"Current Settings:"),e.createElement("div",{className:"mt-2 space-y-1"},e.createElement(s,{variant:"footnote",color:"secondary"},"Brightness: ",a.brightness,"%"),e.createElement(s,{variant:"footnote",color:"secondary"},"Contrast: ",a.contrast,"%"),e.createElement(s,{variant:"footnote",color:"secondary"},"Saturation: ",a.saturation,"%"),e.createElement(s,{variant:"footnote",color:"secondary"},"Temperature: ",a.temperature,"K"))))},parameters:{docs:{description:{story:"Interactive example showing real-time slider value updates."}}}};var k,O,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {}
}`,...(I=(O=u.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var M,A,G;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Volume",
    showValue: true
  }
}`,...(G=(A=i.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var L,K,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    showValue: true
  }
}`,...(W=(K=c.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var _,F,j;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: "Disabled slider"
  }
}`,...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var z,H,J;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    color: "blue",
    label: "Blue slider",
    showValue: true
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    color: "green",
    label: "Green slider",
    showValue: true
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    color: "orange",
    label: "Orange slider",
    showValue: true
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,le;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    color: "red",
    label: "Red slider",
    showValue: true
  }
}`,...(le=(re=v.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,se,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    color: "purple",
    label: "Purple slider",
    showValue: true
  }
}`,...(ne=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,ue,ie;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    min: 10,
    max: 90,
    value: 50,
    label: "Custom range (10-90)",
    showValue: true
  }
}`,...(ie=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var ce,me,de;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 1,
    step: 0.1,
    value: 0.5,
    label: "Decimal step (0.1)",
    showValue: true,
    formatValue: value => value.toFixed(1)
  }
}`,...(de=(me=f.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ge,ve;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 1000,
    step: 10,
    value: 500,
    label: "Large range (0-1000)",
    showValue: true
  }
}`,...(ve=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,he,fe;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 75,
    label: "Opacity",
    showValue: true,
    formatValue: value => \`\${value}%\`
  }
}`,...(fe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ye,Ve,we;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    min: -10,
    max: 40,
    value: 22,
    label: "Temperature",
    showValue: true,
    formatValue: value => \`\${value}°C\`,
    color: "orange"
  }
}`,...(we=(Ve=w.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var Se,xe,Ee;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 1000,
    step: 10,
    value: 250,
    label: "Price Range",
    showValue: true,
    formatValue: value => \`$\${value}\`,
    color: "green"
  }
}`,...(Ee=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Te,$e,Ce;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-6">\r
      <Slider color="blue" value={20} label="Blue" showValue />\r
      <Slider color="green" value={40} label="Green" showValue />\r
      <Slider color="orange" value={60} label="Orange" showValue />\r
      <Slider color="red" value={80} label="Red" showValue />\r
      <Slider color="purple" value={100} label="Purple" showValue />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All slider colors displayed together."
      }
    }
  }
}`,...(Ce=($e=x.parameters)==null?void 0:$e.docs)==null?void 0:Ce.source}}};var Ne,qe,Re;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-8">\r
      <Typography variant="headline">Audio Settings</Typography>\r
\r
      <div className="space-y-6">\r
        <Slider label="Master Volume" value={75} showValue formatValue={value => \`\${value}%\`} color="blue" />\r
\r
        <Slider label="Music Volume" value={60} showValue formatValue={value => \`\${value}%\`} color="green" />\r
\r
        <Slider label="Effects Volume" value={80} showValue formatValue={value => \`\${value}%\`} color="orange" />\r
\r
        <Slider label="Voice Volume" value={90} showValue formatValue={value => \`\${value}%\`} color="purple" />\r
\r
        <Slider label="Bass" min={-10} max={10} value={2} showValue formatValue={value => value > 0 ? \`+\${value}\` : \`\${value}\`} color="red" />\r
\r
        <Slider label="Treble" min={-10} max={10} value={-1} showValue formatValue={value => value > 0 ? \`+\${value}\` : \`\${value}\`} color="red" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example audio settings panel with various slider configurations."
      }
    }
  }
}`,...(Re=(qe=E.parameters)==null?void 0:qe.docs)==null?void 0:Re.source}}};var Pe,De,Be;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = React.useState({
      brightness: 75,
      contrast: 50,
      saturation: 60,
      temperature: 6500
    });
    return <div className="max-w-md space-y-8">\r
        <Typography variant="headline">Display Settings</Typography>\r
\r
        <div className="space-y-6">\r
          <Slider label="Brightness" value={settings.brightness} onChange={value => setSettings(prev => ({
          ...prev,
          brightness: value
        }))} showValue formatValue={value => \`\${value}%\`} color="blue" />\r
\r
          <Slider label="Contrast" value={settings.contrast} onChange={value => setSettings(prev => ({
          ...prev,
          contrast: value
        }))} showValue formatValue={value => \`\${value}%\`} color="green" />\r
\r
          <Slider label="Saturation" value={settings.saturation} onChange={value => setSettings(prev => ({
          ...prev,
          saturation: value
        }))} showValue formatValue={value => \`\${value}%\`} color="orange" />\r
\r
          <Slider label="Color Temperature" min={2700} max={6500} step={100} value={settings.temperature} onChange={value => setSettings(prev => ({
          ...prev,
          temperature: value
        }))} showValue formatValue={value => \`\${value}K\`} color="red" />\r
        </div>\r
\r
        <div className="mt-8 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">\r
          <Typography variant="subhead">Current Settings:</Typography>\r
          <div className="mt-2 space-y-1">\r
            <Typography variant="footnote" color="secondary">\r
              Brightness: {settings.brightness}%\r
            </Typography>\r
            <Typography variant="footnote" color="secondary">\r
              Contrast: {settings.contrast}%\r
            </Typography>\r
            <Typography variant="footnote" color="secondary">\r
              Saturation: {settings.saturation}%\r
            </Typography>\r
            <Typography variant="footnote" color="secondary">\r
              Temperature: {settings.temperature}K\r
            </Typography>\r
          </div>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing real-time slider value updates."
      }
    }
  }
}`,...(Be=(De=T.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};const Je=["Default","WithLabel","WithValue","Disabled","Blue","Green","Orange","Red","Purple","CustomRange","DecimalStep","LargeRange","PercentageSlider","TemperatureSlider","PriceSlider","AllColors","SettingsPanel","InteractiveExample"];export{x as AllColors,d as Blue,h as CustomRange,f as DecimalStep,u as Default,m as Disabled,p as Green,T as InteractiveExample,y as LargeRange,g as Orange,V as PercentageSlider,S as PriceSlider,b as Purple,v as Red,E as SettingsPanel,w as TemperatureSlider,i as WithLabel,c as WithValue,Je as __namedExportsOrder,He as default};
