# Publicación en GitHub Pages

1. Cree un repositorio, por ejemplo `manual-tecnico-8soft`.
2. Copie **el contenido** de esta carpeta a la raíz del repositorio. `index.html` debe quedar en la raíz.
3. Ejecute:

```bash
git init
git branch -M main
git add .
git commit -m "Publicación inicial del Manual Técnico 8SOFT"
git remote add origin https://github.com/TU_USUARIO/manual-tecnico-8soft.git
git push -u origin main
```

4. En GitHub abra **Settings → Pages**.
5. Seleccione **Deploy from a branch**, rama `main`, carpeta `/(root)` y guarde.
6. Espere la publicación y abra `https://TU_USUARIO.github.io/manual-tecnico-8soft/`.

## Prueba local

```bash
python3 -m http.server 8000
```

## Actualizaciones

```bash
git add .
git commit -m "Actualizar documentación"
git push
```

## Dominio personalizado

Configure un registro CNAME, por ejemplo `manual.8soft.utec.uy`, apuntando a `TU_USUARIO.github.io`. Luego agréguelo en Settings → Pages y habilite HTTPS.

## Revisión de seguridad

Antes de cada publicación busque: `password`, `secret`, `community`, `token`, `private-key`, `pre-shared-key` y direcciones que no deban divulgarse.
