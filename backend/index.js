import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) =>{
    res.send('server is ready')
})

app.get('/api/jokes', (req, res)=>{
    const joke = [
        {
            id: 1,
            title: 'joke 1',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: 'joke 2',
            content: 'this is a second joke'
        },
        {
            id: 3,
            title: 'joke 3',
            content: 'this is a third joke'
        },
        {
            id: 4,
            title: 'joke 3',
            content: 'this is a fourth joke'
        },
    ]
    res.send(joke)
})

app.listen(port, ()=>{
    console.log("server is running", port);
    
})