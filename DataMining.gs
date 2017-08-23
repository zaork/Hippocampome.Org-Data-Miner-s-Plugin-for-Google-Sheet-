/* Goals
This addon will integrate google forms with google spreadsheets
to assist organizing the data extracted from the papers.

How to use:-------------------------------------------------
In the evidence tab of google sheets the user should select the data range 
containing the description of eletrophysiological evidence.
Then from the custon "Data Entry" menu select enter "Eneter Data".
*/
//-------Data Mining 
function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu('Data Mining')
  .addItem('1. Review Evidence', 'reviewEvidence') //<object id="synForm" type="text/html" data="<?=url?>" style="width:662px;height:730px;"><p>backup content</p></object>?>
  .addItem('2. Import Evidence', 'getTheLastFormResponse')
  .addItem('3. Check  Query', 'checkQuery')  //http://hippocampome.org/csv2db/search_engine_json.php?query_str=
  .addItem('4. Extract Data', 'addSynapticData') 
  .addItem('Jump to Row', 'jumpToRow')
  .addItem('Text Cleaner', 'showTextCleaner')
  .addToUi();
};
//-------Evidence Review Section-------------------------------------------------------------------
function reviewEvidence() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var evidenceRange = getCheckActiveRange(ss.getActiveRange(),"Evidence");
  var output = HtmlService.createTemplateFromFile("ReviewEvidence");
  if (evidenceRange) 
  {// get needed data from spread sheets
    var evidence      = output.evidence       = getEvidenceValues(evidenceRange);  //Object.keys(evidence).forEach(function(key) {Logger.log(key+" : "+evidence[key])});
    var covariates    = output.covariates     = sheetSamplingTool(ss.getSheetByName("Covariates").getRange('A:A'),evidence.PMID);
    var myRefs        = output.myRefs         = sheetSamplingTool(ss.getSheetByName("My" ).getRange('A:A'),evidence.PMID,'RefID');
    var morphology    = output.morphology     = sheetSamplingTool(ss.getSheetByName("Mo" ).getRange('A:A'),evidence.PMID,'RefID');
    var markers       = output.markers        = sheetSamplingTool(ss.getSheetByName("Ma" ).getRange('A:A'),evidence.PMID,'RefID');
    var cellEphys     = output.cellEphys      = sheetSamplingTool(ss.getSheetByName("CE" ).getRange('A:A'),evidence.PMID,'RefID');
    var firingPatterns= output.firingPatterns = sheetSamplingTool(ss.getSheetByName("FP" ).getRange('A:A'),evidence.PMID,'RefID');
    var connectivity  = output.connectivity   = sheetSamplingTool(ss.getSheetByName("Con").getRange('A:A'),evidence.PMID,'RefID');
    var covariatesRef = output.covariatesRef  = sheetSamplingTool(ss.getSheetByName("Cov").getRange('A:A'),evidence.PMID,'RefID');
    var dataRefs      = output.dataRefs       = sheetSamplingTool(ss.getSheetByName("Da" ).getRange('A:A'),evidence.PMID,'RefID');
    var cellTypes     = output.cellTypes      = getSheetByIdAsJSON('19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A','CellTypes').reduce(function(p,v){p[v.UID]=v; return p},{});
    if (myRefs && covariates && morphology && markers && cellEphys && firingPatterns && connectivity)
    {
      output.url = updateReviewForm(evidence,covariates,myRefs,morphology,markers,cellEphys,firingPatterns,connectivity); //Logger.log(output.url);
      output.allRefs = mergeObjs(myRefs,morphology,markers,cellEphys,firingPatterns,connectivity,covariatesRef,dataRefs);
      output.imagesShown = [];
      SpreadsheetApp.getUi().showModalDialog(output.evaluate().setWidth(1450).setHeight(750), 
                                             'Review Tool, DATA Format:Mean±SD|SEM [lb to ub][>lb|<ub](n=){Note:Note};...@RefID&RefID{Note:Note}, ..., Stimulation Protocol;@\d&\d{Note:Note}');
      return true;
    } else {
      ss.toast('Error in sheetSamplingTool');
      return null;
    }
  } else {
    ss.toast('Please goto evidence tab and select all rows that describe a single piece of evidence and try again');
    return null;
  };
};
//-------Synaptic Data------------------------------------------------------------------------------
function addSynapticData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var evidenceRange = getCheckActiveRange(ss.getActiveRange(),"Evidence");
  // get the template dID
  var synapticDataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SD");
  var allDataIDs = synapticDataSheet.getRange('D2:D').getValues().reduce(to1D);
  var ui = SpreadsheetApp.getUi();  
  do {
    var templateDataID = ui.prompt('Template?', 'Data ID (dID):', ui.ButtonSet.YES_NO);
    var rowIndex = (templateDataID.getSelectedButton() === ui.Button.YES) ? allDataIDs.indexOf(Number(templateDataID.getResponseText())) : 0;
  }
  while (rowIndex === -1);

  if (evidenceRange && (templateDataID.getSelectedButton() === ui.Button.YES || templateDataID.getSelectedButton() === ui.Button.NO)) {
    // get needed data from spread sheets
    var output = HtmlService.createTemplateFromFile("SynapticData");
    var evidence      = output.evidence       = getEvidenceValues(evidenceRange);  //Object.keys(evidence).forEach(function(key) {Logger.log(key+" : "+evidence[key])});
    
    var dSec = evidence.dSec;
    while (!(dSec === 'mPSP' || dSec === 'mPSP' || dSec === 'mPSC' || dSec === 'sPSP' || dSec === 'sPSC' || dSec === 'uPSP' || dSec === 'uPSC' || dSec === 'ePSP' || dSec === 'ePSC'))
      dSec = ui.prompt('Enter Data Type', 'Options: mPSP, mPSC, sPSP, sPSC, uPSP, uPSC, ePSP or ePSC', ui.ButtonSet.OK).getResponseText();
    
    var covariates    = output.covariates     = sheetSamplingTool(ss.getSheetByName("Covariates").getRange('A:A'),evidence.PMID);
    var oldSynData    = output.oldSynData     = sheetSamplingTool(ss.getSheetByName("SynData"   ).getRange('A:A'),evidence.PMID,'Row');
    
    var synRefs       = output.synRefs        = sheetSamplingTool(ss.getSheetByName("Da"        ).getRange('A:A'),evidence.PMID,'RefID');
    var covRefs       = output.covRefs        = sheetSamplingTool(ss.getSheetByName("Cov"       ).getRange('A:A'),evidence.PMID,'RefID');
    var myRefs        = output.myRefs         = sheetSamplingTool(ss.getSheetByName("My"        ).getRange('A:A'),evidence.PMID,'RefID');
    
    var morphology    = output.morphology     = sheetSamplingTool(ss.getSheetByName("Mo" ).getRange('A:A'),evidence.PMID,'RefID');
    var markers       = output.markers        = sheetSamplingTool(ss.getSheetByName("Ma" ).getRange('A:A'),evidence.PMID,'RefID');
    var cellEphys     = output.cellEphys      = sheetSamplingTool(ss.getSheetByName("CE" ).getRange('A:A'),evidence.PMID,'RefID');
    var firingPatterns= output.firingPatterns = sheetSamplingTool(ss.getSheetByName("FP" ).getRange('A:A'),evidence.PMID,'RefID');
    var connectivity  = output.connectivity   = sheetSamplingTool(ss.getSheetByName("Con").getRange('A:A'),evidence.PMID,'RefID');
    
    var cellTypes     = output.cellTypes      = getSheetByIdAsJSON('19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A','CellTypes').reduce(function(p,v){p[v.UID]=v; return p},{});
    if (covariates && oldSynData && synRefs && covRefs && myRefs && morphology && markers && cellEphys && firingPatterns && connectivity)
    {
      output.url = updateSynDataForm(evidence,evidenceRange,covariates,covRefs,synRefs,synapticDataSheet,rowIndex,ui,templateDataID,dSec); //Logger.log(output.url);
      output.imagesShown = [];
      output.allRefs = mergeObjs(synRefs,covRefs,myRefs,morphology,markers,cellEphys,firingPatterns,connectivity);
      SpreadsheetApp.getUi().showModalDialog(output.evaluate().setWidth(1450).setHeight(750), 
                                             'Synaptic Data Extraction Tool, DATA Format:Mean±SD|SEM [lb to ub][>lb|<ub](n=){Note:Note};...@RefID&RefID{Note:Note}, ..., Stimulation Protocol;@\d&\d{Note:Note}');
      return true;
    } else
    {
      ss.toast('Error in sheetSamplingTool');
      return null;
    }
  } else 
  {
    ss.toast('Please goto evidence tab and select all rows that describe a single piece of evidence and try again');
    return null;
  };
};
//-------Check Search Query--------------------------------------------------------------------------
function checkQuery() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var evidenceRange = getCheckActiveRange(ss.getActiveRange(),"Evidence");
  var output = HtmlService.createTemplateFromFile("checkQuery");
  if (evidenceRange) 
  {// get needed data from spreadsheets
    var evidence      = output.evidence       = getEvidenceValues(evidenceRange);  //Object.keys(evidence).forEach(function(key) {Logger.log(key+" : "+evidence[key])});
    var cellTypes     = output.cellTypes      = getSheetByIdAsJSON('19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A','CellTypes').reduce(function(p,v){p[v.UID]=v; return p},{});
    var URI           = "http://hippocampome.org/csv2db/search_engine_json.php?query_str="+
      evidence.Query.replace(/>/g,'%3E').replace(/</g,'%3C').replace(/\+/g,'%2B'); Logger.log(URI);
    var response      = String(UrlFetchApp.fetch(URI));
    var errorRegExp   = /<br>.*<br>/;
    var error         = output.error = (errorRegExp.test(response))? errorRegExp.exec(response)[0] : false;
    var fetchedConns  = output.fetchedConns   = JSON.parse(response.replace(errorRegExp,''));
    if (fetchedConns) {
      SpreadsheetApp.getUi().showModalDialog(output.evaluate().setWidth(700).setHeight(650),'Search Query Check Tool');
      return true;
    } else {
      ss.toast('Error in UrlFetchApp');
      return null;
    }
  } else {
    ss.toast('Please goto evidence tab and select all rows that describe a single piece of evidence and try again');
    return null;
  };
};
//-------Text Cleaner-------------------------------------------------------------------------------
function showTextCleaner(){
  var output = HtmlService.createTemplateFromFile("TextCleaner");
  //SpreadsheetApp.getUi().showModalDialog(output.evaluate().setWidth(1450).setHeight(750), 'Evidence');
  SpreadsheetApp.getUi().showSidebar(output.evaluate().setWidth(300).setHeight(700));
}
//-------Jump To Row--------------------------------------------------------------------------------
function jumpToRow() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ui = SpreadsheetApp.getUi();
  var row = ui.prompt('Jump to Row','Row Number?', ui.ButtonSet.OK);
  if (row.getSelectedButton() === ui.Button.OK) {
    var rowIndex =  row.getResponseText();
    if (rowIndex !== '') 
      sheet.setActiveRange(sheet.getRange(rowIndex+':'+rowIndex));
  };
};
//-------Common function ---------------------------------------------------------------------------
function getCheckActiveRange(activeRange,ActiveTabName) {
  // check the active range with the user
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert(
    ActiveTabName+':'+activeRange.getA1Notation()+'\n'+
    'Have you selected a correct range?\n'
    ,ui.ButtonSet.YES_NO);
  
  // Process the user's response.
  if (response === ui.Button.YES && ActiveTabName === activeRange.getSheet().getName()) {
    return activeRange;
  } else {
    Logger.log('response:'+response)
    Logger.log('ActiveTabName:'+ActiveTabName+'=?'+activeRange.getSheet().getName())
    return null;
  };
};
function include(filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}
//function getData(url) {
//  if (arguments.length === 1)
//  { // Load the resulting form url using
//    // (1) This Method can load the page within google sheets has problem with prefilled forms
//    var output = HtmlService.createHtmlOutput("<form action='"+url+"' method='get' id='foo'></form>"+"<script>document.getElementById('foo').submit();</script>").setWidth(1200).setHeight(750);
//    // (2) This Method cannot load the page within google sheets but works well with prefilled forms
//    //var output = HtmlService.createHtmlOutput("<a href='" +url+"' target='_blank'>Open the form in a new window</a>");
//  } else 
//  { // (3) This Method dows not work well
//    var output = HtmlService.createTemplateFromFile("Index").evaluate().setWidth(1450).setHeight(750);
//  };
//  SpreadsheetApp.getUi().showModalDialog(output, 'Evidence');
//};