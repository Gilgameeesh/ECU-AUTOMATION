#target photoshop

app.bringToFront();


function main() {
    var p = new Object();
    var xRay = new Array();
    p.src = File($.fileName).path;
    var src = Folder.selectDialog('open x-rays', Folder(p.src));
    p.src = src;
    var xArray = getFiles(p.src);
    if (xArray.length){
        if (xArray.length > 7) {
            if(isWindows()) { var fMask =  '*.jpeg; *.jpg';}
            if(isMac()) { var fMask = function(file){file.name.match(/\.(?:tiff|tif)$/i);}}
            alert("folder has over 7 images, ctrl +click xrays on next window", 'select again')
            var x = Folder (src);
            var xOa = x.openDlg("xrays", "x-rays: " + fMask, true);
            p.xOb = true;
        }
    else {
		if (xArray.length <= 7) { p.xSb = true;}
	}
    }
    if (p.xOb){ var xOb = true; } else { var xOb = false;}
    if (p.xSb){ var xSb = true; } else { var xSb = false;}
    switch(true){
        case xOb:
            xRay = xOa;
            importRays (xRay, p);
            break;
        case xSb:
            xRay = xArray;
            importRays (xRay, p);
            break;
        default:
        alert("fail", 'failure');
        }
}

function isMac(){
    if ($.os.search(/macintosh/i) != -1 ) {
        return true;
        } else {
            return false;
            }
        };
    
function isWindows() {
    if ($.os.search(/windows/i) != -1) {
        return true;
        } else {
            return false;
            }
        };

function getFiles(src) {
	var xArray = new Array();
	var eX = /\.(?:jpg|jpeg)$/i;
	var docs = src.getFiles();
	var len = docs.length;
	for (var i = 0; i < len; i++) {
		var doc = docs[i];
		if (doc instanceof File) {
			var docName = doc.name;
			if (docName.match(eX)) {
				xArray.push(doc);
			}
		}
	}
	return xArray;
}

function importRays(xRay, p) {  
    var newDoc = documents.add(500, 500, 72,  'SRC rays', NewDocumentMode.RGB, DocumentFill.TRANSPARENT, 1);
    var newLayer = newDoc.activeLayer;
    var str = new Array();
           str[0] = /5/g;
           str[1] = /6/g;
           str[2] = /7/g;
           str[3] = /8/g;
           str[4] = /9/g;
           str[5] = /10/g;
           str[6] = /11/g;
    var layNam = new Array();
           layNam[0] = "11";
           layNam[1] = "10";
           layNam[2] = "9";
           layNam[3] = "8";
           layNam[4] = "7";
           layNam[5] = "6";
           layNam[6] = "5";
    for (var i = 0; i < xRay.length; i++) {
        var doc = open(xRay[i]);
        var name = doc.name;
        // obsolete
        //name = name.replace(/(?:\.[^.]*$|$)/, '');
        //name = name.replace(/\D*/ig, '');
        var n = 0
        for (var k = 0; k < str.length; k++) {
            var result = name.search(str[n]);
            if (result != -1){ var h = n};
            n++;
            }
        doc.changeMode(ChangeMode.RGB);
        doc.bitsPerChannel = BitsPerChannelType.EIGHT;
        doc.artLayers.add();
        doc.mergeVisibleLayers();
        var layer = doc.activeLayer;
        layer.name = layNam[h];
        layer.duplicate(newDoc, ElementPlacement.PLACEATBEGINNING);
        doc.close(SaveOptions.DONOTSAVECHANGES);
        }
     newLayer.remove();
     newDoc.revealAll();
     }
   
