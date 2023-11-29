const Usuarios = [
    {
        id: 1,
        nombre: "Javier Yebel",
        correo_electronico: "jyblas@gmail.com"
    },
    {
        id: 2,
        nombre: "Diego Arenas",
        correo_electronico: "darenas@gmail.com"
    },
];

  
export const resolvers = {
Query: {
    Usuarios: () => Usuarios,
    Usuarios: (_: any, args: any) => {
    return Usuarios.find((Usuario) => Usuario.id === args.id);
    },
},
};