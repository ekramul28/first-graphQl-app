import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find((pd) => pd.id === args.productId);
            return result;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const result = db.categories.find((pd) => pd.id === args.categoryId);
            return result;
        },
    },
    Product: {
        category: (parent, args, context) => {
            const result = db.categories.find((pd) => pd.id === parent.categoryId);
            return result;
        },
    },
};
