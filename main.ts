import f from'node:fs'
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env
const S=t=>{
const w=t.indexOf('\n'),a=[],g=[],b=[];let p=0,i=0
for(const c of t)c!='\n'&&(a[i]=c=='#',c>='*'&&c<'@'&&g.push(i),(c=='$'|c=='*')&&b.push(i),(c=='@'|c=='+')&&(p=i),i++)
const E=[-w,w,-1,1],K='udlr',z=[],m=[],H=[]
let T=0
const B3=(A,f,Y,B)=>{let u=f;const q=[f];Y[f]=++T;for(const x of q){u=x<u?x:u;for(let k=4;k--;){const y=x+E[k];A[y]|Y[y]==T|B.includes(y)||(Y[y]=T,H[y]=k,q.push(y))}}return u}
const V=(A,G,B,P)=>{const Y=x=>x==G+''
const Q=[B],y=[P],N=[0],X={};X[B+K+B3(A,P,z,B)]=1
let f=-1
for(let e=0;f<0&&e<Q.length&&Q.length<25e4;e++){const b=Q[e];B3(A,y[e],z,b);const H=T;
for(let j=b.length;j--&&f<0;){const x=b[j];
for(let k=4;k--;){const t=x+E[k];if(z[2*x-t]!=H|A[t]|b.includes(t))continue;
const N2=[...b];N2[j]=t;N2.sort((q,v)=>q-v);const K2=N2+K+B3(A,x,m,N2)
X[K2]||(X[K2]=1,Q.push(N2),y.push(x),N.push(e*4+k),Y(N2)&&(f=Q.length-1))}}}
if(f<0)return null
let M='',e=f
for(;e>0;){const n=N[e],k=n&3,p=n>>2,q=Q[p],w2=y[p],u2=y[e];let s='';
B3(A,w2,m,q);for(let x=u2-E[k];x!=w2;x-=E[H[x]])s=K[H[x]]+s;
M=s+K[k]+M;e=p}
return{M,P:y[f]}}
let J2=[],q=p/w|0,K2=x=>(x<q*w?0:2)+(x%w/7|0)
for(const [A,L]of[[b,'B'],[g,'G']])for(const x of A)(J2[K2(x)]??={B:[],G:[]})[L].push(x)
J2=J2.filter(Boolean)
let pl=p,M='',v
for(const r of J2){const A2=[...a]
for(const q of J2)q!==r&&q.B.forEach(x=>A2[x]=1)
if(!(v=V(A2,r.G,r.B,pl)))return''
M+=v.M;pl=v.P;r.B=r.G}
return M}
for(const d of f.readdirSync(I)){f.mkdirSync(O+'/'+d,{recursive:true});f.writeFileSync(O+'/'+d+'/solution.txt',S(f.readFileSync(I+'/'+d+'/level.txt')+''))}
