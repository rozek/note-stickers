/*******************************************************************************
*                                                                              *
*                                Note Stickers                                 *
*                                                                              *
*******************************************************************************/

  declare const download:Function
  declare const localforage:any

  import {
    quoted,
    ValuesAreEqual, ValuesDiffer,
    ValueIsArray, ValueIsListSatisfying,
    expectListSatisfying,
  } from 'javascript-interface-library'

  import { html } from 'htm/preact'

  import {
    throwError, throwReadOnlyError,
    ValueIsBoard, ValueIsSticker,
    ValueIsName, ValueIsIdentifier, ValueIsGeometry, ValueIsError,
    allowBoard,
    SNS_Id, SNS_Name, SNS_Identifier,
    SNS_Ordinal, SNS_Text, SNS_Textline, SNS_Color, SNS_URL,
    SNS_Geometry, SNS_FontStyle, SNS_Error,
    SNS_Visual, SNS_Folder, SNS_Project, SNS_Board, SNS_Sticker,
    newId, removeIdsFrom, SNS_Change,
    TemplateOfBehavior,
    SNS_BehaviorEntryGroup, SNS_BehaviorEntry,
    groupedBehaviorEntryList,
  } from 'shareable-note-stickers'

  import { SNS_BoardView } from 'sns-boardview'

  import hyperactiv from 'hyperactiv'
  const { computed } = hyperactiv

  import {
    ProtoUX,
    DragClickRecognizerFor,
  } from 'protoux'

/**** make some existing types indexable ****/

  interface Indexable { [Key:string]:any }

/**** define serializable types ****/

  type serializableValue  = null | boolean | number | string |
                            serializableObject | serializableArray
  type serializableObject = { [Key:string]:serializableValue }
  type serializableArray  = serializableValue[]
  type Serializable       = serializableObject

//------------------------------------------------------------------------------
//--                         Properties and Defaults                          --
//------------------------------------------------------------------------------

  const noSelection = {}
  const mixedValues = {}
  type SNS_Placeholder = typeof noSelection & typeof mixedValues

/**** common Properties ****/

  type SNS_commonProperties = {
    Id:               SNS_Id        | SNS_Placeholder,
    Name:             SNS_Name      | SNS_Placeholder,
    ForegroundColor:  SNS_Color     | SNS_Placeholder,
    BackgroundColor:  SNS_Color     | SNS_Placeholder,
    BackgroundTexture:SNS_URL       | SNS_Placeholder,
    FontFamily:       SNS_Textline  | SNS_Placeholder,
    FontSize:         SNS_Ordinal   | SNS_Placeholder,
    FontWeight:       SNS_Ordinal   | SNS_Placeholder,
    FontStyle:        SNS_FontStyle | SNS_Placeholder,
    LineHeight:       SNS_Ordinal   | SNS_Placeholder,
    activeScript:     SNS_Text      | SNS_Placeholder,
    pendingScript:    SNS_Text      | SNS_Placeholder,
    Script:           SNS_Text      | SNS_Placeholder,
    editableValue:    SNS_Text      | SNS_Placeholder,
    Error:            SNS_Error     | SNS_Placeholder,
    ScriptError:      SNS_Error     | SNS_Placeholder,
  }

/**** common Defaults ****/

  const SNS_commonDefaults = {
    Id:               noSelection,
    Name:             noSelection,
    ForegroundColor:  noSelection,
    BackgroundColor:  noSelection,
    BackgroundTexture:noSelection,
    FontFamily:       noSelection,
    FontSize:         noSelection,
    FontWeight:       noSelection,
    FontStyle:        noSelection,
    LineHeight:       noSelection,
    activeScript:     noSelection,
    pendingScript:    noSelection,
    Script:           noSelection,
    editableValue:    noSelection,
    Error:            noSelection,
    ScriptError:      noSelection,
  }

/**** Project Properties ****/

  type SNS_ProjectProperties = SNS_commonProperties & {
    SnapToGrid:boolean | SNS_Placeholder,
    GridWidth: number  | SNS_Placeholder,
    GridHeight:number  | SNS_Placeholder,
  }

/**** Project Defaults ****/

  const SNS_ProjectDefaults = Object.assign({
    SnapToGrid:noSelection,
    GridWidth :noSelection,
    GridHeight:noSelection,
  }, SNS_commonDefaults)

/**** Board Properties ****/

  type SNS_BoardProperties = SNS_ProjectProperties & {
    Index:number | SNS_Placeholder,
  }

/**** Board Defaults ****/

  const SNS_BoardDefaults = Object.assign({
    Index:noSelection,
  }, SNS_ProjectDefaults)

/**** Sticker Properties ****/

  type SNS_StickerProperties = SNS_commonProperties & {
    Lock:       boolean      | SNS_Placeholder,
    Visibility: boolean      | SNS_Placeholder,
    Geometry:   SNS_Geometry | SNS_Placeholder,
    Index:      number       | SNS_Placeholder,
    Enabling:   boolean      | SNS_Placeholder,
  }

/**** Sticker Defaults ****/

  const SNS_StickerDefaults = Object.assign({
    Lock:       noSelection,
    Visibility: noSelection,
    Geometry:   noSelection,
    Index:      noSelection,
    Enabling:   noSelection,
  }, SNS_commonDefaults)

//------------------------------------------------------------------------------
//--                            Application State                             --
//------------------------------------------------------------------------------

  let PUX = new ProtoUX()   // has to be done here in order to access "observed"

  const Application:SNS_Application = PUX.observed as SNS_Application

  type SNS_Application = {
    persistedProjectList: SNS_Name[],
    normalizedProjectList:SNS_Name[],
    selectedProjectName:  SNS_Name|undefined,
    selectedProjectIndex: number|undefined,
    ProjectName:          SNS_Name|undefined,    // to create or rename projects

    Project:          SNS_Project|undefined,
    ProjectProperties:SNS_ProjectProperties,

    ProjectToPersist:    SNS_Project|undefined,
    DelayTimer:          any,
    DelayLimitTimer:     any,
    PersistenceRequested:boolean,
    PersistenceState:    'idle'|'running'|'failed',

    Mode:     'edit'|'run',
    ViewState:number,

    BoardTree:                     SNS_Board[],
    BoardTreeState:                number,
    selectedBoards:                SNS_Board[],
    expandedBoards:                SNS_Board[],
    BoardSelectionMayBeShiftedUp:  boolean,
    BoardSelectionMayBeShiftedDown:boolean,
    BoardSelectionMayBeShiftedIn:  boolean,
    BoardSelectionMayBeShiftedOut: boolean,

    chosenBoard:                     SNS_Board|undefined,
    BoardProperties:                 SNS_BoardProperties,
    StickerList:                     SNS_Sticker[],           // sorted by index
    StickerGeometries:               SNS_Geometry[],
    selectedStickers:                SNS_Sticker[],
    StickerSelectionMayBeShiftedUp:  boolean,
    StickerSelectionMayBeShiftedDown:boolean,
    StickerSelectionProperties:      Indexable,
    StickerSelectionGeometries:      SNS_Geometry[],

    OperationHistoryState:number,    // used to trigger mayUndo/Redo calculation
    mayUndoOperation:     boolean,
    mayRedoOperation:     boolean,

    ShelfIsFilled:boolean,

    VisitHistoryState:number,   // used to trigger mayVisitPrev/Next calculation
    mayVisitPrevBoard:boolean,
    mayVisitNextBoard:boolean,

    InspectorIsOpen:    boolean,
    InspectorPaneGroup: 'Project'|'Board'|'Stickers',
    InspectorPaneChoice:'Browser'|'Configuration',
    InspectorPaneIndex: number,
    InspectorMessage:   SNS_Textline,

    ValueEditorIsOpen:boolean,
    ValueEditorMode:  'Project'|'Board'|'Stickers',

    ScriptEditorIsOpen: boolean,
    ScriptEditorMode:   'Project'|'Board'|'Stickers',
    ScriptEditorMessage:SNS_Textline,

    ConsoleIsOpen:boolean,
    ConsoleValue: string,
  } & Indexable

/**** Application Defaults ****/

  const ApplicationDefaults = {
    persistedProjectList: [],
    normalizedProjectList:[],
    selectedProjectName:  undefined,
    selectedProjectIndex: undefined,

    Project:          undefined,
    ProjectProperties:SNS_ProjectDefaults,

    ProjectToPersist:    undefined,
    DelayTimer:          undefined,
    DelayLimitTimer:     undefined,
    PersistenceRequested:false,
    PersistenceState:    'idle',

    Mode:     'run',
    ViewState:0,

    BoardTree:                     [],
    BoardTreeState:                0,
    selectedBoards:                [],
    expandedBoards:                [],
    BoardSelectionMayBeShiftedUp:  false,
    BoardSelectionMayBeShiftedDown:false,
    BoardSelectionMayBeShiftedIn:  false,
    BoardSelectionMayBeShiftedOut: false,

    chosenBoard:                     undefined,
    BoardProperties:                 SNS_BoardDefaults,
    StickerList:                     [],
    StickerGeometries:               [],
    selectedStickers:                [],
    StickerSelectionMayBeShiftedUp:  false,
    StickerSelectionMayBeShiftedDown:false,
    StickerSelectionProperties:      SNS_StickerDefaults,
    StickerSelectionGeometries:      [],

    OperationHistoryState:0,
    mayUndoOperation:     false,
    mayRedoOperation:     false,

    ShelfIsFilled:false,

    VisitHistoryState:0,
    mayVisitPrevBoard:false,
    mayVisitNextBoard:false,

    InspectorIsOpen:false,
    InspectorPaneGroup: 'Project',
    InspectorPaneChoice:'Browser',
    InspectorPaneIndex: 0,
    InspectorMessage:   '(no project)',

    ValueEditorIsOpen:false,
    ValueEditorMode:  'Project',

    ScriptEditorIsOpen: false,
    ScriptEditorMode:   'Project',
    ScriptEditorMessage:'',

    ConsoleIsOpen:false,
    ConsoleValue: '',
  }

  Object.assign(Application,ApplicationDefaults)

//----------------------------------------------------------------------------//
//                          DesignerButton Handling                           //
//----------------------------------------------------------------------------//

  let DesignerButtonSlot:Indexable   = {}
  let DesignerButtonOffset:Indexable = {}

/**** moveDesignerButton ****/

  function moveDesignerButton (x:number, y:number, dx:number, dy:number):void {
    const DesignerButton = PUX.existingWidgetNamed('DesignerButton')
      x = DesignerButtonOffset.x + dx
      y = DesignerButtonOffset.y + dy
    const MainScreen = PUX.existingScreenNamed('MainScreen')
      const { width,height } = MainScreen.View.base.getBoundingClientRect()

      x = Math.max(0,Math.min(x,width-32))
      y = Math.max(0,Math.min(y,height-32))
    PUX.updateWidget(DesignerButton, {
      Style:`left:${x}px; top:${y}px`
    })
  }

/**** DesignerButtonRecognizer ****/

  const DesignerButtonRecognizer = DragClickRecognizerFor(DesignerButtonSlot, {
    Threshold:     1,                                // > 0 to remain clickable!
    onDragStarted: (x:number,y:number, dx:number,dy:number) => {
      const DesignerButton = PUX.existingWidgetNamed('DesignerButton')
      const { left,top }   = DesignerButton.View.base.getBoundingClientRect()
      DesignerButtonOffset = { x:left,y:top }
      moveDesignerButton(x,y, dx,dy)
    },
    onDragContinued:moveDesignerButton,
    onDragFinished: moveDesignerButton,
    onDragCancelled:moveDesignerButton,
    onClicked:      showDesignerTools
  })

/**** showDesignerTools ****/

  function showDesignerTools (x:number,y:number):void {
    const DesignerButton = PUX.existingWidgetNamed('DesignerButton')
    DesignerButton.View.base.style.visibility = 'hidden'

    showDialogAround('Toolbox', x,y)

    if (Application.InspectorIsOpen)    { PUX.openDialog('Inspector') }
    if (Application.ValueEditorIsOpen)  { PUX.openDialog('ValueEditor') }
    if (Application.ScriptEditorIsOpen) { PUX.openDialog('ScriptEditor') }
  }

/**** hideDesignerTools ****/

  function hideDesignerTools ():void {
    const DesignerButton = PUX.existingWidgetNamed('DesignerButton')
    DesignerButton.View.base.style.visibility = (
      Application.Project == null ? 'hidden' : 'visible'
    )

    PUX.closeDialog('Toolbox')
    PUX.closeDialog('Inspector')
    PUX.closeDialog('ValueEditor')
    PUX.closeDialog('ScriptEditor')
  }

//------------------------------------------------------------------------------
//--                                BoardView                                 --
//------------------------------------------------------------------------------

  function BoardView () {
    return html`<${SNS_BoardView}
      Mode=${Application.Mode}
      Board=${Application.chosenBoard} StickerList=${Application.StickerList}
      selectedStickers=${Application.selectedStickers}
      onSelectionChange=${(selectedStickers:SNS_Sticker[]) => {
        Application.selectedStickers = selectedStickers.slice()
      }}
      LassoMode="enclose"
      onGeometryChange=${(StickerList:SNS_Sticker[],GeometryList:SNS_Geometry[]) => {
        doChangeStickerGeometries(StickerList,GeometryList)
      }}
      SnapToGrid=${Application.BoardProperties?.SnapToGrid === true}
       GridWidth=${IntegerFor(Application.BoardProperties?.GridWidth)  || 10}
      GridHeight=${IntegerFor(Application.BoardProperties?.GridHeight) || 10}
    />`
  }

/**** StickerCreateOptions ****/

  const StickerCreateOptions = html`
    <option value="" disabled selected>please select</option>
    ${groupedBehaviorEntryList().map(
      (BehaviorEntryGroup:SNS_BehaviorEntryGroup) => html`
        <optgroup label="${BehaviorEntryGroup.GroupLabel}">
          ${OptionsForBehaviors(BehaviorEntryGroup.BehaviorEntryList)}
        </optgroup>
      `
    )}
  `

  function OptionsForBehaviors (BehaviorEntryList:SNS_BehaviorEntry[]):any {
    return html`${BehaviorEntryList.map(
      (BehaviorEntry:SNS_BehaviorEntry) => OptionForBehavior(BehaviorEntry)
    )}`
  }

  function OptionForBehavior (BehaviorEntry:SNS_BehaviorEntry):any {
    const { Name, Label, disabled } = BehaviorEntry
    return html`<option value=${Name} disabled=${disabled}>${Label}</>`
  }

/**** AppletGeneratorOptions ****/

  function AppletGeneratorOptions (StickerList:SNS_Sticker[]):any {
    const noStickers = (StickerList.length === 0)

    return html`
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
    `
  }

//------------------------------------------------------------------------------
//--                           PUX (User Interface)                           --
//------------------------------------------------------------------------------

