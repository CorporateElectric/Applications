$(document).ready(function () {
    $("#myform").validate({
        ignore: ".ignore",
        rules: {
            varFirstName: {
                required: true,
                no_url: true,
                noHTMLtags: true,
                check_different_word: true,
            },
            // varLastName: {
            //     required: true,
            //     no_url: true,
            //     noHTMLtags: true
            // },
            varEmail: {
                required: true,
                no_url: true,
                uniqueEmail: true,
                email: true
            },
            varReason: {
                required: true,
                no_url: true,
                noHTMLtags: true,
                check_different_word: true,
            },
            chrInfo: {
                required: true,
            },
            hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
        },
        messages: {
            varFirstName: {
                required: "<span class='dpl_required'>Please enter your full name.</span>",
                no_url: "<span class='dpl_required'>URL not allowed.</span>",
                noHTMLtags: "<span class='dpl_required'>Please enter valid input.</span>"
            },
            // varLastName: {
            //     required: "<span class='dpl_required'>Please enter your last name.</span>",
            //     no_url: "<span class='dpl_required'>URL not allowed.</span>",
            //     noHTMLtags: "<span class='dpl_required'>Please enter valid input.</span>"
            // },
            varEmail: {
                required: "<span class='dpl_required'>Please enter your email address.</span>",
                no_url: "<span class='dpl_required'>URL not allowed.</span>",
                uniqueEmail: "<span class='dpl_required'>This email address is already exist.</span>",
                email: "<span class='dpl_required'>Please valid email address.</span>"
            },
            varReason: {
                required: "<span class='dpl_required'>Please enter reason for removal.</span>",
                no_url: "<span class='dpl_required'>URL not allowed.</span>",
                noHTMLtags: "<span class='dpl_required'>Please enter valid input.</span>"
            },
            chrInfo: {
                required: "<span class='dpl_required'>Please confirm your authorization.</lable>",
            },
            hiddenRecaptcha: {
                required: "<span class='dpl_required'>Please select I'm not a robot.</lable>"
            },
        },
        errorPlacement: function (error, element)
        {
            if ($(element).attr('id') == "hiddenRecaptcha") {
                error.insertAfter($(".hiddenRecaptchavald"));
            } else if ($(element).attr('id') == "chrInfo") {
                error.insertAfter($(".errinfo2"));
            } else {
                error.insertAfter(element);
            }
        }
    });
    jQuery.validator.addMethod("email", function (value, element) {
        return this.optional(element) || /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(value);
    }, "Invalid email");



    $.validator.addMethod('no_url', function (value, element) {
        var element = /^[a-zA-Z0-9\-\.\:\\]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
        var flag = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        var param = $.trim(value);
        if (param == '') {
            return true;
        }
        if (param.match(element) == null && flag.test(param) == false) {
            return true;
        }
    }, "<span class='err'>URL not allowed.</span>");
    
    var checklist = /\b(seo|web visitor|lead generation|nft|ai tool|sql|studies|search engine optimization|marketing|google ads|social media ads|facebook ads|instagram ads|robots|robot.txt|ppc|pay per click|advertising)\b/;  
    $.validator.addMethod("check_different_word", function (value) {
        return !checklist.test(value.toLowerCase());
    }, "<span class='dpl_required'>Please enter valid input.</span>");


    $.validator.addMethod(
            "noHTMLtags",
            function (value, element) {
                if (/[<>$#%^&*~]/g.test(value)) {
                    return false;
                } else {
                    return true;
                }
            },
            "<span class='dpl_required'>Please enter valid input.</span>"
            );

            $.validator.addMethod("uniqueEmail", function(value, element) {
                var res = checksameEmail(value);
                if(res == 1){
                  return false;
                } else {
                  return true;
                }
              }, "This email address is already exist.");
            
            function checksameEmail(email){
                var emailid = email;
                var headers = {
                    'X-CSRF-TOKEN': $('input[name="_token"]').val()
                }                
                return $.ajax({
                    type: "POST",
                    headers: headers,
                    url: window.location + "/getEmail",
                    data: "varEmail=" + emailid ,
                    async: false,
                    cache: false
                }).responseText;
            }

});
       