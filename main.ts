import f from'fs'
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env
for(let n=0;n<5;){let d='i00'+ ++n,p='/'+d+'/',t=f.readFileSync(I+p+'level.txt')
const w=t.indexOf(10)+1,E=[-w,w,-1,1],K='udlr',B=[],G=[]
let pl=t.indexOf(64),M='',H=[]
const V=(G,B)=>{let Q=[[B,pl,'']],X={}
for(let e=0;e<Q.length&&e<2e5;e++){let[b,p,s]=Q[e]
H=[];H[p]='';let R=[p]
for(const x of R)for(let k=4;k--;){const y=x+E[k];t[y]==35||H[y]||b.includes(y)||(R.push(y),H[y]=H[x]+K[k])}
for(let j=4;j--;)for(let k=4;k--;){let y=b[j],t2=y+E[k],h=H[y-E[k]],q=s+h+K[k]
if(!(h+1)|t[t2]==35|b.includes(t2))continue
let n=[...b];n[j]=t2;n.sort((a,c)=>a-c)
if(X[n+K+y])continue;X[n+K+y]=1
if(n==G+'')return[q,y]
Q.push([n,y,q])}}
return['',pl]}
for(let i of t.keys()){let c=t[i],k=(i>8*w)*2+(i%w>6);c%6==0&&(B[k]??=[]).push(i);c==46|c==42&&(G[k]??=[]).push(i)}
for(const k in B){let r=V(G[k],B[k]);M+=r[0];pl=r[1];G[k].map(x=>t[x]=35)}
f.mkdirSync(O+p,{recursive:!0});f.writeFileSync(O+p+'solution.txt',M)}
