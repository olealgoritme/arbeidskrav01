# ARBEIDSKRAV 01
-- av Ole Algoritme (C) 2018
-------------------------------

Kravspesifikasjoner:


Innledende informasjon
• Plagiat skal ikke forekomme. All kode skal du selv ha produsert.

Vurderingen vektlegger blant annet:
• Kommentering av kode.
• Navngivning av kode.
• Kjørbar kode.

• Besvarelsen skal leveres via Canvas som en komprimert fil av typen .zip.

Oppgavetekst: verifisering av postnummer

I denne oppgaven skal du ta utgangspunkt i det følgende datasettet. Du skal ikke legge til
egne elementer i dette datasettet.

var potentialPostalCodes = ["231", "0186", "35012", "7011", "01304"];

Oppgaven din er å skrive et program som kan skille de elementene av datasettet som
kvalifiserer som postnummer, fra de som ikke gjør det. I denne oppgaven stilles det ett
enkelt krav til om hvorvidt et nummer kvalifiserer som et postnummer: det må inneholde
fire (4) siffer. 

Dette må derfor sjekkes for i kode. Altså, eksempelvis ansees "0186" og "7011"
fra datasettet som gyldige fordi de oppfyller kravet om lengde. Derimot er "231", "35012" og
"01304" eksempler fra datasettet som ikke oppfyller kravet. 

I utgangspunktet skal hvilke som helst string-baserte nummer kunne verifiseres som postnummer ved bruk av
programmet du koder.
For hvert potensielle postnummer i datasettet skal det skrives ut i console-vinduet
hvorvidt nummeret kvalifiserer som postnummer eller ei. Basert på det utdelte datasettet
skal altså console-vinduet inneholde følgende meldinger når programmet kjøres:

Følgende nummer kvalifiserer ikke som postnummer: 231
Følgende nummer kvalifiserer som postnummer: 0186
Følgende nummer kvalifiserer ikke som postnummer: 35012
Følgende nummer kvalifiserer som postnummer: 7011
Følgende nummer kvalifiserer ikke som postnummer: 01304

-------------------------------
OPPGAVESETT SLUTT
