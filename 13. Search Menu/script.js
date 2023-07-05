


let search = () => {
    let myInput = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(myInput) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = 'none';
            }
        }

    }
}

search();