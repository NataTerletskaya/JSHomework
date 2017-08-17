var scheme1 = {
    name: 'gate',
    type: 'xor',
    children: [{
        name: 'gate',
        type: 'and',
        children: [{
            name: 'switch',
            state: true
        }, {
            name: 'switch',
            state: false
        }]
    }, {
        name: 'gate',
        type: 'not',
        children: [{
            name: 'switch',
            state: true
        }]
    }]
};

var scheme2 = {
    name: 'gate',
    type: 'and',
    children: [{
        name: 'gate',
        type: 'or',
        children: [{
            name: 'switch',
            state: true
        }, {
            name: 'gate',
            type: 'xor',
            children: [{
                name: 'switch',
                state: false
            }, {
                name: 'gate',
                type: 'not',
                children: [{
                    name: 'switch',
                    state: true
                }]
            }]
        }]
    }, {
        name: 'gate',
        type: 'not',
        children: [{
            name: 'switch',
            state: true
        }]
    }]
};

var scheme3 = {
    name: 'gate',
    type: 'xor',

    children: [{
        name: 'gate',
        type: 'not',
        children: [{
            name: 'switch',
            state: false
        }]
    }, {
        name: 'gate',
        type: 'or',
        children: [{
            name: 'gate',
            type: 'or',
            children: [{
                name: 'switch',
                state: false
            }, {
                name: 'gate',
                type: 'and',
                children: [{
                    name: 'switch',
                    state: false
                }, {
                    name: 'switch',
                    state: true
                }]
            }]
        }, {
            name: 'switch',
            state: false
        }]
    }]
};


function or(a, b) {
    return a || b;
}

function and(a, b) {
    return a && b;
}

function xor(a, b) {
    return a ^ b;
}

function not(a) {
    return !a;
}
/*=====================*/

var actions = {
    or: or,
    and: and,
    xor: xor,
    not: not
};

// Solution
var scheme = {
    name: 'gate',
    type: 'xor',
    children: [{
        name: 'switch',
        state: true
    }, {
        name: 'gate',
        type: 'or',
        children: [{
            name: 'switch',
            state: false
        }, {
            name: 'switch',
            state: true
        }]
    }]
};
var state = [];
var history = [];

function x(scheme) {

    if (scheme.name === 'gate') {
        var action = scheme.type;

        var item = { action: action, values: [] };

        for (var i = 0; i < scheme.children.length; i++) {

            if (scheme.children[i].name === 'switch') {
                item.values.push(scheme.children[i].state);
            } else {
                x(scheme.children[i]);
            }

            state.push(item);
        }
    }
}
x(scheme);
console.log(state);

function computeState(scheme, action, prevState) {
    var switchState;
    console.log('_____________________________');

    if (scheme.name === 'gate') {
        action = scheme.type;
    }

    if (scheme.name === 'switch') {
        switchState = scheme.state;
        state.push(switchState)
    }

    if (actions[action] && typeof switchState !== 'undefined') {
        var result = actions[action](switchState, prevState);
        state.push(result);

        history.push({ action: action, values: [switchState, prevState] });

        console.log('switchState', switchState);
        console.log('prevState', prevState);
        console.log('action', action);
        console.log('result', result);
        console.log('state', state);

        return result;
    }

    if (scheme.children.length) {
        for (var i = 0; i < scheme.children.length; i++) {
            var prevResult = state.pop();
            return computeState(scheme.children[i], action, prevResult);
        }
    }
}
// var result = computeState(scheme);

// console.log('===================', result, '===================');
// console.log(state, history);