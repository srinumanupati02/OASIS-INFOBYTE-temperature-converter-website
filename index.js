const  calculateTemp = () =>{
    document.getElementById('resultContainer').innerHTML = ' ';
    const tempValue = document.getElementById('temp').value;
    console.log(tempValue);
    const tempSelector = document.getElementById('temp_diff');
    console.log(tempSelector);

    const valueTemp =tempSelector.options[tempSelector.selectedIndex].value;
    console.log(valueTemp);

    const celToFah = (val) =>{
        let Fahrenheit =Math.round((val * 9/5) + 32);
        return Fahrenheit;
    }

    const fahToCel = (val) =>{
        let Celsius =Math.round((val -32) *5/9);
        return Celsius;
    }

    let results;
    if(tempValue == '') alert('Please enter something');

    if(valueTemp == 'cel' && tempValue != ''){
        results = celToFah(tempValue);
        document.getElementById('resultContainer').innerHTML = `= ${results} Fahrenheit`;
    }
    else if(valueTemp == 'fah' && tempValue != ''){
        results = fahToCel(tempValue);
        document.getElementById('resultContainer').innerHTML = `= ${results} Celsius`;
    }

}