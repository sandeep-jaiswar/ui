import{R as t}from"./iframe-DPTEoTx4.js";import{t as T}from"./animations-DDGOJxN6.js";const r=t.forwardRef(({variant:l="elevated",padding:s="medium",children:d,onClick:n,interactive:o=!1,loading:e=!1,className:c="",testId:u,...p},m)=>{const v="card-ios",f={elevated:"card-elevated",grouped:"card-grouped",inset:"bg-background-secondary rounded-ios-lg mx-4 overflow-hidden dark:bg-background-secondary-dark",plain:"bg-transparent"},g={none:"",small:"p-3",medium:"p-4",large:"p-6"},i=o||!!n,y=i?"cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 hover:scale-[1.02] active:scale-[0.98] hover:shadow-ios-3":"",b=e?"animate-pulse":"",h=a=>{e||n==null||n(a)},w=a=>{if(!e&&(a.key==="Enter"||a.key===" ")){a.preventDefault();const E=new MouseEvent("click",{bubbles:!0,cancelable:!0});a.currentTarget.dispatchEvent(E)}},k=[v,f[l],g[s],y,b,T.default,c].filter(Boolean).join(" ");return t.createElement("div",{ref:m,className:k,onClick:h,onKeyDown:i?w:void 0,"data-testid":u,role:i?"button":void 0,tabIndex:i?0:void 0,"aria-busy":e,"aria-disabled":e,...p},e?t.createElement("div",{className:"space-y-3"},t.createElement("div",{className:"h-4 animate-pulse rounded bg-fill-tertiary dark:bg-fill-tertiary-dark"}),t.createElement("div",{className:"h-4 w-3/4 animate-pulse rounded bg-fill-tertiary dark:bg-fill-tertiary-dark"}),t.createElement("div",{className:"h-4 w-1/2 animate-pulse rounded bg-fill-tertiary dark:bg-fill-tertiary-dark"})):d)});r.displayName="Card";r.__docgenInfo={description:`iOS-inspired card component following Apple's design guidelines.

Features:
- Multiple visual variants (elevated, grouped, inset, plain)
- Interactive support with proper keyboard navigation
- Loading state with skeleton animation
- Accessibility support with proper ARIA attributes
- Smooth hover and focus transitions
- Touch-friendly interaction areas

@example
\`\`\`tsx
<Card
  variant="elevated"
  interactive
  onClick={handleCardClick}
  aria-label="User profile card"
>
  <h3>John Doe</h3>
  <p>Software Engineer</p>
</Card>
\`\`\``,methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"elevated" | "grouped" | "inset" | "plain"',elements:[{name:"literal",value:'"elevated"'},{name:"literal",value:'"grouped"'},{name:"literal",value:'"inset"'},{name:"literal",value:'"plain"'}]},description:"Visual style variant following iOS design patterns",defaultValue:{value:'"elevated"',computed:!1}},padding:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Padding size variant",defaultValue:{value:'"medium"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Card content"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Click event handler for interactive cards"},interactive:{required:!1,tsType:{name:"boolean"},description:"Whether the card is interactive/clickable",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the card is in loading state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test identifier for automated testing"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for interactive cards"}}};export{r as C};
