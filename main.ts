import f from'fs'
const{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env
for(let n=0;n++<5;){let p='/i00'+n+'/',t=f.readFileSync(I+p+'level.txt')
const w=t.indexOf(10)+1,E=[-w,w,-1,1],K='udlr'
let pl=t.indexOf(64),M='',k
const V=j=>{let B=[],G=[],Q=[],D={},T=9e6,h=T
t.forEach((c,i)=>{if((i>8*w)*2+(i%w>6)-j)return;c%6==0&&B.push(i);c>41&&c<47&&G.push(i)})
Q[T++]=[B,pl,'',0]
for(;h<T;){let[b,p,s,c]=Q[h++]
for(k=4;k--;){let y=p+E[k],q=s+K[k],n=b,C=c
if(t[y]-35){if(b.includes(y)){let z=y+E[k]
if(t[z]==35|b.includes(z))continue
n=b.map(v=>v-y?v:z).sort((a,b)=>a-b);C++}
if(D[n+K+y]<=C)continue
D[n+K+y]=C
if(n==G+''){pl=y;G.map(x=>t[x]=35);return q}
Q[C>c?T++:--h]=[n,y,q,C]}}}
return''}
for(let k=0;k<4;k++)M+=V(k)
f.mkdirSync(O+p,{recursive:!0});f.writeFileSync(O+p+'solution.txt',M)}
