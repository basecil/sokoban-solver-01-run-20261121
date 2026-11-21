import f from'fs'
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env
for(let n=0;n<5;){let d='i00'+ ++n,p='/'+d+'/',t=f.readFileSync(I+p+'level.txt')
const w=t.indexOf(10)+1,E=[-w,w,-1,1],K='udlr',A=[],B=[],G=[]
let pl=t.indexOf(64),M='',H=[]
const V=(G,B)=>{let Q=[[B,pl,'']],X={}
for(let e=0;e<Q.length&&e<2e5;e++){let[b,p,s]=Q[e]
H=[];H[p]='';let R=[p]
for(const x of R)for(let k=4;k--;){const y=x+E[k];A[y]||H[y]+1||b.includes(y)||(R.push(y),H[y]=H[x]+K[k])}
for(let j=4;j--;)for(let k=4;k--;){let t=b[j]+E[k],h=H[2*b[j]-t]
if(!(h+1)|A[t]|b.includes(t))continue
let n=[...b];n[j]=t;n.sort((a,c)=>a-c)
if(X[n+K+b[j]])continue;X[n+K+b[j]]=1
if(n==G+'')return[s+h+K[k],b[j]]
Q.push([n,b[j],s+h+K[k]])}}
return['',pl]}
for(let i in t){let c=t[i],k=(i>8*w)*2+(i%w>6);A[i]=c<43&c!=32;c%6==0&&(B[k]??=[]).push(+i);c>41&&c<47&&(G[k]??=[]).push(+i)}
for(const k in B){B[k].map(x=>A[x]=0);let r=V(G[k],B[k]);M+=r[0];pl=r[1];G[k].map(x=>A[x]=1)}
f.mkdirSync(O+p,{recursive:!0});f.writeFileSync(O+p+'solution.txt',M)}
