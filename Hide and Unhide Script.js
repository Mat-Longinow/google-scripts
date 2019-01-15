/*
Notes:
Need to use .getActiveSheet() as opposed to using an index number [1] for the sheet,
because when tabs get moved around, their numbers stay the same, so it can be confusing.

To change the number of rows to hide, simply change the number in the appropriate variable (*hidenumber). The rest will automatically update.
*/

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
         Builder Top NavBar
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
  
  
  /*------------------------------
           Design Settings
  ------------------------------*/
  
  /* -------------------- Staging Tab --------------------*/
    
    /* -- How many rows to hide --*/
    var styleshidenumber = 65;
    var backgroundhidenumber = 69;
    
    /* -- Row number for checkbox --*/
    var stylescheckrow = newSection(navbarcheckrow + navbarhidenumber);
    var backgroundcheckrow = plusOnePopBand(stylescheckrow + styleshidenumber);
  
   
    hideUnhide(stylescheckrow, styleshidenumber, staging);
    hideUnhide(backgroundcheckrow, backgroundhidenumber, staging);
  
  
  /* ----------------------- RC Tab -----------------------*/
  
    /* -- How many rows to hide --*/
    styleshidenumber = 65;
    backgroundhidenumber = 68;
    
    /* -- Row number for checkbox --*/
    stylescheckrow = newSection(navbarcheckrow + navbarhidenumber);
    backgroundcheckrow = plusOnePopBand(stylescheckrow + styleshidenumber);
  
   
    hideUnhide(stylescheckrow, styleshidenumber, rc);
    hideUnhide(backgroundcheckrow, backgroundhidenumber, rc);
    
    
  /*------------------------------
         Confirmation Page
  ------------------------------*/
  
  /* -------------------- Staging Tab --------------------*/
    
    /* -- How many rows to hide --*/
    var popuphidenumber = 25;
    var confmainhidenumber = 29;
    
    /* -- Row number for checkbox --*/
    var popupcheckrow = newSection(backgroundcheckrow + backgroundhidenumber);
    var confmaincheckrow = plusOnePopBand(popupcheckrow + popuphidenumber);
  
    
    hideUnhide(popupcheckrow, popuphidenumber, staging);
    hideUnhide(confmaincheckrow, confmainhidenumber, staging);
    
  
  /* ----------------------- RC Tab -----------------------*/
     
    /* -- How many rows to hide --*/
    popuphidenumber = 24;
    confmainhidenumber = 29;
    
    /* -- Row number for checkbox --*/
    popupcheckrow = newSection(backgroundcheckrow + backgroundhidenumber);
    confmaincheckrow = plusOnePopBand(popupcheckrow + popuphidenumber);
  
    
    hideUnhide(popupcheckrow, popuphidenumber, rc);
    hideUnhide(confmaincheckrow, confmainhidenumber, rc);
    
  
  /*------------------------------
            Emails Page
  ------------------------------*/
  
  /* -------------------- Staging Tab --------------------*/
    
    /* -- How many rows to hide --*/
    var confhidenumber = 16;
    var waithidenumber = 13;
    var paysuccesshidenumber = 13;
    var payfailhidenumber = 12;
    
    /* -- Row number for checkbox --*/
    var confcheckrow = newSection(confmaincheckrow + confmainhidenumber);
    var waitcheckrow = plusOnePopBand(confcheckrow + confhidenumber);
    var paysuccesscheckrow = plusOnePopBand(waitcheckrow + waithidenumber);
    var payfailcheckrow = plusOnePopBand(paysuccesscheckrow + paysuccesshidenumber);  
  
    
    hideUnhide(confcheckrow, confhidenumber, staging);
    hideUnhide(waitcheckrow, waithidenumber, staging);
    hideUnhide(paysuccesscheckrow, paysuccesshidenumber, staging);
    hideUnhide(payfailcheckrow, payfailhidenumber, staging);
    
  
  /* ----------------------- RC Tab -----------------------*/
    
    /* -- How many rows to hide --*/
    confhidenumber = 16;
    waithidenumber = 13;
    paysuccesshidenumber = 13;
    payfailhidenumber = 12;
    
    /* -- Row number for checkbox --*/
    var confcheckrow = newSection(confmaincheckrow + confmainhidenumber);
    var waitcheckrow = plusOnePopBand(confcheckrow + confhidenumber);
    var paysuccesscheckrow = plusOnePopBand(waitcheckrow + waithidenumber);
    var payfailcheckrow = plusOnePopBand(paysuccesscheckrow + paysuccesshidenumber);  
  
    
    hideUnhide(confcheckrow, confhidenumber, rc);
    hideUnhide(waitcheckrow, waithidenumber, rc);
    hideUnhide(paysuccesscheckrow, paysuccesshidenumber, rc);
    hideUnhide(payfailcheckrow, payfailhidenumber, rc);
    
  
  /*------------------------------
           Promote Page
  ------------------------------*/
  
  /* -------------------- Staging Tab --------------------*/
    
    /* -- How many rows to hide --*/
    var smediahidenumber = 33;
    var sproofhidenumber = 13;
    var ambassadorhidenumber = 83;
    
    /* -- Row number for checkbox --*/
    var smediacheckrow = newSection(payfailcheckrow + payfailhidenumber);
    var sproofcheckrow = plusOnePopBand(smediacheckrow + smediahidenumber);
    var ambassadorcheckrow = plusOnePopBand(sproofcheckrow + sproofhidenumber);  
    
    
    hideUnhide(smediacheckrow, smediahidenumber, staging);
    hideUnhide(sproofcheckrow, sproofhidenumber, staging);
    hideUnhide(ambassadorcheckrow, ambassadorhidenumber, staging);
    
  
  /* ----------------------- RC Tab -----------------------*/
     
    /* -- How many rows to hide --*/
    smediahidenumber = 33;
    sproofhidenumber = 13;
    ambassadorhidenumber = 83;
    
    /* -- Row number for checkbox --*/
    smediacheckrow = newSection(payfailcheckrow + payfailhidenumber);
    sproofcheckrow = plusOnePopBand(smediacheckrow + smediahidenumber);
    ambassadorcheckrow = plusOnePopBand(sproofcheckrow + sproofhidenumber);  
    
    
    hideUnhide(smediacheckrow, smediahidenumber, rc);
    hideUnhide(sproofcheckrow, sproofhidenumber, rc);
    hideUnhide(ambassadorcheckrow, ambassadorhidenumber, rc);
    
  
  /*------------------------------
            Onsite Page
  ------------------------------*/
  
  /* -------------------- Staging Tab --------------------*/
    
    /* -- How many rows to hide --*/
    var checkinhidenumber = 85;
    var onsitehidenumber = 35;
    var ticketscanhidenumber = 74;
    var boxofficehidenumber = 1;
    var hardstockhidenumber = 1;
    var texthidenumber = 1;
    var bibshidenumber = 1;
    
    /* -- Row number for checkbox --*/
    var checkincheckrow = newSection(ambassadorcheckrow + ambassadorhidenumber);
    var onsitecheckrow = plusOnePopBand(checkincheckrow + checkinhidenumber);
    var ticketscancheckrow = plusOnePopBand(onsitecheckrow + onsitehidenumber);
    var boxofficecheckrow = plusOnePopBand(ticketscancheckrow + ticketscanhidenumber);
    var hardstockcheckrow = plusOnePopBand(boxofficecheckrow + boxofficehidenumber);
    var textcheckrow = plusOnePopBand(hardstockcheckrow + hardstockhidenumber);
    var bibscheckrow = plusOnePopBand(textcheckrow + texthidenumber);
    
    
    hideUnhide(checkincheckrow, checkinhidenumber, staging);
    hideUnhide(onsitecheckrow, onsitehidenumber, staging);
    hideUnhide(ticketscancheckrow, ticketscanhidenumber, staging);
    hideUnhide(boxofficecheckrow, boxofficehidenumber, staging);
    hideUnhide(hardstockcheckrow, hardstockhidenumber, staging);
    hideUnhide(textcheckrow, texthidenumber, staging);
    hideUnhide(bibscheckrow, bibshidenumber, staging);
  
  
  /* ----------------------- RC Tab -----------------------*/
    
    /* -- How many rows to hide --*/
    checkinhidenumber = 85;
    onsitehidenumber = 35;
    ticketscanhidenumber = 74;
    boxofficehidenumber = 1;
    hardstockhidenumber = 1;
    texthidenumber = 1;
    bibshidenumber = 1;
    
    /* -- Row number for checkbox --*/
    checkincheckrow = newSection(ambassadorcheckrow + ambassadorhidenumber);
    onsitecheckrow = plusOnePopBand(checkincheckrow + checkinhidenumber);
    ticketscancheckrow = plusOnePopBand(onsitecheckrow + onsitehidenumber);
    boxofficecheckrow = plusOnePopBand(ticketscancheckrow + ticketscanhidenumber);
    hardstockcheckrow = plusOnePopBand(boxofficecheckrow + boxofficehidenumber);
    textcheckrow = plusOnePopBand(hardstockcheckrow + hardstockhidenumber);
    bibscheckrow = plusOnePopBand(textcheckrow + texthidenumber);
    
    
    hideUnhide(checkincheckrow, checkinhidenumber, rc);
    hideUnhide(onsitecheckrow, onsitehidenumber, rc);
    hideUnhide(ticketscancheckrow, ticketscanhidenumber, rc);
    hideUnhide(boxofficecheckrow, boxofficehidenumber, rc);
    hideUnhide(hardstockcheckrow, hardstockhidenumber, rc);
    hideUnhide(textcheckrow, texthidenumber, rc);
    hideUnhide(bibscheckrow, bibshidenumber, rc);
  
  
  /*------------------------------
          Settings Page
  ------------------------------*/
  
  /* -------------------- Staging Tab --------------------*/
    
    /* -- How many rows to hide --*/
    var basichidenumber = 18;
    var dateshidenumber = 19;
    var restricthidenumber = 15;
    var multireghidenumber = 23;
    var trackinghidenumber = 66;
    var regpermhidenumber = 54;
    
    /* -- Row number for checkbox --*/
    var basiccheckrow = newSection(bibscheckrow + bibshidenumber);
    var datescheckrow = plusOnePopBand(basiccheckrow + basichidenumber);
    var restrictcheckrow = plusOnePopBand(datescheckrow + dateshidenumber);
    var multiregcheckrow = plusOnePopBand(restrictcheckrow + restricthidenumber);
    var trackingcheckrow = plusOnePopBand(multiregcheckrow + multireghidenumber);
    var regpermcheckrow = plusOnePopBand(trackingcheckrow + trackinghidenumber);
    
    
    hideUnhide(basiccheckrow, basichidenumber, staging);
    hideUnhide(datescheckrow, dateshidenumber, staging);
    hideUnhide(restrictcheckrow, restricthidenumber, staging);
    hideUnhide(multiregcheckrow, multireghidenumber, staging);
    hideUnhide(trackingcheckrow, trackinghidenumber, staging);
    hideUnhide(regpermcheckrow, regpermhidenumber, staging);
    
  
  /* ----------------------- RC Tab -----------------------*/
    
    /* -- How many rows to hide --*/
    basichidenumber = 18;
    dateshidenumber = 19;
    restricthidenumber = 15;
    multireghidenumber = 23;
    trackinghidenumber = 66;
    regpermhidenumber = 54;
    
    /* -- Row number for checkbox --*/
    basiccheckrow = newSection(bibscheckrow + bibshidenumber);
    datescheckrow = plusOnePopBand(basiccheckrow + basichidenumber);
    restrictcheckrow = plusOnePopBand(datescheckrow + dateshidenumber);
    multiregcheckrow = plusOnePopBand(restrictcheckrow + restricthidenumber);
    trackingcheckrow = plusOnePopBand(multiregcheckrow + multireghidenumber);
    regpermcheckrow = plusOnePopBand(trackingcheckrow + trackinghidenumber);
    
    
    hideUnhide(basiccheckrow, basichidenumber, rc);
    hideUnhide(datescheckrow, dateshidenumber, rc);
    hideUnhide(restrictcheckrow, restricthidenumber, rc);
    hideUnhide(multiregcheckrow, multireghidenumber, rc);
    hideUnhide(trackingcheckrow, trackinghidenumber, rc);
    hideUnhide(regpermcheckrow, regpermhidenumber, rc);
    
  
  }