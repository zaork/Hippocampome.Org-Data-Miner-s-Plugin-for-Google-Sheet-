function getTheLastFormResponse(){
  //https://docs.google.com/spreadsheets/d/19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A/edit?usp=sharing
  var form  = FormApp.openById('1L42oPGtpodgmw48FMs1DVdpgmLB9ISEMFZ-DuOu4HIc');
  var formResponses = form.getResponses();
  var formResponse = formResponses[formResponses.length-1];
  
  var ss = SpreadsheetApp.openById('19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A');
  var dataSheet         = ss.getSheetByName('Da');
  var morphologySheet   = ss.getSheetByName('Mo');
  var markersSheet      = ss.getSheetByName('Ma');
  var cellEphysSheet    = ss.getSheetByName('CE');
  var FPSheet           = ss.getSheetByName('FP');
  var connectivitySheet = ss.getSheetByName('Con');
  var covSheet          = ss.getSheetByName('Cov');
  var evidenceSheet     = ss.getSheetByName('Evidence');
  
  var aRNumInFormRes = formResponse.getItemResponses().length - 3; //item number 3 from the end of the form
  
  var aR = (arguments.length === 0) ? ss.getSheetByName('Evidence').getRange(         formResponse.getItemResponses()[aRNumInFormRes].getResponse())//getCheckActiveRange(ss.getSheetByName('Evidence').getActiveRange(),'Evidence') 
                                    : ss.getSheetByName('Evidence').getRange(arguments[0].response.getItemResponses()[aRNumInFormRes].getResponse());
  if (aR) {
    try {
      var eColumnObj = evidenceSheet.getRange('1:1').getValues().reduce(to1D).reduce(function(p,v,i){p[v]=i+1; return p},{});
      var evidence = getEvidenceValues(aR);
      var covariatesSheet   = ss.getSheetByName('Covariates');
      var covariatesColumnObj = covariatesSheet.getRange('1:1').getValues().reduce(to1D).reduce(function(p,v,i){p[v]=i+1; return p},{});
      var PMIDs = covariatesSheet.getRange(1, covariatesColumnObj.PMID, covariatesSheet.getLastRow()).getValues().reduce(to1D).map(Number);
      var row = String(PMIDs.indexOf(Number(evidence.PMID))+1);
      var covariatesRange = covariatesSheet.getRange(row+':'+row);
      var covariates = sheetSamplingTool(ss.getSheetByName("Covariates").getRange('A:A'),evidence.PMID);
      
      //ID:277511854	Type:TEXT	Title:Pubmed ID
      //ID:1965398313	Type:PARAGRAPH_TEXT	Title:Evidence ID
      var IE = new referenceIE(form,formResponse,evidence,'277511854','1965398313');
      saveSingleColumnRange(aR,eColumnObj.PMID,IE.getResponse('277511854')+';');
      saveSingleColumnRange(aR,eColumnObj.eID,IE.getResponse('1965398313'));
      
      //----------------------Experiment Description--------------------------------------------------------
      //ID:1109441292	Type:PARAGRAPH_TEXT	Title:Experiment Description
      saveSingleColumnRange(aR,eColumnObj.Description,IE.getResponse('1109441292'));
      
      //ID:1093425014	Type:CHECKBOX	Title:GABA or Glutamate receptors (ant)agonists
      (function(response,choises){
        saveSingleColumnRange(aR,eColumnObj.Drugs,response.join(', '));
        var newChoise = response.filter(function(res){return choises.indexOf(res) === -1});
        if (newChoise.length !== 0)
          saveSingleColumnRange(covariatesRange,covariatesColumnObj.DrugsGABAGlutamate,
                                covariates.DrugsGABAGlutamate.split(/\s*[,;]+\s*/g).concat(newChoise).filter(Null).filter(onlyUnique).join(', '));
      }(IE.getResponse('1093425014').filter(Null).filter(onlyUnique),
        form.getItemById('1093425014').asCheckboxItem().getChoices().map(function(choice){return choice.getValue().split(/ *[,;] */)}).reduce(to1D).filter(Null)));
           
      //ID:530154900	Type:TEXT	Title:Holding Potential or Steady State Membrane Potential (mV)
      (function(response){
        var addRegEx = /^\s*add:\((.+?)\)$/i;
        var replaceRegEx = /^\s*replace:\((.+?)\s*,\s*(.+?)\)$/i;
        if (addRegEx.test(response)) {
          var [match, itemToBeAdded] = addRegEx.exec(response)
          saveSingleColumnRange(covariatesRange, covariatesColumnObj.PostsynVm,
                                (String(covariates.PostsynVm).split(/ *, */g).concat(itemToBeAdded).filter(Null).filter(onlyUnique).join(', ')));
        } else if (replaceRegEx.test(response)) {
          var [match, itemToBeDeleted, itemToBeAdded] = replaceRegEx.exec(response);
          saveSingleColumnRange(covariatesRange, covariatesColumnObj.PostsynVm,
                                (String(covariates.PostsynVm)
                                 .split(/ *, */g)
                                 .filter(function(item){return item !== itemToBeDeleted})
                                 .concat(itemToBeAdded)
                                 .filter(Null).filter(onlyUnique).join(', ')));
        }
        saveSingleColumnRange(aR, eColumnObj.RMPorVh, (itemToBeAdded)? itemToBeAdded : response.split(/ *, */g).filter(Null).join(', '));
      }(IE.getResponse('530154900')));

      //Extracellular Solutions
      (function(responses,choises) {//Logger.log(response)
        saveSingleColumnRange(aR,eColumnObj.ExtracellularSolution,responses.filter(Null).filter(onlyUnique).join('; '));
        var newChoise = responses.filter(function(res){return choises.indexOf(res) === -1});
        newChoise.forEach(function(response){
          if (typeof response === 'string' && response.length !== 0)
            if (/^Pipette/i.test(response)) {
              saveSingleColumnRange(covariatesRange,covariatesColumnObj.ExtracellularPipetteSolution,
                                    (String(covariates.ExtracellularPipetteSolution))
                                    .split(/\s*\;+\s*/g).concat(response.replace(/^Pipette[\s@:]*/ig,'')).filter(Null).filter(onlyUnique).join('; '))
            } else {
              saveSingleColumnRange(covariatesRange,covariatesColumnObj.ExtracellularBathSolution,
                                    (String(covariates.ExtracellularBathSolution))
                                    .split(/\s*\;+\s*/g).concat(response.replace(/^Bath[\s@:]*/ig,'')).filter(Null).filter(onlyUnique).join('; '))
            }
        })}(IE.getResponse('2058479121'),
        form.getItemById('2058479121').asCheckboxItem().getChoices().map(function(choice){return choice.getValue()})));
      
      //Intracellular Solutions
      (function (responses,choises) {
        saveSingleColumnRange(aR,eColumnObj.IntracellularSolution,responses.filter(Null).filter(onlyUnique).join('; '));
        var newChoise = responses.filter(function(res){return choises.indexOf(res) === -1});
        newChoise.forEach(function(response){
          if (typeof response === 'string' && response.length !== 0)
            saveSingleColumnRange(covariatesRange,covariatesColumnObj.IntracellularPipetteSolution,
                                  (String(covariates.IntracellularPipetteSolution))
                                  .split(/\s*\;+\s*/g).concat(response).filter(Null).filter(onlyUnique).join('; '));
        })}(IE.getResponse('1364258333'),
        form.getItemById('1364258333').asCheckboxItem().getChoices().map(function(choice){return choice.getValue()})));
      
      //ID:701084432	Type:CHECKBOX	Title:Recorded Signal Type
      saveSingleColumnRange(aR,eColumnObj.dSec, IE.getResponse('701084432').join(', '));
      
      //ID:1673109528	Type:TEXT	Title:Experimental Reversal Potential (mV)
      saveSingleColumnRange(aR,eColumnObj.ErevAuthors,IE.getResponse('1673109528').replace(/ *, */g,','));
//      saveSingleColumnRange(covariatesRange,covariatesColumnObj.SynReversalPotential,    
//                            unique((String(covariatesRange.getCell(1, covariatesColumnObj.SynReversalPotential).getValue()) + ',' + IE.getResponse('1673109528'))
//                                   .split(/ *, */g)
//                                   .filter(Null))
//                            .join(', '));
      //ID:691790082	Type:TEXT	Title:Calculated Reversal Potential (mV)
      saveSingleColumnRange(aR,eColumnObj.ErevCalculated,IE.getResponse('691790082'));
      //ID:375915292	Type:LIST	Title:Based on Microscopy Evidence Synapses are
      saveSingleColumnRange(aR,eColumnObj.MicroscopyCType,IE.getResponse('375915292'));
      //ID:1672352722	Type:LIST	Title:Based on Electrophysiology Evidence Synapses are
      saveSingleColumnRange(aR,eColumnObj.ePhysCType,IE.getResponse('1672352722'));
      //ID:560176783	Type:TEXT	Title:Connectivity Ratios
      saveSingleColumnRange(aR,eColumnObj.ConRatios,IE.getResponse('560176783'));
      //ID:156587527	Type:TEXT	Title:Cell Type Ratios
      saveSingleColumnRange(aR,eColumnObj.CellRatios,IE.getResponse('156587527'));
      //ID:85038446	Type:PARAGRAPH_TEXT	Title:Notes
      saveSingleColumnRange(aR,eColumnObj.Notes,IE.getResponse('85038446'));
      
      ////----------------------Conclusion-----------------------------------------------------------------------
      
      //ID:1813531463	Type:MULTIPLE_CHOICE	Title:Interpretation
      saveSingleColumnRange(aR, eColumnObj.Interpretation, String(IE.getResponse('1813531463')));
      //ID:943235084	Type:PARAGRAPH_TEXT	Title:Mapping Assumptions
      saveSingleColumnRange(aR,eColumnObj.Assumptions,IE.getResponse('943235084'));
      //ID:1114795606	Type:PARAGRAPH_TEXT	Title:Presynaptic Search Query
      //ID:877026955	Type:PARAGRAPH_TEXT	Title:Postsynaptic Search Query
      var searchQuery = 'Connection:(Presynaptic:('+IE.getResponse('1114795606')+'), Postsynaptic:('+IE.getResponse('877026955')+'))';
      saveSingleColumnRange(aR,eColumnObj.Automation,(searchQuery === 'Connection:(Presynaptic:(), Postsynaptic:())')? '' : searchQuery.replace(/\s{2,}/g,' '));
      //ID:812232442	Type:GRID	Title:Connections List
      saveSingleColumnRange(aR,eColumnObj.Confidence,IE.getResponse('812232442'));
      
      //----------------------Morphology ------------------------------------------------------------------
      //ID:2122294445	Type:PARAGRAPH_TEXT	Title:Presynaptic  RefIDs
      //ID:83198848	    Type:PARAGRAPH_TEXT	Title:Postsynaptic RefIDs
      saveSingleColumnRange(aR,eColumnObj.Morphology,IE.getPrePostResponse('2122294445','83198848'));
      /*
      //ID:512288845	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('512288845',morphologySheet);
      //ID:578591438	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('578591438',morphologySheet);
      //ID:1399359107	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1399359107',morphologySheet);
      //ID:212382436	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('212382436',morphologySheet);
      //ID:776106632	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('776106632',morphologySheet);
      //ID:1169888085	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1169888085',morphologySheet);
      //ID:2018280377	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('2018280377',morphologySheet);
      //ID:475478390	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('475478390',morphologySheet);
      */
      //----------------------Biomarkers---------------------------------------------------------------------
      //ID:908652486	Type:PARAGRAPH_TEXT	Title:Presynaptic
      //ID:1478469428	Type:PARAGRAPH_TEXT	Title:Postsynaptic
      saveSingleColumnRange(aR,eColumnObj.Markers,IE.getPrePostResponse('908652486','1478469428'));
      /*
      //ID:419507241	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('419507241',markersSheet);
      //ID:1096376200	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1096376200',markersSheet);
      //ID:862580482	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('862580482',markersSheet);
      //ID:1464604105	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1464604105',markersSheet);
      */
      //----------------------Cell Electrophysiology----------------------------------------------------------
      //ID:503459476	Type:PARAGRAPH_TEXT	Title:Presynaptic
      //ID:628210084	Type:PARAGRAPH_TEXT	Title:Postsynaptic
      saveSingleColumnRange(aR,eColumnObj.CellEphys,IE.getPrePostResponse('503459476','628210084'));
      /*
      //ID:1907148981	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1907148981',cellEphysSheet);
      //ID:1772984287	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1772984287',cellEphysSheet);
      */
      //----------------------Firing Patterns------------------------------------------------------------------
      //ID:126071277	Type:PARAGRAPH_TEXT	Title:Presynaptic
      //ID:2058029950	Type:PARAGRAPH_TEXT	Title:Postsynaptic
      saveSingleColumnRange(aR,eColumnObj.FiringPatterns,IE.getPrePostResponse('126071277','2058029950'));
      /*
      //ID:1602622469	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1602622469',FPSheet);
      //ID:961807150	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('961807150',FPSheet);
      */
      //----------------------Covariates-----------------------------------------------------------------------
      
      //ID:1693269062	Type:PARAGRAPH_TEXT	Title:Reference IDs
      saveSingleColumnRange(aR, eColumnObj.Covariates, sortIDsAsSSV(IE.getResponse('1693269062')));
      /*
      //ID:1020355522	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1020355522',covSheet);
      //ID:756698613	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('756698613',covSheet);
      //ID:62357583	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('62357583',covSheet);
      //ID:1968268392	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1968268392',covSheet);
      */
      //----------------------Connection Probability and Cell Type Ratios---------------------------------------
      
      //ID:1015974164	Type:PARAGRAPH_TEXT	Title:Presynaptic
      //ID:17441795	Type:PARAGRAPH_TEXT	Title:Postsynaptic
      saveSingleColumnRange(aR,eColumnObj.Connectivity,IE.getPrePostResponse('1015974164','17441795'));
      /*
      //ID:976435207	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('976435207',connectivitySheet);
      //ID:1313946887	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1313946887',connectivitySheet);
      */
      ////----------------------Synaptic Data--------------------------------------------------------------------
      
      //ID:977930606	Type:PARAGRAPH_TEXT	Title:Data Location
      saveSingleColumnRange(aR,eColumnObj.DataLocation,IE.getResponse('977930606'));
      
      //ID:375531957	Type:GRID	        Title:Available Data
      var AvailableData = IE.getResponse('375531957');
      saveSingleColumnRange(aR,eColumnObj.Amplitude    ,(AvailableData[0] === 'Yes')? 1 : '');
      saveSingleColumnRange(aR,eColumnObj.Kinetics     ,(AvailableData[1] === 'Yes')? 1 : '');
      saveSingleColumnRange(aR,eColumnObj.ST_Plasticity,(AvailableData[2] === 'Yes')? 1 : '');
      saveSingleColumnRange(aR,eColumnObj.LT_Plasticity,(AvailableData[3] === 'Yes')? 1 : '');
      
      //ID:126234543	Type:PARAGRAPH_TEXT	Title:Reference IDs
      saveSingleColumnRange(aR,eColumnObj.Data,sortIDsAsSSV(IE.getResponse('126234543')));
      /*
      //ID:1521510351	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1521510351',dataSheet);
      //ID:969214020	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('969214020',dataSheet);
      //ID:2002575438	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('2002575438',dataSheet);
      //ID:1491649044	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1491649044',dataSheet);
      //ID:298206074	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('298206074',dataSheet);
      //ID:1282244123	Type:PARAGRAPH_TEXT	Title:New
      IE.saveReference('1282244123',dataSheet);
      */
      ////----------------------END------------------------------------------------------------------------------
    } catch(err) {
      saveSingleColumnRange(aR,eColumnObj.eID,'Error:'+err.message);
    };
  } else {
    ss.toast('Please goto evidence tab and select all rows that describe a single piece of evidence and try again');
  };
};
function saveSingleColumnRange(aR,columnNum,res)
{
  if (Array.isArray(res)) {
    if (res.length !== 0)
    aR.getSheet().getRange(aR.getRow(), columnNum, aR.getNumRows(), 1).setValues(
      res.reduce(
        function(p,v,i){
          p[i] = [v]; return p},[]));
  } else {
    aR.getSheet().getRange(aR.getRow(), columnNum, aR.getNumRows(), 1).setValue(
      (typeof res === 'string') ? res.replace(/^\s+/g,'')
      .replace(/(?:\<br>|\s\t)*[\r\n]+(?:\<br>|\s\t)*/g,'<br>')
      .replace(/[\s\t]{2,}/g,' ') : res);
  }
};

