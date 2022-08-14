/* —————————————— 自定义积木块设置 —————————————— */
Blockly.defineBlocksWithJsonArray([
  {
    type: "world_onplayerjoin",
    message0: "当有玩家加入时 参数1(选填) %1 参数2(选填) %2",
    args0: [
      {
        type: "field_input",
        name: "parameter1",
        text: "entity",
      },
      {
        type: "field_input",
        name: "parameter2",
        text: "",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    colour: 210,
    tooltip: "",
    helpUrl: "",
  },
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
    tooltip: "地图的URL（也就是地图链接）",
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
    colour: 255,
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
    colour: 255,
    tooltip: "世界上当前存在的实体数量",
    helpUrl: "",
  },
  {
    type: "world_onEntityDestroy",
    message0: "当实体被 %1 时 %2 %3",
    args0: [
      {
        type: "field_dropdown",
        name: "NAME",
        options: [
          ["创建", "create"],
          ["销毁", "destroy"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
        check: ["entity", "tick"],
      },
    ],
    colour: 255,
    tooltip: "当创建或销毁实体时触发的事件",
    helpUrl: "",
  },
  {
    type: "voxels_setid",
    message0: "设置 X %1 Y %2 Z %3 的方块ID为 %4 旋转码（0~3）为 %5",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
      {
        type: "field_input",
        name: "ID",
        text: "127",
      },
      {
        type: "field_input",
        name: "rid",
        text: "0",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 30,
    tooltip: "放一个方块",
    helpUrl: "",
  },
  {
    type: "voxels_setname",
    message0: "设置 X %1 Y %2 Z %3 的方块名称为 %4 旋转码（0~3）为 %5",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
      {
        type: "field_input",
        name: "ID",
        text: "grass",
      },
      {
        type: "field_dropdown",
        name: "rid",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 30,
    tooltip: "放一个方块",
    helpUrl: "",
  },
  {
    type: "voxels_get",
    message0: "读取 x %1 y %2 z %3 的方块，返回方块ID",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
    ],
    output: "Number",
    colour: 30,
    tooltip: "读取地形上的方块，返回方块ID",
    helpUrl: "",
  },
  {
    type: "voxels_Rotation",
    message0: "读取 x %1 y %2 z %3 的方块，返回方块旋转码（0~3）",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
    ],
    output: "Number",
    colour: 30,
    tooltip: "读取地形上的方块，返回方块旋转码（0~3）",
    helpUrl: "",
  },
  {
    type: "voxels_name",
    message0: "将方块ID %1 转换为名称",
    args0: [
      {
        type: "field_input",
        name: "ID",
        text: "0",
      },
    ],
    output: "String",
    colour: 30,
    tooltip: "将方块ID转换为方块名称",
    helpUrl: "",
  },
  {
    type: "voxels_id",
    message0: "将方块名称 %1 转换为ID",
    args0: [
      {
        type: "field_input",
        name: "ID",
        text: "grass",
      },
    ],
    output: "Number",
    colour: 30,
    tooltip: "将方块ID转换为方块名称",
    helpUrl: "",
  },
  {
    type: "voxels_types",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "所有方块的名称",
      },
    ],
    output: "Number",
    colour: 30,
    tooltip: "返回包含所有方块名称的数组",
    helpUrl: "",
  },
  {
    type: "voxels_typesid",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "所有方块的ID",
      },
    ],
    output: "Number",
    colour: 30,
    tooltip: "返回包含所有方块ID的数组",
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

Blockly.JavaScript["voxels_setid"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  var text_ID = block.getFieldValue("ID");
  var text_rID = block.getFieldValue("rid");
  return (
    "voxels.setVoxel(" +
    text_x +
    "," +
    text_y +
    "," +
    text_z +
    "," +
    text_ID +
    "," +
    text_rID +
    ");\n"
  );
};
Blockly.JavaScript["voxels_setname"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  var text_ID = block.getFieldValue("ID");
  var text_rID = block.getFieldValue("rid");
  return (
    "voxels.setVoxel(" +
    text_x +
    "," +
    text_y +
    "," +
    text_z +
    ",'" +
    text_ID +
    "," +
    text_rID +
    "');\n"
  );
};

Blockly.JavaScript["voxels_get"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  return "voxels.getVoxelId(" + text_x + "," + text_y + "," + text_z + ");\n";
};

Blockly.JavaScript["voxels_getRotation"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  return (
    "voxels.getVoxelRotation(" + text_x + "," + text_y + "," + text_z + ");\n"
  );
};

Blockly.JavaScript["voxels_id"] = function (block) {
  var id = block.getFieldValue("ID");
  return "voxels.id('" + id + "');\n";
};

Blockly.JavaScript["voxels_name"] = function (block) {
  var id = block.getFieldValue("ID");
  return "voxels.name(" + id + ");\n";
};

Blockly.JavaScript["voxels_types"] = function () {
  return "voxels.VoxelTypes";
};

Blockly.JavaScript["voxels_typesid"] = function () {
  return "voxels.VoxelTypes.map((x) => {return voxels.id(x)})";
};
