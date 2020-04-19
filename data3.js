const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

// creat a server
const app = express()
app.use(bodyParser.json())
// Create database instance and start server
const adapter = new FileAsync('db.json')
low(adapter)  .then(db => {
    // Routes
    // GET /posts/:id
    app.get('/products/:id', (req, res) => {
      const product = db.get('products')
        .find({ id: req.params.id })
        .value()

      res.send(product)
    })

        // POST /posts
        app.post('/products', (req, res) => {
            db.get("products").push({id:1, type: "shoes", price: 2000, company :"Nike"}).write();
          
          })
      



          db.defaults({ products: [] }).write()
          db.get("products").push({id:1, type: "shoes", price: 2000, company :"Nike"}).write();
          db.get("products"). push({id:2, type: "T-shirt", price: 700, company :"Azar"}).write();
          db.get("products"). push({id:3, type: "shoes", price: 900, company :"Addidas"}).write();
          db.get("products"). push({id:4, type: "T-shirt", price: 500, company :"Team-mate"}).write();
          db.get("products"). push({id:4, type: "T-shirt", price: 500, company :"Team-mate"}).write();


     app.get('/', (req, res) => res.send('Hello'))

























const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) })