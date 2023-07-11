leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550)

    canvas = createCanvas(540, 540);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#00FFFF')
    fill('white');
    stroke('white');
    textSize(difference);
    text('Hello', 5, 525);
}

function modelLoaded() {
    console.log('Posenet model is loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}