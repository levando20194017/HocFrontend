appMain.service('productService', ['ajaxService', function (ajaxService) {
    this.getProduct = function (data, successFunction, errorFunction) {
        ajaxService.AjaxGetWithData(data, "/api/product/getproduct", successFunction, errorFunction);
    };
    this.getProductVariant = function (data, successFunction, errorFunction) {
        ajaxService.AjaxPost(data, "/api/product/getproductvariant", successFunction, errorFunction);
    };
    this.getCart = function (successFunction, errorFunction) {
        ajaxService.AjaxGet("/api/order/getcart", successFunction, errorFunction);
    };
    this.addToCard = function (model, successFunction, errorFunction) {
        ajaxService.AjaxPost(model, "/api/order/addtocard", successFunction, errorFunction);
    };
    this.updateItemCart = function (model, successFunction, errorFunction) {
        ajaxService.AjaxPut(model, "/api/order/updateitemcart", successFunction, errorFunction);
    };
    this.removeItemCart = function (id, successFunction, errorFunction) {
        ajaxService.AjaxPut(id, "/api/order/removeitemcart", successFunction, errorFunction);
    };
    this.callMe = function (model, successFunction, errorFunction) {
        ajaxService.AjaxPost(model, "/api/contact/sendcontact", successFunction, errorFunction);
    };
}]);









