import{R as e}from"./iframe-DPTEoTx4.js";import{T as n}from"./Typography-RJZoBOJc.js";const P=e.forwardRef(({value:a,checked:s=!1,name:t,size:r="medium",disabled:i=!1,color:D="blue",onChange:d,label:c,labelPosition:u="right",className:x="",testId:G,...V},O)=>{const C=Ve=>{i||d==null||d(Ve.target.value)},p={small:"w-4 h-4",medium:"w-5 h-5",large:"w-6 h-6"},B={blue:"checked:bg-systemBlue-500 checked:border-systemBlue-500 dark:checked:bg-systemBlue-600 dark:checked:border-systemBlue-600",green:"checked:bg-systemGreen-500 checked:border-systemGreen-500 dark:checked:bg-systemGreen-600 dark:checked:border-systemGreen-600",orange:"checked:bg-systemOrange-500 checked:border-systemOrange-500 dark:checked:bg-systemOrange-600 dark:checked:border-systemOrange-600",red:"checked:bg-systemRed-500 checked:border-systemRed-500 dark:checked:bg-systemRed-600 dark:checked:border-systemRed-600",purple:"checked:bg-systemPurple-500 checked:border-systemPurple-500 dark:checked:bg-systemPurple-600 dark:checked:border-systemPurple-600"},L=`
      appearance-none rounded-full border-2 border-separator-opaque dark:border-separator-opaque-dark
      bg-background-primary dark:bg-background-tertiary-dark
      transition-all duration-200 ease-ios cursor-pointer
      focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2
      relative
    `,l=i?"opacity-50 cursor-not-allowed":"",$=e.createElement("div",{className:"relative"},e.createElement("input",{ref:O,type:"radio",value:a,name:t,checked:s,disabled:i,onChange:C,className:`${L} ${p[r]} ${B[D]} ${l} ${x}`.trim(),"data-testid":G,...V}),s&&e.createElement("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center"},e.createElement("div",{className:"h-2 w-2 rounded-full bg-white"})));return c?e.createElement("label",{className:`flex cursor-pointer items-center gap-3 ${u==="left"?"flex-row-reverse":""} ${i?"cursor-not-allowed":""}`},$,e.createElement("span",{className:"select-none text-label-primary text-ios-body dark:text-label-primary-dark"},c)):$});P.displayName="Radio";P.__docgenInfo={description:"iOS-inspired radio component following Apple's design patterns",methods:[],displayName:"Radio",props:{value:{required:!0,tsType:{name:"string"},description:"Radio value"},checked:{required:!1,tsType:{name:"boolean"},description:"Is the radio checked?",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Radio name (for grouping)"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Radio size",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Is the radio disabled?",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"blue" | "green" | "orange" | "red" | "purple"',elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"green"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"red"'},{name:"literal",value:'"purple"'}]},description:"Radio color when checked",defaultValue:{value:'"blue"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},label:{required:!1,tsType:{name:"string"},description:"Radio label"},labelPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Label position",defaultValue:{value:'"right"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const o=e.forwardRef(({value:a,defaultValue:s,name:t,onChange:r,options:i,size:D="medium",color:d="blue",direction:c="vertical",disabled:u=!1,className:x="",testId:G,...V},O)=>{const[C,p]=e.useState(a??s??"");e.useEffect(()=>{a!==void 0&&p(a)},[a]);const B=l=>{u||(a===void 0&&p(l),r==null||r(l))},L={horizontal:"flex flex-row gap-6",vertical:"flex flex-col gap-3"};return e.createElement("div",{ref:O,className:`${L[c]} ${x}`,role:"radiogroup","data-testid":G,...V},i.map(l=>e.createElement(P,{key:l.value,value:l.value,name:t,checked:C===l.value,disabled:u||l.disabled,size:D,color:d,label:l.label,onChange:B})))});o.displayName="RadioGroup";o.__docgenInfo={description:"iOS-inspired radio group component for managing multiple radio buttons",methods:[],displayName:"RadioGroup",props:{value:{required:!1,tsType:{name:"string"},description:"Selected value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value for uncontrolled component"},name:{required:!0,tsType:{name:"string"},description:"Radio group name"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
  disabled?: boolean
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`Array<{
  value: string
  label: string
  disabled?: boolean
}>`},description:"Radio options"},size:{required:!1,tsType:{name:'RadioProps["size"]',raw:'RadioProps["size"]'},description:"Radio size",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:'RadioProps["color"]',raw:'RadioProps["color"]'},description:"Radio color",defaultValue:{value:'"blue"',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Layout direction",defaultValue:{value:'"vertical"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Is the entire group disabled?",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const Oe=()=>{},Le={title:"Form Controls/Radio",component:P,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired radio component following Apple's design patterns. Use RadioGroup for managing multiple radio buttons."}}},tags:["autodocs"],argTypes:{value:{control:"text",description:"Radio value"},checked:{control:"boolean",description:"Is the radio checked?"},size:{control:"select",options:["small","medium","large"],description:"Radio size"},color:{control:"select",options:["blue","green","orange","red","purple"],description:"Radio color when checked"},disabled:{control:"boolean",description:"Disable the radio"},label:{control:"text",description:"Radio label"},labelPosition:{control:"select",options:["left","right"],description:"Label position"}},args:{value:"option1",onChange:Oe}},m={args:{}},g={args:{checked:!0}},v={args:{label:"Select this option"}},b={args:{disabled:!0,label:"Disabled radio"}},y={args:{size:"small",label:"Small radio"}},h={args:{size:"medium",label:"Medium radio"}},f={args:{size:"large",label:"Large radio"}},S={args:{checked:!0,color:"blue",label:"Blue radio"}},k={args:{checked:!0,color:"green",label:"Green radio"}},E={args:{checked:!0,color:"orange",label:"Orange radio"}},R={args:{checked:!0,color:"red",label:"Red radio"}},T={args:{checked:!0,color:"purple",label:"Purple radio"}},w={render:()=>e.createElement(o,{name:"vertical-group",defaultValue:"option2",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]}),parameters:{docs:{description:{story:"Radio group with vertical layout."}}}},N={render:()=>e.createElement(o,{name:"horizontal-group",direction:"horizontal",defaultValue:"medium",options:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),parameters:{docs:{description:{story:"Radio group with horizontal layout."}}}},q={render:()=>e.createElement("div",{className:"max-w-sm space-y-8"},e.createElement(n,{variant:"headline"},"Survey Form"),e.createElement("div",{className:"space-y-4"},e.createElement(n,{variant:"subhead"},"How satisfied are you with our service?"),e.createElement(o,{name:"satisfaction",options:[{value:"very-satisfied",label:"Very Satisfied"},{value:"satisfied",label:"Satisfied"},{value:"neutral",label:"Neutral"},{value:"dissatisfied",label:"Dissatisfied"},{value:"very-dissatisfied",label:"Very Dissatisfied"}],color:"green"})),e.createElement("div",{className:"space-y-4"},e.createElement(n,{variant:"subhead"},"How did you hear about us?"),e.createElement(o,{name:"source",options:[{value:"search",label:"Search Engine"},{value:"social",label:"Social Media"},{value:"friend",label:"Friend/Family"},{value:"ad",label:"Advertisement"},{value:"other",label:"Other"}],color:"blue"})),e.createElement("div",{className:"space-y-4"},e.createElement(n,{variant:"subhead"},"Preferred contact method"),e.createElement(o,{name:"contact",direction:"horizontal",options:[{value:"email",label:"Email"},{value:"phone",label:"Phone"},{value:"sms",label:"SMS"}],color:"orange"}))),parameters:{docs:{description:{story:"Example survey form with multiple radio groups."}}}},z={render:()=>{const[a,s]=e.useState({plan:"basic",billing:"monthly",support:"email"});return e.createElement("div",{className:"max-w-md space-y-8"},e.createElement(n,{variant:"headline"},"Choose Your Plan"),e.createElement("div",{className:"space-y-4"},e.createElement(n,{variant:"subhead"},"Select Plan"),e.createElement(o,{name:"plan",value:a.plan,onChange:t=>s(r=>({...r,plan:t})),options:[{value:"basic",label:"Basic - $9/month"},{value:"pro",label:"Pro - $19/month"},{value:"enterprise",label:"Enterprise - $49/month"}],color:"blue"})),e.createElement("div",{className:"space-y-4"},e.createElement(n,{variant:"subhead"},"Billing Cycle"),e.createElement(o,{name:"billing",value:a.billing,onChange:t=>s(r=>({...r,billing:t})),direction:"horizontal",options:[{value:"monthly",label:"Monthly"},{value:"yearly",label:"Yearly (Save 20%)"}],color:"green"})),e.createElement("div",{className:"space-y-4"},e.createElement(n,{variant:"subhead"},"Support Level"),e.createElement(o,{name:"support",value:a.support,onChange:t=>s(r=>({...r,support:t})),options:[{value:"email",label:"Email Support"},{value:"chat",label:"Live Chat"},{value:"phone",label:"Phone Support"}],color:"purple"})),e.createElement("div",{className:"mt-8 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark"},e.createElement(n,{variant:"subhead"},"Selected Options:"),e.createElement(n,{variant:"footnote",color:"secondary"},"Plan: ",a.plan,e.createElement("br",null),"Billing: ",a.billing,e.createElement("br",null),"Support: ",a.support)))},parameters:{docs:{description:{story:"Interactive example showing controlled radio groups with form state."}}}};var F,I,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {}
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var A,H,_;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(_=(H=g.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var Y,j,W;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: "Select this option"
  }
}`,...(W=(j=v.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var U,J,K;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: "Disabled radio"
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small radio"
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Medium radio"
  }
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,ne,oe;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Large radio"
  }
}`,...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,se,ie;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "blue",
    label: "Blue radio"
  }
}`,...(ie=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,ce,ue;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "green",
    label: "Green radio"
  }
}`,...(ue=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,ge;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "orange",
    label: "Orange radio"
  }
}`,...(ge=(me=E.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ve,be,ye;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "red",
    label: "Red radio"
  }
}`,...(ye=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,fe,Se;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: "purple",
    label: "Purple radio"
  }
}`,...(Se=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var ke,Ee,Re;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <RadioGroup name="vertical-group" defaultValue="option2" options={[{
    value: "option1",
    label: "Option 1"
  }, {
    value: "option2",
    label: "Option 2"
  }, {
    value: "option3",
    label: "Option 3"
  }]} />,
  parameters: {
    docs: {
      description: {
        story: "Radio group with vertical layout."
      }
    }
  }
}`,...(Re=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Te,we,Ne;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <RadioGroup name="horizontal-group" direction="horizontal" defaultValue="medium" options={[{
    value: "small",
    label: "Small"
  }, {
    value: "medium",
    label: "Medium"
  }, {
    value: "large",
    label: "Large"
  }]} />,
  parameters: {
    docs: {
      description: {
        story: "Radio group with horizontal layout."
      }
    }
  }
}`,...(Ne=(we=N.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var qe,ze,Pe;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-8">\r
      <Typography variant="headline">Survey Form</Typography>\r
\r
      <div className="space-y-4">\r
        <Typography variant="subhead">How satisfied are you with our service?</Typography>\r
        <RadioGroup name="satisfaction" options={[{
        value: "very-satisfied",
        label: "Very Satisfied"
      }, {
        value: "satisfied",
        label: "Satisfied"
      }, {
        value: "neutral",
        label: "Neutral"
      }, {
        value: "dissatisfied",
        label: "Dissatisfied"
      }, {
        value: "very-dissatisfied",
        label: "Very Dissatisfied"
      }]} color="green" />\r
      </div>\r
\r
      <div className="space-y-4">\r
        <Typography variant="subhead">How did you hear about us?</Typography>\r
        <RadioGroup name="source" options={[{
        value: "search",
        label: "Search Engine"
      }, {
        value: "social",
        label: "Social Media"
      }, {
        value: "friend",
        label: "Friend/Family"
      }, {
        value: "ad",
        label: "Advertisement"
      }, {
        value: "other",
        label: "Other"
      }]} color="blue" />\r
      </div>\r
\r
      <div className="space-y-4">\r
        <Typography variant="subhead">Preferred contact method</Typography>\r
        <RadioGroup name="contact" direction="horizontal" options={[{
        value: "email",
        label: "Email"
      }, {
        value: "phone",
        label: "Phone"
      }, {
        value: "sms",
        label: "SMS"
      }]} color="orange" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example survey form with multiple radio groups."
      }
    }
  }
}`,...(Pe=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:Pe.source}}};var De,xe,Ge;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      plan: "basic",
      billing: "monthly",
      support: "email"
    });
    return <div className="max-w-md space-y-8">\r
        <Typography variant="headline">Choose Your Plan</Typography>\r
