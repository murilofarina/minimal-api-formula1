import fastify from "fastify";

const server = fastify({ logger : true });

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" }
]

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 3, name: "Gabriel Bortoletto", team: "Audi Racing" }
]

server.get("/teams", async(request, response) => {
    response.type("application/json").code(200);

    return [ teams ];
});

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200);

    return [ drivers ]
});

server.listen({ port: 3636 }, () => {
    console.log("Server init");
})
