const _0x9a05f3=_0x133c;(function(_0xa9e42f,_0x4712b7){const _0x3f9a1d=_0x133c,_0x1e5d03=_0xa9e42f();while(!![]){try{const _0x2d3de7=-parseInt(_0x3f9a1d(0xec))/0x1*(parseInt(_0x3f9a1d(0x116))/0x2)+-parseInt(_0x3f9a1d(0x106))/0x3+-parseInt(_0x3f9a1d(0x118))/0x4*(-parseInt(_0x3f9a1d(0x105))/0x5)+-parseInt(_0x3f9a1d(0x11f))/0x6*(parseInt(_0x3f9a1d(0x11a))/0x7)+parseInt(_0x3f9a1d(0xdf))/0x8*(parseInt(_0x3f9a1d(0x100))/0x9)+-parseInt(_0x3f9a1d(0xf6))/0xa*(parseInt(_0x3f9a1d(0xe8))/0xb)+parseInt(_0x3f9a1d(0x11d))/0xc;if(_0x2d3de7===_0x4712b7)break;else _0x1e5d03['push'](_0x1e5d03['shift']());}catch(_0x2b685e){_0x1e5d03['push'](_0x1e5d03['shift']());}}}(_0x3f4e,0x8c6bf));function _0x133c(_0x3b9f9f,_0x5e06e8){const _0x3f4e1a=_0x3f4e();return _0x133c=function(_0x133c73,_0x53ccf4){_0x133c73=_0x133c73-0xd8;let _0x5998e7=_0x3f4e1a[_0x133c73];return _0x5998e7;},_0x133c(_0x3b9f9f,_0x5e06e8);}import _0x122fbf from'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3';const {FaceLandmarker,FilesetResolver,DrawingUtils,NormalizedLandmark}=_0x122fbf,demosSection=document['getElementById']('demos'),imageBlendShapes=document['getElementById'](_0x9a05f3(0xed)),videoBlendShapes=document['getElementById'](_0x9a05f3(0x11b));let faceLandmarker,runningMode=_0x9a05f3(0x110),enableWebcamButton,webcamRunning=![];const videoWidth=0x780;console[_0x9a05f3(0xeb)](_0x122fbf);async function createFaceLandmarker(){const _0x334d8a=_0x9a05f3,_0x19541=await FilesetResolver[_0x334d8a(0x10d)]('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm');faceLandmarker=await FaceLandmarker['createFromOptions'](_0x19541,{'baseOptions':{'modelAssetPath':_0x334d8a(0xfe),'delegate':_0x334d8a(0xfb)},'outputFaceBlendshapes':!![],'runningMode':runningMode,'numFaces':0x1}),enableWebcamButton[_0x334d8a(0x121)]();}createFaceLandmarker();const imageContainers=document[_0x9a05f3(0x109)]('detectOnClick'),video=document[_0x9a05f3(0x103)](_0x9a05f3(0xfd)),canvasElement=document['getElementById'](_0x9a05f3(0x122)),canvasCtx=canvasElement[_0x9a05f3(0x101)]('2d');function hasGetUserMedia(){const _0x14818d=_0x9a05f3;return!!(navigator[_0x14818d(0xf0)]&&navigator[_0x14818d(0xf0)][_0x14818d(0xe7)]);}hasGetUserMedia()?(enableWebcamButton=document['getElementById']('webcamButton'),enableWebcamButton[_0x9a05f3(0x113)](_0x9a05f3(0x121),enableCam)):console['warn'](_0x9a05f3(0xf9));function _0x3f4e(){const _0x39170b=['2220126hJJLbp','end','%\x20-\x20120px)\x22>','getElementsByClassName','fill','VIDEO','then','forVisionTasks','setOptions','categories','IMAGE','push','ENABLE\x20PREDICTIONS','addEventListener','lipPattern','rgba(255,0,0,.3)','688322ngCxHt','\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22blend-shapes-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22blend-shapes-label\x22>','148NtxopZ','destination-out','1998395hExpxq','video-blend-shapes','now','9790932ikorkI','categoryName','6AYzLcp','innerHTML','click','output_canvas','onload','globalCompositeOperation','lipblur','currentTime','beginPath','height','Wait!\x20faceLandmarker\x20not\x20loaded\x20yet.','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22blend-shapes-value\x22\x20style=\x22width:\x20calc(','2064984WUrWfT','src','start','filter','canvasCtx','lipColor','loadeddata','innerText','getUserMedia','11YdRgph','moveTo','blur(10px)','log','1WSmLxW','image-blend-shapes','videoWidth','faceLandmarks','mediaDevices','source-over','detectForVideo','videoHeight','width','forEach','938430NwXWfT','style','createPattern','getUserMedia()\x20is\x20not\x20supported\x20by\x20your\x20browser','score','GPU','lineTo','webcam','https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task','length','9PjlvIl','getContext','repeat','getElementById','FACE_LANDMARKS_LIPS','130360XmjuRs'];_0x3f4e=function(){return _0x39170b;};return _0x3f4e();}function enableCam(_0x36e94f){const _0xbf6e9=_0x9a05f3;if(!faceLandmarker){console['log'](_0xbf6e9(0xdd));return;}webcamRunning===!![]?(webcamRunning=![],enableWebcamButton['innerText']=_0xbf6e9(0x112)):(webcamRunning=!![],enableWebcamButton[_0xbf6e9(0xe6)]='DISABLE\x20PREDICTIONS');const _0x451cfa={'video':!![]};navigator['mediaDevices']['getUserMedia'](_0x451cfa)[_0xbf6e9(0x10c)](_0x5d2ba3=>{const _0x57a3ca=_0xbf6e9;video['srcObject']=_0x5d2ba3,video[_0x57a3ca(0x113)](_0x57a3ca(0xe5),predictWebcam);});}window[_0x9a05f3(0xe4)]=_0x9a05f3(0x115),window[_0x9a05f3(0xd9)]='blur(5px)';const drawFreePolygon2=(_0x21ebf6,_0x5c4f85,_0x34946b)=>{const _0x24f5d4=_0x9a05f3;if(_0x5c4f85[_0x24f5d4(0xff)]===0x0)return;const [{x:_0x1ab8fe,y:_0x2d9cab}]=_0x5c4f85;_0x21ebf6[_0x24f5d4(0xdb)](),_0x21ebf6[_0x24f5d4(0xe9)](_0x1ab8fe,_0x2d9cab),_0x5c4f85[_0x24f5d4(0xf5)](({x:_0x3f123e,y:_0x176399})=>{const _0x182d33=_0x24f5d4;_0x21ebf6[_0x182d33(0xfc)](_0x3f123e,_0x176399);}),_0x21ebf6['closePath'](),_0x21ebf6['fillStyle']=window['lipColor'],canvasCtx[_0x24f5d4(0xe2)]=window[_0x24f5d4(0xd9)],_0x21ebf6[_0x24f5d4(0x10a)]();const [{x:_0x4f43fd,y:_0x444e64}]=_0x34946b;_0x21ebf6['beginPath'](),_0x21ebf6[_0x24f5d4(0xe9)](_0x4f43fd,_0x444e64),_0x34946b[_0x24f5d4(0xf5)](({x:_0x3196a2,y:_0x34e3b5})=>{_0x21ebf6['lineTo'](_0x3196a2,_0x34e3b5);}),_0x21ebf6['closePath'](),_0x21ebf6['fillStyle']='rgba(255,\x20255,\x20255,\x201)',_0x21ebf6['globalCompositeOperation']=_0x24f5d4(0x119),_0x21ebf6['fill'](),_0x21ebf6[_0x24f5d4(0xd8)]=_0x24f5d4(0xf1);},textureImage=new Image();textureImage[_0x9a05f3(0xe0)]='./liptext.jpg',textureImage[_0x9a05f3(0x123)]=function(){const _0x2846a5=_0x9a05f3;canvasCtx[_0x2846a5(0xe2)]=_0x2846a5(0xea);const _0x3e2de4=canvasCtx[_0x2846a5(0xf8)](textureImage,_0x2846a5(0x102));window[_0x2846a5(0xe3)]=canvasCtx,window[_0x2846a5(0x114)]=_0x3e2de4;};let lastVideoTime=-0x1,results=undefined;const drawingUtils=new DrawingUtils(canvasCtx);async function predictWebcam(){const _0x424732=_0x9a05f3,_0x1df793=video['videoHeight']/video[_0x424732(0xee)];video['style'][_0x424732(0xf4)]=videoWidth+'px',video[_0x424732(0xf7)][_0x424732(0xdc)]=videoWidth*_0x1df793+'px',canvasElement[_0x424732(0xf7)][_0x424732(0xf4)]=videoWidth+'px',canvasElement[_0x424732(0xf7)][_0x424732(0xdc)]=videoWidth*_0x1df793+'px',canvasElement[_0x424732(0xf4)]=video[_0x424732(0xee)],canvasElement[_0x424732(0xdc)]=video[_0x424732(0xf3)];runningMode===_0x424732(0x110)&&(runningMode=_0x424732(0x10b),await faceLandmarker[_0x424732(0x10e)]({'runningMode':runningMode}));let _0x454588=performance[_0x424732(0x11c)]();lastVideoTime!==video[_0x424732(0xda)]&&(lastVideoTime=video[_0x424732(0xda)],results=faceLandmarker[_0x424732(0xf2)](video,_0x454588));let _0xf1d2e4=[],_0x5b5f54=[];if(results&&results[_0x424732(0xef)]&&results['faceLandmarks'][0x0]){let _0x36e2ca=results['faceLandmarks'][0x0],_0x34c6bb=[];FaceLandmarker[_0x424732(0x104)]['filter']((_0x4585a2,_0x43ffa5)=>_0x43ffa5<0x14)[_0x424732(0xf5)](_0x2c8017=>{const _0x23d574=_0x424732;_0xf1d2e4[_0x23d574(0x111)]({'x':_0x36e2ca[_0x2c8017[_0x23d574(0xe1)]]['x']*video['videoWidth'],'y':_0x36e2ca[_0x2c8017[_0x23d574(0xe1)]]['y']*video[_0x23d574(0xf3)]}),_0xf1d2e4[_0x23d574(0x111)]({'x':_0x36e2ca[_0x2c8017['end']]['x']*video[_0x23d574(0xee)],'y':_0x36e2ca[_0x2c8017[_0x23d574(0x107)]]['y']*video['videoHeight']});}),FaceLandmarker[_0x424732(0x104)][_0x424732(0xe2)]((_0x308a4a,_0x1326c3)=>_0x1326c3>=0x14)[_0x424732(0xf5)](_0x42b50f=>{const _0xf69f74=_0x424732;_0x5b5f54[_0xf69f74(0x111)]({'x':_0x36e2ca[_0x42b50f['start']]['x']*video[_0xf69f74(0xee)],'y':_0x36e2ca[_0x42b50f[_0xf69f74(0xe1)]]['y']*video[_0xf69f74(0xf3)]}),_0x5b5f54[_0xf69f74(0x111)]({'x':_0x36e2ca[_0x42b50f[_0xf69f74(0x107)]]['x']*video['videoWidth'],'y':_0x36e2ca[_0x42b50f[_0xf69f74(0x107)]]['y']*video[_0xf69f74(0xf3)]});});for(const _0x1c8548 of results[_0x424732(0xef)]){}}drawBlendShapes(videoBlendShapes,results['faceBlendshapes']),drawFreePolygon2(canvasCtx,_0xf1d2e4,_0x5b5f54),webcamRunning===!![]&&window['requestAnimationFrame'](predictWebcam);}function drawBlendShapes(_0x40a60d,_0x374ff4){const _0x568434=_0x9a05f3;if(!_0x374ff4['length'])return;let _0x3b630b='';_0x374ff4[0x0][_0x568434(0x10f)]['map'](_0x34705e=>{const _0x18dceb=_0x568434;_0x3b630b+=_0x18dceb(0x117)+(_0x34705e['displayName']||_0x34705e[_0x18dceb(0x11e)])+_0x18dceb(0xde)+ +_0x34705e[_0x18dceb(0xfa)]*0x64+_0x18dceb(0x108)+(+_0x34705e[_0x18dceb(0xfa)])['toFixed'](0x4)+'</span>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20';}),_0x40a60d[_0x568434(0x120)]=_0x3b630b;}