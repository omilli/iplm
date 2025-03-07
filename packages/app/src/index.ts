import './style.scss'
import PouchDB from 'pouchdb';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Hello World
  </div>
`

const localDB = new PouchDB('models')
const remoteDB = new PouchDB('http://localhost:3000/modeldb/models')

localDB.sync(remoteDB, {
  live: true
}).on('complete', function () {
  console.log('in sync!')
})