const task3Element = document.getElementById('task-3');

function noArgs() {
    alert("любой текст");
}

function showName(name) {
    alert(name);
}

noArgs();

showName("Пашуня");

task3Element.onclick = noArgs;

alert(concatThreeStr("str", "in", "g"));

function concatThreeStr(a, b, c) {
    concat = a + b + c;
    return concat;
}