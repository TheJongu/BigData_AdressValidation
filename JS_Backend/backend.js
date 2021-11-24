const http = require('http');
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File not found!')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log('An error occured', error)
    } else {
    console.log("Server is listening on port: " + port)
    }
})



// from https://stackoverflow.com/questions/51708296/how-to-connect-hive-server-using-node-js
// const hive = require('hive-driver');
// const { TCLIService, TCLIService_types } = hive.thrift;
// const client = new hive.HiveClient(
//     TCLIService,
//     TCLIService_types
// );
// const utils = new hive.HiveUtils(
//     TCLIService_types
// );
 
// client.connect(
//     {
//         host: 'host name',
//         port: 10000
//     },
//     new hive.connections.TcpConnection(),
//     new hive.auth.PlainTcpAuthentication({
// 	    username: 'user name',
// 	    password: 'password'
//     })
// ).then(async client => {
//     const session = await client.openSession({
//         client_protocol: TCLIService_types.TProtocolVersion.HIVE_CLI_SERVICE_PROTOCOL_V10
//     });
//     const operation = await session.executeStatement(
//         'SELECT * FROM orders LIMIT 10'
//     );
//     await utils.waitUntilReady(operation, false, () => {});
//     await utils.fetchAll(operation);

//     console.log(
//         utils.getResult(selectDataOperation).getValue()
//     );

//     await operation.close();
//     await session.close();
// });