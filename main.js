nose_x=0;
nose_y=0;
eye_l=0;
eye_r=0;

function preload(){
    lip=loadImage("lip.png");
    moustache=loadImage("Mustache.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(lip, nose_x-30, nose_y+10, 60, 60);
    image(moustache, nose_x-70, nose_y-40, 150, 110);
}

function modelLoaded(){
    console.log("The model has initialised.");
}

function gotPoses(result){
 if (result.length>0){
    console.log(result);
    nose_x=result[0].pose.nose.x;
    nose_y=result[0].pose.nose.y;
    eye_r=result[0].pose.leftEye.x;
    eye_l=result[0].pose.leftEye.y;
    console.log("The x of nose is: " + result[0].pose.nose.x);
    console.log("The y of nose is: " + result[0].pose.nose.y);
 }
}

function takeSnapshot(){
    save("lipFilter.png");
}