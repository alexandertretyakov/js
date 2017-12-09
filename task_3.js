//---------------------------------------------    #3    ---------------------------------------------

/*Задание №3.
Работая с объектом house из файла access.htm получить выражение возвращающие:
1) год постройки дома
2) материал стен дома
3) список имен жильцов квартиры №20
4) цвет холодильника из квартиры 20
5) количество каналов у телевизора из квартинры 20
6) цвет пылесоса из квартиры 20
7) цвет револьвера лежащего в серванте из квартиры 20
8) какая программа идет в текущий момент по телевизору в квартире номер 20
9) список имен жильцов из квартиры 25
10) имя кота из квартиры 25
11) цвет шкафа из квартиры 25
12) цвет перчаток лежащих в шкафу из квартиры 25

все эти выражения должны быть однострочными. т.е. без переносов строк и символа ;
с переменной house можно играть в консоли. она уже создана.*/


/*
1)
 house.godPostroyki
 1964

2)
 house.materialSten
 "кирпич"

3)
 house.kvartiry[0].ktoZivet;
 ["Марина", "Егор", "Олег"]

4)
 house.kvartiry[0].predmetiVnutri[0].zvet;
 "зеленый"

5)
 house.kvartiry[0].predmetiVnutri[1].kolichestvoKanalov;
 90

 6)house.kvartiry[0].predmetiVnutri[2].zvet;
 "белый"

 7)
 house.kvartiry[0].predmetiVnutri[3].otkrit().poluchitSoderzhimoe()[2].color;
 "черный"

 8)
 house.kvartiry[0].predmetiVnutri[1].vkluchit().poluchitTekushuuProgrammu();
 "Окна с Дмитрием Нагиевым"

 9)
 house.kvartiry[1]. ktoZivet;
 (3) ["Саша", "Лида", "Юля"]

 10)
 house.kvartiry[1].predmetiVnutri[2].name;
 "Пушок"

 11)
 house.kvartiry[1].predmetiVnutri[3].zvet;
 "коричневый"

 12)
 house.kvartiry[1].predmetiVnutri[3].otkrit().poluchitSoderzhimoe()[2].color;
 "белый" */

