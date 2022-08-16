// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "CAM_010000", a: "_ICAM_001", p: new BABYLON.Vector3(2869.97, 140, 737.064), l: new BABYLON.Vector3(2868.97, 140, 737.036)});
   layamaCameras.push({n: "CAM_010001", a: "CAM_002", p: new BABYLON.Vector3(2853.43, 140, 562.375), l: new BABYLON.Vector3(2852.87, 140, 561.546)});
   layamaCameras.push({n: "CAM_010002", a: "CAM_003", p: new BABYLON.Vector3(3187.36, 140, 562.375), l: new BABYLON.Vector3(3187.26, 140, 561.38)});
   layamaCameras.push({n: "CAM_010003", a: "CAM_004", p: new BABYLON.Vector3(3154.75, 140, 211.048), l: new BABYLON.Vector3(3154.43, 140, 210.101)});
   layamaCameras.push({n: "CAM_010004", a: "CAM_005", p: new BABYLON.Vector3(3305, 140, 214.101), l: new BABYLON.Vector3(3306, 140, 214.095)});
   layamaCameras.push({n: "CAM_010005", a: "CAM_006", p: new BABYLON.Vector3(3338.88, 140, 562.375), l: new BABYLON.Vector3(3338.9, 140, 561.375)});
   layamaCameras.push({n: "CAM_010006", a: "CAM_007", p: new BABYLON.Vector3(3467.81, 140, 562.375), l: new BABYLON.Vector3(3467.83, 140, 561.375)});
   layamaCameras.push({n: "CAM_010007", a: "CAM_008", p: new BABYLON.Vector3(3338.88, 140, 436.475), l: new BABYLON.Vector3(3339.87, 140, 436.503)});
   layamaCameras.push({n: "CAM_010008", a: "CAM_009", p: new BABYLON.Vector3(3503.33, 140, 377.82), l: new BABYLON.Vector3(3503.93, 140, 377.021)});
   layamaCameras.push({n: "CAM_010009", a: "CAM_010", p: new BABYLON.Vector3(3640.67, 140, 348.43), l: new BABYLON.Vector3(3641.08, 140, 347.516)});
   layamaCameras.push({n: "CAM_010010", a: "CAM_012", p: new BABYLON.Vector3(2948.37, 140, 576.986), l: new BABYLON.Vector3(2948.58, 140, 576.007)});
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

