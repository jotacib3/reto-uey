import productsQuery from "./graphql/products.query";
import rentableQuery from "./graphql/rentable.query";
import spaceQuery from "./graphql/space.query";
import productsApiRest from "./rest/get-products";
import rentableApiRest from "./rest/get-rentable-product";
import spaceApiRest from "./rest/get-space-product";

export default [
    productsQuery,
    rentableQuery,
    spaceQuery,
    productsApiRest,
    rentableApiRest,
    spaceApiRest,
];