import{R as e}from"./iframe-DPTEoTx4.js";import{B as f}from"./Button-Vw-cbfqZ.js";import{C as n}from"./Card-61Fw-uHo.js";import{T as a}from"./Typography-RJZoBOJc.js";import"./animations-DDGOJxN6.js";const be=()=>{},ke={title:"Components/Card",component:n,parameters:{layout:"padded",docs:{description:{component:"iOS-inspired card component following Apple's design guidelines. Provides flexible container for content with various styling options."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevated","grouped","inset","plain"],description:"Card variant following iOS design patterns"},padding:{control:"select",options:["none","small","medium","large"],description:"Card padding size"},interactive:{control:"boolean",description:"Make card interactive/clickable"},children:{control:"text",description:"Card content"}},args:{onClick:be,children:"Card content"}},s={args:{variant:"elevated",children:e.createElement("div",null,e.createElement(a,{variant:"headline"},"Elevated Card"),e.createElement(a,{variant:"body",color:"secondary"},"This card has a subtle shadow and appears elevated from the background."))}},o={args:{variant:"grouped",children:e.createElement("div",null,e.createElement(a,{variant:"headline"},"Grouped Card"),e.createElement(a,{variant:"body",color:"secondary"},"This card style is commonly used in grouped lists and settings."))}},i={args:{variant:"inset",children:e.createElement("div",null,e.createElement(a,{variant:"headline"},"Inset Card"),e.createElement(a,{variant:"body",color:"secondary"},"This card has inset margins and is perfect for content sections."))}},d={args:{variant:"plain",children:e.createElement("div",null,e.createElement(a,{variant:"headline"},"Plain Card"),e.createElement(a,{variant:"body",color:"secondary"},"This card has no background styling, perfect for custom designs."))}},c={args:{padding:"none",children:e.createElement("div",{className:"bg-systemBlue-50 p-4 dark:bg-systemBlue-900/20"},e.createElement(a,{variant:"body"},"This card has no internal padding. Content manages its own spacing."))}},l={args:{padding:"small",children:e.createElement(a,{variant:"body"},"Small padding (12px)")}},p={args:{padding:"medium",children:e.createElement(a,{variant:"body"},"Medium padding (16px)")}},m={args:{padding:"large",children:e.createElement(a,{variant:"body"},"Large padding (24px)")}},y={args:{interactive:!0,children:e.createElement("div",null,e.createElement(a,{variant:"headline"},"Interactive Card"),e.createElement(a,{variant:"body",color:"secondary"},"This card responds to hover and click interactions."))}},g={args:{onClick:be,children:e.createElement("div",null,e.createElement(a,{variant:"headline"},"Clickable Card"),e.createElement(a,{variant:"body",color:"secondary"},"Click this card to trigger an action."))}},h={render:()=>e.createElement(n,{padding:"none",className:"max-w-sm"},e.createElement("img",{src:"https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Beautiful landscape",className:"h-48 w-full object-cover"}),e.createElement("div",{className:"p-4"},e.createElement(a,{variant:"headline"},"Beautiful Landscape"),e.createElement(a,{variant:"body",color:"secondary"},"A stunning view of mountains and valleys captured at golden hour."))),parameters:{docs:{description:{story:"Card with image content and text overlay."}}}},v={render:()=>e.createElement(n,{className:"max-w-sm"},e.createElement("div",{className:"space-y-4"},e.createElement("div",null,e.createElement(a,{variant:"headline"},"Card with Actions"),e.createElement(a,{variant:"body",color:"secondary"},"This card includes action buttons at the bottom.")),e.createElement("div",{className:"flex gap-2 pt-2"},e.createElement(f,{variant:"ghost",size:"small"},"Cancel"),e.createElement(f,{variant:"primary",size:"small"},"Confirm")))),parameters:{docs:{description:{story:"Card with action buttons for user interactions."}}}},u={render:()=>e.createElement(n,{padding:"none",className:"max-w-sm",interactive:!0},e.createElement("img",{src:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Product",className:"h-48 w-full object-cover"}),e.createElement("div",{className:"space-y-2 p-4"},e.createElement(a,{variant:"headline"},"Premium Headphones"),e.createElement(a,{variant:"body",color:"secondary"},"High-quality wireless headphones with noise cancellation."),e.createElement("div",{className:"flex items-center justify-between pt-2"},e.createElement(a,{variant:"title3",color:"system"},"$299"),e.createElement(f,{size:"small"},"Add to Cart")))),parameters:{docs:{description:{story:"Example product card with image, description, and purchase action."}}}},T={render:()=>e.createElement("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"},[1,2,3,4,5,6].map(r=>e.createElement(n,{key:r,interactive:!0},e.createElement(a,{variant:"headline"},"Card ",r),e.createElement(a,{variant:"body",color:"secondary"},"This is card number ",r," in a responsive grid layout.")))),parameters:{docs:{description:{story:"Cards arranged in a responsive grid layout."}}}},C={render:()=>e.createElement("div",{className:"max-w-md space-y-4"},["Inbox","Sent","Drafts","Trash"].map(r=>e.createElement(n,{key:r,variant:"grouped",interactive:!0},e.createElement("div",{className:"flex items-center justify-between"},e.createElement(a,{variant:"body"},r),e.createElement(a,{variant:"caption1",color:"tertiary"},Math.floor(Math.random()*100)))))),parameters:{docs:{description:{story:"Cards arranged in a vertical list layout."}}}},b={render:()=>e.createElement("div",{className:"space-y-6"},e.createElement("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2"},e.createElement(n,{variant:"elevated"},e.createElement(a,{variant:"subhead"},"Elevated")),e.createElement(n,{variant:"grouped"},e.createElement(a,{variant:"subhead"},"Grouped")),e.createElement(n,{variant:"inset"},e.createElement(a,{variant:"subhead"},"Inset")),e.createElement(n,{variant:"plain"},e.createElement(a,{variant:"subhead"},"Plain")))),parameters:{docs:{description:{story:"All card variants displayed together."}}}},E={render:()=>{const[r,Ee]=e.useState(null);return e.createElement("div",{className:"space-y-4"},e.createElement(a,{variant:"headline"},"Select a card:"),e.createElement("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3"},[1,2,3].map(t=>e.createElement(n,{key:t,interactive:!0,onClick:()=>Ee(t),className:r===t?"ring-2 ring-systemBlue-500":""},e.createElement(a,{variant:"body"},"Option ",t),e.createElement(a,{variant:"caption1",color:"secondary"},r===t?"Selected":"Click to select")))),r&&e.createElement(a,{variant:"body",color:"system"},"You selected Option ",r))},parameters:{docs:{description:{story:"Interactive example showing card selection with visual feedback."}}}};var w,x,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "elevated",
    children: <div>\r
        <Typography variant="headline">Elevated Card</Typography>\r
        <Typography variant="body" color="secondary">\r
          This card has a subtle shadow and appears elevated from the background.\r
        </Typography>\r
      </div>
  }
}`,...(N=(x=s.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var S,k,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "grouped",
    children: <div>\r
        <Typography variant="headline">Grouped Card</Typography>\r
        <Typography variant="body" color="secondary">\r
          This card style is commonly used in grouped lists and settings.\r
        </Typography>\r
      </div>
  }
}`,...(P=(k=o.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var B,I,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "inset",
    children: <div>\r
        <Typography variant="headline">Inset Card</Typography>\r
        <Typography variant="body" color="secondary">\r
          This card has inset margins and is perfect for content sections.\r
        </Typography>\r
      </div>
  }
}`,...(A=(I=i.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var j,M,G;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "plain",
    children: <div>\r
        <Typography variant="headline">Plain Card</Typography>\r
        <Typography variant="body" color="secondary">\r
          This card has no background styling, perfect for custom designs.\r
        </Typography>\r
      </div>
  }
}`,...(G=(M=d.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var L,z,O;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    padding: "none",
    children: <div className="bg-systemBlue-50 p-4 dark:bg-systemBlue-900/20">\r
        <Typography variant="body">This card has no internal padding. Content manages its own spacing.</Typography>\r
      </div>
  }
}`,...(O=(z=c.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var H,W,R;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    padding: "small",
    children: <Typography variant="body">Small padding (12px)</Typography>
  }
}`,...(R=(W=l.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var q,D,V;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    padding: "medium",
    children: <Typography variant="body">Medium padding (16px)</Typography>
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var Y,_,$;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    padding: "large",
    children: <Typography variant="body">Large padding (24px)</Typography>
  }
}`,...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var F,J,K;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    interactive: true,
    children: <div>\r
        <Typography variant="headline">Interactive Card</Typography>\r
        <Typography variant="body" color="secondary">\r
          This card responds to hover and click interactions.\r
        </Typography>\r
      </div>
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    onClick: fn,
    children: <div>\r
        <Typography variant="headline">Clickable Card</Typography>\r
        <Typography variant="body" color="secondary">\r
          Click this card to trigger an action.\r
        </Typography>\r
      </div>
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Card padding="none" className="max-w-sm">\r
      <img src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Beautiful landscape" className="h-48 w-full object-cover" />\r
      <div className="p-4">\r
        <Typography variant="headline">Beautiful Landscape</Typography>\r
        <Typography variant="body" color="secondary">\r
          A stunning view of mountains and valleys captured at golden hour.\r
        </Typography>\r
      </div>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Card with image content and text overlay."
      }
    }
  }
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,ne,te;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <Card className="max-w-sm">\r
      <div className="space-y-4">\r
        <div>\r
          <Typography variant="headline">Card with Actions</Typography>\r
          <Typography variant="body" color="secondary">\r
            This card includes action buttons at the bottom.\r
          </Typography>\r
        </div>\r
        <div className="flex gap-2 pt-2">\r
          <Button variant="ghost" size="small">\r
            Cancel\r
          </Button>\r
          <Button variant="primary" size="small">\r
            Confirm\r
          </Button>\r
        </div>\r
      </div>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Card with action buttons for user interactions."
      }
    }
  }
}`,...(te=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,oe,ie;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <Card padding="none" className="max-w-sm" interactive>\r
      <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Product" className="h-48 w-full object-cover" />\r
      <div className="space-y-2 p-4">\r
        <Typography variant="headline">Premium Headphones</Typography>\r
        <Typography variant="body" color="secondary">\r
          High-quality wireless headphones with noise cancellation.\r
        </Typography>\r
        <div className="flex items-center justify-between pt-2">\r
          <Typography variant="title3" color="system">\r
            $299\r
          </Typography>\r
          <Button size="small">Add to Cart</Button>\r
        </div>\r
      </div>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Example product card with image, description, and purchase action."
      }
    }
  }
}`,...(ie=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var de,ce,le;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">\r
      {[1, 2, 3, 4, 5, 6].map(item => <Card key={item} interactive>\r
          <Typography variant="headline">Card {item}</Typography>\r
          <Typography variant="body" color="secondary">\r
            This is card number {item} in a responsive grid layout.\r
          </Typography>\r
        </Card>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Cards arranged in a responsive grid layout."
      }
    }
  }
}`,...(le=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,me,ye;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-4">\r
      {["Inbox", "Sent", "Drafts", "Trash"].map(item => <Card key={item} variant="grouped" interactive>\r
          <div className="flex items-center justify-between">\r
            <Typography variant="body">{item}</Typography>\r
            <Typography variant="caption1" color="tertiary">\r
              {Math.floor(Math.random() * 100)}\r
            </Typography>\r
          </div>\r
        </Card>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Cards arranged in a vertical list layout."
      }
    }
  }
}`,...(ye=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var ge,he,ve;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">\r
        <Card variant="elevated">\r
          <Typography variant="subhead">Elevated</Typography>\r
        </Card>\r
        <Card variant="grouped">\r
          <Typography variant="subhead">Grouped</Typography>\r
        </Card>\r
        <Card variant="inset">\r
          <Typography variant="subhead">Inset</Typography>\r
        </Card>\r
        <Card variant="plain">\r
          <Typography variant="subhead">Plain</Typography>\r
        </Card>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All card variants displayed together."
      }
    }
  }
}`,...(ve=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ue,Te,Ce;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [selectedCard, setSelectedCard] = React.useState<number | null>(null);
    return <div className="space-y-4">\r
        <Typography variant="headline">Select a card:</Typography>\r
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">\r
          {[1, 2, 3].map(item => <Card key={item} interactive onClick={() => setSelectedCard(item)} className={selectedCard === item ? "ring-2 ring-systemBlue-500" : ""}>\r
              <Typography variant="body">Option {item}</Typography>\r
              <Typography variant="caption1" color="secondary">\r
                {selectedCard === item ? "Selected" : "Click to select"}\r
              </Typography>\r
            </Card>)}\r
        </div>\r
        {selectedCard && <Typography variant="body" color="system">\r
            You selected Option {selectedCard}\r
          </Typography>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing card selection with visual feedback."
      }
    }
  }
}`,...(Ce=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};const Pe=["Elevated","Grouped","Inset","Plain","NoPadding","SmallPadding","MediumPadding","LargePadding","Interactive","Clickable","WithImage","WithActions","ProductCard","CardGrid","CardList","AllVariants","InteractiveExample"];export{b as AllVariants,T as CardGrid,C as CardList,g as Clickable,s as Elevated,o as Grouped,i as Inset,y as Interactive,E as InteractiveExample,m as LargePadding,p as MediumPadding,c as NoPadding,d as Plain,u as ProductCard,l as SmallPadding,v as WithActions,h as WithImage,Pe as __namedExportsOrder,ke as default};
