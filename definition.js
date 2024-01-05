Blockly.Blocks["uno_ir_on_receive"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      message0: "cảm biến IR %1 nhận tín hiệu remote %2 %3 %4",
      args0: [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": digitalPins
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
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
  }
};

Blockly.Python['uno_ir_on_receive'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');
  statements_action = Blockly.Python.prefixLines(statements_action, Blockly.Python.INDENT+Blockly.Python.INDENT);

  var globals = buildGlobalString(block);

  var cbFunctionName = Blockly.Python.provideFunction_(
    'on_ir_receive_callback',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      globals,
      Blockly.Python.INDENT + 'while True:',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'async for ir_cmd, ir_addr in ir_rec.queue:',
      statements_action || Blockly.Python.PASS,
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'await asleep_ms(50)'
    ]);

  Blockly.Python.definitions_['import_ir_receiver'] = 'from ir_receiver import *';
  Blockly.Python.definitions_['init_ir_receiver'] = 'ir_rec = IR_RX(' + pin + '_PIN, None)';
  Blockly.Python.definitions_['task_ir_receiver'] = 'create_task(' + cbFunctionName + '())';
  Blockly.Python.definitions_['deinit_ir_receiver'] = 'ir_rec.stop()';

  return '';
};

Blockly.Blocks["uno_ir_recv"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      tooltip: "",
      message0: "nút %1 trên remote được nhấn",
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
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/forward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/backward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_left.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_right.svg",
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
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_ir_recv"] = function (block) {
  var remote = block.getFieldValue("remote");
  // TODO: Assemble Python into code variable.
  var code = 'ir_cmd == IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["uno_ir_recv_custom"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      tooltip: "",
      message0: "nhận được mã IR %1",
      args0: [
        { type: "input_value", name: "CODE" },
      ],
      output: "Boolean",
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_ir_recv_custom"] = function (block) {
  var ir_code = Blockly.Python.valueToCode(block, 'CODE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ir_cmd == ' + ir_code;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["uno_ir_value"] = {
  init: function () {
    this.jsonInit({
      colour: "#BDB76B",
      tooltip: "",
      message0: "đọc mã IR nhận được",
      args0: [
      ],
      output: "",
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_ir_value"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'ir_cmd';
  return [code, Blockly.Python.ORDER_NONE];
};