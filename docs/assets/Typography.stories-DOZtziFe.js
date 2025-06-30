import{R as e}from"./iframe-DPTEoTx4.js";import{T as r}from"./Typography-RJZoBOJc.js";const nr={title:"Components/Typography",component:r,parameters:{layout:"padded",docs:{description:{component:"iOS-inspired typography component following Apple's text style guidelines. Provides consistent text styling across the application with proper semantic HTML elements."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["largeTitle","title1","title2","title3","headline","body","callout","subhead","footnote","caption1","caption2"],description:"Typography variant following iOS text styles"},color:{control:"select",options:["primary","secondary","tertiary","quaternary","system","custom"],description:"Text color variant"},customColor:{control:"color",description:'Custom color value when color is "custom"',if:{arg:"color",eq:"custom"}},weight:{control:"select",options:["regular","medium","semibold","bold"],description:"Font weight override"},align:{control:"select",options:["left","center","right","justify"],description:"Text alignment"},transform:{control:"select",options:["none","uppercase","lowercase","capitalize"],description:"Text transform"},decoration:{control:"select",options:["none","underline","line-through"],description:"Text decoration"},truncate:{control:"boolean",description:"Truncate text with ellipsis"},lineClamp:{control:"number",description:"Number of lines to clamp (requires truncate)",min:1,max:10},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div","label"],description:"HTML element to render"},children:{control:"text",description:"Typography content"}},args:{children:"The quick brown fox jumps over the lazy dog"}},t={args:{variant:"largeTitle",children:"Large Title"}},a={args:{variant:"title1",children:"Title 1"}},o={args:{variant:"title2",children:"Title 2"}},n={args:{variant:"title3",children:"Title 3"}},s={args:{variant:"headline",children:"Headline"}},i={args:{variant:"body",children:"Body text is used for the main content of your interface. It should be easy to read and provide good contrast."}},l={args:{variant:"callout",children:"Callout text is slightly smaller than body text and is used for secondary content."}},c={args:{variant:"subhead",children:"Subhead text is used for section headers and important secondary information."}},p={args:{variant:"footnote",children:"Footnote text is used for less important information and fine print."}},d={args:{variant:"caption1",children:"Caption 1 is used for image captions and small labels."}},m={args:{variant:"caption2",children:"Caption 2 is the smallest text size, used for timestamps and metadata."}},y={args:{color:"primary",children:"Primary color text"}},h={args:{color:"secondary",children:"Secondary color text"}},u={args:{color:"tertiary",children:"Tertiary color text"}},g={args:{color:"system",children:"System blue color text"}},T={args:{color:"custom",customColor:"#FF6B35",children:"Custom color text"}},v={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(r,{weight:"regular"},"Regular weight text"),e.createElement(r,{weight:"medium"},"Medium weight text"),e.createElement(r,{weight:"semibold"},"Semibold weight text"),e.createElement(r,{weight:"bold"},"Bold weight text")),parameters:{docs:{description:{story:"Different font weights available for typography."}}}},x={render:()=>e.createElement("div",{className:"w-full max-w-md space-y-4"},e.createElement(r,{align:"left"},"Left aligned text"),e.createElement(r,{align:"center"},"Center aligned text"),e.createElement(r,{align:"right"},"Right aligned text"),e.createElement(r,{align:"justify"},"Justified text spreads the words evenly across the line to create clean edges on both sides.")),parameters:{docs:{description:{story:"Different text alignment options."}}}},f={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(r,{transform:"none"},"Normal text transform"),e.createElement(r,{transform:"uppercase"},"Uppercase text transform"),e.createElement(r,{transform:"lowercase"},"LOWERCASE TEXT TRANSFORM"),e.createElement(r,{transform:"capitalize"},"capitalize text transform")),parameters:{docs:{description:{story:"Different text transform options."}}}},b={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(r,{decoration:"none"},"No text decoration"),e.createElement(r,{decoration:"underline"},"Underlined text"),e.createElement(r,{decoration:"line-through"},"Strikethrough text")),parameters:{docs:{description:{story:"Different text decoration options."}}}},S={args:{truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width"},parameters:{layout:"padded",docs:{description:{story:"Text can be truncated with an ellipsis when it exceeds the container width."}}}},E={args:{lineClamp:3,children:"This is a very long text that will be clamped to exactly three lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},parameters:{layout:"padded",docs:{description:{story:"Text can be clamped to a specific number of lines."}}}},w={render:()=>e.createElement("div",{className:"space-y-6"},e.createElement(r,{variant:"largeTitle"},"Large Title - 34px"),e.createElement(r,{variant:"title1"},"Title 1 - 28px"),e.createElement(r,{variant:"title2"},"Title 2 - 22px"),e.createElement(r,{variant:"title3"},"Title 3 - 20px"),e.createElement(r,{variant:"headline"},"Headline - 17px Semibold"),e.createElement(r,{variant:"body"},"Body - 17px Regular"),e.createElement(r,{variant:"callout"},"Callout - 16px Regular"),e.createElement(r,{variant:"subhead"},"Subhead - 15px Regular"),e.createElement(r,{variant:"footnote"},"Footnote - 13px Regular"),e.createElement(r,{variant:"caption1"},"Caption 1 - 12px Regular"),e.createElement(r,{variant:"caption2"},"Caption 2 - 11px Regular")),parameters:{docs:{description:{story:"Complete iOS typography scale with all variants and their sizes."}}}},C={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(r,{color:"primary"},"Primary label color"),e.createElement(r,{color:"secondary"},"Secondary label color"),e.createElement(r,{color:"tertiary"},"Tertiary label color"),e.createElement(r,{color:"quaternary"},"Quaternary label color"),e.createElement(r,{color:"system"},"System blue color")),parameters:{docs:{description:{story:"iOS label color hierarchy from primary to quaternary, plus system colors."}}}},N={render:()=>e.createElement("article",{className:"max-w-2xl space-y-6"},e.createElement("header",null,e.createElement(r,{variant:"largeTitle",as:"h1"},"Article Title"),e.createElement(r,{variant:"subhead",color:"secondary"},"Published on March 15, 2024")),e.createElement("section",null,e.createElement(r,{variant:"title2",as:"h2"},"Section Heading"),e.createElement(r,{variant:"body"},"This is the main body content of the article. It uses the body variant which provides optimal readability for longer form content. The text flows naturally and maintains good contrast and spacing.")),e.createElement("section",null,e.createElement(r,{variant:"headline",as:"h3"},"Subsection"),e.createElement(r,{variant:"callout"},"This callout text provides additional context or highlights important information that supports the main content.")),e.createElement("footer",null,e.createElement(r,{variant:"footnote",color:"tertiary"},"This footnote provides additional details or disclaimers related to the content above."))),parameters:{docs:{description:{story:"Example of semantic usage of typography variants in a typical article layout."}}}},R={render:()=>{const[L,rr]=e.useState("body"),[F,tr]=e.useState("primary");return e.createElement("div",{className:"space-y-6"},e.createElement("div",{className:"flex gap-4"},e.createElement("div",null,e.createElement(r,{variant:"subhead",as:"label"},"Variant:"),e.createElement("select",{value:L,onChange:q=>rr(q.target.value),className:"ml-2 rounded border px-2 py-1"},e.createElement("option",{value:"body"},"Body"),e.createElement("option",{value:"headline"},"Headline"),e.createElement("option",{value:"title2"},"Title 2"))),e.createElement("div",null,e.createElement(r,{variant:"subhead",as:"label"},"Color:"),e.createElement("select",{value:F,onChange:q=>tr(q.target.value),className:"ml-2 rounded border px-2 py-1"},e.createElement("option",{value:"primary"},"Primary"),e.createElement("option",{value:"secondary"},"Secondary"),e.createElement("option",{value:"system"},"System")))),e.createElement("div",{className:"rounded-lg border p-4"},e.createElement(r,{variant:L,color:F},"This text changes based on your selections above. Try different combinations to see how the typography variants and colors work together.")))},parameters:{docs:{description:{story:"Interactive example showing how different variants and colors can be combined."}}}};var B,D,H;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "largeTitle",
    children: "Large Title"
  }
}`,...(H=(D=t.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var O,P,z;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "title1",
    children: "Title 1"
  }
}`,...(z=(P=a.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var A,V,I;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "title2",
    children: "Title 2"
  }
}`,...(I=(V=o.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var M,U,k;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "title3",
    children: "Title 3"
  }
}`,...(k=(U=n.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var j,W,J;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "headline",
    children: "Headline"
  }
}`,...(J=(W=s.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var Q,X,_;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: "body",
    children: "Body text is used for the main content of your interface. It should be easy to read and provide good contrast."
  }
}`,...(_=(X=i.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var G,K,Y;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "callout",
    children: "Callout text is slightly smaller than body text and is used for secondary content."
  }
}`,...(Y=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Z,$,ee;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "subhead",
    children: "Subhead text is used for section headers and important secondary information."
  }
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,te,ae;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: "footnote",
    children: "Footnote text is used for less important information and fine print."
  }
}`,...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ne,se;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: "caption1",
    children: "Caption 1 is used for image captions and small labels."
  }
}`,...(se=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,le,ce;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    variant: "caption2",
    children: "Caption 2 is the smallest text size, used for timestamps and metadata."
  }
}`,...(ce=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,de,me;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    color: "primary",
    children: "Primary color text"
  }
}`,...(me=(de=y.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ye,he,ue;h.parameters={...h.parameters,docs:{...(ye=h.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    children: "Secondary color text"
  }
}`,...(ue=(he=h.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ge,Te,ve;u.parameters={...u.parameters,docs:{...(ge=u.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    color: "tertiary",
    children: "Tertiary color text"
  }
}`,...(ve=(Te=u.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var xe,fe,be;g.parameters={...g.parameters,docs:{...(xe=g.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    color: "system",
    children: "System blue color text"
  }
}`,...(be=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Se,Ee,we;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    color: "custom",
    customColor: "#FF6B35",
    children: "Custom color text"
  }
}`,...(we=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var Ce,Ne,Re;v.parameters={...v.parameters,docs:{...(Ce=v.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Typography weight="regular">Regular weight text</Typography>\r
      <Typography weight="medium">Medium weight text</Typography>\r
      <Typography weight="semibold">Semibold weight text</Typography>\r
      <Typography weight="bold">Bold weight text</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different font weights available for typography."
      }
    }
  }
}`,...(Re=(Ne=v.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};var qe,Le,Fe;x.parameters={...x.parameters,docs:{...(qe=x.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-4">\r
      <Typography align="left">Left aligned text</Typography>\r
      <Typography align="center">Center aligned text</Typography>\r
      <Typography align="right">Right aligned text</Typography>\r
      <Typography align="justify">\r
        Justified text spreads the words evenly across the line to create clean edges on both sides.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different text alignment options."
      }
    }
  }
}`,...(Fe=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var Be,De,He;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Typography transform="none">Normal text transform</Typography>\r
      <Typography transform="uppercase">Uppercase text transform</Typography>\r
      <Typography transform="lowercase">LOWERCASE TEXT TRANSFORM</Typography>\r
      <Typography transform="capitalize">capitalize text transform</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different text transform options."
      }
    }
  }
}`,...(He=(De=f.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Oe,Pe,ze;b.parameters={...b.parameters,docs:{...(Oe=b.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Typography decoration="none">No text decoration</Typography>\r
      <Typography decoration="underline">Underlined text</Typography>\r
      <Typography decoration="line-through">Strikethrough text</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Different text decoration options."
      }
    }
  }
}`,...(ze=(Pe=b.parameters)==null?void 0:Pe.docs)==null?void 0:ze.source}}};var Ae,Ve,Ie;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    truncate: true,
    children: "This is a very long text that will be truncated with an ellipsis when it exceeds the container width"
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Text can be truncated with an ellipsis when it exceeds the container width."
      }
    }
  }
}`,...(Ie=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};var Me,Ue,ke;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    lineClamp: 3,
    children: "This is a very long text that will be clamped to exactly three lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Text can be clamped to a specific number of lines."
      }
    }
  }
}`,...(ke=(Ue=E.parameters)==null?void 0:Ue.docs)==null?void 0:ke.source}}};var je,We,Je;w.parameters={...w.parameters,docs:{...(je=w.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <Typography variant="largeTitle">Large Title - 34px</Typography>\r
      <Typography variant="title1">Title 1 - 28px</Typography>\r
      <Typography variant="title2">Title 2 - 22px</Typography>\r
      <Typography variant="title3">Title 3 - 20px</Typography>\r
      <Typography variant="headline">Headline - 17px Semibold</Typography>\r
      <Typography variant="body">Body - 17px Regular</Typography>\r
      <Typography variant="callout">Callout - 16px Regular</Typography>\r
      <Typography variant="subhead">Subhead - 15px Regular</Typography>\r
      <Typography variant="footnote">Footnote - 13px Regular</Typography>\r
      <Typography variant="caption1">Caption 1 - 12px Regular</Typography>\r
      <Typography variant="caption2">Caption 2 - 11px Regular</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Complete iOS typography scale with all variants and their sizes."
      }
    }
  }
}`,...(Je=(We=w.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Qe,Xe,_e;C.parameters={...C.parameters,docs:{...(Qe=C.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Typography color="primary">Primary label color</Typography>\r
      <Typography color="secondary">Secondary label color</Typography>\r
      <Typography color="tertiary">Tertiary label color</Typography>\r
      <Typography color="quaternary">Quaternary label color</Typography>\r
      <Typography color="system">System blue color</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "iOS label color hierarchy from primary to quaternary, plus system colors."
      }
    }
  }
}`,...(_e=(Xe=C.parameters)==null?void 0:Xe.docs)==null?void 0:_e.source}}};var Ge,Ke,Ye;N.parameters={...N.parameters,docs:{...(Ge=N.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <article className="max-w-2xl space-y-6">\r
      <header>\r
        <Typography variant="largeTitle" as="h1">\r
          Article Title\r
        </Typography>\r
        <Typography variant="subhead" color="secondary">\r
          Published on March 15, 2024\r
        </Typography>\r
      </header>\r
\r
      <section>\r
        <Typography variant="title2" as="h2">\r
          Section Heading\r
        </Typography>\r
        <Typography variant="body">\r
          This is the main body content of the article. It uses the body variant which provides optimal readability for\r
          longer form content. The text flows naturally and maintains good contrast and spacing.\r
        </Typography>\r
      </section>\r
\r
      <section>\r
        <Typography variant="headline" as="h3">\r
          Subsection\r
        </Typography>\r
        <Typography variant="callout">\r
          This callout text provides additional context or highlights important information that supports the main\r
          content.\r
        </Typography>\r
      </section>\r
\r
      <footer>\r
        <Typography variant="footnote" color="tertiary">\r
          This footnote provides additional details or disclaimers related to the content above.\r
        </Typography>\r
      </footer>\r
    </article>,
  parameters: {
    docs: {
      description: {
        story: "Example of semantic usage of typography variants in a typical article layout."
      }
    }
  }
}`,...(Ye=(Ke=N.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var Ze,$e,er;R.parameters={...R.parameters,docs:{...(Ze=R.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    const [selectedVariant, setSelectedVariant] = React.useState<"body" | "headline" | "title2">("body");
    const [selectedColor, setSelectedColor] = React.useState<"primary" | "secondary" | "system">("primary");
    return <div className="space-y-6">\r
        <div className="flex gap-4">\r
          <div>\r
            <Typography variant="subhead" as="label">\r
              Variant:\r
            </Typography>\r
            <select value={selectedVariant} onChange={e => setSelectedVariant(e.target.value as any)} className="ml-2 rounded border px-2 py-1">\r
              <option value="body">Body</option>\r
              <option value="headline">Headline</option>\r
              <option value="title2">Title 2</option>\r
            </select>\r
          </div>\r
          <div>\r
            <Typography variant="subhead" as="label">\r
              Color:\r
            </Typography>\r
            <select value={selectedColor} onChange={e => setSelectedColor(e.target.value as any)} className="ml-2 rounded border px-2 py-1">\r
              <option value="primary">Primary</option>\r
              <option value="secondary">Secondary</option>\r
              <option value="system">System</option>\r
            </select>\r
          </div>\r
        </div>\r
\r
        <div className="rounded-lg border p-4">\r
          <Typography variant={selectedVariant} color={selectedColor}>\r
            This text changes based on your selections above. Try different combinations to see how the typography\r
            variants and colors work together.\r
          </Typography>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing how different variants and colors can be combined."
      }
    }
  }
}`,...(er=($e=R.parameters)==null?void 0:$e.docs)==null?void 0:er.source}}};const sr=["LargeTitle","Title1","Title2","Title3","Headline","Body","Callout","Subhead","Footnote","Caption1","Caption2","PrimaryColor","SecondaryColor","TertiaryColor","SystemColor","CustomColor","FontWeights","TextAlignment","TextTransforms","TextDecorations","TruncatedText","LineClampedText","TypographyScale","ColorScale","SemanticUsage","InteractiveExample"];export{i as Body,l as Callout,d as Caption1,m as Caption2,C as ColorScale,T as CustomColor,v as FontWeights,p as Footnote,s as Headline,R as InteractiveExample,t as LargeTitle,E as LineClampedText,y as PrimaryColor,h as SecondaryColor,N as SemanticUsage,c as Subhead,g as SystemColor,u as TertiaryColor,x as TextAlignment,b as TextDecorations,f as TextTransforms,a as Title1,o as Title2,n as Title3,S as TruncatedText,w as TypographyScale,sr as __namedExportsOrder,nr as default};
