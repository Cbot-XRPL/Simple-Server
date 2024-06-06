
//Import server package
const server= require('node-http-server');

//Server is a refrence to the Server class so you can extend or instatiate it.
const Server=server.Server

//Build Servers
const myServer1=new Server({verbose:true});
const myServer2=new Server({verbose:true});


//Deploy Server
myServer1.deploy(
    {
        port:8001,
        root:'./site1/'
    },
    serverReady
);


function serverReady(server){
   console.log( `Server on port ${server.config.port} is now up`);
}


//Deploy Server
myServer2.deploy( {
    port:8002,
    root:'./site2/'
},
serverReady
);


function serverReady(server){
console.log( `Server on port ${server.config.port} is now up`);
}