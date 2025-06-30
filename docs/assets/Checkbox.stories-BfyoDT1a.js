import{R as e}from"./iframe-DPTEoTx4.js";import{g as F,a as j}from"./accessibility-Ckp-g_ze.js";import{t as Ue}from"./animations-DDGOJxN6.js";import{T as z}from"./Typography-RJZoBOJc.js";const r=e.forwardRef(({checked:t,defaultChecked:d=!1,indeterminate:c=!1,size:p="medium",disabled:l=!1,color:O="blue",onChange:i,label:u,labelPosition:s="right",error:a=!1,errorMessage:n,helperText:o,required:P=!1,className:We="",testId:Fe,...je},h)=>{const[V,$]=e.useState(t??d),B=e.useRef(null),D=e.useId(),L=F("checkbox-error"),G=F("checkbox-helper");e.useEffect(()=>{t!==void 0&&$(t)},[t]),e.useEffect(()=>{B.current&&(B.current.indeterminate=c)},[c]);const _e=m=>{if(l)return;const M=m.target.checked;t===void 0&&$(M),i==null||i(M),c?j("Checkbox state changed from indeterminate","polite"):j(M?"Checkbox checked":"Checkbox unchecked","polite")},He={small:"w-4 h-4",medium:"w-5 h-5",large:"w-6 h-6"},Ye={blue:"checked:bg-systemBlue-500 checked:border-systemBlue-500 dark:checked:bg-systemBlue-600 dark:checked:border-systemBlue-600",green:"checked:bg-systemGreen-500 checked:border-systemGreen-500 dark:checked:bg-systemGreen-600 dark:checked:border-systemGreen-600",orange:"checked:bg-systemOrange-500 checked:border-systemOrange-500 dark:checked:bg-systemOrange-600 dark:checked:border-systemOrange-600",red:"checked:bg-systemRed-500 checked:border-systemRed-500 dark:checked:bg-systemRed-600 dark:checked:border-systemRed-600",purple:"checked:bg-systemPurple-500 checked:border-systemPurple-500 dark:checked:bg-systemPurple-600 dark:checked:border-systemPurple-600"},Je=`
      appearance-none rounded-ios-sm border-2 border-separator-opaque dark:border-separator-opaque-dark
      bg-background-primary dark:bg-background-tertiary-dark
      cursor-pointer relative
      focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2
      ${Ue.default}
    `,Ke=a?"border-systemRed-500 dark:border-systemRed-400":"",Qe=l?"opacity-50 cursor-not-allowed":"",W=e.createElement("div",{className:"relative"},e.createElement("input",{ref:m=>{B.current=m,typeof h=="function"?h(m):h&&(h.current=m)},id:D,type:"checkbox",checked:V,disabled:l,required:P,onChange:_e,className:`${Je} ${He[p]} ${Ye[O]} ${Ke} ${Qe} ${We}`.trim(),"data-testid":Fe,"aria-describedby":[a&&n?L:null,o?G:null].filter(Boolean).join(" ")||void 0,"aria-invalid":a,"aria-required":P,...je}),(V||c)&&e.createElement("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center"},c?e.createElement("svg",{className:"h-3 w-3 text-white",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true"},e.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})):e.createElement("svg",{className:"h-3 w-3 text-white",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true"},e.createElement("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"}))));return u?e.createElement("div",{className:"space-y-1"},e.createElement("label",{htmlFor:D,className:`flex min-h-[44px] cursor-pointer items-start gap-3 ${s==="left"?"flex-row-reverse":""} ${l?"cursor-not-allowed":""}`},W,e.createElement("div",{className:"flex-1 pt-0.5"},e.createElement("span",{className:"select-none text-label-primary text-ios-body dark:text-label-primary-dark"},u,P&&e.createElement("span",{className:"ml-1 text-systemRed-500","aria-label":"required"},"*")))),a&&n&&e.createElement("p",{id:L,className:"text-systemRed-500 text-ios-footnote dark:text-systemRed-400",role:"alert"},n),o&&!a&&e.createElement("p",{id:G,className:"text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark"},o)):e.createElement("div",{className:"space-y-1"},W,a&&n&&e.createElement("p",{id:L,className:"text-systemRed-500 text-ios-footnote dark:text-systemRed-400",role:"alert"},n),o&&!a&&e.createElement("p",{id:G,className:"text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark"},o))});r.displayName="Checkbox";r.__docgenInfo={description:`iOS-inspired checkbox component following Apple's design patterns.

Features:
- Controlled and uncontrolled modes
- Indeterminate state with proper screen reader support
- Error state with validation messaging
- Smooth animations with reduced motion support
- Large touch targets for mobile accessibility
- Comprehensive keyboard navigation

@example
\`\`\`tsx
<Checkbox
  label="Accept terms and conditions"
  required
  error={hasError}
  errorMessage="You must accept the terms"
  onChange={setAccepted}
/>
\`\`\``,methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is checked"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled component",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is in indeterminate state",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size variant",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is disabled",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"blue" | "green" | "orange" | "red" | "purple"',elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"green"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"red"'},{name:"literal",value:'"purple"'}]},description:"Color variant when checked",defaultValue:{value:'"blue"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Change event handler"},label:{required:!1,tsType:{name:"string"},description:"Checkbox label"},labelPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Label position relative to checkbox",defaultValue:{value:'"right"',computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is in error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"},required:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is required",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test identifier for automated testing"}}};const Xe=()=>{},tr={title:"Form Controls/Checkbox",component:r,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired checkbox component following Apple's design patterns. Perfect for forms, settings, and multi-selection interfaces."}}},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Is the checkbox checked?"},indeterminate:{control:"boolean",description:"Is the checkbox indeterminate?"},size:{control:"select",options:["small","medium","large"],description:"Checkbox size"},color:{control:"select",options:["blue","green","orange","red","purple"],description:"Checkbox color when checked"},disabled:{control:"boolean",description:"Disable the checkbox"},label:{control:"text",description:"Checkbox label"},labelPosition:{control:"select",options:["left","right"],description:"Label position"}},args:{onChange:Xe}},b={args:{}},k={args:{checked:!0}},g={args:{indeterminate:!0}},f={args:{label:"Accept terms and conditions"}},y={args:{disabled:!0,label:"Disabled checkbox"}},x={args:{size:"small",label:"Small checkbox"}},v={args:{size:"medium",label:"Medium checkbox"}},S={args:{size:"large",label:"Large checkbox"}},E={args:{checked:!0,color:"blue",label:"Blue checkbox"}},C={args:{checked:!0,color:"green",label:"Green checkbox"}},I={args:{checked:!0,color:"orange",label:"Orange checkbox"}},N={args:{checked:!0,color:"red",label:"Red checkbox"}},w={args:{checked:!0,color:"purple",label:"Purple checkbox"}},q={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(r,{size:"small",label:"Small"}),e.createElement(r,{size:"medium",label:"Medium"}),e.createElement(r,{size:"large",label:"Large"})),parameters:{docs:{description:{story:"All checkbox sizes displayed together."}}}},A={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(r,{checked:!0,color:"blue",label:"Blue"}),e.createElement(r,{checked:!0,color:"green",label:"Green"}),e.createElement(r,{checked:!0,color:"orange",label:"Orange"}),e.createElement(r,{checked:!0,color:"red",label:"Red"}),e.createElement(r,{checked:!0,color:"purple",label:"Purple"})),parameters:{docs:{description:{story:"All checkbox colors displayed together."}}}},R={render:()=>e.createElement("div",{className:"max-w-sm space-y-6"},e.createElement(z,{variant:"headline"},"Preferences"),e.createElement("div",{className:"space-y-4"},e.createElement(r,{defaultChecked:!0,label:"Email notifications"}),e.createElement(r,{label:"SMS notifications"}),e.createElement(r,{defaultChecked:!0,label:"Push notifications"}),e.createElement(r,{label:"Marketing emails"}),e.createElement(r,{defaultChecked:!0,label:"Security alerts"})),e.createElement("div",{className:"border-t border-separator-nonOpaque pt-4 dark:border-separator-nonOpaque-dark"},e.createElement(r,{label:"I agree to the terms and conditions",color:"green"}))),parameters:{docs:{description:{story:"Example preferences form with various checkbox options."}}}},T={render:()=>{const[t,d]=e.useState(["item1"]),[c,p]=e.useState(!1),l=[{id:"item1",label:"Item 1"},{id:"item2",label:"Item 2"},{id:"item3",label:"Item 3"},{id:"item4",label:"Item 4"}],O=(s,a)=>{d(a?n=>[...n,s]:n=>n.filter(o=>o!==s))},i=s=>{p(s),d(s?l.map(a=>a.id):[])};e.useEffect(()=>{const s=l.every(a=>t.includes(a.id));t.length>0,p(s)},[t]);const u=t.length>0&&t.length<l.length;return e.createElement("div",{className:"max-w-sm space-y-6"},e.createElement(z,{variant:"headline"},"Select Items"),e.createElement(r,{checked:c,indeterminate:u,onChange:i,label:"Select All",color:"blue"}),e.createElement("div",{className:"space-y-3 border-l-2 border-separator-nonOpaque pl-6 dark:border-separator-nonOpaque-dark"},l.map(s=>e.createElement(r,{key:s.id,checked:t.includes(s.id),onChange:a=>O(s.id,a),label:s.label}))),e.createElement("div",{className:"mt-6 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark"},e.createElement(z,{variant:"subhead"},"Selected Items:"),e.createElement(z,{variant:"footnote",color:"secondary"},t.length>0?t.join(", "):"None")))},parameters:{docs:{description:{story:"Interactive example with select all functionality and indeterminate state."}}}};var _,H,Y;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {}
}`,...(Y=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions"
  }
}`,...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: "Disabled checkbox"
  }
}`,...(le=(se=y.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ne,ce,oe;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small checkbox"
  }
}`,...(oe=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};var de,ie,me;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Medium checkbox"
  }
}`,...(me=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var pe,ue,he;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Large checkbox"
  }
}`,...(he=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var be,ke,ge;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "blue",
    label: "Blue checkbox"
  }
}`,...(ge=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:ge.source}}};var fe,ye,xe;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "green",
    label: "Green checkbox"
  }
}`,...(xe=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var ve,Se,Ee;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "orange",
    label: "Orange checkbox"
  }
}`,...(Ee=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var Ce,Ie,Ne;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "red",
    label: "Red checkbox"
  }
}`,...(Ne=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.source}}};var we,qe,Ae;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "purple",
    label: "Purple checkbox"
  }
}`,...(Ae=(qe=w.parameters)==null?void 0:qe.docs)==null?void 0:Ae.source}}};var Re,Te,ze;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Checkbox size="small" label="Small" />\r
      <Checkbox size="medium" label="Medium" />\r
      <Checkbox size="large" label="Large" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All checkbox sizes displayed together."
      }
    }
  }
}`,...(ze=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var Oe,Pe,Be;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Checkbox checked color="blue" label="Blue" />\r
      <Checkbox checked color="green" label="Green" />\r
      <Checkbox checked color="orange" label="Orange" />\r
      <Checkbox checked color="red" label="Red" />\r
      <Checkbox checked color="purple" label="Purple" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All checkbox colors displayed together."
      }
    }
  }
}`,...(Be=(Pe=A.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var Le,Ge,Me;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-6">\r
      <Typography variant="headline">Preferences</Typography>\r
\r
      <div className="space-y-4">\r
        <Checkbox defaultChecked label="Email notifications" />\r
        <Checkbox label="SMS notifications" />\r
        <Checkbox defaultChecked label="Push notifications" />\r
        <Checkbox label="Marketing emails" />\r
        <Checkbox defaultChecked label="Security alerts" />\r
      </div>\r
\r
      <div className="border-t border-separator-nonOpaque pt-4 dark:border-separator-nonOpaque-dark">\r
        <Checkbox label="I agree to the terms and conditions" color="green" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example preferences form with various checkbox options."
      }
    }
  }
}`,...(Me=(Ge=R.parameters)==null?void 0:Ge.docs)==null?void 0:Me.source}}};var Ve,$e,De;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>(["item1"]);
    const [selectAll, setSelectAll] = React.useState(false);
    const items = [{
      id: "item1",
      label: "Item 1"
    }, {
      id: "item2",
      label: "Item 2"
    }, {
      id: "item3",
      label: "Item 3"
    }, {
      id: "item4",
      label: "Item 4"
    }];
    const handleItemChange = (itemId: string, checked: boolean) => {
      if (checked) {
        setSelectedItems(prev => [...prev, itemId]);
      } else {
        setSelectedItems(prev => prev.filter(id => id !== itemId));
      }
    };
    const handleSelectAllChange = (checked: boolean) => {
      setSelectAll(checked);
      if (checked) {
        setSelectedItems(items.map(item => item.id));
      } else {
        setSelectedItems([]);
      }
    };
    React.useEffect(() => {
      const allSelected = items.every(item => selectedItems.includes(item.id));
      const someSelected = selectedItems.length > 0;
      setSelectAll(allSelected);
    }, [selectedItems]);
    const isIndeterminate = selectedItems.length > 0 && selectedItems.length < items.length;
    return <div className="max-w-sm space-y-6">\r
        <Typography variant="headline">Select Items</Typography>\r
