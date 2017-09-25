class TableCreator {
    constructor(options) {
        let { elementId, formId } = options;
        this.holder = document.getElementById(elementId);
        this.form = document.getElementById(formId);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    // creating a table after pushing button Submit
    init() {
        this.form.addEventListener('submit', this.handleSubmit);
    };
    handleSubmit(event) {
        // prevent default action
        event.preventDefault();
        //delete previous table
        this.holder.innerText = '';
        //create table with given rows and columns
        let rows = this.form.querySelector('input[name=rows]').value;
        let cols = this.form.querySelector('input[name=columns]').value;
        let table = this.createTable(rows, cols);
        //set style to the table
        table.classList.add('table', 'table-bordered');
        //append the table into <div id = elementId>
        this.holder.appendChild(table);
    };
    // logic for creating a table
    createTable(rows, columns) {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        // create table content
        for (let i = -1; i < rows; i++) {
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            if (i > -1) {
                th.textContent = `row ${i}`;
                th.dataset.row = i;
            }
            tr.appendChild(th);

            for (let j = 0; j < columns; j++) {
                if (i === -1) {
                    const th = document.createElement('th');
                    th.textContent = `col ${j}`;
                    th.dataset.col = j;
                    tr.appendChild(th);
                } else {
                    const td = document.createElement('td');
                    td.dataset.row = i;
                    td.dataset.col = j;
                    tr.appendChild(td);
                }
            }

            tbody.appendChild(tr);
        };
        table.addEventListener('mouseover', (event) => {
            if (event.target.tagName !== "TD") {
                return;
            }
            let rows = table.querySelectorAll(`[data-row="${event.target.dataset.row}"]`);
            let columns = table.querySelectorAll(`[data-col="${event.target.dataset.col}"]`);
            this.highlightSiblings(rows, columns);
        });
        table.addEventListener('mouseout', (event) => {
            if (event.target.tagName !== "TD") {
                return;
            }
            let rows = table.querySelectorAll(`[data-row="${event.target.dataset.row}"]`);
            let columns = table.querySelectorAll(`[data-col="${event.target.dataset.col}"]`);
            this.muteSiblings(rows, columns);
        });
        table.addEventListener('dblclick', (event) => {
            if (event.target.tagName !== "TD") {
                return;
            }
            if (confirm("Вы уверены, что хотите удалить эту строку?")) {
                let rows = table.querySelectorAll(`[data-row="${event.target.dataset.row}"]`);
                this.deleteRow(rows);
            }
        });

        return table;
    };
    highlightSiblings(rows, columns) {
        for (let i = 0; i < rows.length; i++) {
            rows[i].style.backgroundColor = 'pink';
        };
        for (let i = 0; i < columns.length; i++) {
            columns[i].style.backgroundColor = 'pink';
        };
    };

    muteSiblings(rows, columns) {
        for (let i = 0; i < rows.length; i++) {
            rows[i].style.backgroundColor = '';
        };
        for (let i = 0; i < columns.length; i++) {
            columns[i].style.backgroundColor = '';
        };
    };
    deleteRow(rows) {
        for (let i = 0; i < rows.length; i++) {
            rows[i].remove();
        };
    };
};
window.onload = () => {
    const options = {
        elementId: "tableHolder",
        formId: "tableCreatorForm"
    };
    const tableCreator = new TableCreator(options);
    tableCreator.init();
};