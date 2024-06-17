var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { quoted, ValueIsListSatisfying, ValueIsArray, ValuesAreEqual, ValuesDiffer, expectListSatisfying } from "javascript-interface-library";
import localforage from "localforage";
import { h } from "preact";
import e from "htm";
import { groupedBehaviorEntryList, ValueIsError, ValueIsName, ValueIsBoard, ValueIsIdentifier, TemplateOfBehavior, ValueIsSticker, ValueIsGeometry, removeIdsFrom, throwError, SNS_Project, throwReadOnlyError, newId } from "shareable-note-stickers";
import { SNS_BoardView } from "sns-boardview";
import { ProtoUX, DragClickRecognizerFor, computed } from "protoux";
var m = e.bind(h);
const noSelection = {};
const mixedValues = {};
const SNS_commonDefaults = {
  Id: noSelection,
  Name: noSelection,
  ForegroundColor: noSelection,
  BackgroundColor: noSelection,
  BackgroundTexture: noSelection,
  FontFamily: noSelection,
  FontSize: noSelection,
  FontWeight: noSelection,
  FontStyle: noSelection,
  LineHeight: noSelection,
  activeScript: noSelection,
  pendingScript: noSelection,
  Script: noSelection,
  editableValue: noSelection,
  Error: noSelection,
  ScriptError: noSelection
};
const SNS_ProjectDefaults = Object.assign({
  SnapToGrid: noSelection,
  GridWidth: noSelection,
  GridHeight: noSelection
}, SNS_commonDefaults);
const SNS_BoardDefaults = Object.assign({
  Index: noSelection
}, SNS_ProjectDefaults);
const SNS_StickerDefaults = Object.assign({
  Lock: noSelection,
  Visibility: noSelection,
  Geometry: noSelection,
  Index: noSelection,
  Enabling: noSelection
}, SNS_commonDefaults);
let PUX = new ProtoUX();
const Application = PUX.observed;
const ApplicationDefaults = {
  persistedProjectList: [],
  normalizedProjectList: [],
  selectedProjectName: void 0,
  selectedProjectIndex: void 0,
  Project: void 0,
  ProjectProperties: SNS_ProjectDefaults,
  ProjectToPersist: void 0,
  DelayTimer: void 0,
  DelayLimitTimer: void 0,
  PersistenceRequested: false,
  PersistenceState: "idle",
  Mode: "run",
  ViewState: 0,
  BoardTree: [],
  BoardTreeState: 0,
  selectedBoards: [],
  expandedBoards: [],
  BoardSelectionMayBeShiftedUp: false,
  BoardSelectionMayBeShiftedDown: false,
  BoardSelectionMayBeShiftedIn: false,
  BoardSelectionMayBeShiftedOut: false,
  chosenBoard: void 0,
  BoardProperties: SNS_BoardDefaults,
  StickerList: [],
  StickerGeometries: [],
  selectedStickers: [],
  StickerSelectionMayBeShiftedUp: false,
  StickerSelectionMayBeShiftedDown: false,
  StickerSelectionProperties: SNS_StickerDefaults,
  StickerSelectionGeometries: [],
  OperationHistoryState: 0,
  mayUndoOperation: false,
  mayRedoOperation: false,
  ShelfIsFilled: false,
  VisitHistoryState: 0,
  mayVisitPrevBoard: false,
  mayVisitNextBoard: false,
  InspectorIsOpen: false,
  InspectorPaneGroup: "Project",
  InspectorPaneChoice: "Browser",
  InspectorPaneIndex: 0,
  InspectorMessage: "(no project)",
  ValueEditorIsOpen: false,
  ValueEditorMode: "Project",
  ScriptEditorIsOpen: false,
  ScriptEditorMode: "Project",
  ScriptEditorMessage: "",
  ConsoleIsOpen: false,
  ConsoleValue: ""
};
Object.assign(Application, ApplicationDefaults);
let DesignerButtonSlot = {};
let DesignerButtonOffset = {};
function moveDesignerButton(x, y, dx, dy) {
  const DesignerButton = PUX.existingWidgetNamed("DesignerButton");
  x = DesignerButtonOffset.x + dx;
  y = DesignerButtonOffset.y + dy;
  const MainScreen = PUX.existingScreenNamed("MainScreen");
  const { width, height } = MainScreen.View.base.getBoundingClientRect();
  x = Math.max(0, Math.min(x, width - 32));
  y = Math.max(0, Math.min(y, height - 32));
  PUX.updateWidget(DesignerButton, {
    Style: `left:${x}px; top:${y}px`
  });
}
const DesignerButtonRecognizer = DragClickRecognizerFor(DesignerButtonSlot, {
  Threshold: 1,
  // > 0 to remain clickable!
  onDragStarted: (x, y, dx, dy) => {
    const DesignerButton = PUX.existingWidgetNamed("DesignerButton");
    const { left, top } = DesignerButton.View.base.getBoundingClientRect();
    DesignerButtonOffset = { x: left, y: top };
    moveDesignerButton(x, y, dx, dy);
  },
  onDragContinued: moveDesignerButton,
  onDragFinished: moveDesignerButton,
  onDragCancelled: moveDesignerButton,
  onClicked: showDesignerTools
});
function showDesignerTools(x, y) {
  const DesignerButton = PUX.existingWidgetNamed("DesignerButton");
  DesignerButton.View.base.style.visibility = "hidden";
  showDialogAround("Toolbox", x, y);
  if (Application.InspectorIsOpen) {
    PUX.openDialog("Inspector");
  }
  if (Application.ValueEditorIsOpen) {
    PUX.openDialog("ValueEditor");
  }
  if (Application.ScriptEditorIsOpen) {
    PUX.openDialog("ScriptEditor");
  }
}
function hideDesignerTools() {
  const DesignerButton = PUX.existingWidgetNamed("DesignerButton");
  DesignerButton.View.base.style.visibility = Application.Project == null ? "hidden" : "visible";
  PUX.closeDialog("Toolbox");
  PUX.closeDialog("Inspector");
  PUX.closeDialog("ValueEditor");
  PUX.closeDialog("ScriptEditor");
}
function BoardView() {
  var _a, _b, _c;
  return m`<${SNS_BoardView}
      Mode=${Application.Mode}
      Board=${Application.chosenBoard} StickerList=${Application.StickerList}
      selectedStickers=${Application.selectedStickers}
      onSelectionChange=${(selectedStickers) => {
    Application.selectedStickers = selectedStickers.slice();
  }}
      LassoMode="contain"
      onGeometryChange=${(StickerList, GeometryList) => {
    doChangeStickerGeometries(StickerList, GeometryList);
  }}
      SnapToGrid=${((_a = Application.BoardProperties) == null ? void 0 : _a.SnapToGrid) === true}
       GridWidth=${IntegerFor((_b = Application.BoardProperties) == null ? void 0 : _b.GridWidth) || 10}
      GridHeight=${IntegerFor((_c = Application.BoardProperties) == null ? void 0 : _c.GridHeight) || 10}
    />`;
}
const StickerCreateOptions = m`
    <option value="" disabled selected>please select</option>
    ${groupedBehaviorEntryList().map(
  (BehaviorEntryGroup) => m`
        <optgroup label="${BehaviorEntryGroup.GroupLabel}">
          ${OptionsForBehaviors(BehaviorEntryGroup.BehaviorEntryList)}
        </optgroup>
      `
)}
  `;
