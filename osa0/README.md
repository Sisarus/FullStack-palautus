osan 0 tehtävien vastaukset


0.4: Uusi muistiinpano

```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: GET /exampleapp/data.json
    server-->>browser HTML document
    
    
    browser->: POST /exampleapp/new_note

    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
```
