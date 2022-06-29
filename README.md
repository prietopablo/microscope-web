# Manuel d'utilisation de Microscope-Web - Version Back

Vous trouverez ci-dessous les étapes, pour mettre en place les éléments nécessaires, afin d'utiliser le Back de cette application :

---

## Installation des dépendances
Pour utiliser correctement l'application, vous aurez besoin d'installer des dépendances, par le biais de NPM, voici comment faire :
```
npm i
```
Cette commande va installer les dépendances enregistrer dans le dossier **package.json**

Vérifier tout de même que vous avez bien de présent les dépendances suivantes, dans le dossier :
- bcrypt
- cors
- dotenv
- express
- express-flash
- express-session
- heroku
- http
- jsonwebtoken
- node-dev
- nodemon
- passport
- passport-local
- pg

---

## Création d'une Database
Le Back utilise une Base de Donnée PostgreSQL, vous aurez donc besoin d'installer **postgresql** sur votre machine, afin de créer le BDD et de vous en servir avec l'application. Une fois cela fait, vous devrez suivre la procédure ci-dessous, afin de mettre en place votre BDD.

- Connectez vous à la base **psql** en tant que super utilisateur
    ```
    sudo -i -u postgres psql
    ```
- Créez ensuite un utilisateur 
    ```
    CREATE USER microscope LOGIN WITH PASSWORD ENCRYPTED 'microscope';
    ```
- Créez la BDD
    ```
    CREATE DATABASE microscope OWNER microscope
    ```
- Déconnectez-vous de la base de donnée
    ```
    Ctrl + D ou \q
    ```
- Vérifiez la connexion à la base de donnée
    ```
    psql -U microscope -d microscope
    ```

Voilà, vous venez de créer la BDD nécessaire à l'utilisation de l'application. Il vous reste maintenant le déploiement du SQL dans cette dernière.

---

## Déploiement de la Base de Donnée
Pour déployer votre SQL dans le BDD, vous aurez besoin d'installer **sqitch** sur votre machine.

Vous pouvez trouver à la racine, dans l'application, un dossier nommé **squich.conf**. Ce dernier contient toutes les informations nécessaires pour le déploiement du SQL dans le BDD (si vous avez nommé votre BDD comme dans la procédure de création. Sinon, vous devrez changer les termes "microscope" par le nom de l'utilisateur, de la database et du mot de passe.).
*Exemple :* 
```
uri = db:pg://<nom de l'utilisateur>:<mot de passe>@localhost:<PORT CHOISI>/<nom de la database>
```

Une fois cela fait, vous n'aurez qu'a faire la commande suivante, pour déployer le SQL dans le BDD et ainsi pouvoir vous servir de l'application :

```
sqitch deploy origin
```
 ---

## Utilisation de l'application
Maintenant que vous avez réalisé toutes les étapes précédentes, vous pouvez passer à l'utilisation de l'application.

Pour commencer, vous pouvez lancer le serveur en local avec la commande suivante :
```
npm run dev
```
Cette commande permet d'actualiser le serveur à chaque modification de code que vous pourriez faire sur l'application.

---

## Liens Utiles
Programmes à installer :
- Postgresql : https://www.postgresql.org/download/
- Sqitch : https://sqitch.org/download/

Documentation :
- Postgresql : https://www.postgresql.org/docs/
- Sqitch : https://sqitch.org/docs/
