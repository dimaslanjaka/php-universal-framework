$("form").on("submit", function (e) {
    e.preventDefault();
});

$("select#country").select2Country();

/**
 * @type {HTMLCollectionOfHTMLFormElement}
 */
var testForm = document.forms["test"];
var testInput = testForm.getElementsByTagName("input");
for (const key in testInput) {
    if (Object.hasOwnProperty.call(testInput, key)) {
        const input = testInput[key];
        new formSaver2(input, { debug: true });
    }
}

var testTextarea = testForm.getElementsByTagName("textarea");
for (const key in testTextarea) {
    if (Object.hasOwnProperty.call(testTextarea, key)) {
        const textareaSingle = testTextarea[key];
        new formSaver2(textareaSingle, { debug: true });
    }
}
