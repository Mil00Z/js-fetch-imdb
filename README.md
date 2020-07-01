# Prologue

Faire un exos commme la météo, avec plus de données et une API réactive dans le traitement !
c'est un copier coller du truc de la météo, je n'ai pas rebossé la requête AJAX et l'histoire de la Promise... car je n'ai pas encore bossé le cours (mais je vais améliorer ça).

## Idée

Récupérer un ou des films suivant la value de l'input (il existe déjà une préselection de value dans le fameux datalist, si tu ne veux pas te faire chier) : c'est de l'exos tests donc j'ai pas bossé sur tout les erreurs possibles de value patati patata... je veux de la donnée et la mettre en forme c'est déjà un bon début pour moi en AJAX :)


Checkbox OFF = > requête sur un film (via le param "t=monFilm" de l'**API OMDB** (*http://www.omdbapi.com*) )
Checkbox ✅ = > ta requête sur jeux de films (les 10 premiers il me semble) qui match en partie avec la value de l'input (via le param "s=monFilm")


J'ai choisi ces deux façons de faire pour m'amuser, je trouvais ça intéressant de voir que le JSON retourné ne se traite pas de la même manière, ça entraine ma logique.


### Beugs
Impossible de dispatcher mes fichiers JS en module, afin de séparer la logique de la requête, les fonctions, et le traitement global.
Il semblerait que ça soit la partie requête qui bloque (j'ai l'erreur de ma **Promise function(reject)** directement au click).

Je ne sais pas comment débeug ça en front, je pensais utiliser VS code mais j'ai la problèmatique ES6 modules VS Vs Code Debeug Extension en Node JS (et cette fois ci, je n'ai pas de babel ou quoi... peut etre que c'est nécessaire ?)


#### Merci d'avance pour ton aide 

