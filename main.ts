import f from'fs'
const{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env
for(const d of f.readdirSync(I)){let p='/'+d+'/',t=f.readFileSync(I+p+'level.txt')
const w=t.indexOf(10)+1,E=[-w,w,-1,1],K='udlr',A=[],B=[],G=[]
let pl=t.indexOf(64),M='',H=[]
const B3=(f,X)=>{let R=new Set([f]);for(const x of R)for(let k=4;k--;){const y=x+E[k];A[y]|R.has(y)|X.includes(y)||(R.add(y),H[y]=k)}return R}
const V=(G,B)=>{let Q=[B],y=[pl],N=[0],X={},F=0
for(let e=0;e<Q.length&&!F&&e<2e5;e++){let b=Q[e],R=B3(y[e],b)
for(let j=4;j--;)for(let k=4;k--;){let s=b[j]+E[k]
if(!R.has(2*b[j]-s)|A[s]|b.includes(s))continue
let n=[...b];n[j]=s;n.sort((a,c)=>a-c)
X[n+K+b[j]]||(X[n+K+b[j]]=1,Q.push(n),y.push(b[j]),N.push(e*4+k),n==G+''&&(F=Q.length-1))}}
if(!F)return''
let e=F,s=''
for(;e>0;){let n=N[e],k=n&3,g=n>>2
B3(y[g],Q[g])
s=K[k]+s
for(let x=y[e]-E[k];x-y[g];x-=E[H[x]])s=K[H[x]]+s
e=g}
return pl=y[F],s}
for(let i in t){let c=t[i],k=(i>8*w)*2+(i%w>6);A[i]=c<43&c!=32;c>35&&c<43&&(B[k]??=[]).push(+i);c>41&&c<47&&(G[k]??=[]).push(+i)}
for(const k in B){B[k].map(x=>A[x]=0);M+=V(G[k],B[k]);G[k].map(x=>A[x]=1)}
f.mkdirSync(O+p,{recursive:!0});f.writeFileSync(O+p+'solution.txt',M)}