var referenceIE = function(form,formResponse,evidence,PMIDresItemID,evidenceID) {
  this.form = form;
  this.formResponse = formResponse;
  this.evidence = evidence;
  this.getResponse = function(itemID) {
    var Item = this.form.getItemById(itemID);
    var fFes = this.formResponse.getResponseForItem(Item);
    var res = fFes ? fFes.getResponse() : [];
    return res ? res : '';
  };
  
  this.getPrePostResponse = function(preItemID,postItemID) {
    var pre = sortIDsAsSSV(this.getResponse(preItemID));
    var post = sortIDsAsSSV(this.getResponse(postItemID));
    var res = 'Presynaptic:'+pre+', Postsynaptic:'+post;
    return (res === 'Presynaptic:, Postsynaptic:')? '' : res;
  };
  
  this.responsePMID = this.getResponse(PMIDresItemID);
  this.evidencePMID = this.evidence.PMID;
  this.responseeID  = this.getResponse(evidenceID);
  this.evidenceeID  = this.evidence.eID;
  
  if (this.responsePMID != this.evidencePMID)
    Logger.log('Evidence PMID: '+this.evidencePMID+' is different from\n' +
               'Response PMID: '+this.responsePMID);
  
  if (this.responseeID != this.evidenceeID)
    Logger.log('Evidence eID: '+this.evidenceeID+' is different from\n' +
               'Response eID: '+this.responseeID);
  
  this.saveReference = function(itemID,sheet) {//Logger.log(this.responsePMID == this.evidencePMID && this.responseeID == this.evidenceeID)
    if (this.responsePMID == this.evidencePMID && this.responseeID == this.evidenceeID) {
      var res = this.getResponse(itemID);
      var newRef = [this.responsePMID].concat(res.split('@'));
      // res is an array object but when I pop() the 1st element if the rest of element were empty the type changes to string!!!!
      if (res.replace(/\d+/g,"") === "@@@@" || res === '') {
        // the empty response do nothing, no need to send an error
      } else if (newRef.length === 6)
      {//morphologySheet.getRange(row, column, numRows, numColumns)
        if (newRef[2].toUpperCase() === 'POST') {
          newRef[2] = this.evidence.tUID.reduce(function(p,UID){return p + String(UID) + ';'},'');
        } else if (newRef[2].toUpperCase() === 'PRE') {
          newRef[2] = this.evidence.sUID.reduce(function(p,UID){return p + String(UID) + ';'},'');
        } else if (newRef[2].toUpperCase() === 'PRE|POST') {
          newRef[2] = mergeArrays(this.evidence.sUID,this.evidence.tUID).reduce(function(p,UID){return p + String(UID) + ';'},'');
        } else if (newRef[2].toUpperCase() === 'PRE>POST') {
          newRef[2] = this.evidence.PConnections.reduce(function(p,UID){return p + String(UID) + ';'},'');
        } else {
          newRef[2] = newRef[2].replace(/\>/g,'▶').replace(/\</g,'◀');
        };
        
        if (typeof newRef[4] === 'string') 
          if (newRef[4].match(";"))
            newRef[4] = unique(newRef[4].split(/\s*;\s*/g).filter(Null).sort()).join(';');
        
        if (typeof newRef[5] === 'string') 
          newRef[5] = newRef[5].replace(/(?:\<br>|\s\t)*[\r\n]+(?:\<br>|\s\t)*/g,'<br>').replace(/[\s\t]{2,}/g,' '); //fix <br>\n 
        
        sheet.getRange(sheet.getLastRow()+1, 1, 1, 6).setValues([newRef]);
      } else {
        SpreadsheetApp.getUi().alert('A new RefID for '+sheet.getName()+' did not have a correct structure\n'+
                                      JSON.stringify(newRef));
      };
    };
  };
};
