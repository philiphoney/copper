const onerror = true

window.onerror = function (message, source, lineno, colno, error) {
    if (!(message === "TypeError: i.createPopper is not a function") && onerror) {
        var html = `
            <div class="alert-w" role="alert">
               <div><b>${message}</b> <br> <a target="_blank" href="${source}">${source}</a> Line: ${lineno} Column: ${colno}</div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', html);
        document.title = `(! Error)`;
    }
};

function p(value) {
    console.log(value)
}

function display(value) {
    var display = `
    <div class="display" role="alert">
        <div>${value}</div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', display);
}