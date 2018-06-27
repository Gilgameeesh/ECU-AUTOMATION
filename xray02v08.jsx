#target photoshop

app.bringToFront();

function main(){
    var p = new Number();
    var src = prompt('Enter x-axis termination point:','500','');
    p.src = src
    var layNam = new Array();
    layNam[0] = "80-100 Ln1";
    layNam[1] = "80-100 Ln2";
    layNam[2] = "70-90 Ln1";
    layNam[3] = "70-90 Ln2";
    layNam[4] = "60-80 Ln1";
    layNam[5] = "60-80 Ln2";
    layNam[6] = "50-70 Ln1";
    layNam[7] = "50-70 Ln2";
    layNam[8] = "40-60 Ln1";
    layNam[9] = "40-60 Ln2";
    var setNam = new Array();
    setNam[0] = "80-100";
    setNam[1] = "70-90";
    setNam[2] = "60-80";
    setNam[3] = "50-70";
    setNam[4] = "40-60";

var q = 0;


    
    function makeActiveLayerByName( lyrname ){
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putName( charIDToTypeID( "Lyr " ), lyrname );
    desc.putReference( charIDToTypeID( "null" ), ref );
    desc.putBoolean( charIDToTypeID( "MkVs" ), false );
    executeAction( charIDToTypeID( "slct" ), desc, DialogModes.NO );
    return app.activeDocument.activeLayer;
    }
    for(u = 0; u < layNam.length; u++) {
        if (q == 0){ z = 0 };
        if (q == 2){ z = 1 };
        if (q == 4){ z = 2 };
        if (q == 6){ z = 3 };
        if (q == 8){ z = 4 };
        var setRef = activeDocument.layerSets.getByName(setNam[z]);
        makeActiveLayerByName (layNam[q]);

    //for (i = 0; i < len-1; i ++){
        //var xR = makeActiveLayerByName(layNam[q]);
        //var xS = activeDocument.layers.getByName(xOd[k]);
        //activeDocument.activeLayer.move(xS, ElementPlacement.PLACEBEFORE);
        //j ++;
        //k ++;


    var aD = app.activeDocument;
    var aL = aD.activeLayer;
    var b = aL.bounds;
    var bArray = new Array();
    bArray = b;
    var x = new Array();
    var y = new Array();
    x[0] = Number(b[0]);
    x[1] = Number(b[2]);
    y[0] = Number(b[1]);
    y[1] = Number(b[3]);
    var xOrig = x[0] + 2;
    var yOrig = y[0] + 3;
    /*var cop = aL.duplicate();
    cop.name = (layNam[q] + "ovla");
    cop.moveToEnd(setRef);
    var laySwitch = app.activeDocument.artLayers.add();
    laySwitch.name = (layNam[q] + "switch");
    laySwitch.moveToEnd(setRef);
    makeActiveLayerByName (layNam[q] + "switch");
    var selSwitch = app.activeDocument.selection;
    selSwitch.deselect();
    var selBounds = Array(Array (x[0],y[0]), Array (x[1], y[0]), Array (x[1], y[1]), Array (x[0],y[1]));
    selSwitch.select(selBounds);
    var fillColor = new SolidColor();
    fillColor.rgb.red = 0;
    fillColor.rgb.green = 0;
    fillColor.rgb.blue = 0;
    //app.displayDialogs = DialogModes.NO;
    selSwitch.fill(fillColor);
        selSwitch = null;
    fillColor = null;
    selBounds = null;
    //selSwitch = null;
    //fillColor = null;
    //selBounds = null;
    //var blackCol = new SolidColor();
    //blackCol.rgb.red = 0;
    //blackCol.rgb.green = 0;
    //blackCol.rgb.blue = 0;
    */
    /*makeActiveLayerByName (layNam[q] + "ovla");
    //app.activeDocument.selection.deselect();
    aL.merge();

    //activeDocument.activeLayer.duplicate(activeDocument.layers.getByName (layNam[q] + "switch"), ElementPlacement.PLACEAFTER);
    //activeDocument.activeLayer.merge();
    var pixelLoc = new Array();
    pixelLoc = [UnitValue(xOrig + " pixels"), UnitValue(yOrig + " pixels")];
    aD.colorSamplers.add(pixelLoc)
    aD.colorSamplers[0].color;
    var re = RegExp( '[123456789]' );
    var sColor = new SolidColor();
    sColor.rgb.red = re.exec(activeDocument.channels[0].histogram.toString() ).index/2;
    sColor.rgb.green = re.exec( activeDocument.channels[1].histogram.toString() ).index/2;
    sColor.rgb.blue = re.exec( activeDocument.channels[2].histogram.toString() ).index/2;
    executeAction( charIDToTypeID('undo'), undefined, DialogModes.NO );
    alert( sColor.rgb.hexValue );
    */
    //var reversed = (colRef != blackCol)?"straight":"reversed";
    //alert (reversed);
    //var rev = (b[3] > b[1])?"straight":"reversed";
    //alert (rev)
    
        //var selRef = app.activeDocument.selection;
        //var orgBounds = 
        //selRef.deselect();
        //var offset = 10;
        //var selBounds = Array(Array(offset, offset), Array(app.activeDocument.width - offset, offset), Array(app.activeDocument.width - offset, app.activeDocument.height - offset), Array(offset, app.activeDocument.height - 10)); 
        //var selBounds = Array(Array (x[0],y[0]), Array (x[1], y[0]), Array (x[0], y[1]), Array (x[1],y[1]));
        //var selBounds = Array(Array (x[0],y[0]), Array (x[1], y[0]), Array (x[1], y[1]), Array (x[0],y[1]));
        //var selBounds = Array(Array (x[0]-2,y[0]-2), Array (x[1], y[0]), Array (x[1], y[1]), Array (x[0],y[1]));
        //selRef.select(selBounds);
        //selRef.selectBorder(2);
        //aD.artLayers.add();

        //var strokeColor = new SolidColor();
        //strokeColor.rgb.red = 147;
        //strokeColor.rgb.green = 147;
        //strokeColor.rgb.blue = 147;

        //app.displayDialogs = DialogModes.NO;
        //selRef.stroke(strokeColor);

        //selRef = null;
        //strokeColor = null;
        //selBounds = null;
        
// fix photoshop 2px glitch
//var oX = new Array();
//var oY = new Array();
//oX[0] = 2 + x[0];
//oX[1] = -2 + x[1];
//oY[0] = 2 + y[0];
//oY[1] = -2 + y[1];
// find distance of opposite and adjacent
var dX = x[1] - x[0];
var dY = y[0] - y[1];


// find centerpoint
var cX = dX/2;
var cY = dY/2;
cX = Math.round(cX);
cY = Math.round(cY);

var cXn = x[1] - cX;
var cYn = y[0] - cY;

// find hypotinuse
var h = Math.sqrt((dX * dX) + (dY * dY));
h = Math.round(h);

// find angle
var deg = Math.asin(dX/h);
// angle proofing
var convert = 180/Math.PI
var degC = convert*deg
degC = Math.round(degC);
var angB = 180 - 90 - degC;
//alert (angB)

var b2 = new Array();
b2[0] = cXn - src;

var nH = b2*Math.tan(deg);
nH = Math.round(nH);

var nY = new Array();

if (aL.visible ) { nY = cYn - nH };
if (!aL.visible) { nY = cYn + nH };





//var fY = (nY>nH)?"straight":"reversed";


var fVal = new Array();
fVal[0] = Number(src);
fVal[1] = nY;
fVal[2] = cXn;
fVal[3] = cYn;
//var rev = (fVal[1] > fVal[3])?"straight":"reversed";



var doc = app.activeDocument.layerSets;
var ab = new Array();
ab[0] = "a";
ab[1] = "b";
var lv = new Array();
lv = 3;

function drawLine(doc, start, stop) {
var startPoint = new PathPointInfo();
startPoint.anchor = start;
startPoint.leftDirection = start;
startPoint.rightDirection = start;
startPoint.kind = PointKind.CORNERPOINT;
var stopPoint = new PathPointInfo();
stopPoint.anchor = stop;
stopPoint.leftDirection = stop;
stopPoint.rightDirection = stop;
stopPoint.kind = PointKind.CORNERPOINT;

var spi = new SubPathInfo();
spi.closed = false;
spi.operation = ShapeOperation.SHAPEXOR;
spi.entireSubPath = [startPoint, stopPoint];
var line = doc.pathItems.add("Line" + lv, [spi]);
line.stroked = true;
line.strokePath(ToolType.BRUSH);
line.remove();
};

var layRef = app.activeDocument.artLayers.add();
layRef.name = layNam[q] + "a";
layR = layRef.name;
layRef.moveToEnd(setRef);
drawLine(app.activeDocument, [fVal[0],fVal[1]], [cXn,cYn]);


q++
}

        };
    

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
        //newAlpha();
        }
	catch(e) {
		// don't report error on user cancel
		if (e.number != 8007) {
//			showError(e);
		}
	}
}



