/*
  * simple trick to have asynchronous functions with callbacks in a loop, 
  * with the constraint that step i+1 is called only after step i's callback 
  * has return.
  */

var async_loop = function (fundamental){

    var loop = function (i, length, after){
	if (i >= length) {
	    if (!after) return;
	    if (after.args && after.func) 
		after.func.apply(after.this, after.args);
	    return;
	}
	fundamental(loop, i, length, after );
    };

    return loop;
};


var test = async_loop(function (loop, i, length, after) {
    var k = (Math.floor(Math.random()*10)%5)+1;
    setTimeout(function() {
	console.log(i,k);
	loop(i+1, length, after);}, k*1000);
    return;
});

module.exports = async_loop;