function OptionsForBehaviors(BehaviorEntryList) {
  return m`${BehaviorEntryList.map(
    (BehaviorEntry) => OptionForBehavior(BehaviorEntry)
  )}`;
}
function OptionForBehavior(BehaviorEntry) {
  const { Name, Label, disabled } = BehaviorEntry;
  return m`<option value=${Name} disabled=${disabled}>${Label}</>`;
}
function AppletGeneratorOptions(StickerList) {
  const noStickers = StickerList.length === 0;
  return m`
      <option value="" disabled selected>please select</option>
      <optgroup label="from current Board">
        <option value="Board:standalone">as standalone WebApp</option>
        <option value="Board:embeddable">as embeddable Element</option>
      </optgroup>
      <optgroup label="from current Board and successors">
        <option value="Boards:standalone">as standalone WebApp</option>
        <option value="Boards:embeddable">as embeddable Element</option>
      </optgroup>
      <optgroup label="from selected Stickers">
        <option value="Stickers:standalone" disabled=${noStickers}>as standalone WebApp</option>
        <option value="Stickers:embeddable" disabled=${noStickers}>as embeddable Element</option>
      </optgroup>
    `;
}
window["PUX"] = PUX;
PUX.ImageFolder = "./icons/";
PUX.Style = `  #PUX_0 { background-image:url("/images/BinaryTexture_white.jpg") }
  #PUX_1 { left:31px; top:30px; width:161px; height:90px; right:auto; bottom:auto }

  #PUX_52 {
    left:210px; top:30px; width:32px; height:32px; right:auto; bottom:auto; 
    border:solid 1px #333333; border-radius:15px; 
  }

  #PUX_68 {
    left:3px; top:2px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/pen.png"); 
  }

  #PUX_79 { left:421px; top:629px; width:280px; height:151px; right:auto; bottom:auto }

  #PUX_80 {
    left:0px; top:31px; width:auto; height:auto; right:0px; bottom:-1px; 
    border:solid 1px #000000; 
  }

  #PUX_81 {
    left:auto; top:21px; width:24px; height:24px; right:47px; bottom:auto; 
    background-image:url("/images/trash.png"); 
  }

  #PUX_29 { left:31px; top:130px; width:130px; height:251px; right:auto; bottom:auto }

  #PUX_3 {
    left:8px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/rotate-ccw.png"); 
  }

  #PUX_4 {
    left:37px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/rotate-cw.png"); 
  }

  #PUX_5 {
    left:8px; top:68px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/plus.png"); 
  }

  #PUX_6 {
    left:37px; top:68px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clone.png"); 
  }

  #PUX_7 {
    left:8px; top:127px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/scissors.png"); 
  }

  #PUX_8 {
    left:68px; top:127px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clipboard-arrow-down.png"); 
  }

  #PUX_9 {
    left:37px; top:127px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image133.png"); 
  }

  #PUX_34 {
    left:98px; top:127px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/minus.png"); 
  }

  #PUX_10 {
    left:68px; top:68px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image95.png"); 
  }

  #PUX_11 {
    left:68px; top:98px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_12 {
    left:37px; top:98px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_22 {
    left:8px; top:98px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_25 {
    left:98px; top:98px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_13 {
    left:8px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/draw-square.png"); 
  }

  #PUX_14 {
    left:98px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-down-to-bracket.png"); 
  }

  #PUX_15 {
    left:68px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-up-from-bracket.png"); 
  }

  #PUX_105 {
    left:68px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    border-radius:0px; 
  }

  #PUX_16 {
    left:37px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/pen-ruler.png"); 
  }

  #PUX_17 {
    left:37px; top:188px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/chevron-right.png"); 
  }

  #PUX_18 {
    left:8px; top:188px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/chevron-left.png"); 
  }

  #PUX_19 {
    left:98px; top:188px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/search.png"); 
  }

  #PUX_20 {
    left:68px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/message-square-chat.png"); 
  }

  #PUX_21 {
    left:68px; top:188px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/house-line.png"); 
  }

  #PUX_30 {
    left:98px; top:217px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/printer.png"); 
  }

  #PUX_33 {
    left:98px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/cloud-wired.png"); 
  }

  #PUX_32 {
    left:8px; top:217px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/terminal.png"); 
  }

  #PUX_31 {
    left:68px; top:217px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clapperboard-play.png"); 
  }

  #PUX_35 {
    left:98px; top:68px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square-code.png"); 
  }

  #PUX_57 { left:421px; top:130px; width:280px; height:220px; right:auto; bottom:auto }

  #PUX_53 {
    left:auto; top:34px; width:24px; height:24px; right:5px; bottom:auto; 
    background-image:url("/images/xmark.png"); 
  }

  #PUX_54 {
    left:auto; top:34px; width:24px; height:24px; right:36px; bottom:auto; 
    background-image:url("/images/check.png"); 
  }

  #PUX_55 {
    left:5px; top:60px; width:auto; height:auto; right:5px; bottom:30px; 
    border:solid 1px #000000; 
  }

  #PUX_56 { left:5px; top:auto; width:auto; height:29px; right:40px; bottom:1px }

  #PUX_58 {
    left:auto; top:auto; width:24px; height:24px; right:7px; bottom:3px; 
    background-image:url("/images/triangle-exclamation.png"); 
  }

  #PUX_59 {
    left:5px; top:34px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/book-open.png"); 
  }

  #PUX_60 {
    left:64px; top:34px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square.png"); 
  }

  #PUX_61 {
    left:35px; top:34px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/file.png"); 
  }

  #PUX_43 { left:181px; top:130px; width:221px; height:251px; right:auto; bottom:auto }

  #PUX_36 {
    left:8px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/book-open.png"); 
  }

  #PUX_37 {
    left:67px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square.png"); 
  }

  #PUX_38 {
    left:37px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/file.png"); 
  }

  #PUX_39 {
    left:138px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/sliders.png"); 
  }

  #PUX_40 {
    left:108px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/list.png"); 
  }

  #PUX_41 { left:0px; top:60px; width:auto; height:16px; right:0px; bottom:auto }

  #PUX_42 {
    left:167px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square-code.png"); 
  }

  #PUX_92 {
    left:5px; top:auto; width:auto; height:29px; right:5px; bottom:3px; 
    padding:6px 0px 0px 0px;
  }

  #PUX_50 { left:0px; top:69px; width:auto; height:auto; right:0px; bottom:31px }
  #PUX_69 { left:421px; top:380px; width:280px; height:220px; right:auto; bottom:auto }

  #PUX_88 {
    left:5px; top:59px; width:auto; height:auto; right:5px; bottom:5px; 
    border:solid 1px #000000; 
  }

  #PUX_70 {
    left:5px; top:33px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/book-open.png"); 
  }

  #PUX_71 {
    left:64px; top:33px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square.png"); 
  }

  #PUX_72 {
    left:35px; top:33px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/file.png"); 
  }

  #PUX_104 { left:31px; top:420px; width:280px; height:336px; right:auto; bottom:auto }
  #PUX_96 { left:5px; top:29px; width:147px; height:29px; right:auto; bottom:auto }

  #PUX_97 {
    left:5px; top:59px; width:auto; height:auto; right:5px; bottom:156px; 
    background-color:#eeeeee; 
    border:solid 1px #888888; border-radius:0px; 
  }

  #PUX_93 { left:5px; top:auto; width:90px; height:29px; right:auto; bottom:117px }
  #PUX_98 { left:auto; top:auto; width:90px; height:29px; right:5px; bottom:117px }
  #PUX_100 { left:5px; top:auto; width:auto; height:29px; right:5px; bottom:48px }
  #PUX_94 { left:5px; top:auto; width:147px; height:29px; right:auto; bottom:77px }
  #PUX_95 { left:5px; top:auto; width:90px; height:29px; right:auto; bottom:8px }
  #PUX_99 { left:auto; top:auto; width:90px; height:29px; right:5px; bottom:8px }
  #PUX_106 { background-image:url("/images/BinaryTexture_white_768x1024.jpg") }

  #PUX_109 {
    left:20px; top:19px; width:242px; height:610px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_134 { left:6px; top:0px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_135 { left:6px; top:31px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_136 { left:6px; top:61px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_227 { left:95px; top:31px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_228 { left:95px; top:61px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_229 { left:auto; top:101px; width:21px; height:21px; right:6px; bottom:auto }
  #PUX_137 { left:6px; top:171px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_138 { left:6px; top:201px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_230 { left:95px; top:201px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_139 { left:6px; top:230px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_231 { left:auto; top:230px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_140 { left:6px; top:261px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_232 { left:auto; top:266px; width:21px; height:21px; right:6px; bottom:auto }
  #PUX_141 { left:6px; top:291px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_233 { left:auto; top:296px; width:21px; height:21px; right:6px; bottom:auto }
  #PUX_142 { left:6px; top:320px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_234 { left:auto; top:320px; width:40px; height:29px; right:6px; bottom:auto }
  #PUX_143 { left:6px; top:351px; width:121px; height:29px; right:auto; bottom:auto }
  #PUX_235 { left:auto; top:351px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_144 { left:6px; top:391px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_145 { left:6px; top:420px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_236 { left:auto; top:420px; width:40px; height:29px; right:6px; bottom:auto }
  #PUX_146 { left:6px; top:451px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_148 { left:6px; top:130px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_243 { left:auto; top:130px; width:52px; height:29px; right:78px; bottom:auto }
  #PUX_241 { left:auto; top:130px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_242 {
    left:auto; top:130px; width:21px; height:29px; right:59px; bottom:auto; 
    text-align:center; 
  }

  #PUX_147 { left:6px; top:101px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_237 { left:95px; top:451px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_149 { left:6px; top:491px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_240 {
    left:auto; top:491px; width:24px; height:24px; right:4px; bottom:auto; 
    background-image:url("/images/image146.png"); 
  }

  #PUX_150 {
    left:6px; top:520px; width:auto; height:auto; right:6px; bottom:9px; 
    border:solid 1px #000000; 
  }

  #PUX_110 {
    left:271px; top:19px; width:242px; height:610px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_151 { left:5px; top:0px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_152 { left:5px; top:31px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_153 { left:5px; top:61px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_216 { left:95px; top:31px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_217 { left:95px; top:61px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_218 { left:auto; top:101px; width:21px; height:21px; right:7px; bottom:auto }
  #PUX_154 { left:5px; top:171px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_155 { left:5px; top:201px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_219 { left:95px; top:201px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_156 { left:5px; top:230px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_220 { left:auto; top:230px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_157 { left:5px; top:261px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_221 { left:auto; top:266px; width:21px; height:21px; right:7px; bottom:auto }
  #PUX_158 { left:5px; top:291px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_222 { left:auto; top:296px; width:21px; height:21px; right:7px; bottom:auto }
  #PUX_159 { left:5px; top:320px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_223 { left:auto; top:320px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_160 { left:5px; top:351px; width:121px; height:29px; right:auto; bottom:auto }
  #PUX_224 { left:auto; top:351px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_161 { left:5px; top:391px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_162 { left:5px; top:420px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_225 { left:auto; top:420px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_163 { left:5px; top:451px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_164 { left:5px; top:130px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_244 { left:auto; top:130px; width:52px; height:29px; right:79px; bottom:auto }
  #PUX_245 { left:auto; top:130px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_246 {
    left:auto; top:130px; width:21px; height:29px; right:60px; bottom:auto; 
    text-align:center; 
  }

  #PUX_165 { left:5px; top:101px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_226 { left:95px; top:451px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_166 { left:5px; top:491px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_239 {
    left:auto; top:491px; width:24px; height:26px; right:6px; bottom:auto; 
    background-image:url("/images/image146.png"); 
  }

  #PUX_167 {
    left:5px; top:520px; width:auto; height:auto; right:7px; bottom:9px; 
    border:solid 1px #000000; 
  }

  #PUX_111 {
    left:520px; top:19px; width:242px; height:791px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_168 { left:5px; top:0px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_169 { left:5px; top:31px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_170 { left:5px; top:61px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_190 { left:95px; top:31px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_191 { left:95px; top:61px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_171 { left:5px; top:190px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_172 { left:5px; top:221px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_192 { left:auto; top:221px; width:52px; height:29px; right:77px; bottom:auto }
  #PUX_193 { left:auto; top:221px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_194 {
    left:auto; top:221px; width:21px; height:29px; right:58px; bottom:auto; 
    text-align:center; 
  }

  #PUX_195 { left:auto; top:190px; width:52px; height:31px; right:77px; bottom:auto }
  #PUX_196 { left:auto; top:190px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_197 {
    left:auto; top:190px; width:21px; height:29px; right:58px; bottom:auto; 
    text-align:center; 
  }

  #PUX_173 { left:5px; top:251px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_198 {
    left:auto; top:283px; width:24px; height:24px; right:32px; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_199 {
    left:auto; top:283px; width:24px; height:24px; right:58px; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_200 {
    left:auto; top:285px; width:21px; height:24px; right:84px; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:2px 0px 0px 0px; border-color:#000000; 
  }

  #PUX_201 {
    left:auto; top:285px; width:24px; height:24px; right:82px; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_202 {
    left:auto; top:280px; width:21px; height:24px; right:8px; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:0px 0px 2px 0px; border-color:#000000; 
  }

  #PUX_203 {
    left:auto; top:280px; width:24px; height:24px; right:8px; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_204 { left:auto; top:251px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_174 { left:5px; top:130px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_205 { left:auto; top:130px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_175 { left:5px; top:101px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_176 { left:5px; top:311px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_177 { left:5px; top:341px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_206 { left:95px; top:341px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_178 { left:5px; top:370px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_207 { left:auto; top:370px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_179 { left:5px; top:401px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_208 { left:auto; top:406px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_180 { left:5px; top:430px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_209 { left:auto; top:436px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_181 { left:5px; top:460px; width:81px; height:29px; right:auto; bottom:auto }
  #PUX_210 { left:auto; top:460px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_182 { left:5px; top:491px; width:121px; height:29px; right:auto; bottom:auto }
  #PUX_211 { left:auto; top:491px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_183 { left:5px; top:531px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_184 { left:5px; top:560px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_212 { left:auto; top:560px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_185 { left:5px; top:591px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_213 { left:95px; top:591px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_186 { left:5px; top:161px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_214 { left:auto; top:161px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_187 { left:5px; top:631px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_215 { left:auto; top:631px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_188 { left:5px; top:671px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_238 {
    left:auto; top:671px; width:24px; height:26px; right:5px; bottom:auto; 
    background-image:url("/images/image146.png"); 
  }

  #PUX_189 {
    left:5px; top:700px; width:auto; height:auto; right:7px; bottom:10px; 
    border:solid 1px #000000; 
  }

  #PUX_107 {
    left:20px; top:700px; width:242px; height:270px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_112 { left:6px; top:0px; width:225px; height:29px; right:auto; bottom:auto }

  #PUX_120 {
    left:6px; top:56px; width:auto; height:auto; right:6px; bottom:43px; 
    background-color:#eeeeee; 
    border:solid 1px #888888; border-radius:0px; 
  }

  #PUX_121 { left:6px; top:auto; width:auto; height:29px; right:6px; bottom:6px }

  #PUX_119 {
    left:auto; top:24px; width:24px; height:24px; right:7px; bottom:auto; 
    background-image:url("/images/minus.png"); 
  }

  #PUX_113 {
    left:0px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/plus.png"); 
  }

  #PUX_114 {
    left:30px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clone.png"); 
  }

  #PUX_115 {
    left:156px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_116 {
    left:130px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_117 {
    left:71px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image21.png"); 
  }

  #PUX_118 {
    left:95px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image23.png"); 
  }

  #PUX_108 {
    left:271px; top:700px; width:242px; height:270px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_122 { left:5px; top:0px; width:225px; height:29px; right:auto; bottom:auto }

  #PUX_132 {
    left:5px; top:56px; width:auto; height:auto; right:7px; bottom:43px; 
    background-color:#eeeeee; 
    border:solid 1px #888888; border-radius:0px; 
  }

  #PUX_133 { left:5px; top:auto; width:auto; height:29px; right:7px; bottom:6px }

  #PUX_131 {
    left:auto; top:24px; width:24px; height:24px; right:9px; bottom:auto; 
    background-image:url("/images/minus.png"); 
  }

  #PUX_123 {
    left:0px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/plus.png"); 
  }

  #PUX_124 {
    left:29px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clone.png"); 
  }

  #PUX_125 {
    left:129px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_126 {
    left:100px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_127 {
    left:71px; top:26px; width:21px; height:24px; right:auto; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:2px 0px 0px 0px; border-color:#000000; 
  }

  #PUX_128 {
    left:69px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_129 {
    left:161px; top:26px; width:21px; height:24px; right:auto; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:0px 0px 2px 0px; border-color:#000000; 
  }

  #PUX_130 {
    left:159px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

`;
PUX.ScreenSet = {
  "MainScreen": {
    Name: "MainScreen",
    Id: "PUX_0",
    Width: 768,
    Height: 1024,
    packedGeometry: { "x": 31, "y": 30, "Width": 669, "Height": 749 },
    WidgetList: [
      { "Type": "Placeholder", "Name": "BoardView", "Classes": "Placeholder empty Container", "x": 31, "Width": 161, "y": 30, "Height": 90, "Id": "PUX_1" },
      { "Type": "Container", "Name": "DesignerButton", "Classes": "Container", "x": 210, "Width": 32, "y": 30, "Height": 32, "Id": "PUX_52", WidgetList: [
        { "Type": "Icon", "Classes": "Icon", "Value": 'url("/images/pen.png")', "Color": "black", "Id": "PUX_68" }
      ] },
      { "Type": "ResizableDialog", "Name": "Console", "Classes": "ResizableDialog Container", "x": 421, "Width": 280, "y": 629, "Height": 151, "Id": "PUX_79", WidgetList: [
        { "Type": "TextInput", "Name": "ConsoleView", "Classes": "TextInput no-resize", "Anchoring": "c", "Value": "(ready for operation)", "Id": "PUX_80" },
        { "Type": "Icon", "Name": "ConsoleClearButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/trash.png")', "Color": "black", "Id": "PUX_81" }
      ] },
      { "Type": "Dialog", "Name": "Toolbox", "Classes": "Dialog Container ", "x": 31, "Width": 130, "y": 130, "Height": 251, "Id": "PUX_29", WidgetList: [
        { "Type": "Icon", "Name": "UndoButton", "Classes": "Icon", "Value": 'url("/images/rotate-ccw.png")', "Color": "black", "Id": "PUX_3" },
        { "Type": "Icon", "Name": "RedoButton", "Classes": "Icon", "Value": 'url("/images/rotate-cw.png")', "Color": "black", "Id": "PUX_4" },
        { "Type": "PseudoDropDown", "Name": "StickerCreateButton", "Classes": "PseudoDropDown", "Value": 'url("/images/plus.png")', "Color": "black", "Id": "PUX_5" },
        { "Type": "Icon", "Name": "StickerDuplicateButton", "Classes": "Icon", "Value": 'url("/images/clone.png")', "Color": "black", "Id": "PUX_6" },
        { "Type": "Icon", "Name": "StickerCutButton", "Classes": "Icon", "Value": 'url("/images/scissors.png")', "Color": "black", "Id": "PUX_7" },
        { "Type": "PseudoDropDown", "Name": "StickerPasteButton", "Classes": "PseudoDropDown", "Value": 'url("/images/clipboard-arrow-down.png")', "Color": "black", "Id": "PUX_8" },
        { "Type": "Icon", "Name": "StickerCopyButton", "Classes": "Icon", "Value": 'url("/images/image133.png")', "Color": "black", "Id": "PUX_9" },
        { "Type": "Icon", "Name": "StickerDeleteButton", "Classes": "Icon", "Value": 'url("/images/minus.png")', "Color": "black", "Id": "PUX_34" },
        { "Type": "Icon", "Name": "StickerConfigureButton", "Classes": "Icon", "Value": 'url("/images/image95.png")', "Color": "black", "Id": "PUX_10" },
        { "Type": "Icon", "Name": "StickerShiftDownButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-down.png")', "Color": "black", "Id": "PUX_11" },
        { "Type": "Icon", "Name": "StickerShiftUpButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-up.png")', "Color": "black", "Id": "PUX_12" },
        { "Type": "Icon", "Name": "StickerShiftToTopButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-up.png")', "Color": "black", "Id": "PUX_22" },
        { "Type": "Icon", "Name": "StickerShiftToBottomButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-down.png")', "Color": "black", "Id": "PUX_25" },
        { "Type": "Icon", "Name": "ModeButton", "Classes": "Icon", "Value": 'url("/images/draw-square.png")', "Color": "black", "Id": "PUX_13" },
        { "Type": "PseudoDropDown", "Name": "ExportButton", "Classes": "PseudoDropDown", "Value": 'url("/images/arrow-down-to-bracket.png")', "Color": "black", "Id": "PUX_14" },
        { "Type": "Icon", "Name": "ImportButton", "Classes": "Icon", "Value": 'url("/images/arrow-up-from-bracket.png")', "Color": "black", "Id": "PUX_15" },
        { "Type": "FileInput", "Name": "FileInput", "Classes": "FileInput", "Placeholder": "", "Id": "PUX_105" },
        { "Type": "Icon", "Name": "InspectorButton", "Classes": "Icon", "Value": 'url("/images/pen-ruler.png")', "Color": "black", "Id": "PUX_16" },
        { "Type": "Icon", "Name": "VisitNextButton", "Classes": "Icon", "Value": 'url("/images/chevron-right.png")', "Color": "black", "Id": "PUX_17" },
        { "Type": "Icon", "Name": "VisitPrevButton", "Classes": "Icon", "Value": 'url("/images/chevron-left.png")', "Color": "black", "Id": "PUX_18" },
        { "Type": "Icon", "Name": "SearchButton", "Classes": "Icon", "Value": 'url("/images/search.png")', "Color": "black", "Id": "PUX_19" },
        { "Type": "Icon", "Name": "ChatButton", "Classes": "Icon", "Value": 'url("/images/message-square-chat.png")', "Color": "black", "Id": "PUX_20" },
        { "Type": "Icon", "Name": "VisitHomeButton", "Classes": "Icon", "Value": 'url("/images/house-line.png")', "Color": "black", "Id": "PUX_21" },
        { "Type": "Icon", "Name": "BoardPrintButton", "Classes": "Icon", "Value": 'url("/images/printer.png")', "Color": "black", "Id": "PUX_30" },
        { "Type": "Icon", "Name": "ProjectBrowserButton", "Classes": "Icon", "Value": 'url("/images/cloud-wired.png")', "Color": "black", "Id": "PUX_33" },
        { "Type": "Icon", "Name": "ConsoleButton", "Classes": "Icon", "Value": 'url("/images/terminal.png")', "Color": "black", "Id": "PUX_32" },
        { "Type": "PseudoDropDown", "Name": "AppletGeneratorButton", "Classes": "PseudoDropDown", "Value": 'url("/images/clapperboard-play.png")', "Color": "black", "Id": "PUX_31" },
        { "Type": "Icon", "Name": "StickerScriptButton", "Classes": "Icon", "Value": 'url("/images/square-code.png")', "Color": "black", "Id": "PUX_35" }
      ] },
      { "Type": "ResizableDialog", "Name": "ScriptEditor", "Classes": "ResizableDialog Container", "x": 421, "Width": 280, "y": 130, "Height": 220, "Id": "PUX_57", WidgetList: [
        { "Type": "Icon", "Name": "WithdrawButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/xmark.png")', "Color": "black", "Id": "PUX_53" },
        { "Type": "Icon", "Name": "ApplyButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/check.png")', "Color": "black", "Id": "PUX_54" },
        { "Type": "TextInput", "Name": "ScriptInput", "Classes": "TextInput no-resize", "Anchoring": "c", "Placeholder": "Enter Script", "Value": "", "Id": "PUX_55" },
        { "Type": "TextView", "Name": "MessageView", "Classes": "TextView", "Anchoring": "s", "Value": "", "Id": "PUX_56" },
        { "Type": "Icon", "Name": "MessageViewButton", "Classes": "Icon", "Anchoring": "se", "Value": 'url("/images/triangle-exclamation.png")', "Color": "black", "Id": "PUX_58" },
        { "Type": "Icon", "Name": "ProjectModeButton", "Classes": "Icon", "Value": 'url("/images/book-open.png")', "Color": "black", "Id": "PUX_59" },
        { "Type": "Icon", "Name": "StickerModeButton", "Classes": "Icon", "Value": 'url("/images/square.png")', "Color": "black", "Id": "PUX_60" },
        { "Type": "Icon", "Name": "BoardModeButton", "Classes": "Icon", "Value": 'url("/images/file.png")', "Color": "black", "Id": "PUX_61" }
      ] },
      { "Type": "ResizableDialog", "Name": "Inspector", "Classes": "ResizableDialog Container", "x": 181, "Width": 221, "y": 130, "Height": 251, "Id": "PUX_43", WidgetList: [
        { "Type": "Icon", "Name": "ProjectModeButton", "Classes": "Icon", "Value": 'url("/images/book-open.png")', "Color": "black", "Id": "PUX_36" },
        { "Type": "Icon", "Name": "StickerModeButton", "Classes": "Icon", "Value": 'url("/images/square.png")', "Color": "black", "Id": "PUX_37" },
        { "Type": "Icon", "Name": "BoardModeButton", "Classes": "Icon", "Value": 'url("/images/file.png")', "Color": "black", "Id": "PUX_38" },
        { "Type": "Icon", "Name": "ConfigurationPaneButton", "Classes": "Icon", "Value": 'url("/images/sliders.png")', "Color": "black", "Id": "PUX_39" },
        { "Type": "Icon", "Name": "BrowserPaneButton", "Classes": "Icon", "Value": 'url("/images/list.png")', "Color": "black", "Id": "PUX_40" },
        { "Type": "horizontalSeparator", "Classes": "horizontalSeparator", "Anchoring": "n", "Id": "PUX_41" },
        { "Type": "Icon", "Name": "ScriptEditorButton", "Classes": "Icon", "Value": 'url("/images/square-code.png")', "Color": "black", "Id": "PUX_42" },
        { "Type": "Text", "Name": "MessageView", "Classes": "Text", "Anchoring": "s", "Value": "(no error found)", "Id": "PUX_92" },
        { "Type": "Deck", "Name": "Deck", "Classes": "Deck empty Container", "Anchoring": "c", "Id": "PUX_50" }
      ] },
      { "Type": "ResizableDialog", "Name": "ValueEditor", "Classes": "ResizableDialog Container", "x": 421, "Width": 280, "y": 380, "Height": 220, "Id": "PUX_69", WidgetList: [
        { "Type": "TextInput", "Name": "ValueInput", "Classes": "TextInput no-resize", "Anchoring": "c", "Placeholder": "Enter Value", "Value": "", "Id": "PUX_88" },
        { "Type": "Icon", "Name": "ProjectModeButton", "Classes": "Icon", "Value": 'url("/images/book-open.png")', "Color": "black", "Id": "PUX_70" },
        { "Type": "Icon", "Name": "StickerModeButton", "Classes": "Icon", "Value": 'url("/images/square.png")', "Color": "black", "Id": "PUX_71" },
        { "Type": "Icon", "Name": "BoardModeButton", "Classes": "Icon", "Value": 'url("/images/file.png")', "Color": "black", "Id": "PUX_72" }
      ] },
      { "Type": "ResizableDialog", "Name": "ProjectBrowser", "Classes": "ResizableDialog Container", "x": 31, "Width": 280, "y": 420, "Height": 336, "Id": "PUX_104", WidgetList: [
        { "Type": "Label", "Classes": "Label", "Value": "Recent Projects:", "Id": "PUX_96" },
        { "Type": "FlatListView", "Name": "ProjectListView", "Classes": "FlatListView", "Anchoring": "c", "Id": "PUX_97" },
        { "Type": "Button", "Name": "ProjectOpenButton", "Classes": "vertically-centered Button", "Anchoring": "sw", "Value": "Open", "Id": "PUX_93" },
        { "Type": "Button", "Name": "ProjectPurgeButton", "Classes": "vertically-centered Button", "Anchoring": "se", "Value": "Purge", "Id": "PUX_98" },
        { "Type": "TextlineInput", "Name": "ProjectNameInput", "Classes": "TextlineInput", "Anchoring": "s", "Placeholder": "Enter unique Project Name", "Value": "", "Id": "PUX_100" },
        { "Type": "Label", "Classes": "Label", "Anchoring": "sw", "Value": "Project Name:", "Id": "PUX_94" },
        { "Type": "Button", "Name": "ProjectCreateButton", "Classes": "vertically-centered Button", "Anchoring": "sw", "Value": "New", "Id": "PUX_95" },
        { "Type": "Button", "Name": "ProjectRenameButton", "Classes": "vertically-centered Button", "Anchoring": "se", "Value": "Rename", "Id": "PUX_99" }
      ] }
    ]
  },
  "Stuff Screen": {
    Name: "Stuff Screen",
    Id: "PUX_106",
    Width: 768,
    Height: 1024,
    packedGeometry: { "x": 20, "y": 19, "Width": 741, "Height": 950 },
    WidgetList: [
      { "Type": "Card", "Name": "ProjectConfigurationPane", "Classes": "Card Container", "x": 20, "Width": 242, "y": 19, "Height": 610, "Id": "PUX_109", WidgetList: [
        { "Type": "Label", "Classes": "Label", "Value": "Project Configuration", "Id": "PUX_134" },
        { "Type": "Label", "Classes": "Label", "Value": "Id", "Id": "PUX_135" },
        { "Type": "Label", "Classes": "Label", "Value": "Name", "Id": "PUX_136" },
        { "Type": "TextlineInput", "Name": "IdView", "Classes": "TextlineInput readonly", "Anchoring": "n", "Placeholder": "", "Value": "", "Id": "PUX_227" },
        { "Type": "TextlineInput", "Name": "NameView", "Classes": "TextlineInput readonly", "Anchoring": "n", "Placeholder": "", "Value": "", "Id": "PUX_228" },
        { "Type": "Checkbox", "Name": "SnapToGridCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_229" },
        { "Type": "Label", "Classes": "Label", "Value": "Typography", "Id": "PUX_137" },
        { "Type": "Label", "Classes": "Label", "Value": "Font", "Id": "PUX_138" },
        { "Type": "TextlineInput", "Name": "FontFamilyInput", "Classes": "TextlineInput", "Anchoring": "n", "Placeholder": "Enter Font Family", "Value": "", "Id": "PUX_230" },
        { "Type": "Label", "Classes": "Label", "Value": "Font Size [px]", "Id": "PUX_139" },
        { "Type": "NumberInput", "Name": "FontSizeInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "", "Value": "", "Id": "PUX_231" },
        { "Type": "Label", "Classes": "Label", "Value": "Bold", "Id": "PUX_140" },
        { "Type": "Checkbox", "Name": "BoldCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_232" },
        { "Type": "Label", "Classes": "Label", "Value": "Italic", "Id": "PUX_141" },
        { "Type": "Checkbox", "Name": "ItalicCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_233" },
        { "Type": "Label", "Classes": "Label", "Value": "Text Color", "Id": "PUX_142" },
        { "Type": "ColorInput", "Name": "TextColorInput", "Classes": "ColorInput", "Anchoring": "ne", "Id": "PUX_234" },
        { "Type": "Label", "Classes": "Label", "Value": "Line Height [px]", "Id": "PUX_143" },
        { "Type": "NumberInput", "Name": "LineHeightInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "", "Value": "", "Id": "PUX_235" },
        { "Type": "Label", "Classes": "Label", "Value": "Background", "Id": "PUX_144" },
        { "Type": "Label", "Classes": "Label", "Value": "Color", "Id": "PUX_145" },
        { "Type": "ColorInput", "Name": "BackgroundColorInput", "Classes": "ColorInput", "Anchoring": "ne", "Id": "PUX_236" },
        { "Type": "Label", "Classes": "Label", "Value": "Texture", "Id": "PUX_146" },
        { "Type": "Label", "Classes": "Label", "Value": "Grid Size [px]", "Id": "PUX_148" },
        { "Type": "NumberInput", "Name": "GridWidthInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "W", "Value": "", "Id": "PUX_243" },
        { "Type": "NumberInput", "Name": "GridHeightInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "H", "Value": "", "Id": "PUX_241" },
        { "Type": "Label", "Classes": "Label", "Anchoring": "ne", "Value": "x", "Id": "PUX_242" },
        { "Type": "Label", "Classes": "Label", "Value": "Snap-to-Grid", "Id": "PUX_147" },
        { "Type": "URLInput", "Name": "TextureInput", "Classes": "URLInput", "Anchoring": "n", "Placeholder": "Enter URL", "Value": "", "Id": "PUX_237" },
        { "Type": "Label", "Classes": "Label", "Value": "Value", "Id": "PUX_149" },
        { "Type": "Icon", "Name": "ValueEditorButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/image146.png")', "Color": "black", "Id": "PUX_240" },
        { "Type": "TextInput", "Name": "ValueInput", "Classes": "TextInput no-resize", "Anchoring": "c", "Placeholder": "Enter Value", "Value": "", "Id": "PUX_150" }
      ] },
      { "Type": "Card", "Name": "BoardConfigurationPane", "Classes": "Card Container", "x": 271, "Width": 242, "y": 19, "Height": 610, "Id": "PUX_110", WidgetList: [
        { "Type": "Label", "Classes": "Label", "Value": "Board Configuration", "Id": "PUX_151" },
        { "Type": "Label", "Classes": "Label", "Value": "Id", "Id": "PUX_152" },
        { "Type": "Label", "Classes": "Label", "Value": "Name", "Id": "PUX_153" },
        { "Type": "TextlineInput", "Name": "IdView", "Classes": "TextlineInput readonly", "Anchoring": "n", "Placeholder": "", "Value": "", "Id": "PUX_216" },
        { "Type": "TextlineInput", "Name": "NameInput", "Classes": "TextlineInput", "Anchoring": "n", "Placeholder": "Enter Name", "Value": "", "Id": "PUX_217" },
        { "Type": "Checkbox", "Name": "SnapToGridCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_218" },
        { "Type": "Label", "Classes": "Label", "Value": "Typography", "Id": "PUX_154" },
        { "Type": "Label", "Classes": "Label", "Value": "Font", "Id": "PUX_155" },
        { "Type": "TextlineInput", "Name": "FontFamilyInput", "Classes": "TextlineInput", "Anchoring": "n", "Placeholder": "Enter Font Family", "Value": "", "Id": "PUX_219" },
        { "Type": "Label", "Classes": "Label", "Value": "Font Size [px]", "Id": "PUX_156" },
        { "Type": "NumberInput", "Name": "FontSizeInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "", "Value": "", "Id": "PUX_220" },
        { "Type": "Label", "Classes": "Label", "Value": "Bold", "Id": "PUX_157" },
        { "Type": "Checkbox", "Name": "BoldCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_221" },
        { "Type": "Label", "Classes": "Label", "Value": "Italic", "Id": "PUX_158" },
        { "Type": "Checkbox", "Name": "ItalicCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_222" },
        { "Type": "Label", "Classes": "Label", "Value": "Text Color", "Id": "PUX_159" },
        { "Type": "ColorInput", "Name": "TextColorInput", "Classes": "ColorInput", "Anchoring": "ne", "Id": "PUX_223" },
        { "Type": "Label", "Classes": "Label", "Value": "Line Height [px]", "Id": "PUX_160" },
        { "Type": "NumberInput", "Name": "LineHeightInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "", "Value": "", "Id": "PUX_224" },
        { "Type": "Label", "Classes": "Label", "Value": "Background", "Id": "PUX_161" },
        { "Type": "Label", "Classes": "Label", "Value": "Color", "Id": "PUX_162" },
        { "Type": "ColorInput", "Name": "BackgroundColorInput", "Classes": "ColorInput", "Anchoring": "ne", "Id": "PUX_225" },
        { "Type": "Label", "Classes": "Label", "Value": "Texture", "Id": "PUX_163" },
        { "Type": "Label", "Classes": "Label", "Value": "Grid Size [px]", "Id": "PUX_164" },
        { "Type": "NumberInput", "Name": "GridWidthInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "W", "Value": "", "Id": "PUX_244" },
        { "Type": "NumberInput", "Name": "GridHeightInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "H", "Value": "", "Id": "PUX_245" },
        { "Type": "Label", "Classes": "Label", "Anchoring": "ne", "Value": "x", "Id": "PUX_246" },
        { "Type": "Label", "Classes": "Label", "Value": "Snap-to-Grid", "Id": "PUX_165" },
        { "Type": "URLInput", "Name": "TextureInput", "Classes": "URLInput", "Anchoring": "n", "Placeholder": "Enter URL", "Value": "", "Id": "PUX_226" },
        { "Type": "Label", "Classes": "Label", "Value": "Value", "Id": "PUX_166" },
        { "Type": "Icon", "Name": "ValueEditorButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/image146.png")', "Color": "black", "Id": "PUX_239" },
        { "Type": "TextInput", "Name": "ValueInput", "Classes": "TextInput no-resize", "Anchoring": "c", "Placeholder": "Enter Value", "Value": "", "Id": "PUX_167" }
      ] },
      { "Type": "Card", "Name": "StickerConfigurationPane", "Classes": "Card Container", "x": 520, "Width": 242, "y": 19, "Height": 791, "Id": "PUX_111", WidgetList: [
        { "Type": "Label", "Classes": "Label", "Value": "Sticker Configuration", "Id": "PUX_168" },
        { "Type": "Label", "Classes": "Label", "Value": "Id", "Id": "PUX_169" },
        { "Type": "Label", "Classes": "Label", "Value": "Name", "Id": "PUX_170" },
        { "Type": "TextlineInput", "Name": "IdView", "Classes": "TextlineInput readonly", "Anchoring": "n", "Placeholder": "", "Value": "", "Id": "PUX_190" },
        { "Type": "TextlineInput", "Name": "NameInput", "Classes": "TextlineInput", "Anchoring": "n", "Placeholder": "Enter Name", "Value": "", "Id": "PUX_191" },
        { "Type": "Label", "Classes": "Label", "Value": "Position", "Id": "PUX_171" },
        { "Type": "Label", "Classes": "Label", "Value": "Size", "Id": "PUX_172" },
        { "Type": "NumberInput", "Name": "WidthInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "W", "Value": "", "Id": "PUX_192" },
        { "Type": "NumberInput", "Name": "HeightInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "H", "Value": "", "Id": "PUX_193" },
        { "Type": "Label", "Classes": "Label", "Anchoring": "ne", "Value": "x", "Id": "PUX_194" },
        { "Type": "NumberInput", "Name": "xInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "x", "Value": "", "Id": "PUX_195" },
        { "Type": "NumberInput", "Name": "yInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "y", "Value": "", "Id": "PUX_196" },
        { "Type": "Label", "Classes": "Label", "Anchoring": "ne", "Value": ",", "Id": "PUX_197" },
        { "Type": "Label", "Classes": "Label", "Value": "Layer", "Id": "PUX_173" },
        { "Type": "Icon", "Name": "ShiftDownButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/arrow-sm-down.png")', "Color": "black", "Id": "PUX_198" },
        { "Type": "Icon", "Name": "ShiftUpButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/arrow-sm-up.png")', "Color": "black", "Id": "PUX_199" },
        { "Type": "Box", "Classes": "", "Anchoring": "ne", "Id": "PUX_200" },
        { "Type": "Icon", "Name": "ShiftToTopButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/arrow-sm-up.png")', "Color": "black", "Id": "PUX_201" },
        { "Type": "Box", "Classes": "", "Anchoring": "ne", "Id": "PUX_202" },
        { "Type": "Icon", "Name": "ShiftToBottomButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/arrow-sm-down.png")', "Color": "black", "Id": "PUX_203" },
        { "Type": "NumberInput", "Name": "IndexView", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "Layer", "Value": "", "Id": "PUX_204" },
        { "Type": "Label", "Classes": "Label", "Value": "Lock", "Id": "PUX_174" },
        { "Type": "Checkbox", "Name": "LockCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_205" },
        { "Type": "Label", "Classes": "Label", "Value": "Layout and Visibility", "Id": "PUX_175" },
        { "Type": "Label", "Classes": "Label", "Value": "Typography", "Id": "PUX_176" },
        { "Type": "Label", "Classes": "Label", "Value": "Font", "Id": "PUX_177" },
        { "Type": "TextlineInput", "Name": "FontFamilyInput", "Classes": "TextlineInput", "Anchoring": "n", "Placeholder": "Enter Font Family", "Value": "", "Id": "PUX_206" },
        { "Type": "Label", "Classes": "Label", "Value": "Font Size [px]", "Id": "PUX_178" },
        { "Type": "NumberInput", "Name": "FontSizeInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "", "Value": "", "Id": "PUX_207" },
        { "Type": "Label", "Classes": "Label", "Value": "Bold", "Id": "PUX_179" },
        { "Type": "Checkbox", "Name": "BoldCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_208" },
        { "Type": "Label", "Classes": "Label", "Value": "Italic", "Id": "PUX_180" },
        { "Type": "Checkbox", "Name": "ItalicCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_209" },
        { "Type": "Label", "Classes": "Label", "Value": "Text Color", "Id": "PUX_181" },
        { "Type": "ColorInput", "Name": "TextColorInput", "Classes": "ColorInput", "Anchoring": "ne", "Id": "PUX_210" },
        { "Type": "Label", "Classes": "Label", "Value": "Line Height [px]", "Id": "PUX_182" },
        { "Type": "NumberInput", "Name": "LineHeightInput", "Classes": "NumberInput", "Anchoring": "ne", "Placeholder": "", "Value": "", "Id": "PUX_211" },
        { "Type": "Label", "Classes": "Label", "Value": "Background", "Id": "PUX_183" },
        { "Type": "Label", "Classes": "Label", "Value": "Color", "Id": "PUX_184" },
        { "Type": "ColorInput", "Name": "BackgroundColorInput", "Classes": "ColorInput", "Anchoring": "ne", "Id": "PUX_212" },
        { "Type": "Label", "Classes": "Label", "Value": "Texture", "Id": "PUX_185" },
        { "Type": "URLInput", "Name": "TextureInput", "Classes": "URLInput", "Anchoring": "n", "Placeholder": "Enter URL", "Value": "", "Id": "PUX_213" },
        { "Type": "Label", "Classes": "Label", "Value": "Visibility", "Id": "PUX_186" },
        { "Type": "Checkbox", "Name": "VisibilityCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_214" },
        { "Type": "Label", "Classes": "Label", "Value": "Enabling", "Id": "PUX_187" },
        { "Type": "Checkbox", "Name": "EnablingCheck", "Classes": "Checkbox", "Anchoring": "ne", "Value": true, "Id": "PUX_215" },
        { "Type": "Label", "Classes": "Label", "Value": "Value", "Id": "PUX_188" },
        { "Type": "Icon", "Name": "ValueEditorButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/image146.png")', "Color": "black", "Id": "PUX_238" },
        { "Type": "TextInput", "Name": "ValueInput", "Classes": "TextInput no-resize", "Anchoring": "c", "Placeholder": "Enter Value", "Value": "", "Id": "PUX_189" }
      ] },
      { "Type": "Card", "Name": "BoardBrowserPane", "Classes": "Card Container", "x": 20, "Width": 242, "y": 700, "Height": 270, "Id": "PUX_107", WidgetList: [
        { "Type": "Label", "Classes": "Label", "Value": "Board Browser", "Id": "PUX_112" },
        { "Type": "NestedListView", "Name": "BoardTreeView", "Classes": "NestedListView", "Anchoring": "c", "Id": "PUX_120" },
        { "Type": "TextlineInput", "Name": "BoardNameInput", "Classes": "TextlineInput", "Anchoring": "s", "Placeholder": "Name", "Value": "", "Id": "PUX_121" },
        { "Type": "Icon", "Name": "BoardDeleteButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/minus.png")', "Color": "black", "Id": "PUX_119" },
        { "Type": "Icon", "Name": "BoardCreateButton", "Classes": "Icon", "Value": 'url("/images/plus.png")', "Color": "black", "Id": "PUX_113" },
        { "Type": "Icon", "Name": "BoardDuplicateButton", "Classes": "Icon", "Value": 'url("/images/clone.png")', "Color": "black", "Id": "PUX_114" },
        { "Type": "Icon", "Name": "BoardShiftDownButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-down.png")', "Color": "black", "Id": "PUX_115" },
        { "Type": "Icon", "Name": "BoardShiftUpButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-up.png")', "Color": "black", "Id": "PUX_116" },
        { "Type": "Icon", "Name": "BoardShiftOutButton", "Classes": "Icon", "Value": 'url("/images/image21.png")', "Color": "black", "Id": "PUX_117" },
        { "Type": "Icon", "Name": "BoardShiftInButton", "Classes": "Icon", "Value": 'url("/images/image23.png")', "Color": "black", "Id": "PUX_118" }
      ] },
      { "Type": "Card", "Name": "StickerBrowserPane", "Classes": "Card Container", "x": 271, "Width": 242, "y": 700, "Height": 270, "Id": "PUX_108", WidgetList: [
        { "Type": "Label", "Classes": "Label", "Value": "Sticker Browser", "Id": "PUX_122" },
        { "Type": "FlatListView", "Name": "StickerListView", "Classes": "FlatListView", "Anchoring": "c", "Id": "PUX_132" },
        { "Type": "TextlineInput", "Name": "StickerNameInput", "Classes": "TextlineInput", "Anchoring": "s", "Placeholder": "Name", "Value": "", "Id": "PUX_133" },
        { "Type": "Icon", "Name": "StickerDeleteButton", "Classes": "Icon", "Anchoring": "ne", "Value": 'url("/images/minus.png")', "Color": "black", "Id": "PUX_131" },
        { "Type": "PseudoDropDown", "Name": "StickerCreateButton", "Classes": "PseudoDropDown", "Value": 'url("/images/plus.png")', "Color": "black", "Id": "PUX_123" },
        { "Type": "Icon", "Name": "StickerDuplicateButton", "Classes": "Icon", "Value": 'url("/images/clone.png")', "Color": "black", "Id": "PUX_124" },
        { "Type": "Icon", "Name": "StickerShiftDownButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-down.png")', "Color": "black", "Id": "PUX_125" },
        { "Type": "Icon", "Name": "StickerShiftUpButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-up.png")', "Color": "black", "Id": "PUX_126" },
        { "Type": "Box", "Classes": "", "Id": "PUX_127" },
        { "Type": "Icon", "Name": "StickerShiftToTopButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-up.png")', "Color": "black", "Id": "PUX_128" },
        { "Type": "Box", "Classes": "", "Id": "PUX_129" },
        { "Type": "Icon", "Name": "StickerShiftToBottomButton", "Classes": "Icon", "Value": 'url("/images/arrow-sm-down.png")', "Color": "black", "Id": "PUX_130" }
      ] }
    ]
  }
};
PUX.extractAllDialogs();
PUX.stuff({
  Inspector: {
    Deck: {
      from: "Stuff Screen",
      with: [
        "BoardBrowserPane",
        "StickerBrowserPane",
        "ProjectConfigurationPane",
        "BoardConfigurationPane",
        "StickerConfigurationPane"
      ]
    }
  }
});
const updatedFrom = PUX.updatedFrom;
PUX.configure({
  MainScreen: {
    self: {
      Style: "left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto"
    },
    BoardView: {
      Style: "left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto",
      Substitute: BoardView,
      Rendering: updatedFrom(() => {
      })
    },
    DesignerButton: {
      Style: "left:auto; top:10px; right:10px; bottom:auto; background:white; visibility:hidden",
      onPointerDown: DesignerButtonRecognizer,
      onPointerMove: DesignerButtonRecognizer,
      onPointerUp: DesignerButtonRecognizer,
      onPointerCancel: DesignerButtonRecognizer
    }
  },
  ProjectBrowser: {
    self: {
      Title: "Project Browser",
      x: -1,
      y: -1,
      // for initial placement
      Style: "z-index:2000000",
      // above shape handles
      closeable: updatedFrom(() => Application.Project != null)
    },
    ProjectListView: {
      List: updatedFrom(() => Application.persistedProjectList),
      Placeholder: "(no projects found)",
      selectedIndices: updatedFrom(() => Application.selectedProjectIndex == null ? [] : [Application.selectedProjectIndex]),
      SelectionLimit: 1,
      onSelectionChange: (selectedIndices) => {
        if (selectedIndices.length === 0) {
          Application.selectedProjectName = void 0;
          Application.selectedProjectIndex = void 0;
          Application.ProjectName = void 0;
        } else {
          const selectedIndex = selectedIndices[0];
          Application.selectedProjectName = Application.persistedProjectList[selectedIndex];
          Application.selectedProjectIndex = selectedIndex;
          Application.ProjectName = Application.selectedProjectName;
        }
      }
    },
    ProjectOpenButton: {
      disabled: updatedFrom(
        () => Application.selectedProjectIndex == null || ProjectIsOpen(Application.selectedProjectName)
      ),
      onClick: () => doOpenProject(Application.selectedProjectName)
    },
    ProjectPurgeButton: {
      disabled: updatedFrom(
        () => Application.selectedProjectIndex == null || ProjectIsOpen(Application.selectedProjectName)
      ),
      onClick: () => doPurgeProject(Application.selectedProjectName)
    },
    ProjectNameInput: {
      Value: updatedFrom(() => Application.ProjectName),
      onInput: (Event) => Application.ProjectName = Event.target.value
    },
    ProjectCreateButton: {
      disabled: updatedFrom(() => !ProjectNameIsAvailable(Application.ProjectName)),
      onClick: () => doCreateProject(Application.ProjectName)
    },
    ProjectRenameButton: {
      disabled: updatedFrom(() => Application.selectedProjectIndex == null || ProjectIsOpen(Application.selectedProjectName) || !ProjectNameIsAvailable(Application.ProjectName)),
      onClick: () => doRenameProject(
        Application.selectedProjectName,
        Application.ProjectName
      )
    }
  },
  Toolbox: {
    self: {
      Title: "Toolbox",
      x: -1,
      y: -1,
      // for placement around mouse click position
      Style: "z-index:2000000",
      // above shape handles
      onClose: hideDesignerTools
    },
    ModeButton: {
      disabled: updatedFrom(() => Application.chosenBoard == null),
      Style: updatedFrom(
        () => Application.Mode === "edit" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => doSwitchMode()
    },
    InspectorButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.InspectorIsOpen ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: (Event) => showDialogAround(
        "Inspector",
        Event.clientX,
        Event.clientY
      )
    },
    ChatButton: { disabled: true },
    ProjectBrowserButton: {
      Style: updatedFrom(
        () => Application.ProjectBrowserIsOpen ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: (Event) => showDialogAround(
        "ProjectBrowser",
        Event.clientX,
        Event.clientY
      )
    },
    StickerCreateButton: {
      disabled: updatedFrom(() => Application.chosenBoard == null),
      Options: StickerCreateOptions,
      onInput: (Event) => {
        doCreateNewSticker(Event.target.value);
        Event.target.value = "";
      }
    },
    StickerDuplicateButton: {
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.selectedStickers.length > 0)),
      onClick: () => doDuplicateStickers(Application.selectedStickers)
    },
    StickerConfigureButton: {
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.selectedStickers.length > 0)),
      onClick: (Event) => {
        showDialogAround("Inspector", Event.clientX, Event.clientY);
        setInspectorPaneGroup("Stickers");
        setInspectorPaneChoice("Configuration");
      }
    },
    StickerScriptButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.ScriptEditorIsOpen ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: (Event) => showDialogAround(
        "ScriptEditor",
        Event.clientX,
        Event.clientY
      )
    },
    StickerShiftToTopButton: {
      Style: "border-top:solid 2px black",
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.selectedStickers.length > 0 && Application.StickerSelectionMayBeShiftedDown)),
      onClick: () => doShiftStickersToBottom(Application.selectedStickers)
    },
    StickerShiftUpButton: {
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.selectedStickers.length > 0 && Application.StickerSelectionMayBeShiftedDown)),
      onClick: () => doShiftStickersDown(Application.selectedStickers)
    },
    StickerShiftDownButton: {
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.selectedStickers.length > 0 && Application.StickerSelectionMayBeShiftedUp)),
      onClick: () => doShiftStickersUp(Application.selectedStickers)
    },
    StickerShiftToBottomButton: {
      Style: "border-bottom:solid 2px black",
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.selectedStickers.length > 0 && Application.StickerSelectionMayBeShiftedUp)),
      onClick: () => doShiftStickersToTop(Application.selectedStickers)
    },
    StickerCutButton: {
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.selectedStickers.length > 0)),
      onClick: () => doCutStickers(Application.selectedStickers)
    },
    StickerCopyButton: {
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.selectedStickers.length > 0)),
      onClick: () => doCopyStickers(Application.selectedStickers)
    },
    StickerPasteButton: {
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.ShelfIsFilled)),
      Options: ["close to current selection", "at original place"],
      onInput: (Event) => {
        if (Event.target.value === "close to current selection") {
          const { minX, minY } = topLeftPositionOfStickers(Application.selectedStickers);
          doPasteStickersAround(minX, minY);
        } else {
          doPasteStickers();
        }
        Event.target.value = "";
      }
    },
    StickerDeleteButton: {
      disabled: updatedFrom(() => !(Application.chosenBoard != null && Application.selectedStickers.length > 0)),
      onClick: () => doDeleteStickers(Application.selectedStickers)
    },
    UndoButton: {
      disabled: updatedFrom(() => !Application.mayUndoOperation),
      onClick: () => doUndoOperation()
    },
    RedoButton: {
      disabled: updatedFrom(() => !Application.mayRedoOperation),
      onClick: () => doRedoOperation()
    },
    ImportButton: {
      disabled: updatedFrom(() => Application.Project == null)
    },
    FileInput: {
      Style: "border:none",
      disabled: updatedFrom(() => Application.Project == null),
      Value: "",
      Placeholder: "",
      accept: ".json,application/json",
      onChange: (Event) => doImport(Event.target.files[0]),
      onDrop: (Event) => doImport(Event.dataTransfer.files[0])
    },
    ExportButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Options: ["whole Project", "active Board", "selected Stickers"],
      onInput: (Event) => {
        doExport(Event.target.value);
        Event.target.value = "";
      }
    },
    VisitPrevButton: {
      disabled: updatedFrom(() => !Application.mayVisitPrevBoard),
      onClick: () => doVisitPrevBoard()
    },
    VisitNextButton: {
      disabled: updatedFrom(() => !Application.mayVisitNextBoard),
      onClick: () => doVisitNextBoard()
    },
    VisitHomeButton: {
      disabled: updatedFrom(() => Application.BoardTree.length === 0 || Application.chosenBoard === Application.BoardTree[0]),
      onClick: () => {
        var _a;
        return doVisitBoard((_a = Application.Project) == null ? void 0 : _a.Board(0));
      }
    },
    SearchButton: {
      disabled: true
    },
    ConsoleButton: {
      Style: updatedFrom(
        () => Application.ConsoleIsOpen ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: (Event) => showDialogAround(
        "Console",
        Event.clientX,
        Event.clientY
      )
    },
    AppletGeneratorButton: {
      disabled: updatedFrom(() => Application.chosenBoard == null),
      Options: updatedFrom(() => AppletGeneratorOptions(Application.selectedStickers)),
      onInput: (Event) => {
        const chosenBoard = Application.chosenBoard;
        if (chosenBoard == null) {
          return withWarning("there is currently no chosen board");
        }
        const [Source, Mode] = Event.target.value.split(":");
        Event.target.value = "";
        switch (Source) {
          case "Board":
            return doGenerateAppletFromBoard(chosenBoard, Mode);
          case "Boards":
            return doGenerateAppletFromBoardAndSuccessors(chosenBoard, Mode);
          case "Stickers":
          default:
            return doGenerateAppletFromStickers(Application.selectedStickers, Mode);
        }
      }
    },
    BoardPrintButton: {
      disabled: updatedFrom(() => Application.chosenBoard == null),
      onClick: () => doPrintBoard()
    }
  },
  Inspector: {
    self: {
      Title: "Inspector",
      x: -1,
      y: -1,
      // for placement around mouse click position
      minWidth: 300,
      minHeight: 460,
      Width: 300,
      Height: 460,
      Style: "z-index:2000000",
      // above shape handles
      onOpen: () => Application.InspectorIsOpen = true,
      onClose: () => Application.InspectorIsOpen = false
    },
    ProjectModeButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.InspectorPaneGroup === "Project" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => setInspectorPaneGroup("Project")
    },
    BoardModeButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.InspectorPaneGroup === "Board" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => setInspectorPaneGroup("Board")
    },
    StickerModeButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.InspectorPaneGroup === "Stickers" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => setInspectorPaneGroup("Stickers")
    },
    BrowserPaneButton: {
      disabled: updatedFrom(() => Application.Project == null || Application.InspectorPaneGroup === "Stickers"),
      Style: updatedFrom(
        () => Application.InspectorPaneChoice === "Browser" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => setInspectorPaneChoice("Browser")
    },
    ConfigurationPaneButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.InspectorPaneChoice === "Configuration" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => setInspectorPaneChoice("Configuration")
    },
    ScriptEditorButton: {
      disabled: updatedFrom(() => Application.Project == null),
      onClick: (Event) => {
        showDialogAround("ScriptEditor", Event.clientX, Event.clientY);
        Application.ScriptEditorMode = Application.InspectorPaneGroup;
      }
    },
    Deck: {
      Style: "overflow-x:hidden; overflow-y:scroll; overflow:hidden scroll",
      Value: updatedFrom(() => Application.InspectorPaneIndex)
    },
    MessageView: {
      Value: updatedFrom(() => Application.InspectorMessage)
    }
  },
  ValueEditor: {
    self: {
      Title: "Value Editor",
      x: -1,
      y: -1,
      // for placement around mouse click position
      Style: "z-index:2000000",
      // above shape handles
      onOpen: () => Application.ValueEditorIsOpen = true,
      onClose: () => Application.ValueEditorIsOpen = false
    },
    ProjectModeButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.ValueEditorMode === "Project" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => Application.ValueEditorMode = "Project"
    },
    BoardModeButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.ValueEditorMode === "Board" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => Application.ValueEditorMode = "Board"
    },
    StickerModeButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.ValueEditorMode === "Stickers" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => Application.ValueEditorMode = "Stickers"
    },
    ValueInput: {
      disabled: updatedFrom(() => Application.ValueEditorMode === "Project" ? Application.Project == null : Application.ValueEditorMode === "Board" ? Application.chosenBoard == null : Application.selectedStickers.length === 0),
      Value: updatedFrom(() => Application.ValueEditorMode === "Project" ? ValueFor(Application.ProjectProperties.editableValue) : Application.ValueEditorMode === "Board" ? ValueFor(Application.BoardProperties.editableValue) : ValueFor(Application.StickerSelectionProperties.editableValue)),
      Placeholder: updatedFrom(() => Application.ValueEditorMode === "Project" ? "(enter project value)" : Application.ValueEditorMode === "Board" ? "(enter a value for the currently active board)" : "(enter a common value for all currently selected stickers)"),
      onInput: (Event) => {
        switch (Application.ValueEditorMode) {
          case "Project":
            return doConfigureProject(Application.Project, "editableValue", Event.target.value);
          case "Board":
            return doConfigureBoard(Application.chosenBoard, "editableValue", Event.target.value);
          case "Stickers":
          default:
            return doConfigureStickers(Application.selectedStickers, "editableValue", Event.target.value);
        }
      }
    }
  },
  ScriptEditor: {
    self: {
      Title: "Script Editor",
      x: -1,
      y: -1,
      // for placement around mouse click position
      Style: "z-index:2000000",
      // above shape handles
      onOpen: () => Application.ScriptEditorIsOpen = true,
      onClose: () => Application.ScriptEditorIsOpen = false
    },
    ProjectModeButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.ScriptEditorMode === "Project" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => Application.ScriptEditorMode = "Project"
    },
    BoardModeButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.ScriptEditorMode === "Board" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => Application.ScriptEditorMode = "Board"
    },
    StickerModeButton: {
      disabled: updatedFrom(() => Application.Project == null),
      Style: updatedFrom(
        () => Application.ScriptEditorMode === "Stickers" ? "background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px" : ""
      ),
      onClick: () => Application.ScriptEditorMode = "Stickers"
    },
    ScriptInput: {
      Style: "white-space:pre",
      disabled: updatedFrom(() => Application.ScriptEditorMode === "Project" ? Application.Project == null : Application.ScriptEditorMode === "Board" ? Application.chosenBoard == null : Application.selectedStickers.length === 0),
      Value: updatedFrom(() => Application.ScriptEditorMode === "Project" ? ValueFor(Application.ProjectProperties.Script) : Application.ScriptEditorMode === "Board" ? ValueFor(Application.BoardProperties.Script) : ValueFor(Application.StickerSelectionProperties.Script)),
      Placeholder: updatedFrom(() => Application.ScriptEditorMode === "Project" ? "(enter project script)" : Application.ScriptEditorMode === "Board" ? "(enter script for the currently active board)" : "(enter common script for all currently selected stickers)"),
      onInput: (Event) => {
        switch (Application.ScriptEditorMode) {
          case "Project":
            return doConfigureProject(Application.Project, "pendingScript", Event.target.value);
          case "Board":
            return doConfigureBoard(Application.chosenBoard, "pendingScript", Event.target.value);
          case "Stickers":
          default:
            return doConfigureStickers(Application.selectedStickers, "pendingScript", Event.target.value);
        }
      }
    },
    ApplyButton: {
      disabled: updatedFrom(() => Application.ScriptEditorMode === "Project" ? Application.ProjectProperties.Script === Application.ProjectProperties.activeScript : Application.ScriptEditorMode === "Board" ? Application.ProjectProperties.Script === Application.ProjectProperties.activeScript : Application.StickerSelectionProperties.Script === Application.StickerSelectionProperties.activeScript),
      onClick: () => {
        switch (Application.ScriptEditorMode) {
          case "Project":
            return doApplyProjectScript(Application.Project);
          case "Board":
            return doApplyBoardScript(Application.chosenBoard);
          case "Stickers":
          default:
            return doApplyStickerScript(Application.selectedStickers);
        }
      }
    },
    WithdrawButton: {
      disabled: true,
      onClick: () => {
        switch (Application.ScriptEditorMode) {
          case "Project":
            return doWithdrawProjectScript(Application.Project);
          case "Board":
            return doWithdrawBoardScript(Application.chosenBoard);
          case "Stickers":
          default:
            return doWithdrawStickerScript(Application.selectedStickers);
        }
      }
    },
    MessageView: {
      Style: "bottom:0px; font-size:13px; padding-top:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis",
      Value: updatedFrom(() => ErrorMessageFor(
        Application.ScriptEditorMode === "Project" ? Application.ProjectProperties.ScriptError : Application.ScriptEditorMode === "Board" ? Application.ProjectProperties.ScriptError : Application.StickerSelectionProperties.ScriptError
      ))
    },
    MessageViewButton: {
      Style: "bottom:3px",
      disabled: updatedFrom(() => !ValueIsError(
        Application.ScriptEditorMode === "Project" ? Application.ProjectProperties.ScriptError : Application.ScriptEditorMode === "Board" ? Application.ProjectProperties.ScriptError : Application.StickerSelectionProperties.ScriptError
      )),
      onClick: () => showScriptError(
        Application.ScriptEditorMode === "Project" ? Application.ProjectProperties.ScriptError : Application.ScriptEditorMode === "Board" ? Application.ProjectProperties.ScriptError : Application.StickerSelectionProperties.ScriptError
      )
    }
  },
  Console: {
    self: {
      Title: "Console",
      x: -1,
      y: -1,
      // for placement around mouse click position
      Style: "z-index:2000000",
      // above shape handles
      onOpen: () => Application.ConsoleIsOpen = true,
      onClose: () => Application.ConsoleIsOpen = false
    },
    ConsoleClearButton: {
      Style: "top:2px; z-index:1",
      disabled: updatedFrom(() => Application.ConsoleValue === ""),
      onClick: () => clearConsole()
    },
    ConsoleView: {
      Style: "bottom:0px; border:solid 4px transparent; color:green",
      readonly: true,
      Value: updatedFrom(() => Application.ConsoleValue)
    }
  }
});
PUX.configure({
  "Stuff Screen": {
    BoardBrowserPane: {
      BoardTreeView: {
        List: updatedFrom(() => {
          Application.BoardTreeState;
          Application.chosenBoard;
          return Application.BoardTree;
        }),
        LabelOfItem: (Board) => Board.Name,
        ContentListOfItem: (Board) => Board.BoardList,
        ItemRenderer: (Board, IndexPath) => {
          const Style = Application.chosenBoard === Board ? "font-weight:bold; text-decoration:underline" : void 0;
          if (Board.Name == null) {
            return m`<div class="ItemLabel" style=${Style}><i>(unnamed)</i></div>`;
          } else {
            return m`<div class="ItemLabel" style=${Style}>${Board.Name}</div>`;
          }
        },
        SelectionMode: "same-container",
        SelectionLimit: Number.MAX_SAFE_INTEGER,
        selectedPaths: updatedFrom(() => (Application.BoardTreeState, IndexPathsOfBoards(Application.selectedBoards))),
        onSelectionChange: (selectedBoardPaths) => Application.selectedBoards = BoardsAtIndexPaths(selectedBoardPaths),
        onItemDoubleClicked: (Board) => doVisitBoard(Board),
        expandedPaths: updatedFrom(() => (Application.BoardTreeState, IndexPathsOfBoards(Application.expandedBoards))),
        onExpansionChange: (expandedBoardPaths) => Application.expandedBoards = BoardsAtIndexPaths(expandedBoardPaths)
      },
      BoardCreateButton: {
        disabled: updatedFrom(() => Application.Project == null),
        onClick: () => doCreateNewBoard(Application.selectedBoards)
      },
      BoardDuplicateButton: {
        disabled: updatedFrom(() => Application.selectedBoards.length === 0),
        onClick: () => doDuplicateBoards(Application.selectedBoards)
      },
      BoardShiftOutButton: {
        disabled: updatedFrom(() => !Application.BoardSelectionMayBeShiftedOut),
        onClick: () => doShiftBoardsOut(Application.selectedBoards)
      },
      BoardShiftInButton: {
        disabled: updatedFrom(() => !Application.BoardSelectionMayBeShiftedIn),
        onClick: () => doShiftBoardsIn(Application.selectedBoards)
      },
      BoardShiftUpButton: {
        disabled: updatedFrom(() => !Application.BoardSelectionMayBeShiftedUp),
        onClick: () => doShiftBoardsUp(Application.selectedBoards)
      },
      BoardShiftDownButton: {
        disabled: updatedFrom(() => !Application.BoardSelectionMayBeShiftedDown),
        onClick: () => doShiftBoardsDown(Application.selectedBoards)
      },
      BoardDeleteButton: {
        disabled: updatedFrom(() => Application.selectedBoards.length === 0),
        onClick: () => doDeleteBoards(Application.selectedBoards)
      },
      BoardNameInput: {
        disabled: updatedFrom(() => Application.selectedBoards.length !== 1),
        Value: updatedFrom(() => Application.BoardTreeState && ValueFor(
          Application.selectedBoards.length === 0 ? noSelection : Application.selectedBoards.length === 1 ? Application.selectedBoards[0].Name : mixedValues
        )),
        onInput: (Event) => {
          if (Application.selectedBoards.length === 1) {
            doConfigureBoard(Application.selectedBoards[0], "Name", Event.target.value);
          }
        }
      }
    },
    StickerBrowserPane: {
      StickerListView: {
        List: updatedFrom(() => {
          Application.ViewState;
          return Application.StickerList;
        }),
        ItemRenderer: (Sticker) => {
          if (Sticker.Name == null) {
            return `<div class="ItemLabel"><i>(unnamed)</i></div>`;
          } else {
            return `<div class="ItemLabel">${Sticker.Name}</div>`;
          }
        },
        Placeholder: "(board is empty)",
        selectedIndices: updatedFrom(() => {
          Application.ViewState;
          return Application.selectedStickers.map(
            (Sticker) => Sticker.Index
          );
        }),
        SelectionLimit: Number.MAX_SAFE_INTEGER,
        onSelectionChange: (selectedIndices) => {
          const chosenBoard = Application.chosenBoard;
          if (chosenBoard == null) {
            return withWarning("there is currently no chosen board");
          }
          Application.selectedStickers = selectedIndices.map((Index) => chosenBoard.Sticker(Index));
        }
      },
      StickerCreateButton: {
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Options: StickerCreateOptions,
        onInput: (Event) => {
          doCreateNewSticker(Event.target.value);
          Event.target.value = "";
        }
      },
      StickerDuplicateButton: {
        disabled: updatedFrom(() => Application.selectedStickers.length == 0),
        onClick: () => doDuplicateStickers(Application.selectedStickers)
      },
      StickerShiftToTopButton: {
        disabled: updatedFrom(() => !Application.StickerSelectionMayBeShiftedUp),
        onClick: () => doShiftStickersToTop(Application.selectedStickers)
      },
      StickerShiftUpButton: {
        disabled: updatedFrom(() => !Application.StickerSelectionMayBeShiftedUp),
        onClick: () => doShiftStickersUp(Application.selectedStickers)
      },
      StickerShiftDownButton: {
        disabled: updatedFrom(() => !Application.StickerSelectionMayBeShiftedDown),
        onClick: () => doShiftStickersDown(Application.selectedStickers)
      },
      StickerShiftToBottomButton: {
        disabled: updatedFrom(() => !Application.StickerSelectionMayBeShiftedDown),
        onClick: () => doShiftStickersToBottom(Application.selectedStickers)
      },
      StickerDeleteButton: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        onClick: () => doDeleteStickers(Application.selectedStickers)
      },
      StickerNameInput: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => ValueFor(Application.StickerSelectionProperties.Name)),
        onInput: (Event) => doConfigureStickers(
          Application.selectedStickers,
          "Name",
          Event.target.value
        )
      }
    },
    ProjectConfigurationPane: {
      IdView: {
        readonly: true,
        Value: updatedFrom(() => ValueFor(Application.ProjectProperties.Id))
      },
      NameInput: {
        readonly: true,
        Value: updatedFrom(() => ValueFor(Application.ProjectProperties.Name))
      },
      SnapToGridCheck: {
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => BooleanFor(Application.ProjectProperties.SnapToGrid)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "SnapToGrid",
          Event.target.checked
        )
      },
      GridWidthInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => IntegerFor(Application.ProjectProperties.GridWidth)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "GridWidth",
          parseInt(Event.target.value, 10)
        )
      },
      GridHeightInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => IntegerFor(Application.ProjectProperties.GridHeight)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "GridHeight",
          parseInt(Event.target.value, 10)
        )
      },
      FontFamilyInput: {
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => ValueFor(Application.ProjectProperties.FontFamily)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "FontFamily",
          Event.target.value
        )
      },
      FontSizeInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => IntegerFor(Application.ProjectProperties.FontSize)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "FontSize",
          parseInt(Event.target.value, 10)
        )
      },
      BoldCheck: {
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => BooleanFor(Application.ProjectProperties.FontWeight, 700)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "FontWeight",
          Event.target.checked ? 700 : 400
        )
      },
      ItalicCheck: {
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => BooleanFor(Application.ProjectProperties.FontStyle, "italic")),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "FontStyle",
          Event.target.checked ? "italic" : "normal"
        )
      },
      TextColorInput: {
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => ValueFor(Application.ProjectProperties.ForegroundColor)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "ForegroundColor",
          Event.target.value
        )
      },
      LineHeightInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => IntegerFor(Application.ProjectProperties.LineHeight)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "LineHeight",
          parseInt(Event.target.value, 10)
        )
      },
      BackgroundColorInput: {
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => ValueFor(Application.ProjectProperties.BackgroundColor)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "BackgroundColor",
          Event.target.value
        )
      },
      TextureInput: {
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => ValueFor(Application.ProjectProperties.BackgroundTexture)),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "BackgroundTexture",
          Event.target.value
        )
      },
      ValueInput: {
        Style: "min-height:100px",
        disabled: updatedFrom(() => Application.Project == null),
        Value: updatedFrom(() => ValueFor(Application.ProjectProperties.editableValue)),
        Placeholder: updatedFrom(() => "(enter a value for the currently active board)"),
        onInput: (Event) => doConfigureProject(
          Application.Project,
          "editableValue",
          Event.target.value
        )
      },
      ValueEditorButton: {
        onClick: (Event) => {
          showDialogAround("ValueEditor", Event.clientX, Event.clientY);
          Application.ValueEditorMode = "Project";
        }
      }
    },
    BoardConfigurationPane: {
      IdView: {
        readonly: true,
        Value: updatedFrom(() => ValueFor(Application.BoardProperties.Id))
      },
      NameInput: {
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => ValueFor(Application.BoardProperties.Name)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "Name",
          Event.target.value
        )
      },
      SnapToGridCheck: {
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => BooleanFor(Application.BoardProperties.SnapToGrid)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "SnapToGrid",
          Event.target.checked
        )
      },
      GridWidthInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => IntegerFor(Application.BoardProperties.GridWidth)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "GridWidth",
          parseInt(Event.target.value, 10)
        )
      },
      GridHeightInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => IntegerFor(Application.BoardProperties.GridHeight)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "GridHeight",
          parseInt(Event.target.value, 10)
        )
      },
      FontFamilyInput: {
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => ValueFor(Application.BoardProperties.FontFamily)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "FontFamily",
          Event.target.value
        )
      },
      FontSizeInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => IntegerFor(Application.BoardProperties.FontSize)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "FontSize",
          parseInt(Event.target.value, 10)
        )
      },
      BoldCheck: {
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => BooleanFor(Application.BoardProperties.FontWeight, 700)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "FontWeight",
          Event.target.checked ? 700 : 400
        )
      },
      ItalicCheck: {
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => BooleanFor(Application.BoardProperties.FontStyle, "italic")),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "FontStyle",
          Event.target.checked ? "italic" : "normal"
        )
      },
      TextColorInput: {
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => ValueFor(Application.BoardProperties.ForegroundColor)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "ForegroundColor",
          Event.target.value
        )
      },
      LineHeightInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => IntegerFor(Application.BoardProperties.LineHeight)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "LineHeight",
          parseInt(Event.target.value, 10)
        )
      },
      BackgroundColorInput: {
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => ValueFor(Application.BoardProperties.BackgroundColor)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "BackgroundColor",
          Event.target.value
        )
      },
      TextureInput: {
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => ValueFor(Application.BoardProperties.BackgroundTexture)),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "BackgroundTexture",
          Event.target.value
        )
      },
      ValueInput: {
        Style: "min-height:100px",
        disabled: updatedFrom(() => Application.chosenBoard == null),
        Value: updatedFrom(() => ValueFor(Application.BoardProperties.editableValue)),
        Placeholder: updatedFrom(() => "(enter a value for the currently active board)"),
        onInput: (Event) => doConfigureBoard(
          Application.chosenBoard,
          "editableValue",
          Event.target.value
        )
      },
      ValueEditorButton: {
        onClick: (Event) => {
          showDialogAround("ValueEditor", Event.clientX, Event.clientY);
          Application.ValueEditorMode = "Board";
        }
      }
    },
    StickerConfigurationPane: {
      IdView: {
        readonly: true,
        Value: updatedFrom(() => ValueFor(Application.StickerSelectionProperties.Id))
      },
      NameInput: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => ValueFor(Application.StickerSelectionProperties.Name)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "Name", Event.target.value)
      },
      LockCheck: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.Lock)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "Lock", Event.target.checked)
      },
      VisibilityCheck: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.Visibility)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "Visibility", Event.target.checked)
      },
      xInput: {
        step: 1,
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Geometry.x)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "x", parseInt(Event.target.value, 10))
      },
      yInput: {
        step: 1,
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Geometry.y)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "y", parseInt(Event.target.value, 10))
      },
      WidthInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Geometry.Width)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "Width", parseInt(Event.target.value, 10))
      },
      HeightInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Geometry.Height)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "Height", parseInt(Event.target.value, 10))
      },
      IndexView: {
        readonly: true,
        Value: updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Index))
      },
      ShiftToTopButton: {
        disabled: updatedFrom(() => !Application.StickerSelectionMayBeShiftedDown),
        onClick: () => doShiftStickersToBottom(Application.selectedStickers)
      },
      ShiftUpButton: {
        disabled: updatedFrom(() => !Application.StickerSelectionMayBeShiftedDown),
        onClick: () => doShiftStickersDown(Application.selectedStickers)
      },
      ShiftDownButton: {
        disabled: updatedFrom(() => !Application.StickerSelectionMayBeShiftedUp),
        onClick: () => doShiftStickersUp(Application.selectedStickers)
      },
      ShiftToBottomButton: {
        disabled: updatedFrom(() => !Application.StickerSelectionMayBeShiftedUp),
        onClick: () => doShiftStickersToTop(Application.selectedStickers)
      },
      FontFamilyInput: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => ValueFor(Application.StickerSelectionProperties.FontFamily)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "FontFamily", Event.target.value)
      },
      FontSizeInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.FontSize)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "FontSize", parseInt(Event.target.value, 10))
      },
      BoldCheck: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.FontWeight, 700)),
        onInput: (Event) => doConfigureStickers(
          Application.selectedStickers,
          "FontWeight",
          Event.target.checked ? 700 : 400
        )
      },
      ItalicCheck: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.FontStyle, "italic")),
        onInput: (Event) => doConfigureStickers(
          Application.selectedStickers,
          "FontStyle",
          Event.target.checked ? "italic" : "normal"
        )
      },
      TextColorInput: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => ValueFor(Application.StickerSelectionProperties.ForegroundColor)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "ForegroundColor", Event.target.value)
      },
      LineHeightInput: {
        min: 0,
        step: 1,
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.LineHeight)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "LineHeight", parseInt(Event.target.value, 10))
      },
      BackgroundColorInput: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => ValueFor(Application.StickerSelectionProperties.BackgroundColor)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "BackgroundColor", Event.target.value)
      },
      TextureInput: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => ValueFor(Application.StickerSelectionProperties.BackgroundTexture)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "BackgroundTexture", Event.target.value)
      },
      EnablingCheck: {
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.Enabling)),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "Enabling", Event.target.checked)
      },
      ValueInput: {
        Style: "min-height:100px",
        disabled: updatedFrom(() => Application.selectedStickers.length === 0),
        Value: updatedFrom(() => ValueFor(Application.StickerSelectionProperties.editableValue)),
        Placeholder: updatedFrom(() => "(enter a common value for all currently selected stickers)"),
        onInput: (Event) => doConfigureStickers(Application.selectedStickers, "editableValue", Event.target.value)
      },
      ValueEditorButton: {
        onClick: (Event) => {
          showDialogAround("ValueEditor", Event.clientX, Event.clientY);
          Application.ValueEditorMode = "Stickers";
        }
      }
    }
  }
});
PUX.startWithScreen("MainScreen");
PUX.renderInto(document.body);
const BoardViewWidget = PUX.existingWidgetNamed("BoardView").View;
function setInspectorPaneGroup(PaneGroup) {
  if (PaneGroup === "Stickers" && Application.InspectorPaneChoice === "Browser") {
    Application.InspectorPaneChoice = "Configuration";
  }
  Application.InspectorPaneGroup = PaneGroup;
  updateInspectorPane();
}
function setInspectorPaneChoice(PaneChoice) {
  if (Application.InspectorPaneGroup === "Stickers" && PaneChoice === "Browser") {
    PaneChoice = "Configuration";
  }
  Application.InspectorPaneChoice = PaneChoice;
  updateInspectorPane();
}
function updateInspectorPane() {
  const PaneIndexSet = {
    Project: { Browser: 0, Configuration: 2 },
    Board: { Browser: 1, Configuration: 3 },
    Stickers: { Browser: 1, Configuration: 4 }
  };
  const PaneGroup = Application.InspectorPaneGroup;
  const PaneChoice = Application.InspectorPaneChoice;
  Application.InspectorPaneIndex = PaneIndexSet[PaneGroup][PaneChoice];
}
function showDialogAround(DialogName, x, y) {
  let Dialog = PUX.existingDialogNamed(DialogName);
  if (Dialog.x === -1 && Dialog.y === -1) {
    const { Width, Height } = Dialog;
    const MainScreen = PUX.existingScreenNamed("MainScreen");
    const { width: maxX, height: maxY } = MainScreen.View.base.getBoundingClientRect();
    Dialog.x = Math.max(0, Math.min(x, maxX - Width));
    Dialog.y = Math.max(0, Math.min(y, maxY - Height));
  }
  PUX.openDialog(DialogName);
}
function showDialogCentered(DialogName) {
  let Dialog = PUX.existingDialogNamed(DialogName);
  if (Dialog.x === -1 && Dialog.y === -1) {
    const { Width, Height } = Dialog;
    const MainScreen = PUX.existingScreenNamed("MainScreen");
    const { width: ScreenWidth, height: ScreenHeight } = MainScreen.View.base.getBoundingClientRect();
    Dialog.x = Math.max(0, Math.round((ScreenWidth - Width) / 2));
    Dialog.y = Math.max(0, Math.round((ScreenHeight - Height) / 2));
  }
  PUX.openDialog(DialogName);
}
async function doCreateProject(Name) {
  switch (true) {
    case Name == null:
      return withWarning('no "Name" given');
    case !ValueIsName(Name):
      return withWarning('invalid "Name" given');
  }
  if (PersistenceIsPending()) {
    persistProject();
  }
  await createPersistedProject(Name);
  await openPersistedProject(Name);
  PUX.closeDialog("ProjectBrowser");
}
async function doOpenProject(Name) {
  switch (true) {
    case Name == null:
      return withWarning('no "Name" given');
    case !ValueIsName(Name):
      return withWarning('invalid "Name" given');
  }
  if (PersistenceIsPending()) {
    persistProject();
  }
  await openPersistedProject(Name);
  PUX.closeDialog("ProjectBrowser");
}
function doRenameProject(oldName, newName) {
  switch (true) {
    case oldName == null:
      return withWarning('no "oldName" given');
    case !ValueIsName(oldName):
      return withWarning('invalid "oldName" given');
    case newName == null:
      return withWarning('no "newName" given');
    case !ValueIsName(newName):
      return withWarning('invalid "newName" given');
    case oldName === newName:
      return withWarning('"oldName" and "newName" are identical');
  }
  if (OperationWasConfirmed(
    "Do you really want to rename project " + quoted(oldName) + " to " + quoted(newName) + "?"
  )) {
    renamePersistedProjectTo(oldName, newName);
  }
}
function doPurgeProject(Name) {
  switch (true) {
    case Name == null:
      return withWarning('no "Name" given');
    case !ValueIsName(Name):
      return withWarning('invalid "Name" given');
  }
  if (OperationWasConfirmed(
    "Do you really want to delete project " + quoted(Name) + "?"
  )) {
    purgePersistedProject(Name);
  }
}
function doSwitchMode() {
  const currentMode = Application.Mode;
  Application.Mode = currentMode === "edit" ? "run" : "edit";
}
function doConfigureProject(Project, PropertyName, PropertyValue) {
  switch (true) {
    case Project == null:
      return withWarning('no "Project" given');
    case !(PropertyName in SNS_ProjectDefaults):
      return withWarning("unknown project property " + quoted(PropertyName));
  }
  doOperation(new SNS_ProjectConfigurationOperation(
    Project,
    PropertyName,
    PropertyValue
  ));
}
function doApplyProjectScript(Project) {
  switch (true) {
    case Project == null:
      return withWarning('no "Project" given');
  }
  applyPendingScriptOfVisual(Project);
}
function doWithdrawProjectScript(Project) {
  switch (true) {
    case Project == null:
      return withWarning('no "Project" given');
  }
  doOperation(new SNS_ProjectConfigurationOperation(
    Project,
    "pendingScript",
    void 0
  ));
  Project.ScriptError = void 0;
}
function doCreateNewBoard(BoardList) {
  switch (true) {
    case !ValueIsListSatisfying(BoardList, ValueIsBoard):
      return withWarning('the given "BoardList" contains invalid elements', BoardList);
    case BoardList.some((Board) => !Board.isAttached):
      return withWarning('some boards in the given "BoardList" are no longer attached', BoardList);
  }
  let Folder, Index;
  if (BoardList.length > 0) {
    Folder = BoardList[0].Folder;
    Index = bottommostIndexOfBoards(BoardList) + 1;
  } else {
    const chosenBoard = Application.chosenBoard;
    if (chosenBoard == null) {
      Folder = Application.Project;
      Index = 0;
    } else {
      Folder = chosenBoard.Folder;
      Index = chosenBoard.Index + 1;
    }
  }
  doOperation(new SNS_BoardDeserializationOperation(
    Folder,
    [{}],
    Index
  ));
}
function doDuplicateBoards(BoardList) {
  switch (true) {
    case !ValueIsListSatisfying(BoardList, ValueIsBoard):
      return withWarning('the given "BoardList" contains invalid elements', BoardList);
    case BoardList.some((Board) => !Board.isAttached):
      return withWarning('some boards in the given "BoardList" are no longer attached', BoardList);
  }
  const sortedBoards = BoardsSortedByIndex(BoardList);
  const Folder = commonFolderOfBoards(BoardList);
  const Serializations = sortedBoards.map(
    (Board) => Board.Serialization
  );
  const Index = BoardList[BoardList.length - 1].Index + 1;
  doOperation(new SNS_BoardDeserializationOperation(
    Folder,
    Serializations,
    Index
  ));
}
function doConfigureBoard(Board, PropertyName, PropertyValue) {
  switch (true) {
    case Board == null:
      return withWarning('no "Board" given');
    case !Board.isAttached:
      return withWarning('the given "Board" is no longer attached');
    case !(PropertyName in SNS_BoardDefaults):
      return withWarning("unknown board property " + quoted(PropertyName));
  }
  doOperation(new SNS_BoardConfigurationOperation(
    Board,
    PropertyName,
    PropertyValue
  ));
}
function doApplyBoardScript(Board) {
  switch (true) {
    case Board == null:
      return withWarning('no "Board" given');
    case !Board.isAttached:
      return withWarning('the given "Board" is no longer attached');
  }
  applyPendingScriptOfVisual(Board);
}
function doWithdrawBoardScript(Board) {
  switch (true) {
    case Board == null:
      return withWarning('no "Board" given');
    case !Board.isAttached:
      return withWarning('the given "Board" is no longer attached');
  }
  doOperation(new SNS_BoardConfigurationOperation(
    Board,
    "pendingScript",
    void 0
  ));
  Board.ScriptError = void 0;
}
function doShiftBoardsIn(BoardList) {
  switch (true) {
    case !ValueIsListSatisfying(BoardList, ValueIsBoard):
      return withWarning('the given "BoardList" contains invalid elements', BoardList);
    case BoardList.some((Board) => !Board.isAttached):
      return withWarning('some boards in the given "BoardList" are no longer attached', BoardList);
  }
  const Folder = commonFolderOfBoards(BoardList);
  const sortedBoards = BoardsSortedByIndex(BoardList);
  const TargetFolder = Folder.Board(bottommostIndexOfBoards(BoardList) + 1);
  if (TargetFolder == null) {
    return withWarning("the given boards can not be shifted in");
  }
  doOperation(new SNS_BoardMoveOperation(
    Folder,
    sortedBoards,
    TargetFolder,
    0
  ));
  if (Application.expandedBoards.indexOf(TargetFolder) < 0) {
    Application.expandedBoards = Application.expandedBoards.concat(TargetFolder);
  }
}
function doShiftBoardsOut(BoardList) {
  switch (true) {
    case !ValueIsListSatisfying(BoardList, ValueIsBoard):
      return withWarning('the given "BoardList" contains invalid elements', BoardList);
    case BoardList.some((Board) => !Board.isAttached):
      return withWarning('some boards in the given "BoardList" are no longer attached', BoardList);
  }
  const Folder = commonFolderOfBoards(BoardList);
  const sortedBoards = BoardsSortedByIndex(BoardList);
  const TargetFolder = Folder.Folder;
  if (TargetFolder == null) {
    return withWarning("the given boards can not be shifted out");
  }
  doOperation(new SNS_BoardMoveOperation(
    Folder,
    sortedBoards,
    TargetFolder,
    Folder.Index
  ));
}
function doShiftBoardsUp(BoardList) {
  switch (true) {
    case !ValueIsListSatisfying(BoardList, ValueIsBoard):
      return withWarning('the given "BoardList" contains invalid elements', BoardList);
    case BoardList.some((Board) => !Board.isAttached):
      return withWarning('some boards in the given "BoardList" are no longer attached', BoardList);
  }
  const sortedBoards = BoardsSortedByIndex(BoardList);
  const Folder = commonFolderOfBoards(BoardList);
  const newIndex = Math.max(0, topmostIndexOfBoards(BoardList) - 1);
  const IndexList = sortedBoards.map((_, i) => newIndex + i);
  doOperation(new SNS_BoardShiftOperation(Folder, sortedBoards, IndexList));
}
function doShiftBoardsDown(BoardList) {
  switch (true) {
    case !ValueIsListSatisfying(BoardList, ValueIsBoard):
      return withWarning('the given "BoardList" contains invalid elements', BoardList);
    case BoardList.some((Board) => !Board.isAttached):
      return withWarning('some boards in the given "BoardList" are no longer attached', BoardList);
  }
  const sortedBoards = BoardsSortedByIndex(BoardList);
  const Folder = commonFolderOfBoards(BoardList);
  const newIndex = Math.min(bottommostIndexOfBoards(BoardList) + 1, Folder.BoardCount - 1) + 1 - BoardList.length;
  const IndexList = sortedBoards.map((_, i) => newIndex + i);
  doOperation(new SNS_BoardShiftOperation(Folder, sortedBoards, IndexList));
}
function doDeleteBoards(BoardList) {
  switch (true) {
    case !ValueIsListSatisfying(BoardList, ValueIsBoard):
      return withWarning('the given "BoardList" contains invalid elements', BoardList);
    case BoardList.some((Board) => !Board.isAttached):
      return withWarning('some boards in the given "BoardList" are no longer attached', BoardList);
  }
  doOperation(new SNS_BoardDeletionOperation(
    BoardsSortedByIndex(BoardList)
  ));
}
function doCreateNewSticker(BehaviorName) {
  const Board = Application.chosenBoard;
  switch (true) {
    case BehaviorName == null:
      return withWarning('no "BehaviorName" given');
    case !ValueIsIdentifier(BehaviorName):
      return withWarning('invalid "BehaviorName" given');
    case Board == null:
      return withWarning("there is currently no chosen board");
    case !Board.isAttached:
      return withWarning("the chosen board is no longer attached");
  }
  const selectedStickers = Application.selectedStickers;
  const Index = selectedStickers.length === 0 ? Board.StickerCount : bottommostIndexOfStickers(selectedStickers) + 1;
  doOperation(new SNS_StickerDeserializationOperation(
    Board,
    [TemplateOfBehavior(BehaviorName)],
    Index
  ));
}
function doDuplicateStickers(StickerList) {
  const Board = Application.chosenBoard;
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
    case Board == null:
      return withWarning("there is currently no chosen board");
    case !Board.isAttached:
      return withWarning("the chosen board is no longer attached");
  }
  const Serializations = StickersSortedByIndex(StickerList).map(
    (Sticker) => Sticker.Serialization
  );
  const Index = bottommostIndexOfStickers(StickerList) + 1;
  doOperation(new SNS_StickerDeserializationOperation(
    Board,
    Serializations,
    Index
  ));
  const StickerDuplicates = Application.selectedStickers;
  if (StickerDuplicates.length > 0) {
    const DuplicateGeometries = StickerDuplicates.map(
      (Sticker) => {
        const Geometry = Sticker.Geometry;
        Geometry.x += 20;
        Geometry.y += 20;
        return Geometry;
      }
    );
    doChangeStickerGeometries(StickerDuplicates, DuplicateGeometries);
  }
}
function doConfigureStickers(StickerList, PropertyName, PropertyValue) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
    case (!(PropertyName in SNS_StickerDefaults) && (PropertyName !== "x" && PropertyName !== "Width" && PropertyName !== "y" && PropertyName !== "Height")):
      return withWarning("unknown sticker property " + quoted(PropertyName));
  }
  doOperation(new SNS_StickerConfigurationOperation(
    StickerList,
    PropertyName,
    PropertyValue
  ));
}
function doApplyStickerScript(StickerList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
  }
  StickerList.forEach(
    (Sticker) => applyPendingScriptOfVisual(Sticker)
  );
}
function doWithdrawStickerScript(StickerList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
  }
  doOperation(new SNS_StickerConfigurationOperation(
    StickerList,
    "pendingScript",
    void 0
  ));
  StickerList.forEach((Sticker) => {
    Sticker.ScriptError = void 0;
  });
}
function doChangeStickerGeometries(StickerList, GeometryList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
    case !ValueIsListSatisfying(GeometryList, ValueIsGeometry):
      return withWarning('the given "GeometryList" contains invalid elements', GeometryList);
    case StickerList.length !== GeometryList.length:
      return withWarning('the given "StickerList" and "GeometryList" do not match', StickerList, GeometryList);
  }
  doOperation(new SNS_StickerShapeOperation(
    StickerList,
    GeometryList
  ));
}
function doShiftStickersToTop(StickerList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
  }
  doOperation(new SNS_StickerShiftOperation(
    StickersSortedByIndex(StickerList),
    StickerList.map((_, i) => i)
  ));
}
function doShiftStickersUp(StickerList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
  }
  const sortedStickers = StickersSortedByIndex(StickerList);
  const newIndex = Math.max(0, topmostIndexOfStickers(StickerList) - 1);
  const IndexList = sortedStickers.map((_, i) => newIndex + i);
  doOperation(new SNS_StickerShiftOperation(sortedStickers, IndexList));
}
function doShiftStickersDown(StickerList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
  }
  const sortedStickers = StickersSortedByIndex(StickerList);
  const Board = commonBoardOfStickers(StickerList);
  if (Board == null) {
    return withWarning("the given stickers do not share the same folder");
  }
  const newIndex = Math.min(bottommostIndexOfStickers(StickerList) + 1, Board.StickerCount - 1) + 1 - StickerList.length;
  const IndexList = sortedStickers.map((_, i) => newIndex + i);
  doOperation(new SNS_StickerShiftOperation(sortedStickers, IndexList));
}
function doShiftStickersToBottom(StickerList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
  }
  const sortedStickers = StickersSortedByIndex(StickerList);
  const Board = commonBoardOfStickers(StickerList);
  if (Board == null) {
    return withWarning("the given stickers do not share the same folder");
  }
  const newIndex = Board.StickerCount - StickerList.length;
  const IndexList = sortedStickers.map((_, i) => newIndex + i);
  doOperation(new SNS_StickerShiftOperation(sortedStickers, IndexList));
}
function doDeleteStickers(StickerList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
  }
  doOperation(new SNS_StickerDeletionOperation(
    StickersSortedByIndex(StickerList)
  ));
}
function doCutStickers(StickerList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
  }
  Shelf.splice(0, Shelf.length);
  StickerList = StickersSortedByIndex(StickerList);
  StickerList.forEach((Sticker) => {
    const Serialization = Sticker.Serialization;
    Shelf.push(Serialization);
  });
  doDeleteStickers(StickerList);
  Application.ShelfIsFilled = Shelf.length > 0;
}
function doCopyStickers(StickerList) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return withWarning('the given "StickerList" is empty');
  }
  Shelf.splice(0, Shelf.length);
  StickerList = StickersSortedByIndex(StickerList);
  StickerList.forEach((Sticker) => {
    const Serialization = Sticker.Serialization;
    removeIdsFrom(Serialization);
    Shelf.push(Serialization);
  });
  Application.ShelfIsFilled = Shelf.length > 0;
}
function doPasteStickers() {
  switch (true) {
    case !Application.ShelfIsFilled:
      return withWarning("shelf is empty");
  }
  const Board = Application.chosenBoard;
  if (Board == null) {
    return withWarning("there is curently no chosen board");
  }
  doOperation(new SNS_StickerDeserializationOperation(
    Board,
    Shelf.slice(),
    Board.StickerCount
  ));
}
function doPasteStickersAround(x, y) {
  switch (true) {
    case !Application.ShelfIsFilled:
      return withWarning("shelf is empty");
  }
  const Board = Application.chosenBoard;
  if (Board == null) {
    return withWarning("there is curently no chosen board");
  }
  doOperation(new SNS_StickerDeserializationOperation(
    Board,
    Shelf.slice(),
    Board.StickerCount
  ));
  const pastedStickers = Application.selectedStickers;
  const { minX, minY } = topLeftPositionOfStickers(pastedStickers);
  const dX = x - minX;
  const dY = y - minY;
  const pastedGeometries = pastedStickers.map(
    (Sticker) => {
      const Geometry = Sticker.Geometry;
      Geometry.x += dX;
      Geometry.y += dY;
      return Geometry;
    }
  );
  doChangeStickerGeometries(pastedStickers, pastedGeometries);
}
function doUndoOperation() {
  undoOperation();
}
function doRedoOperation() {
  redoOperation();
}
function doVisitPrevBoard() {
  visitPrevBoard();
}
function doVisitNextBoard() {
  visitNextBoard();
}
function doVisitBoard(Board) {
  switch (true) {
    case Board == null:
      break;
    case !Board.isAttached:
      return withWarning('the given "Board" is no longer attached');
  }
  visitBoard(Board);
}
function doImport(File) {
  let Reader = new FileReader();
  Reader.onabort = function LoadAborted() {
    alert("import was aborted");
  };
  Reader.onerror = function LoadFailed() {
    alert("import failed");
  };
  Reader.onload = function FileLoaded(Event) {
    let FileValue = new TextDecoder().decode(Reader.result);
    console.log("Reader.onload");
    const chosenProject = Application.Project;
    if (chosenProject == null) {
      return;
    }
    const chosenBoard = Application.chosenBoard;
    try {
      let Serialization = JSON.parse(FileValue);
      if (ValueIsArray(Serialization)) {
        if (chosenBoard == null) {
          window.alert("please prepare a board to import stickers into");
          return;
        }
        Serialization.forEach(
          // assign new ids to any imported stickers
          (Serialization2) => removeIdsFrom(Serialization2)
        );
        const importedStickers = Serialization.map(
          (Serialization2) => chosenBoard.StickerDeserializedAt(Serialization2)
        );
        importedStickers.forEach(
          (Sticker) => Sticker.activateScript()
        );
        selectStickers(importedStickers);
        return;
      }
      if (Serialization.StickerList != null) {
        if (chosenProject == null) {
          window.alert("please prepare a project to import this board into");
          return;
        }
        const Folder = chosenBoard == null ? chosenProject : chosenBoard.Folder;
        const Index = chosenBoard == null ? 0 : chosenBoard.Index + 1;
        removeIdsFrom(Serialization);
        const importedBoard = Folder.BoardDeserializedAt(Serialization, Index);
        importedBoard.recursivelyActivateAllScripts();
        visitBoard(importedBoard);
        return;
      }
      if (chosenBoard == null || OperationWasConfirmed()) {
        chosenProject.clear();
        Object.keys(SNS_ProjectDefaults).forEach((Property) => {
          if (Property !== "Id" && Property !== "Name") {
            if (Serialization[Property] != null) {
              chosenProject[Property] = Serialization[Property];
            }
          }
        });
        if (ValueIsArray(Serialization.BoardList)) {
          Serialization.BoardList.forEach(
            // @ts-ignore TS2322 (I don't understand the error message)
            (Serialization2) => chosenProject.BoardDeserializedAt(Serialization2)
          );
        }
        chosenProject.recursivelyActivateAllScripts();
      }
    } catch (Signal) {
      console.error(Signal);
      alert("import failed");
    }
  };
  Reader.readAsArrayBuffer(File);
}
function doExport(Scope) {
  let JSONObject, FileName;
  switch (Scope) {
    case "whole Project":
      const Project = Application.Project;
      if (Project == null) {
        return withWarning("there is currently no active project");
      }
      FileName = Project.Name || "SNS-Project";
      JSONObject = Project.Serialization;
      break;
    case "active Board":
      const chosenBoard = Application.chosenBoard;
      if (chosenBoard == null) {
        return withWarning("there is currently no chosen board");
      }
      FileName = chosenBoard.Name || "SNS-Board";
      JSONObject = chosenBoard.Serialization;
      break;
    case "selected Stickers":
    default:
      const selectedStickers = Application.selectedStickers;
      if (selectedStickers.length === 0) {
        return withWarning("there are currently no selected stickers");
      }
      FileName = "SNS-Stickers";
      JSONObject = selectedStickers.map(
        (Sticker) => Sticker.Serialization
      );
  }
  const serialisedExport = JSON.stringify(JSONObject);
  const encodedExport = new TextEncoder().encode(serialisedExport);
  const decodedExport = new TextDecoder().decode(encodedExport);
  if (serialisedExport === decodedExport) {
    download(encodedExport, FileName + ".json", "application/json;charset=utf-8");
  } else {
    window.alert("this export is not safe");
  }
}
function doGenerateAppletFromBoard(Board, Mode) {
  switch (true) {
    case Board == null:
      return withWarning('no "Board" given');
    case !Board.isAttached:
      return withWarning('the given "Board" is no longer attached');
  }
  generateAppletFromBoard(Board, Mode);
}
function doGenerateAppletFromBoardAndSuccessors(Board, Mode) {
  switch (true) {
    case Board == null:
      return withWarning('no "Board" given');
    case !Board.isAttached:
      return withWarning('the given "Board" is no longer attached');
  }
  generateAppletFromBoardAndSuccessors(Board, Mode);
}
function doGenerateAppletFromStickers(StickerList, Mode) {
  switch (true) {
    case !ValueIsListSatisfying(StickerList, ValueIsSticker):
      return withWarning('the given "StickerList" contains invalid elements', StickerList);
    case StickerList.some((Sticker) => !Sticker.isAttached):
      return withWarning('some stickers in the given "StickerList" are no longer attached', StickerList);
    case StickerList.length === 0:
      return;
  }
  generateAppletFromStickers(StickerList, Mode);
}
function doPrintBoard() {
  switch (true) {
    case Application.chosenBoard == null:
      return withWarning("there is currently no chosen board");
  }
  window.print();
}
function OperationWasConfirmed(Message) {
  let ConformationCode = Math.round(Math.random() * 1e4).toString();
  ConformationCode += "0000".slice(ConformationCode.length);
  Message = (Message || "This operation can not be undone.") + "\n\nPlease, enter the following number if you want to proceed:\n\n   " + ConformationCode + "\n\nOtherwise, the operation will be cancelled";
  let UserInput = window.prompt(Message, "");
  if (UserInput === ConformationCode) {
    return true;
  } else {
    window.alert("Operation will be cancelled");
    return false;
  }
}
let ProjectStore;
function SerializationOfEmptyProject(Name) {
  return {
    Id: newId(),
    Name,
    SnapToGrid: false,
    GridWidth: 10,
    GridHeight: 10,
    BoardList: [{
      Id: newId()
    }]
  };
}
async function fetchPersistedProjectList() {
  let persistedProjectList;
  try {
    persistedProjectList = (await ProjectStore.keys()).sort();
  } catch (Signal) {
    console.warn("could not fetch names of persisted projects", Signal);
  }
  Application.persistedProjectList = persistedProjectList;
  let normalizedProjectList = Application.persistedProjectList.map(
    (Name) => Name.toLowerCase()
  );
  Application.normalizedProjectList = normalizedProjectList;
  if (Application.selectedProjectName != null) {
    let selectedProjectIndex = normalizedProjectList.indexOf(
      Application.selectedProjectName.toLowerCase()
    );
    if (selectedProjectIndex < 0) {
      Application.selectedProjectName = void 0;
      Application.selectedProjectIndex = void 0;
    } else {
      Application.selectedProjectName = persistedProjectList[selectedProjectIndex];
      Application.selectedProjectIndex = selectedProjectIndex;
    }
  }
}
async function createPersistedProject(Name) {
  let normalizedName = Name.toLowerCase();
  if (Application.normalizedProjectList.indexOf(normalizedName) >= 0) throwError(
    "ProjectExists: a project named " + quoted(Name) + " exists already"
  );
  const Serialization = SerializationOfEmptyProject(Name);
  try {
    await ProjectStore.setItem(
      Name,
      JSON.stringify(Serialization)
    );
  } catch (Signal) {
    throwError(
      "PersistenceWriteError: could not write project " + quoted(Name) + ", reason: " + Signal
    );
  }
  await fetchPersistedProjectList();
  Application.selectedProjectName = Name;
  Application.selectedProjectIndex = Application.normalizedProjectList.indexOf(normalizedName);
}
async function renamePersistedProjectTo(oldName, newName) {
  await fetchPersistedProjectList();
  let normalizedProjectList = Application.normalizedProjectList;
  if (normalizedProjectList.indexOf(oldName.toLowerCase()) < 0) throwError(
    "NoSuchProject: a project named " + quoted(oldName) + " does not exist"
  );
  if (normalizedProjectList.indexOf(newName.toLowerCase()) >= 0) throwError(
    "ProjectExists: a project named " + quoted(newName) + " exists already"
  );
  let Serialization = {};
  try {
    Serialization = JSON.parse(await ProjectStore.getItem(oldName));
  } catch (Signal) {
    throwError(
      "PersistenceReadError: could not read project " + quoted(oldName) + ", reason: " + Signal
    );
  }
  Serialization.Name = newName;
  try {
    await ProjectStore.setItem(newName, JSON.stringify(Serialization));
  } catch (Signal) {
    throwError(
      "PersistenceWriteError: could not write project " + quoted(newName) + ", reason: " + Signal
    );
  }
  try {
    await ProjectStore.removeItem(oldName);
  } catch (Signal) {
    throwError(
      "PersistenceWriteError: could not delete project " + quoted(oldName) + ", reason: " + Signal
    );
  }
  if (Application.selectedProjectName != null) {
    if (Application.selectedProjectName.toLowerCase() === oldName.toLowerCase()) {
      Application.selectedProjectName = newName;
    }
  }
  await fetchPersistedProjectList();
}
async function openPersistedProject(Name) {
  await fetchPersistedProjectList();
  let normalizedProjectList = Application.normalizedProjectList;
  if (normalizedProjectList.indexOf(Name.toLowerCase()) < 0) throwError(
    "NoSuchProject: a project named " + quoted(Name) + " does not exist"
  );
  let Serialization = {};
  try {
    Serialization = JSON.parse(await ProjectStore.getItem(Name));
  } catch (Signal) {
    throwError(
      "PersistenceReadError: could not read project " + quoted(Name) + ", reason: " + Signal
    );
  }
  try {
    Application.Project = SNS_Project.deserializedFrom(Name, Serialization);
    Application.Project.onChange(ProjectChangeCallback);
    Application.Project.onRender(ProjectRenderCallback);
    Application.Project.onError(ProjectErrorCallback);
    Application.Project.recursivelyActivateAllScripts();
    window["Project"] = Application.Project;
    hideDesignerTools();
  } catch (Signal) {
    throwError(
      "DeserializationError: could not deserialize project " + quoted(Name) + ", reason: " + Signal
    );
  }
}
async function purgePersistedProject(Name) {
  try {
    await ProjectStore.removeItem(Name);
  } catch (Signal) {
    throwError(
      "PersistenceWriteError: could not delete project " + quoted(Name) + ", reason: " + Signal
    );
  }
  if (Application.selectedProjectName != null) {
    if (Application.selectedProjectName.toLowerCase() === Name.toLowerCase()) {
      Application.selectedProjectName = Name;
    }
  }
  await fetchPersistedProjectList();
}
function triggerPersistenceFor(Project) {
  Application.ProjectToPersist = Project;
  if (Application.DelayTimer == null) {
    Application.DelayTimer = setTimeout(persistProject, 1 * 1e3);
    Application.DelayLimitTimer = setTimeout(persistProject, 60 * 1e3);
  } else {
    clearTimeout(Application.DelayTimer);
    Application.DelayTimer = setTimeout(persistProject, 1 * 1e3);
  }
}
function untriggerPersistence() {
  Application.ProjectToPersist = void 0;
  if (Application.DelayTimer != null) {
    clearTimeout(Application.DelayTimer);
    Application.DelayTimer = void 0;
  }
  if (Application.DelayLimitTimer != null) {
    clearTimeout(Application.DelayLimitTimer);
    Application.DelayLimitTimer = void 0;
  }
}
function PersistenceIsPending() {
  return Application.ProjectToPersist != null;
}
async function persistProject() {
  const Project = Application.ProjectToPersist;
  untriggerPersistence();
  if (Application.PersistenceState === "running") {
    Application.PersistenceRequested = true;
  }
  Application.PersistenceRequested = false;
  Application.PersistenceState = "running";
  try {
    await ProjectStore.setItem(
      Project.Name,
      JSON.stringify(Project.Serialization)
    );
    Application.PersistenceState = "idle";
  } catch (Signal) {
    throwError(
      "PersistenceFailure: could not persist project " + quoted(Project.Name)
    );
    Application.PersistenceState = "failed";
  }
  if (Application.PersistenceRequested) {
    persistProject();
  }
}
function ProjectNameIsAvailable(Name) {
  return ValueIsName(Application.ProjectName) && Application.normalizedProjectList.indexOf(Name.toLowerCase()) < 0;
}
function ProjectIsOpen(Name) {
  return Application.Project != null && Application.Project.Name.toLowerCase() !== Name.toLowerCase();
}
function ProjectChangeCallback(Project, Change, ...ArgList) {
  triggerPersistenceFor(Project);
  switch (Change) {
    case "attachBoard":
    case "detachBoard":
      Application.BoardTree = Project.BoardList;
      Application.BoardTreeState++;
      return;
    case "configureFolder":
      if (ArgList[1] === "Name") {
        Application.BoardTreeState++;
      }
      switch (ArgList[0]) {
        case Application.Project:
          Application.ProjectProperties = PropertiesOfProject(Project);
          Application.BoardProperties = PropertiesOfBoard(Application.chosenBoard);
          Application.StickerSelectionProperties = PropertiesOfStickers(Application.selectedStickers);
          Application.ViewState++;
          return;
        case Application.chosenBoard:
          Application.BoardProperties = PropertiesOfBoard(Application.chosenBoard);
          Application.StickerSelectionProperties = PropertiesOfStickers(Application.selectedStickers);
          Application.ViewState++;
          return;
        default:
          if (ArgList[0].containsFolder(Application.chosenBoard)) {
            Application.BoardProperties = PropertiesOfBoard(Application.chosenBoard);
            Application.StickerSelectionProperties = PropertiesOfStickers(Application.selectedStickers);
            Application.ViewState++;
          }
      }
      return;
    case "attachSticker":
    case "detachSticker":
      if (ArgList[1] === Application.chosenBoard) {
        Application.StickerList = Application.chosenBoard.StickerList;
        Application.ViewState++;
      }
      return;
    case "configureSticker":
      if (ArgList[0].Board === Application.chosenBoard) {
        const selectedStickers = Application.selectedStickers;
        if (ArgList[1] === "Geometry") {
          Application.StickerSelectionGeometries = selectedStickers.map(
            (Sticker) => Sticker.Geometry
          );
        }
        Application.StickerSelectionProperties = PropertiesOfStickers(selectedStickers);
        Application.ViewState++;
      }
      return;
  }
}
function ProjectRenderCallback(Project, Board, Sticker) {
  if (Board === Application.chosenBoard || Application.chosenBoard == null) {
    BoardViewWidget.rerender();
  }
}
function ProjectErrorCallback(Project, Visual, Error2) {
  window.alert(
    Error2.Type + "\n" + Error2.Message + "\n" + Error2.Cause
  );
}
function selectBoards(BoardList) {
  expectListSatisfying("list of boards to be selected", BoardList, ValueIsBoard);
  if (BoardList.length === 0) {
    Application.selectedBoards = [];
    return;
  }
  try {
    const Folder = commonFolderOfBoards(BoardList);
    const BoardSet = /* @__PURE__ */ new Set();
    BoardList.forEach((Board) => BoardSet.add(Board));
    Application.selectedBoards = BoardsSortedByIndex(
      Array.from(BoardSet.values())
    );
  } catch (Signal) {
    Application.selectedBoards = [];
    console.error("InternalError:selected boards do not share the same folder");
  }
}
function _chooseBoard(Board) {
  Application.chosenBoard = Board != null && Board.isAttached ? Board : void 0;
}
function selectStickers(StickerList) {
  if (StickerList.length === 0) {
    Application.selectedStickers = [];
    return;
  }
  const StickerSet = /* @__PURE__ */ new Set();
  const chosenBoard = Application.chosenBoard;
  StickerList.forEach((Sticker) => {
    if (Sticker.isAttached && Sticker.Board === chosenBoard) {
      StickerSet.add(Sticker);
    }
  });
  Application.selectedStickers = StickersSortedByIndex(
    Array.from(StickerSet.values())
  );
}
const OperationHistory = [];
let OperationIndex = 0;
function doOperation(Operation) {
  clearInspectorMessage();
  if (OperationIndex < OperationHistory.length) {
    OperationHistory.length = OperationIndex;
  }
  let Result;
  const prevOperation = OperationHistory[OperationIndex - 1];
  if (prevOperation != null && Operation.canExtend(prevOperation)) {
    Result = Operation.extend(prevOperation);
    if (prevOperation.isIrrelevant) {
      OperationIndex -= 1;
    }
  } else {
    Result = Operation.doNow();
    OperationHistory.push(Operation);
    OperationIndex += 1;
  }
  Application.OperationHistoryState++;
  return Result;
}
function undoOperation() {
  clearInspectorMessage();
  let prevOperation = OperationHistory[OperationIndex - 1];
  if (prevOperation != null) {
    const Result = prevOperation.undo();
    OperationIndex -= 1;
    Application.OperationHistoryState++;
    return Result;
  }
}
function redoOperation() {
  clearInspectorMessage();
  let nextOperation = OperationHistory[OperationIndex];
  if (nextOperation != null) {
    const Result = nextOperation.redo();
    OperationIndex += 1;
    Application.OperationHistoryState++;
    return Result;
  }
}
const Shelf = [];
let VisitHistory = [];
let VisitIndex = -1;
function visitPrevBoard() {
  if (Application.mayVisitPrevBoard) {
    VisitIndex -= 1;
    _chooseBoard(VisitHistory[VisitIndex]);
    Application.VisitHistoryState++;
  }
}
function visitNextBoard() {
  if (Application.mayVisitNextBoard) {
    VisitIndex += 1;
    _chooseBoard(VisitHistory[VisitIndex]);
    Application.VisitHistoryState++;
  }
}
function visitBoard(Board) {
  if (Board == null) {
    _chooseBoard(void 0);
    VisitHistory.length = 0;
    VisitIndex = -1;
  } else {
    const visitedBoard = VisitHistory[VisitIndex];
    if (visitedBoard === Board) {
      return;
    }
    if (Application.mayVisitNextBoard) {
      VisitIndex += 1;
      if (VisitHistory[VisitIndex] !== Board) {
        VisitHistory[VisitIndex] = Board;
        VisitHistory.length = VisitIndex + 1;
      }
    } else {
      VisitHistory.push(Board);
      VisitIndex += 1;
    }
    _chooseBoard(Board);
  }
  Application.VisitHistoryState++;
}
function validateVisitHistory() {
  var _a;
  for (let i = VisitHistory.length - 1; i >= 0; i--) {
    if (VisitHistory[i] == null || !VisitHistory[i].isAttached) {
      if (VisitIndex >= i) {
        VisitIndex -= 1;
      }
    }
  }
  if (VisitIndex < 0 && VisitHistory.length > 0) {
    VisitIndex = 0;
  }
  visitBoard(VisitHistory[VisitIndex] || ((_a = Application.Project) == null ? void 0 : _a.BoardList[0]));
}
const ConsoleCharLimit = 105e4;
const ConsoleLineLimit = 2e4;
let ConsoleLineCount = 0;
let ConsoleCharCount = 0;
function showConsole() {
  PUX.openDialog("Console");
}
function hideConsole() {
  PUX.closeDialog("Console");
}
function clearConsole() {
  Application.ConsoleValue = "";
  ConsoleLineCount = 0;
  ConsoleCharCount = 0;
}
function print(...ArgList) {
  appendToConsole(StringFromArguments(ArgList));
}
function println(...ArgList) {
  appendToConsole(StringFromArguments(ArgList.concat("\n")));
}
function appendToConsole(fullText) {
  if (fullText === "") {
    return;
  }
  let LineCount = EOLCount(fullText);
  let CharCount = fullText.length;
  if (LineCount > ConsoleLineLimit || CharCount > ConsoleCharLimit) {
    clearConsole();
    fullText = compacted(fullText, LineCount, CharCount);
    ConsoleLineCount = EOLCount(fullText) + 1;
    ConsoleCharCount = fullText.length;
    Application.ConsoleValue = fullText;
  } else {
    compactFor(LineCount, CharCount);
    ConsoleLineCount += LineCount;
    ConsoleCharCount += CharCount;
    Application.ConsoleValue += fullText;
  }
}
function compacted(Candidate, LineCount, CharCount) {
  let LinesToSkip = LineCount - ConsoleLineLimit;
  let CharsToSkip = CharCount - ConsoleCharLimit;
  for (let EOLCount2 = 0, curIndex = -1; ; ) {
    curIndex = Candidate.indexOf("\n", curIndex + 1);
    EOLCount2 += 1;
    if (EOLCount2 >= LinesToSkip && curIndex >= CharsToSkip) {
      return Candidate.slice(curIndex + 1);
    }
  }
}
function compactFor(LineCount, CharCount) {
  let LinesToSkip = ConsoleLineCount + LineCount - ConsoleLineLimit;
  let CharsToSkip = ConsoleCharCount + CharCount - ConsoleCharLimit;
  if (LinesToSkip <= 0 && CharsToSkip <= 0) {
    return;
  }
  let Content = Application.Console.Value;
  for (let EOLCount2 = 0, curIndex = -1; ; ) {
    curIndex = Content.indexOf("\n", curIndex + 1);
    if (curIndex < 0) {
      clearConsole();
      return;
    }
    EOLCount2 += 1;
    if (EOLCount2 >= LinesToSkip && curIndex - EOLCount2 * 28 >= CharsToSkip) {
      Application.Console.Value = Content.slice(curIndex + 1);
      return;
    }
  }
}
function EOLCount(Candidate) {
  let MatchList = Candidate.match(/\n/g);
  return MatchList === null ? 0 : MatchList.length;
}
function StringFromArguments(ArgList) {
  let Result = "";
  for (let i = 0; i < ArgList.length; i++) {
    let Argument = ArgList[i];
    switch (typeof Argument) {
      case "undefined":
        Result += "(undefined)";
        break;
      case "boolean":
        Result += Argument.toString();
        break;
      case "number":
        Result += Argument.toString();
        break;
      case "string":
        Result += Argument;
        break;
      case "function":
        Result += "(function)";
        break;
      case "object":
        Result += Argument === null ? "(null)" : Argument.toString();
        break;
      default:
        Result += "(unknown)";
        break;
    }
  }
  return Result;
}
Object.assign(window, { Console: {
  show: showConsole,
  hide: hideConsole,
  clear: clearConsole,
  print,
  println
} });
function generateAppletFromBoard(Board, Mode) {
  const AppletName = Board.Name || Board.Project.Name || "Note-Stickers Applet";
  let minWidth = 0, minHeight = 0;
  Board.StickerList.forEach((Sticker) => {
    const { Width, Height } = Sticker;
    if (minWidth < Width) {
      minWidth = Width;
    }
    if (minHeight < Height) {
      minHeight = Height;
    }
  });
  const AppletSerialization = {
    x: 0,
    y: 0,
    Width: minWidth,
    Height: minHeight,
    BoardList: [Board.Serialization]
  };
  if (Mode === "standalone") {
    downloadStandaloneApplet(AppletName, AppletSerialization);
  } else {
    downloadEmbeddableApplet(AppletName, AppletSerialization);
  }
}
function generateAppletFromBoardAndSuccessors(Board, Mode) {
  const AppletName = Board.Name || Board.Project.Name || "Note-Stickers Applet";
  const BoardList = Board.Folder.BoardList.slice(Board.Index);
  let minWidth = 0, minHeight = 0;
  BoardList.forEach((Board2) => {
    Board2.StickerList.forEach((Sticker) => {
      const { Width, Height } = Sticker;
      if (minWidth < Width) {
        minWidth = Width;
      }
      if (minHeight < Height) {
        minHeight = Height;
      }
    });
  });
  const AppletSerialization = {
    x: 0,
    y: 0,
    Width: minWidth,
    Height: minHeight,
    BoardList: BoardList.map((Board2) => Board2.Serialization)
  };
  if (Mode === "standalone") {
    downloadStandaloneApplet(AppletName, AppletSerialization);
  } else {
    downloadEmbeddableApplet(AppletName, AppletSerialization);
  }
}
function generateAppletFromStickers(Stickers, Mode) {
  const Board = commonBoardOfStickers(Stickers);
  if (Board == null) {
    return;
  }
  const sortedStickers = StickersSortedByIndex(Stickers);
  const AppletName = sortedStickers[0].Name || Board.Name || Board.Project.Name || "Note-Stickers Applet";
  const serializedStickers = sortedStickers.map((Sticker) => Sticker.Serialization);
  let [minX, minY, maxX, maxY] = [Infinity, Infinity, 0, 0];
  serializedStickers.forEach((Serialization) => {
    const { x, y, Width: Width2, Height: Height2 } = Serialization.Geometry;
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x + Width2);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y + Height2);
  });
  serializedStickers.forEach((Serialization) => {
    Serialization.Geometry.x -= minX;
    Serialization.Geometry.y -= minY;
  });
  const Width = maxX - minX;
  const Height = maxY - minY;
  const AppletSerialization = {
    x: 0,
    y: 0,
    Width,
    Height,
    BoardList: [{
      StickerList: serializedStickers,
      activeScript: Board.activeScript
    }]
  };
  if (Mode === "standalone") {
    downloadStandaloneApplet(AppletName, AppletSerialization);
  } else {
    downloadEmbeddableApplet(AppletName, AppletSerialization);
  }
}
function downloadStandaloneApplet(AppletName, AppletSerialization) {
  const AppletSource = `
<!DOCTYPE html>
<html lang="en" charset="utf-8" style="width:100%">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

  <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>

  <meta name="apple-mobile-web-app-capable"          content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="format-detection"                      content="telephone=no">

  <style name="mobile-prologue">
    html {
      text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -o-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    html, body { width:100%; height:100%; width:100vw; height:100vh; margin:0px; padding:0px }
    html       { overflow:hidden scroll }
  </style>
  ${"<"}script src="https://rozek.github.io/note-stickers-runtime/dist/note-stickers-runtime.js">${"<"}/script>
  ${"<"}script type="Note-Stickers" name="${AppletName}">
${JSON.stringify(AppletSerialization)}
  ${"<"}/script>
 </head>
 <body type="Note-Stickers" name="${AppletName}">
 </body>
</html>
    `.trim();
  const encodedSource = new TextEncoder().encode(AppletSource);
  const decodedSource = new TextDecoder().decode(encodedSource);
  if (AppletSource === decodedSource) {
    download(encodedSource, AppletName + ".html", "text/html;charset=utf-8");
  } else {
    window.alert("this applet generation is not stable");
  }
}
function downloadEmbeddableApplet(AppletName, AppletSerialization) {
  const AppletSource = `
  ${"<"}script type="Note-Stickers" name="${AppletName}">
${JSON.stringify(AppletSerialization)}
  ${"<"}/script>
  <div type="Note-Stickers" name="${AppletName}">
  </div>
    `.trim();
  const encodedSource = new TextEncoder().encode(AppletSource);
  const decodedSource = new TextDecoder().decode(encodedSource);
  if (AppletSource === decodedSource) {
    download(encodedSource, AppletName + ".html", "text/html;charset=utf-8");
  } else {
    window.alert("this applet generation is not stable");
  }
}
function clearInspectorMessage() {
  Application.InspectorMessage = "";
}
function setInspectorMessage(newMessage) {
  Application.InspectorMessage = newMessage.trim();
}
computed(() => {
  console.log("was changed: Application.Project");
  const chosenProject = Application.Project;
  if (chosenProject == null) {
    Application.BoardTree = [];
    Application.BoardTreeState = 0;
    Application.ProjectProperties = SNS_ProjectDefaults;
  } else {
    Application.BoardTree = chosenProject.BoardList;
    Application.BoardTreeState++;
    Application.ProjectProperties = PropertiesOfProject(chosenProject);
  }
});
computed(() => {
  console.log("was changed: Application.BoardTreeState");
  Application.BoardTreeState;
  validateVisitHistory();
});
computed(() => {
  console.log("was changed: Application.BoardTreeState/selectedBoards/expandedBoards");
  Application.BoardTreeState;
  Application.selectedBoards = Application.BoardTree.length === 0 ? [] : Application.selectedBoards.filter(
    (Board) => Board != null && Board.isAttached
  );
  Application.expandedBoards = Application.BoardTree.length === 0 ? [] : Application.expandedBoards.filter(
    (Board) => Board != null && Board.isAttached
  );
  const selectedBoards = Application.selectedBoards;
  Application.BoardSelectionMayBeShiftedUp = BoardsMayBeShiftedUp(selectedBoards);
  Application.BoardSelectionMayBeShiftedDown = BoardsMayBeShiftedDown(selectedBoards);
  Application.BoardSelectionMayBeShiftedIn = BoardsMayBeShiftedIn(selectedBoards);
  Application.BoardSelectionMayBeShiftedOut = BoardsMayBeShiftedOut(selectedBoards);
});
computed(() => {
  console.log("was changed: Application.chosenBoard");
  const chosenBoard = Application.chosenBoard;
  Application.BoardProperties = PropertiesOfBoard(chosenBoard);
  Application.StickerList = chosenBoard == null ? [] : chosenBoard.StickerList;
  Application.ViewState++;
});
computed(() => {
  console.log("was changed: Application.StickerList");
  Application.StickerGeometries = Application.StickerList.map(
    (Sticker) => Sticker.Geometry
  );
});
computed(() => {
  console.log("was changed: Application.chosenBoard/StickerList/selectedStickers");
  const chosenBoard = Application.chosenBoard;
  Application.StickerList;
  Application.selectedStickers = Application.selectedStickers.filter(
    (Sticker) => Sticker.isAttached && Sticker.Board === chosenBoard
  );
  const selectedStickers = Application.selectedStickers;
  Application.StickerSelectionGeometries = selectedStickers.map(
    (Sticker) => Sticker.Geometry
  );
  Application.StickerSelectionProperties = PropertiesOfStickers(selectedStickers);
  Application.StickerSelectionMayBeShiftedUp = StickersMayBeShiftedUp(selectedStickers);
  Application.StickerSelectionMayBeShiftedDown = StickersMayBeShiftedDown(selectedStickers);
});
computed(() => {
  console.log("was changed: Application.ScriptEditorMode/Project/Board/StickerSelectionProperties");
  switch (Application.ScriptEditorMode) {
    case "Project":
      Application.ScriptEditorValue = Application.Project == null ? noSelection : Application.ProjectProperties.Script || "";
      break;
    case "Board":
      Application.ScriptEditorValue = Application.chosenBoard == null ? noSelection : Application.BoardProperties.Script || "";
      break;
    case "Stickers":
      Application.ScriptEditorValue = Application.selectedStickers.length === 0 ? noSelection : Application.StickerSelectionProperties.Script || "";
      break;
  }
});
computed(() => {
  console.log("was changed: Application.ValueEditorMode/Project/Board/StickerSelectionProperties");
  switch (Application.ValueEditorMode) {
    case "Project":
      Application.ScriptEditorValue = Application.Project == null ? noSelection : Application.ProjectProperties.editableValue || "";
      break;
    case "Board":
      Application.ScriptEditorValue = Application.chosenBoard == null ? noSelection : Application.BoardProperties.editableValue || "";
      break;
    case "Stickers":
      Application.ScriptEditorValue = Application.selectedStickers.length === 0 ? noSelection : Application.StickerSelectionProperties.editableValue || "";
      break;
  }
});
computed(() => {
  console.log("was changed: Application.OperationHistoryState");
  Application.OperationHistoryState;
  Application.mayUndoOperation = OperationIndex > 0;
  Application.mayRedoOperation = OperationIndex < OperationHistory.length;
});
computed(() => {
  console.log("was changed: Application.VisitHistoryState");
  Application.VisitHistoryState;
  Application.mayVisitPrevBoard = VisitIndex > 0;
  Application.mayVisitNextBoard = VisitIndex < VisitHistory.length - 1;
});
class SNS_Operation {
  get isIrrelevant() {
    return false;
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
}
class SNS_ProjectConfigurationOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(Project, PropertyName, PropertyValue) {
    super();
    __publicField(this, "_Project");
    __publicField(this, "_PropertyName");
    __publicField(this, "_oldValue");
    __publicField(this, "_newValue");
    this._Project = Project;
    this._PropertyName = PropertyName;
    this._oldValue = Project[PropertyName];
    this._newValue = PropertyValue;
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return otherOperation instanceof SNS_ProjectConfigurationOperation && otherOperation._Project === this._Project && otherOperation._PropertyName === this._PropertyName && ValuesAreEqual(otherOperation._newValue, this._oldValue);
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return this._newValue === this._oldValue;
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    try {
      this._Project[this._PropertyName] = this._newValue;
    } catch (Signal) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not change the given property");
    }
  }
  /**** extend ****/
  extend(otherOperation) {
    this.doNow();
    otherOperation._newValue = this._newValue;
  }
  /**** redo ****/
  redo() {
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    try {
      this._Project[this._PropertyName] = this._oldValue;
    } catch (Signal) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not restore the given property");
    }
  }
}
class SNS_BoardDeserializationOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(Folder, sortedSerializations, Index, keepIds = false) {
    super();
    __publicField(this, "_Folder");
    __publicField(this, "_Serializations");
    __publicField(this, "_Index");
    __publicField(this, "_newBoards", []);
    this._Folder = Folder;
    this._Serializations = sortedSerializations.slice();
    this._Index = Index;
    if (!keepIds) {
      this._Serializations.forEach(
        (Serialization) => removeIdsFrom(Serialization)
      );
    }
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return false;
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return false;
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    if (!this._Folder.isAttached) {
      setInspectorMessage("board no longer exists");
      return;
    }
    const newBoards = this._newBoards = [];
    this._Serializations.forEach((Serialization, i) => {
      try {
        const newBoard = this._Folder.BoardDeserializedAt(
          Serialization,
          this._Index + i
        );
        newBoards.push(newBoard);
        newBoard.recursivelyActivateAllScripts();
      } catch (Signal) {
        debugger;
      }
    });
    if (newBoards.length !== this._Serializations.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (newBoards.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not create any new boards");
    }
    selectBoards(newBoards);
  }
  /**** extend ****/
  extend(otherOperation) {
    throwError("NotExtensible: this operation can not be extended");
  }
  /**** redo ****/
  redo() {
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    if (!this._Folder.isAttached) {
      setInspectorMessage("board no longer exists");
      return;
    }
    const luckyBoards = [];
    this._newBoards.forEach((Board) => {
      try {
        if (this._Folder.hasBoard(Board)) {
          this._Folder.destroyBoard(Board);
        }
        luckyBoards.push(Board);
      } catch (Signal) {
      }
    });
    if (luckyBoards.length !== this._newBoards.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyBoards.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not delete the previously created boards");
    }
    selectBoards([]);
  }
}
class SNS_BoardConfigurationOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(Board, PropertyName, PropertyValue) {
    super();
    __publicField(this, "_Board");
    __publicField(this, "_PropertyName");
    __publicField(this, "_oldValue");
    __publicField(this, "_newValue");
    this._Board = Board;
    this._PropertyName = PropertyName;
    this._oldValue = Board[PropertyName];
    this._newValue = PropertyValue;
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return otherOperation instanceof SNS_BoardConfigurationOperation && otherOperation._Board === this._Board && otherOperation._PropertyName === this._PropertyName && ValuesAreEqual(otherOperation._newValue, this._oldValue);
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return this._newValue === this._oldValue;
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    if (!this._Board.isAttached) {
      setInspectorMessage("board no longer exists");
      return;
    }
    try {
      this._Board[this._PropertyName] = this._newValue;
    } catch (Signal) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not change the given property");
    }
  }
  /**** extend ****/
  extend(otherOperation) {
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    this.doNow();
    otherOperation._newValue = this._newValue;
  }
  /**** redo ****/
  redo() {
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    } else {
      setInspectorMessage("board no longer exists");
      return;
    }
    try {
      this._Board[this._PropertyName] = this._oldValue;
    } catch (Signal) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not restore the given property");
    }
  }
}
class SNS_BoardMoveOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(oldFolder, sortedBoards, newFolder, Index) {
    super();
    __publicField(this, "_oldFolder");
    __publicField(this, "_oldIndices");
    __publicField(this, "_newFolder");
    __publicField(this, "_newIndex");
    this._oldFolder = oldFolder;
    this._oldIndices = sortedBoards.map((Board) => Board.Index);
    this._newFolder = newFolder;
    this._newIndex = Index;
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    if (otherOperation instanceof SNS_BoardMoveOperation && otherOperation._newFolder === this._oldFolder) {
      const otherIndex = otherOperation._newIndex;
      return this._oldIndices.every(
        (oldIndex, i) => oldIndex === otherIndex + i
      );
    } else {
      return false;
    }
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    if (this._newFolder === this._oldFolder) {
      const newIndex = this._newIndex;
      return this._oldIndices.every(
        (oldIndex, i) => oldIndex === newIndex + i
      );
    } else {
      return false;
    }
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    if (!this._oldFolder.isAttached) {
      setInspectorMessage("original folder no longer exists");
      return;
    }
    if (!this._newFolder.isAttached) {
      setInspectorMessage("target folder no longer exists");
      return;
    }
    const oldFolder = this._oldFolder;
    const oldIndices = this._oldIndices;
    const newFolder = this._newFolder;
    const newIndex = this._newIndex;
    let luckyMoves = [];
    for (let i = oldIndices.length - 1; i >= 0; i--) {
      try {
        oldFolder.moveBoardTo(oldIndices[i], newFolder, newIndex);
        luckyMoves.push(newFolder.Board(newIndex));
      } catch (Signal) {
        debugger;
      }
    }
    if (luckyMoves.length !== oldIndices.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyMoves.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not move the given boards");
    }
    selectBoards(luckyMoves);
  }
  /**** extend ****/
  extend(otherOperation) {
    this.doNow();
    otherOperation._newFolder = this._newFolder;
    otherOperation._newIndex = this._newIndex;
  }
  /**** redo ****/
  redo() {
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    if (!this._oldFolder.isAttached) {
      setInspectorMessage("original folder no longer exists");
      return;
    }
    if (!this._newFolder.isAttached) {
      setInspectorMessage("target folder no longer exists");
      return;
    }
    const oldFolder = this._oldFolder;
    const oldIndices = this._oldIndices;
    const newFolder = this._newFolder;
    const newIndex = this._newIndex;
    let luckyMoves = [];
    for (let i = 0, l = oldIndices.length; i < l; i++) {
      try {
        newFolder.moveBoardTo(newIndex, oldFolder, oldIndices[i]);
        luckyMoves.push(oldFolder.Board(oldIndices[i]));
      } catch (Signal) {
        debugger;
      }
    }
    if (luckyMoves.length !== oldIndices.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyMoves.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not move the given boards");
    }
    selectBoards(luckyMoves);
  }
}
class SNS_BoardShiftOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(Folder, sortedBoards, sortedIndices) {
    super();
    __publicField(this, "_Folder");
    __publicField(this, "_Boards");
    __publicField(this, "_oldIndices");
    __publicField(this, "_newIndices");
    __publicField(this, "_forwardMoves");
    __publicField(this, "_backwardMoves");
    this._Folder = Folder;
    this._Boards = sortedBoards;
    this._oldIndices = sortedBoards.map((Entry) => Entry.Index);
    this._newIndices = sortedIndices.slice();
    let ItemCount = this._Folder.BoardCount;
    this._forwardMoves = MovesFor(this._oldIndices, this._newIndices, ItemCount);
    this._backwardMoves = MovesFor(this._newIndices, this._oldIndices, ItemCount);
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return otherOperation instanceof SNS_BoardShiftOperation && ListsAreEqual(otherOperation._Boards, this._Boards) && ListsAreEqual(otherOperation._newIndices, this._oldIndices);
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return ListsAreEqual(this._oldIndices, this._newIndices);
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    if (!this._Folder.isAttached) {
      setInspectorMessage("folder no longer exists");
      return;
    }
    this._shiftBoards(this._forwardMoves);
    selectBoards(this._Boards);
  }
  /**** extend ****/
  extend(otherOperation) {
    this.doNow();
    otherOperation._newIndices = this._newIndices;
    otherOperation._forwardMoves = this._forwardMoves;
    otherOperation._backwardMoves = this._backwardMoves;
  }
  /**** redo ****/
  redo() {
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    if (!this._Folder.isAttached) {
      setInspectorMessage("folder no longer exists");
      return;
    }
    this._shiftBoards(this._backwardMoves);
    selectBoards(this._Boards);
  }
  /**** _shiftBoards ****/
  _shiftBoards(MoveList) {
    if (MoveList.length === 0) {
      return;
    }
    const luckyMoves = [];
    MoveList.forEach((Move, i) => {
      try {
        this._Folder.shiftBoardsByIndex(Move.oldIndex, Move.newIndex, Move.Count);
        luckyMoves.push(Move);
      } catch (Signal) {
        debugger;
      }
    });
    if (luckyMoves.length !== MoveList.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyMoves.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not shift the given boards");
    }
  }
}
class SNS_BoardDeletionOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(sortedBoards) {
    super();
    __publicField(this, "_Folder");
    __publicField(this, "_Boards");
    __publicField(this, "_Indices");
    __publicField(this, "_Serializations");
    this._Folder = commonFolderOfBoards(sortedBoards);
    this._Boards = sortedBoards.slice();
    this._Indices = sortedBoards.map((Board) => Board.Index);
    this._Serializations = sortedBoards.map((Board) => Board.Serialization);
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return false;
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return false;
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    selectBoards([]);
    if (!this._Folder.isAttached) {
      return;
    }
    const existingBoards = this._Boards.filter(
      (Board) => this._Folder.hasBoard(Board)
    );
    if (existingBoards.length === 0) {
      return;
    }
    const luckyBoards = [];
    existingBoards.forEach((Board) => {
      try {
        this._Folder.destroyBoard(Board);
        luckyBoards.push(Board);
      } catch (Signal) {
        debugger;
      }
    });
    if (luckyBoards.length !== existingBoards.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyBoards.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not delete any boards");
    }
  }
  /**** extend ****/
  extend(otherOperation) {
    throwError("NotExtensible: this operation can not be extended");
  }
  /**** redo ****/
  redo() {
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    if (!this._Folder.isAttached) {
      setInspectorMessage("folder no longer exists");
      return;
    }
    const newBoards = this._Boards = [];
    this._Serializations.forEach((Serialization, i) => {
      try {
        const newBoard = this._Folder.BoardDeserializedAt(
          Serialization,
          this._Indices[i]
        );
        newBoards.push(newBoard);
        newBoard.recursivelyActivateAllScripts();
      } catch (Signal) {
        debugger;
      }
    });
    if (newBoards.length !== this._Serializations.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (newBoards.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not restore any previously deleted boards");
    }
    selectBoards(newBoards);
  }
}
class SNS_StickerDeserializationOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(Board, sortedSerializations, Index, keepId = false) {
    super();
    __publicField(this, "_Board");
    __publicField(this, "_Serializations");
    __publicField(this, "_Index");
    __publicField(this, "_newStickers", []);
    this._Board = Board;
    this._Serializations = sortedSerializations.slice();
    this._Index = Index;
    if (!keepId) {
      this._Serializations.forEach(
        (Serialization) => removeIdsFrom(Serialization)
      );
    }
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return false;
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return false;
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    if (!this._Board.isAttached) {
      setInspectorMessage("board no longer exists");
      return;
    }
    const newStickers = this._newStickers = [];
    this._Serializations.forEach((Serialization, i) => {
      try {
        const newSticker = this._Board.StickerDeserializedAt(
          Serialization,
          this._Index + i
        );
        newStickers.push(newSticker);
        newSticker.activateScript();
      } catch (Signal) {
        debugger;
      }
    });
    if (newStickers.length !== this._Serializations.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (newStickers.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not create any new stickers");
    }
    selectStickers(newStickers);
  }
  /**** extend ****/
  extend(otherOperation) {
    throwError("NotExtensible: this operation can not be extended");
  }
  /**** redo ****/
  redo() {
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    } else {
      setInspectorMessage("board no longer exists");
      return;
    }
    const luckyStickers = [];
    this._newStickers.forEach((Sticker) => {
      try {
        if (this._Board.hasSticker(Sticker)) {
          this._Board.destroySticker(Sticker);
        }
        luckyStickers.push(Sticker);
      } catch (Signal) {
        debugger;
      }
    });
    if (luckyStickers.length !== this._newStickers.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyStickers.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not delete the previously created stickers");
    }
    selectStickers([]);
  }
}
class SNS_StickerConfigurationOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(Stickers, PropertyName, PropertyValue) {
    super();
    __publicField(this, "_Board");
    __publicField(this, "_Stickers");
    __publicField(this, "_PropertyName");
    __publicField(this, "_oldValues");
    __publicField(this, "_newValue");
    this._Board = commonBoardOfStickers(Stickers);
    this._Stickers = Stickers.slice();
    this._PropertyName = PropertyName;
    this._oldValues = Stickers.map((Sticker) => Sticker[PropertyName]);
    this._newValue = PropertyValue;
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return otherOperation instanceof SNS_StickerConfigurationOperation && ListsAreEqual(otherOperation._Stickers, this._Stickers) && otherOperation._PropertyName === this._PropertyName && this._oldValues.every((oldValue) => ValuesAreEqual(otherOperation._newValue, oldValue));
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return this._oldValues.every((oldValue) => ValuesAreEqual(this._newValue, oldValue));
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    const existingStickers = this._Stickers.filter(
      (Sticker) => Sticker.isAttached
    );
    if (existingStickers.length === 0) {
      setInspectorMessage("stickers no longer exist");
      return;
    }
    const luckyStickers = [];
    existingStickers.forEach((Sticker) => {
      try {
        Sticker[this._PropertyName] = this._newValue;
        luckyStickers.push(Sticker);
      } catch (Signal) {
        debugger;
      }
    });
    if (luckyStickers.length !== existingStickers.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyStickers.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not change the given property");
    }
  }
  /**** extend ****/
  extend(otherOperation) {
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    this.doNow();
    otherOperation._newValue = this._newValue;
  }
  /**** redo ****/
  redo() {
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    const existingStickers = this._Stickers.filter(
      (Sticker) => Sticker.isAttached
    );
    if (existingStickers.length === 0) {
      setInspectorMessage("stickers no longer exist");
      return;
    }
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    const luckyStickers = [];
    existingStickers.forEach((Sticker) => {
      let StickerIndex = this._Stickers.indexOf(Sticker);
      try {
        Sticker[this._PropertyName] = this._oldValues[StickerIndex];
        luckyStickers.push(Sticker);
      } catch (Signal) {
        debugger;
      }
    });
    if (luckyStickers.length !== existingStickers.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyStickers.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not restore the given property");
    }
  }
}
class SNS_StickerShapeOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(Stickers, Geometries) {
    super();
    __publicField(this, "_Board");
    __publicField(this, "_Stickers");
    __publicField(this, "_oldGeometries");
    __publicField(this, "_newGeometries");
    this._Board = Stickers[0].Board;
    this._Stickers = Stickers.slice();
    this._oldGeometries = Stickers.map((Sticker) => Sticker.Geometry);
    this._newGeometries = Geometries.slice();
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return otherOperation instanceof SNS_StickerShapeOperation && ListsAreEqual(otherOperation._Stickers, this._Stickers) && this._oldGeometries.every(
      (Geometry, i) => ValuesAreEqual(otherOperation._newGeometries[i], Geometry)
    );
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return this._oldGeometries.every(
      (Geometry, i) => ValuesAreEqual(this._newGeometries[i], Geometry)
    );
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    const existingStickers = this._Stickers.filter(
      (Sticker) => Sticker.isAttached
    );
    if (existingStickers.length === 0) {
      setInspectorMessage("stickers no longer exist");
      return;
    }
    const luckyStickers = [];
    existingStickers.forEach((Sticker, i) => {
      try {
        Sticker.Geometry = this._newGeometries[i];
        luckyStickers.push(Sticker);
      } catch (Signal) {
        debugger;
      }
    });
    if (luckyStickers.length !== existingStickers.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyStickers.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not change the given property");
    }
  }
  /**** extend ****/
  extend(otherOperation) {
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    this.doNow();
    otherOperation._newGeometries = this._newGeometries;
  }
  /**** redo ****/
  redo() {
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    const existingStickers = this._Stickers.filter(
      (Sticker) => Sticker.isAttached
    );
    if (existingStickers.length === 0) {
      setInspectorMessage("stickers no longer exist");
      return;
    }
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    const luckyStickers = [];
    existingStickers.forEach((Sticker) => {
      let StickerIndex = this._Stickers.indexOf(Sticker);
      try {
        Sticker.Geometry = this._oldGeometries[StickerIndex];
        luckyStickers.push(Sticker);
      } catch (Signal) {
        debugger;
      }
    });
    if (luckyStickers.length !== existingStickers.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyStickers.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not restore the given property");
    }
  }
}
class SNS_StickerShiftOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(sortedStickers, sortedIndices) {
    super();
    __publicField(this, "_Board");
    __publicField(this, "_Stickers");
    __publicField(this, "_oldIndices");
    __publicField(this, "_newIndices");
    __publicField(this, "_forwardMoves");
    __publicField(this, "_backwardMoves");
    this._Board = commonBoardOfStickers(sortedStickers);
    this._Stickers = sortedStickers;
    this._oldIndices = sortedStickers.map((Sticker) => Sticker.Index);
    this._newIndices = sortedIndices.slice();
    let ItemCount = this._Board.StickerCount;
    this._forwardMoves = MovesFor(this._oldIndices, this._newIndices, ItemCount);
    this._backwardMoves = MovesFor(this._newIndices, this._oldIndices, ItemCount);
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return otherOperation instanceof SNS_StickerShiftOperation && ListsAreEqual(otherOperation._Stickers, this._Stickers) && ListsAreEqual(this._oldIndices, otherOperation._newIndices);
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return ListsAreEqual(this._oldIndices, this._newIndices);
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    if (!this._Board.isAttached) {
      setInspectorMessage("board no longer exists");
      return;
    }
    this._shiftStickers(this._forwardMoves);
    selectStickers(this._Stickers);
  }
  /**** extend ****/
  extend(otherOperation) {
    visitBoard(this._Board);
    this.doNow();
    otherOperation._newIndices = this._newIndices;
    otherOperation._forwardMoves = this._forwardMoves;
    otherOperation._backwardMoves = this._backwardMoves;
  }
  /**** redo ****/
  redo() {
    visitBoard(this._Board);
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    } else {
      setInspectorMessage("board no longer exists");
      return;
    }
    this._shiftStickers(this._backwardMoves);
    selectStickers(this._Stickers);
  }
  /**** _shiftStickers ****/
  _shiftStickers(MoveList) {
    if (MoveList.length === 0) {
      return;
    }
    const luckyMoves = [];
    MoveList.forEach((Move, i) => {
      try {
        this._Board.shiftStickersByIndex(Move.oldIndex, Move.newIndex, Move.Count);
        luckyMoves.push(Move);
      } catch (Signal) {
        debugger;
      }
    });
    if (luckyMoves.length !== MoveList.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyMoves.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not shift the given stickers");
    }
  }
}
class SNS_StickerDeletionOperation extends SNS_Operation {
  /**** constructor ****/
  constructor(sortedStickers) {
    super();
    __publicField(this, "_Board");
    __publicField(this, "_Stickers");
    __publicField(this, "_Indices");
    __publicField(this, "_Serializations");
    this._Board = commonBoardOfStickers(sortedStickers);
    this._Stickers = sortedStickers.slice();
    this._Indices = sortedStickers.map((Sticker) => Sticker.Index);
    this._Serializations = sortedStickers.map((Sticker) => Sticker.Serialization);
  }
  /**** canExtend ****/
  canExtend(otherOperation) {
    return false;
  }
  /**** isIrrelevant ****/
  get isIrrelevant() {
    return false;
  }
  set isIrrelevant(_) {
    throwReadOnlyError("isIrrelevant");
  }
  /**** doNow ****/
  doNow() {
    clearInspectorMessage();
    if (!this._Board.isAttached) {
      return;
    }
    const existingStickers = this._Stickers.filter(
      (Sticker) => this._Board.hasSticker(Sticker)
    );
    if (existingStickers.length === 0) {
      return;
    }
    const luckyStickers = [];
    existingStickers.forEach((Sticker) => {
      try {
        this._Board.destroySticker(Sticker);
        luckyStickers.push(Sticker);
      } catch (Signal) {
        debugger;
      }
    });
    if (luckyStickers.length !== existingStickers.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (luckyStickers.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not delete any stickers");
    }
  }
  /**** extend ****/
  extend(otherOperation) {
    throwError("NotExtensible: this operation can not be extended");
  }
  /**** redo ****/
  redo() {
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    }
    this.doNow();
  }
  /**** undo ****/
  undo() {
    clearInspectorMessage();
    selectStickers([]);
    if (this._Board.isAttached) {
      visitBoard(this._Board);
    } else {
      setInspectorMessage("board no longer exists");
      return;
    }
    const newStickers = this._Stickers = [];
    this._Serializations.forEach((Serialization, i) => {
      try {
        const newSticker = this._Board.StickerDeserializedAt(
          Serialization,
          this._Indices[i]
        );
        newStickers.push(newSticker);
        newSticker.activateScript();
      } catch (Signal) {
        debugger;
      }
    });
    if (newStickers.length !== this._Serializations.length) {
      setInspectorMessage("operation did not fully succeed");
    }
    if (newStickers.length === 0) {
      setInspectorMessage("operation failed");
      throwError("OperationFailure: could not restore any previously deleted stickers");
    }
    selectStickers(newStickers);
  }
}
function PropertiesOfProject(Project) {
  const Result = {};
  Object.keys(SNS_ProjectDefaults).forEach(
    (Property) => Result[Property] = Project[Property]
  );
  return Result;
}
function commonFolderOfBoards(BoardList) {
  if (BoardList.length === 0) {
    return Application.Project;
  }
  let Result = BoardList[0].Folder;
  if (BoardList.some((Board) => Board.Folder !== Result)) throwError(
    "InvalidArgument: the given boards do not all belong to the same folder"
  );
  return Result;
}
function BoardsSortedByIndex(BoardList) {
  if (BoardList.length === 0) {
    return [];
  }
  const Result = BoardList.map(
    (Board) => ({ Board, Index: Board.Index })
  );
  Result.sort(
    (EntryA, EntryB) => EntryA.Index - EntryB.Index
  );
  return Result.map((Entry) => Entry.Board);
}
function IndexPathsOfBoards(BoardList) {
  return BoardList.map((Board) => Board.IndexPath);
}
function BoardsAtIndexPaths(IndexPathList) {
  const Project = Application.Project;
  return IndexPathList.map(
    (IndexPath) => Project.BoardAtIndexPath(IndexPath)
  ).filter((Item) => Item != null);
}
function BoardsMayBeShiftedUp(BoardList) {
  if (BoardList.length === 0) {
    return false;
  }
  const topmostIndex = topmostIndexOfBoards(BoardList);
  if (topmostIndex > 0) {
    return true;
  }
  const bottommostIndex = bottommostIndexOfBoards(BoardList);
  return bottommostIndex > BoardList.length;
}
function BoardsMayBeShiftedDown(BoardList) {
  if (BoardList.length === 0) {
    return false;
  }
  const BoardCount = BoardList[0].Folder.BoardCount;
  const bottommostIndex = bottommostIndexOfBoards(BoardList);
  if (bottommostIndex < BoardCount - 1) {
    return true;
  }
  const topmostIndex = topmostIndexOfBoards(BoardList);
  return topmostIndex < BoardCount - BoardList.length;
}
function BoardsMayBeShiftedIn(BoardList) {
  if (BoardList.length === 0) {
    return false;
  }
  return BoardsMayBeShiftedDown(BoardList);
}
function BoardsMayBeShiftedOut(BoardList) {
  var _a, _b;
  if (BoardList.length === 0) {
    return false;
  }
  return ((_b = (_a = BoardList[0]) == null ? void 0 : _a.Folder) == null ? void 0 : _b.Folder) != null;
}
function topmostIndexOfBoards(BoardList) {
  if (BoardList.length === 0) {
    return -1;
  }
  let Result = Infinity;
  BoardList.forEach((Board) => Result = Math.min(Result, Board.Index));
  return Result;
}
function bottommostIndexOfBoards(BoardList) {
  if (BoardList.length === 0) {
    return -1;
  }
  let Result = 0;
  BoardList.forEach((Board) => Result = Math.max(Result, Board.Index));
  return Result;
}
function PropertiesOfBoard(Board) {
  if (Board == null) {
    return SNS_BoardDefaults;
  }
  const Result = {};
  Object.keys(SNS_BoardDefaults).forEach(
    (Property) => Result[Property] = Board[Property]
  );
  return Result;
}
function commonBoardOfStickers(StickerList) {
  if (StickerList.length === 0) {
    return void 0;
  }
  let Result = StickerList[0].Board;
  if (StickerList.some((Sticker) => Sticker.Board !== Result)) throwError(
    "InvalidArgument: the given stickers do not all belong to the same board"
  );
  return Result;
}
function StickersSortedByIndex(StickerList) {
  if (StickerList.length === 0) {
    return [];
  }
  const Result = StickerList.map(
    (Sticker) => ({ Sticker, Index: Sticker.Index })
  );
  Result.sort(
    (EntryA, EntryB) => EntryA.Index - EntryB.Index
  );
  return Result.map((Entry) => Entry.Sticker);
}
function PropertiesOfSticker(Sticker) {
  const Result = {};
  Object.keys(SNS_StickerDefaults).forEach(
    (Property) => Result[Property] = Sticker[Property]
  );
  return Result;
}
function PropertiesOfStickers(StickerList) {
  if (StickerList.length === 0) {
    return { ...SNS_StickerDefaults };
  }
  const Result = PropertiesOfSticker(StickerList[0]);
  StickerList.slice(1).forEach((Sticker) => {
    Object.keys(SNS_StickerDefaults).forEach((Property) => {
      const Value = Sticker[Property];
      if (ValuesDiffer(Value, Result)) {
        Result[Property] = mixedValues;
      }
    });
  });
  return Result;
}
function StickersMayBeShiftedUp(StickerList) {
  if (StickerList.length === 0) {
    return false;
  }
  const topmostIndex = topmostIndexOfStickers(StickerList);
  if (topmostIndex > 0) {
    return true;
  }
  const bottommostIndex = bottommostIndexOfStickers(StickerList);
  return bottommostIndex > StickerList.length;
}
function StickersMayBeShiftedDown(StickerList) {
  if (StickerList.length === 0) {
    return false;
  }
  const StickerCount = StickerList[0].Folder.StickerCount;
  const bottommostIndex = bottommostIndexOfStickers(StickerList);
  if (bottommostIndex < StickerCount - 1) {
    return true;
  }
  const topmostIndex = topmostIndexOfStickers(StickerList);
  return topmostIndex < StickerCount - StickerList.length;
}
function topmostIndexOfStickers(StickerList) {
  if (StickerList.length === 0) {
    return -1;
  }
  let Result = Infinity;
  StickerList.forEach((Sticker) => Result = Math.min(Result, Sticker.Index));
  return Result;
}
function bottommostIndexOfStickers(StickerList) {
  if (StickerList.length === 0) {
    return -1;
  }
  let Result = 0;
  StickerList.forEach((Sticker) => Result = Math.max(Result, Sticker.Index));
  return Result;
}
function topLeftPositionOfStickers(StickerList) {
  if (StickerList.length === 0) {
    return { minX: 0, minY: 0 };
  }
  return {
    minX: Math.min(...StickerList.map((Sticker) => Sticker.x)),
    minY: Math.min(...StickerList.map((Sticker) => Sticker.y))
  };
}
function ValueFor(Value) {
  return Value === noSelection || Value === mixedValues ? null : Value;
}
function IntegerFor(Value) {
  return Value === noSelection || Value === mixedValues ? null : Math.round(Value);
}
function BooleanFor(Value, TruthValue = true) {
  return Value === noSelection || Value === mixedValues ? null : Value === TruthValue;
}
function ErrorMessageFor(Error2) {
  switch (true) {
    case Error2 == null:
      return "(no error found)";
    case Error2 === noSelection:
      return "(no selection)";
    case Error2 === mixedValues:
      return "(various errors)";
    default:
      return Error2.Type + ": " + Error2.Message;
  }
}
function showScriptError(Error2) {
  window.alert(Error2.Type + "\n\n" + Error2.Message);
}
function applyPendingScriptOfVisual(Visual) {
  let pendingScript = (Visual.pendingScript || "").trim();
  let activeScript = (Visual.activeScript || "").trim();
  if (activeScript === "") {
    activeScript = void 0;
  }
  if (activeScript === pendingScript) {
    return;
  }
  if (pendingScript == null || pendingScript === "") {
    Visual.activeScript = void 0;
    Visual.pendingScript = void 0;
    Visual.activateScript();
    Visual.ScriptError = void 0;
    Visual.Error = void 0;
  } else {
    const {
      activeScript: oldActiveScript,
      pendingScript: oldPendingScript
    } = Visual;
    Visual.activeScript = oldPendingScript;
    Visual.activateScript();
    if (Visual.Error == null) {
      Visual.pendingScript = void 0;
      Visual.ScriptError = void 0;
    } else {
      Visual.ScriptError = Visual.Error;
      Visual.activeScript = oldActiveScript;
      Visual.activateScript();
    }
  }
  Visual.rerender();
}
function ListsAreEqual(ListA, ListB) {
  return ListA.length === ListB.length && ListA.every((Element, i) => Element === ListB[i]);
}
function MovesFor(oldIndices, newIndices, ItemCount) {
  let IndexListA = Array(ItemCount).fill(NaN).map((_, i) => i);
  oldIndices.forEach(
    // mark all stickers that are to be moved...
    (oldIndex) => IndexListA[oldIndex] = -1
  );
  IndexListA = IndexListA.filter((Index) => Index !== -1);
  let IndexListB = Array(ItemCount).fill(-1);
  newIndices.forEach(
    // remember where moved stickers come from
    (newIndex, i) => IndexListB[newIndex] = oldIndices[i]
  );
  for (let i = 0, l = ItemCount; i < l; i++) {
    if (IndexListB[i] === -1) {
      IndexListB[i] = IndexListA.shift();
    }
  }
  const MoveList = [];
  function move(oldIndex, newIndex) {
    const Index = IndexListA[oldIndex];
    IndexListA.splice(oldIndex, 1);
    IndexListA.splice(newIndex, 0, Index);
    MoveList.push({ oldIndex, newIndex, Count: 1 });
  }
  IndexListA = Array(ItemCount).fill(NaN).map((_, i) => i);
  for (let i = 0, l = ItemCount; i < l; i++) {
    if (IndexListA[i] !== IndexListB[i]) {
      move(IndexListA.indexOf(IndexListB[i]), i);
    }
  }
  for (let i = MoveList.length - 1; i >= 1; i--) {
    const curMove = MoveList[i];
    const prevMove = MoveList[i - 1];
    if (prevMove[0] === curMove[0] - 1 && prevMove[1] === curMove[1] - 1) {
      MoveList.splice(i, 1);
      prevMove[2] += curMove[2];
    }
  }
  return MoveList;
}
function withWarning(Message, ...DetailList) {
  if (DetailList.length === 0) {
    console.warn("NoteStickers: " + Message);
  } else {
    console.warn.call(null, ["NoteStickers: " + Message].concat(DetailList));
  }
  debugger;
}
localforage.config({
  driver: [localforage.INDEXEDDB, localforage.WEBSQL]
});
localforage.ready(function() {
  ProjectStore = localforage.createInstance({
    name: "NoteStickers"
  });
  fetchPersistedProjectList();
  showDialogCentered("ProjectBrowser");
  print("ready for operation");
  Object.assign(window, {
    // just for testing
    Application,
    MainScreen: PUX.ScreenNamed("MainScreen"),
    Inspector: PUX.DialogNamed("Inspector")
  });
});
//# sourceMappingURL=NoteStickers.js.map
