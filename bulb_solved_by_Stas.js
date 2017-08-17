'use strict';

// Actions
const actions = {
    'and': (a, b) => {
        let result = Boolean(a && b);
        console.log(`Action: "and": (${a} && ${b}), Result: ${result}`);
        return result;
    },
    'or': (a, b) => {
        let result = Boolean(a || b);
        console.log(`Action: "or": (${a} || ${b}), Result: ${result}`);
        return result;
    },
    'xor': (a, b) => {
        let result = Boolean(a ^ b);
        console.log(`Action: "xor": (${a} ^ ${b}), Result: ${result}`);
        return result;
    },
    'not': (a) => {
        let result = Boolean(!a);
        console.log(`Action: "not": (!${a}), Result: ${result}`);
        return result;
    }
}

// //ES5
// function a(arg) {
//     //...
// };
// var a = function(arg) {
//     //...
// };
// //ES6
// const a = (arg) => {
//     //...
// };
// const a = (arg) => arg * 2;


/**
 * Compute Gate
 * @param {Object} gate
 * @returns {Boolean}
 */
const computeGate = (gate) => {
    // Validate property gate.name:
    if ('gate' !== gate.name) {
        throw TypeError(`Gate MUST have property "name" equal "gate", given name is: "${gate.name}"!`);
    }
    // Validate property gate.type:
    if (typeof actions[gate.type] === 'undefined') {
        throw TypeError(`Action "${gate.type}" is not found! Available actions are: "${Object.keys(actions).join('", "')}"!`);
    }

    return actions[gate.type].apply(this, computeStates(gate.children));
};

/** 
 * Compute States
 * @param {Array} children
 * @returns {Array} states
 */
const computeStates = (children) => {
    let states = [];

    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        if ('gate' === child.name) {
            states.push(computeGate(child));
        }
        if ('switch' === child.name) {
            states.push(child.state);
        }
    }

    return states;
};

// Dataset
const data = {
    name: 'gate',
    type: 'xor',
    children: [{
            name: 'gate',
            type: 'xor',
            children: [{
                    name: 'switch',
                    state: false
                },
                {
                    name: 'gate',
                    type: 'or',
                    children: [{
                            name: 'switch',
                            state: true
                        },
                        {
                            name: 'gate',
                            type: 'and',
                            children: [{
                                    name: 'switch',
                                    state: false
                                },
                                {
                                    name: 'gate',
                                    type: 'not',
                                    children: [{
                                        name: 'switch',
                                        state: false
                                    }]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'gate',
            type: 'or',
            children: [{
                    name: 'switch',
                    state: true
                },
                {
                    name: 'gate',
                    type: 'and',
                    children: [{
                            name: 'switch',
                            state: false
                        },
                        {
                            name: 'gate',
                            type: 'not',
                            children: [{
                                name: 'switch',
                                state: false
                            }]
                        }
                    ]
                }
            ]
        }
    ]
};
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

// Test
console.log('================');

let result = computeGate(scheme1);

console.log('================');
console.log('Result: ', result);