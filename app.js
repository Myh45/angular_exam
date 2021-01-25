(function () {
'use strict';
    
    var mainList=[
      {
          mark:"DINO",
          quantity:"8",
          show: true
      },
        {
          mark:"RASTISHKA",
          quantity:"200",
            show: true
        },
        {
          mark:"ZOTT",
          quantity:"300",
            show: true
        },
        {
          mark:"AKTYVIA",
          quantity:"5",
            show: true
        },
        {
          mark:"CHYDO",
          quantity:"96",
            show: true
        },
        {
          mark:"DANISIMO",
          quantity:"110",
            show: true
        },
        {
          mark:"LAKTIALE",
          quantity:"15",
            show: true
        }
    ];
    
angular.module('ShoppingListApp',[])
    .controller('ShoppingListController',ShoppingListController)
    .factory('ShoppingService', ShoppingService);
    
    ShoppingListController.$inject = ['ShoppingService'];
    
    function ShoppingListController(ShoppingService){
        var shopController = this;
        
        var shoppingService=ShoppingService();
        
        shopController.item=shoppingService.getItems();
        
        shopController.remove=function(index){
            shoppingService.remove(index);
        };
        shopController.hide=function(index){
            shoppingService.hide(index);
        }
        
    }
    
    function ShoppingListService(){
        var shopService=this;
        
        shopService.remove=function(itemIndex){
            mainList.splice(itemIndex,1);
        };
        
        shopService.getItems=function(){
            return mainList;
        };
        shopService.hide=function(index){
            mainList[index].show=false;
        };
    }
    
    function ShoppingService(){
        var factory = function(){
            return new ShoppingListService();
        };
        return factory;
    }
    
    
})();