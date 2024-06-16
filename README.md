# Merge 3
Lõpmatu mõistatusmäng, kus on vaja saada kolm või rohkem sama arvuga ruutu ritta, et kombineerida need suurtemateks numbriteks!

![Capture](https://github.com/Neuths/merge3/assets/117487287/6651251d-9654-4ec7-a75e-be0bae87ad76)

## Ott (mina) - suurem osa Javascripti autorist
## Sleep (hüüdnimi, mitte eestlane) - aitas korrigeerida värve CSS-is, et klotsid paremini välja näeks


> **Mängu kirjeldus:**
> Mäng toimub 5x5 ruudustikul, kus tekib juurde uus numbriga 1 ruut iga kord, kui liigutad ruute ringi. Kõik ruudud liiguvad korraga ühe ühiku kaupa selles suunas, mis suunas sa vajutad nooleklahve (või WASD). Kui mängija liigutab 3-5 sama numbriga ruutu kõrvuti, siis kombineeruvad (merge) need suurtemateks numbriteks ja annavad punkte. Ühe käiguga võib kombineeruda mitu ruudu rida, ka nii et tekib ahelreaktsioon. Kui toimub ahelreaktsioon (või tekib uus ruut nii, et automaatselt moodustab kolmese või suurema rea), siis on 0.3 sekundiline paus, et näeks visuaalselt, mis mängus kombineerimise ajal toimub. Klotse ei tule juurde siis, kui sa eelmisel käigul ruute kombineerid. Mäng kontrollib, kas nooleklahve vajutades midagi liigub; kui ei, siis mäng ei lisa uusi ruute mänguväljale. Konsooli vaadates inspect elementi kasutades on võimalik jälgida, mis klotsid mis moodi kombineerisid ja kui palju punkte andsid.
>
> Kui sa suudad tekitada 7 ruudu, siis oled võitnud mängu!


**Õpetused mängimiseks:**
1. Lae kood alla vajutades rohelist "<> Code" nuppu ja tõmba failid *.zip*-ina
2. *Extract*-i failid *.zip*-ist välja kausta
3. Mine kausta merge3 > merge3.html, seda avades peaks mäng ennast käima panema sinu veebibrauseris

<img src="https://github.com/Neuths/merge3/assets/117487287/4f5d4944-8dbb-4f43-bb23-eb833a2bb117.type" width="100">

### Näide ruutude kombineerimisest:
![image](https://github.com/Neuths/merge3/assets/117487287/4f5d4944-8dbb-4f43-bb23-eb833a2bb117)

### Vajutati alla *down arrow* klahvi, kolm ühte kombineerisid kaheks ja andsid 6 punkti:
![image](https://github.com/Neuths/merge3/assets/117487287/7829d84e-7103-4713-9619-7619a29ff089)



Minu parim skoor:
![image](https://github.com/Neuths/merge3/assets/117487287/29c09948-01de-4ccb-a2e4-3aa93ce841f5)







Alguses ma tegin lihtsalt 2048 mängu, suures osas kasutades [*Youtube*-i videot](https://youtu.be/XM2n1gu4530?si=SV-AkKpuo1a7uyLt) ja sealt õppides. Funktsionaalne 2048 mäng on samas repositooriumis ka olemas. Sealt edasi hakkasin arendama enda visiooni järgi ja lisasin kõik vajaliku funktsionaalsuse, mis puudu oli. Peamiselt mergimine ja selle ära tundmine, liikumine, viive (delay) mergimise ajal, punktid ja klahvi vajutuse loogika.
*Mängu tehes ei kasutanud kordagi ChatGPTd, ainult veebi ja teiste inimeste abi.*
