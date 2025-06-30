import{R as e}from"./iframe-DPTEoTx4.js";import{I as J}from"./Icon-eIzZENis.js";const t=e.forwardRef(({title:d,children:s,expanded:n,defaultExpanded:a=!1,disabled:r=!1,onToggle:o,className:l="",testId:m,...O},V)=>{const[p,h]=e.useState(n??a);e.useEffect(()=>{n!==void 0&&h(n)},[n]);const x=()=>{if(r)return;const c=!p;n===void 0&&h(c),o==null||o(c)},_=c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),x())};return e.createElement("div",{ref:V,className:`border-b border-separator-nonOpaque last:border-b-0 dark:border-separator-nonOpaque-dark ${l}`,"data-testid":m,...O},e.createElement("button",{type:"button",onClick:x,onKeyDown:_,disabled:r,className:`flex w-full items-center justify-between bg-background-primary px-4 py-3 text-left transition-colors duration-200 ease-ios focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 dark:bg-background-secondary-dark ${r?"cursor-not-allowed opacity-50":"hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark"} `.trim(),"aria-expanded":p,"aria-controls":`accordion-content-${m}`,"aria-disabled":r},e.createElement("span",{className:"font-medium text-label-primary text-ios-body dark:text-label-primary-dark"},d),e.createElement(J,{name:"chevron",size:"medium",color:"tertiary",className:`transition-transform duration-300 ease-ios ${p?"rotate-90":""}`})),e.createElement("div",{id:`accordion-content-${m}`,className:`overflow-hidden transition-all duration-300 ease-ios ${p?"max-h-screen opacity-100":"max-h-0 opacity-0"} `,role:"region","aria-labelledby":`accordion-header-${m}`},e.createElement("div",{className:"bg-background-secondary px-4 py-3 dark:bg-background-tertiary-dark"},s)))});t.displayName="AccordionItem";const i=e.forwardRef(({children:d,variant:s="grouped",className:n="",testId:a,...r},o)=>{const l={grouped:"bg-background-secondary dark:bg-background-secondary-dark rounded-ios-lg overflow-hidden",separated:"space-y-2"};return e.createElement("div",{ref:o,className:`${l[s]} ${n}`.trim(),"data-testid":a,role:"group","aria-label":"Accordion",...r},d)});i.displayName="Accordion";t.__docgenInfo={description:`iOS-inspired accordion item component with smooth expand/collapse animations.
Supports both controlled and uncontrolled usage patterns.

@example
\`\`\`tsx
<AccordionItem title="Settings" onToggle={(expanded) => console.log(expanded)}>
  <p>Configuration options here</p>
</AccordionItem>
\`\`\``,methods:[],displayName:"AccordionItem",props:{title:{required:!0,tsType:{name:"string"},description:"Item title displayed in the header"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Item content that expands/collapses"},expanded:{required:!1,tsType:{name:"boolean"},description:"Controlled expanded state"},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"Default expanded state for uncontrolled usage",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled and cannot be toggled",defaultValue:{value:"false",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Callback fired when the item is toggled"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test identifier for automated testing"}}};i.__docgenInfo={description:`iOS-inspired accordion container component that groups multiple accordion items.
Provides consistent styling and layout for accordion interfaces.

@example
\`\`\`tsx
<Accordion variant="grouped">
  <AccordionItem title="Section 1">Content 1</AccordionItem>
  <AccordionItem title="Section 2">Content 2</AccordionItem>
</Accordion>
\`\`\``,methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Accordion items to render"},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple items can be expanded simultaneously"},variant:{required:!1,tsType:{name:"union",raw:'"grouped" | "separated"',elements:[{name:"literal",value:'"grouped"'},{name:"literal",value:'"separated"'}]},description:"Visual style variant",defaultValue:{value:'"grouped"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test identifier for automated testing"}}};const M={title:"Data Display/Accordion",component:i,parameters:{layout:"padded",docs:{description:{component:"iOS-inspired accordion component for collapsible content sections."}}},tags:["autodocs"]},u={render:()=>e.createElement(i,null,e.createElement(t,{title:"What is React?"},"React is a JavaScript library for building user interfaces, particularly web applications."),e.createElement(t,{title:"What is TypeScript?"},"TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static type definitions."),e.createElement(t,{title:"What is Tailwind CSS?"},"Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."))},f={render:()=>e.createElement(i,null,e.createElement(t,{title:"Expanded by default",defaultExpanded:!0},"This accordion item is expanded by default."),e.createElement(t,{title:"Collapsed by default"},"This accordion item is collapsed by default."))},g={render:()=>e.createElement(i,null,e.createElement(t,{title:"Normal item"},"This is a normal accordion item."),e.createElement(t,{title:"Disabled item",disabled:!0},"This accordion item is disabled and cannot be toggled."))},y={render:()=>e.createElement(i,{variant:"separated"},e.createElement(t,{title:"First section"},"Content for the first section."),e.createElement(t,{title:"Second section"},"Content for the second section."),e.createElement(t,{title:"Third section"},"Content for the third section."))},b={render:()=>{const[d,s]=e.useState(["item1"]),n=(a,r)=>{s(o=>r?[...o,a]:o.filter(l=>l!==a))};return e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"text-sm text-label-secondary"},"Expanded items: ",d.join(", ")||"None"),e.createElement(i,null,e.createElement(t,{title:"Controlled item 1",expanded:d.includes("item1"),onToggle:a=>n("item1",a)},"This is controlled accordion content 1."),e.createElement(t,{title:"Controlled item 2",expanded:d.includes("item2"),onToggle:a=>n("item2",a)},"This is controlled accordion content 2.")))}};var A,I,v;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Accordion>\r
      <AccordionItem title="What is React?">\r
        React is a JavaScript library for building user interfaces, particularly web applications.\r
      </AccordionItem>\r
      <AccordionItem title="What is TypeScript?">\r
        TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static type\r
        definitions.\r
      </AccordionItem>\r
      <AccordionItem title="What is Tailwind CSS?">\r
        Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.\r
      </AccordionItem>\r
    </Accordion>
}`,...(v=(I=u.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var E,S,T;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Accordion>\r
      <AccordionItem title="Expanded by default" defaultExpanded>\r
        This accordion item is expanded by default.\r
      </AccordionItem>\r
      <AccordionItem title="Collapsed by default">This accordion item is collapsed by default.</AccordionItem>\r
    </Accordion>
}`,...(T=(S=f.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var C,w,N;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Accordion>\r
      <AccordionItem title="Normal item">This is a normal accordion item.</AccordionItem>\r
      <AccordionItem title="Disabled item" disabled>\r
        This accordion item is disabled and cannot be toggled.\r
      </AccordionItem>\r
    </Accordion>
}`,...(N=(w=g.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var k,q,R;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Accordion variant="separated">\r
      <AccordionItem title="First section">Content for the first section.</AccordionItem>\r
      <AccordionItem title="Second section">Content for the second section.</AccordionItem>\r
      <AccordionItem title="Third section">Content for the third section.</AccordionItem>\r
    </Accordion>
}`,...(R=(q=y.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var D,W,$;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [expandedItems, setExpandedItems] = React.useState<string[]>(["item1"]);
    const handleToggle = (itemId: string, expanded: boolean) => {
      setExpandedItems(prev => expanded ? [...prev, itemId] : prev.filter(id => id !== itemId));
    };
    return <div className="space-y-4">\r
        <div className="text-sm text-label-secondary">Expanded items: {expandedItems.join(", ") || "None"}</div>\r
\r
        <Accordion>\r
          <AccordionItem title="Controlled item 1" expanded={expandedItems.includes("item1")} onToggle={expanded => handleToggle("item1", expanded)}>\r
            This is controlled accordion content 1.\r
          </AccordionItem>\r
          <AccordionItem title="Controlled item 2" expanded={expandedItems.includes("item2")} onToggle={expanded => handleToggle("item2", expanded)}>\r
            This is controlled accordion content 2.\r
          </AccordionItem>\r
        </Accordion>\r
      </div>;
  }
}`,...($=(W=b.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const F=["Basic","DefaultExpanded","WithDisabled","Separated","Interactive"];export{u as Basic,f as DefaultExpanded,b as Interactive,y as Separated,g as WithDisabled,F as __namedExportsOrder,M as default};