//let PUX = new ProtoUX()                                 // already done before
;(window as Indexable)['PUX'] = PUX // just for testing
    PUX.ImageFolder = './icons/'

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

  #PUX_106 {
    left:37px; top:217px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clapperboard.png"); 
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
  #PUX_107 { background-image:url("/images/BinaryTexture_white_768x1024.jpg") }

  #PUX_110 {
    left:20px; top:19px; width:242px; height:610px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_135 { left:6px; top:0px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_136 { left:6px; top:31px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_137 { left:6px; top:61px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_228 { left:95px; top:31px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_229 { left:95px; top:61px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_230 { left:auto; top:101px; width:21px; height:21px; right:6px; bottom:auto }
  #PUX_138 { left:6px; top:171px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_139 { left:6px; top:201px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_231 { left:95px; top:201px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_140 { left:6px; top:230px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_232 { left:auto; top:230px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_141 { left:6px; top:261px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_233 { left:auto; top:266px; width:21px; height:21px; right:6px; bottom:auto }
  #PUX_142 { left:6px; top:291px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_234 { left:auto; top:296px; width:21px; height:21px; right:6px; bottom:auto }
  #PUX_143 { left:6px; top:320px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_235 { left:auto; top:320px; width:40px; height:29px; right:6px; bottom:auto }
  #PUX_144 { left:6px; top:351px; width:121px; height:29px; right:auto; bottom:auto }
  #PUX_236 { left:auto; top:351px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_145 { left:6px; top:391px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_146 { left:6px; top:420px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_237 { left:auto; top:420px; width:40px; height:29px; right:6px; bottom:auto }
  #PUX_147 { left:6px; top:451px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_149 { left:6px; top:130px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_244 { left:auto; top:130px; width:52px; height:29px; right:78px; bottom:auto }
  #PUX_242 { left:auto; top:130px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_243 {
    left:auto; top:130px; width:21px; height:29px; right:59px; bottom:auto; 
    text-align:center; 
  }

  #PUX_148 { left:6px; top:101px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_238 { left:95px; top:451px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_150 { left:6px; top:491px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_241 {
    left:auto; top:491px; width:24px; height:24px; right:4px; bottom:auto; 
    background-image:url("/images/image146.png"); 
  }

  #PUX_151 {
    left:6px; top:520px; width:auto; height:auto; right:6px; bottom:9px; 
    border:solid 1px #000000; 
  }

  #PUX_111 {
    left:271px; top:19px; width:242px; height:610px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_152 { left:5px; top:0px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_153 { left:5px; top:31px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_154 { left:5px; top:61px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_217 { left:95px; top:31px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_218 { left:95px; top:61px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_219 { left:auto; top:101px; width:21px; height:21px; right:7px; bottom:auto }
  #PUX_155 { left:5px; top:171px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_156 { left:5px; top:201px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_220 { left:95px; top:201px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_157 { left:5px; top:230px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_221 { left:auto; top:230px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_158 { left:5px; top:261px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_222 { left:auto; top:266px; width:21px; height:21px; right:7px; bottom:auto }
  #PUX_159 { left:5px; top:291px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_223 { left:auto; top:296px; width:21px; height:21px; right:7px; bottom:auto }
  #PUX_160 { left:5px; top:320px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_224 { left:auto; top:320px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_161 { left:5px; top:351px; width:121px; height:29px; right:auto; bottom:auto }
  #PUX_225 { left:auto; top:351px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_162 { left:5px; top:391px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_163 { left:5px; top:420px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_226 { left:auto; top:420px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_164 { left:5px; top:451px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_165 { left:5px; top:130px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_245 { left:auto; top:130px; width:52px; height:29px; right:79px; bottom:auto }
  #PUX_246 { left:auto; top:130px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_247 {
    left:auto; top:130px; width:21px; height:29px; right:60px; bottom:auto; 
    text-align:center; 
  }

  #PUX_166 { left:5px; top:101px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_227 { left:95px; top:451px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_167 { left:5px; top:491px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_240 {
    left:auto; top:491px; width:24px; height:26px; right:6px; bottom:auto; 
    background-image:url("/images/image146.png"); 
  }

  #PUX_168 {
    left:5px; top:520px; width:auto; height:auto; right:7px; bottom:9px; 
    border:solid 1px #000000; 
  }

  #PUX_112 {
    left:520px; top:19px; width:242px; height:791px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_169 { left:5px; top:0px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_170 { left:5px; top:31px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_171 { left:5px; top:61px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_191 { left:95px; top:31px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_192 { left:95px; top:61px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_172 { left:5px; top:190px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_173 { left:5px; top:221px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_193 { left:auto; top:221px; width:52px; height:29px; right:77px; bottom:auto }
  #PUX_194 { left:auto; top:221px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_195 {
    left:auto; top:221px; width:21px; height:29px; right:58px; bottom:auto; 
    text-align:center; 
  }

  #PUX_196 { left:auto; top:190px; width:52px; height:31px; right:77px; bottom:auto }
  #PUX_197 { left:auto; top:190px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_198 {
    left:auto; top:190px; width:21px; height:29px; right:58px; bottom:auto; 
    text-align:center; 
  }

  #PUX_174 { left:5px; top:251px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_199 {
    left:auto; top:283px; width:24px; height:24px; right:32px; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_200 {
    left:auto; top:283px; width:24px; height:24px; right:58px; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_201 {
    left:auto; top:285px; width:21px; height:24px; right:84px; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:2px 0px 0px 0px; border-color:#000000; 
  }

  #PUX_202 {
    left:auto; top:285px; width:24px; height:24px; right:82px; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_203 {
    left:auto; top:280px; width:21px; height:24px; right:8px; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:0px 0px 2px 0px; border-color:#000000; 
  }

  #PUX_204 {
    left:auto; top:280px; width:24px; height:24px; right:8px; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_205 { left:auto; top:251px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_175 { left:5px; top:130px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_206 { left:auto; top:130px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_176 { left:5px; top:101px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_177 { left:5px; top:311px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_178 { left:5px; top:341px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_207 { left:95px; top:341px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_179 { left:5px; top:370px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_208 { left:auto; top:370px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_180 { left:5px; top:401px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_209 { left:auto; top:406px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_181 { left:5px; top:430px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_210 { left:auto; top:436px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_182 { left:5px; top:460px; width:81px; height:29px; right:auto; bottom:auto }
  #PUX_211 { left:auto; top:460px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_183 { left:5px; top:491px; width:121px; height:29px; right:auto; bottom:auto }
  #PUX_212 { left:auto; top:491px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_184 { left:5px; top:531px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_185 { left:5px; top:560px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_213 { left:auto; top:560px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_186 { left:5px; top:591px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_214 { left:95px; top:591px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_187 { left:5px; top:161px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_215 { left:auto; top:161px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_188 { left:5px; top:631px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_216 { left:auto; top:631px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_189 { left:5px; top:671px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_239 {
    left:auto; top:671px; width:24px; height:26px; right:5px; bottom:auto; 
    background-image:url("/images/image146.png"); 
  }

  #PUX_190 {
    left:5px; top:700px; width:auto; height:auto; right:7px; bottom:10px; 
    border:solid 1px #000000; 
  }

  #PUX_108 {
    left:20px; top:700px; width:242px; height:270px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_113 { left:6px; top:0px; width:225px; height:29px; right:auto; bottom:auto }

  #PUX_121 {
    left:6px; top:56px; width:auto; height:auto; right:6px; bottom:43px; 
    background-color:#eeeeee; 
    border:solid 1px #888888; border-radius:0px; 
  }

  #PUX_122 { left:6px; top:auto; width:auto; height:29px; right:6px; bottom:6px }

  #PUX_120 {
    left:auto; top:24px; width:24px; height:24px; right:7px; bottom:auto; 
    background-image:url("/images/minus.png"); 
  }

  #PUX_114 {
    left:0px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/plus.png"); 
  }

  #PUX_115 {
    left:30px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clone.png"); 
  }

  #PUX_116 {
    left:156px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_117 {
    left:130px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_118 {
    left:71px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image21.png"); 
  }

  #PUX_119 {
    left:95px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image23.png"); 
  }

  #PUX_109 {
    left:271px; top:700px; width:242px; height:270px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_123 { left:5px; top:0px; width:225px; height:29px; right:auto; bottom:auto }

  #PUX_133 {
    left:5px; top:56px; width:auto; height:auto; right:7px; bottom:43px; 
    background-color:#eeeeee; 
    border:solid 1px #888888; border-radius:0px; 
  }

  #PUX_134 { left:5px; top:auto; width:auto; height:29px; right:7px; bottom:6px }

  #PUX_132 {
    left:auto; top:24px; width:24px; height:24px; right:9px; bottom:auto; 
    background-image:url("/images/minus.png"); 
  }

  #PUX_124 {
    left:0px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/plus.png"); 
  }

  #PUX_125 {
    left:29px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clone.png"); 
  }

  #PUX_126 {
    left:129px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_127 {
    left:100px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_128 {
    left:71px; top:26px; width:21px; height:24px; right:auto; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:2px 0px 0px 0px; border-color:#000000; 
  }

  #PUX_129 {
    left:69px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_130 {
    left:161px; top:26px; width:21px; height:24px; right:auto; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:0px 0px 2px 0px; border-color:#000000; 
  }

  #PUX_131 {
    left:159px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

`
    PUX.ScreenSet = {
      'MainScreen': {
        Name:'MainScreen', Id:'PUX_0',
        Width:768, Height:1024,
        packedGeometry:{"x":31,"y":30,"Width":669,"Height":749},
        WidgetList:[
          {"Type":"Placeholder","Name":"BoardView","Classes":"Placeholder empty Container","x":31,"Width":161,"y":30,"Height":90,"Id":"PUX_1"},
          {"Type":"Container","Name":"DesignerButton","Classes":"Container","x":210,"Width":32,"y":30,"Height":32,"Id":"PUX_52", WidgetList:[
            {"Type":"Icon","Classes":"Icon","Value":"url(\"/images/pen.png\")","Color":"black","Id":"PUX_68"},
          ]},
          {"Type":"ResizableDialog","Name":"Console","Classes":"ResizableDialog Container","x":421,"Width":280,"y":629,"Height":151,"Id":"PUX_79", WidgetList:[
            {"Type":"TextInput","Name":"ConsoleView","Classes":"TextInput no-resize","Anchoring":"c","Value":"(ready for operation)","Id":"PUX_80"},
            {"Type":"Icon","Name":"ConsoleClearButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/trash.png\")","Color":"black","Id":"PUX_81"},
          ]},
          {"Type":"Dialog","Name":"Toolbox","Classes":"Dialog Container ","x":31,"Width":130,"y":130,"Height":251,"Id":"PUX_29", WidgetList:[
            {"Type":"Icon","Name":"UndoButton","Classes":"Icon","Value":"url(\"/images/rotate-ccw.png\")","Color":"black","Id":"PUX_3"},
            {"Type":"Icon","Name":"RedoButton","Classes":"Icon","Value":"url(\"/images/rotate-cw.png\")","Color":"black","Id":"PUX_4"},
            {"Type":"PseudoDropDown","Name":"StickerCreateButton","Classes":"PseudoDropDown","Value":"url(\"/images/plus.png\")","Color":"black","Id":"PUX_5"},
            {"Type":"Icon","Name":"StickerDuplicateButton","Classes":"Icon","Value":"url(\"/images/clone.png\")","Color":"black","Id":"PUX_6"},
            {"Type":"Icon","Name":"StickerCutButton","Classes":"Icon","Value":"url(\"/images/scissors.png\")","Color":"black","Id":"PUX_7"},
            {"Type":"PseudoDropDown","Name":"StickerPasteButton","Classes":"PseudoDropDown","Value":"url(\"/images/clipboard-arrow-down.png\")","Color":"black","Id":"PUX_8"},
            {"Type":"Icon","Name":"StickerCopyButton","Classes":"Icon","Value":"url(\"/images/image133.png\")","Color":"black","Id":"PUX_9"},
            {"Type":"Icon","Name":"StickerDeleteButton","Classes":"Icon","Value":"url(\"/images/minus.png\")","Color":"black","Id":"PUX_34"},
            {"Type":"Icon","Name":"StickerConfigureButton","Classes":"Icon","Value":"url(\"/images/image95.png\")","Color":"black","Id":"PUX_10"},
            {"Type":"Icon","Name":"StickerShiftDownButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-down.png\")","Color":"black","Id":"PUX_11"},
            {"Type":"Icon","Name":"StickerShiftUpButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-up.png\")","Color":"black","Id":"PUX_12"},
            {"Type":"Icon","Name":"StickerShiftToTopButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-up.png\")","Color":"black","Id":"PUX_22"},
            {"Type":"Icon","Name":"StickerShiftToBottomButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-down.png\")","Color":"black","Id":"PUX_25"},
            {"Type":"Icon","Name":"ModeButton","Classes":"Icon","Value":"url(\"/images/draw-square.png\")","Color":"black","Id":"PUX_13"},
            {"Type":"PseudoDropDown","Name":"ExportButton","Classes":"PseudoDropDown","Value":"url(\"/images/arrow-down-to-bracket.png\")","Color":"black","Id":"PUX_14"},
            {"Type":"Icon","Name":"ImportButton","Classes":"Icon","Value":"url(\"/images/arrow-up-from-bracket.png\")","Color":"black","Id":"PUX_15"},
            {"Type":"FileInput","Name":"FileInput","Classes":"FileInput","Placeholder":"","Id":"PUX_105"},
            {"Type":"Icon","Name":"InspectorButton","Classes":"Icon","Value":"url(\"/images/pen-ruler.png\")","Color":"black","Id":"PUX_16"},
            {"Type":"Icon","Name":"VisitNextButton","Classes":"Icon","Value":"url(\"/images/chevron-right.png\")","Color":"black","Id":"PUX_17"},
            {"Type":"Icon","Name":"VisitPrevButton","Classes":"Icon","Value":"url(\"/images/chevron-left.png\")","Color":"black","Id":"PUX_18"},
            {"Type":"Icon","Name":"SearchButton","Classes":"Icon","Value":"url(\"/images/search.png\")","Color":"black","Id":"PUX_19"},
            {"Type":"Icon","Name":"ChatButton","Classes":"Icon","Value":"url(\"/images/message-square-chat.png\")","Color":"black","Id":"PUX_20"},
            {"Type":"Icon","Name":"VisitHomeButton","Classes":"Icon","Value":"url(\"/images/house-line.png\")","Color":"black","Id":"PUX_21"},
            {"Type":"Icon","Name":"BoardPrintButton","Classes":"Icon","Value":"url(\"/images/printer.png\")","Color":"black","Id":"PUX_30"},
            {"Type":"Icon","Name":"ProjectBrowserButton","Classes":"Icon","Value":"url(\"/images/cloud-wired.png\")","Color":"black","Id":"PUX_33"},
            {"Type":"Icon","Name":"ConsoleButton","Classes":"Icon","Value":"url(\"/images/terminal.png\")","Color":"black","Id":"PUX_32"},
            {"Type":"PseudoDropDown","Name":"AppletGeneratorButton","Classes":"PseudoDropDown","Value":"url(\"/images/clapperboard-play.png\")","Color":"black","Id":"PUX_31"},
            {"Type":"Icon","Name":"StickerScriptButton","Classes":"Icon","Value":"url(\"/images/square-code.png\")","Color":"black","Id":"PUX_35"},
            {"Type":"Icon","Name":"ImageGeneratorButton","Classes":"Icon","Value":"url(\"/images/clapperboard.png\")","Color":"black","Id":"PUX_106"},
          ]},
          {"Type":"ResizableDialog","Name":"ScriptEditor","Classes":"ResizableDialog Container","x":421,"Width":280,"y":130,"Height":220,"Id":"PUX_57", WidgetList:[
            {"Type":"Icon","Name":"WithdrawButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/xmark.png\")","Color":"black","Id":"PUX_53"},
            {"Type":"Icon","Name":"ApplyButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/check.png\")","Color":"black","Id":"PUX_54"},
            {"Type":"TextInput","Name":"ScriptInput","Classes":"TextInput no-resize","Anchoring":"c","Placeholder":"Enter Script","Value":"","Id":"PUX_55"},
            {"Type":"TextView","Name":"MessageView","Classes":"TextView","Anchoring":"s","Value":"","Id":"PUX_56"},
            {"Type":"Icon","Name":"MessageViewButton","Classes":"Icon","Anchoring":"se","Value":"url(\"/images/triangle-exclamation.png\")","Color":"black","Id":"PUX_58"},
            {"Type":"Icon","Name":"ProjectModeButton","Classes":"Icon","Value":"url(\"/images/book-open.png\")","Color":"black","Id":"PUX_59"},
            {"Type":"Icon","Name":"StickerModeButton","Classes":"Icon","Value":"url(\"/images/square.png\")","Color":"black","Id":"PUX_60"},
            {"Type":"Icon","Name":"BoardModeButton","Classes":"Icon","Value":"url(\"/images/file.png\")","Color":"black","Id":"PUX_61"},
          ]},
          {"Type":"ResizableDialog","Name":"Inspector","Classes":"ResizableDialog Container","x":181,"Width":221,"y":130,"Height":251,"Id":"PUX_43", WidgetList:[
            {"Type":"Icon","Name":"ProjectModeButton","Classes":"Icon","Value":"url(\"/images/book-open.png\")","Color":"black","Id":"PUX_36"},
            {"Type":"Icon","Name":"StickerModeButton","Classes":"Icon","Value":"url(\"/images/square.png\")","Color":"black","Id":"PUX_37"},
            {"Type":"Icon","Name":"BoardModeButton","Classes":"Icon","Value":"url(\"/images/file.png\")","Color":"black","Id":"PUX_38"},
            {"Type":"Icon","Name":"ConfigurationPaneButton","Classes":"Icon","Value":"url(\"/images/sliders.png\")","Color":"black","Id":"PUX_39"},
            {"Type":"Icon","Name":"BrowserPaneButton","Classes":"Icon","Value":"url(\"/images/list.png\")","Color":"black","Id":"PUX_40"},
            {"Type":"horizontalSeparator","Classes":"horizontalSeparator","Anchoring":"n","Id":"PUX_41"},
            {"Type":"Icon","Name":"ScriptEditorButton","Classes":"Icon","Value":"url(\"/images/square-code.png\")","Color":"black","Id":"PUX_42"},
            {"Type":"Text","Name":"MessageView","Classes":"Text","Anchoring":"s","Value":"(no error found)","Id":"PUX_92"},
            {"Type":"Deck","Name":"Deck","Classes":"Deck empty Container","Anchoring":"c","Id":"PUX_50"},
          ]},
          {"Type":"ResizableDialog","Name":"ValueEditor","Classes":"ResizableDialog Container","x":421,"Width":280,"y":380,"Height":220,"Id":"PUX_69", WidgetList:[
            {"Type":"TextInput","Name":"ValueInput","Classes":"TextInput no-resize","Anchoring":"c","Placeholder":"Enter Value","Value":"","Id":"PUX_88"},
            {"Type":"Icon","Name":"ProjectModeButton","Classes":"Icon","Value":"url(\"/images/book-open.png\")","Color":"black","Id":"PUX_70"},
            {"Type":"Icon","Name":"StickerModeButton","Classes":"Icon","Value":"url(\"/images/square.png\")","Color":"black","Id":"PUX_71"},
            {"Type":"Icon","Name":"BoardModeButton","Classes":"Icon","Value":"url(\"/images/file.png\")","Color":"black","Id":"PUX_72"},
          ]},
          {"Type":"ResizableDialog","Name":"ProjectBrowser","Classes":"ResizableDialog Container","x":31,"Width":280,"y":420,"Height":336,"Id":"PUX_104", WidgetList:[
            {"Type":"Label","Classes":"Label","Value":"Recent Projects:","Id":"PUX_96"},
            {"Type":"FlatListView","Name":"ProjectListView","Classes":"FlatListView","Anchoring":"c","Id":"PUX_97"},
            {"Type":"Button","Name":"ProjectOpenButton","Classes":"vertically-centered Button","Anchoring":"sw","Value":"Open","Id":"PUX_93"},
            {"Type":"Button","Name":"ProjectPurgeButton","Classes":"vertically-centered Button","Anchoring":"se","Value":"Purge","Id":"PUX_98"},
            {"Type":"TextlineInput","Name":"ProjectNameInput","Classes":"TextlineInput","Anchoring":"s","Placeholder":"Enter unique Project Name","Value":"","Id":"PUX_100"},
            {"Type":"Label","Classes":"Label","Anchoring":"sw","Value":"Project Name:","Id":"PUX_94"},
            {"Type":"Button","Name":"ProjectCreateButton","Classes":"vertically-centered Button","Anchoring":"sw","Value":"New","Id":"PUX_95"},
            {"Type":"Button","Name":"ProjectRenameButton","Classes":"vertically-centered Button","Anchoring":"se","Value":"Rename","Id":"PUX_99"},
          ]},
        ],
      },
      'Stuff Screen': {
        Name:'Stuff Screen', Id:'PUX_107',
        Width:768, Height:1024,
        packedGeometry:{"x":20,"y":19,"Width":741,"Height":950},
        WidgetList:[
          {"Type":"Card","Name":"ProjectConfigurationPane","Classes":"Card Container","x":20,"Width":242,"y":19,"Height":610,"Id":"PUX_110", WidgetList:[
            {"Type":"Label","Classes":"Label","Value":"Project Configuration","Id":"PUX_135"},
            {"Type":"Label","Classes":"Label","Value":"Id","Id":"PUX_136"},
            {"Type":"Label","Classes":"Label","Value":"Name","Id":"PUX_137"},
            {"Type":"TextlineInput","Name":"IdView","Classes":"TextlineInput readonly","Anchoring":"n","Placeholder":"","Value":"","Id":"PUX_228"},
            {"Type":"TextlineInput","Name":"NameView","Classes":"TextlineInput readonly","Anchoring":"n","Placeholder":"","Value":"","Id":"PUX_229"},
            {"Type":"Checkbox","Name":"SnapToGridCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_230"},
            {"Type":"Label","Classes":"Label","Value":"Typography","Id":"PUX_138"},
            {"Type":"Label","Classes":"Label","Value":"Font","Id":"PUX_139"},
            {"Type":"TextlineInput","Name":"FontFamilyInput","Classes":"TextlineInput","Anchoring":"n","Placeholder":"Enter Font Family","Value":"","Id":"PUX_231"},
            {"Type":"Label","Classes":"Label","Value":"Font Size [px]","Id":"PUX_140"},
            {"Type":"NumberInput","Name":"FontSizeInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"","Value":"","Id":"PUX_232"},
            {"Type":"Label","Classes":"Label","Value":"Bold","Id":"PUX_141"},
            {"Type":"Checkbox","Name":"BoldCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_233"},
            {"Type":"Label","Classes":"Label","Value":"Italic","Id":"PUX_142"},
            {"Type":"Checkbox","Name":"ItalicCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_234"},
            {"Type":"Label","Classes":"Label","Value":"Text Color","Id":"PUX_143"},
            {"Type":"ColorInput","Name":"TextColorInput","Classes":"ColorInput","Anchoring":"ne","Id":"PUX_235"},
            {"Type":"Label","Classes":"Label","Value":"Line Height [px]","Id":"PUX_144"},
            {"Type":"NumberInput","Name":"LineHeightInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"","Value":"","Id":"PUX_236"},
            {"Type":"Label","Classes":"Label","Value":"Background","Id":"PUX_145"},
            {"Type":"Label","Classes":"Label","Value":"Color","Id":"PUX_146"},
            {"Type":"ColorInput","Name":"BackgroundColorInput","Classes":"ColorInput","Anchoring":"ne","Id":"PUX_237"},
            {"Type":"Label","Classes":"Label","Value":"Texture","Id":"PUX_147"},
            {"Type":"Label","Classes":"Label","Value":"Grid Size [px]","Id":"PUX_149"},
            {"Type":"NumberInput","Name":"GridWidthInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"W","Value":"","Id":"PUX_244"},
            {"Type":"NumberInput","Name":"GridHeightInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"H","Value":"","Id":"PUX_242"},
            {"Type":"Label","Classes":"Label","Anchoring":"ne","Value":"x","Id":"PUX_243"},
            {"Type":"Label","Classes":"Label","Value":"Snap-to-Grid","Id":"PUX_148"},
            {"Type":"URLInput","Name":"TextureInput","Classes":"URLInput","Anchoring":"n","Placeholder":"Enter URL","Value":"","Id":"PUX_238"},
            {"Type":"Label","Classes":"Label","Value":"Value","Id":"PUX_150"},
            {"Type":"Icon","Name":"ValueEditorButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/image146.png\")","Color":"black","Id":"PUX_241"},
            {"Type":"TextInput","Name":"ValueInput","Classes":"TextInput no-resize","Anchoring":"c","Placeholder":"Enter Value","Value":"","Id":"PUX_151"},
          ]},
          {"Type":"Card","Name":"BoardConfigurationPane","Classes":"Card Container","x":271,"Width":242,"y":19,"Height":610,"Id":"PUX_111", WidgetList:[
            {"Type":"Label","Classes":"Label","Value":"Board Configuration","Id":"PUX_152"},
            {"Type":"Label","Classes":"Label","Value":"Id","Id":"PUX_153"},
            {"Type":"Label","Classes":"Label","Value":"Name","Id":"PUX_154"},
            {"Type":"TextlineInput","Name":"IdView","Classes":"TextlineInput readonly","Anchoring":"n","Placeholder":"","Value":"","Id":"PUX_217"},
            {"Type":"TextlineInput","Name":"NameInput","Classes":"TextlineInput","Anchoring":"n","Placeholder":"Enter Name","Value":"","Id":"PUX_218"},
            {"Type":"Checkbox","Name":"SnapToGridCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_219"},
            {"Type":"Label","Classes":"Label","Value":"Typography","Id":"PUX_155"},
            {"Type":"Label","Classes":"Label","Value":"Font","Id":"PUX_156"},
            {"Type":"TextlineInput","Name":"FontFamilyInput","Classes":"TextlineInput","Anchoring":"n","Placeholder":"Enter Font Family","Value":"","Id":"PUX_220"},
            {"Type":"Label","Classes":"Label","Value":"Font Size [px]","Id":"PUX_157"},
            {"Type":"NumberInput","Name":"FontSizeInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"","Value":"","Id":"PUX_221"},
            {"Type":"Label","Classes":"Label","Value":"Bold","Id":"PUX_158"},
            {"Type":"Checkbox","Name":"BoldCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_222"},
            {"Type":"Label","Classes":"Label","Value":"Italic","Id":"PUX_159"},
            {"Type":"Checkbox","Name":"ItalicCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_223"},
            {"Type":"Label","Classes":"Label","Value":"Text Color","Id":"PUX_160"},
            {"Type":"ColorInput","Name":"TextColorInput","Classes":"ColorInput","Anchoring":"ne","Id":"PUX_224"},
            {"Type":"Label","Classes":"Label","Value":"Line Height [px]","Id":"PUX_161"},
            {"Type":"NumberInput","Name":"LineHeightInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"","Value":"","Id":"PUX_225"},
            {"Type":"Label","Classes":"Label","Value":"Background","Id":"PUX_162"},
            {"Type":"Label","Classes":"Label","Value":"Color","Id":"PUX_163"},
            {"Type":"ColorInput","Name":"BackgroundColorInput","Classes":"ColorInput","Anchoring":"ne","Id":"PUX_226"},
            {"Type":"Label","Classes":"Label","Value":"Texture","Id":"PUX_164"},
            {"Type":"Label","Classes":"Label","Value":"Grid Size [px]","Id":"PUX_165"},
            {"Type":"NumberInput","Name":"GridWidthInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"W","Value":"","Id":"PUX_245"},
            {"Type":"NumberInput","Name":"GridHeightInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"H","Value":"","Id":"PUX_246"},
            {"Type":"Label","Classes":"Label","Anchoring":"ne","Value":"x","Id":"PUX_247"},
            {"Type":"Label","Classes":"Label","Value":"Snap-to-Grid","Id":"PUX_166"},
            {"Type":"URLInput","Name":"TextureInput","Classes":"URLInput","Anchoring":"n","Placeholder":"Enter URL","Value":"","Id":"PUX_227"},
            {"Type":"Label","Classes":"Label","Value":"Value","Id":"PUX_167"},
            {"Type":"Icon","Name":"ValueEditorButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/image146.png\")","Color":"black","Id":"PUX_240"},
            {"Type":"TextInput","Name":"ValueInput","Classes":"TextInput no-resize","Anchoring":"c","Placeholder":"Enter Value","Value":"","Id":"PUX_168"},
          ]},
          {"Type":"Card","Name":"StickerConfigurationPane","Classes":"Card Container","x":520,"Width":242,"y":19,"Height":791,"Id":"PUX_112", WidgetList:[
            {"Type":"Label","Classes":"Label","Value":"Sticker Configuration","Id":"PUX_169"},
            {"Type":"Label","Classes":"Label","Value":"Id","Id":"PUX_170"},
            {"Type":"Label","Classes":"Label","Value":"Name","Id":"PUX_171"},
            {"Type":"TextlineInput","Name":"IdView","Classes":"TextlineInput readonly","Anchoring":"n","Placeholder":"","Value":"","Id":"PUX_191"},
            {"Type":"TextlineInput","Name":"NameInput","Classes":"TextlineInput","Anchoring":"n","Placeholder":"Enter Name","Value":"","Id":"PUX_192"},
            {"Type":"Label","Classes":"Label","Value":"Position","Id":"PUX_172"},
            {"Type":"Label","Classes":"Label","Value":"Size","Id":"PUX_173"},
            {"Type":"NumberInput","Name":"WidthInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"W","Value":"","Id":"PUX_193"},
            {"Type":"NumberInput","Name":"HeightInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"H","Value":"","Id":"PUX_194"},
            {"Type":"Label","Classes":"Label","Anchoring":"ne","Value":"x","Id":"PUX_195"},
            {"Type":"NumberInput","Name":"xInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"x","Value":"","Id":"PUX_196"},
            {"Type":"NumberInput","Name":"yInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"y","Value":"","Id":"PUX_197"},
            {"Type":"Label","Classes":"Label","Anchoring":"ne","Value":",","Id":"PUX_198"},
            {"Type":"Label","Classes":"Label","Value":"Layer","Id":"PUX_174"},
            {"Type":"Icon","Name":"ShiftDownButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/arrow-sm-down.png\")","Color":"black","Id":"PUX_199"},
            {"Type":"Icon","Name":"ShiftUpButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/arrow-sm-up.png\")","Color":"black","Id":"PUX_200"},
            {"Type":"Box","Classes":"","Anchoring":"ne","Id":"PUX_201"},
            {"Type":"Icon","Name":"ShiftToTopButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/arrow-sm-up.png\")","Color":"black","Id":"PUX_202"},
            {"Type":"Box","Classes":"","Anchoring":"ne","Id":"PUX_203"},
            {"Type":"Icon","Name":"ShiftToBottomButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/arrow-sm-down.png\")","Color":"black","Id":"PUX_204"},
            {"Type":"NumberInput","Name":"IndexView","Classes":"NumberInput","Anchoring":"ne","Placeholder":"Layer","Value":"","Id":"PUX_205"},
            {"Type":"Label","Classes":"Label","Value":"Lock","Id":"PUX_175"},
            {"Type":"Checkbox","Name":"LockCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_206"},
            {"Type":"Label","Classes":"Label","Value":"Layout and Visibility","Id":"PUX_176"},
            {"Type":"Label","Classes":"Label","Value":"Typography","Id":"PUX_177"},
            {"Type":"Label","Classes":"Label","Value":"Font","Id":"PUX_178"},
            {"Type":"TextlineInput","Name":"FontFamilyInput","Classes":"TextlineInput","Anchoring":"n","Placeholder":"Enter Font Family","Value":"","Id":"PUX_207"},
            {"Type":"Label","Classes":"Label","Value":"Font Size [px]","Id":"PUX_179"},
            {"Type":"NumberInput","Name":"FontSizeInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"","Value":"","Id":"PUX_208"},
            {"Type":"Label","Classes":"Label","Value":"Bold","Id":"PUX_180"},
            {"Type":"Checkbox","Name":"BoldCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_209"},
            {"Type":"Label","Classes":"Label","Value":"Italic","Id":"PUX_181"},
            {"Type":"Checkbox","Name":"ItalicCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_210"},
            {"Type":"Label","Classes":"Label","Value":"Text Color","Id":"PUX_182"},
            {"Type":"ColorInput","Name":"TextColorInput","Classes":"ColorInput","Anchoring":"ne","Id":"PUX_211"},
            {"Type":"Label","Classes":"Label","Value":"Line Height [px]","Id":"PUX_183"},
            {"Type":"NumberInput","Name":"LineHeightInput","Classes":"NumberInput","Anchoring":"ne","Placeholder":"","Value":"","Id":"PUX_212"},
            {"Type":"Label","Classes":"Label","Value":"Background","Id":"PUX_184"},
            {"Type":"Label","Classes":"Label","Value":"Color","Id":"PUX_185"},
            {"Type":"ColorInput","Name":"BackgroundColorInput","Classes":"ColorInput","Anchoring":"ne","Id":"PUX_213"},
            {"Type":"Label","Classes":"Label","Value":"Texture","Id":"PUX_186"},
            {"Type":"URLInput","Name":"TextureInput","Classes":"URLInput","Anchoring":"n","Placeholder":"Enter URL","Value":"","Id":"PUX_214"},
            {"Type":"Label","Classes":"Label","Value":"Visibility","Id":"PUX_187"},
            {"Type":"Checkbox","Name":"VisibilityCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_215"},
            {"Type":"Label","Classes":"Label","Value":"Enabling","Id":"PUX_188"},
            {"Type":"Checkbox","Name":"EnablingCheck","Classes":"Checkbox","Anchoring":"ne","Value":true,"Id":"PUX_216"},
            {"Type":"Label","Classes":"Label","Value":"Value","Id":"PUX_189"},
            {"Type":"Icon","Name":"ValueEditorButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/image146.png\")","Color":"black","Id":"PUX_239"},
            {"Type":"TextInput","Name":"ValueInput","Classes":"TextInput no-resize","Anchoring":"c","Placeholder":"Enter Value","Value":"","Id":"PUX_190"},
          ]},
          {"Type":"Card","Name":"BoardBrowserPane","Classes":"Card Container","x":20,"Width":242,"y":700,"Height":270,"Id":"PUX_108", WidgetList:[
            {"Type":"Label","Classes":"Label","Value":"Board Browser","Id":"PUX_113"},
            {"Type":"NestedListView","Name":"BoardTreeView","Classes":"NestedListView","Anchoring":"c","Id":"PUX_121"},
            {"Type":"TextlineInput","Name":"BoardNameInput","Classes":"TextlineInput","Anchoring":"s","Placeholder":"Name","Value":"","Id":"PUX_122"},
            {"Type":"Icon","Name":"BoardDeleteButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/minus.png\")","Color":"black","Id":"PUX_120"},
            {"Type":"Icon","Name":"BoardCreateButton","Classes":"Icon","Value":"url(\"/images/plus.png\")","Color":"black","Id":"PUX_114"},
            {"Type":"Icon","Name":"BoardDuplicateButton","Classes":"Icon","Value":"url(\"/images/clone.png\")","Color":"black","Id":"PUX_115"},
            {"Type":"Icon","Name":"BoardShiftDownButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-down.png\")","Color":"black","Id":"PUX_116"},
            {"Type":"Icon","Name":"BoardShiftUpButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-up.png\")","Color":"black","Id":"PUX_117"},
            {"Type":"Icon","Name":"BoardShiftOutButton","Classes":"Icon","Value":"url(\"/images/image21.png\")","Color":"black","Id":"PUX_118"},
            {"Type":"Icon","Name":"BoardShiftInButton","Classes":"Icon","Value":"url(\"/images/image23.png\")","Color":"black","Id":"PUX_119"},
          ]},
          {"Type":"Card","Name":"StickerBrowserPane","Classes":"Card Container","x":271,"Width":242,"y":700,"Height":270,"Id":"PUX_109", WidgetList:[
            {"Type":"Label","Classes":"Label","Value":"Sticker Browser","Id":"PUX_123"},
            {"Type":"FlatListView","Name":"StickerListView","Classes":"FlatListView","Anchoring":"c","Id":"PUX_133"},
            {"Type":"TextlineInput","Name":"StickerNameInput","Classes":"TextlineInput","Anchoring":"s","Placeholder":"Name","Value":"","Id":"PUX_134"},
            {"Type":"Icon","Name":"StickerDeleteButton","Classes":"Icon","Anchoring":"ne","Value":"url(\"/images/minus.png\")","Color":"black","Id":"PUX_132"},
            {"Type":"PseudoDropDown","Name":"StickerCreateButton","Classes":"PseudoDropDown","Value":"url(\"/images/plus.png\")","Color":"black","Id":"PUX_124"},
            {"Type":"Icon","Name":"StickerDuplicateButton","Classes":"Icon","Value":"url(\"/images/clone.png\")","Color":"black","Id":"PUX_125"},
            {"Type":"Icon","Name":"StickerShiftDownButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-down.png\")","Color":"black","Id":"PUX_126"},
            {"Type":"Icon","Name":"StickerShiftUpButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-up.png\")","Color":"black","Id":"PUX_127"},
            {"Type":"Box","Classes":"","Id":"PUX_128"},
            {"Type":"Icon","Name":"StickerShiftToTopButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-up.png\")","Color":"black","Id":"PUX_129"},
            {"Type":"Box","Classes":"","Id":"PUX_130"},
            {"Type":"Icon","Name":"StickerShiftToBottomButton","Classes":"Icon","Value":"url(\"/images/arrow-sm-down.png\")","Color":"black","Id":"PUX_131"},
          ]},
        ],
      },
    }
      PUX.extractAllDialogs()

      PUX.stuff({
        Inspector: {
          Deck: {
            from:'Stuff Screen', with:[
              'BoardBrowserPane','StickerBrowserPane',
              'ProjectConfigurationPane','BoardConfigurationPane','StickerConfigurationPane'
            ],
          },
        }
      })

      const updatedFrom = PUX.updatedFrom
      PUX.configure({
        MainScreen: {
          self: {
            Style:'left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto'
          },

          BoardView: {
            Style:'left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto',
            Substitute:BoardView,
            Rendering:updatedFrom(() => {                 // just a few triggers
// @ts-ignore TS6198 important: accessing the following prop.s is relevant!
              const { Mode,ViewState,selectedStickers } = Application
            }),
          },

          DesignerButton: {
            Style:(
              'left:auto; top:10px; right:10px; bottom:auto; background:white; ' +
              'visibility:hidden'
            ),
            onPointerDown:  DesignerButtonRecognizer,
            onPointerMove:  DesignerButtonRecognizer,
            onPointerUp:    DesignerButtonRecognizer,
            onPointerCancel:DesignerButtonRecognizer,
          },
        },

        ProjectBrowser: {
          self:{
            Title:'Project Browser',
            x:-1, y:-1,                                 // for initial placement
            Style:'z-index:2000000',                      // above shape handles
            closeable:updatedFrom(() => Application.Project != null)
          },
          ProjectListView: {
            List:           updatedFrom(() => Application.persistedProjectList),
            Placeholder:    '(no projects found)',
            selectedIndices:updatedFrom(() => (
              Application.selectedProjectIndex == null
              ? []
              : [Application.selectedProjectIndex]
            )),
            SelectionLimit: 1,
            onSelectionChange:(selectedIndices:number[]) => {
              if (selectedIndices.length === 0) {
                Application.selectedProjectName  = undefined
                Application.selectedProjectIndex = undefined
                Application.ProjectName          = undefined
              } else {
                const selectedIndex = selectedIndices[0]
                Application.selectedProjectName  = Application.persistedProjectList[selectedIndex]
                Application.selectedProjectIndex = selectedIndex
                Application.ProjectName          = Application.selectedProjectName
              }
            },
          },
          ProjectOpenButton: {
            disabled:updatedFrom(() => (
              (Application.selectedProjectIndex == null)) ||
              ProjectIsOpen(Application.selectedProjectName as string)
            ),
            onClick:() => doOpenProject(Application.selectedProjectName as string),
          },
          ProjectPurgeButton: {
            disabled:updatedFrom(() => (
              (Application.selectedProjectIndex == null)) ||
              ProjectIsOpen(Application.selectedProjectName as string)
            ),
            onClick:() => doPurgeProject(Application.selectedProjectName as string),
          },
          ProjectNameInput: {
            Value:updatedFrom(() => Application.ProjectName),
            onInput:(Event:any) => Application.ProjectName = Event.target.value,
          },
          ProjectCreateButton: {
            disabled:updatedFrom(() => ! ProjectNameIsAvailable(Application.ProjectName as string)),
            onClick:() => doCreateProject(Application.ProjectName as string),
          },
          ProjectRenameButton: {
            disabled:updatedFrom(() => (
              (Application.selectedProjectIndex == null) ||
              ProjectIsOpen(Application.selectedProjectName as string) ||
              ! ProjectNameIsAvailable(Application.ProjectName as string)
            )),
            onClick:() => doRenameProject(
              Application.selectedProjectName as string, Application.ProjectName as string
            ),
          },
        },

        Toolbox: {
          self:{
            Title:'Toolbox',
            x:-1, y:-1,             // for placement around mouse click position
            Style:'z-index:2000000',                      // above shape handles
            onClose:hideDesignerTools,
          },

          ModeButton: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Style:updatedFrom(() =>
              Application.Mode === 'edit'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => doSwitchMode(),
          },
          InspectorButton: {
            disabled:updatedFrom(() => Application.Project == null),
            Style:updatedFrom(() =>
              Application.InspectorIsOpen
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:(Event:PointerEvent) => showDialogAround(
              'Inspector', Event.clientX,Event.clientY
            ),
          },
          ChatButton: { disabled:true },
          ProjectBrowserButton: {
            Style:updatedFrom(() =>
              Application.ProjectBrowserIsOpen
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:(Event:PointerEvent) => showDialogAround(
              'ProjectBrowser', Event.clientX,Event.clientY
            ),
          },

          StickerCreateButton: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Options:StickerCreateOptions,
            onInput:(Event:any) => { doCreateNewSticker(Event.target.value); Event.target.value = '' },
          },
          StickerDuplicateButton: {
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0)
            )),
            onClick:() => doDuplicateStickers(Application.selectedStickers),
          },
          StickerConfigureButton: {
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0)
            )),
            onClick:(Event:PointerEvent) => {
              showDialogAround('Inspector', Event.clientX,Event.clientY)
              setInspectorPaneGroup('Stickers')
              setInspectorPaneChoice('Configuration')
            },
          },
          StickerScriptButton: {
            disabled:updatedFrom(() => Application.Project == null),
            Style:updatedFrom(() =>
              Application.ScriptEditorIsOpen
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:(Event:PointerEvent) => showDialogAround(
              'ScriptEditor', Event.clientX,Event.clientY
            ),
          },

          StickerShiftToTopButton: {
            Style:'border-top:solid 2px black',
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0) &&
              Application.StickerSelectionMayBeShiftedDown
            )),
            onClick:() => doShiftStickersToBottom(Application.selectedStickers),
          },
          StickerShiftUpButton: {
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0) &&
              Application.StickerSelectionMayBeShiftedDown
            )),
            onClick:() => doShiftStickersDown(Application.selectedStickers),
          },
          StickerShiftDownButton: {
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0) &&
              Application.StickerSelectionMayBeShiftedUp
            )),
            onClick:() => doShiftStickersUp(Application.selectedStickers),
          },
          StickerShiftToBottomButton: {
            Style:'border-bottom:solid 2px black',
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0) &&
              Application.StickerSelectionMayBeShiftedUp
            )),
            onClick:() => doShiftStickersToTop(Application.selectedStickers),
          },

          StickerCutButton: {
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0)
            )),
            onClick:() => doCutStickers(Application.selectedStickers),
          },
          StickerCopyButton: {
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0)
            )),
            onClick:() => doCopyStickers(Application.selectedStickers),
          },
          StickerPasteButton: {
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              Application.ShelfIsFilled
            )),
            Options:['close to current selection','at original place'],
            onInput:(Event:any) => {
              if (Event.target.value === 'close to current selection') {
                const { minX,minY } = topLeftPositionOfStickers(Application.selectedStickers)
                doPasteStickersAround(minX,minY)
              } else {
                doPasteStickers()
              }
              Event.target.value = ''
            },
          },
          StickerDeleteButton: {
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0)
            )),
            onClick:() => doDeleteStickers(Application.selectedStickers),
          },

          UndoButton: {
            disabled:updatedFrom(() => ! Application.mayUndoOperation),
            onClick:() => doUndoOperation(),
          },
          RedoButton: {
            disabled:updatedFrom(() => ! Application.mayRedoOperation),
            onClick:() => doRedoOperation(),
          },
          ImportButton: {
            disabled:updatedFrom(() => Application.Project == null),
          },
          FileInput: {
            Style:      'border:none',
            disabled:   updatedFrom(() => Application.Project == null),
            Value:      '',
            Placeholder:'',
            accept:'.json,application/json',
            onChange:(Event:Indexable) => doImport(Event.target.files[0]),
            onDrop:  (Event:Indexable) => doImport(Event.dataTransfer.files[0]),
          },
          ExportButton: {
            disabled:updatedFrom(() => Application.Project == null),
            Options:['whole Project','active Board','selected Stickers'],
            onInput:(Event:any) => { doExport(Event.target.value); Event.target.value = '' },
          },

          VisitPrevButton: {
            disabled:updatedFrom(() => ! Application.mayVisitPrevBoard),
            onClick:() => doVisitPrevBoard(),
          },
          VisitNextButton: {
            disabled:updatedFrom(() => ! Application.mayVisitNextBoard),
            onClick:() => doVisitNextBoard(),
          },
          VisitHomeButton: {
            disabled:updatedFrom(() => (
              (Application.BoardTree.length === 0) ||
              (Application.chosenBoard === Application.BoardTree[0])
            )),
            onClick:() => doVisitBoard(Application.Project?.Board(0)),
          },
          SearchButton: {
            disabled:true,
          },

          ConsoleButton: {
            Style:updatedFrom(() =>
              Application.ConsoleIsOpen
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:(Event:PointerEvent) => showDialogAround(
              'Console', Event.clientX,Event.clientY
            ),
          },
          ImageGeneratorButton: {
            disabled:updatedFrom(() => ! (
              (Application.chosenBoard != null) &&
              (Application.selectedStickers.length > 0)
            )),
            onClick:() => doGenerateImage(Application.selectedStickers),
          },
          AppletGeneratorButton: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Options:updatedFrom(() => AppletGeneratorOptions(Application.selectedStickers)),
            onInput:(Event:any) => {
              const chosenBoard = Application.chosenBoard
              if (chosenBoard == null) { return withWarning('there is currently no chosen board') }

              const [ Source,Mode ] = Event.target.value.split(':')
                Event.target.value = ''
              switch (Source) {
                case 'Board':
                  return doGenerateAppletFromBoard(chosenBoard,Mode)
                case 'Boards':
                  return doGenerateAppletFromBoardAndSuccessors(chosenBoard,Mode)
                case 'Stickers': default:
                  return doGenerateAppletFromStickers(Application.selectedStickers,Mode)
              }
            },
          },
          BoardPrintButton: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            onClick:() => doPrintBoard(),
          },
        },

        Inspector: {
          self:{
            Title:'Inspector',
            x:-1, y:-1,             // for placement around mouse click position
            minWidth:300, minHeight:460, Width:300, Height:460,
            Style:'z-index:2000000',                      // above shape handles
            onOpen: () => Application.InspectorIsOpen = true,
            onClose:() => Application.InspectorIsOpen = false,
          },

          ProjectModeButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.InspectorPaneGroup === 'Project'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => setInspectorPaneGroup('Project'),
          },
          BoardModeButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.InspectorPaneGroup === 'Board'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => setInspectorPaneGroup('Board'),
          },
          StickerModeButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.InspectorPaneGroup === 'Stickers'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => setInspectorPaneGroup('Stickers'),
          },

          BrowserPaneButton: {
            disabled:updatedFrom(() => (
              (Application.Project == null) ||
              (Application.InspectorPaneGroup === 'Stickers')
            )),
            Style:updatedFrom(() =>
              Application.InspectorPaneChoice === 'Browser'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => setInspectorPaneChoice('Browser'),
          },

          ConfigurationPaneButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.InspectorPaneChoice === 'Configuration'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => setInspectorPaneChoice('Configuration'),
          },

          ScriptEditorButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            onClick:(Event:PointerEvent) => {
              showDialogAround('ScriptEditor', Event.clientX,Event.clientY)
              Application.ScriptEditorMode = Application.InspectorPaneGroup
            },
          },

          Deck: {
            Style:'overflow-x:hidden; overflow-y:scroll; overflow:hidden scroll',
            Value:updatedFrom(() => Application.InspectorPaneIndex),
          },

          MessageView: {
            Value:updatedFrom(() => Application.InspectorMessage),
          },
        },

        ValueEditor: {
          self:{
            Title:'Value Editor',
            x:-1, y:-1,             // for placement around mouse click position
            Style:'z-index:2000000',                      // above shape handles
            onOpen: () => Application.ValueEditorIsOpen = true,
            onClose:() => Application.ValueEditorIsOpen = false,
          },

          ProjectModeButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.ValueEditorMode === 'Project'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => Application.ValueEditorMode = 'Project',
          },
          BoardModeButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.ValueEditorMode === 'Board'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => Application.ValueEditorMode = 'Board',
          },
          StickerModeButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.ValueEditorMode === 'Stickers'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => Application.ValueEditorMode = 'Stickers',
          },

          ValueInput: {
            disabled:updatedFrom(() => (
              Application.ValueEditorMode === 'Project'
              ? Application.Project == null
              : Application.ValueEditorMode === 'Board'
                ? Application.chosenBoard == null
                : Application.selectedStickers.length === 0
            )),
            Value:updatedFrom(() => (
              Application.ValueEditorMode === 'Project'
              ? ValueFor(Application.ProjectProperties.editableValue)
              : Application.ValueEditorMode === 'Board'
                ? ValueFor(Application.BoardProperties.editableValue)
                : ValueFor(Application.StickerSelectionProperties.editableValue)
            )),
            Placeholder:updatedFrom(() => (
              Application.ValueEditorMode === 'Project'
              ? '(enter project value)'
              : Application.ValueEditorMode === 'Board'
                ? '(enter a value for the currently active board)'
                : '(enter a common value for all currently selected stickers)'
            )),
            onInput:(Event:any) => {
              switch (Application.ValueEditorMode) {
                case 'Project':
                  return doConfigureProject(Application.Project as SNS_Project,'editableValue',Event.target.value)
                case 'Board':
                  return doConfigureBoard(Application.chosenBoard as SNS_Board,'editableValue',Event.target.value)
                case 'Stickers': default:
                  return doConfigureStickers(Application.selectedStickers,'editableValue',Event.target.value)
              }
            },
          },
        },

        ScriptEditor: {
          self:{
            Title:'Script Editor',
            x:-1, y:-1,             // for placement around mouse click position
            Style:'z-index:2000000',                      // above shape handles
            onOpen: () => Application.ScriptEditorIsOpen = true,
            onClose:() => Application.ScriptEditorIsOpen = false,
          },

          ProjectModeButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.ScriptEditorMode === 'Project'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => Application.ScriptEditorMode = 'Project',
          },
          BoardModeButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.ScriptEditorMode === 'Board'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => Application.ScriptEditorMode = 'Board',
          },
          StickerModeButton: {
            disabled:updatedFrom(() => (Application.Project == null)),
            Style:updatedFrom(() =>
              Application.ScriptEditorMode === 'Stickers'
              ? 'background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px'
              : ''
            ),
            onClick:() => Application.ScriptEditorMode = 'Stickers',
          },

          ScriptInput: {
            Style:'white-space:pre',
            disabled:updatedFrom(() => (
              Application.ScriptEditorMode === 'Project'
              ? Application.Project == null
              : Application.ScriptEditorMode === 'Board'
                ? Application.chosenBoard == null
                : Application.selectedStickers.length === 0
            )),
            Value:updatedFrom(() => (
              Application.ScriptEditorMode === 'Project'
              ? ValueFor(Application.ProjectProperties.Script)
              : Application.ScriptEditorMode === 'Board'
                ? ValueFor(Application.BoardProperties.Script)
                : ValueFor(Application.StickerSelectionProperties.Script)
            )),
            Placeholder:updatedFrom(() => (
              Application.ScriptEditorMode === 'Project'
              ? '(enter project script)'
              : Application.ScriptEditorMode === 'Board'
                ? '(enter script for the currently active board)'
                : '(enter common script for all currently selected stickers)'
            )),
            onInput:(Event:any) => {
              switch (Application.ScriptEditorMode) {
                case 'Project':
                  return doConfigureProject(Application.Project as SNS_Project,'pendingScript',Event.target.value)
                case 'Board':
                  return doConfigureBoard(Application.chosenBoard as SNS_Board,'pendingScript',Event.target.value)
                case 'Stickers': default:
                  return doConfigureStickers(Application.selectedStickers,'pendingScript',Event.target.value)
              }
            },
          },

          ApplyButton: {
            disabled:updatedFrom(() => (
              Application.ScriptEditorMode === 'Project'
              ? Application.ProjectProperties.Script === Application.ProjectProperties.activeScript
              : Application.ScriptEditorMode === 'Board'
                ? Application.BoardProperties.Script            === Application.BoardProperties.activeScript
                : Application.StickerSelectionProperties.Script === Application.StickerSelectionProperties.activeScript
            )),
            onClick:() => {
              switch (Application.ScriptEditorMode) {
                case 'Project':
                  return doApplyProjectScript(Application.Project as SNS_Project)
                case 'Board':
                  return doApplyBoardScript(Application.chosenBoard as SNS_Board)
                case 'Stickers': default:
                  return doApplyStickerScript(Application.selectedStickers)
              }
            },
          },
          WithdrawButton: {
            disabled:updatedFrom(() => (
              Application.ScriptEditorMode === 'Project'
              ? Application.ProjectProperties.Script === Application.ProjectProperties.activeScript
              : Application.ScriptEditorMode === 'Board'
                ? Application.BoardProperties.Script            === Application.BoardProperties.activeScript
                : Application.StickerSelectionProperties.Script === Application.StickerSelectionProperties.activeScript
            )),
            onClick:() => {
              switch (Application.ScriptEditorMode) {
                case 'Project':
                  return doWithdrawProjectScript(Application.Project as SNS_Project)
                case 'Board':
                  return doWithdrawBoardScript(Application.chosenBoard as SNS_Board)
                case 'Stickers': default:
                  return doWithdrawStickerScript(Application.selectedStickers)
              }
            },
          },

          MessageView: {
            Style:(
              'bottom:0px; font-size:13px; padding-top:3px; ' +
              'white-space:nowrap; overflow:hidden; text-overflow:ellipsis'
            ),
            Value:updatedFrom(() => ErrorMessageFor(
              Application.ScriptEditorMode === 'Project'
              ? Application.ProjectProperties.ScriptError
              : Application.ScriptEditorMode === 'Board'
                ? Application.ProjectProperties.ScriptError
                : Application.StickerSelectionProperties.ScriptError
            ))
          },
          MessageViewButton: {
            Style:'bottom:3px',
            disabled:updatedFrom(() => ! ValueIsError(
              Application.ScriptEditorMode === 'Project'
              ? Application.ProjectProperties.ScriptError
              : Application.ScriptEditorMode === 'Board'
                ? Application.ProjectProperties.ScriptError
                : Application.StickerSelectionProperties.ScriptError
            )),
            onClick:() => showScriptError(
              Application.ScriptEditorMode === 'Project'
              ? Application.ProjectProperties.ScriptError
              : Application.ScriptEditorMode === 'Board'
                ? Application.ProjectProperties.ScriptError
                : Application.StickerSelectionProperties.ScriptError
            ),
          },
        },

        Console: {
          self:{
            Title:'Console',
            x:-1, y:-1,             // for placement around mouse click position
            Style:'z-index:2000000',                      // above shape handles
            onOpen: () => Application.ConsoleIsOpen = true,
            onClose:() => Application.ConsoleIsOpen = false,
          },
          ConsoleClearButton: {
            Style:    'top:2px; z-index:1',
            disabled: updatedFrom(() => Application.ConsoleValue === ''),
            onClick:  () => clearConsole()
          },
          ConsoleView: {
            Style:'bottom:0px; border:solid 4px transparent; color:green',
            readonly:true,
            Value:updatedFrom(() => Application.ConsoleValue),
          },
        },
      })

      PUX.configure({
        'Stuff Screen': {
        BoardBrowserPane:{
          BoardTreeView: {
            List: updatedFrom(() => {
              Application.BoardTreeState; Application.chosenBoard    // triggers
              return Application.BoardTree
            }),
            LabelOfItem:       (Board:SNS_Board) => Board.Name,
            ContentListOfItem: (Board:SNS_Board) => Board.BoardList,
            ItemRenderer:      (Board:SNS_Board, IndexPath:number[]) => {
              const Style = (
                Application.chosenBoard === Board
                ? 'font-weight:bold; text-decoration:underline'
                : undefined
              )
              if (Board.Name == null) {
                return html`<div class="ItemLabel" style=${Style}><i>(unnamed)</i></div>`
              } else {
                return html`<div class="ItemLabel" style=${Style}>${Board.Name}</div>`
              }
            },
            SelectionMode:    'same-container',
            SelectionLimit:   Number.MAX_SAFE_INTEGER,
            selectedPaths:    updatedFrom(() => (Application.BoardTreeState, IndexPathsOfBoards(Application.selectedBoards))),
            onSelectionChange:(selectedBoardPaths:number[][]) => Application.selectedBoards = BoardsAtIndexPaths(selectedBoardPaths),
            onItemDoubleClicked:(Board:SNS_Board) => doVisitBoard(Board),
            expandedPaths:    updatedFrom(() => (Application.BoardTreeState, IndexPathsOfBoards(Application.expandedBoards))),
            onExpansionChange:(expandedBoardPaths:number[][]) => Application.expandedBoards = BoardsAtIndexPaths(expandedBoardPaths),
          },

          BoardCreateButton: {
            disabled: updatedFrom(() => Application.Project == null),
            onClick:  () => doCreateNewBoard(Application.selectedBoards),
          },
          BoardDuplicateButton: {
            disabled: updatedFrom(() => Application.selectedBoards.length === 0),
            onClick:  () => doDuplicateBoards(Application.selectedBoards),
          },

          BoardShiftOutButton: {
            disabled: updatedFrom(() => ! Application.BoardSelectionMayBeShiftedOut),
            onClick:  () => doShiftBoardsOut(Application.selectedBoards),
          },
          BoardShiftInButton: {
            disabled: updatedFrom(() => ! Application.BoardSelectionMayBeShiftedIn),
            onClick:  () => doShiftBoardsIn(Application.selectedBoards),
          },

          BoardShiftUpButton: {
            disabled: updatedFrom(() => ! Application.BoardSelectionMayBeShiftedUp),
            onClick:  () => doShiftBoardsUp(Application.selectedBoards),
          },
          BoardShiftDownButton: {
            disabled: updatedFrom(() => ! Application.BoardSelectionMayBeShiftedDown),
            onClick:  () => doShiftBoardsDown(Application.selectedBoards),
          },

          BoardDeleteButton: {
            disabled: updatedFrom(() => Application.selectedBoards.length === 0),
            onClick:  () => doDeleteBoards(Application.selectedBoards),
          },

          BoardNameInput: {
            disabled: updatedFrom(() => Application.selectedBoards.length !== 1),
            Value:    updatedFrom(() => Application.BoardTreeState && ValueFor(
              Application.selectedBoards.length === 0
              ? noSelection
              : Application.selectedBoards.length === 1
                ? Application.selectedBoards[0].Name
                : mixedValues
            )),
            onInput: (Event:any) => {
              if (Application.selectedBoards.length === 1) {
                doConfigureBoard(Application.selectedBoards[0],'Name',Event.target.value)
              }
            },
          },
        },


        StickerBrowserPane:{
          StickerListView: {
            List:updatedFrom(() => {
              Application.ViewState                            // just a trigger
              return Application.StickerList
            }),
            ItemRenderer: (Sticker:SNS_Sticker) => {
              if (Sticker.Name == null) {
                return `<div class="ItemLabel"><i>(unnamed)</i></div>`
              } else {
                return `<div class="ItemLabel">${Sticker.Name}</div>`
              }
            },
            Placeholder: '(board is empty)',
            selectedIndices:updatedFrom(() => {
              Application.ViewState                            // just a trigger
              return Application.selectedStickers.map(
                (Sticker:SNS_Sticker) => Sticker.Index
              )
            }),
            SelectionLimit: Number.MAX_SAFE_INTEGER,
            onSelectionChange:(selectedIndices:number[]) => {
              const chosenBoard = Application.chosenBoard
              if (chosenBoard == null) { return withWarning('there is currently no chosen board') }

// @ts-ignore TS2322 "undefined" list entries will be removed
              Application.selectedStickers = selectedIndices
                .map((Index:number) => chosenBoard.Sticker(Index))
                .filter((Sticker:any) => Sticker != null)
            },
          },

          StickerCreateButton: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Options: StickerCreateOptions,
            onInput: (Event:any) => { doCreateNewSticker(Event.target.value); Event.target.value = '' },
          },
          StickerDuplicateButton: {
            disabled: updatedFrom(() => Application.selectedStickers.length == 0),
            onClick:  () => doDuplicateStickers(Application.selectedStickers),
          },

          StickerShiftToTopButton: {
            disabled: updatedFrom(() => ! Application.StickerSelectionMayBeShiftedUp),
            onClick:  () => doShiftStickersToTop(Application.selectedStickers),
          },
          StickerShiftUpButton: {
            disabled: updatedFrom(() => ! Application.StickerSelectionMayBeShiftedUp),
            onClick:  () => doShiftStickersUp(Application.selectedStickers),
          },
          StickerShiftDownButton: {
            disabled: updatedFrom(() => ! Application.StickerSelectionMayBeShiftedDown),
            onClick:  () => doShiftStickersDown(Application.selectedStickers),
          },
          StickerShiftToBottomButton: {
            disabled: updatedFrom(() => ! Application.StickerSelectionMayBeShiftedDown),
            onClick:  () => doShiftStickersToBottom(Application.selectedStickers),
          },

          StickerDeleteButton: {
            disabled: updatedFrom(() => Application.selectedStickers.length === 0),
            onClick:  () => doDeleteStickers(Application.selectedStickers),
          },

          StickerNameInput: {
            disabled: updatedFrom(() => Application.selectedStickers.length === 0),
            Value:    updatedFrom(() => ValueFor(Application.StickerSelectionProperties.Name)),
            onInput: (Event:any) => doConfigureStickers(
              Application.selectedStickers,'Name',Event.target.value
            ),
          },
        },


        ProjectConfigurationPane:{
          IdView: {
            readonly:true,
            Value:updatedFrom(() => ValueFor(Application.ProjectProperties.Id)),
          },
          NameInput: {
            readonly:true,
            Value:updatedFrom(() => ValueFor(Application.ProjectProperties.Name)),
          },
          SnapToGridCheck: {
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => BooleanFor(Application.ProjectProperties.SnapToGrid)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'SnapToGrid',Event.target.checked
            ),
          },
          GridWidthInput:  {
            min:0, step:1,
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => IntegerFor(Application.ProjectProperties.GridWidth)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'GridWidth',parseInt(Event.target.value,10)
            ),
          },
          GridHeightInput: {
            min:0, step:1,
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => IntegerFor(Application.ProjectProperties.GridHeight)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'GridHeight',parseInt(Event.target.value,10)
            ),
          },
          FontFamilyInput: {
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => ValueFor(Application.ProjectProperties.FontFamily)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'FontFamily',Event.target.value
            ),
          },
          FontSizeInput: {
            min:0, step:1,
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => IntegerFor(Application.ProjectProperties.FontSize)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'FontSize',parseInt(Event.target.value,10)
            ),
          },
          BoldCheck: {
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => BooleanFor(Application.ProjectProperties.FontWeight,700)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'FontWeight',Event.target.checked ? 700 : 400
            ),
          },
          ItalicCheck: {
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => BooleanFor(Application.ProjectProperties.FontStyle,'italic')),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'FontStyle',Event.target.checked ? 'italic' : 'normal'
            ),
          },
          TextColorInput: {
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => ValueFor(Application.ProjectProperties.ForegroundColor)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'ForegroundColor',Event.target.value
            ),
          },
          LineHeightInput: {
            min:0, step:1,
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => IntegerFor(Application.ProjectProperties.LineHeight)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'LineHeight',parseInt(Event.target.value,10)
            ),
          },
          BackgroundColorInput: {
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => ValueFor(Application.ProjectProperties.BackgroundColor)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'BackgroundColor',Event.target.value
            ),
          },
          TextureInput: {
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => ValueFor(Application.ProjectProperties.BackgroundTexture)),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'BackgroundTexture',Event.target.value
            ),
          },
          ValueInput: {
            Style:'min-height:100px',
            disabled:updatedFrom(() => Application.Project == null),
            Value:updatedFrom(() => ValueFor(Application.ProjectProperties.editableValue)),
            Placeholder:updatedFrom(() => '(enter a value for the currently active board)'),
            onInput:(Event:any) => doConfigureProject(
              Application.Project as SNS_Project,'editableValue',Event.target.value
            ),
          },
          ValueEditorButton: {
            onClick:(Event:PointerEvent) => {
              showDialogAround('ValueEditor', Event.clientX,Event.clientY)
              Application.ValueEditorMode = 'Project'
            },
          },
        },


        BoardConfigurationPane:{
          IdView: {
            readonly:true,
            Value:updatedFrom(() => ValueFor(Application.BoardProperties.Id)),
          },
          NameInput: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => ValueFor(Application.BoardProperties.Name)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'Name',Event.target.value
            ),
          },
          SnapToGridCheck: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => BooleanFor(Application.BoardProperties.SnapToGrid)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'SnapToGrid',Event.target.checked
            ),
          },
          GridWidthInput:  {
            min:0, step:1,
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => IntegerFor(Application.BoardProperties.GridWidth)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'GridWidth',parseInt(Event.target.value,10)
            ),
          },
          GridHeightInput: {
            min:0, step:1,
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => IntegerFor(Application.BoardProperties.GridHeight)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'GridHeight',parseInt(Event.target.value,10)
            ),
          },
          FontFamilyInput: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => ValueFor(Application.BoardProperties.FontFamily)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'FontFamily',Event.target.value
            ),
          },
          FontSizeInput: {
            min:0, step:1,
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => IntegerFor(Application.BoardProperties.FontSize)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'FontSize',parseInt(Event.target.value,10)
            ),
          },
          BoldCheck: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => BooleanFor(Application.BoardProperties.FontWeight,700)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'FontWeight',Event.target.checked ? 700 : 400
            ),
          },
          ItalicCheck: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => BooleanFor(Application.BoardProperties.FontStyle,'italic')),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'FontStyle',Event.target.checked ? 'italic' : 'normal'
            ),
          },
          TextColorInput: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => ValueFor(Application.BoardProperties.ForegroundColor)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'ForegroundColor',Event.target.value
            ),
          },
          LineHeightInput: {
            min:0, step:1,
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => IntegerFor(Application.BoardProperties.LineHeight)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'LineHeight',parseInt(Event.target.value,10)
            ),
          },
          BackgroundColorInput: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => ValueFor(Application.BoardProperties.BackgroundColor)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'BackgroundColor',Event.target.value
            ),
          },
          TextureInput: {
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => ValueFor(Application.BoardProperties.BackgroundTexture)),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'BackgroundTexture',Event.target.value
            ),
          },
          ValueInput: {
            Style:'min-height:100px',
            disabled:updatedFrom(() => Application.chosenBoard == null),
            Value:updatedFrom(() => ValueFor(Application.BoardProperties.editableValue)),
            Placeholder:updatedFrom(() => '(enter a value for the currently active board)'),
            onInput:(Event:any) => doConfigureBoard(
              Application.chosenBoard as SNS_Board,'editableValue',Event.target.value
            ),
          },
          ValueEditorButton: {
            onClick:(Event:PointerEvent) => {
              showDialogAround('ValueEditor', Event.clientX,Event.clientY)
              Application.ValueEditorMode = 'Board'
            },
          },
        },


        StickerConfigurationPane:{
          IdView: {
            readonly:true,
            Value:updatedFrom(() => ValueFor(Application.StickerSelectionProperties.Id)),
          },
          NameInput: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => ValueFor(Application.StickerSelectionProperties.Name)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'Name',Event.target.value),
          },
          LockCheck: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.Lock)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'Lock',Event.target.checked),
          },
          VisibilityCheck: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.Visibility)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'Visibility',Event.target.checked),
          },
          xInput: {
            step:1,
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Geometry.x)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'x',parseInt(Event.target.value,10)),
          },
          yInput: {
            step:1,
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Geometry.y)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'y',parseInt(Event.target.value,10)),
          },
          WidthInput:  {
            min:0, step:1,
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Geometry.Width)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'Width',parseInt(Event.target.value,10)),
          },
          HeightInput: {
            min:0, step:1,
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Geometry.Height)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'Height',parseInt(Event.target.value,10)),
          },
          IndexView: {
            readonly:true,
            Value:updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.Index)),
          },
          ShiftToTopButton: {
            disabled:updatedFrom(() => ! Application.StickerSelectionMayBeShiftedDown),
            onClick:() => doShiftStickersToBottom(Application.selectedStickers),
          },
          ShiftUpButton: {
            disabled:updatedFrom(() => ! Application.StickerSelectionMayBeShiftedDown),
            onClick:() => doShiftStickersDown(Application.selectedStickers),
          },
          ShiftDownButton: {
            disabled:updatedFrom(() => ! Application.StickerSelectionMayBeShiftedUp),
            onClick:() => doShiftStickersUp(Application.selectedStickers),
          },
          ShiftToBottomButton: {
            disabled:updatedFrom(() => ! Application.StickerSelectionMayBeShiftedUp),
            onClick:() => doShiftStickersToTop(Application.selectedStickers),
          },
          FontFamilyInput: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => ValueFor(Application.StickerSelectionProperties.FontFamily)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'FontFamily',Event.target.value),
          },
          FontSizeInput: {
            min:0, step:1,
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.FontSize)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'FontSize',parseInt(Event.target.value,10)),
          },
          BoldCheck: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.FontWeight,700)),
            onInput:(Event:any) => doConfigureStickers(
              Application.selectedStickers,'FontWeight',Event.target.checked ? 700 : 400
            ),
          },
          ItalicCheck: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.FontStyle,'italic')),
            onInput:(Event:any) => doConfigureStickers(
              Application.selectedStickers,'FontStyle',Event.target.checked ? 'italic' : 'normal'
            ),
          },
          TextColorInput: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => ValueFor(Application.StickerSelectionProperties.ForegroundColor)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'ForegroundColor',Event.target.value),
          },
          LineHeightInput: {
            min:0, step:1,
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => IntegerFor(Application.StickerSelectionProperties.LineHeight)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'LineHeight',parseInt(Event.target.value,10)),
          },
          BackgroundColorInput: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => ValueFor(Application.StickerSelectionProperties.BackgroundColor)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'BackgroundColor',Event.target.value),
          },
          TextureInput: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => ValueFor(Application.StickerSelectionProperties.BackgroundTexture)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'BackgroundTexture',Event.target.value),
          },
          EnablingCheck: {
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => BooleanFor(Application.StickerSelectionProperties.Enabling)),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'Enabling',Event.target.checked),
          },
          ValueInput: {
            Style:'min-height:100px',
            disabled:updatedFrom(() => Application.selectedStickers.length === 0),
            Value:updatedFrom(() => ValueFor(Application.StickerSelectionProperties.editableValue)),
            Placeholder:updatedFrom(() => '(enter a common value for all currently selected stickers)'),
            onInput:(Event:any) => doConfigureStickers(Application.selectedStickers,'editableValue',Event.target.value),
          },
          ValueEditorButton: {
            onClick:(Event:PointerEvent) => {
              showDialogAround('ValueEditor', Event.clientX,Event.clientY)
              Application.ValueEditorMode = 'Stickers'
            },
          },
        },
        },
      })
//  PUX.packScreen('MainScreen')
    PUX.startWithScreen('MainScreen')
  PUX.renderInto(document.body)

  const BoardViewWidget = PUX.existingWidgetNamed('BoardView').View

//----------------------------------------------------------------------------//
//                          Inspector Pane Handling                           //
//----------------------------------------------------------------------------//

/**** setInspectorPaneGroup ****/

  function setInspectorPaneGroup (PaneGroup:'Project'|'Board'|'Stickers'):void {
    if (
      (PaneGroup === 'Stickers') &&
      (Application.InspectorPaneChoice === 'Browser')
    ) {
      Application.InspectorPaneChoice = 'Configuration'
    }

    Application.InspectorPaneGroup = PaneGroup
    updateInspectorPane()
  }

/**** setInspectorPaneChoice ****/

  function setInspectorPaneChoice (PaneChoice:'Browser'|'Configuration'):void {
    if (
      (Application.InspectorPaneGroup === 'Stickers') &&
      (PaneChoice === 'Browser')
    ) { PaneChoice = 'Configuration'}

    Application.InspectorPaneChoice = PaneChoice
    updateInspectorPane()
  }

/**** updateInspectorPane ****/

  function updateInspectorPane ():void {
    const PaneIndexSet:Indexable = {
      Project: { Browser:0, Configuration:2 },
      Board:   { Browser:1, Configuration:3 },
      Stickers:{ Browser:1, Configuration:4 },
    }

    const PaneGroup  = Application.InspectorPaneGroup
    const PaneChoice = Application.InspectorPaneChoice
    Application.InspectorPaneIndex = PaneIndexSet[PaneGroup][PaneChoice]
  }

/**** showDialogAround ****/

  function showDialogAround (DialogName:string, x:number, y:number):void {
    let Dialog:Indexable = PUX.existingDialogNamed(DialogName)
    if ((Dialog.x === -1) && (Dialog.y === -1)) {
      const { Width,Height } = Dialog

      const MainScreen = PUX.existingScreenNamed('MainScreen')
      const { width:maxX,height:maxY } = MainScreen.View.base.getBoundingClientRect()

      Dialog.x = Math.max(0, Math.min(x, maxX-Width))
      Dialog.y = Math.max(0, Math.min(y, maxY-Height))
    }

    PUX.openDialog(DialogName)
  }

/**** showDialogCentered ****/

  function showDialogCentered (DialogName:string):void {
    let Dialog:Indexable = PUX.existingDialogNamed(DialogName)
    if ((Dialog.x === -1) && (Dialog.y === -1)) {
      const { Width,Height } = Dialog

      const MainScreen = PUX.existingScreenNamed('MainScreen')
      const { width:ScreenWidth,height:ScreenHeight } = MainScreen.View.base.getBoundingClientRect()

      Dialog.x = Math.max(0, Math.round( (ScreenWidth-Width)/2))
      Dialog.y = Math.max(0, Math.round((ScreenHeight-Height)/2))
    }

    PUX.openDialog(DialogName)
  }

//------------------------------------------------------------------------------
//--                              User Commands                               --
//------------------------------------------------------------------------------

/**** doCreateProject ****/

  async function doCreateProject (Name:SNS_Name):Promise<void> {
    switch (true) {
      case (Name == null):      return withWarning('no "Name" given')
      case ! ValueIsName(Name): return withWarning('invalid "Name" given')
//    case ProjectExists(Name)
    }

    if (PersistenceIsPending()) {
      persistProject()
    }

    await createPersistedProject(Name)
    await openPersistedProject(Name)
    PUX.closeDialog('ProjectBrowser')
  }

/**** doOpenProject ****/

  async function doOpenProject (Name:SNS_Name):Promise<void> {
    switch (true) {
      case (Name == null):      return withWarning('no "Name" given')
      case ! ValueIsName(Name): return withWarning('invalid "Name" given')
//    case ! ProjectExists(Name)
    }

    if (PersistenceIsPending()) {
      persistProject()
    }

    await openPersistedProject(Name)
    PUX.closeDialog('ProjectBrowser')
  }

/**** doRenameProject ****/

  function doRenameProject (oldName:SNS_Name, newName:SNS_Name):void {
    switch (true) {
      case (oldName == null):      return withWarning('no "oldName" given')
      case ! ValueIsName(oldName): return withWarning('invalid "oldName" given')
      case (newName == null):      return withWarning('no "newName" given')
      case ! ValueIsName(newName): return withWarning('invalid "newName" given')
      case (oldName === newName):  return withWarning('"oldName" and "newName" are identical')
//    case ! ProjectExists(oldName)
//    case ProjectExists(newName)
    }

    if (OperationWasConfirmed(
      'Do you really want to rename project ' + quoted(oldName) + ' to ' +
      quoted(newName) + '?'
    )) {
      renamePersistedProjectTo(oldName,newName)
    }
  }

/**** doPurgeProject ****/

  function doPurgeProject (Name:SNS_Name):void {
    switch (true) {
      case (Name == null):      return withWarning('no "Name" given')
      case ! ValueIsName(Name): return withWarning('invalid "Name" given')
//    case ! ProjectExists(oldName)
    }

    if (OperationWasConfirmed(
      'Do you really want to delete project ' + quoted(Name) + '?'
    )) {
      purgePersistedProject(Name)
    }
  }

/**** doSwitchMode ****/

  function doSwitchMode ():void {
    const currentMode = Application.Mode
    if (currentMode === 'edit') {
      Application.Mode = 'run'
      Application.selectedStickers = Application.selectedStickers.filter(
        (Sticker:SNS_Sticker) => Sticker.isSelectable
      )
    } else {
      Application.Mode = 'edit'
    }
  }

/**** doConfigureProject ****/

  function doConfigureProject (
    Project:SNS_Project, PropertyName:SNS_Identifier, PropertyValue:any
  ):void {
    switch (true) {
      case (Project == null):                       return withWarning('no "Project" given')
      case ! (PropertyName in SNS_ProjectDefaults): return withWarning('unknown project property ' + quoted(PropertyName))
    }

    doOperation(new SNS_ProjectConfigurationOperation(
      Project, PropertyName, PropertyValue
    ))
  }

/**** doApplyProjectScript ****/

  function doApplyProjectScript (Project:SNS_Project):void {
    switch (true) {
      case (Project == null): return withWarning('no "Project" given')
    }

    applyPendingScriptOfVisual(Project)
  }

/**** doWithdrawProjectScript ****/

  function doWithdrawProjectScript (Project:SNS_Project):void {
    switch (true) {
      case (Project == null): return withWarning('no "Project" given')
    }

    doOperation(new SNS_ProjectConfigurationOperation(
      Project, 'pendingScript', undefined
    ))
    Project.ScriptError = undefined
  }

/**** doCreateNewBoard ****/

  function doCreateNewBoard (BoardList:SNS_Board[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(BoardList,ValueIsBoard):
        return withWarning('the given "BoardList" contains invalid elements',BoardList)
      case BoardList.some((Board:SNS_Board) => ! Board.isAttached):
        return withWarning('some boards in the given "BoardList" are no longer attached',BoardList)
    }

    let Folder:SNS_Folder, Index:number

    if (BoardList.length > 0) {
      Folder = BoardList[0].Folder as SNS_Folder
      Index  = bottommostIndexOfBoards(BoardList)+1
    } else {
      const chosenBoard = Application.chosenBoard
      if (chosenBoard == null) {
        Folder = Application.Project as SNS_Folder
        Index  = 0
      } else {
        Folder = chosenBoard.Folder as SNS_Folder
        Index  = chosenBoard.Index+1
      }
    }

    doOperation(new SNS_BoardDeserializationOperation(
      Folder, [{}], Index
    ))
  }

/**** doDuplicateBoards ****/

  function doDuplicateBoards (BoardList:SNS_Board[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(BoardList,ValueIsBoard):
        return withWarning('the given "BoardList" contains invalid elements',BoardList)
      case BoardList.some((Board:SNS_Board) => ! Board.isAttached):
        return withWarning('some boards in the given "BoardList" are no longer attached',BoardList)
    }

    const sortedBoards:SNS_Board[] = BoardsSortedByIndex(BoardList)

    const Folder:SNS_Folder = commonFolderOfBoards(BoardList)       // may fail!

    const Serializations:Serializable[] = sortedBoards.map(
      (Board:SNS_Board) => Board.Serialization
    )
    const Index = BoardList[BoardList.length-1].Index+1

    doOperation(new SNS_BoardDeserializationOperation(
      Folder, Serializations, Index
    ))
  }

/**** doConfigureBoard ****/

  function doConfigureBoard (
    Board:SNS_Board, PropertyName:SNS_Identifier, PropertyValue:any
  ):void {
    switch (true) {
      case (Board == null):                       return withWarning('no "Board" given')
      case ! Board.isAttached:                    return withWarning('the given "Board" is no longer attached')
      case ! (PropertyName in SNS_BoardDefaults): return withWarning('unknown board property ' + quoted(PropertyName))
    }

    doOperation(new SNS_BoardConfigurationOperation(
      Board, PropertyName, PropertyValue
    ))
  }

/**** doApplyBoardScript ****/

  function doApplyBoardScript (Board:SNS_Board):void {
    switch (true) {
      case (Board == null):    return withWarning('no "Board" given')
      case ! Board.isAttached: return withWarning('the given "Board" is no longer attached')
    }

    applyPendingScriptOfVisual(Board)
  }

/**** doWithdrawBoardScript ****/

  function doWithdrawBoardScript (Board:SNS_Board):void {
    switch (true) {
      case (Board == null):    return withWarning('no "Board" given')
      case ! Board.isAttached: return withWarning('the given "Board" is no longer attached')
    }

    doOperation(new SNS_BoardConfigurationOperation(
      Board, 'pendingScript', undefined
    ))
    Board.ScriptError = undefined
  }

/**** doShiftBoardsIn ****/

  function doShiftBoardsIn (BoardList:SNS_Board[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(BoardList,ValueIsBoard):
        return withWarning('the given "BoardList" contains invalid elements',BoardList)
      case BoardList.some((Board:SNS_Board) => ! Board.isAttached):
        return withWarning('some boards in the given "BoardList" are no longer attached',BoardList)
    }

    const Folder:SNS_Folder                 = commonFolderOfBoards(BoardList) // may fail!
    const sortedBoards:SNS_Board[]          = BoardsSortedByIndex(BoardList)
    const TargetFolder:SNS_Folder|undefined = Folder.Board(bottommostIndexOfBoards(BoardList)+1)
      if (TargetFolder == null) { return withWarning('the given boards can not be shifted in') }

    doOperation(new SNS_BoardMoveOperation(
      Folder,sortedBoards, TargetFolder,0
    ))

    if (Application.expandedBoards.indexOf(TargetFolder as SNS_Board) < 0) {
      Application.expandedBoards = Application.expandedBoards.concat(TargetFolder as SNS_Board)
    }
  }

/**** doShiftBoardsOut ****/

  function doShiftBoardsOut (BoardList:SNS_Board[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(BoardList,ValueIsBoard):
        return withWarning('the given "BoardList" contains invalid elements',BoardList)
      case BoardList.some((Board:SNS_Board) => ! Board.isAttached):
        return withWarning('some boards in the given "BoardList" are no longer attached',BoardList)
    }

    const Folder:SNS_Folder                 = commonFolderOfBoards(BoardList)
    const sortedBoards:SNS_Board[]          = BoardsSortedByIndex(BoardList)
    const TargetFolder:SNS_Folder|undefined = Folder.Folder
      if (TargetFolder == null) { return withWarning('the given boards can not be shifted out') }

    doOperation(new SNS_BoardMoveOperation(
      Folder,sortedBoards, TargetFolder,Folder.Index
    ))
  }

/**** doShiftBoardsUp ****/

  function doShiftBoardsUp (BoardList:SNS_Board[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(BoardList,ValueIsBoard):
        return withWarning('the given "BoardList" contains invalid elements',BoardList)
      case BoardList.some((Board:SNS_Board) => ! Board.isAttached):
        return withWarning('some boards in the given "BoardList" are no longer attached',BoardList)
    }

    const sortedBoards:SNS_Board[] = BoardsSortedByIndex(BoardList)

    const Folder:SNS_Folder  = commonFolderOfBoards(BoardList)
    const newIndex:number    = Math.max(0,topmostIndexOfBoards(BoardList)-1)
    const IndexList:number[] = sortedBoards.map((_:any,i:number) => newIndex+i)

    doOperation(new SNS_BoardShiftOperation(Folder,sortedBoards,IndexList))
  }

/**** doShiftBoardsDown ****/

  function doShiftBoardsDown (BoardList:SNS_Board[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(BoardList,ValueIsBoard):
        return withWarning('the given "BoardList" contains invalid elements',BoardList)
      case BoardList.some((Board:SNS_Board) => ! Board.isAttached):
        return withWarning('some boards in the given "BoardList" are no longer attached',BoardList)
    }

    const sortedBoards:SNS_Board[] = BoardsSortedByIndex(BoardList)

    const Folder:SNS_Folder  = commonFolderOfBoards(BoardList)
    const newIndex:number    = Math.min(bottommostIndexOfBoards(BoardList)+1,Folder.BoardCount-1)+1-BoardList.length
    const IndexList:number[] = sortedBoards.map((_:any,i:number) => newIndex+i)

    doOperation(new SNS_BoardShiftOperation(Folder,sortedBoards,IndexList))
  }

/**** doDeleteBoards ****/

  function doDeleteBoards (BoardList:SNS_Board[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(BoardList,ValueIsBoard):
        return withWarning('the given "BoardList" contains invalid elements',BoardList)
      case BoardList.some((Board:SNS_Board) => ! Board.isAttached):
        return withWarning('some boards in the given "BoardList" are no longer attached',BoardList)
    }

    doOperation(new SNS_BoardDeletionOperation(
      BoardsSortedByIndex(BoardList)
    ))
  }

/**** doCreateNewSticker ****/

  function doCreateNewSticker (BehaviorName:SNS_Identifier):void {
    const Board = Application.chosenBoard

    switch (true) {
      case (BehaviorName == null):            return withWarning('no "BehaviorName" given')
      case ! ValueIsIdentifier(BehaviorName): return withWarning('invalid "BehaviorName" given')
      case (Board == null):                   return withWarning('there is currently no chosen board')
// @ts-ignore TS18048 "Board" is obviously *not* undefined here
      case ! Board.isAttached:                return withWarning('the chosen board is no longer attached')
    }

    Application.Mode = 'edit'

    doOperation(new SNS_StickerDeserializationOperation(
      Board, [TemplateOfBehavior(BehaviorName)], Board.StickerCount
    ))
  }

/**** doDuplicateStickers ****/

  function doDuplicateStickers (StickerList:SNS_Sticker[]):void {
    const Board = Application.chosenBoard

    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
      case (Board == null):    return withWarning('there is currently no chosen board')
// @ts-ignore TS18048 "Board" is obviously *not* undefined here
      case ! Board.isAttached: return withWarning('the chosen board is no longer attached')
    }

    const Serializations:Serializable[] = StickersSortedByIndex(StickerList).map(
      (Sticker:SNS_Sticker) => Sticker.Serialization
    )

    Application.Mode = 'edit'

    doOperation(new SNS_StickerDeserializationOperation(
      Board, Serializations, Board.StickerCount
    ))

  /**** sticker offset is currently a separate operation ****/

    const StickerDuplicates = Application.selectedStickers
    if (StickerDuplicates.length > 0) {
      const DuplicateGeometries = StickerDuplicates.map(
        (Sticker:SNS_Sticker) => {
          const Geometry = Sticker.Geometry
            Geometry.x += 20
            Geometry.y += 20
          return Geometry
        }
      )
      doChangeStickerGeometries(StickerDuplicates,DuplicateGeometries)
    }
  }

/**** doConfigureStickers ****/

  function doConfigureStickers (
    StickerList:SNS_Sticker[], PropertyName:SNS_Identifier, PropertyValue:any
  ):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
      case ! (PropertyName in SNS_StickerDefaults) && (
        (PropertyName !== 'x') && (PropertyName !== 'Width') &&
        (PropertyName !== 'y') && (PropertyName !== 'Height')
      ):
        return withWarning('unknown sticker property ' + quoted(PropertyName))
    }

    doOperation(new SNS_StickerConfigurationOperation(
      StickerList, PropertyName, PropertyValue
    ))
  }

/**** doApplyStickerScript ****/

  function doApplyStickerScript (StickerList:SNS_Sticker[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
    }

    StickerList.forEach(
      (Sticker:SNS_Sticker) => applyPendingScriptOfVisual(Sticker)
    )
  }

/**** doWithdrawStickerScript ****/

  function doWithdrawStickerScript (StickerList:SNS_Sticker[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
    }

    doOperation(new SNS_StickerConfigurationOperation(
      StickerList, 'pendingScript', undefined
    ))

    StickerList.forEach((Sticker:SNS_Sticker) => {
      Sticker.ScriptError = undefined
    })
  }

/**** doChangeStickerGeometries ****/

  function doChangeStickerGeometries (
    StickerList:SNS_Sticker[], GeometryList:SNS_Geometry[]
  ):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
      case ! ValueIsListSatisfying(GeometryList,ValueIsGeometry):
        return withWarning('the given "GeometryList" contains invalid elements',GeometryList)
      case (StickerList.length !== GeometryList.length):
        return withWarning('the given "StickerList" and "GeometryList" do not match',StickerList,GeometryList)
    }

    doOperation(new SNS_StickerShapeOperation(
      StickerList, GeometryList
    ))
  }

/**** doShiftStickersToTop ****/

  function doShiftStickersToTop (StickerList:SNS_Sticker[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
    }

    doOperation(new SNS_StickerShiftOperation(
      StickersSortedByIndex(StickerList),
      StickerList.map((_:any,i:number) => i)
    ))
  }

/**** doShiftStickersUp ****/

  function doShiftStickersUp (StickerList:SNS_Sticker[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
    }

    const sortedStickers:SNS_Sticker[] = StickersSortedByIndex(StickerList)

    const newIndex:number     = Math.max(0,topmostIndexOfStickers(StickerList)-1)
    const IndexList:number[] = sortedStickers.map((_:any,i:number) => newIndex+i)

    doOperation(new SNS_StickerShiftOperation(sortedStickers,IndexList))
  }

/**** doShiftStickersDown ****/

  function doShiftStickersDown (StickerList:SNS_Sticker[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
    }

    const sortedStickers:SNS_Sticker[] = StickersSortedByIndex(StickerList)

    const Board:SNS_Board|undefined = commonBoardOfStickers(StickerList)
    if (Board == null) { return withWarning('the given stickers do not share the same folder') }

    const newIndex:number    = Math.min(bottommostIndexOfStickers(StickerList)+1,Board.StickerCount-1)+1-StickerList.length
    const IndexList:number[] = sortedStickers.map((_:any,i:number) => newIndex+i)

    doOperation(new SNS_StickerShiftOperation(sortedStickers,IndexList))
  }

/**** doShiftStickersToBottom ****/

  function doShiftStickersToBottom (StickerList:SNS_Sticker[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
    }

    const sortedStickers:SNS_Sticker[] = StickersSortedByIndex(StickerList)

    const Board:SNS_Board|undefined = commonBoardOfStickers(StickerList)
    if (Board == null) { return withWarning('the given stickers do not share the same folder') }

    const newIndex:number    = Board.StickerCount-StickerList.length
    const IndexList:number[] = sortedStickers.map((_:any,i:number) => newIndex+i)

    doOperation(new SNS_StickerShiftOperation(sortedStickers,IndexList))
  }

/**** doShiftStickers **** /

  function doShiftStickers (StickerList:SNS_Sticker[], IndexList:number[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
      case ! ValueIsListSatisfying(IndexList,(Value:any) => ValueIsListSatisfying(Value,ValueIsOrdinal)):
        return withWarning('the given "IndexList" contains invalid elements',GeometryList)
      case (StickerList.length !== IndexList.length):
        return withWarning('the given "StickerList" and "IndexList" do not match',StickerList,GeometryList)
    }

    const Auxiliary:Indexable[] = StickerList.map(
      (Sticker:SNS_Sticker, i:number) => ({
        Sticker, oldIndex:Sticker.Index, newIndex:IndexList[i]
      })
    )
      Auxiliary.sort(
        (EntryA:Indexable,EntryB:Indexable) => EntryA.oldIndex-EntryB.oldIndex
      )
    const sortedStickers:SNS_Sticker[] = Auxiliary.map(
      (Entry:Indexable) => Entry.Sticker
    )
    const sortedIndices:number[] = Auxiliary.map(
      (Entry:Indexable) => Entry.newIndex
    )

    doOperation(new SNS_StickerShiftOperation(sortedStickers,sortedIndices))
  }
*/
/**** doDeleteStickers ****/

  function doDeleteStickers (StickerList:SNS_Sticker[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
    }

    doOperation(new SNS_StickerDeletionOperation(
      StickersSortedByIndex(StickerList)
    ))
  }

/**** doCutStickers ****/

  function doCutStickers (StickerList:SNS_Sticker[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
    }

    Shelf.splice(0,Shelf.length)

    StickerList = StickersSortedByIndex(StickerList)

    StickerList.forEach((Sticker:SNS_Sticker) => {
      const Serialization = Sticker.Serialization
      Shelf.push(Serialization)
    })

    doDeleteStickers(StickerList)

    Application.ShelfIsFilled = (Shelf.length > 0)
  }

/**** doCopyStickers ****/

  function doCopyStickers (StickerList:SNS_Sticker[]):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return withWarning('the given "StickerList" is empty')
    }

    Shelf.splice(0,Shelf.length)

    StickerList = StickersSortedByIndex(StickerList)

    StickerList.forEach((Sticker:SNS_Sticker) => {
      const Serialization = Sticker.Serialization
      removeIdsFrom(Serialization)
      Shelf.push(Serialization)
    })

    Application.ShelfIsFilled = (Shelf.length > 0)
  }

/**** doPasteStickers ****/

  function doPasteStickers ():void {
    switch (true) {
      case ! Application.ShelfIsFilled: return withWarning('shelf is empty')
    }

    const Board = Application.chosenBoard
    if (Board == null) { return withWarning('there is curently no chosen board') }

    Application.Mode = 'edit'

    doOperation(new SNS_StickerDeserializationOperation(
      Board, Shelf.slice(), Board.StickerCount
    ))
  }

/**** doPasteStickersAround ****/

  function doPasteStickersAround (x:number, y:number):void {
    switch (true) {
      case ! Application.ShelfIsFilled: return withWarning('shelf is empty')
    }

    const Board = Application.chosenBoard
    if (Board == null) { return withWarning('there is curently no chosen board') }

    Application.Mode = 'edit'

    doOperation(new SNS_StickerDeserializationOperation(
      Board, Shelf.slice(), Board.StickerCount
    ))

  /**** sticker offset is currently a separate operation ****/

    const pastedStickers = Application.selectedStickers
    const { minX,minY }  = topLeftPositionOfStickers(pastedStickers)

    const dX = x-minX
    const dY = y-minY

    const pastedGeometries = pastedStickers.map(
      (Sticker:SNS_Sticker) => {
        const Geometry = Sticker.Geometry
          Geometry.x += dX
          Geometry.y += dY
        return Geometry
      }
    )

    doChangeStickerGeometries(pastedStickers,pastedGeometries)
  }

/**** doUndoOperation ****/

  function doUndoOperation ():void {
    undoOperation()
  }

/**** doRedoOperation ****/

  function doRedoOperation ():void {
    redoOperation()
  }

/**** doVisitPrevBoard ****/

  function doVisitPrevBoard ():void {
    visitPrevBoard()
  }

/**** doVisitNextBoard ****/

  function doVisitNextBoard ():void {
    visitNextBoard()
  }

/**** doVisitBoard ****/

  function doVisitBoard (Board:SNS_Board|undefined):void {
    switch (true) {
      case (Board == null):    break
// @ts-ignore TS18048 "Board" is obviously *not* undefined here
      case ! Board.isAttached: return withWarning('the given "Board" is no longer attached')
    }

    visitBoard(Board)
  }

/**** doImport ****/

  function doImport (File:any):void {
      let Reader = new FileReader()
        Reader.onabort = function LoadAborted () { alert('import was aborted') }
        Reader.onerror = function LoadFailed ()  { alert('import failed') }
        Reader.onload  = function FileLoaded (Event) {
          let FileValue = (new TextDecoder()).decode(Reader.result as ArrayBuffer)

          const chosenProject = Application.Project
          if (chosenProject == null) { return }

          const chosenBoard = Application.chosenBoard
          try {
            let Serialization:Serializable = JSON.parse(FileValue)
            if (ValueIsArray(Serialization)) {
              if (chosenBoard == null) {
                window.alert('please prepare a board to import stickers into')
                return
              }

// @ts-ignore TS2721 "Serialization" is not null
              Serialization.forEach(  // assign new ids to any imported stickers
                (Serialization:Serializable) => removeIdsFrom(Serialization)
              )

// @ts-ignore TS2721 "map" exists
              const importedStickers:SNS_Sticker[] = Serialization.map(
                (Serialization:Serializable) => chosenBoard.StickerDeserializedAt(Serialization)
              )
              importedStickers.forEach(
                (Sticker:SNS_Sticker) => Sticker.activateScript()
              )

              selectStickers(importedStickers)

              return
            }

          /**** if Serialization looks like a board, import that ****/

            if (Serialization.StickerList != null) {
              if (chosenProject == null) {
                window.alert('please prepare a project to import this board into')
                return
              }

              const Folder = (chosenBoard == null ? chosenProject : chosenBoard.Folder)
              const Index  = (chosenBoard == null ? 0 : chosenBoard.Index+1)

              removeIdsFrom(Serialization) // assign new ids to board & stickers

// @ts-ignore TS18048 "Folder" is not null
              const importedBoard = Folder.BoardDeserializedAt(Serialization,Index)
              importedBoard.recursivelyActivateAllScripts()

              visitBoard(importedBoard)

              return
            }

          /**** Serialization looks like a complete project ****/

            if ((chosenBoard == null) || OperationWasConfirmed()) {
              chosenProject.clear()
                Object.keys(SNS_ProjectDefaults).forEach((Property:string) => {
                  if ((Property !== 'Id') && (Property !== 'Name')) {
                    if (Serialization[Property] != null) {
                      (chosenProject as Indexable)[Property] = Serialization[Property]
                    }
                  }
                })
              if (ValueIsArray(Serialization.BoardList)) {
// @ts-ignore TS2721 "Serialization.BoardList" exists
                Serialization.BoardList.forEach(
// @ts-ignore TS2322 (I don't understand the error message)
                  (Serialization:Serializable) => chosenProject.BoardDeserializedAt(Serialization)
                )
              }

              chosenProject.recursivelyActivateAllScripts()

              visitBoard(chosenProject.Board(0))
            }
          } catch (Signal) {
            console.error(Signal)
            alert('import failed')
          }
        }
      Reader.readAsArrayBuffer(File)
  }

/**** doExport ****/

  function doExport (
    Scope:'whole Project'|'active Board'|'selected Stickers'
  ):void {
    let JSONObject:Serializable, FileName:string
      switch (Scope) {
        case 'whole Project':
          const Project = Application.Project
          if (Project == null) { return withWarning('there is currently no active project') }

          FileName   = Project.Name || 'SNS-Project'
          JSONObject = Project.Serialization
          break
        case 'active Board':
          const chosenBoard = Application.chosenBoard
          if (chosenBoard == null) { return withWarning('there is currently no chosen board') }

          FileName   = chosenBoard.Name || 'SNS-Board'
          JSONObject = chosenBoard.Serialization
          break
        case 'selected Stickers': default:
          const selectedStickers = Application.selectedStickers
          if (selectedStickers.length === 0) {
            return withWarning('there are currently no selected stickers')
          }

          FileName   = 'SNS-Stickers'
// @ts-ignore TS2322 (I don't understand the error message)
          JSONObject = selectedStickers.map(
            (Sticker:SNS_Sticker) => Sticker.Serialization
          )
      }
    const serialisedExport = JSON.stringify(JSONObject)

    const encodedExport = (new TextEncoder()).encode(serialisedExport)
    const decodedExport = (new TextDecoder()).decode(encodedExport)
    if (serialisedExport === decodedExport) {
      download(encodedExport, FileName + '.json', 'application/json;charset=utf-8')
    } else {
      window.alert('this export is not safe')
    }
  }

/**** doGenerateImage ****/

  function doGenerateImage (StickerList:SNS_Sticker[]):void {
    if (StickerList.length === 0) {
      return withWarning('there are currently no selected stickers')
    }

    const minX = Math.min(...StickerList.map((Sticker:SNS_Sticker) => Sticker.x))
    const minY = Math.min(...StickerList.map((Sticker:SNS_Sticker) => Sticker.y))
    const maxX = Math.max(...StickerList.map((Sticker:SNS_Sticker) => Sticker.x + Sticker.Width))
    const maxY = Math.max(...StickerList.map((Sticker:SNS_Sticker) => Sticker.y + Sticker.Height))

    const Width  = maxX-minX
    const Height = maxY-minY

    const Canvas  = document.createElement('canvas')
      Canvas.width  = Width
      Canvas.height = Height
    const Context = Canvas.getContext('2d')
    const BoardViewElement = BoardViewWidget.base

    selectStickers([])
    ;(async () => {
      const Stream = await navigator.mediaDevices.getDisplayMedia({
// @ts-ignore TS2353 allow "preferCurrentTab"
        video:true, preferCurrentTab:true
      })
      const Video = document.createElement('video')
        Video.srcObject = Stream
      await Video.play()

// @ts-ignore TS18047 "Context" is not null
      Context.drawImage(Video,
        BoardViewElement.offsetLeft+minX,BoardViewElement.offsetTop+minY, Width,Height,
        0,0, Width,Height
      )

      Stream.getTracks().forEach((Track:any) => Track.stop())
      selectStickers(StickerList)

      const Name = StickerList[0].Name || StickerList[0].Board.Name ||
                   StickerList[0].Project.Name || 'NoteStickers'

      Canvas.toBlob((Blob:any) => {
        download(Blob, Name + '.png', 'image/png')
      }, 'image/png')
    })()
  }

/**** doGenerateAppletFromBoard ****/

  function doGenerateAppletFromBoard (
    Board:SNS_Board, Mode:'standalone'|'embeddable'
  ):void {
    switch (true) {
      case (Board == null):    return withWarning('no "Board" given')
      case ! Board.isAttached: return withWarning('the given "Board" is no longer attached')
    }

    generateAppletFromBoard(Board,Mode)
  }

/**** doGenerateAppletFromBoardAndSuccessors ****/

  function doGenerateAppletFromBoardAndSuccessors (
    Board:SNS_Board, Mode:'standalone'|'embeddable'
  ):void {
    switch (true) {
      case (Board == null):    return withWarning('no "Board" given')
      case ! Board.isAttached: return withWarning('the given "Board" is no longer attached')
    }

    generateAppletFromBoardAndSuccessors(Board,Mode)
  }

/**** doGenerateAppletFromStickers ****/

  function doGenerateAppletFromStickers (
    StickerList:SNS_Sticker[], Mode:'standalone'|'embeddable'
  ):void {
    switch (true) {
      case ! ValueIsListSatisfying(StickerList,ValueIsSticker):
        return withWarning('the given "StickerList" contains invalid elements',StickerList)
      case StickerList.some((Sticker:SNS_Sticker) => ! Sticker.isAttached):
        return withWarning('some stickers in the given "StickerList" are no longer attached',StickerList)
      case (StickerList.length === 0):
        return // no warning as there is no disabling of this command entry yet
//      return withWarning('the given "StickerList" is empty')
    }

    generateAppletFromStickers(StickerList,Mode)
  }

/**** doPrintBoard ****/

  function doPrintBoard ():void {
    switch (true) {
      case (Application.chosenBoard == null): return withWarning('there is currently no chosen board')
    }

    window.print()
  }

//----------------------------------------------------------------------------//
//                           Confirmation Handling                            //
//----------------------------------------------------------------------------//

  function OperationWasConfirmed (Message?:string):boolean {
    let ConformationCode = Math.round(Math.random()*10000).toString()
      ConformationCode += '0000'.slice(ConformationCode.length)

    Message = (Message || 'This operation can not be undone.') + '\n\n' +
      'Please, enter the following number if you want to proceed:\n\n' +
      '   ' + ConformationCode + '\n\n' +
      'Otherwise, the operation will be cancelled'

    let UserInput = window.prompt(Message,'')
    if (UserInput === ConformationCode) {
      return true
    } else {
      window.alert('Operation will be cancelled')
      return false
    }
  }

//----------------------------------------------------------------------------//
//                            Persistence Handling                            //
//----------------------------------------------------------------------------//

  let ProjectStore:any

/**** SerializationOfEmptyProject ****/

  function SerializationOfEmptyProject (Name:SNS_Name):Serializable {
    return {
      Id:newId(), Name:Name,
      SnapToGrid:false, GridWidth:10, GridHeight:10,
      BoardList:[{
        Id:newId()
      }]
    }
  }

/**** fetchPersistedProjectList - alphabetically sorted ****/

  async function fetchPersistedProjectList ():Promise<void> {
    let persistedProjectList:SNS_Name[]
      try {
        persistedProjectList = (await ProjectStore.keys()).sort() as SNS_Name[]
      } catch (Signal:any) {
        persistedProjectList = []
        console.warn('could not fetch names of persisted projects',Signal)
      }
    Application.persistedProjectList = persistedProjectList

    let normalizedProjectList = Application.persistedProjectList.map(
      (Name:SNS_Name) => Name.toLowerCase()
    )
    Application.normalizedProjectList = normalizedProjectList

    if (Application.selectedProjectName != null) {
      let selectedProjectIndex = normalizedProjectList.indexOf(
        Application.selectedProjectName.toLowerCase()
      )

      if (selectedProjectIndex < 0) {
        Application.selectedProjectName  = undefined
        Application.selectedProjectIndex = undefined
      } else {
        Application.selectedProjectName  = persistedProjectList[selectedProjectIndex]
        Application.selectedProjectIndex = selectedProjectIndex
      }
    }
  }

/**** createPersistedProject ****/

  async function createPersistedProject (Name:SNS_Name):Promise<void> {
    let normalizedName = Name.toLowerCase()

    if (Application.normalizedProjectList.indexOf(normalizedName) >= 0) throwError(
      'ProjectExists: a project named ' + quoted(Name) + ' exists already'
    )

    const Serialization = SerializationOfEmptyProject(Name)
    try {
      await ProjectStore.setItem(
        Name,JSON.stringify(Serialization)
      )
    } catch (Signal:any) {
      throwError(
        'PersistenceWriteError: could not write project ' + quoted(Name) + ', ' +
        'reason: ' + Signal
      )
    }

    await fetchPersistedProjectList()

    Application.selectedProjectName  = Name
    Application.selectedProjectIndex = Application.normalizedProjectList.indexOf(normalizedName)
  }

/**** renamePersistedProjectTo ****/

  async function renamePersistedProjectTo (
    oldName:SNS_Name, newName:SNS_Name
  ):Promise<void> {
    await fetchPersistedProjectList()

    let normalizedProjectList = Application.normalizedProjectList
    if (normalizedProjectList.indexOf(oldName.toLowerCase()) < 0) throwError(
      'NoSuchProject: a project named ' + quoted(oldName) + ' does not exist'
    )

    if (normalizedProjectList.indexOf(newName.toLowerCase()) >= 0) throwError(
      'ProjectExists: a project named ' + quoted(newName) + ' exists already'
    )

    let Serialization:Serializable = {}
    try {
      Serialization = JSON.parse(await ProjectStore.getItem(oldName))
    } catch (Signal:any) {
      throwError(
        'PersistenceReadError: could not read project ' + quoted(oldName) + ', ' +
        'reason: ' + Signal
      )
    }

    Serialization.Name = newName

    try {
      await ProjectStore.setItem(newName,JSON.stringify(Serialization))
    } catch (Signal:any) {
      throwError(
        'PersistenceWriteError: could not write project ' + quoted(newName) + ', ' +
        'reason: ' + Signal
      )
    }

    try {
      await ProjectStore.removeItem(oldName)
    } catch (Signal:any) {
      throwError(
        'PersistenceWriteError: could not delete project ' + quoted(oldName) + ', ' +
        'reason: ' + Signal
      )
    }

    if (Application.selectedProjectName != null) {
      if (Application.selectedProjectName.toLowerCase() === oldName.toLowerCase()) {
        Application.selectedProjectName = newName
      }
    }
    await fetchPersistedProjectList()              // also updates any selection
  }

/**** openPersistedProject ****/

  async function openPersistedProject (Name:SNS_Name):Promise<void> {
    await fetchPersistedProjectList()

    let normalizedProjectList = Application.normalizedProjectList
    if (normalizedProjectList.indexOf(Name.toLowerCase()) < 0) throwError(
      'NoSuchProject: a project named ' + quoted(Name) + ' does not exist'
    )

    let Serialization:Serializable = {}
    try {
      Serialization = JSON.parse(await ProjectStore.getItem(Name))
    } catch (Signal:any) {
      throwError(
        'PersistenceReadError: could not read project ' + quoted(Name) + ', ' +
        'reason: ' + Signal
      )
    }

    try {
      Application.Project = SNS_Project.deserializedFrom(Name,Serialization)

      Application.Project.Application = {
        visitFirstBoard:() => visitBoard(Application.Project.Board(0)),
        mayVisitPrevBoard:() => Application.mayVisitPrevBoard,
        mayVisitNextBoard:() => Application.mayVisitNextBoard,
        visitPrevBoard, visitNextBoard, visitBoard,
        showConsole, hideConsole, clearConsole, print, println,
      }

      Application.Project.onChange(ProjectChangeCallback)
      Application.Project.onRendering(ProjectRenderingCallback)

      Application.Project.onError(ProjectErrorCallback)

      Application.Project.recursivelyActivateAllScripts()
;(window as Indexable)['Project'] = Application.Project // just for testing

      hideDesignerTools()
    } catch (Signal:any) {
      throwError(
        'DeserializationError: could not deserialize project ' + quoted(Name) + ', ' +
        'reason: ' + Signal
      )
    }
  }

/**** purgePersistedProject ****/

  async function purgePersistedProject (Name:SNS_Name):Promise<void> {
    try {
      await ProjectStore.removeItem(Name)
    } catch (Signal:any) {
      throwError(
        'PersistenceWriteError: could not delete project ' + quoted(Name) + ', ' +
        'reason: ' + Signal
      )
    }

    if (Application.selectedProjectName != null) {
      if (Application.selectedProjectName.toLowerCase() === Name.toLowerCase()) {
        Application.selectedProjectName = Name
      }
    }
    await fetchPersistedProjectList()              // also updates any selection
  }

/**** triggerPersistenceFor ****/

  function triggerPersistenceFor (Project:SNS_Project):void {
    Application.ProjectToPersist = Project               // the actual "trigger"

    if (Application.DelayTimer == null) {
      Application.DelayTimer      = setTimeout(persistProject,1*1000)
      Application.DelayLimitTimer = setTimeout(persistProject,60*1000)
    } else {
      clearTimeout(Application.DelayTimer)
      Application.DelayTimer = setTimeout(persistProject,1*1000)
    }
  }

/**** untriggerPersistence ****/

  function untriggerPersistence ():void {
    Application.ProjectToPersist = undefined

    if (Application.DelayTimer != null) {
      clearTimeout(Application.DelayTimer)
      Application.DelayTimer = undefined
    }

    if (Application.DelayLimitTimer != null) {
      clearTimeout(Application.DelayLimitTimer)
      Application.DelayLimitTimer = undefined
    }
  }

/**** PersistenceIsPending ****/

  function PersistenceIsPending ():boolean {
    return (Application.ProjectToPersist != null)
  }

/**** persistProject ****/

  async function persistProject ():Promise<void> {
    const Project = Application.ProjectToPersist as SNS_Project
    untriggerPersistence()

    if (Application.PersistenceState === 'running') {
      Application.PersistenceRequested = true
    }
    Application.PersistenceRequested = false

    Application.PersistenceState = 'running'
      try {
        await ProjectStore.setItem(
          Project.Name, JSON.stringify(Project.Serialization)
        )
        Application.PersistenceState = 'idle'
      } catch (Signal:any) {
        throwError(
          'PersistenceFailure: could not persist project ' +
          quoted(Project.Name as string)
        )
        Application.PersistenceState = 'failed'
      }
//  Application.PersistenceState = 'idle'

    if (Application.PersistenceRequested) {
      persistProject()
    }
  }

/**** ProjectNameIsAvailable ****/

  function ProjectNameIsAvailable (Name:string):boolean {
    return (
      ValueIsName(Application.ProjectName) &&
      (Application.normalizedProjectList.indexOf(Name.toLowerCase()) < 0)
    )
  }

/**** ProjectIsOpen ****/

  function ProjectIsOpen (Name:string):boolean {
    return (
      (Application.Project != null) &&
      ((Application.Project.Name as string).toLowerCase() !== Name.toLowerCase())
    )
  }

/**** ProjectChangeCallback ****/

  function ProjectChangeCallback (
    Project:SNS_Project, Change:SNS_Change, ...ArgList:any[]
  ):void {
    triggerPersistenceFor(Project)

    switch (Change) {
//    case 'createBoard':    // Board
      case 'attachBoard':    // Board, Folder, Index
      case 'detachBoard':    // Board, Folder, Index
        Application.BoardTree = Project.BoardList
        Application.BoardTreeState++
        return
      case 'configureFolder': // Board, Property, Value
        if (ArgList[1] === 'Name') { Application.BoardTreeState++ }
        switch (ArgList[0]) {
          case Application.Project:
            Application.ProjectProperties = PropertiesOfProject(Project)
            Application.BoardProperties   = PropertiesOfBoard(Application.chosenBoard)
            Application.StickerSelectionProperties = PropertiesOfStickers(Application.selectedStickers)
            Application.ViewState++
            return
          case Application.chosenBoard:
            Application.BoardProperties = PropertiesOfBoard(Application.chosenBoard)
            Application.StickerSelectionProperties = PropertiesOfStickers(Application.selectedStickers)
            Application.ViewState++
            return
          default:
            if (ArgList[0].containsFolder(Application.chosenBoard)) {
              Application.BoardProperties = PropertiesOfBoard(Application.chosenBoard)
              Application.StickerSelectionProperties = PropertiesOfStickers(Application.selectedStickers)
              Application.ViewState++
            }
        }
        return
//    case 'destroyBoard': // Board

//    case 'createSticker': // Sticker
      case 'attachSticker': // Sticker, Board, Index
      case 'detachSticker': // Sticker, Board, Index
        if (ArgList[1] === Application.chosenBoard) {
          Application.StickerList = (Application.chosenBoard as SNS_Board).StickerList
          Application.ViewState++
        }
        return
      case 'configureSticker': // Sticker, Property, Value
        if (ArgList[0].Board === Application.chosenBoard) {
          const selectedStickers = Application.selectedStickers

          if (ArgList[1] === 'Geometry') {
            Application.StickerSelectionGeometries = selectedStickers.map(
              (Sticker:SNS_Sticker) => Sticker.Geometry
            )
          }
          Application.StickerSelectionProperties = PropertiesOfStickers(selectedStickers)
          Application.ViewState++
        }
        return
//    case 'destroySticker':   // Sticker
    }
  }

/**** ProjectRenderingCallback ****/

  function ProjectRenderingCallback (
    Project:SNS_Project, Board:SNS_Board|undefined, Sticker:SNS_Sticker|undefined
  ):void {
    if ((Board === Application.chosenBoard) || (Application.chosenBoard == null)) {
      BoardViewWidget.rerender(Sticker)
    }
  }

/**** ProjectErrorCallback ****/

  function ProjectErrorCallback (
    Project:SNS_Project, Visual:SNS_Visual, Error:SNS_Error
  ):void {
    window.alert(
      Error.Type + '\n' + Error.Message + '\n' + Error.Cause
    )
  }

//------------------------------------------------------------------------------
//--                          Choices and Selections                          --
//------------------------------------------------------------------------------

/**** selectBoards ****/

  function selectBoards (BoardList:SNS_Board[]):void {
    expectListSatisfying('list of boards to be selected',BoardList, ValueIsBoard)
    if (BoardList.length === 0) {
      Application.selectedBoards = []
      return
    }

    try {
// @ts-ignore TS6133 "commonFolderOfBoards" checks common folder
      const Folder:SNS_Folder = commonFolderOfBoards(BoardList)     // may fail!

      const BoardSet:Set<SNS_Board> = new Set()
        BoardList.forEach((Board:SNS_Board) => BoardSet.add(Board))
      Application.selectedBoards = BoardsSortedByIndex(
        Array.from(BoardSet.values())
      )
    } catch (Signal:any) {
      Application.selectedBoards = []
      console.error('InternalError:selected boards do not share the same folder')
    }
  }

/**** _chooseBoard - never call directly, use "visitBoard" instead ****/

  function _chooseBoard (Board:SNS_Board|undefined):void {
    Application.chosenBoard = (
      (Board != null) && Board.isAttached
      ? Board
      : undefined
    )
  }

/**** selectStickers ****/

  function selectStickers (StickerList:SNS_Sticker[]):void {
    if (StickerList.length === 0) {
      Application.selectedStickers = []
      return
    }

    const StickerSet:Set<SNS_Sticker> = new Set()
      const chosenBoard = Application.chosenBoard

      StickerList.forEach((Sticker:SNS_Sticker) => {
        if (Sticker.isAttached && (Sticker.Board === chosenBoard)) {
          StickerSet.add(Sticker)
        }
      })
    Application.selectedStickers = StickersSortedByIndex(
      Array.from(StickerSet.values())
    )
  }

/**** deselectStickers ****/

  function deselectStickers (StickerList:SNS_Sticker[]):void {
    Application.selectedStickers = Application.selectedStickers.filter(
      (Sticker:SNS_Sticker) => StickerList.indexOf(Sticker) < 0
    )
  }

//------------------------------------------------------------------------------
//--                            Operation History                             --
//------------------------------------------------------------------------------

  const OperationHistory:SNS_Operation[] = []
  let   OperationIndex:number            = 0  // points to next doable operation

/**** doOperation ****/

  function doOperation (Operation:SNS_Operation):any {
    clearInspectorMessage()

    if (OperationIndex < OperationHistory.length) {
      OperationHistory.length = OperationIndex
    }

    let Result:any
      const prevOperation = OperationHistory[OperationIndex-1]
      if ((prevOperation != null) && Operation.canExtend(prevOperation)) {
        Result = Operation.extend(prevOperation)                     // may fail

        if (prevOperation.isIrrelevant) {
          OperationIndex -= 1                               // only upon success
        }
      } else {
        Result = Operation.doNow()                                   // may fail
        OperationHistory.push(Operation)                    // only upon success
        OperationIndex += 1
      }

      Application.OperationHistoryState++
    return Result
  }

/**** undoOperation ****/

  function undoOperation ():any {
    clearInspectorMessage()

    let prevOperation = OperationHistory[OperationIndex-1]
    if (prevOperation != null) {
      const Result:any = prevOperation.undo()
      OperationIndex -= 1                                   // only upon success

      Application.OperationHistoryState++
      return Result
    }
  }

/**** redoOperation ****/

  function redoOperation ():any {
    clearInspectorMessage()

    let nextOperation = OperationHistory[OperationIndex]
    if (nextOperation != null) {
      const Result:any = nextOperation.redo()
      OperationIndex += 1                                   // only upon success

      Application.OperationHistoryState++
      return Result
    }
  }

//------------------------------------------------------------------------------
//--                                  Shelf                                   --
//------------------------------------------------------------------------------

  const Shelf:Serializable[] = []

//------------------------------------------------------------------------------
//--                              Visit History                               --
//------------------------------------------------------------------------------

  let VisitHistory:SNS_Board[] = []
  let VisitIndex:number        = -1         // points to currently visited board

/**** visitPrev/NextBoard ****/

  function visitPrevBoard ():void {
    if (Application.mayVisitPrevBoard) {
      VisitIndex -= 1
      _chooseBoard(VisitHistory[VisitIndex])

      Application.VisitHistoryState++
    }
  }

  function visitNextBoard ():void {
    if (Application.mayVisitNextBoard) {
      VisitIndex += 1
      _chooseBoard(VisitHistory[VisitIndex])

      Application.VisitHistoryState++
    }
  }

/**** visitBoard ****/

  function visitBoard (Board:SNS_Board|undefined):void {
    allowBoard('board to visit',Board)

    if (Board == null) {
      _chooseBoard(undefined)

      VisitHistory.length = 0
      VisitIndex          = -1
    } else {
      const visitedBoard = VisitHistory[VisitIndex]
      if (visitedBoard === Board) { return }

      if (Application.mayVisitNextBoard) {
        VisitIndex += 1
        if (VisitHistory[VisitIndex] !== Board) {
          VisitHistory[VisitIndex] = Board
          VisitHistory.length = VisitIndex+1
        }
      } else {
        VisitHistory.push(Board)
        VisitIndex += 1
      }
      _chooseBoard(Board)
    }

    Application.VisitHistoryState++
  }

/**** validateVisitHistory ****/

  function validateVisitHistory ():void {
    for (let i = VisitHistory.length-1; i >= 0; i--) {
      if ((VisitHistory[i] == null) || ! VisitHistory[i].isAttached) {
        if (VisitIndex >= i) { VisitIndex -= 1 }
      }
    }
    if ((VisitIndex < 0) && (VisitHistory.length > 0)) {
      VisitIndex = 0
    }

    visitBoard(VisitHistory[VisitIndex] || Application.Project?.BoardList[0])
  }

//------------------------------------------------------------------------------
//--                                 Console                                  --
//------------------------------------------------------------------------------

  const ConsoleCharLimit = 1050000            // a bit more than 2^20 characters
  const ConsoleLineLimit = 20000

  let ConsoleLineCount:number = 0
  let ConsoleCharCount:number = 0

/**** showConsole ****/

  function showConsole ():void {
    PUX.openDialog('Console')
  }

/**** hideConsole ****/

  function hideConsole ():void {
    PUX.closeDialog('Console')
  }

/**** clearConsole ****/

  function clearConsole ():void {
    Application.ConsoleValue = ''

    ConsoleLineCount = 0
    ConsoleCharCount = 0
  }

/**** print ****/

  function print (...ArgList:any[]):void {
    appendToConsole(StringFromArguments(ArgList))
  }

/**** println ****/

  function println (...ArgList:any[]):void {
    appendToConsole(StringFromArguments(ArgList.concat('\n')))
  }

/**** appendToConsole ****/

  function appendToConsole (fullText:string):void {
    if (fullText === '') { return }                      // nothing to be output

    let LineCount:number = EOLCount(fullText)
    let CharCount:number = fullText.length

    if ((LineCount > ConsoleLineLimit) || (CharCount > ConsoleCharLimit)) {
      clearConsole()

      fullText = compacted(fullText, LineCount, CharCount)
        ConsoleLineCount = EOLCount(fullText)+1      // count first line as well
        ConsoleCharCount = fullText.length
      Application.ConsoleValue = fullText
    } else {
      compactFor(LineCount, CharCount)

      ConsoleLineCount += LineCount
      ConsoleCharCount += CharCount

      Application.ConsoleValue += fullText
    }
  }

/**** compacted ****/

  function compacted (Candidate:string, LineCount:number, CharCount:number):string {
    let LinesToSkip:number = LineCount-ConsoleLineLimit
    let CharsToSkip:number = CharCount-ConsoleCharLimit

    for (let EOLCount = 0, curIndex = -1;;) {
      curIndex = Candidate.indexOf('\n',curIndex+1)            // must be <> -1!
      EOLCount += 1

      if ((EOLCount >= LinesToSkip) && (curIndex >= CharsToSkip)) {
        return Candidate.slice(curIndex+1)
      }
    }
  }

/**** compactFor ****/

  function compactFor (LineCount:number, CharCount:number):void {
    let LinesToSkip:number = ConsoleLineCount+LineCount - ConsoleLineLimit
    let CharsToSkip:number = ConsoleCharCount+CharCount - ConsoleCharLimit

    if ((LinesToSkip <= 0) && (CharsToSkip <= 0)) { return }

    let Content:string = Application.Console.Value
    for (let EOLCount = 0, curIndex = -1;;) {
      curIndex = Content.indexOf('\n',curIndex+1)                // might be -1!
      if (curIndex < 0) {                   // no more EOLs, just a loooong line
        clearConsole()
        return
      }

      EOLCount += 1

      if ((EOLCount >= LinesToSkip) && (curIndex-EOLCount*28 >= CharsToSkip)) {
        Application.Console.Value = Content.slice(curIndex+1)
        return
      }
    }
  }

/**** EOLCount ****/

  function EOLCount (Candidate:string):number {
    let MatchList:any[]|null = Candidate.match(/\n/g)
    return (MatchList === null ? 0 : MatchList.length)
  }

/**** StringFromArguments ****/

  function StringFromArguments (ArgList:any[]):string {
    let Result:string = ''
      for (let i = 0; i < ArgList.length; i++) {
        let Argument:any = ArgList[i]
        switch (typeof(Argument)) {
          case 'undefined': Result += '(undefined)';       break
          case 'boolean':   Result += Argument.toString(); break
          case 'number':    Result += Argument.toString(); break
          case 'string':    Result += Argument;            break
          case 'function':  Result += '(function)';        break
          case 'object':    Result += (
                              Argument === null ? '(null)' : Argument.toString()
                            );                             break
          default:          Result += '(unknown)';         break
        }
      }
    return Result
  }

  Object.assign(window,{ Console:{
    show:showConsole, hide:hideConsole,
    clear:clearConsole, print:print, println:println
  } })

//------------------------------------------------------------------------------
//--                            Applet Generation                             --
//------------------------------------------------------------------------------

/**** generateAppletFromBoard ****/

  function generateAppletFromBoard (
    Board:SNS_Board, Mode:'standalone'|'embeddable'
  ):void {
    const AppletName = (
      Board.Name || Board.Project.Name ||
      'Note-Stickers Applet'
    )

    let minWidth:number = 0, minHeight:number = 0
      Board.StickerList.forEach((Sticker:SNS_Sticker) => {
        const { Width,Height } = Sticker
        if (minWidth  < Width)   { minWidth = Width }
        if (minHeight < Height) { minHeight = Height }
      })
    const AppletSerialization = {
      x:0, y:0, Width:minWidth, Height:minHeight,
      BoardList: [Board.Serialization]
    }

    if (Mode === 'standalone') {
      downloadStandaloneApplet(AppletName, AppletSerialization)
    } else {
      downloadEmbeddableApplet(AppletName, AppletSerialization)
    }
  }

/**** generateAppletFromBoardAndSuccessors ****/

  function generateAppletFromBoardAndSuccessors (
    Board:SNS_Board, Mode:'standalone'|'embeddable'
  ):void {
    const AppletName = (
      Board.Name || Board.Project.Name ||
      'Note-Stickers Applet'
    )

    const BoardList = (Board.Folder as SNS_Folder).BoardList.slice(Board.Index)

    let minWidth:number = 0, minHeight:number = 0
      BoardList.forEach((Board:SNS_Board) => {
        Board.StickerList.forEach((Sticker:SNS_Sticker) => {
          const { Width,Height } = Sticker
          if (minWidth  < Width)   { minWidth = Width }
          if (minHeight < Height) { minHeight = Height }
        })
      })
    const AppletSerialization = {
      x:0, y:0, Width:minWidth, Height:minHeight,
      BoardList:BoardList.map((Board:SNS_Board) => Board.Serialization)
    }

    if (Mode === 'standalone') {
      downloadStandaloneApplet(AppletName, AppletSerialization)
    } else {
      downloadEmbeddableApplet(AppletName, AppletSerialization)
    }
  }

/**** generateAppletFromStickers ****/

  function generateAppletFromStickers (
    Stickers:SNS_Sticker[], Mode:'standalone'|'embeddable'
  ):void {
    const Board:SNS_Board|undefined = commonBoardOfStickers(Stickers)
    if (Board == null) { return }

    const sortedStickers = StickersSortedByIndex(Stickers)
    const AppletName = (
      sortedStickers[0].Name || Board.Name || Board.Project.Name ||
      'Note-Stickers Applet'
    )

    const serializedStickers = sortedStickers.map((Sticker:SNS_Sticker) => Sticker.Serialization)
      let [ minX,minY, maxX,maxY ] = [ Infinity,Infinity, 0,0 ]
        serializedStickers.forEach((Serialization:Serializable) => {
          const { x,y, Width,Height } = Serialization.Geometry as SNS_Geometry
          minX = Math.min(minX,x);  maxX = Math.max(maxX,x+Width)
          minY = Math.min(minY,y);  maxY = Math.max(maxY,y+Height)
        })
      serializedStickers.forEach((Serialization:Serializable) => {
        ;(Serialization.Geometry as SNS_Geometry).x -= minX
        ;(Serialization.Geometry as SNS_Geometry).y -= minY
      })
      const Width  = maxX-minX
      const Height = maxY-minY
    const AppletSerialization = {
      x:0, y:0, Width, Height,
      BoardList: [{
        StickerList:serializedStickers,
        activeScript:Board.activeScript,
      }]
    }

    if (Mode === 'standalone') {
// @ts-ignore TS2345 allow simplified serialization
      downloadStandaloneApplet(AppletName, AppletSerialization)
    } else {
// @ts-ignore TS2345 allow simplified serialization
      downloadEmbeddableApplet(AppletName, AppletSerialization)
    }
  }

/**** downloadStandaloneApplet ****/

  function downloadStandaloneApplet (
    AppletName:SNS_Textline, AppletSerialization:Serializable
  ):void {
    const AppletSource:string = `
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
  ${'<'}script src="https://rozek.github.io/note-stickers-runtime/dist/note-stickers-runtime.js">${'<'}/script>
  ${'<'}script type="Note-Stickers" name="${AppletName}">
${JSON.stringify(AppletSerialization)}
  ${'<'}/script>
 </head>
 <body type="Note-Stickers" name="${AppletName}">
 </body>
</html>
    `.trim()

    const encodedSource = (new TextEncoder()).encode(AppletSource)
    const decodedSource = (new TextDecoder()).decode(encodedSource)
    if (AppletSource === decodedSource) {
      download(encodedSource, AppletName + '.html', 'text/html;charset=utf-8')
    } else {
      window.alert('this applet generation is not stable')
    }
  }

/**** downloadEmbeddableApplet ****/

  function downloadEmbeddableApplet (
    AppletName:SNS_Textline, AppletSerialization:Serializable
  ):void {
    const AppletSource:string = `
  ${'<'}script type="Note-Stickers" name="${AppletName}">
${JSON.stringify(AppletSerialization)}
  ${'<'}/script>
  <div type="Note-Stickers" name="${AppletName}">
  </div>
    `.trim()

    const encodedSource = (new TextEncoder()).encode(AppletSource)
    const decodedSource = (new TextDecoder()).decode(encodedSource)
    if (AppletSource === decodedSource) {
      download(encodedSource, AppletName + '.html', 'text/html;charset=utf-8')
    } else {
      window.alert('this applet generation is not stable')
    }
  }

//------------------------------------------------------------------------------
//--                             Message Handling                             --
//------------------------------------------------------------------------------

/**** clearInspectorMessage ****/

  function clearInspectorMessage ():void {
    Application.InspectorMessage = ''
  }

/**** setInspectorMessage ****/

  function setInspectorMessage (newMessage:string):void {
    Application.InspectorMessage = newMessage.trim()
  }

/**** clearScriptEditorMessage **** /

  function clearScriptEditorMessage ():void {
    Application.ScriptEditorMessage = ''
  }
*/
/**** setScriptEditorMessage **** /

  function setScriptEditorMessage (newMessage:string):void {
    Application.ScriptEditorMessage = newMessage.trim()
  }
*/
//------------------------------------------------------------------------------
//--                                Reactivity                                --
//------------------------------------------------------------------------------

/**** observe "chosenProject" ****/

  computed(() => {                                 // chosenProject -> BoardTree
    const chosenProject = Application.Project
    if (chosenProject == null) {
      Application.BoardTree         = []
      Application.BoardTreeState    = 0
      Application.ProjectProperties = SNS_ProjectDefaults
    } else {
      Application.BoardTree         = chosenProject.BoardList
      Application.BoardTreeState++
      Application.ProjectProperties = PropertiesOfProject(chosenProject)
    }
  })

/**** observe "BoardTree" ****/

  computed(() => {                  // chosenProject -> BoardTree -> chosenBoard
// @ts-ignore TS6133 "BoardTreeState" is used for triggering
    const BoardTreeState = Application.BoardTreeState     // just for triggering
    validateVisitHistory()        // may change "VisitHistory" and "chosenBoard"
  })

/**** observe "selectedBoards" ****/

  computed(() => { // selectedBoards -> BoardSelectionMayBeShiftedUp/Down/In/Out
// @ts-ignore TS6133 "BoardTreeState" is used for triggering
    const BoardTreeState = Application.BoardTreeState     // just for triggering

  /**** sanitize selection ****/

    Application.selectedBoards = (
      Application.BoardTree.length === 0
      ? []
      : Application.selectedBoards.filter(
          (Board:SNS_Board) => (Board != null) && Board.isAttached
        )
    )

  /**** sanitize expansions ****/

    Application.expandedBoards = (
      Application.BoardTree.length === 0
      ? []
      : Application.expandedBoards.filter(
          (Board:SNS_Board) => (Board != null) && Board.isAttached
        )
    )

  /**** calculate dependencies ****/

    const selectedBoards = Application.selectedBoards

    Application.BoardSelectionMayBeShiftedUp   = BoardsMayBeShiftedUp(selectedBoards)
    Application.BoardSelectionMayBeShiftedDown = BoardsMayBeShiftedDown(selectedBoards)

    Application.BoardSelectionMayBeShiftedIn  = BoardsMayBeShiftedIn(selectedBoards)
    Application.BoardSelectionMayBeShiftedOut = BoardsMayBeShiftedOut(selectedBoards)
  })

/**** observe "chosenBoard" ****/

  computed(() => {                                 // chosenBoard -> StickerList
    const chosenBoard = Application.chosenBoard

    Application.BoardProperties = PropertiesOfBoard(chosenBoard)

    Application.StickerList = (
      chosenBoard == null ? [] : chosenBoard.StickerList
    )
  })

/**** observe "StickerList" ****/

  computed(() => {             // chosenBoard -> StickerList -> selectedStickers
    Application.StickerGeometries = Application.StickerList.map(
      (Sticker:SNS_Sticker) => Sticker.Geometry
    )
  })

/**** observe "selectedStickers" ****/

  computed(() => {  // sel.Stickers -> StickerSel.Properties/MayBeShiftedUp/Down
    const chosenBoard = Application.chosenBoard
// @ts-ignore TS6133 "StickerList" is used for triggering
    const StickerList = Application.StickerList                 // a small trick
    const Mode        = Application.Mode // dto., updates view after mode switch

  /**** sanitize selection ****/

    Application.selectedStickers = Application.selectedStickers.filter(
      (Sticker:SNS_Sticker) => (
        Sticker.isAttached && (Sticker.Board === chosenBoard) &&
        ((Mode === 'edit') || Sticker.isSelectable)
      )
    )

  /**** calculate dependencies ****/

    const selectedStickers = Application.selectedStickers

    Application.StickerSelectionGeometries = selectedStickers.map(
      (Sticker:SNS_Sticker) => Sticker.Geometry
    )

    Application.StickerSelectionProperties = PropertiesOfStickers(selectedStickers)

    Application.StickerSelectionMayBeShiftedUp   = StickersMayBeShiftedUp(selectedStickers)
    Application.StickerSelectionMayBeShiftedDown = StickersMayBeShiftedDown(selectedStickers)

    Application.ViewState++
  })

/**** update "ScriptEditorValue" ****/

  computed(() => {
    switch (Application.ScriptEditorMode) {
      case 'Project':
        Application.ScriptEditorValue = (
          Application.Project == null
          ? noSelection
          : Application.ProjectProperties.Script || ''
        )
        break
      case 'Board':
        Application.ScriptEditorValue = (
          Application.chosenBoard == null
          ? noSelection
          : Application.BoardProperties.Script || ''
        )
        break
      case 'Stickers':
        Application.ScriptEditorValue = (
          Application.selectedStickers.length === 0
          ? noSelection
          : Application.StickerSelectionProperties.Script || ''
        )
        break
    }
  })

/**** update "ValueEditorValue" ****/

  computed(() => {
    switch (Application.ValueEditorMode) {
      case 'Project':
        Application.ScriptEditorValue = (
          Application.Project == null
          ? noSelection
          : Application.ProjectProperties.editableValue || ''
        )
        break
      case 'Board':
        Application.ScriptEditorValue = (
          Application.chosenBoard == null
          ? noSelection
          : Application.BoardProperties.editableValue || ''
        )
        break
      case 'Stickers':
        Application.ScriptEditorValue = (
          Application.selectedStickers.length === 0
          ? noSelection
          : Application.StickerSelectionProperties.editableValue || ''
        )
        break
    }
  })

/**** update "OperationHistory" ****/

  computed(() => {
    Application.OperationHistoryState                     // just for triggering

    Application.mayUndoOperation = (OperationIndex > 0)
    Application.mayRedoOperation = (OperationIndex < OperationHistory.length)
  })

/**** update "VisitHistory" ****/

  computed(() => {
    Application.VisitHistoryState                         // just for triggering

    Application.mayVisitPrevBoard = (VisitIndex > 0)
    Application.mayVisitNextBoard = (VisitIndex < VisitHistory.length-1)
  })

//----------------------------------------------------------------------------//
//                               SNS_Operation                                //
//----------------------------------------------------------------------------//

  abstract class SNS_Operation {
    public abstract canExtend (otherOperation:SNS_Operation):boolean
    public abstract extend    (otherOperation:SNS_Operation):void

    public get isIrrelevant ():boolean  { return false }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

    public abstract doNow ():void
    public abstract redo  ():void
    public abstract undo  ():void
  }

//----------------------------------------------------------------------------//
//                     SNS_ProjectConfigurationOperation                      //
//----------------------------------------------------------------------------//

  class SNS_ProjectConfigurationOperation extends SNS_Operation {
    private _Project:SNS_Project
    private _PropertyName:string
    private _oldValue:any
    private _newValue:any

  /**** constructor ****/

    public constructor (
      Project:SNS_Project, PropertyName:string, PropertyValue:any
    ) {
      super()

      this._Project      = Project
      this._PropertyName = PropertyName
      this._oldValue     = (Project as Indexable)[PropertyName]
      this._newValue     = PropertyValue
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return (
        (otherOperation instanceof SNS_ProjectConfigurationOperation) &&
        (otherOperation._Project      === this._Project) &&
        (otherOperation._PropertyName === this._PropertyName) &&
        ValuesAreEqual(otherOperation._newValue,this._oldValue)
      )
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean {
      return (this._newValue === this._oldValue)
    }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()
      try {
        (this._Project as Indexable)[this._PropertyName] = this._newValue
      } catch (Signal:any) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not change the given property')
      }
    }

  /**** extend ****/

    public extend (otherOperation:SNS_ProjectConfigurationOperation):void {
      this.doNow()
      otherOperation._newValue = this._newValue
    }

  /**** redo ****/

    public redo ():void {
      this.doNow()
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()
      try {
        (this._Project as Indexable)[this._PropertyName] = this._oldValue
      } catch (Signal:any) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not restore the given property')
      }
    }
  }

//----------------------------------------------------------------------------//
//                     SNS_BoardDeserializationOperation                      //
//----------------------------------------------------------------------------//

  class SNS_BoardDeserializationOperation extends SNS_Operation {
    private _Folder:SNS_Folder
    private _Serializations:Indexable[]
    private _Index:number
    private _newBoards:SNS_Board[] = []

  /**** constructor ****/

    public constructor (
      Folder:SNS_Folder, sortedSerializations:Indexable[], Index:number,
      keepIds:boolean = false
    ) {
      super()

      this._Folder         = Folder
      this._Serializations = sortedSerializations.slice()
      this._Index          = Index

      if (! keepIds) {
        this._Serializations.forEach(
          (Serialization:Serializable) => removeIdsFrom(Serialization)
        )
      }
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return false
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean  { return false }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      if (! this._Folder.isAttached) {
        setInspectorMessage('board no longer exists')
        return
      }

      const newBoards:SNS_Board[] = this._newBoards = []
        this._Serializations.forEach((Serialization:Indexable, i:number) => {
          try {
            const newBoard = this._Folder.BoardDeserializedAt(
              Serialization, this._Index+i
            )
            newBoards.push(newBoard)
            newBoard.recursivelyActivateAllScripts()
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (newBoards.length !== this._Serializations.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (newBoards.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not create any new boards')
      }

      selectBoards(newBoards)
    }

  /**** extend ****/

    public extend (otherOperation:SNS_Operation):void {
      throwError('NotExtensible: this operation can not be extended')
    }

  /**** redo ****/

    public redo ():void {
      this.doNow()
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      if (! this._Folder.isAttached) {
        setInspectorMessage('board no longer exists')
        return
      }

      const luckyBoards:SNS_Board[] = []
        this._newBoards.forEach((Board:SNS_Board) => {
          try {
            if (this._Folder.hasBoard(Board)) {
              this._Folder.destroyBoard(Board)
            }
            luckyBoards.push(Board)
          } catch (Signal:any) { /* nop */ }
        })
      if (luckyBoards.length !== this._newBoards.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyBoards.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not delete the previously created boards')
      }

      selectBoards([])
    }
  }

//----------------------------------------------------------------------------//
//                      SNS_BoardConfigurationOperation                       //
//----------------------------------------------------------------------------//

  class SNS_BoardConfigurationOperation extends SNS_Operation {
    private _Board:SNS_Board
    private _PropertyName:string
    private _oldValue:any
    private _newValue:any

  /**** constructor ****/

    public constructor (
      Board:SNS_Board, PropertyName:string, PropertyValue:any
    ) {
      super()

      this._Board        = Board
      this._PropertyName = PropertyName
      this._oldValue     = (Board as Indexable)[PropertyName]
      this._newValue     = PropertyValue
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return (
        (otherOperation instanceof SNS_BoardConfigurationOperation) &&
        (otherOperation._Board        === this._Board) &&
        (otherOperation._PropertyName === this._PropertyName) &&
        ValuesAreEqual(otherOperation._newValue,this._oldValue)
      )
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean {
      return (this._newValue === this._oldValue)
    }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      if (! this._Board.isAttached) {
        setInspectorMessage('board no longer exists')
        return
      }

      try {
        (this._Board as Indexable)[this._PropertyName] = this._newValue
      } catch (Signal:any) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not change the given property')
      }
    }

  /**** extend ****/

    public extend (otherOperation:SNS_BoardConfigurationOperation):void {
      this.doNow()                      // will report if board no longer exists
      otherOperation._newValue = this._newValue
    }

  /**** redo ****/

    public redo ():void {
      if (this._Board.isAttached) { visitBoard(this._Board) }
      this.doNow()                      // will report if board no longer exists
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      if (this._Board.isAttached) {
        visitBoard(this._Board)
      } else {
        setInspectorMessage('board no longer exists')
        return
      }

      try {
        (this._Board as Indexable)[this._PropertyName] = this._oldValue
      } catch (Signal:any) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not restore the given property')
      }
    }
  }

//----------------------------------------------------------------------------//
//                           SNS_BoardMoveOperation                           //
//----------------------------------------------------------------------------//

  class SNS_BoardMoveOperation extends SNS_Operation {
    private _oldFolder:SNS_Folder
    private _oldIndices:number[]
    private _newFolder:SNS_Folder
    private _newIndex:number

  /**** constructor ****/

    public constructor (
      oldFolder:SNS_Folder, sortedBoards:SNS_Board[], newFolder:SNS_Folder, Index:number
    ) {
      super()

      this._oldFolder  = oldFolder
      this._oldIndices = sortedBoards.map((Board:SNS_Board) => Board.Index)

      this._newFolder = newFolder
      this._newIndex  = Index
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      if (
        (otherOperation instanceof SNS_BoardMoveOperation) &&
        (otherOperation._newFolder === this._oldFolder)
      ) {
        const otherIndex = otherOperation._newIndex
        return this._oldIndices.every(
          (oldIndex:number,i:number) => oldIndex === otherIndex+i
        )
      } else {
        return false
      }
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean {
      if (this._newFolder === this._oldFolder) {
        const newIndex = this._newIndex
        return this._oldIndices.every(
          (oldIndex:number,i:number) => oldIndex === newIndex+i
        )
      } else {
        return false
      }
    }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      if (! this._oldFolder.isAttached) {
        setInspectorMessage('original folder no longer exists')
        return
      }

      if (! this._newFolder.isAttached) {
        setInspectorMessage('target folder no longer exists')
        return
      }

      const oldFolder  = this._oldFolder
      const oldIndices = this._oldIndices
      const newFolder  = this._newFolder
      const newIndex   = this._newIndex

      let luckyMoves:SNS_Board[] = []
        for (let i = oldIndices.length-1; i >= 0; i--) {
          try {
            oldFolder.moveBoardTo(oldIndices[i],newFolder,newIndex)
            luckyMoves.push(newFolder.Board(newIndex) as SNS_Board)
          } catch (Signal:any) { debugger /* nop */ }
        }

//      Application.selectedBoards = ...
//      Application.expandedBoards = ...
      if (luckyMoves.length !== oldIndices.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyMoves.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not move the given boards')
      }

      selectBoards(luckyMoves)
    }

  /**** extend ****/

    public extend (otherOperation:SNS_BoardMoveOperation):void {
      this.doNow()
      otherOperation._newFolder = this._newFolder
      otherOperation._newIndex  = this._newIndex
    }

  /**** redo ****/

    public redo ():void {
      this.doNow()
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      if (! this._oldFolder.isAttached) {
        setInspectorMessage('original folder no longer exists')
        return
      }

      if (! this._newFolder.isAttached) {
        setInspectorMessage('target folder no longer exists')
        return
      }

      const oldFolder  = this._oldFolder
      const oldIndices = this._oldIndices
      const newFolder  = this._newFolder
      const newIndex   = this._newIndex

      let luckyMoves:SNS_Board[] = []
        for (let i = 0, l = oldIndices.length; i < l; i++) {
          try {
            newFolder.moveBoardTo(newIndex,oldFolder,oldIndices[i])
            luckyMoves.push(oldFolder.Board(oldIndices[i]) as SNS_Board)
          } catch (Signal:any) { debugger /* nop */ }
        }

//      Application.selectedBoards = ...
//      Application.expandedBoards = ...
      if (luckyMoves.length !== oldIndices.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyMoves.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not move the given boards')
      }

      selectBoards(luckyMoves)
    }
  }

//----------------------------------------------------------------------------//
//                          SNS_BoardShiftOperation                           //
//----------------------------------------------------------------------------//

  class SNS_BoardShiftOperation extends SNS_Operation {
    private _Folder:SNS_Folder
    private _Boards:SNS_Board[]
    private _oldIndices:number[]
    private _newIndices:number[]
    private _forwardMoves:SNS_Move[]
    private _backwardMoves:SNS_Move[]

  /**** constructor ****/

    public constructor (
      Folder:SNS_Folder, sortedBoards:SNS_Board[], sortedIndices:number[]
    ) {
      super()

      this._Folder = Folder
      this._Boards = sortedBoards

      this._oldIndices  = sortedBoards.map((Entry:Indexable) => Entry.Index)
      this._newIndices  = sortedIndices.slice()

      let ItemCount = this._Folder.BoardCount
      this._forwardMoves  = MovesFor(this._oldIndices,this._newIndices, ItemCount)
      this._backwardMoves = MovesFor(this._newIndices,this._oldIndices, ItemCount)
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return (
        (otherOperation instanceof SNS_BoardShiftOperation) &&
        ListsAreEqual(otherOperation._Boards,this._Boards) &&
        ListsAreEqual(otherOperation._newIndices,this._oldIndices)
      )
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean {
      return ListsAreEqual(this._oldIndices,this._newIndices)
    }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      if (! this._Folder.isAttached) {
        setInspectorMessage('folder no longer exists')
        return
      }

      this._shiftBoards(this._forwardMoves)

      selectBoards(this._Boards)
    }

  /**** extend ****/

    public extend (otherOperation:SNS_BoardShiftOperation):void {
      this.doNow()
      otherOperation._newIndices    = this._newIndices
      otherOperation._forwardMoves  = this._forwardMoves
      otherOperation._backwardMoves = this._backwardMoves
    }

  /**** redo ****/

    public redo ():void {
      this.doNow()
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      if (! this._Folder.isAttached) {
        setInspectorMessage('folder no longer exists')
        return
      }

      this._shiftBoards(this._backwardMoves)

      selectBoards(this._Boards)
    }

  /**** _shiftBoards ****/

    protected _shiftBoards (MoveList:SNS_Move[]):void {
      if (MoveList.length === 0) { return }

      const luckyMoves:SNS_Move[] = []
        MoveList.forEach((Move:SNS_Move, i:number) => {
          try {
            this._Folder.shiftBoardsByIndex(Move.oldIndex, Move.newIndex, Move.Count)
            luckyMoves.push(Move)
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (luckyMoves.length !== MoveList.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyMoves.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not shift the given boards')
      }
    }
  }

//----------------------------------------------------------------------------//
//                         SNS_BoardDeletionOperation                         //
//----------------------------------------------------------------------------//

  class SNS_BoardDeletionOperation extends SNS_Operation {
    private _Folder:SNS_Folder
    private _Boards:SNS_Board[]
    private _Indices:number[]
    private _Serializations:Serializable[]

  /**** constructor ****/

    public constructor (sortedBoards:SNS_Board[]) {
      super()

      this._Folder         = commonFolderOfBoards(sortedBoards)
      this._Boards         = sortedBoards.slice()
      this._Indices        = sortedBoards.map((Board:SNS_Board) => Board.Index)
      this._Serializations = sortedBoards.map((Board:SNS_Board) => Board.Serialization)
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return false
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean  { return false }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      selectBoards([])

      if (! this._Folder.isAttached) {
        return
      }

      const existingBoards = this._Boards.filter(
        (Board:SNS_Board) => this._Folder.hasBoard(Board)
      )
      if (existingBoards.length === 0) { return }

      const luckyBoards:SNS_Board[] = []
        existingBoards.forEach((Board:SNS_Board) => {
          try {
            this._Folder.destroyBoard(Board)
            luckyBoards.push(Board)
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (luckyBoards.length !== existingBoards.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyBoards.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not delete any boards')
      }
    }

  /**** extend ****/

    public extend (otherOperation:SNS_Operation):void {
      throwError('NotExtensible: this operation can not be extended')
    }

  /**** redo ****/

    public redo ():void {
      this.doNow()
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      if (! this._Folder.isAttached) {
        setInspectorMessage('folder no longer exists')
        return
      }

      const newBoards:SNS_Board[] = this._Boards = []
        this._Serializations.forEach((Serialization:Indexable, i:number) => {
          try {
            const newBoard = this._Folder.BoardDeserializedAt(
              Serialization, this._Indices[i]
            )
            newBoards.push(newBoard)
            newBoard.recursivelyActivateAllScripts()
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (newBoards.length !== this._Serializations.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (newBoards.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not restore any previously deleted boards')
      }

      selectBoards(newBoards)
    }
  }

//----------------------------------------------------------------------------//
//                    SNS_StickerDeserializationOperation                     //
//----------------------------------------------------------------------------//

  class SNS_StickerDeserializationOperation extends SNS_Operation {
    private _Board:SNS_Board
    private _Serializations:Indexable[]
    private _Index:number
    private _newStickers:SNS_Sticker[] = []

  /**** constructor ****/

    public constructor (
      Board:SNS_Board, sortedSerializations:Indexable[], Index:number,
      keepId:boolean = false
    ) {
      super()

      this._Board          = Board
      this._Serializations = sortedSerializations.slice()
      this._Index          = Index

      if (! keepId) {
        this._Serializations.forEach(
          (Serialization:Serializable) => removeIdsFrom(Serialization)
        )
      }
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return false
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean  { return false }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      if (! this._Board.isAttached) {
        setInspectorMessage('board no longer exists')
        return
      }

      const newStickers:SNS_Sticker[] = this._newStickers = []
        this._Serializations.forEach((Serialization:Indexable, i:number) => {
          try {
            const newSticker = this._Board.StickerDeserializedAt(
              Serialization, this._Index+i
            )
            newStickers.push(newSticker)
            newSticker.activateScript()
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (newStickers.length !== this._Serializations.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (newStickers.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not create any new stickers')
      }

      selectStickers(newStickers)
    }

  /**** extend ****/

    public extend (otherOperation:SNS_Operation):void {
      throwError('NotExtensible: this operation can not be extended')
    }

  /**** redo ****/

    public redo ():void {
      if (this._Board.isAttached) { visitBoard(this._Board) }
      this.doNow()                      // will report if board no longer exists
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      if (this._Board.isAttached) {
        visitBoard(this._Board)
      } else {
        setInspectorMessage('board no longer exists')
        return
      }

      const luckyStickers:SNS_Sticker[] = []
        this._newStickers.forEach((Sticker:SNS_Sticker) => {
          try {
            if (this._Board.hasSticker(Sticker)) {
              this._Board.destroySticker(Sticker)
            }
            luckyStickers.push(Sticker)
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (luckyStickers.length !== this._newStickers.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyStickers.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not delete the previously created stickers')
      }

      deselectStickers(luckyStickers)
    }
  }

//----------------------------------------------------------------------------//
//                     SNS_StickerConfigurationOperation                      //
//----------------------------------------------------------------------------//

  class SNS_StickerConfigurationOperation extends SNS_Operation {
    private _Board:SNS_Board
    private _Stickers:SNS_Sticker[]
    private _PropertyName:string
    private _oldValues:any[]
    private _newValue:any

  /**** constructor ****/

    public constructor (
      Stickers:SNS_Sticker[], PropertyName:string, PropertyValue:any
    ) {
      super()

      this._Board        = commonBoardOfStickers(Stickers) as SNS_Board
      this._Stickers     = Stickers.slice()
      this._PropertyName = PropertyName
      this._oldValues    = Stickers.map((Sticker:SNS_Sticker) => (Sticker as Indexable)[PropertyName])
      this._newValue     = PropertyValue
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return (
        (otherOperation instanceof SNS_StickerConfigurationOperation) &&
        ListsAreEqual(otherOperation._Stickers, this._Stickers) &&
        (otherOperation._PropertyName === this._PropertyName) &&
        this._oldValues.every((oldValue:any) => ValuesAreEqual(otherOperation._newValue,oldValue))
      )
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean {
      return this._oldValues.every((oldValue:any) => ValuesAreEqual(this._newValue,oldValue))
    }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      const existingStickers = this._Stickers.filter(
        (Sticker:SNS_Sticker) => Sticker.isAttached
      )
      if (existingStickers.length === 0) {
        setInspectorMessage('stickers no longer exist')
        return
      }

      const luckyStickers:SNS_Sticker[] = []
        existingStickers.forEach((Sticker:SNS_Sticker) => {
          try {
            (Sticker as Indexable)[this._PropertyName] = this._newValue
            luckyStickers.push(Sticker)
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (luckyStickers.length !== existingStickers.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyStickers.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not change the given property')
      }
    }

  /**** extend ****/

    public extend (otherOperation:SNS_StickerConfigurationOperation):void {
      if (this._Board.isAttached) { visitBoard(this._Board) }
      this.doNow()                // won't do anything if board no longer exists
      otherOperation._newValue = this._newValue
    }

  /**** redo ****/

    public redo ():void {
      if (this._Board.isAttached) { visitBoard(this._Board) }
      this.doNow()                // won't do anything if board no longer exists
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      const existingStickers = this._Stickers.filter(
        (Sticker:SNS_Sticker) => Sticker.isAttached
      )
      if (existingStickers.length === 0) {
        setInspectorMessage('stickers no longer exist')
        return
      }

      if (this._Board.isAttached) { visitBoard(this._Board) }

      const luckyStickers:SNS_Sticker[] = []
        existingStickers.forEach((Sticker:SNS_Sticker) => {
          let StickerIndex:number = this._Stickers.indexOf(Sticker)
          try {
            (Sticker as Indexable)[this._PropertyName] = this._oldValues[StickerIndex]
            luckyStickers.push(Sticker)
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (luckyStickers.length !== existingStickers.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyStickers.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not restore the given property')
      }
    }
  }

//----------------------------------------------------------------------------//
//                         SNS_StickerShapeOperation                          //
//----------------------------------------------------------------------------//

  class SNS_StickerShapeOperation extends SNS_Operation {
    private _Board:SNS_Board
    private _Stickers:SNS_Sticker[]
    private _oldGeometries:SNS_Geometry[]
    private _newGeometries:SNS_Geometry[]

  /**** constructor ****/

    public constructor (
      Stickers:SNS_Sticker[], Geometries:SNS_Geometry[]
    ) {
      super()

      this._Board         = Stickers[0].Board
      this._Stickers      = Stickers.slice()
      this._oldGeometries = Stickers.map((Sticker:SNS_Sticker) => Sticker.Geometry)
      this._newGeometries = Geometries.slice()
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return (
        (otherOperation instanceof SNS_StickerShapeOperation) &&
        ListsAreEqual(otherOperation._Stickers, this._Stickers) &&
        this._oldGeometries.every(
          (Geometry:SNS_Geometry, i:number) => ValuesAreEqual(otherOperation._newGeometries[i],Geometry)
        )
      )
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean {
      return this._oldGeometries.every(
        (Geometry:SNS_Geometry, i:number) => ValuesAreEqual(this._newGeometries[i],Geometry)
      )
    }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      const existingStickers = this._Stickers.filter(
        (Sticker:SNS_Sticker) => Sticker.isAttached
      )
      if (existingStickers.length === 0) {
        setInspectorMessage('stickers no longer exist')
        return
      }

      const luckyStickers:SNS_Sticker[] = []
        existingStickers.forEach((Sticker:SNS_Sticker, i:number) => {
          try {
            Sticker.Geometry = this._newGeometries[i]
            luckyStickers.push(Sticker)
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (luckyStickers.length !== existingStickers.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyStickers.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not change the given property')
      }
    }

  /**** extend ****/

    public extend (otherOperation:SNS_StickerShapeOperation):void {
      if (this._Board.isAttached) { visitBoard(this._Board) }
      this.doNow()                // won't do anything if board no longer exists
      otherOperation._newGeometries = this._newGeometries
    }

  /**** redo ****/

    public redo ():void {
      if (this._Board.isAttached) { visitBoard(this._Board) }
      this.doNow()                // won't do anything if board no longer exists
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      const existingStickers = this._Stickers.filter(
        (Sticker:SNS_Sticker) => Sticker.isAttached
      )
      if (existingStickers.length === 0) {
        setInspectorMessage('stickers no longer exist')
        return
      }

      if (this._Board.isAttached) { visitBoard(this._Board) }

      const luckyStickers:SNS_Sticker[] = []
        existingStickers.forEach((Sticker:SNS_Sticker) => {
          let StickerIndex:number = this._Stickers.indexOf(Sticker)
          try {
            Sticker.Geometry = this._oldGeometries[StickerIndex]
            luckyStickers.push(Sticker)
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (luckyStickers.length !== existingStickers.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyStickers.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not restore the given property')
      }
    }
  }

//----------------------------------------------------------------------------//
//                         SNS_StickerShiftOperation                          //
//----------------------------------------------------------------------------//

  class SNS_StickerShiftOperation extends SNS_Operation {
    private _Board:SNS_Board
    private _Stickers:SNS_Sticker[]
    private _oldIndices:number[]
    private _newIndices:number[]
    private _forwardMoves:SNS_Move[]
    private _backwardMoves:SNS_Move[]

  /**** constructor ****/

    public constructor (sortedStickers:SNS_Sticker[], sortedIndices:number[]) {
      super()

      this._Board    = commonBoardOfStickers(sortedStickers) as SNS_Board
      this._Stickers = sortedStickers

      this._oldIndices = sortedStickers.map((Sticker:SNS_Sticker) => Sticker.Index)
      this._newIndices = sortedIndices.slice()

      let ItemCount = this._Board.StickerCount
      this._forwardMoves  = MovesFor(this._oldIndices,this._newIndices, ItemCount)
      this._backwardMoves = MovesFor(this._newIndices,this._oldIndices, ItemCount)
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return (
        (otherOperation instanceof SNS_StickerShiftOperation) &&
        ListsAreEqual(otherOperation._Stickers,this._Stickers) &&
        ListsAreEqual(this._oldIndices,otherOperation._newIndices)
      )
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean {
      return ListsAreEqual(this._oldIndices,this._newIndices)
    }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      if (! this._Board.isAttached) {
        setInspectorMessage('board no longer exists')
        return
      }

      this._shiftStickers(this._forwardMoves)

      selectStickers(this._Stickers)
    }

  /**** extend ****/

    public extend (otherOperation:SNS_StickerShiftOperation):void {
      visitBoard(this._Board)
      this.doNow()
      otherOperation._newIndices    = this._newIndices
      otherOperation._forwardMoves  = this._forwardMoves
      otherOperation._backwardMoves = this._backwardMoves
    }

  /**** redo ****/

    public redo ():void {
      visitBoard(this._Board)
      this.doNow()
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      if (this._Board.isAttached) {
        visitBoard(this._Board)
      } else {
        setInspectorMessage('board no longer exists')
        return
      }

      this._shiftStickers(this._backwardMoves)

      selectStickers(this._Stickers)
    }

  /**** _shiftStickers ****/

    protected _shiftStickers (MoveList:SNS_Move[]):void {
      if (MoveList.length === 0) { return }

      const luckyMoves:SNS_Move[] = []
        MoveList.forEach((Move:SNS_Move, i:number) => {
          try {
            this._Board.shiftStickersByIndex(Move.oldIndex, Move.newIndex, Move.Count)
            luckyMoves.push(Move)
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (luckyMoves.length !== MoveList.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyMoves.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not shift the given stickers')
      }
    }
  }

//----------------------------------------------------------------------------//
//                        SNS_StickerDeletionOperation                        //
//----------------------------------------------------------------------------//

  class SNS_StickerDeletionOperation extends SNS_Operation {
    private _Board:SNS_Board
    private _Stickers:SNS_Sticker[]
    private _Indices:number[]
    private _Serializations:Serializable[]

  /**** constructor ****/

    public constructor (sortedStickers:SNS_Sticker[]) {
      super()

      this._Board          = commonBoardOfStickers(sortedStickers) as SNS_Board
      this._Stickers       = sortedStickers.slice()
      this._Indices        = sortedStickers.map((Sticker:SNS_Sticker) => Sticker.Index)
      this._Serializations = sortedStickers.map((Sticker:SNS_Sticker) => Sticker.Serialization)
    }

  /**** canExtend ****/

    public canExtend (otherOperation:SNS_Operation):boolean {
      return false
    }

  /**** isIrrelevant ****/

    public get isIrrelevant ():boolean  { return false }
    public set isIrrelevant (_:boolean) { throwReadOnlyError('isIrrelevant') }

  /**** doNow ****/

    public doNow ():void {
      clearInspectorMessage()

      if (! this._Board.isAttached) { return }

      const existingStickers = this._Stickers.filter(
        (Sticker:SNS_Sticker) => this._Board.hasSticker(Sticker)
      )
      if (existingStickers.length === 0) { return }

      const luckyStickers:SNS_Sticker[] = []
        existingStickers.forEach((Sticker:SNS_Sticker) => {
          try {
            this._Board.destroySticker(Sticker)
            luckyStickers.push(Sticker)
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (luckyStickers.length !== existingStickers.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (luckyStickers.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not delete any stickers')
      }

      deselectStickers(luckyStickers)
    }

  /**** extend ****/

    public extend (otherOperation:SNS_Operation):void {
      throwError('NotExtensible: this operation can not be extended')
    }

  /**** redo ****/

    public redo ():void {
      if (this._Board.isAttached) { visitBoard(this._Board) }
      this.doNow()                // won't do anything if board no longer exists
    }

  /**** undo ****/

    public undo ():void {
      clearInspectorMessage()

      selectStickers([])

      if (this._Board.isAttached) {
        visitBoard(this._Board)
      } else {
        setInspectorMessage('board no longer exists')
        return
      }

      const newStickers:SNS_Sticker[] = this._Stickers = []
        this._Serializations.forEach((Serialization:Indexable, i:number) => {
          try {
            const newSticker = this._Board.StickerDeserializedAt(
              Serialization, this._Indices[i]
            )
            newStickers.push(newSticker)
            newSticker.activateScript()
          } catch (Signal:any) { debugger /* nop */ }
        })
      if (newStickers.length !== this._Serializations.length) {
        setInspectorMessage('operation did not fully succeed')
      }
      if (newStickers.length === 0) {
        setInspectorMessage('operation failed')
        throwError('OperationFailure: could not restore any previously deleted stickers')
      }

      selectStickers(newStickers)
    }
  }

/**** PropertiesOfProject ****/

  function PropertiesOfProject (Project:SNS_Project):SNS_ProjectProperties {
    const Result:Indexable = {}
      Object.keys(SNS_ProjectDefaults).forEach(
        (Property:string) => Result[Property] = (Project as Indexable)[Property]
      )
    return Result as SNS_ProjectProperties
  }

/**** commonFolderOfBoards ****/

  function commonFolderOfBoards (BoardList:SNS_Board[]):SNS_Folder {
    if (BoardList.length === 0) { return Application.Project as SNS_Folder }

    let Result:SNS_Folder = BoardList[0].Folder as SNS_Folder
      if (BoardList.some((Board:SNS_Board) => Board.Folder !== Result)) throwError(
        'InvalidArgument: the given boards do not all belong to the same folder'
      )
    return Result
  }

/**** BoardsSortedByIndex ****/

  function BoardsSortedByIndex (BoardList:SNS_Board[]):SNS_Board[] {
    if (BoardList.length === 0) { return [] }

    const Result:Indexable[] = BoardList.map(
      (Board:SNS_Board) => ({ Board, Index:Board.Index })
    )
      Result.sort(
        (EntryA:Indexable,EntryB:Indexable) => EntryA.Index-EntryB.Index
      )
    return Result.map((Entry:Indexable) => Entry.Board)
  }

/**** IndexPathsOfBoards ****/

  function IndexPathsOfBoards (BoardList:SNS_Board[]):number[][] {
    return BoardList.map((Board:SNS_Board) => Board.IndexPath)
  }

/**** BoardsAtIndexPaths ****/

  function BoardsAtIndexPaths (IndexPathList:number[][]):SNS_Board[] {
    const Project = Application.Project as SNS_Project
    return IndexPathList.map(
      (IndexPath:number[]) => Project.BoardAtIndexPath(IndexPath)
    ).filter((Item:any) => Item != null) as SNS_Board[]
  }

/**** BoardsUpdatedbyId **** /

  function BoardsUpdatedbyId (BoardList:SNS_Board[]):SNS_Board[] {
    if (BoardList.length === 0) { return [] }

    const Project = Application.Project
    return BoardList.map(
      (Board:SNS_Board) => Project.BoardWithId(Board.Id)
    ).filter(
      (Board:SNS_Board) => (Board != null) && ValueIsBoard(Board)
    )
  }
*/
/**** BoardsMayBeShiftedUp ****/

  function BoardsMayBeShiftedUp (BoardList:SNS_Board[]):boolean {
    if (BoardList.length === 0) { return false }

    const topmostIndex = topmostIndexOfBoards(BoardList)
    if (topmostIndex > 0) { return true }

    const bottommostIndex = bottommostIndexOfBoards(BoardList)
    return (bottommostIndex > BoardList.length)
  }

/**** BoardsMayBeShiftedDown ****/

  function BoardsMayBeShiftedDown (BoardList:SNS_Board[]):boolean {
    if (BoardList.length === 0) { return false }

    const BoardCount = (BoardList[0].Folder as SNS_Board).BoardCount

    const bottommostIndex = bottommostIndexOfBoards(BoardList)
    if (bottommostIndex < BoardCount-1) { return true }

    const topmostIndex = topmostIndexOfBoards(BoardList)
    return (topmostIndex < BoardCount-BoardList.length)
  }

/**** BoardsMayBeShiftedIn ****/

  function BoardsMayBeShiftedIn (BoardList:SNS_Board[]):boolean {
    if (BoardList.length === 0) { return false }
    return BoardsMayBeShiftedDown(BoardList)
  }

/**** BoardsMayBeShiftedOut ****/

  function BoardsMayBeShiftedOut (BoardList:SNS_Board[]):boolean {
    if (BoardList.length === 0) { return false }
    return (BoardList[0]?.Folder?.Folder != null)
  }

/**** topmostIndexOfBoards ****/

  function topmostIndexOfBoards (BoardList:SNS_Board[]):number {
    if (BoardList.length === 0) { return -1 }

    let Result:number = Infinity
      BoardList.forEach((Board:SNS_Board) => Result = Math.min(Result,Board.Index))
    return Result
  }

/**** bottommostIndexOfBoards ****/

  function bottommostIndexOfBoards (BoardList:SNS_Board[]):number {
    if (BoardList.length === 0) { return -1 }

    let Result:number = 0
      BoardList.forEach((Board:SNS_Board) => Result = Math.max(Result,Board.Index))
    return Result
  }

/**** PropertiesOfBoard ****/

  function PropertiesOfBoard (Board:SNS_Board|undefined):SNS_BoardProperties {
    if (Board == null) { return SNS_BoardDefaults }

    const Result:Indexable = {}
      Object.keys(SNS_BoardDefaults).forEach(
        (Property:string) => Result[Property] = (Board as Indexable)[Property]
      )
    return Result as SNS_BoardProperties
  }

/**** commonBoardOfStickers ****/

  function commonBoardOfStickers (StickerList:SNS_Sticker[]):SNS_Board|undefined {
    if (StickerList.length === 0) { return undefined }

    let Result:SNS_Board = StickerList[0].Board
      if (StickerList.some((Sticker:SNS_Sticker) => Sticker.Board !== Result)) throwError(
        'InvalidArgument: the given stickers do not all belong to the same board'
      )
    return Result
  }

/**** StickersSortedByIndex ****/

  function StickersSortedByIndex (StickerList:SNS_Sticker[]):SNS_Sticker[] {
    if (StickerList.length === 0) { return [] }

    const Result:Indexable[] = StickerList.map(
      (Sticker:SNS_Sticker) => ({ Sticker, Index:Sticker.Index })
    )
      Result.sort(
        (EntryA:Indexable,EntryB:Indexable) => EntryA.Index-EntryB.Index
      )
    return Result.map((Entry:Indexable) => Entry.Sticker)
  }

/**** PropertiesOfSticker ****/

  function PropertiesOfSticker (Sticker:SNS_Sticker):SNS_StickerProperties {
    const Result:Indexable = {}
      Object.keys(SNS_StickerDefaults).forEach(
        (Property:string) => Result[Property] = (Sticker as Indexable)[Property]
      )
    return Result as SNS_StickerProperties
  }

/**** PropertiesOfStickers ****/

  function PropertiesOfStickers (StickerList:SNS_Sticker[]):SNS_StickerProperties {
    if (StickerList.length === 0) {
      return { ...SNS_StickerDefaults }
    }

    const Result:Indexable = PropertiesOfSticker(StickerList[0])
      StickerList.slice(1).forEach((Sticker:SNS_Sticker) => {
        Object.keys(SNS_StickerDefaults).forEach((Property:string) => {
          const Value:any = (Sticker as Indexable)[Property]
          if (ValuesDiffer(Value,Result)) { Result[Property] = mixedValues }
        })
      })
    return Result as SNS_StickerProperties
  }

/**** StickersMayBeShiftedUp ****/

  function StickersMayBeShiftedUp (StickerList:SNS_Sticker[]):boolean {
    if (StickerList.length === 0) { return false }

    const topmostIndex = topmostIndexOfStickers(StickerList)
    if (topmostIndex > 0) { return true }

    const bottommostIndex = bottommostIndexOfStickers(StickerList)
    return (bottommostIndex > StickerList.length)
  }

/**** StickersMayBeShiftedDown ****/

  function StickersMayBeShiftedDown (StickerList:SNS_Sticker[]):boolean {
    if (StickerList.length === 0) { return false }

    const StickerCount = (StickerList[0].Folder as SNS_Board).StickerCount

    const bottommostIndex = bottommostIndexOfStickers(StickerList)
    if (bottommostIndex < StickerCount-1) { return true }

    const topmostIndex = topmostIndexOfStickers(StickerList)
    return (topmostIndex < StickerCount-StickerList.length)
  }

/**** topmostIndexOfStickers ****/

  function topmostIndexOfStickers (StickerList:SNS_Sticker[]):number {
    if (StickerList.length === 0) { return -1 }

    let Result:number = Infinity
      StickerList.forEach((Sticker:SNS_Sticker) => Result = Math.min(Result,Sticker.Index))
    return Result
  }

/**** bottommostIndexOfStickers ****/

  function bottommostIndexOfStickers (StickerList:SNS_Sticker[]):number {
    if (StickerList.length === 0) { return -1 }

    let Result:number = 0
      StickerList.forEach((Sticker:SNS_Sticker) => Result = Math.max(Result,Sticker.Index))
    return Result
  }

/**** topLeftPositionOfStickers ****/

  function topLeftPositionOfStickers (
    StickerList:SNS_Sticker[]
  ):{ minX:number, minY:number } {
    if (StickerList.length === 0) { return { minX:0, minY:0 } }
    return {
      minX:Math.min(...StickerList.map((Sticker:SNS_Sticker) => Sticker.x)),
      minY:Math.min(...StickerList.map((Sticker:SNS_Sticker) => Sticker.y))
    }
  }

/**** commonErrorOf **** /

  function commonErrorOf (
    ErrorList:SNS_Error[]
  ):SNS_Error|typeof noSelection|typeof mixedValues|undefined {
    if (ErrorList.length === 0) { return noSelection }

    let Result:SNS_Error|typeof noSelection|typeof mixedValues|undefined = ErrorList[0]
      ErrorList.slice(1).forEach((Error:SNS_Error|undefined) => {
        if (ValuesDiffer(Error,Result)) { Result = mixedValues }
      })
    return Result
  }
*/
/**** ValueFor ****/

  function ValueFor (Value:any):any {
    return (
      (Value === noSelection) || (Value === mixedValues)
      ? null
      : Value
    )
  }

/**** PlaceholderFor **** /

  function PlaceholderFor (Value:any, Default:string='Enter Value'):any {
    switch (Value) {
      case noSelection: return '(no Selection)'
      case mixedValues: return '(mixed Values)'
      default:          return Default
    }
  }
*/
/**** IntegerFor ****/

  function IntegerFor (Value:any):number|null {
    return (
      (Value === noSelection) || (Value === mixedValues)
      ? null
      : Math.round(Value)
    )
  }

/**** BooleanFor ****/

  function BooleanFor (Value:any, TruthValue:any=true):boolean|null {
    return (
      (Value === noSelection) || (Value === mixedValues)
      ? null
      : (Value === TruthValue)
    )
  }

/**** IndeterminateFor **** /

  function IndeterminateFor (Value:any):boolean {
    return (Value === noSelection) || (Value === mixedValues) || (Value == null)
  }
*/
/**** ErrorMessageFor ****/

  function ErrorMessageFor (Error:SNS_Error):string {
    switch (true) {
      case (Error == null):         return '(no error found)'
      case (Error === noSelection): return '(no selection)'
      case (Error === mixedValues): return '(various errors)'
      default:                      return Error.Type + ': ' + Error.Message
    }
  }

/**** isRealValue **** /

  function isRealValue (Value:any):boolean {
    return (Value !== noSelection) && (Value !== mixedValues) && (Value != null)
  }
*/
/**** showError **** /

  function showError (Error:SNS_Error, Sticker:SNS_Sticker):void {
    if (window.confirm(
      Error.Type + '\n\n' + Error.Message + '\n\n' +
      'Do you want to proceed to the Script Editor?'
    )) {
      selectStickers([Sticker])
      PUX.openDialog('ScriptEditor')
    }
  }
*/
/**** showScriptError ****/

  function showScriptError (Error:SNS_Error):void {
    window.alert(Error.Type + '\n\n' + Error.Message)
  }

/**** applyPendingScriptOfVisual ****/

  function applyPendingScriptOfVisual (Visual:SNS_Visual):SNS_Error|undefined {
    let pendingScript:string|undefined = (Visual.pendingScript || '').trim()
//  if (pendingScript === '') { pendingScript = undefined }

    let activeScript:string|undefined = (Visual.activeScript || '').trim()
    if (activeScript === '') { activeScript = undefined }

    if (activeScript === pendingScript) { return }

    if ((pendingScript == null) || (pendingScript === '')) {
      Visual.activeScript  = undefined
      Visual.pendingScript = undefined
      Visual.activateScript()

      Visual.ScriptError = undefined
      Visual.Error       = undefined
    } else {
      const {
        activeScript:oldActiveScript, pendingScript:oldPendingScript,
      } = Visual
        Visual.activeScript = oldPendingScript
        Visual.activateScript()
      if (Visual.Error == null) {
//      Visual.activeScript  = oldPendingScript
        Visual.pendingScript = undefined

        Visual.ScriptError = undefined
      } else {
        Visual.ScriptError = Visual.Error

        Visual.activeScript = oldActiveScript
        Visual.activateScript()       // will not set "ScriptError", but "Error"
      }
    }
    Visual.rerender()
  }

/**** ListsAreEqual ****/

  function ListsAreEqual (ListA:any[], ListB:any[]):boolean {
    return (
      (ListA.length === ListB.length) &&
      ListA.every((Element:any, i:number) => Element === ListB[i])
    )
  }

/**** ListsDiffer **** /

  function ListsDiffer (ListA:any[], ListB:any[]):boolean {
    return (
      (ListA.length !== ListB.length) ||
      ListA.some((Element:any, i:number) => Element !== ListB[i])
    )
  }
*/
/**** MovesFor ****/

  export type SNS_Move = { oldIndex:number, newIndex:number, Count:number }

  function MovesFor (
    oldIndices:number[], newIndices:number[],
    ItemCount:number  // nota bene: this is the total # of stickers in the board
  ):SNS_Move[] {
      let IndexListA = Array(ItemCount).fill(NaN).map((_:any, i:number) => i)
        oldIndices.forEach(         // mark all stickers that are to be moved...
          (oldIndex:number) => IndexListA[oldIndex] = -1
        )                                                  // ...and remove them
        IndexListA = IndexListA.filter((Index:number) => Index !== -1)
      let IndexListB = Array(ItemCount).fill(-1)
        newIndices.forEach(           // remember where moved stickers come from
          (newIndex:number,i:number) => IndexListB[newIndex] = oldIndices[i]
        )
        for (let i = 0, l = ItemCount; i < l; i++) {
          if (IndexListB[i] === -1) {        // fill gaps between moved stickers
            IndexListB[i] = IndexListA.shift()
          }
        }

    /**** compute required moves ****/

      const MoveList:SNS_Move[] = []
        function move (oldIndex:number,newIndex:number):void {
          const Index = IndexListA[oldIndex]
          IndexListA.splice(oldIndex,1)
          IndexListA.splice(newIndex,0,Index)
          MoveList.push({ oldIndex, newIndex, Count:1 })
        }

      IndexListA = Array(ItemCount).fill(NaN).map((_:any, i:number) => i)
        for (let i = 0, l = ItemCount; i < l; i++) {
          if (IndexListA[i] !== IndexListB[i]) {
            move(IndexListA.indexOf(IndexListB[i]),i)
          }
        }
      for (let i = MoveList.length-1; i >= 1; i--) {           // optimize moves
        const curMove  = MoveList[i]
        const prevMove = MoveList[i-1]
        if (
          (prevMove.oldIndex === curMove.oldIndex-1) &&
          (prevMove.newIndex === curMove.newIndex-1)
        ) {
          MoveList.splice(i,1)
          prevMove.Count += curMove.Count
        }
      }

      return MoveList
  }

/**** withError **** /

  function withError (Message:SNS_Textline, ...DetailList:any[]):void {
    if (DetailList.length === 0) {
      console.error('NoteStickers: ' + Message)
    } else {
      console.error.call(null,['NoteStickers: ' + Message].concat(DetailList))
    }
debugger // *C* remove or comment for production
  }
*/
/**** withWarning ****/

  function withWarning (Message:SNS_Textline, ...DetailList:any[]):void {
    if (DetailList.length === 0) {
      console.warn('NoteStickers: ' + Message)
    } else {
      console.warn.call(null,['NoteStickers: ' + Message].concat(DetailList))
    }
debugger // *C* remove or comment for production
  }

/**** begin with localForage ****/

  localforage.config({
    driver: [localforage.INDEXEDDB, localforage.WEBSQL]
  })

  localforage.ready(function () {
    ProjectStore = localforage.createInstance({
      name:'NoteStickers'
    })

    fetchPersistedProjectList()
    showDialogCentered('ProjectBrowser')

    print('ready for operation')
Object.assign(window,{ // just for testing
  Application,
  MainScreen:PUX.ScreenNamed('MainScreen'),
  Inspector:PUX.DialogNamed('Inspector')
})
  })
