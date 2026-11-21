import f from'node:fs'
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env
for(const d of f.readdirSync(I)){let t=f.readFileSync(I+'/'+d+'/level.txt')+''
const w=t.search(/\n/)
t=t.replace(/\n/g,'')
const E=[-w,w,-1,1],K='udlr',A=[],B=[],G=[],H=[]
let pl=t.search(/@/),M=''
const B3=(f,X)=>{let u=f,R=new Set([f]);for(const x of R)for(let k=4;k--;){const y=x+E[k];A[y]|R.has(y)|X.includes(y)||(R.add(y),H[y]=k,y<u&&(u=y))}return[u,R]}
const V=(G,B)=>{
const Q=[B],y=[pl],N=[0],X={}
let F=0
for(let e=0;e<Q.length&&!F&&e<2e5;e++){const b=Q[e],R=B3(y[e],b)[1]
for(let j=4;j--;)for(let k=4;k--;){const s=b[j]+E[k]
if(!R.has(2*b[j]-s)|A[s]|b.includes(s))continue
const n=[...b];n[j]=s;n.sort((a,c)=>c-a)
const v=n+K+B3(b[j],n)[0]
X[v]||(X[v]=1,Q.push(n),y.push(b[j]),N.push(e*4+k),n==G+''&&(F=Q.length-1))}}
if(!F)return''
let e=F,s=''
for(;e>0;){const n=N[e],k=n&3,g=n>>2
B3(y[g],Q[g])
s=K[k]+s
for(let x=y[e]-E[k];x-y[g];x-=E[H[x]])s=K[H[x]]+s
e=g}pl=y[F]
return s}
for(let i=t.length;i--;){const c=t[i],k=(i>8*w)*2+(i%w>6),b=c>'#'&&c<'+';A[i]=c=='#'|b;c>'%'&&c<'@'&&(G[k]??=[]).push(i);b&&(B[k]??=[]).push(i)}
for(const k in B){B[k].forEach(x=>A[x]=0)
M+=V(G[k],B[k])
G[k].forEach(x=>A[x]=1)}f.mkdirSync(O+'/'+d,{recursive:!0});f.writeFileSync(O+'/'+d+'/solution.txt',M)}
