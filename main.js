song_1 = "";
song_2 = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;
score_rightWrist = 0;
score_leftWrist =0;
song1_status = "";
song2_status = "";

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is working")
}

function gotPoses(results){
    if(results.length > 0 )
    {
        console.log(results);

        score_rightWrist = results[0].pose.keypoints[10].score;
        score_leftWrist = results[0].pose.keypoints[9].score;
        console.log("Score right wrist =" +score_rightWrist+ "score_leftWrist =" + score_leftWrist);
        
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("left wrist x =" +left_wrist_x+ "left wrist y =" + left_wrist_y) ;

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("right wrist x =" +right_wrist_x+ "right wrist y =" + right_wrist_y);

    }
}


function draw(){
    image(video, 0 , 0 , 600, 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

