appMain.controller('productController', function ($scope, $rootScope, $element, $location, $window, productService, alertsService) {
    $scope.initController = function (productId) {
        $element.removeClass("hidden");
        var obj = {
            Id: productId,
        };
        $scope.initObject();
        productService.getProduct(obj, $scope.getProductCompleted, $scope.getError);
    }
    $scope.initProductGroupController = function () {
        $scope.productGroup = window["ProductGroup"];
    }
    $scope.initProductController = function () {
        $scope.product = window["Product"];
    }
    $scope.initProductBestSlideController = function (ProductBestSlides) {
        $scope.ProductBestSlides = window[ProductBestSlides];;
        $scope.ConfigProduct = window['ConfigProduct'];
    }
    $scope.initProductHotSlideController = function (ProductHotSlides) {
        $scope.ProductHotSlides = window[ProductHotSlides];
        $scope.ConfigProduct = window['ConfigProduct'];
    }
    $scope.initProductNewSlideController = function (ProductNewSlides) {
        $scope.ProductNewSlides = window[ProductNewSlides];
        $scope.ConfigProduct = window['ConfigProduct'];
    }
    $scope.initProductPromotionSlideController = function (ProductPromotionSlides) {
        $scope.ProductPromotionSlides = window[ProductPromotionSlides];
        $scope.ConfigProduct = window['ConfigProduct'];
    }
    $scope.AddToCard = function (product) {
        AddToCard(product.Id, 1);
    }
    $scope.initObject = function () {
    }
    $scope.getProductVariant = function () {
        var obj = {
            ProductId: $scope.Id
        };
        for (var i = 0; i < $scope.ProductOptions.length; i++) {
            if (i == 0)
                obj.Option1 = $scope.ProductOptions[i].OptionValueSelect;
            else if (i == 1)
                obj.Option2 = $scope.ProductOptions[i].OptionValueSelect;
            else if (i == 2)
                obj.Option3 = $scope.ProductOptions[i].OptionValueSelect;
        }
        productService.getProductVariant(obj, $scope.getProductVariantCompleted, $scope.getError);
    }
    $scope.getProductVariant = function (index, value) {
        var obj = {
            ProductId: $scope.Id
        };
        $scope.ProductOptions[index].OptionValueSelect = value;

        for (var i = 0; i < $scope.ProductOptions.length; i++) {
            if (i == 0)
                obj.Option1 = $scope.ProductOptions[i].OptionValueSelect;
            else if (i == 1)
                obj.Option2 = $scope.ProductOptions[i].OptionValueSelect;
            else if (i == 2)
                obj.Option3 = $scope.ProductOptions[i].OptionValueSelect;
        }

        productService.getProductVariant(obj, $scope.getProductVariantCompleted, $scope.getError);
    }
    $scope.getProductCompleted = function (response) {
        $scope.Id = response.Data.Id;
        $scope.ProductGroupId = response.Data.ProductGroupId;
        $scope.Name = response.Data.Name;
        $scope.Code = response.Data.Code;
        $scope.SKU = response.Data.SKU;
        $scope.Serial = response.Data.Serial;
        $scope.Barcode = response.Data.Barcode;
        $scope.Index = response.Data.Index;
        $scope.Image = response.Data.Image;
        $scope.Price = response.Data.Price;
        $scope.PriceDiscount = response.Data.PriceDiscount;
        $scope.Percent = response.Data.Percent;

        $scope.Summary = response.Data.Summary;
        $scope.IsBest = response.Data.IsBest;
        $scope.IsHot = response.Data.IsHot;
        $scope.IsNew = response.Data.IsNew;
        $scope.IsPromotion = response.Data.IsPromotion;

        $scope.IsTrackingInventory = response.Data.IsTrackingInventory ? 1 : 0;
        $scope.Quantity = response.Data.Quantity;
        $scope.Weight = response.Data.Weight;
        $scope.IsShipping = response.Data.IsShipping;
        $scope.AllowPurchaseWhenSoldOut = response.Data.AllowPurchaseWhenSoldOut;
        $scope.IsVariant = response.Data.IsVariant;
        $scope.VariantId = response.Data.VariantId;

        $scope.MetaKeyword = response.Data.MetaKeyword;
        $scope.MetaTitle = response.Data.MetaTitle;
        $scope.MetaDescription = response.Data.MetaDescription;
        $scope.Inactive = response.Data.Inactive;

        $scope.ProductImages = response.Data.ModelShared_ProductImage;
        $scope.ProductTabs = response.Data.ModelShared_ProductTab;
        $scope.ProductOptions = response.Data.ModelShared_ProductOption;
        $scope.ProductVariants = response.Data.ModelShared_ProductVariant;
        setTimeout(function () {
            $('.sp-wrap').smoothproducts();
        }, 0);
    }
    $scope.getProductVariantCompleted = function (response) {
        //$scope.variant = {
        //    Id: response.Data.Id,
        //    Name: response.Data.Name,
        //    Code: response.Data.Code,
        //    Image: response.Data.Image,
        //    Inactive: response.Data.Inactive,
        //    Index: response.Data.Index,
        //    IsShipping: response.Data.IsShipping,
        //    IsTrackingInventory: response.Data.IsTrackingInventory ? 1 : 0,
        //    AllowPurchaseWhenSoldOut: response.Data.AllowPurchaseWhenSoldOut,
        //    Option1: response.Data.Option1,
        //    Option2: response.Data.Option2,
        //    Option3: response.Data.Option3,
        //    Option4: response.Data.Option4,
        //    Option5: response.Data.Option5,
        //    OptionValue1: response.Data.OptionValue1,
        //    OptionValue2: response.Data.OptionValue2,
        //    OptionValue3: response.Data.OptionValue3,
        //    OptionValue4: response.Data.OptionValue4,
        //    OptionValue5: response.Data.OptionValue5,
        //    Price: response.Data.Price,
        //    PriceDiscount: response.Data.PriceDiscount,
        //    ProductId: response.Data.ProductId,
        //    ProductName: response.Data.ProductName,
        //    ProductImage: response.Data.ProductImage,
        //    Quantity: response.Data.Quantity,
        //    SKU: response.Data.SKU,
        //    Barcode: response.Data.Barcode,
        //    Weight: response.Data.Weight,
        //    Timestamp: response.Data.Timestamp,
        //}
        $scope.VariantId = response.Data.Id;
        $scope.SKU = response.Data.SKU;
        $scope.Image = response.Data.Image;
        $scope.Price = response.Data.Price;
        $scope.PriceDiscount = response.Data.PriceDiscount;

        $scope.IsTrackingInventory = response.Data.IsTrackingInventory ? 1 : 0;
        $scope.Quantity = response.Data.Quantity;
        $scope.Weight = response.Data.Weight;
        $scope.IsShipping = response.Data.IsShipping;
        $scope.AllowPurchaseWhenSoldOut = response.Data.AllowPurchaseWhenSoldOut;

        //goi ham set active image
        if ($scope.Image != null)
            ActiveImage($scope.Image);
    }
    $scope.getError = function (response) {
    }
    $scope.updateError = function (response) {
    }
    $scope.addToCard = function () {
        var obj = {
            ProductId: $scope.Id,
            Quantity: $scope.InputQuantity,
            VariantId: $scope.VariantId,
        };
        productService.addToCard(obj, $scope.addToCardCompleted, $scope.updateError);
    }
    $scope.addToCardCompleted = function (response) {
        $scope.getCart();
    }
    $scope.addToCardBuy = function () {
        var obj = {
            ProductId: $scope.Id,
            Quantity: $scope.InputQuantity,
            VariantId: $scope.VariantId,
        };
        productService.addToCard(obj, $scope.addToCardBuyCompleted, $scope.updateError);
    }
    $scope.addToCardBuyCompleted = function (response) {
        $window.location.href = "/thanh-toan.html";
    }
    $scope.getCart = function () {
        productService.getCart($scope.getCartCompleted, $scope.getError);
    }
    $scope.getCartCompleted = function (response) {
        $scope.Amount = response.Data.Amount;
        $scope.DiscountAmount = response.Data.DiscountAmount;
        $scope.OrderDetails = response.Data.ModelSM_OrderDetail;
        $('#modalMyCart').modal('toggle');
    }
    $scope.updateItemCart = function (obj) {
        productService.updateItemCart(obj, $scope.updateItemCartCompleted, $scope.getError);
    }
    $scope.removeItemCart = function (obj) {
        productService.removeItemCart(obj, $scope.removeItemCartCompleted, $scope.getError);
    }
    $scope.updateItemCartCompleted = function (response) {
        $scope.Amount = response.Data.Amount;
        $scope.DiscountAmount = response.Data.DiscountAmount;
        $scope.OrderDetails = response.Data.ModelSM_OrderDetail;
    }
    $scope.removeItemCartCompleted = function (response) {
        $scope.Amount = response.Data.Amount;
        $scope.DiscountAmount = response.Data.DiscountAmount;
        $scope.OrderDetails = response.Data.ModelSM_OrderDetail;
    }

    $scope.UpQuantity = function () {
        $scope.InputQuantity += 1;
    }
    $scope.DownQuantity = function () {
        if ($scope.InputQuantity > 1)
            $scope.InputQuantity -= 1;

    }
    $scope.goToByScroll = function (index) {
        $('html,body').animate({
            scrollTop: $("#tab" + index).offset().top - 50
        }, 'slow');
    }

    $scope.callMe = function () {
        if ($scope.CustomerPhone == null || $scope.CustomerPhone == "")
            return;
        var obj = {
            Name: $scope.CustomerPhone,
            Address: "",
            Phone: $scope.CustomerPhone,
            Email: "info@runtime.vn",
            Title: "Gọi lại cho khách hàng để tư vấn sản phẩm",
            Content: "Gọi lại cho khách hàng để tư vấn sản phẩm: " + $scope.Name + ". Đường dẫn sản phẩm: " + window.location.href,
        };
        productService.callMe(obj, $scope.callMeCompleted, $scope.callMeError);
    }
    $scope.callMeCompleted = function (response) {
        $scope.CustomerPhone = "";
        $('#modalCallMe').modal('toggle');
    }
    $scope.callMeError = function (response) {
        alert(response.Message);
    }
});