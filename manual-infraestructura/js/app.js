
const rootPath=document.body.dataset.root||'../';
const sidebar=document.querySelector('.sidebar');
document.querySelector('.menu-btn')?.addEventListener('click',()=>sidebar.classList.toggle('open'));
document.querySelector('#theme')?.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('tema',document.body.classList.contains('dark')?'dark':'light')});
if(localStorage.getItem('tema')==='dark')document.body.classList.add('dark');
document.querySelectorAll('.copy-btn').forEach(b=>b.addEventListener('click',async()=>{await navigator.clipboard.writeText(b.parentElement.querySelector('code').innerText);b.innerHTML='<i class="fa-solid fa-check"></i>';setTimeout(()=>b.innerHTML='<i class="fa-regular fa-copy"></i>',1200)}));
document.querySelectorAll('.interactive li').forEach((li,i)=>{const k=location.pathname+'#'+i;if(localStorage.getItem(k))li.classList.add('done');li.addEventListener('click',()=>{li.classList.toggle('done');li.classList.contains('done')?localStorage.setItem(k,'1'):localStorage.removeItem(k)})});
const q=document.querySelector('#globalSearch'), box=document.querySelector('#searchResults');let idx=[];fetch(rootPath+'js/indice-busqueda.json').then(r=>r.json()).then(x=>idx=x).catch(()=>{});
q?.addEventListener('input',()=>{const s=q.value.trim().toLowerCase();if(s.length<2){box.classList.remove('show');return}const res=idx.filter(x=>x.texto.includes(s)||x.titulo.toLowerCase().includes(s)).slice(0,8);box.innerHTML=res.map(x=>`<a href="${rootPath}${x.url}"><strong>${x.titulo}</strong><small>${x.descripcion}</small></a>`).join('')||'<small>Sin resultados.</small>';box.classList.add('show')});
document.addEventListener('click',e=>{if(!e.target.closest('.searchbox')&&!e.target.closest('.search-results'))box?.classList.remove('show')});
