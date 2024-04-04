function appendToResult(value) 
{
    document.getElementById("result").value += value;
}

function clearResult() 
{
    document.getElementById("result").value = "";
}

function calculate() 
{
    const expression = document.getElementById("result").value;
    try {
        const result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) 
	{
        document.getElementById("result").value = "Error";
    }
}
  
  
function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    const expression = document.getElementById("result").value;
    try {
        const result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

  
 function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    const expression = document.getElementById("result").value;
    try {
        const result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
