



const products = [

    {id:'1',
    name:'Orquídea Phalaenopsis',
    price:2300,
    stock:3  ,
    img:'/img/1.jpg'
    },

    {id:'2',
    name:'Orquídea Dendrobium',
    price:2450,
    stock:4, 
    img:''
    },

    {id:'3',
    name:'Orquídea Calanthe',
    price:4450,
    stock:5, 
    img:''
    },
    {id:'4',
    name:'Orquídea Coelogyne',
    price:2650,
    stock:1, 
    img:''
    },
    {id:'5',
    name:'Orquídea Cymbidium',
    price:650,
    stock:4, 
    img:''
    },
    {id:'6',
    name:'Orquídea Cattleya',
    price:4350,
    stock:6, 
    img:''
    },
    {id:'7',
    name:'Orquídea Vanda',
    price:5350,
    stock:2, 
    img:''
    },
    {id:'8',
    name:'Orquídea Oncidium',
    price:3350,
    stock:2, 
    img:''
    },
    {id:'9',
    name:'Orquídea Zygopetalum',
    price:1250,
    stock:6, 
    img:''
    },
    {id:'10',
    name:'Orquídea simple',
    price:2540,
    stock:7, 
    img:''
    },

]
//simulacion de funcion //

export const getProducts =()=>{

    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)

        },1000)

    })


}