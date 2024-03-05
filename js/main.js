
let orders = []

prices = {
    price: {
        bmw: 430,
        mers: 560,
        tesla: 660,
    },
    fueltype: {
        benzin: 20,
        dizel: 60,
        metan: 30,
        propan: 80,
    },
}

function submitRentCar(event) {
    event.preventDefault()
    const fullname = event.target[0].value
    const phoneNumber = event.target[1].value
    const address = event.target[2].value
    const carName = event.target[3].value
    console.dir(event.target);
    const userOrder = {
        id: orders.length,
        fullname,
        phoneNumber,
        address,
        carName,
        typeCars: null,
        fuel: [],
        total: 0,
    }
    for (let i = 0; i < event.target.length; i++) {
        if (event.target[i].name == "carsName" && event.target[i].checked) {
            userOrder.total += prices.price[event.target[i].id]
            userOrder.typeCars = event.target[i].value;

        }
        if (event.target[i].name == "fuelType" && event.target[i].checked)
            userOrder.total += prices.fueltype[event.target[i].id]
        userOrder.fuel.push = event.target[i].value
    }
    orders.push(userOrder)
    render()
    console.log(orders);
}



function render() {
    const userOrder = document.getElementById("showOrder")
    userOrder.innerHTML = ""
    orders.forEach((user) => {
        const templete = `
    <div  style="display: flex; flex-direction: column; background-color: grey; padding: 10px 15px ; text-align: center; margin-top: 20px; border: 1px solid gray;" id="id: ${user.id}">
    <h1>Client: ${user.fullname}</h1>
    <h3>PhoneNumber: +998${user.phoneNumber}</h3>
    <h3>Address: ${user.address}</h3>
    <h3>Car Name: ${user.carName}</h3> 
    <h1>Total Price: $ ${user.total}</h1>
    <button style="border: 1px solid black; color: black; border-radius: 10px; padding: 5px 10px; border-radius: 5px;" class="btn_primary" onclick="deleted(${user.id})">Delete</button>
    </div>
    `
        userOrder.innerHTML += templete;
    })
}

function deleted(id) {
    let newArr = []
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id != id) {
            newArr.push(orders[i])
        }
    }
    orders = newArr;
    render()
}
