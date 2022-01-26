/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

// const url = "https://platzi-avo.vercel.app/api/avo";
const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

appNode.addEventListener('click', ( event ) => {
    if(event.target.nodeName === 'H2') {
        alert(event.target.textContent);
    }
});


const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
}


//PROMESAS
//Web api
//Conectarnos al servidor
window.
    fetch( `${baseUrl}/api/avo` )
    //Procesar la respuesta y convertirla a JSON
    .then((response) => response.json())
    //JSON -> Data -> Renderizar información en el navegador
    .then((responseJson) => {
        const todoItems = [];
        // console.log(responseJson);
        responseJson.data.forEach((avo) => {
            console.log(avo.name);
            //Crear imagen
            const image = document.createElement('img');
            image.className = 'h-16 w-16 md:h-24 rounded-full mx-auto md:mx-0 md:mx-6';
            //URL de la imagen
            image.src = `${baseUrl}${avo.image}` ;
            //Crear titulo
            const title = document.createElement('h2');
            title.className = 'text-lg text-center text-gray-800 font-bold';
            title.textContent = avo.name;
            //Si son pocos elementos no hay problema pero si ya son muchos items se debe realizar por delegación de eventos
            // title.addEventListener('click', () => {
            //     alert(avo.name);
            // });
            //Crear precio
            const price = document.createElement('div');
            price.className = 'text-gray-800 text-center';
            price.textContent = formatPrice(avo.price);

            const priceAndTitle = document.createElement('div');
            priceAndTitle.className = 'text-center md:text-left';
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);

            const card = document.createElement('div');
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(image, priceAndTitle);
            // container.append( card );
            // document.body.appendChild(container);
            todoItems.push( card );
        });
        console.log(todoItems);
        appNode.append(...todoItems);
    });



//ASYN/AWAIT
// async function fetchData() {
//     const response = await fetch(url);
//     const resp = await response.json();
//     const todoItems = [];
//     resp.forEach(avo => {
//         console.log(avo.name);
//         //Crear imagen
//         const image = document.createElement('img');
//         //Crear titulo
//         const title = document.createElement('h2');
//         //Crear precio
//         const price = document.createElement('div');

//         const container = document.createElement('div');
//         container.append(image,title, price );

//         todoItems.push(container);
//     });

//     console.log(data);
// }



// fetchData();