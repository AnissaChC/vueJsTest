#vueJsTest
****
#Installation :

### lancer l'application 
`npm run serve`

### ajout du router
`npm install vue-router`
****
#Remarque Util :
### props :
- contient les input 
- se trouve dans la balise `<script> `du composant fils 
- il se valorise dans le composant père 

Exemple:

`export default {
name: 'HelloWorld',
props: {
msg: String,
},
};`

### components: 
- contient les composant fils a utiliser dans l'html 

Exemple 

`export default {
name: 'App',
components: {
HelloWorld,
},
};`

### pour ajouter la configuartion du SASS :
`npm install node-sass sass-loader --save-d`

et dans la balse style il faut ajouter : 
`lang="scss"`


