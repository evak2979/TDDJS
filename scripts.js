function TestFunction(){
    var someFuncA = function(){
        console.log('A')
        return 'B';
    }

    var x = 'C';

    this.someFuncB = function(){
        console.log(x);
    }    
}

var tf = new TestFunction();
tf.someFuncB();