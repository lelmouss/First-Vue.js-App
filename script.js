var app = new Vue({
  el: '#app',
  data: {
    header:"Favorite Drinks",
    
    favoriteDrinks: [
      { 
        name: 'Gatorade',
        color: '#00FF00',
        calories: 50,
      },
      { 
        name: 'Coffee',
        color: '#FFA07A',
        calories: 60,
      },
            { 
        name: 'Pepsi',
        color: '#00FFFF',
        calories: 150,
      }
    ]
  },
  
});