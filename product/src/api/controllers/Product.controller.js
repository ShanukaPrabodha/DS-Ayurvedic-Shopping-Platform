 import ProductService from "../services";

 // Insert one product
 export const insertProduct = async (request, response, next) => {

    const{productId,productName,description, supplier,supplierName,stripUserId,weight,variants,productImage}=request.body;
     await ProductService.insertProduct(
        {
        productId,
        productName,
        description,
        supplier,
        supplierName,
        stripUserId,
        weight,
        variants,
        productImage
        
     })
         .then((data) => {
             request.handleResponse.successRespond(response)(data);
             next();
         })
         .catch((error) => {
             request.handleResponse.errorRespond(response)(error.message);
             next();
         });
 };
 
 // Get all Product
 export const getAllProducts = async (request, response, next) => {
     await ProductService.getAllProducts("products")
         .then(async (data) => {
             request.handleResponse.successRespond(response)(data);
             next();
         })
         .catch((error) => {
             request.handleResponse.errorRespond(response)(error.message);
             next();
         });
 };
 
 // Get one Product
 export const getOneProduct = async (request, response, next) => {
     await ProductService.getOneProduct(request.params.id)
         .then((data) => {
             request.handleResponse.successRespond(response)(data);
             next();
         })
         .catch((error) => {
             request.handleResponse.errorRespond(response)(error.message);
             next();
         });
 };
 
 // Update one Product
 export const updateProduct = async (request, response, next) => {
     await ProductService.updateProduct(request.params.id, request.body)
         .then((data) => {
             request.handleResponse.successRespond(response)(data);
             next();
         })
         .catch((error) => {
             request.handleResponse.errorRespond(response)(error.message);
             next();
         });
 };
 
 // Delete one Product
 export const deleteProduct = async (request, response, next) => {
     await ProductService.deleteProduct(request.params.id)
         .then((data) => {
             request.handleResponse.successRespond(response)(data);
             next();
         })
         .catch((error) => {
             request.handleResponse.errorRespond(response)(error.message);
             next();
         });
 };
 
 // Search product
 export const searchProducts = async (request, response, next) => {
     await ProductService.searchProducts(request.params.search)
         .then((data) => {
             request.handleResponse.successRespond(response)(data);
             next();
         })
         .catch((error) => {
             request.handleResponse.errorRespond(response)(error.message);
             next();
         });
 };
 