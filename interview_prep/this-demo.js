function show() {
    console.log(this);
  }
  
  //show(); // In browser, prints: Window {...}
  
  const user = {
    name: 'Abid',
    show: function(){
        console.log(this.name);
    }
  }

  user.show();