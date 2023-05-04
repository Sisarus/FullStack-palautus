# osan 0 tehtävien vastaukset


## 0.4: Uusi muistiinpano

```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content":"","date":"2023-05-03T20:41:50.981Z"}, ...]
    deactivate server
    
    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
   
    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    browser->>server: POST  https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Playload note, redirect to /notes
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
```
## 0.5: Single Page App

```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML dokument
    deactivate server
    
    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
   
    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content":"","date":"2023-05-03T20:59:30.612Z"}, ... ]
    deactivate server
    
```
