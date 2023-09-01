
function Ejecutar() {
    getTings().then(Respuesta => {
        var impresion = `\n-------------\nnombre: ${Respuesta.nombre} \nID: ${Respuesta.ID} \ncantidad: ${Respuesta.cantidad} \npara mayor información acceda a la consola`;
        console.log(impresion);
        alert(impresion);
    });
}
function getTings() {
    return __awaiter(this, void 0, void 0, function* () {
        //Productos
        const data1 = yield fetch('https://rickandmortyapi.com/api/character');
        //Pedidos
        const data2 = yield fetch('https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json');
        const producto = yield data1.json();
        const nombre = producto
            .map((pro) => pro.nombreProducto);
        const ID = producto
            .map((pro) => pro.idproducto);
        console.log(nombre);
        console.log(ID);
        const pedido = yield data2.json();
        const cantidad = pedido
            .map((ped) => ped.cantidad);
        const pp = pedido
            .map((ped) => ped.idproducto);
        console.log(pp);
        console.log(pedido);
        console.log(cantidad);
        console.log(cantidad.length);
        var total = [];
        var cantidadn = 0;
        var orden = [];
        for (let i = 0; i < ID.length; i++) {
            total[i] = 0;
            for (let j = 0; j < cantidad.length; j++) {
                cantidadn = parseInt(cantidad[j]);
                if (i + 1 == pp[j]) {
                    total[i] = total[i] + cantidadn;
                }
            }
            console.log(i, total[i], nombre[i]);
            orden[i] = {
                nombre: nombre[i],
                ID: ID[i],
                cantidad: total[i]
            };
            console.log(orden[i]);
        }
        orden.sort((a, b) => b.cantidad - a.cantidad);
        console.log(orden);
        var mejor = orden[0];
        return mejor;
    });
}