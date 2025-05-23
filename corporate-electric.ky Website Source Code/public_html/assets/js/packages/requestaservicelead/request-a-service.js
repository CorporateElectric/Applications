$(document).ready(function (){
    function SetBackGround()    {
        $('.loader-n').css('display', 'block');
    }

    jQuery.validator.addMethod("xssProtection", function (value, element) {
        return validateXSSInput(value);
    }, "Please enter valid input.");

    $(document).on('keyup', '#phone_number_request', function (event) {
        var input = event.currentTarget.value;
        if (input.search(/^-/) != -1) {
            $("#phone_number_request").val('');
        }
    });
    $(document).on('keyup', '#phone_number_request', function (event) {
        var input = event.currentTarget.value;
        if (input.search(/^0/) != -1) {
            $("#phone_number_request").val('');
        }
    });

    $('#phone_number_request').bind("cut copy paste", function (e) {
        e.preventDefault();
    });
    $('#phone_number_request').usPhoneFormat({
        format: '(xxx) xxx-xxxx',
    });
    $.validator.addMethod("phonenumber", function (value, element) {
        var numberPattern = /\d+/g;
        var newVal = value.replace(/\D/g);
        if (parseInt(newVal) <= 0) {
            return false;
        } else {
            return true;
        }
    }, 'Please enter a valid phone number.');

    $(document).on('keypress', '#phone_number_request', function (event) {
        var input = '(0';
        var value = $('#phone_number_request').val();
        if (value == input) {
            $("#phone_number_request").val('');
        }
    });

    jQuery.validator.addMethod('checkallzero', function (value, element) {
        var zerosReg = /[1-9]/g;
        if (!zerosReg.test(value)) {
            return false;
        } else {
            return true;
        }
    }, 'Please enter valid phone.');
    $(document).on('keyup', '#phone_number_request', function (event) {
        var input = event.currentTarget.value;
        if (input.search(/^-/) != -1) {
            $("#phone_number_request").val('');
        }
    });
    $(document).on('keypress', 'input[name=phone_number]', function (event) {
        var input = event.currentTarget.value;
        if (input.search(/^0/) != -1) {
            $("input[name=phone_number]").val('');
        }
    });

    jQuery.validator.addMethod('checkallzero', function (value, element) {
        var zerosReg = /[1-9]/g;
        if (!zerosReg.test(value)) {
            return false;
        } else {
            return true;
        }
    }, 'Please enter valid phone.');
    
    $.validator.addMethod("noSpace", function (value, element) {
        if (value.trim().length <= 0) {
            return false;
        } else {
            return true;
        }
    }, "No space please don't leave it empty");
    $.validator.addMethod("emailFormat", function (value, element) {
        return this.optional(element) || /^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,4})$/.test(value);
    }, 'Please enter valid email.');

    $('input[name=contact_email], input[name=phone_number], input[name=first_name], input[name=last_name], textarea[name=user_message]').change(function () {
        var email = $(this).val();
        var trim_email = email.trim();
        if (trim_email) {
            $(this).val(trim_email);
            return true;
        }
    });
    $.validator.addMethod("check_special_char", function (value, element) {
        if (value != '') {
            if (value.match(/^[\x20-\x7E\w’\w‘\w�?\w〞\w“\w'\w„\w‟\w�?\w�??\w�?�\w＂\w‚\w‛\w�?�\w�?�\w�?�.\n]+$/)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }, 'Please enter valid input');

    jQuery.validator.addMethod("custom_special_characters", function (value, element) {
        var specialChars = "<>@!#$%^&*()_+[]{}:;|\\\,/~`="
        var check = function (string) {
            for (i = 0; i < specialChars.length; i++) {
                if (string.indexOf(specialChars[i]) > -1) {
                    return true
                }
            }
            return false;
        }
        if (check(value) == false) {
            return true;
        } else {
            return false;
        }
    }, "Please enter valid input.");

    var blacklist = /\b(nude|naked|sex|porn|porno|sperm|fuck|penis|pussy|vagina|boobs|asshole|bitch)\b/;
    jQuery.validator.addMethod("badwordcheck", function (value) {
        return !blacklist.test(value.toLowerCase());
    }, "Please remove bad word/inappropriate language.");


    $('input[name=contact_email]').change(function () {
        var email = $(this).val();
        var trim_email = email.trim();
        if (trim_email) {
            $(this).val(trim_email);
            return true;
        }
    });
    jQuery.validator.addMethod("phonenumberFormat", function (value, element) {
        var newVal = value.replace(/\D/g, '');
        if (newVal.length < 10) {
            return false;
        } else {
            return true;
        }
    }, 'Enter 10 digits numbers.');

    $('.form-control').bind('keyup mouseup ', function () {

        $(this).val($(this).val().replace(/  +/g, ' '));
    
    });
    
    var checklist = /\b(seo|web visitor|lead generation|nft|ai tool|sql|studies|search engine optimization|marketing|google ads|social media ads|facebook ads|instagram ads|robots|robot.txt|ppc|pay per click|advertising)\b/;  
    $.validator.addMethod("check_different_word", function (value) {
        return !checklist.test(value.toLowerCase());
    }, "Please enter valid input.");

    $('#requestaservice_page_form').validate({
        errorElement: 'span',
        errorClass: 'error',
        ignore: [],
        rules: {
            first_name: {
                required: true,
                noSpace: true,
                maxlength: 600,
                xssProtection: true,
                check_special_char: true,
                custom_special_characters: true,
                no_url: true,
                badwordcheck: true,
                check_different_word: true,
            },
            physical_address: {
                required: true,
                maxlength: 600,
                xssProtection: true,
                no_url: true,
                check_special_char: true,
                custom_special_characters: true,
                badwordcheck: true,
                check_different_word: true,
            },
            mailing_address: {
//                required: true,
                maxlength: 600,
                xssProtection: true,
                no_url: true,
                check_special_char: true,
                custom_special_characters: true,
                badwordcheck: true,
                check_different_word: true,
            },
            phone_number: {
                required: true,
                minlength: 6,
                maxlength: 20,
                checkallzero: true,
                no_url: true,
                xssProtection: true,
                phonenumber: {
                    depends: function () {
                        if (($("#phone_number_request").val()) != '') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            },
            contact_email: {
                required: true,
                maxlength: 100,
                emailFormat: true,
            },
            'services[]': {
                required: true,
            },
            user_message: {
                required: true,
                maxlength: 600,
                xssProtection: true,
                no_url: true,
                check_special_char: true,
                custom_special_characters: true,
                badwordcheck: true,
                check_different_word: true,
            },
            'g-recaptcha-response': {
                required: true
            }
        },
        messages: {
            first_name: {
                required: "Please enter full name.",
                maxlength: "You reach the maximum limit.",
            },
            physical_address: {
                required: "Please enter physical address.",
                maxlength: "You reach the maximum limit.",
            },
            mailing_address: {
//                required: "Please enter mailing address.",
                maxlength: "You reach the maximum limit.",
            },
            phone_number: {
                required: "Please enter phone.",
                minlength: "Please enter a phone number minimum 5 digits."
            },
            contact_email: {
                required: "Please enter email address.",
                maxlength: "You reach the maximum limit.",
            },
            'services[]': {
                required: "Please select requesting service visit.",
            },
            user_message: {
                required: "Please enter Comment.",
                maxlength: "You reach the maximum limit.",
            },
            'g-recaptcha-response': {
                required: "Please select I'm not a robot.",
            },
        },
        onfocusout: function (element) {
            this.element(element);
        },
        errorPlacement: function (error, element) {
            if (element.attr('id') == 'g-recaptcha-response') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
//            $('#submitform').attr('disabled', 'disabled');
            SetBackGround();
            form.submit();
        },
    });
    $("#requestaservice_page_form").trigger("reset");
});
function occurrences(string, substring) {
    var n = 0;
    var pos = 0;
    while (true) {
        pos = string.indexOf(substring, pos);
        if (pos != -1) {
            n++;
            pos += substring.length;
        } else {
            break;
        }
    }
    return (n);
}
function validateXSSInput(value) {
    var count = occurrences(value, '#');
    var value1 = $("<textarea/>").html(value).val();
    for (var i = 1; i <= count; i++) {
        value1 = $("<textarea/>").html(value1).val();
    }
    if (value.match(/((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)/i)) {
        return false;
    } else if (value.match(/<img|script[^>]+src/i)) {
        return false;
    } else if (value1.match(/((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)/i)) {
        return false;
    } else if (value1.match(/<img|script[^>]+src/i)) {
        return false;
    } else if (value1.match(/((\%3C)|<)(|\s|\S)+((\%3E)|>)/i)) {
        return false;
    } else {
        return true;
    }
}
//function KeycheckOnlyPhonenumber(e) {
//    var t = 0;
//    t = document.all ? 3 : document.getElementById ? 1 : document.layers ? 2 : 0;
//    if (document.all) e = window.event;
//    var n = "";
//    var r = "";
//    if (t == 2) {
//        if (e.which > 0) n = "(" + String.fromCharCode(e.which) + ")";
//        r = e.which
//    } else {
//        if (t == 3) {
//            r = window.event ? event.keyCode : e.which
//        } else {
//            if (e.charCode > 0) n = "(" + String.fromCharCode(e.charCode) + ")";
//            r = e.charCode
//        }
//    }
//    if (r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 33 && r <= 39 || r >= 42 && r <= 42 || r >= 44 && r <= 44 || r >= 46 && r <= 47 || r >= 58 && r <= 64 || r >= 91 && r <= 96 || r >= 123 && r <= 126) {
//        return false
//    }
//    return true
//}
(function ($) {
    $.fn.usPhoneFormat = function (options) {
        var params = $.extend({
            format: 'xxx-xxx-xxxx',
            international: false,
        }, options);
        if (params.format === 'xxx-xxx-xxxx') {
            $(this).bind('paste', function (e) {
                e.preventDefault();
                var inputValue = e.originalEvent.clipboardData.getData('Text');
                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {
                    inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 12);
                    $(this).val(inputValue);
                }
            });
            $(this).on('keypress', function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                } else if (curchr == 7 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '12');
            });
        } else if (params.format === '(xxx) xxx-xxxx') {
            $(this).on('keypress', function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3 && e.which != 8 && e.which != 0) {
                    $(this).val('(' + curval + ')' + " ");
                } else if (curchr == 9 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '14');
            });
            $(this).bind('paste', function (e) {
                e.preventDefault();
                var inputValue = e.originalEvent.clipboardData.getData('Text');
                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {
                    inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 14);
                    $(this).val(inputValue);
                }
            });
        }
    }
}(jQuery));