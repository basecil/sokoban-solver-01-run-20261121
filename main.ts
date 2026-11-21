import f from'node:fs'
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env;
const S=t=>{
const w=t.indexOf('\n'),a=[],g=[],b=[];let p=0,i=0
for(const c of t){if(c=='\n')continue;a[i]=c=='#';c>='*'&&c<'@'&&g.push(i);(c=='$'|c=='*')&&b.push(i);(c=='@'|c=='+')&&(p=i);i++}
const E=[-w,w,-1,1],K='udlr',o=[],z=[],m=[],v=[],H=[],c=(b,v)=>b.forEach(x=>o[x]=v);
let T=0;
const B3=(A,f,Y)=>{let u=f;const q=[f];Y[f]=++T;for(const x of q){if(x<u)u=x;for(let k=0;k<4;k++){const y=x+E[k];if(A[y]||o[y]||Y[y]==T)continue;Y[y]=T;v[y]=x;H[y]=K[k];q.push(y)}}return u};
const V=(A,G,B,P)=>{const u=new Set(G),Y=x=>x.every(v=>u.has(v));
const Q=[B],y=[P],N=[-1],D2=[0],X=new Map();c(B,1);X.set(B+'|'+B3(A,P,z),0);c(B,0);
let f=-1;
for(let e=0;f<0&&e<Q.length;e++){const b=Q[e];c(b,1);B3(A,y[e],z);const H=T;
for(let j=0;j<b.length&&f<0;j++){const x=b[j];
for(let k=0;k<4;k++){const d=E[k],t=x+d;if(z[x-d]!=H||A[t]||o[t])continue;
o[x]=0;o[t]=1;
const N2=b.slice();N2[j]=t;N2.sort((q,v)=>q-v);const K2=N2+'|'+B3(A,x,m);
o[t]=0;o[x]=1;if(X.has(K2))continue;
if(Q.length>2.5e5)return null;
X.set(K2,Q.length);Q.push(N2);y.push(x);N.push(e);D2.push(k);
if(Y(N2)){f=Q.length-1;break}}}
c(b,0)}
if(f<0)return null;
const W2=[];for(let e=f;e>0;e=N[e])W2.push(e);
let M='',pl=P,B2=B,s;
for(const e of W2.reverse()){const k=D2[e],u2=y[e];
c(B2,1);B3(A,pl,m);s='';for(let x=u2-E[k];x!=pl;x=v[x])s=H[x]+s;M+=s;c(B2,0);
M+=K[k];pl=u2;B2=Q[e]}
return{M,P:pl}};
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
