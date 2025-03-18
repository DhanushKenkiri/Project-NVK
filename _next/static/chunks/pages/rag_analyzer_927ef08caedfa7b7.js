(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{6135:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rag-analyzer",function(){return n(2575)}])},2575:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return w}});var a=n(2676),t=n(5271),r=n(4822),l=n.n(r),i=n(8510),c=n(6883),o=n(1232),d=n(8927),m=n(1514),u=n(3238),x=n(6011),h=n(8771),p=n(6443),f=n(1476),g=n(8260),j=n(6558),v=n(1890),y=n(6926),N=()=>{let[e,s]=(0,t.useState)(null),[n,r]=(0,t.useState)(null),[l,i]=(0,t.useState)(!1),[N,b]=(0,t.useState)(null),[w,A]=(0,t.useState)(null),[k,C]=(0,t.useState)("general"),[P,G]=(0,t.useState)(0),[S,z]=(0,t.useState)(null),R=(0,t.useRef)(null),_=async()=>{if(!e||!n){A("Please upload a file first");return}i(!0),A(null),z("Initializing RAG analysis...");try{let s=await fetch("/api/rag-analyze-contract",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fileData:n,fileName:e.name,analysisType:k})}),a=await s.json();if(!s.ok)throw Error(a.error||"Failed to analyze contract with RAG");b(a.analysis)}catch(e){A(e instanceof Error?e.message:"An unknown error occurred")}finally{i(!1),z(null)}},F=()=>{s(null),r(null),b(null),A(null),G(0),z(null),R.current&&(R.current.value="")};return(0,a.jsxs)("div",{className:"space-y-6",children:[w&&(0,a.jsxs)(f.bZ,{variant:"destructive",children:[(0,a.jsx)(m.Z,{className:"h-4 w-4"}),(0,a.jsx)(f.Cd,{children:"Error"}),(0,a.jsx)(f.X,{children:w})]}),N?(0,a.jsxs)(o.Zb,{className:"p-6",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-xl font-bold",children:"RAG Analysis Results"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Powered by Retrieval-Augmented Generation"})]}),(0,a.jsx)(c.z,{variant:"outline",onClick:F,children:"Analyze Another Contract"})]}),(0,a.jsx)(y.x,{className:"h-[60vh] rounded-md border p-4",children:(0,a.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:N.replace(/\n/g,"<br />")}})})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"RAG-Powered Contract Analysis"}),(0,a.jsx)(j.C,{variant:"outline",className:"bg-primary/10",children:(0,a.jsx)(v.pn,{children:(0,a.jsxs)(v.u,{children:[(0,a.jsx)(v.aJ,{children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(u.Z,{className:"h-4 w-4 mr-1"}),"RAG Technology"]})}),(0,a.jsx)(v._v,{children:(0,a.jsx)("p",{className:"max-w-xs",children:"Using Retrieval-Augmented Generation (RAG) for more accurate and context-aware document analysis"})})]})})})]}),(0,a.jsxs)(d.mQ,{value:k,onValueChange:C,className:"w-full",children:[(0,a.jsxs)(d.dr,{className:"grid grid-cols-3 mb-4",children:[(0,a.jsx)(d.SP,{value:"general",children:"General Analysis"}),(0,a.jsx)(d.SP,{value:"summary",children:"Contract Summary"}),(0,a.jsx)(d.SP,{value:"risks",children:"Risk Assessment"})]}),(0,a.jsx)(d.nU,{value:"general",children:(0,a.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"Upload a contract to receive a comprehensive analysis including purpose, key terms, obligations, and potential issues using advanced RAG technology."})}),(0,a.jsx)(d.nU,{value:"summary",children:(0,a.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"Get a concise summary of your contract highlighting the main parties, key dates, and essential terms with improved context understanding."})}),(0,a.jsx)(d.nU,{value:"risks",children:(0,a.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"Identify potential risks and liabilities in your contract with suggestions for improvement, powered by contextual retrieval."})})]}),(0,a.jsxs)("div",{className:"border-2 border-dashed rounded-lg p-12 text-center transition-colors ".concat(e?"border-primary/50 bg-primary/5":"border-muted-foreground/25"),onDragOver:e=>{e.preventDefault(),e.stopPropagation()},onDrop:e=>{if(e.preventDefault(),e.stopPropagation(),e.dataTransfer.files&&e.dataTransfer.files.length>0){let s=e.dataTransfer.files[0];if(!["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","image/jpeg","image/png","text/plain"].includes(s.type)){A("Invalid file type. Please upload PDF, DOCX, JPG, PNG, or TXT files.");return}if(R.current){let e=new DataTransfer;e.items.add(s),R.current.files=e.files;let n=new Event("change",{bubbles:!0});R.current.dispatchEvent(n)}}},children:[(0,a.jsx)("input",{type:"file",ref:R,onChange:e=>{var n;let a=null===(n=e.target.files)||void 0===n?void 0:n[0];if(a){if(a.size>10485760){A("File size exceeds 10MB limit");return}s(a),A(null),b(null);let e=new FileReader;e.onloadstart=()=>G(0),e.onprogress=e=>{e.lengthComputable&&G(Math.round(e.loaded/e.total*100))},e.onload=()=>{var s;let n=null===(s=e.result)||void 0===s?void 0:s.toString().split(",")[1];n&&(r(n),G(100))},e.onerror=()=>{A("Error reading file"),G(0)},e.readAsDataURL(a)}},className:"hidden",accept:".pdf,.docx,.doc,.jpg,.jpeg,.png,.txt"}),e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{className:"h-12 w-12 mx-auto mb-4 text-primary"}),(0,a.jsx)("h3",{className:"text-lg font-medium mb-2",children:"File ready for analysis"}),(0,a.jsx)("p",{className:"text-sm mb-2",children:e.name}),(0,a.jsxs)("p",{className:"text-xs text-muted-foreground mb-4",children:[(e.size/1024/1024).toFixed(2)," MB"]}),P<100?(0,a.jsxs)("div",{className:"w-full max-w-xs mx-auto mb-4",children:[(0,a.jsx)(g.E,{value:P,className:"h-2"}),(0,a.jsxs)("p",{className:"text-xs text-muted-foreground mt-1",children:["Uploading: ",P,"%"]})]}):(0,a.jsxs)("div",{className:"space-x-2",children:[(0,a.jsx)(c.z,{onClick:_,disabled:l,children:l?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.Z,{className:"mr-2 h-4 w-4 animate-spin"}),S||"Analyzing..."]}):"Analyze with RAG"}),(0,a.jsx)(c.z,{variant:"outline",onClick:F,children:"Change File"})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Z,{className:"h-12 w-12 mx-auto mb-4 text-muted-foreground"}),(0,a.jsx)("h3",{className:"text-lg font-medium mb-2",children:"Upload your contract"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"Drag and drop your PDF, Word, text file, or scanned document, or click to browse"}),(0,a.jsx)(c.z,{onClick:()=>{var e;return null===(e=R.current)||void 0===e?void 0:e.click()},children:"Select File"})]})]}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Supported formats: PDF, DOCX, TXT, JPG, PNG (Max size: 10MB)"})]})]})},b=n(1987),w=()=>(0,a.jsxs)(b.Z,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:"RAG Contract Analyzer | LegalAssist AI"}),(0,a.jsx)("meta",{name:"description",content:"Analyze legal contracts with advanced RAG technology"})]}),(0,a.jsxs)("div",{className:"min-h-screen bg-background",children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)("main",{className:"container mx-auto py-8 px-4 md:px-6",children:(0,a.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,a.jsx)(N,{})})})]})]})},4822:function(e,s,n){e.exports=n(1727)}},function(e){e.O(0,[311,877,841,888,774,179],function(){return e(e.s=6135)}),_N_E=e.O()}]);