\r
        <div className="space-y-4">\r
          <Typography variant="subhead">Select Plan</Typography>\r
          <RadioGroup name="plan" value={formData.plan} onChange={value => setFormData(prev => ({
          ...prev,
          plan: value
        }))} options={[{
          value: "basic",
          label: "Basic - $9/month"
        }, {
          value: "pro",
          label: "Pro - $19/month"
        }, {
          value: "enterprise",
          label: "Enterprise - $49/month"
        }]} color="blue" />\r
        </div>\r
\r
        <div className="space-y-4">\r
          <Typography variant="subhead">Billing Cycle</Typography>\r
          <RadioGroup name="billing" value={formData.billing} onChange={value => setFormData(prev => ({
          ...prev,
          billing: value
        }))} direction="horizontal" options={[{
          value: "monthly",
          label: "Monthly"
        }, {
          value: "yearly",
          label: "Yearly (Save 20%)"
        }]} color="green" />\r
        </div>\r
\r
        <div className="space-y-4">\r
          <Typography variant="subhead">Support Level</Typography>\r
          <RadioGroup name="support" value={formData.support} onChange={value => setFormData(prev => ({
          ...prev,
          support: value
        }))} options={[{
          value: "email",
          label: "Email Support"
        }, {
          value: "chat",
          label: "Live Chat"
        }, {
          value: "phone",
          label: "Phone Support"
        }]} color="purple" />\r
        </div>\r
\r
        <div className="mt-8 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">\r
          <Typography variant="subhead">Selected Options:</Typography>\r
          <Typography variant="footnote" color="secondary">\r
            Plan: {formData.plan}\r
            <br />\r
            Billing: {formData.billing}\r
            <br />\r
            Support: {formData.support}\r
          </Typography>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing controlled radio groups with form state."
      }
    }
  }
}`,...(Ge=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:Ge.source}}};const $e=["Default","Checked","WithLabel","Disabled","Small","Medium","Large","Blue","Green","Orange","Red","Purple","RadioGroupVertical","RadioGroupHorizontal","FormExample","InteractiveExample"];export{S as Blue,g as Checked,m as Default,b as Disabled,q as FormExample,k as Green,z as InteractiveExample,f as Large,h as Medium,E as Orange,T as Purple,N as RadioGroupHorizontal,w as RadioGroupVertical,R as Red,y as Small,v as WithLabel,$e as __namedExportsOrder,Le as default};