function ord(xRay) {
    var layers = activeDocument.layers;
    var xOd = new Array();
    var len = layers.length;
    for (var i = 0; i < len; i++){
        xOd.push(layers[i].name);
        }
    xOd.sort(function (a,b) {return a - b});
    xOd.reverse();
    var j = 1;
    var k = 0;
    function makeActiveLayerByName( lyrname ){
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putName( charIDToTypeID( "Lyr " ), lyrname );
    desc.putReference( charIDToTypeID( "null" ), ref );
    desc.putBoolean( charIDToTypeID( "MkVs" ), false );
    executeAction( charIDToTypeID( "slct" ), desc, DialogModes.NO );
    return app.activeDocument.activeLayer;
    }
    for (i = 0; i < len-1; i ++){
        var xR = makeActiveLayerByName( xOd[j]);
        var xS = activeDocument.layers.getByName(xOd[k]);
        activeDocument.activeLayer.move(xS, ElementPlacement.PLACEBEFORE);
        j ++;
        k ++;
    }
}
 
 function box() {
    var docAct = app.activeDocument ;
    docAct.artLayers.add();
    var fillColor = new SolidColor();
    fillColor.rgb.red = 0;
    fillColor.rgb.green = 0;
    fillColor.rgb.blue = 0;
    var bordColor = new SolidColor();
    bordColor.rgb.red = 53;
    bordColor.rgb.green = 76;
    bordColor.rgb.blue = 161;
    docAct.activeLayer.name = ( "Box" );
    selectRegion = Array(
                        Array(10,10),
                        Array(10, 466),
                        Array(644, 466),
                        Array(644, 10)
                        );
    var docSel = docAct.selection
    docSel.select(selectRegion);
    docSel.fill(bordColor);
    docSel.contract (2);
    docSel.clear();
    docAct.artLayers.add();
    docSel.fill(fillColor);
    docAct.activeLayer.fillOpacity = 50;
    docSel.deselect();
    docAct.activeLayer.merge();
    }

function dupBoxs() {
    var layers = activeDocument.layers;
    var len = layers.length;
    var boxOrd = new Array();
    for (var i = 0; i < len; i++){
        boxOrd.push(layers[i].name);
        }    
    var k = 2;
    for (i = 0; i < boxOrd.length-2; i++){
        activeDocument.activeLayer.duplicate(layers.getByName (boxOrd[k]), ElementPlacement.PLACEBEFORE);
        k++
        }
    }

function laySets() {
    var setNam = new Array();
    setNam[0] = "80-100";
    setNam[1] = "70-90";
    setNam[2] = "60-80";
    setNam[3] = "50-70";
    setNam[4] = "40-60";
    var j = 0
    for (var i = 0; i < setNam.length; i++){
    var setRef = app.activeDocument.layerSets.add();
    setRef.name = setNam[j];
        for (var k = 1; k < 3; k++){
        var layRef = setRef.artLayers.add();
        layRef.name = setNam[j] + " Ln" + [k];
        }
    j++
    }
    var setRef = app.activeDocument.layerSets.add();
    setRef.name = "Intersections";
    var layRef = setRef.artLayers.add();
    layRef.name = "Tendon";
}
 
function fitScreen() {
	var desc = new ActionDescriptor();
	var ref = new ActionReference();
	ref.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('FtOn'));
	desc.putReference(cTID('null'), ref);
	executeAction(cTID('slct'), desc, DialogModes.NO);
}

function cTID(s) {return app.charIDToTypeID(s);}

function isCorrectVersion() {
	if (parseInt(version, 10) >= 9) {
		return true;
	}
	else {
		alert('This script requires Adobe Photoshop CS2 or higher.', 'Wrong Version', false);
		return false;
	}
}

if (isCorrectVersion()) {
    var originalRulerUnits = preferences.rulerUnits;
    preferences.rulerUnits = Units.PIXELS;
    try {
        main();
        ord();
        box();
        dupBoxs();
        laySets();
        fitScreen(); 
        //app.activeDocument.measurementScale.pixelLength = 312 ;
        //app.activeDocument.measurementScale.logicalLength = 5 ;
        //app.activeDocument.measurementScale.logicalUnits = ( "cms" );
        }
	catch(e) {
		// don't report error on user cancel
		if (e.number != 8007) {
//			showError(e);
		}
	}
}

