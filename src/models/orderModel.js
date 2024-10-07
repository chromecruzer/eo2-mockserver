// models/orderModel.js
let orders = [];
// Function to create static order data
const generateStaticOrders = () => {
    for (let i = 1; i <= 10; i++) {
        const order = {
            id: `order-${i}`,
            poNumber: `PO-${i}`,
            comments: `Comment for order ${i}`,
            orderTime: new Date().toISOString(),
            type: i % 2 === 0 ? "Consignment" : "Standard", // Alternate between types
            items: [
                {
                    id: `item-${i}-1`,
                    lineNumber: 1,
                    hospitalReference: `HR-${i}`,
                    productSku: `SKU-${i}`,
                    productDescription: `Product Description ${i}`,
                    productEan: `EAN-${i}`,
                    serialNumber: `SN-${i}`,
                    expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year from now
                    quantity: Math.floor(Math.random() * 10) + 1, // Random quantity between 1 and 10
                    comments: `Item comment ${i}-1`,
                },
                {
                    id: `item-${i}-2`,
                    lineNumber: 2,
                    hospitalReference: `HR-${i}-2`,
                    productSku: `SKU-${i}-2`,
                    productDescription: `Product Description ${i}-2`,
                    productEan: `EAN-${i}-2`,
                    serialNumber: `SN-${i}-2`,
                    expiryDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString(), // 6 months from now
                    quantity: Math.floor(Math.random() * 10) + 1,
                    comments: `Item comment ${i}-2`,
                },
            ],
        };
        orders.push(order);
    }
};

// Call the function to populate the orders array
generateStaticOrders();
console.log(JSON.stringify(orders, null, 2))

// Display a simplified table format
const simplifiedOrders = orders.map(order => ({
    id: order.id,
    poNumber: order.poNumber,
    comments: order.comments,
    orderTime: order.orderTime,
    type: order.type,
    itemCount: order.items.length
}));

console.table(simplifiedOrders);

export const createOrder = (order) => {
    orders.push(order);
    return order;
};

export const getOrders = () => {
    return orders;
};

export const getOrderById = (id) => {
    return orders.find(order => order.id === id);
};
