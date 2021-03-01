export const editOrder = (action, menuId, price) => {
    let orderList = orderItems.slice()
    let item = orderList.filter(a => a.menuId == menuId)

    if (action == "+") {
        if (item.length > 0) {
            let newQty = item[0].qty + 1
            item[0].qty = newQty
            item[0].total = item[0].qty * price
        } else {
            const newItem = {
                menuId: menuId,
                qty: 1,
                price: price,
                total: price
            }
            orderList.push(newItem)
        }

        setOrderItems(orderList)
    } else {
        if (item.length > 0) {
            if (item[0]?.qty > 0) {
                let newQty = item[0].qty - 1
                item[0].qty = newQty
                item[0].total = newQty * price
            }
        }

        setOrderItems(orderList)
    }
}