/*
Notes:

Need to use .getActiveSheet() as opposed to using an index number [1] for the sheet,
because when tabs get moved around, their numbers stay the same, so it can be confusing.


Directions:

To reproduce, simply take this boilerplate, leave the Functions as in and skip down to Section 1 logic and customize
for the current project with logic for each section.

To change the number of rows to hide, simply change the number in the appropriate variable (*hidenumber). The rest will automatically update.
*/

/*------------------------------
            Functions
------------------------------*/

function onEdit(e){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var sheetname = ss.getSheetName();
    var staging = "Staging: Master QA Check-Off List";
    var rc = "RC: Master QA Check-Off List";
    
    function plusOnePopBand(x) {
      /* This is just a +1 function, but is also a reference to the iconic Christian Pop band: NSYNC... err I mean Plus One -->https://goo.gl/q29VF8 */
      return x + 1;
    };
    
    function newSection(x) {
      /* Adds rows for the spacing to be correct for automatic changing of checkbox locations */
      /* This will only be aligned correctly if there are 3 rows between each section */
      return x + 6;
    };
    
    /* This function hides and unhides the section. Parameters are x = checkrow variable, y = hidenumber variable*/
    function hideUnhide(x, y, z) {
      if (sheetname == z && e.source.getActiveCell().getColumnIndex() == 1 && e.source.getActiveCell().getRowIndex() == x && sheet.getActiveCell().getValue() == 1) {
        sheet.hideRows(plusOnePopBand(x), y);
      };
      if(sheetname == z && e.source.getActiveCell().getColumnIndex() == 1 && e.source.getActiveCell().getRowIndex() == x && sheet.getActiveCell().getValue() == "") {
        sheet.showRows(plusOnePopBand(x), y);
      }
    };
   
  /*------------------------------
             Section 1
  ------------------------------*/
    
    
  /* -------------------- Staging Tab --------------------*/
    
    /* -- How many rows to hide --*/
    var navbarhidenumber = 27;
    
    /* -- Row number for checkbox --*/
    var navbarcheckrow = 5; /* Don't change unless first checkbox moves, this sets the rest of the checkbox locations up correctly */
    
   
    hideUnhide(navbarcheckrow, navbarhidenumber, staging);
    
    
  /* ----------------------- RC Tab -----------------------*/
  
    /* -- How many rows to hide --*/
    navbarhidenumber = 27;
    
    /* -- Row number for checkbox --*/
    navbarcheckrow = 5; /* Don't change unless first checkbox moves, this sets the rest of the checkbox locations up correctly */
    
    
    hideUnhide(navbarcheckrow, navbarhidenumber, rc);
  
  
}