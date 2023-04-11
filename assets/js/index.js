window.onload = function() {

    load_form_data();
    format_sales_number();
    
};
function load_form_data()
{
    document.getElementById('sale_number').value = 'a';
    // alert(sale_number);
}

function format_sales_number()
{
    var timestamp = new Date().getTime();
    console.log(timestamp);
}