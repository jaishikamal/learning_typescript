class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity: number
  ) {}
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
    console.log(`${product.name} added successfully.`);
  }

  viewProducts(): void {
    console.log("\nInventory Products:");
    
    this.products.forEach((product) => {
      console.log(
        `ID: ${product.id}, Name: ${product.name}, Price: Rs.${product.price}, Quantity: ${product.quantity}`
      );
    });
  }

  updateStock(id: number, quantity: number): void {
    const product = this.products.find((p) => p.id === id);

    if (product) {
      product.quantity += quantity;
      console.log(
        `${product.name} stock updated. New Quantity: ${product.quantity}`
      );
    } else {
      console.log("Product not found.");
    }
  }

  getTotalValue(): number {
    return this.products.reduce(
      (total, product) =>
        total + product.price * product.quantity,
      0
    );
  }
}

// Create Inventory
const inventory = new Inventory();

// Add Products
inventory.addProduct(
  new Product(1, "Laptop", 50000, 5)
);

inventory.addProduct(
  new Product(2, "Mouse", 1000, 20)
);

inventory.addProduct(
  new Product(3, "Keyboard", 2000, 10)
);

// View Products
inventory.viewProducts();

// Update Stock
inventory.updateStock(2, 5);

// Total Value
console.log(
  `\nTotal Inventory Value: Rs.${inventory.getTotalValue()}`
);