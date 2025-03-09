var question_title = document.getElementById("question_title");
var result_title = document.getElementById("result_title");
var c_titles = [
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3"),
    document.getElementById("c4"),
];
var next_button = document.getElementById("next");

var total_questions = 5;
var question_titles = [
    "Q1: What is the best definition of climate change?", 
    "Q2: What is the relationship between climate change and global warming?", 
    "Q3: Which among the choices is one of the most direct effects of climate change on the planet?", 
    "Q4: Which among the choices is an ineffective way to combat climate change?", 
    "Q5: Is climate change a natural phenomenon?"
];

var c1_titles = [
    "A. Climate change is the global increase of the surface temperature of the planet due to an abnormal rise in heat-trapping greenhouse gasses such as carbon dioxide.", 
    "A. Global warming is the broader term which encompasses climate change, wherein the abnormal shifts of long-term weather patterns contribute to the overall rise in surface temperature.", 
    "A. Climate change has contributed to a drastic decrease of the human population in remote or extreme areas due to the sudden changes in environmental conditions.", 
    "A. Increase the sizes of landfills to decrease the number of wastes contaminating the soil and the seas.", 
    "A. Climate change is a natural phenomenon, with the recent shifts caused by human intervention being a natural occurrence as it involves a species carrying out its responsibility to attain its needs.", 
];
var c2_titles = [
    "B. Climate change is the long-term changes and shifts of the Earth's temperature and weather patterns.", 
    "B. Global warming is unrelated to climate change as it refers to the rise of surface temperatures causing harm to various life forms on land and in water, while climate change includes atmospheric shifts only.", 
    "B. Climate change has noticeably increased volcanic activity in the last few decades due to the alteration of magma currents caused by the melting of glaciers.", 
    "B. Transitioning to clean energy sources such as nuclear energy and funding research related to alternative energy sources to combat climate change.", 
    "B. Shifts in the Earth's climate do happen naturally due to causes such as major volcanic eruptions and solar activity, however the recent changes cannot be explained by these alone. Human activity has drastically contributed to abnormally increasing the intensity of these shifts."
];
var c3_titles = [
    "C. Climate change is the reduction of the biodiversity of a certain ecosystem or region on the planet.", 
    "C. Climate change and global warming are interchangeable terms. The two words refer to the same thing.", 
    "C. Climate change has accelerated the melting of the ice caps due to rising ocean temperatures, which has endangered many species inhabiting the polar regions while also contributing to the global sea level rise.", 
    "C. Encouraging public transit and other cleaner transportation methods to reduce individual vehicle emissions.", 
    "C. No, climate change can never be a natural phenomenon as it is an imbalance of the various cycles occuring on the planet. There is simply no natural factor significant enough to distrupt this equilibrium."
];
var c4_titles = [
    "D. Climate change is the rising number of extreme weather conditions caused by various changing factors in the Earth's atmosphere.", 
    "D. Global warming is one of the many contributors to climate change, however the latter refers to the broader range of changes occuring on the planet.", 
    "D. The effects of climate change has caused a significant reduction of plastic contamination on land and in water along with the reduction of greenhouse gasses in the atmosphere due to increased recognition and awareness on the severity of the issue.", 
    "D. Having a balanced diet by eating more plant-based foods while reducing meat and dairy consumption to reduce harmful emissions caused by the production and processing of animal-based food.", 
    "D. Climate change is only a recent occurrence due to human activity. It is not a natural phenomenon as it has been introduced by humans through unnatural ways."
];

var question_current = 0, 
    total_correct = 0, 
    completed = false,
    viewedresults = false,
    qdone = false;

var key = [
    2, 4, 3, 1, 2
];

function cclick(choice){
    if (completed == false) {
        if (qdone == false) {
            var ltr = ["A", "B", "C", "D"];
            console.log(choice);
            qdone = true;
            next_button.style.visibility = "visible";
            displayKey(choice, getAnswer());
            if (choice == getAnswer()){
                total_correct++;
                result_title.innerHTML = "The correct answer is " + ltr[getAnswer()-1] + ". You are correct. Press next to continue.";
            } else {
                result_title.innerHTML = "The correct answer is " + ltr[getAnswer()-1] + ". You are incorrect. Press next to continue.";
            }
            if (question_current > total_questions-1){
                completed = true;
                console.log(total_correct);
            }  
        } 
        if (choice == 5) {
            returnColor();
            next_button.style.visibility = "hidden";
            qdone = false;
            result_title.innerHTML = "Choose from one of the 4 choices below:";
            displayNewQuestion(question_current);
            question_current++;
        }
    } else{
        var msg = "";
        
        if (choice == 5) {
            c_titles[0].style.visibility = "hidden";
            c_titles[1].style.visibility = "hidden";
            c_titles[2].style.visibility = "hidden";
            c_titles[3].style.visibility = "hidden";
            next_button.style.visibility = "hidden";
        }
        
        if (total_correct < 2) {
            msg = "You are lacking in awareness about climate change. ";
        } else if (total_correct >= 2 && total_correct < 4) {
            msg = "You are slightly informed about climate change. ";
        } else if (total_correct >= 4) {
            msg = "You are very informed about climate change. ";
        }
        
        question_title.innerHTML = "Congratulations, you have finished the quiz!";
        result_title.innerHTML = "Your total score is: " + total_correct +
            "/5. " + msg + "Press the button on the top left to return to the main page.";
        
    }
}

function displayNewQuestion(val) {
    question_title.innerHTML = question_titles[val];
    c_titles[0].innerHTML = c1_titles[val];
    c_titles[1].innerHTML = c2_titles[val];
    c_titles[2].innerHTML = c3_titles[val];
    c_titles[3].innerHTML = c4_titles[val];
}

function displayKey(ans, key){
    c_titles[key-1].style.color = "darkgreen"; 
    c_titles[key-1].style.borderWidth = "6px"; 
    if (ans != key) {
        c_titles[ans-1].style.color = "darkred"; 
        c_titles[ans-1].style.borderWidth = "6px"; 
    }
    
}

function returnColor(){
    c_titles[0].style.color = "black";
    c_titles[1].style.color = "black";
    c_titles[2].style.color = "black";
    c_titles[3].style.color = "black";
    c_titles[0].style.borderWidth = "medium";
    c_titles[1].style.borderWidth = "medium";
    c_titles[2].style.borderWidth = "medium";
    c_titles[3].style.borderWidth = "medium";
}

function getAnswer(ans){
    return key[question_current-1];
}

displayNewQuestion(question_current);
question_current++;