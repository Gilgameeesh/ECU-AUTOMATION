#target photoshop

app.bringToFront();

function main(){
    var pX = new Number();
    var pY = new Number();
    var srcX = prompt('Enter x coord for centrepoint (eg. 1002):','500','');
    var srcY = prompt('Enter y coord for centrepoint (eg. 444):','500','');
    pX.srcX = srcX
    pY.srcY = srcY
    
    var aD = app.activeDocument;
    var aL = aD.activeLayer;
    var b = aL.bounds;
    var x = new Array();
    var y = new Array();
    x[0] = Number(b[0]);
    y[0] = Number(b[1]);
    x[1] = Number(b[2]);
    y[1] = Number(b[3]);
    x[2] = srcX;
    y[2] = srcY;
    y[3] = Number(b[1]);
    var h = y[1] - y[0];
    var w = x[1] - x[0];
    var m1 = h/w
    var m2 = -1/m1
    var nR = y[3] / m2;

    var nI = Math.round(nR);
    var nO = (-(nI));

    var nJ = new Number();
    nJ = nO;
    
    var nK = new Number();
    nK = Number(x[2]) + Number(nJ);
    alert(nK);
    
    //var a = y[2] - y[3]
    //var xN = m2 * a
    //var xV = y[2] + xN;
    var fVal = new Array();
    fVal[0] = x[2];
    fVal[1] = y[2];
    fVal[2] = nK;
    fVal[3] = y[3];

alert(fVal);
var doc = app.activeDocument.activeLayer;


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
var line = doc.pathItems.add("Line", [spi]);
line.stroked = true;
line.strokePath(ToolType.BRUSH);
//line.remove();
};

var layRef = app.activeDocument.artLayers.add();
//layRef.name = layNam[q] + "a";
//layR = layRef.name;
//layRef.moveToEnd(setRef);
drawLine(app.activeDocument, [fVal[0],fVal[1]], [fVal[2],fVal[3]]);



}

        


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
