// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "cam-010000", a: "_CAM_001", p: new BABYLON.Vector3(130.329, 141.55, 397.252), l: new BABYLON.Vector3(130.88, 141.55, 396.418)});
   layamaCameras.push({n: "cam-010001", a: "CAM_002", p: new BABYLON.Vector3(269.39, 141.55, 397.252), l: new BABYLON.Vector3(268.943, 141.55, 396.358)});
   layamaCameras.push({n: "cam-010002", a: "CAM_003", p: new BABYLON.Vector3(312.024, 141.55, 262.795), l: new BABYLON.Vector3(312.623, 141.55, 261.994)});
   layamaCameras.push({n: "cam-010003", a: "CAM_004", p: new BABYLON.Vector3(281.299, 141.55, 627.863), l: new BABYLON.Vector3(280.305, 141.55, 627.977)});
   layamaCameras.push({n: "cam-010004", a: "CAM_005", p: new BABYLON.Vector3(300.547, 141.55, 713.405), l: new BABYLON.Vector3(300.574, 141.55, 714.405)});
   layamaCameras.push({n: "cam-010005", a: "CAM_006", p: new BABYLON.Vector3(134.73, 141.55, 646.431), l: new BABYLON.Vector3(133.836, 141.55, 646.878)});
   layamaCameras.push({n: "cam-010006", a: "CAM_007", p: new BABYLON.Vector3(438.262, 141.55, 729.897), l: new BABYLON.Vector3(438.785, 141.55, 730.749)});
   layamaCameras.push({n: "cam-010007", a: "CAM_008", p: new BABYLON.Vector3(438.262, 141.55, 894.798), l: new BABYLON.Vector3(439.111, 141.55, 894.27)});
   layamaCameras.push({n: "cam-010008", a: "CAM_009", p: new BABYLON.Vector3(116.6, 141.55, 895.346), l: new BABYLON.Vector3(115.601, 141.55, 895.373)});
   layamaCameras.push({n: "cam-010009", a: "CAM_010", p: new BABYLON.Vector3(415.236, 141.55, 619.111), l: new BABYLON.Vector3(416.058, 141.755, 618.579)});
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

