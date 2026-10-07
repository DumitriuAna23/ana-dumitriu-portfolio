# Ana Dumitriu — portofoliu

Codul complet al versiunii cu 9 pagini. Site static: HTML, CSS și JavaScript. Nu necesită React, npm, build, bază de date sau chei API.

## Deschidere și modificare pe Windows

1. Extrage arhiva, de exemplu în `C:\Users\User\Documents\Proiecte\ana-portfolio`.
2. În Visual Studio Code: File > Open Folder, apoi alege folderul `ana-portfolio` (cel cu index.html și style.css).
3. Deschide un terminal în acest folder. Dacă ai Python instalat, rulează:

```powershell
py -m http.server 5500 --bind 127.0.0.1
```

Dacă sistemul folosește comanda `python`, înlocuiește `py` cu `python`.
4. Deschide `http://localhost:5500` în browser. Pentru oprirea serverului: Ctrl+C în terminal.
5. Modifică fișierul dorit, salvează cu Ctrl+S și reîncarcă pagina. Pentru CSS rămas în cache, folosește Ctrl+F5.

Alternativ, poți folosi un server local din editor, cu folderul acesta ca rădăcină. Nu deschide paginile doar prin dublu click: linkurile începând cu `/` au nevoie de un server local.

## Unde modifici

| Fișier | Conținut |
|---|---|
| index.html | Home |
| about/index.html | About și competențe |
| work/index.html | Experiență profesională |
| education/index.html | Studii |
| projects/index.html | Lista proiectelor |
| projects/autodiagnose-ai/index.html | AutoDiagnose AI și galeria sa |
| projects/elio/index.html | ELIO și galeria sa |
| contact/index.html | Date de contact |
| cover-letter/index.html | Scrisoarea de intenție |
| style.css | Culori, fonturi, spațiere, animații și layout mobil |
| app.js | Meniu mobil, apariții la scroll, progres, imprimare |

Meniul și subsolul sunt în fiecare pagină HTML. Dacă schimbi numele unui element din meniu, actualizează-l în toate cele 9 pagini. Culorile principale sunt definite la începutul style.css, în `:root`. La sfârșitul fișierului sunt regulile pentru varianta cu pagini separate, care pot suprascrie regulile inițiale.

## Fotografii

Creează folderul `assets/images/` în rădăcina proiectului. Copiază acolo imaginile, de exemplu `elio-front.jpg` și `autodiagnose-dashboard.webp`. Recomandat: denumiri fără spații și fotografii comprimate.

În pagina proiectului caută un element `<figure class="photo-slot">`. Înlocuiește doar blocul `<div class="photo-surface">...</div>` cu:

```html
<img class="project-photo" src="/assets/images/elio-front.jpg"
     alt="Robotul ELIO văzut din față" loading="lazy">
```

Păstrează `<figcaption>` și schimbă descrierea. Adaugă la sfârșitul style.css:

```css
.project-photo {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
  border: 1px solid var(--line);
}
```

Spațiile actuale sunt rezervate pentru imagini; nu există un panou de administrare sau un sistem de încărcare a fotografiilor.

## Contact și CV

În contact/index.html înlocuiește blocul „Contact details coming soon” cu datele pe care dorești să le publici. Exemplu pentru email (înlocuiește adresa demonstrativă):

```html
<a href="mailto:adresa-ta@example.com">adresa-ta@example.com</a>
```

Poți adăuga un CV real în `assets/cv/Ana-Dumitriu-CV.pdf` și un link:

```html
<a class="button" href="/assets/cv/Ana-Dumitriu-CV.pdf" download>Download CV</a>
```

Înainte să distribui site-ul, verifică toate formulările, perioadele de studiu și muncă și scrisoarea de intenție. Acestea folosesc informațiile disponibile în conversație; CV-ul tău actual nu a fost încă furnizat.

## Salvare pe GitHub

Poți păstra acest folder într-un repository propriu, de exemplu `ana-portfolio`. Creează un repository gol în contul tău. Apoi, dacă ai Git instalat și autentificarea configurată, rulează din folder:

```powershell
git init
git add .
git commit -m "Add personal portfolio"
git branch -M main
git remote add origin https://github.com/DumitriuAna23/ana-portfolio.git
git push -u origin main
```

Folosește URL-ul exact al repository-ului pe care l-ai creat. Pentru modificările următoare:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

Arhiva nu include un repository Git deja configurat, istoricul Git sau credențiale. Repository-ul din exemplu nu a fost creat automat.

## Copie locală vs. site online

Site-ul existent: https://ana-dumitriu-portfolio.nmrdumitriu.chatgpt.site

Salvarea pe laptop sau încărcarea pe GitHub NU actualizează automat acel link. Copia exportată este independentă de site-ul găzduit în ChatGPT. Pentru actualizarea acelui site, adu fișierele modificate în conversație și cere aplicarea lor. Pentru publicare independentă, poți conecta repository-ul tău la un serviciu de găzduire statică.

Fișierele sunt pregătite pentru găzduire la rădăcina unui domeniu. Dacă alegi o găzduire într-un subfolder (de exemplu `/ana-portfolio/`), linkurile și căile absolute trebuie adaptate.