\r
        <Checkbox checked={selectAll} indeterminate={isIndeterminate} onChange={handleSelectAllChange} label="Select All" color="blue" />\r
\r
        <div className="space-y-3 border-l-2 border-separator-nonOpaque pl-6 dark:border-separator-nonOpaque-dark">\r
          {items.map(item => <Checkbox key={item.id} checked={selectedItems.includes(item.id)} onChange={checked => handleItemChange(item.id, checked)} label={item.label} />)}\r
        </div>\r
\r
        <div className="mt-6 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">\r
          <Typography variant="subhead">Selected Items:</Typography>\r
          <Typography variant="footnote" color="secondary">\r
            {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}\r
          </Typography>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example with select all functionality and indeterminate state."
      }
    }
  }
}`,...(De=($e=T.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};const sr=["Default","Checked","Indeterminate","WithLabel","Disabled","Small","Medium","Large","Blue","Green","Orange","Red","Purple","AllSizes","AllColors","FormExample","InteractiveExample"];export{A as AllColors,q as AllSizes,E as Blue,k as Checked,b as Default,y as Disabled,R as FormExample,C as Green,g as Indeterminate,T as InteractiveExample,S as Large,v as Medium,I as Orange,w as Purple,N as Red,x as Small,f as WithLabel,sr as __namedExportsOrder,tr as default};
