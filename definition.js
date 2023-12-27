var digitalPins = [
  [
    "D3",
    "D3"
  ],
  [
    "D4",
    "D4"
  ],
  [
    "D5",
    "D5"
  ],
  [
    "D6",
    "D6"
  ],
  [
    "D7",
    "D7"
  ],
  [
    "D8",
    "D8"
  ],
  [
    "D9",
    "D9"
  ],
  [
    "D10",
    "D10"
  ],
  [
    "D11",
    "D11"
  ],
  [
    "D12",
    "D12"
  ],
  [
    "D13",
    "D13"
  ],
  [
    "D0",
    "D0"
  ],
  [
    "D1",
    "D1"
  ],
  [
    "D2",
    "D2"
  ]
];

Blockly.Blocks["yolouno_ir_create"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      tooltip: "",
      message0: "khởi tạo cảm biến hồng ngoại tại chân %1",
      args0: [
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": digitalPins
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ['ir_rx'];
  }
};

Blockly.Blocks["yolouno_ir_recv"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      tooltip: "",
      message0: "%1 nút %2 trên remote được nhấn",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        },
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolouno_homebit_v3/images/forward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolouno_homebit_v3/images/backward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolouno_homebit_v3/images/turn_left.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolouno_homebit_v3/images/turn_right.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ['ir_rx'];
  }
};

Blockly.Blocks["yolouno_ir_code"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      tooltip: "",
      message0: "%1 đọc tín hiệu số thu được",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ['ir_rx'];
  }
};

Blockly.Blocks["yolouno_ir_raw_code"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      tooltip: "",
      message0: "%1 đọc tín hiệu thu từ remote",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ['ir_rx'];
  }
};

Blockly.Blocks["yolouno_ir_clear"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      tooltip: "",
      message0: "%1 xóa tín hiệu đã thu được",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ['ir_rx'];
  }
};

Blockly.Blocks["yolouno_ir_on_receive"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      message0: "nếu %1 nhận được %2 %3 %4 từ remote",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        },
        {
          variable: "tín hiệu",
          type: "field_variable",
          name: "message",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "ACTION",
        },
      ],
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ['ir_rx'];
  }
};

Blockly.Blocks["yolouno_ir_remote_btn"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      tooltip: "",
      message0: "nút %1",
      args0: [
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolouno_homebit_v3/images/forward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolouno_homebit_v3/images/backward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolouno_homebit_v3/images/turn_left.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolouno_homebit_v3/images/turn_right.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
      ],
      output: "Boolean",
      helpUrl: "",
    });
  }
};


// PYTHON

Blockly.Python["yolouno_ir_create"] = function (block) {
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from yolouno_ir_receiver import *';
  Blockly.Python.definitions_['import_ir_receiver_init'] = 'ir_rx = IR_RX(' + pin + '_PIN)\nir_rx.start()';
  return '';
};

Blockly.Python["yolouno_ir_recv"] = function (block) {
  var remote = block.getFieldValue("remote");
  // TODO: Assemble Python into code variable.
  var code = 'ir_rx.get_code() == IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["yolouno_ir_code"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'ir_rx.get_code()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["yolouno_ir_raw_code"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'ir_rx.get_raw_code()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["yolouno_ir_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'ir_rx.clear_code()\n';
  return code;
};

Blockly.Python["yolouno_ir_remote_btn"] = function (block) {
  var remote = block.getFieldValue("remote");
  // TODO: Assemble Python into code variable.
  var code = 'IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['yolouno_ir_on_receive'] = function (block) {
  var variable_message = Blockly.Python.variableDB_.getName(block.getFieldValue('message'), Blockly.Names.NameType ? Blockly.Names.NameType.VARIABLE : Blockly.Variables.NAME_TYPE);
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');

  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (Blockly.Python.variableDB_.getName(varName, Blockly.Names.NameType ? Blockly.Names.NameType.VARIABLE : Blockly.Variables.NAME_TYPE) != variable_message) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
        Blockly.Names.NameType ? Blockly.Names.NameType.VARIABLE : Blockly.Variables.NAME_TYPE));
    }
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';

  var cbFunctionName = Blockly.Python.provideFunction_(
    'on_ir_receive_callback',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(' + variable_message + ', addr, ext):',
      globals,
    statements_action || Blockly.Python.PASS
    ]);

  var code = 'ir_rx.on_received(' + cbFunctionName + ')\n';
  Blockly.Python.definitions_['on_ir_receive_callback' + '_statement'] = code;

  return '';
};