export const getOrderQty = (orderItems, menuId) => {
    let orderItem = orderItems.filter(a => a.menuId == menuId)

    if (orderItem.length > 0) {
        return orderItem[0].qty
    }

    return 0
}