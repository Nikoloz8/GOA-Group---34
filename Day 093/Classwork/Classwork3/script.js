document.getElementById("add-counter").onclick = function () {
    let counterDiv = document.createElement("div");
    counterDiv.className = "counter";

    let count = 0
    let history = [0]
    let index = 0
    let locked = false;
    let countText = document.createElement("p");
    countText.innerText = "Count: " + count;

    let increaseButton = document.createElement("button");
    increaseButton.innerText = "Increase";
    increaseButton.onclick = function () {
        if (!locked) {
            count++;
            history.push(count);
            index = history.length - 1;
            countText.innerText = "Count: " + count;
        }
    };

    let decreaseButton = document.createElement("button");
    decreaseButton.innerText = "Decrease";
    decreaseButton.onclick = function () {
        if (!locked) {
            count--;
            history.push(count);
            index = history.length - 1;
            countText.innerText = "Count: " + count;
        }
    };

    let undoButton = document.createElement("button");
    undoButton.innerText = "Undo";
    undoButton.onclick = function () {
        if (index > 0) {
            index--;
            count = history[index];
            countText.innerText = "Count: " + count;
        }
    };

    let redoButton = document.createElement("button");
    redoButton.innerText = "Redo";
    redoButton.onclick = function () {
        if (index < history.length - 1) {
            index++;
            count = history[index];
            countText.innerText = "Count: " + count;
        }
    };

    let lockCheckbox = document.createElement("input");
    lockCheckbox.type = "checkbox";
    lockCheckbox.onchange = function () {
        locked = lockCheckbox.checked;
    };

    let lockLabel = document.createElement("label");
    lockLabel.innerText = " Lock";

    counterDiv.appendChild(countText);
    counterDiv.appendChild(increaseButton);
    counterDiv.appendChild(decreaseButton);
    counterDiv.appendChild(undoButton);
    counterDiv.appendChild(redoButton);
    counterDiv.appendChild(lockCheckbox);
    counterDiv.appendChild(lockLabel);

    document.getElementById("counter-container").appendChild(counterDiv);
};