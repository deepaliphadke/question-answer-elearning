(function($) {
    
    var tab_id = 1;
    var question = function(qid, ans, feedback_right, feedback_wrong){
        this.qid = qid;
        this.right_answer = ans;
        this.feedback_right = feedback_right;
        this.feedback_wrong = feedback_wrong;
        $(".pager").append("<li><a class='btn btn-pager' id='pager-"+this.qid+"'>"+this.qid+"</a></li>");
        this.checkanswer = (function(qid, right_answer, feedback_right, feedback_wrong) {
            return function (e) {
                var to_show, to_hide;
                var correct_ans = ($("#q-"+qid+" input[type=radio]:checked").val());
                var ele = "#q-"+qid+" .feedback ";
                if(correct_ans == right_answer) {
                    console.log(feedback_right);
                    to_show = "right", to_hide = "wrong";
                } else {
                    to_show = "wrong", to_hide = "right";
                    console.log(feedback_wrong);
                }
                
                $(ele+"."+to_show).removeClass("hide").hide().fadeIn();
                $(ele+"."+to_hide).hide();
            }
        }(this.qid, this.right_answer, this.feedback_right, this.feedback_wrong));
        $("#q-"+this.qid+" .btn").on("click", this.checkanswer);
    }
    
    var showTab = function(e) {
        var currentTab = $(this).html();
        $("#pager-"+tab_id).addClass("visited");
        $("#q-"+tab_id).fadeOut(500, function() {
            tab_id = currentTab;
            $("#pager-"+tab_id).removeClass("visited").addClass("active");
            $("#q-"+tab_id).fadeIn();
        });
    }

    var q1 = new question(1, 3, "You got that right", "Neah doesn't work");
    var q2 = new question(2, 2, "You got that", "Neah");
    var q3 = new question(3, 1, "right", "doesn't work");
    var q4 = new question(4, 3, "Well done!", "Not really");
    $(".btn-pager").on("click", showTab);
    $(".pager li:first-child .btn-pager").trigger("click");
    

}(jQuery))