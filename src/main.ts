import './style.css'
//import './bases/01-const-let'
//import './bases/02-template-string'
//import './bases/03-object-literal'
//import './bases/04-arrays'
//import './bases/05-functions'
//import './bases/06-obj-destructuring'
//import './bases/07-array-destructuring'
import './bases/08-imp-exp'
import { OwnerEnum } from './data/heroes.data';
import { getHeroesByOwner } from './bases/08-imp-exp';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
  <div>
    <h1>Hola Mundo</h1>
    
    <div>
      <form id="miFormulario">
        <div>
          <label for="nombre">Nombre:</label>
          <input id="nombre" name="nombre" type="text" required />
        </div>

        <div style="margin-top: 10px;">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
`
console.log(getHeroesByOwner(OwnerEnum.Marvel));