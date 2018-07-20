var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: null,
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err 

    for (var i = 0; i < res.length; i++) {
			console.log(res[i].id, res[i].name, res[i].department, res[i].price, res[i].quantity);
		};
  });
  buyItem();
});

// function to handle posting new items up for auction
function buyItem() {
  // prompt for info about the item being put up for auction
  inquirer.prompt([
    {
      name: "quitOption",
      type: "input",
      message: "Would you would like to buy an item or quit?",
      choices: ["buy an item", "quit"]
    }])
    .then(function (res) {
      console.log(res.quitOption);
      if (res.quitOption === "quit") {
        endBamazon()
      }
      else {
        inquirer.prompt([
          {
            name: "name",
      
            type: "input",
            message: "What item would you buy?"
          },
          {
            name: "amount",
            type: "input",
            message: "How many would you like to purchase?"
          }]).then(function (res) {
            var selection = res.name;
            var amount = parseInt(res.amount)
            connection.query("SELECT * FROM products WHERE id = ?", [selection], function (err, response) {
              if (err) { throw err }
              console.log(response);
              if (amount > response[0].quantity) {
                console.log("That is more quantity than we currently have in stock. Please try again later.")
                buyItem();
              }
              else {
                var newQuantity = response[0].quantity - amount;
                updateProducts(selection, newQuantity);
                buyItem();
              }
            })

          })
      }
    })

}

function showProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err


    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id, res[i].name, res[i].department, res[i].price, res[i].quantity);
    };
  })
}

function updateProducts(id, quantity) {
  connection.query("UPDATE products SET quantity = ? WHERE id = ?", [quantity, id], function (err, res) {
    if (err) { throw err };
  })
  showProducts();
}

// function lowInventory() {
//   connection.query("SELECT * FROM products WHERE quantity < 50", function (err, res) {
//     if (err) {
//       throw err
//     }
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].name, res[i].quantity);
//     }

//   })
// }

function endBamazon() {
  connection.end();
}