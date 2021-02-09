import http = require('http');

http.createServer((req, res) => {
    switch (req.url){
        case "/api/v1/customers":
            switch (req.method){
                case "GET":
                    res.end('Get All Customers');
                    break;
                case "POST":
                    res.end('Save Customer');
                    break;
                case "DELETE":
                    res.end('Delete Customer');
                    break;
                case "PUT":
                    res.end('Update Customer');
                    break;
                default:
                    res.end("I don't know");
            }
            break;
        case '/api/v1/items':
            switch (req.method){
                case "GET":
                    res.end('Get All Items');
                    break;
                case "POST":
                    res.end('Save Item');
                    break;
                case "DELETE":
                    res.end('Delete Item');
                    break;
                case "PUT":
                    res.end('Update Item');
                    break;
                default:
                    res.end("I don't know");
            }
            break;
    }
}).listen(5050, ()=> console.log("Server has been started"));
