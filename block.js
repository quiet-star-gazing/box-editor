Blockly.defineBlocksWithJsonArray([
  {
    type: "world_say",
    message0: "向所有玩家发送一条信息 %1",
    args0: [
      {
        type: "input_value",
        name: "MESSAGE",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "向所有玩家发送一条消息",
    helpUrl: "",
  },
  {
    type: "world_projectname",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "地图名称", 
      },
    ],
    output: "String",
    colour: 230,
    tooltip: "地图的名称",
    helpUrl: "",
  },
  {
    type: "world_url",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "地图URL",
      },
    ],
    output: "String",
    colour: 230,
    tooltip: "地图的URL（也就是链接）",
    helpUrl: "",
  },
  {
    type: "world_currentTick",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "当前Tick计数",
      },
    ],
    output: "Number",
    colour: 230,
    tooltip: "世界当前的Tick计数",
    helpUrl: "",
  },
  {
    type: "world_entityQuota",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "当前还可以建造的实体数量",
      },
    ],
    output: "Number",
    colour: 230,
    tooltip: "世界上还可以建造的实体数量",
    helpUrl: "",
  },
  {
    type: "world_worldentitylength",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "当前存在的实体数量",
      },
    ],
    output: "Number",
    colour: 230,
    tooltip: "世界上当前存在的实体数量",
    helpUrl: "",
  },
  {
    type: "voxels_set",
    message0: "设置 x %1 y %1 z %1  的方块ID为 %1",
    args0: [
      {
        type: "input_value",
        name: "X",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "设置地形上的方块",
    helpUrl: "",
  },
  {
    type: "voxels_get",
    message0: "读取 x %1 y %1 z %1 的方块，返回方块ID",
    args0: [
      {
        type: "input_value",
        name: "X",
      },
    ],
    output: "Number",
    colour: 230,
    tooltip: "读取地形上的方块",
    helpUrl: "",
  },
  {
    type: "voxels_name",
    message0: "将方块ID %1 转换为名称",
    args0: [
      {
        type: "input_value",
        name: "ID",
      },
    ],
    output: "String",
    colour: 230,
    tooltip: "将方块ID转换为方块名称",
    helpUrl: "",
  },
  {
    type: "voxels_id",
    message0: "将方块名称 %1 转换为ID",
    args0: [
      {
        type: "input_value",
        name: "ID",
      },
    ],
    output: "Number",
    colour: 230,
    tooltip: "将方块ID转换为方块名称",
    helpUrl: "",
  },
]);
Blockly.JavaScript["world_say"] = function (block) {
  var text_message = block.getFieldValue("MESSAGE");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "MESSAGE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return "world.say(" + value_name + ");\n";
};

Blockly.JavaScript["world_projectname"] = function () {
  return "world.projectName";
};

Blockly.JavaScript["world_url"] = function () {
  return "world.url";
};

Blockly.JavaScript["world_currentTick"] = function () {
  return "world.currentTick";
};

Blockly.JavaScript["world_entityQuota"] = function () {
  return "world.entityQuota";
};

Blockly.JavaScript["world_worldentitylength"] = function () {
  return `world.querySelectorAll("*").length`;
};

Blockly.JavaScript["voxels_set"] = function (block) {
  var x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var z = Blockly.JavaScript.valueToCode(
    block,
    "Z",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var id = Blockly.JavaScript.valueToCode(
    block,
    "ID",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return "voxels.setVoxelId(" + x + "," + y + "," + z + "," + id + ");\n";
};

Blockly.JavaScript["voxels_get"] = function (block) {
  var x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var z = Blockly.JavaScript.valueToCode(
    block,
    "Z",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return "voxels.getVoxelId(" + x + "," + y + "," + z + ");\n";
};

Blockly.JavaScript["voxels_id"] = function (block) {
  var id = Blockly.JavaScript.valueToCode(
    block,
    "ID",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return "voxels.id(" + id + ");\n";
};

Blockly.JavaScript["voxels_name"] = function (block) {
  var id = Blockly.JavaScript.valueToCode(
    block,
    "ID",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return "voxels.name(" + id + ");\n";
};
