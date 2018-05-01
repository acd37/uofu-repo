var mysql = require('mysql')
var inquirer = require('inquirer')

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'bamazon'
});

var itemInCart;
var itemQuantity;
var requestedQuantity;


connection.connect(function(err){
  if (err) throw err;

  displayItems();
})

function displayItems(){
  connection.query("SELECT * FROM products", function(err, res) {
    console.log("Available Products");
    console.log("---------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].ID + ". " + res[i].product_name + ": $" + res[i].price);
    }
    console.log("---------------------------");
    getUserItem();
  });
}

function getUserItem(){
  inquirer
    .prompt({
      name: "product",
      type: "input",
      message: "Please type the product ID for the item you would like to purchase.",
    }).then(function(answer){
          var userItem = answer;
          connection.query("SELECT product_name, price, stock_quantity FROM products WHERE ID=" + userItem.product, function(err, res){
            console.log('Checking stock. Please hold.......');
            console.log('You selected: ' + res[0].product_name);
            console.log('This item currently sells for $' + res[0].price + ' and we have ' + res[0].stock_quantity + ' available in stock.');
            itemInCart = userItem.product;
            itemQuantity = res[0].stock_quantity;

              inquirer
                .prompt({
                  name: 'quantity',
                  type: 'input',
                  message: 'How many items would you like to purchase?'
                }).then(function(answer){
                  requestedQuantity = answer.quantity;
                  alteredStock = (itemQuantity - requestedQuantity);
                  if (requestedQuantity < itemQuantity){
                    completePurchase();
                  } else {
                    console.log('Sorry, there aren\'t enough items for you');
                    connection.end();
                  }

                });
          });
    });
  };

  function completePurchase(){
    inquirer
    .prompt({
      name: 'confirmation',
      type: 'confirm',
      message: 'Do you want to complete this purchase?'
    }).then(function(answer){
      if (answer.confirmation == true){
        var updateStock = "UPDATE products SET stock_quantity=" + alteredStock + " WHERE ID=" + itemInCart;
        connection.query(updateStock, function (err, res){
          console.log('Purchase completed.');
          console.log("---------------------------");
          console.log('Logging off')
          connection.end();
        });
      } else {
        console.log('Purchase aborted');
        console.log("---------------------------");
        console.log('Logging off')
        connection.end();
      }
    });
  }
