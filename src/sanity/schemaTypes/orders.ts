import { defineType, defineField } from "sanity";

export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({ name: "firstName",
       title: "First Name",
        type: "string"
       }),

    defineField({ name: "lastName",
       title: "Last Name",
        type: "string" 
      }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "zipCode", title: "Zip Code", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "cartItem", // 👈 Yeh zaroori hai!
          fields: [
            defineField({
              name: "foodItem",
              title: "Food Item",
              type: "reference",
              to: [{ type: "food" }],
            }),
            defineField({
              name: "quantity",
              title: "Quantity",
              type: "number",
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",
            }),
          ],
        }),
      ],
    }),
    defineField({ name: "total", title: "Total Amount", type: "number" }),
    defineField({ name: "discount", title: "Discount", type: "number" }),
    defineField({ name: "orderDate", title: "Order Date", type: "datetime" }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Success", value: "success" },
          { title: "Dispatch", value: "dispatch" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    }),
  ],
});
