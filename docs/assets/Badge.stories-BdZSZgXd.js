import{R as e}from"./iframe-DPTEoTx4.js";import{A as Ye}from"./Avatar-Cx76YF3E.js";import{B as a}from"./Badge-B74naS4j.js";import{B as n}from"./Button-Vw-cbfqZ.js";import{T as r}from"./Typography-RJZoBOJc.js";import"./accessibility-Ckp-g_ze.js";import"./animations-DDGOJxN6.js";const ea={title:"Components/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired badge component for notifications, status indicators, and labels. Supports various styles, sizes, and formatting options."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","error","info"],description:"Badge variant"},size:{control:"select",options:["small","medium","large"],description:"Badge size"},shape:{control:"select",options:["rounded","pill"],description:"Badge shape"},dot:{control:"boolean",description:"Show as dot indicator"},max:{control:"number",description:"Maximum number to display"},children:{control:"text",description:"Badge content"}},args:{children:"5"}},s={args:{variant:"primary",children:"5"}},i={args:{variant:"secondary",children:"NEW"}},o={args:{variant:"success",children:"✓"}},c={args:{variant:"warning",children:"!"}},d={args:{variant:"error",children:"×"}},l={args:{variant:"info",children:"i"}},m={args:{size:"small",children:"3"}},p={args:{size:"medium",children:"12"}},g={args:{size:"large",children:"99+"}},u={args:{shape:"rounded",children:"NEW"}},v={args:{shape:"pill",children:"5"}},y={args:{dot:!0,size:"small"}},h={args:{dot:!0,size:"medium"}},b={args:{dot:!0,size:"large"}},E={render:()=>e.createElement("div",{className:"flex items-center gap-4"},e.createElement(a,null,"5"),e.createElement(a,null,"25"),e.createElement(a,null,"99"),e.createElement(a,null,"100"),e.createElement(a,{max:9},"15")),parameters:{docs:{description:{story:'Numbers are automatically formatted with "+" when exceeding the max value.'}}}},B={render:()=>e.createElement("div",{className:"grid grid-cols-2 gap-4"},e.createElement("div",{className:"space-y-2"},e.createElement(r,{variant:"subhead"},"Variants"),e.createElement("div",{className:"flex flex-wrap gap-2"},e.createElement(a,{variant:"primary"},"Primary"),e.createElement(a,{variant:"secondary"},"Secondary"),e.createElement(a,{variant:"success"},"Success"),e.createElement(a,{variant:"warning"},"Warning"),e.createElement(a,{variant:"error"},"Error"),e.createElement(a,{variant:"info"},"Info"))),e.createElement("div",{className:"space-y-2"},e.createElement(r,{variant:"subhead"},"Dots"),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{variant:"primary",dot:!0}),e.createElement(a,{variant:"secondary",dot:!0}),e.createElement(a,{variant:"success",dot:!0}),e.createElement(a,{variant:"warning",dot:!0}),e.createElement(a,{variant:"error",dot:!0}),e.createElement(a,{variant:"info",dot:!0})))),parameters:{docs:{description:{story:"All badge variants and dot indicators displayed together."}}}},f={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"space-y-2"},e.createElement(r,{variant:"subhead"},"Badge Sizes"),e.createElement("div",{className:"flex items-center gap-4"},e.createElement(a,{size:"small"},"5"),e.createElement(a,{size:"medium"},"12"),e.createElement(a,{size:"large"},"99+"))),e.createElement("div",{className:"space-y-2"},e.createElement(r,{variant:"subhead"},"Dot Sizes"),e.createElement("div",{className:"flex items-center gap-4"},e.createElement(a,{size:"small",dot:!0}),e.createElement(a,{size:"medium",dot:!0}),e.createElement(a,{size:"large",dot:!0})))),parameters:{docs:{description:{story:"All badge sizes for both content and dot variants."}}}},N={render:()=>e.createElement("div",{className:"relative inline-block"},e.createElement(n,null,"Messages"),e.createElement(a,{variant:"primary",size:"small",className:"absolute -right-2 -top-2"},"3")),parameters:{docs:{description:{story:"Badge positioned on a button to show notification count."}}}},S={render:()=>e.createElement("div",{className:"relative inline-block"},e.createElement(Ye,{src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",size:"large"}),e.createElement(a,{variant:"success",dot:!0,size:"medium",className:"absolute right-0 top-0"})),parameters:{docs:{description:{story:"Dot badge indicating online status on an avatar."}}}},x={render:()=>e.createElement("div",{className:"space-y-2"},e.createElement(r,{variant:"body"},"You have"," ",e.createElement(a,{variant:"primary",size:"small"},"5")," ","new messages"),e.createElement(r,{variant:"body"},"Status:"," ",e.createElement(a,{variant:"success",size:"small"},"Active")),e.createElement(r,{variant:"body"},"Priority:"," ",e.createElement(a,{variant:"warning",size:"small"},"High"))),parameters:{docs:{description:{story:"Badges used inline with text content."}}}},z={render:()=>e.createElement("div",{className:"flex gap-1 rounded-ios bg-fill-secondary p-1 dark:bg-fill-secondary-dark"},e.createElement("div",{className:"flex items-center gap-2 rounded-ios-sm bg-background-primary px-3 py-2 dark:bg-background-tertiary-dark"},e.createElement(r,{variant:"subhead"},"Inbox"),e.createElement(a,{variant:"primary",size:"small"},"12")),e.createElement("div",{className:"flex items-center gap-2 px-3 py-2"},e.createElement(r,{variant:"subhead",color:"secondary"},"Sent")),e.createElement("div",{className:"flex items-center gap-2 px-3 py-2"},e.createElement(r,{variant:"subhead",color:"secondary"},"Drafts"),e.createElement(a,{variant:"secondary",size:"small"},"3"))),parameters:{docs:{description:{story:"Badges used in navigation tabs to show counts."}}}},w={render:()=>e.createElement("div",{className:"max-w-sm space-y-3"},e.createElement("div",{className:"flex items-center justify-between rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark"},e.createElement(r,{variant:"body"},"System Status"),e.createElement(a,{variant:"success"},"Online")),e.createElement("div",{className:"flex items-center justify-between rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark"},e.createElement(r,{variant:"body"},"Database"),e.createElement(a,{variant:"warning"},"Slow")),e.createElement("div",{className:"flex items-center justify-between rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark"},e.createElement(r,{variant:"body"},"API Service"),e.createElement(a,{variant:"error"},"Down"))),parameters:{docs:{description:{story:"Badges used as status indicators in a system dashboard."}}}},k={render:()=>{const[t,T]=e.useState(5),[D,_e]=e.useState(!0);return e.createElement("div",{className:"space-y-6"},e.createElement("div",{className:"space-y-4"},e.createElement(r,{variant:"headline"},"Notification Badge"),e.createElement("div",{className:"relative inline-block"},e.createElement(n,null,"Notifications"),t>0&&e.createElement(a,{variant:"primary",size:"small",className:"absolute -right-2 -top-2"},t)),e.createElement("div",{className:"flex gap-2"},e.createElement(n,{size:"small",variant:"secondary",onClick:()=>T(Math.max(0,t-1))},"-1"),e.createElement(n,{size:"small",variant:"secondary",onClick:()=>T(t+1)},"+1"),e.createElement(n,{size:"small",variant:"ghost",onClick:()=>T(0)},"Clear"))),e.createElement("div",{className:"space-y-4"},e.createElement(r,{variant:"headline"},"Status Indicator"),e.createElement("div",{className:"relative inline-block"},e.createElement(Ye,{initials:"JD"}),D&&e.createElement(a,{variant:"success",dot:!0,size:"medium",className:"absolute right-0 top-0"})),e.createElement(n,{size:"small",variant:"secondary",onClick:()=>_e(!D)},"Toggle Status")))},parameters:{docs:{description:{story:"Interactive example showing dynamic badge updates."}}}};var A,I,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "5"
  }
}`,...(C=(I=s.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var W,q,P;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "NEW"
  }
}`,...(P=(q=i.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var M,j,R;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "✓"
  }
}`,...(R=(j=o.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var L,O,V;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "!"
  }
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var F,H,J;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "error",
    children: "×"
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Y,_,G;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "i"
  }
}`,...(G=(_=l.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: "3"
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,$;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: "medium",
    children: "12"
  }
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: "99+"
  }
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,te,se;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    shape: "rounded",
    children: "NEW"
  }
}`,...(se=(te=u.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,oe,ce;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    shape: "pill",
    children: "5"
  }
}`,...(ce=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,le,me;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    dot: true,
    size: "small"
  }
}`,...(me=(le=y.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var pe,ge,ue;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    dot: true,
    size: "medium"
  }
}`,...(ue=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var ve,ye,he;b.parameters={...b.parameters,docs:{...(ve=b.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    dot: true,
    size: "large"
  }
}`,...(he=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var be,Ee,Be;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Badge>5</Badge>\r
      <Badge>25</Badge>\r
      <Badge>99</Badge>\r
      <Badge>100</Badge>\r
      <Badge max={9}>15</Badge>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Numbers are automatically formatted with "+" when exceeding the max value.'
      }
    }
  }
}`,...(Be=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var fe,Ne,Se;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">\r
      <div className="space-y-2">\r
        <Typography variant="subhead">Variants</Typography>\r
        <div className="flex flex-wrap gap-2">\r
          <Badge variant="primary">Primary</Badge>\r
          <Badge variant="secondary">Secondary</Badge>\r
          <Badge variant="success">Success</Badge>\r
          <Badge variant="warning">Warning</Badge>\r
          <Badge variant="error">Error</Badge>\r
          <Badge variant="info">Info</Badge>\r
        </div>\r
      </div>\r
      <div className="space-y-2">\r
        <Typography variant="subhead">Dots</Typography>\r
        <div className="flex items-center gap-2">\r
          <Badge variant="primary" dot />\r
          <Badge variant="secondary" dot />\r
          <Badge variant="success" dot />\r
          <Badge variant="warning" dot />\r
          <Badge variant="error" dot />\r
          <Badge variant="info" dot />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All badge variants and dot indicators displayed together."
      }
    }
  }
}`,...(Se=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var xe,ze,we;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <div className="space-y-2">\r
        <Typography variant="subhead">Badge Sizes</Typography>\r
        <div className="flex items-center gap-4">\r
          <Badge size="small">5</Badge>\r
          <Badge size="medium">12</Badge>\r
          <Badge size="large">99+</Badge>\r
        </div>\r
      </div>\r
      <div className="space-y-2">\r
        <Typography variant="subhead">Dot Sizes</Typography>\r
        <div className="flex items-center gap-4">\r
          <Badge size="small" dot />\r
          <Badge size="medium" dot />\r
          <Badge size="large" dot />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All badge sizes for both content and dot variants."
      }
    }
  }
}`,...(we=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:we.source}}};var ke,Te,De;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div className="relative inline-block">\r
      <Button>Messages</Button>\r
      <Badge variant="primary" size="small" className="absolute -right-2 -top-2">\r
        3\r
      </Badge>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badge positioned on a button to show notification count."
      }
    }
  }
}`,...(De=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Ae,Ie,Ce;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <div className="relative inline-block">\r
      <Avatar src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200" size="large" />\r
      <Badge variant="success" dot size="medium" className="absolute right-0 top-0" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Dot badge indicating online status on an avatar."
      }
    }
  }
}`,...(Ce=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var We,qe,Pe;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">\r
      <Typography variant="body">\r
        You have{" "}\r
        <Badge variant="primary" size="small">\r
          5\r
        </Badge>{" "}\r
        new messages\r
      </Typography>\r
      <Typography variant="body">\r
        Status:{" "}\r
        <Badge variant="success" size="small">\r
          Active\r
        </Badge>\r
      </Typography>\r
      <Typography variant="body">\r
        Priority:{" "}\r
        <Badge variant="warning" size="small">\r
          High\r
        </Badge>\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badges used inline with text content."
      }
    }
  }
}`,...(Pe=(qe=x.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var Me,je,Re;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <div className="flex gap-1 rounded-ios bg-fill-secondary p-1 dark:bg-fill-secondary-dark">\r
      <div className="flex items-center gap-2 rounded-ios-sm bg-background-primary px-3 py-2 dark:bg-background-tertiary-dark">\r
        <Typography variant="subhead">Inbox</Typography>\r
        <Badge variant="primary" size="small">\r
          12\r
        </Badge>\r
      </div>\r
      <div className="flex items-center gap-2 px-3 py-2">\r
        <Typography variant="subhead" color="secondary">\r
          Sent\r
        </Typography>\r
      </div>\r
      <div className="flex items-center gap-2 px-3 py-2">\r
        <Typography variant="subhead" color="secondary">\r
          Drafts\r
        </Typography>\r
        <Badge variant="secondary" size="small">\r
          3\r
        </Badge>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badges used in navigation tabs to show counts."
      }
    }
  }
}`,...(Re=(je=z.parameters)==null?void 0:je.docs)==null?void 0:Re.source}}};var Le,Oe,Ve;w.parameters={...w.parameters,docs:{...(Le=w.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-3">\r
      <div className="flex items-center justify-between rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">\r
        <Typography variant="body">System Status</Typography>\r
        <Badge variant="success">Online</Badge>\r
      </div>\r
      <div className="flex items-center justify-between rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">\r
        <Typography variant="body">Database</Typography>\r
        <Badge variant="warning">Slow</Badge>\r
      </div>\r
      <div className="flex items-center justify-between rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">\r
        <Typography variant="body">API Service</Typography>\r
        <Badge variant="error">Down</Badge>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badges used as status indicators in a system dashboard."
      }
    }
  }
}`,...(Ve=(Oe=w.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var Fe,He,Je;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = React.useState(5);
    const [showDot, setShowDot] = React.useState(true);
    return <div className="space-y-6">\r
        <div className="space-y-4">\r
          <Typography variant="headline">Notification Badge</Typography>\r
          <div className="relative inline-block">\r
            <Button>Notifications</Button>\r
            {count > 0 && <Badge variant="primary" size="small" className="absolute -right-2 -top-2">\r
                {count}\r
              </Badge>}\r
          </div>\r
          <div className="flex gap-2">\r
            <Button size="small" variant="secondary" onClick={() => setCount(Math.max(0, count - 1))}>\r
              -1\r
            </Button>\r
            <Button size="small" variant="secondary" onClick={() => setCount(count + 1)}>\r
              +1\r
            </Button>\r
            <Button size="small" variant="ghost" onClick={() => setCount(0)}>\r
              Clear\r
            </Button>\r
          </div>\r
        </div>\r
\r
        <div className="space-y-4">\r
          <Typography variant="headline">Status Indicator</Typography>\r
          <div className="relative inline-block">\r
            <Avatar initials="JD" />\r
            {showDot && <Badge variant="success" dot size="medium" className="absolute right-0 top-0" />}\r
          </div>\r
          <Button size="small" variant="secondary" onClick={() => setShowDot(!showDot)}>\r
            Toggle Status\r
          </Button>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing dynamic badge updates."
      }
    }
  }
}`,...(Je=(He=k.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};const aa=["Primary","Secondary","Success","Warning","Error","Info","Small","Medium","Large","Rounded","Pill","DotSmall","DotMedium","DotLarge","NumberFormatting","AllVariants","AllSizes","WithButton","WithAvatar","InlineWithText","NavigationTabs","StatusIndicators","InteractiveExample"];export{f as AllSizes,B as AllVariants,b as DotLarge,h as DotMedium,y as DotSmall,d as Error,l as Info,x as InlineWithText,k as InteractiveExample,g as Large,p as Medium,z as NavigationTabs,E as NumberFormatting,v as Pill,s as Primary,u as Rounded,i as Secondary,m as Small,w as StatusIndicators,o as Success,c as Warning,S as WithAvatar,N as WithButton,aa as __namedExportsOrder,ea as default};
