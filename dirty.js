//
// Have there been any changes
//
var dirty = false;

//
// Made a change, set the Dirty bit
//
function setDirty() {
    dirty = true;
    SaveButton.disabled = false;
    window.onbeforeunload = function() {
        return 'Save changes first?';
    };
}

function save() {
    dirty = false;
    SaveButton.disabled = true;
    window.onbeforeunload = function() {
        return null;
    };
}

function keepChanges() {
    if (dirty) {
        if (! window.confirm('You will lose changes. Are you sure?')) {
            return true;
        }
    }
    return false;
}
