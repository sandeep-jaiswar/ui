import{R as e}from"./iframe-DPTEoTx4.js";import{B as r}from"./Button-Vw-cbfqZ.js";const Te=()=>{},Ge=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},e.createElement("path",{d:"M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06L7.28 12.78a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"})),b=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},e.createElement("path",{d:"M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"})),Oe=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},e.createElement("path",{d:"M8.75 2.75a.75.75 0 00-1.5 0v5.69L5.03 6.22a.75.75 0 00-1.06 1.06l3.5 3.5a.75.75 0 001.06 0l3.5-3.5a.75.75 0 00-1.06-1.06L8.75 8.44V2.75z"}),e.createElement("path",{d:"M3.5 9.75a.75.75 0 00-1.5 0v1.5A2.75 2.75 0 004.75 14h6.5A2.75 2.75 0 0014 11.25v-1.5a.75.75 0 00-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5z"})),je={title:"Components/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired button component following Apple's Human Interface Guidelines. Supports multiple variants, sizes, and states with proper accessibility features."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","destructive","ghost","plain"],description:"Button variant following iOS design patterns"},size:{control:"select",options:["small","medium","large"],description:"Button size"},disabled:{control:"boolean",description:"Disable the button"},loading:{control:"boolean",description:"Show loading state"},fullWidth:{control:"boolean",description:"Make button full width"},children:{control:"text",description:"Button content"}},args:{onClick:Te(),children:"Button"}},t={args:{variant:"primary",children:"Primary Button"}},n={args:{variant:"secondary",children:"Secondary Button"}},a={args:{variant:"destructive",children:"Delete Item"}},o={args:{variant:"ghost",children:"Ghost Button"}},s={args:{variant:"plain",children:"Plain Button"}},c={args:{size:"small",children:"Small Button"}},i={args:{size:"medium",children:"Medium Button"}},l={args:{size:"large",children:"Large Button"}},d={args:{disabled:!0,children:"Disabled Button"}},m={args:{loading:!0,children:"Submit Form"}},u={args:{fullWidth:!0,children:"Full Width Button"},parameters:{layout:"padded"}},p={args:{startIcon:e.createElement(b,null),children:"Add Item"}},g={args:{endIcon:e.createElement(Ge,null),children:"Continue"}},h={args:{startIcon:e.createElement(Oe,null),endIcon:e.createElement(Ge,null),children:"Download"}},v={args:{size:"small",variant:"ghost",children:e.createElement(b,null),"aria-label":"Add item"}},B={args:{size:"medium",variant:"secondary",children:e.createElement(Oe,null),"aria-label":"Download"}},y={render:()=>e.createElement("div",{className:"flex gap-2"},e.createElement(r,{variant:"secondary"},"Cancel"),e.createElement(r,{variant:"primary"},"Save")),parameters:{docs:{description:{story:"Buttons can be grouped together for related actions."}}}},S={render:()=>e.createElement("div",{className:"flex w-48 flex-col gap-2"},e.createElement(r,{variant:"primary",fullWidth:!0},"Primary Action"),e.createElement(r,{variant:"secondary",fullWidth:!0},"Secondary Action"),e.createElement(r,{variant:"ghost",fullWidth:!0},"Tertiary Action")),parameters:{docs:{description:{story:"Vertical button groups work well in modals and forms."}}}},f={render:()=>e.createElement("div",{className:"grid w-64 grid-cols-1 gap-4"},e.createElement(r,{variant:"primary"},"Primary"),e.createElement(r,{variant:"secondary"},"Secondary"),e.createElement(r,{variant:"destructive"},"Destructive"),e.createElement(r,{variant:"ghost"},"Ghost"),e.createElement(r,{variant:"plain"},"Plain")),parameters:{docs:{description:{story:"All button variants displayed together."}}}},I={render:()=>e.createElement("div",{className:"flex flex-col items-start gap-4"},e.createElement(r,{size:"small"},"Small Button"),e.createElement(r,{size:"medium"},"Medium Button"),e.createElement(r,{size:"large"},"Large Button")),parameters:{docs:{description:{story:"All button sizes displayed together."}}}},E={render:()=>{const[ke,Re]=e.useState(0),[w,z]=e.useState(!1),Ve=()=>{z(!0),setTimeout(()=>{Re(Fe=>Fe+1),z(!1)},1e3)};return e.createElement("div",{className:"flex flex-col items-center gap-4"},e.createElement("div",{className:"font-semibold text-ios-title-2"},"Count: ",ke),e.createElement(r,{onClick:Ve,loading:w,startIcon:e.createElement(b,null)},w?"Adding...":"Add One"))},parameters:{docs:{description:{story:"Interactive example showing loading state and click handling."}}}};var x,A,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...(C=(A=t.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var W,D,P;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...(P=(D=n.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var L,M,N;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Delete Item"
  }
}`,...(N=(M=a.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var G,O,k;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost Button"
  }
}`,...(k=(O=o.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var R,V,F;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "plain",
    children: "Plain Button"
  }
}`,...(F=(V=s.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var T,_,H;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: "Small Button"
  }
}`,...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var j,q,J;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "medium",
    children: "Medium Button"
  }
}`,...(J=(q=i.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: "Large Button"
  }
}`,...(U=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Button"
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "Submit Form"
  }
}`,...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ne,ae;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: "Full Width Button"
  },
  parameters: {
    layout: "padded"
  }
}`,...(ae=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,ce;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    startIcon: <PlusIcon />,
    children: "Add Item"
  }
}`,...(ce=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ie,le,de;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    endIcon: <ChevronRightIcon />,
    children: "Continue"
  }
}`,...(de=(le=g.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,ue,pe;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    startIcon: <DownloadIcon />,
    endIcon: <ChevronRightIcon />,
    children: "Download"
  }
}`,...(pe=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,he,ve;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    size: "small",
    variant: "ghost",
    children: <PlusIcon />,
    "aria-label": "Add item"
  }
}`,...(ve=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Be,ye,Se;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    size: "medium",
    variant: "secondary",
    children: <DownloadIcon />,
    "aria-label": "Download"
  }
}`,...(Se=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var fe,Ie,Ee;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">\r
      <Button variant="secondary">Cancel</Button>\r
      <Button variant="primary">Save</Button>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Buttons can be grouped together for related actions."
      }
    }
  }
}`,...(Ee=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};var be,we,ze;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="flex w-48 flex-col gap-2">\r
      <Button variant="primary" fullWidth>\r
        Primary Action\r
      </Button>\r
      <Button variant="secondary" fullWidth>\r
        Secondary Action\r
      </Button>\r
      <Button variant="ghost" fullWidth>\r
        Tertiary Action\r
      </Button>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Vertical button groups work well in modals and forms."
      }
    }
  }
}`,...(ze=(we=S.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var xe,Ae,Ce;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="grid w-64 grid-cols-1 gap-4">\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="destructive">Destructive</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="plain">Plain</Button>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All button variants displayed together."
      }
    }
  }
}`,...(Ce=(Ae=f.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var We,De,Pe;I.parameters={...I.parameters,docs:{...(We=I.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-start gap-4">\r
      <Button size="small">Small Button</Button>\r
      <Button size="medium">Medium Button</Button>\r
      <Button size="large">Large Button</Button>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All button sizes displayed together."
      }
    }
  }
}`,...(Pe=(De=I.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Le,Me,Ne;E.parameters={...E.parameters,docs:{...(Le=E.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const handleIncrement = () => {
      setLoading(true);
      setTimeout(() => {
        setCount(prev => prev + 1);
        setLoading(false);
      }, 1000);
    };
    return <div className="flex flex-col items-center gap-4">\r
        <div className="font-semibold text-ios-title-2">Count: {count}</div>\r
        <Button onClick={handleIncrement} loading={loading} startIcon={<PlusIcon />}>\r
          {loading ? "Adding..." : "Add One"}\r
        </Button>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing loading state and click handling."
      }
    }
  }
}`,...(Ne=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};const qe=["Primary","Secondary","Destructive","Ghost","Plain","Small","Medium","Large","Disabled","Loading","FullWidth","WithStartIcon","WithEndIcon","WithBothIcons","IconOnlySmall","IconOnlyMedium","ButtonGroup","VerticalButtonGroup","AllVariants","AllSizes","InteractiveExample"];export{I as AllSizes,f as AllVariants,y as ButtonGroup,a as Destructive,d as Disabled,u as FullWidth,o as Ghost,B as IconOnlyMedium,v as IconOnlySmall,E as InteractiveExample,l as Large,m as Loading,i as Medium,s as Plain,t as Primary,n as Secondary,c as Small,S as VerticalButtonGroup,h as WithBothIcons,g as WithEndIcon,p as WithStartIcon,qe as __namedExportsOrder,je as default};
