import{R as e}from"./iframe-DPTEoTx4.js";import{B as S}from"./Button-Vw-cbfqZ.js";import{T as r}from"./Typography-RJZoBOJc.js";const a=e.forwardRef(({orientation:t="horizontal",variant:x="full",thickness:N="thin",color:b="default",children:n,className:w="",testId:I,...R},$)=>{const C="flex items-center",q={horizontal:"w-full",vertical:"h-full flex-col"},z={full:"",inset:t==="horizontal"?"ml-4":"mt-4",middle:t==="horizontal"?"mx-4":"my-4"},k={thin:t==="horizontal"?"border-t":"border-l",medium:t==="horizontal"?"border-t-2":"border-l-2",thick:t==="horizontal"?"border-t-4":"border-l-4"},D={default:"border-separator-nonOpaque dark:border-separator-nonOpaque-dark",light:"border-separator-opaque dark:border-separator-opaque-dark",dark:"border-label-quaternary dark:border-label-quaternary-dark"};return n?e.createElement("div",{ref:$,className:`${C} ${q[t]} ${z[x]} ${w}`,"data-testid":I,...R},e.createElement("div",{className:`flex-1 ${k[N]} ${D[b]}`}),e.createElement("div",{className:`px-4 ${t==="vertical"?"px-0 py-4":""}`},typeof n=="string"?e.createElement("span",{className:"text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark"},n):n),e.createElement("div",{className:`flex-1 ${k[N]} ${D[b]}`})):e.createElement("div",{ref:$,className:` ${C} ${q[t]} ${z[x]} ${k[N]} ${D[b]} ${w} `.trim(),"data-testid":I,...R})});a.displayName="Divider";a.__docgenInfo={description:"iOS-inspired divider component for separating content",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Divider orientation",defaultValue:{value:'"horizontal"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"full" | "inset" | "middle"',elements:[{name:"literal",value:'"full"'},{name:"literal",value:'"inset"'},{name:"literal",value:'"middle"'}]},description:"Divider variant",defaultValue:{value:'"full"',computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:'"thin" | "medium" | "thick"',elements:[{name:"literal",value:'"thin"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"thick"'}]},description:"Divider thickness",defaultValue:{value:'"thin"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"default" | "light" | "dark"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"Divider color",defaultValue:{value:'"default"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Divider content (text or element)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const Ce={title:"Components/Divider",component:a,parameters:{layout:"padded",docs:{description:{component:"iOS-inspired divider component for separating content sections with various styles and orientations."}}},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Divider orientation"},variant:{control:"select",options:["full","inset","middle"],description:"Divider variant"},thickness:{control:"select",options:["thin","medium","thick"],description:"Divider thickness"},color:{control:"select",options:["default","light","dark"],description:"Divider color"},children:{control:"text",description:"Divider content"}},args:{}},i={args:{}},s={args:{children:"OR"}},o={render:()=>e.createElement("div",{className:"flex h-20 items-center gap-4"},e.createElement(r,{variant:"body"},"Left content"),e.createElement(a,{orientation:"vertical"}),e.createElement(r,{variant:"body"},"Right content"))},l={args:{variant:"full"}},c={args:{variant:"inset"}},d={args:{variant:"middle"}},m={args:{thickness:"thin"}},p={args:{thickness:"medium"}},u={args:{thickness:"thick"}},v={args:{color:"default"}},y={args:{color:"light"}},h={args:{color:"dark"}},g={render:()=>e.createElement("div",{className:"max-w-sm space-y-0"},e.createElement("div",{className:"p-4"},e.createElement(r,{variant:"body"},"First item")),e.createElement(a,{variant:"inset"}),e.createElement("div",{className:"p-4"},e.createElement(r,{variant:"body"},"Second item")),e.createElement(a,{variant:"inset"}),e.createElement("div",{className:"p-4"},e.createElement(r,{variant:"body"},"Third item"))),parameters:{docs:{description:{story:"Dividers used to separate list items."}}}},f={render:()=>e.createElement("div",{className:"max-w-sm space-y-6"},e.createElement("div",{className:"space-y-4"},e.createElement(r,{variant:"headline"},"Sign In"),e.createElement(S,{fullWidth:!0},"Sign in with Apple"),e.createElement(S,{fullWidth:!0,variant:"secondary"},"Sign in with Google")),e.createElement(a,null,"OR"),e.createElement("div",{className:"space-y-4"},e.createElement("input",{type:"email",placeholder:"Email",className:"w-full rounded-ios border p-3"}),e.createElement("input",{type:"password",placeholder:"Password",className:"w-full rounded-ios border p-3"}),e.createElement(S,{fullWidth:!0},"Sign In"))),parameters:{docs:{description:{story:"Divider used to separate different sign-in methods."}}}},E={render:()=>e.createElement("div",{className:"max-w-md space-y-6"},e.createElement("div",null,e.createElement(r,{variant:"headline"},"Article Title"),e.createElement(r,{variant:"body",color:"secondary"},"This is the introduction paragraph of the article that provides context and sets up the main content.")),e.createElement(a,null),e.createElement("div",null,e.createElement(r,{variant:"body"},"This is the main content section that contains the detailed information and primary message of the article.")),e.createElement(a,{thickness:"medium"}),e.createElement("div",null,e.createElement(r,{variant:"subhead"},"Related Articles"),e.createElement(r,{variant:"footnote",color:"tertiary"},"Check out these related topics for more information."))),parameters:{docs:{description:{story:"Dividers used to separate content sections."}}}},T={render:()=>e.createElement("div",{className:"space-y-8"},e.createElement("div",{className:"space-y-4"},e.createElement(r,{variant:"subhead"},"Horizontal Variants"),e.createElement("div",{className:"space-y-4"},e.createElement("div",null,e.createElement(r,{variant:"caption1",color:"tertiary",className:"mb-2"},"Full"),e.createElement(a,{variant:"full"})),e.createElement("div",null,e.createElement(r,{variant:"caption1",color:"tertiary",className:"mb-2"},"Inset"),e.createElement(a,{variant:"inset"})),e.createElement("div",null,e.createElement(r,{variant:"caption1",color:"tertiary",className:"mb-2"},"Middle"),e.createElement(a,{variant:"middle"})))),e.createElement("div",{className:"space-y-4"},e.createElement(r,{variant:"subhead"},"With Content"),e.createElement("div",{className:"space-y-4"},e.createElement(a,null,"Text Content"),e.createElement(a,{thickness:"medium"},"Medium Thickness"),e.createElement(a,{color:"dark"},"Dark Color")))),parameters:{docs:{description:{story:"All divider variants and styles displayed together."}}}};var A,V,W;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {}
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var O,B,F;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "OR"
  }
}`,...(F=(B=s.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var M,L,_;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex h-20 items-center gap-4">\r
      <Typography variant="body">Left content</Typography>\r
      <Divider orientation="vertical" />\r
      <Typography variant="body">Right content</Typography>\r
    </div>
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var G,H,P;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "full"
  }
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var j,J,K;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "inset"
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: "middle"
  }
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    thickness: "thin"
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    thickness: "medium"
  }
}`,...(te=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,ie,se;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    thickness: "thick"
  }
}`,...(se=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var oe,le,ce;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    color: "default"
  }
}`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,pe;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    color: "light"
  }
}`,...(pe=(me=y.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ve,ye;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    color: "dark"
  }
}`,...(ye=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var he,ge,fe;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-0">\r
      <div className="p-4">\r
        <Typography variant="body">First item</Typography>\r
      </div>\r
      <Divider variant="inset" />\r
      <div className="p-4">\r
        <Typography variant="body">Second item</Typography>\r
      </div>\r
      <Divider variant="inset" />\r
      <div className="p-4">\r
        <Typography variant="body">Third item</Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Dividers used to separate list items."
      }
    }
  }
}`,...(fe=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Ee,Te,Ne;f.parameters={...f.parameters,docs:{...(Ee=f.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-6">\r
      <div className="space-y-4">\r
        <Typography variant="headline">Sign In</Typography>\r
        <Button fullWidth>Sign in with Apple</Button>\r
        <Button fullWidth variant="secondary">\r
          Sign in with Google\r
        </Button>\r
      </div>\r
\r
      <Divider>OR</Divider>\r
\r
      <div className="space-y-4">\r
        <input type="email" placeholder="Email" className="w-full rounded-ios border p-3" />\r
        <input type="password" placeholder="Password" className="w-full rounded-ios border p-3" />\r
        <Button fullWidth>Sign In</Button>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Divider used to separate different sign-in methods."
      }
    }
  }
}`,...(Ne=(Te=f.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var be,ke,De;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-6">\r
      <div>\r
        <Typography variant="headline">Article Title</Typography>\r
        <Typography variant="body" color="secondary">\r
          This is the introduction paragraph of the article that provides context and sets up the main content.\r
        </Typography>\r
      </div>\r
\r
      <Divider />\r
\r
      <div>\r
        <Typography variant="body">\r
          This is the main content section that contains the detailed information and primary message of the article.\r
        </Typography>\r
      </div>\r
\r
      <Divider thickness="medium" />\r
\r
      <div>\r
        <Typography variant="subhead">Related Articles</Typography>\r
        <Typography variant="footnote" color="tertiary">\r
          Check out these related topics for more information.\r
        </Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Dividers used to separate content sections."
      }
    }
  }
}`,...(De=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Se,xe,we;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">\r
      <div className="space-y-4">\r
        <Typography variant="subhead">Horizontal Variants</Typography>\r
        <div className="space-y-4">\r
          <div>\r
            <Typography variant="caption1" color="tertiary" className="mb-2">\r
              Full\r
            </Typography>\r
            <Divider variant="full" />\r
          </div>\r
          <div>\r
            <Typography variant="caption1" color="tertiary" className="mb-2">\r
              Inset\r
            </Typography>\r
            <Divider variant="inset" />\r
          </div>\r
          <div>\r
            <Typography variant="caption1" color="tertiary" className="mb-2">\r
              Middle\r
            </Typography>\r
            <Divider variant="middle" />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="space-y-4">\r
        <Typography variant="subhead">With Content</Typography>\r
        <div className="space-y-4">\r
          <Divider>Text Content</Divider>\r
          <Divider thickness="medium">Medium Thickness</Divider>\r
          <Divider color="dark">Dark Color</Divider>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All divider variants and styles displayed together."
      }
    }
  }
}`,...(we=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};const qe=["Default","WithText","Vertical","Full","Inset","Middle","Thin","Medium","Thick","DefaultColor","Light","Dark","InList","InForm","InContent","AllVariants"];export{T as AllVariants,h as Dark,i as Default,v as DefaultColor,l as Full,E as InContent,f as InForm,g as InList,c as Inset,y as Light,p as Medium,d as Middle,u as Thick,m as Thin,o as Vertical,s as WithText,qe as __namedExportsOrder,Ce as default};
