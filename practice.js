// (example) Write a function that accepts two number arguments and adds them
// together.
var add = function (a,b) {
  return a+b;
};

console.log("1) "+ add(2,3));

// Create a function that takes in a cost and a quantity and outputs the total
// pre-tax cost for that quantity of items at the given price. For example
//
//     var preTaxTotal = totalCost(5, 5.99); // 5 items at 5.99
//     //=> 29.950000000000003

function totalCost(quantity, price) {
    var total = quantity * price;
    return total;
};
console.log("2) "+totalCost(5,5.99));
// Write a function that takes a rank and a suit as input, and returns a string
// representation of a card. For example, it should behave as follows
//
//     cardString("ace", "spades");
//     //=> ace of spades
//
//     cardString("queen", "hearts");
//     //=> queen of hearts
function string() {
	var st1="ace";
	var st2="spade";
	var st3="queen";
	var st4="hearts"
	console.log("3(a) "+st1 +" of "+ st2);
	console.log("3(b) "+st3 + " of "+st4);
};
string()


// Write a function called `openTag` that accepts a tag name and returns an
// opening HTML tag with that tag name. For example,
//
//     openTag("p");
//     //=> <p>
//
//     openTag("div");
//     //=> <div>

function ot()
{
	var st1="p";
	var st2="div";
	console.log("4(a) " +"<"+st1+">");
	
	console.log("4(b) " +"<"+st2+">");
};
ot()
	


// Similarly, write a function called `closingTag` that returns the closing HTML tag
// with that name.
//
//     closeTag("p");
//     //=> </p>
//
//     closeTag("div");
//     //=> </div>
function ct()
{
	var st1="p";
	var st2="div";
	console.log("5(a) " +"</"+st1+">");
	
	console.log("5(b) " +"</"+st2+">");
};
ct()


// Write a function called `toTagString` that accepts two inputs: a tag name,
// and the string content, and returns the content tagged with the specified
// string.  For example:
//
//     toTagString("li", "list item 1");
//     //=> <li>list item 1</li>
//
//     // the 'em' tag is for 'emphasis'
//     toTagString("em", "this is important stuff");
//     //=> <em>this is important stuff</em>
//
// Although I won't be testing for this, your code should re-use the functions that
// you created in the previous section.
function ts()
{
	var t="li";
	var c="list item 1";
	var t1="em";
	var c1="this is important stuff";
	console.log("6(a)<"+t+">"+c+"</"+t+">");
	console.log("6(b)<"+t1+">"+c1+"</"+t1+">");
};
ts()

	
