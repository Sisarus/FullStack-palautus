
globaalisti asennetaan json-server
npm install -g json-server


Käynnistä servu
npx json-server --port=3001 --watch db.json

Axios tallennettiin sovelluksen suoritusaikaiseksi riippuvuudeksi, sillä ohjelman suoritus edellyttää kirjaston olemassaoloa
npm install axios

JSON Server taas asennettiin sovelluskehityksen aikaiseksi riippuvuudeks
npm install json-server --save-dev

"server": "json-server -p3001 --watch db.json"