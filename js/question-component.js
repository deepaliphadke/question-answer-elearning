(function($) {
    var question = function(qid, ans, feedback_right, feedback_wrong){
        this.qid = qid;
        this.right_answer = ans;
        this.feedback_right = feedback_right;
        this.feedback_wrong = feedback_wrong;
        this.checkanswer = (function(qid, right_answer, feedback_right, feedback_wrong) {
            return function (e) {
                var correct_ans = ($("#q-"+qid+" input[type=radio]:checked").val());
                if(correct_ans == right_answer) {
                    console.log(feedback_right);
                    $("#q-"+qid+" .feedback .right").show();
                    $("#q-"+qid+" .feedback .wrong").hide();
                } else {
                    $("#q-"+qid+" .feedback .right").hide();
                    $("#q-"+qid+" .feedback .wrong").show();
                    console.log(feedback_wrong);
                }
            }
        }(this.qid, this.right_answer, this.feedback_right, this.feedback_wrong));
        $("#q-"+this.qid+" .btn").on("click", this.checkanswer);
    }

    var q1 = new question(1, 3, "You got that right", "Neah doesn't work");
    var q2 = new question(2, 2, "You got that", "Neah");
    var q3 = new question(3, 1, "right", "doesn't work");
    var q4 = new question(4, 3, "Well done!", "Not really");

    $(".wrong").hide();
    $(".right").hide();

}(jQuery))