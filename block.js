Blockly.defineBlocksWithJsonArray([
  {
    type: "world_say",
    message0: "向全体玩家广播一条消息 %1",
    args0: [
      {
        type: "input_value",
        name: "MESSAGE",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "world_projectname",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "NAME",
        text: "地图名称",
      },
    ],
    output: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
]);
Blockly.JavaScript["world_say"] = function (block) {
  //我看看
  var text_message = block.getFieldValue("MESSAGE");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "MESSAGE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return "world.say(" + value_name + ");\n";
};

Blockly.JavaScript["world_projectname"] = function (block) {
  return "world.projectName";
};
