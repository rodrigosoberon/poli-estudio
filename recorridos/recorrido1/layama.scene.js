// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "o0005", a: "_ICAM_007", p: new BABYLON.Vector3(119.848, 140, 66.3153), l: new BABYLON.Vector3(120.848, 140, 66.3153)});
   layamaCameras.push({n: "o0000", a: "_CAM_001", p: new BABYLON.Vector3(520.653, 140, 175.122), l: new BABYLON.Vector3(521.653, 140, 175.122)});
   layamaCameras.push({n: "o0001", a: "_CAM_002", p: new BABYLON.Vector3(457.394, 140, 553.858), l: new BABYLON.Vector3(456.394, 140, 553.858)});
   layamaCameras.push({n: "o0002", a: "_CAM_004", p: new BABYLON.Vector3(290.535, 140, 81.6096), l: new BABYLON.Vector3(291.535, 140, 81.6096)});
   layamaCameras.push({n: "o0003", a: "_CAM_005", p: new BABYLON.Vector3(473.093, 140, 365.511), l: new BABYLON.Vector3(473.736, 140, 366.277)});
   layamaCameras.push({n: "o0004", a: "_CAM_006", p: new BABYLON.Vector3(114.658, 140, 554.852), l: new BABYLON.Vector3(115.301, 140, 555.618)});
   layamaCameras.push({n: "o0006", a: "_CAM_007", p: new BABYLON.Vector3(728.571, 140, 105.382), l: new BABYLON.Vector3(729.571, 140, 105.382)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 0;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

