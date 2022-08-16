// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "5-060004", a: "_ICAM_007", p: new BABYLON.Vector3(119.848, 140, 66.3153), l: new BABYLON.Vector3(120.714, 140, 66.8153)});
   layamaCameras.push({n: "5-060000", a: "_CAM_002", p: new BABYLON.Vector3(474.261, 140, 555.416), l: new BABYLON.Vector3(475.258, 140, 555.329)});
   layamaCameras.push({n: "5-060001", a: "_CAM_004", p: new BABYLON.Vector3(290.535, 140, 81.6096), l: new BABYLON.Vector3(291.354, 140, 82.1832)});
   layamaCameras.push({n: "5-060002", a: "_CAM_005", p: new BABYLON.Vector3(473.093, 140, 365.511), l: new BABYLON.Vector3(473.352, 140, 366.477)});
   layamaCameras.push({n: "5-060003", a: "_CAM_006", p: new BABYLON.Vector3(114.211, 140, 538.931), l: new BABYLON.Vector3(113.869, 140, 537.991)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

