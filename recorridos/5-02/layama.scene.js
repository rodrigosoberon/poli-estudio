// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "CAM_010000", a: "_ICAM_001", p: new BABYLON.Vector3(386.652, 140, 465.042), l: new BABYLON.Vector3(386.659, 140, 464.042)});
   layamaCameras.push({n: "CAM_010001", a: "CAM_002", p: new BABYLON.Vector3(385.308, 140, 226.07), l: new BABYLON.Vector3(384.321, 140, 226.226)});
   layamaCameras.push({n: "CAM_010002", a: "CAM_013", p: new BABYLON.Vector3(367.809, 140, -42.8692), l: new BABYLON.Vector3(367.788, 140, -43.869)});
   layamaCameras.push({n: "CAM_010003", a: "CAM_014", p: new BABYLON.Vector3(56.7722, 140, -44.6124), l: new BABYLON.Vector3(57.5402, 140, -45.2528)});
   layamaCameras.push({n: "CAM_010004", a: "CAM_015", p: new BABYLON.Vector3(34.5097, 140, -241.059), l: new BABYLON.Vector3(34.6912, 140, -242.043)});
   layamaCameras.push({n: "CAM_010005", a: "CAM_016", p: new BABYLON.Vector3(-127.088, 140, -241.06), l: new BABYLON.Vector3(-128.064, 140, -241.275)});
   layamaCameras.push({n: "CAM_010006", a: "CAM_017", p: new BABYLON.Vector3(-127.088, 140, -128.339), l: new BABYLON.Vector3(-128.073, 139.826, -128.339)});
   layamaCameras.push({n: "CAM_010007", a: "CAM_019", p: new BABYLON.Vector3(-127.088, 140, 50.7138), l: new BABYLON.Vector3(-127.917, 140, 51.2732)});
   layamaCameras.push({n: "CAM_010008", a: "CAM_020", p: new BABYLON.Vector3(56.7729, 140, 58.3537), l: new BABYLON.Vector3(56.7125, 140, 57.3555)});
   layamaCameras.push({n: "CAM_010009", a: "CAM_021", p: new BABYLON.Vector3(56.774, 140, 369.182), l: new BABYLON.Vector3(55.7776, 140, 369.098)});
   layamaCameras.push({n: "CAM_010010", a: "CAM_022", p: new BABYLON.Vector3(-117.143, 140, 369.182), l: new BABYLON.Vector3(-118.067, 140, 369.564)});
   layamaCameras.push({n: "CAM_010011", a: "CAM_024", p: new BABYLON.Vector3(-107.34, 140, 528.904), l: new BABYLON.Vector3(-108.065, 140, 528.216)});
   layamaCameras.push({n: "CAM_010012", a: "CAM_025", p: new BABYLON.Vector3(202.721, 140, 507.889), l: new BABYLON.Vector3(203.72, 140, 507.917)});
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

