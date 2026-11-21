import f from'node:fs'
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env;
const S=t=>{
const w=t.indexOf('\n'),a=[],g=[],b=[];let p=0,i=0
for(const c of t){if(c=='\n')continue;a[i]=c=='#';c>='*'&&c<'@'&&g.push(i);(c=='$'|c=='*')&&b.push(i);(c=='@'|c=='+')&&(p=i);i++}
const E=[-w,w,-1,1],K='udlr',z=[],m=[],H=[];
let T=0;
const B3=(A,f,Y,B)=>{for(const x of B)A[x]=1;let u=f;const q=[f];Y[f]=++T;for(const x of q){u=x<u?x:u;for(let k=4;k--;){const y=x+E[k];A[y]|Y[y]==T||(Y[y]=T,H[y]=k,q.push(y))}}for(const x of B)A[x]=0;return u};
const V=(A,G,B,P)=>{const Y=x=>x==G+'';
const Q=[B],y=[P],N=[-4],X={};X[B+K+B3(A,P,z,B)]=1;
let f=-1;
for(let e=0;f<0&&e<Q.length&&Q.length<2.5e5;e++){const b=Q[e];B3(A,y[e],z,b);const H=T;
for(let j=b.length;j--&&f<0;){const x=b[j];
for(let k=4;k--;){const t=x+E[k];if(z[2*x-t]!=H|A[t]|b.includes(t))continue;
const N2=[...b];N2[j]=t;N2.sort((q,v)=>q-v);const K2=N2+K+B3(A,x,m,N2);
X[K2]||(X[K2]=1,Q.push(N2),y.push(x),N.push(e*4+k),Y(N2)&&(f=Q.length-1))}}}
if(f<0)return null;
let M='',e=f;
for(;e>0;){const n=N[e],k=n%4,p=n/4|0,q=Q[p],w2=y[p],u2=y[e];let s='';
B3(A,w2,m,q);for(let x=u2-E[k];x!=w2;x-=E[H[x]])s=K[H[x]]+s;
M=s+K[k]+M;e=p}
return{M,P:y[f]}};
const J=()=>{const q=p/w|0,R2=[],U=new Set();
for(const x of b){if(U.has(x))continue;const s=x<q*w?-1:1,V2=new Set([x]),S2=[x];
for(const z2 of S2)for(const e of E){const y=z2+e;if(!a[y]&&!V2.has(y)&&((y/w|0)-q)*s>0){V2.add(y);S2.push(y)}}
const B2=b.filter(v=>V2.has(v)&&U.add(v));
R2.push({B:B2,G:g.filter(v=>V2.has(v))})}
return R2};
const J2=J();
let pl=p,M='';
for(const r of J2){const A2=a.slice();
for(const q of J2)if(q!==r)for(const x of q.D?q.G:q.B)A2[x]=1;
const v=V(A2,r.G,r.B,pl);
if(!v)return'';
M+=v.M;pl=v.P;r.D=1}
return M};
for(const d of f.readdirSync(I)){f.mkdirSync(O+'/'+d);f.writeFileSync(O+'/'+d+'/solution.txt',S(f.readFileSync(I+'/'+d+'/level.txt')+''))}
