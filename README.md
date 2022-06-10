#vueJsTest
****
#Installation :
a ajouter les commandes
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

