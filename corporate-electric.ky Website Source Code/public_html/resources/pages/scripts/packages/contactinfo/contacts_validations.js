/**

 * This method validates contacts's form fields

 * since   2016-12-24

 * author  NetQuick

 */

var Validate = function () {

    var handleContact = function () {

        $("#frmContactUS").validate({

            errorElement: 'span', //default input error message container

            errorClass: 'help-block', // default input error message class

            rules: {

                name: {

                    required: true,

                    noSpace: true,

                    xssProtection: true,

                    no_url: true

                },

                mobile_no:{

                    minlength: 5,

                    maxlength: 20,

                    required: true,

//                    phonenumber: {

//                        depends: function () {

//                            if (($(this).val()) != '') {

//                                return true;

//                            } else {

//                                return false;

//                            }

//                        }

//                    }

                },

                /*order: {

                 required: true,

                 minStrict: true,

                 number: true,

                 noSpace: true

                 },*/

                address: {

                    required: true,

                    xssProtection: true,

                    no_url: true

                },

                fax: {

                    xssProtection: true,

                    no_url: true

                },

                /*primary: "required"*/

            },

            messages: {

                name:{ required :Lang.get('validation.required', {

                    attribute: Lang.get('template.name')

                })},

                mobile_no : {

                    minlength: "Please enter at least 5 digits.",

                    required: "Secondry phone field is required."

                },

                /*order: {

                 required: Lang.get('validation.required', {

                 attribute: Lang.get('template.displayorder')

                 })

                 },*/

                address:{required: Lang.get('validation.required', {

                    attribute: Lang.get('template.contactModule.address')

                })}

            },

            invalidHandler: function (event, validator) { //display error alert on form submit

                var errors = validator.numberOfInvalids();

                if (errors) {

                    $.loader.close(true);

                }

                $('.alert-danger', $('#frmContactUS')).show();

            },

            highlight: function (element) { // hightlight error inputs

                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group

            },

            unhighlight: function (element) {

                $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group

            },

            submitHandler: function (form) {

                $('body').loader(loaderConfig);

                form.submit();

                return false;

            }

        });

        $('#frmContactUS input').keypress(function (e) {

            if (e.which == 13) {

                if ($('#frmContactUS').validate().form()) {

                    $('#frmContactUS').submit(); //form validation success, call ajax form submit

                }

                return false;

            }

        });

    }

    return {

        //main function to initiate the module

        init: function () {

            handleContact();

        }

    };

}();

jQuery(document).ready(function () {

    Validate.init();

    load_validation();



    $.validator.addMethod("phonenumber", function (value, element) {

        var newVal = value.replace(/^\D+/g, '');

        if (parseInt(newVal) <= 0 || newVal.match(/\d+/g) == null) {

            return false;

        } else {

            return true;

        }

    }, 'Please enter a valid phone number.');

    jQuery.validator.addMethod("noSpace", function (value, element) {

        if (value.trim().length <= 0) {

            return false;

        } else {

            return true;

        }

    }, "This field is required");



//    $('#phone_no0, #mobile_no').usPhoneFormat({

//        format: '(xxx) xxx-xxxx',

//    });

});

jQuery.validator.addMethod("phoneFormat", function (value, element) {

    // allow any non-whitespace characters as the host part

    return this.optional(element) || /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/.test(value);

}, 'Please enter a valid phone number.');



jQuery.validator.addMethod("minStrict", function (value, element) {

    // allow any non-whitespace characters as the host part

    if (value > 0) {

        return true;

    } else {

        return false;

    }

}, 'Display order must be a number higher than zero');



$('input[type=text]').change(function () {

    var input = $(this).val();

    var trim_input = input.trim();

    if (trim_input) {

        $(this).val(trim_input);

        return true;

    }



});



//########################extra field add js###########################################





$(document).on('click', '.addMoreEmail', function (e)

{

    e.preventDefault();

    if ($('.emailField').length >= 2) {

        $(this).hide();

    }



    if ($('.emailField').length < 3) {

        emcnt++;

        $('.multi-email').append('<div class="emailField form-group form-md-line-input"> <input class="form-control input-sm" maxlength="100" id="email' + emcnt + '" placeholder="Email" autocomplete="off" name="email[' + emcnt + ']" type="text"> <label class="form_title" for="email[' + emcnt + ']">Email</label> <a href="javascript:void(0);" class="removeEmail add_more" title="Remove"><i class="fa fa-times"></i> Remove</a> <span class="help-block"> </span> </div>');

        $('input[name="email[' + emcnt + ']"]').rules("add", {

            email: true,

            noSpace: true

        });

    }

});



$(document).on('click', '.removeEmail', function () {

    $(this).parent().remove();

    $('.addMoreEmail').show();

});



$(document).on('click', '.addMorePhone', function (e) {

    e.preventDefault();



    if ($('.phoneField').length >= 2) {

        $(this).hide();

    }



    if ($('.phoneField').length < 3) {

        phcnt++;

        $('.multi-phone').append('<div class="phoneField form-group form-md-line-input"> <input class="form-control input-sm mask_phone_' + phcnt + '" id="phone_no' + phcnt + '" placeholder="Phone No" autocomplete="off" maxlength="20" onkeypress="javascript: return KeycheckOnlyPhonenumber(event);" name="phone_no[' + phcnt + ']" type="text"> <label class="form_title" for="phone_no">Phone No</label> <a href="javascript:void(0);" class="removePhone add_more" title="Remove"><i class="fa fa-times"></i> Remove</a> <span class="help-block"> </span> </div>');

        $('input[name="phone_no[' + phcnt + ']"]').rules("add", {

            minlength: 5,

            maxlength: 20,

            required: true,

            phonenumber: {

                depends: function () {

                    if (($(this).val()) != '') {

                        return true;

                    } else {

                        return false;

                    }

                }

            }

        });

    }

});



$(document).on('click', '.removePhone', function () {

    $(this).parent().remove();

    $('.addMorePhone').show();

});



function load_validation() {

    if ($('.phoneField').length >= 1) {

        var phcnt = 0;

        for (var i = 0; i <= phcnt; i++) {

            $('input[name="phone_no[' + i + ']"]').rules("add", {

                minlength: 5,

                maxlength: 20,

                phonenumber: {

                    depends: function () {

                        if (($(this).val()) != '') {

                            return true;

                        } else {

                            return false;

                        }

                    }

                },

                // required: {

                //     depends: function () {

                //         if ($(this).prop('name') == 'phone_no[0]') {

                //             return true;

                //         } else {

                //             return false;

                //         }

                //     }

                // },

                messages: {

                    // required: "Phone field is required.",

                    minlength: "Please enter at least 5 digits.",

                }

            });

        }





    }



    if ($('.emailField').length >= 1) {

        var emcnt = 0;

        for (var i = 0; i <= emcnt; i++) {



            $('input[name="email[' + i + ']"]').rules("add", {

                required: true,

                email: true,

                noSpace: true,

                messages: {

                    required: "Email field is required.",

                    email: "Please enter a valid email.",

                }

            });

        }

    }



    if ($('.emailField').length >= 2) {

        $('.addMoreEmail').hide();

    }



    if ($('.phoneField').length >= 2) {

        $('.addMorePhone').hide();

    }



}





/*********** Remove Image code start Here  *************/

$(document).ready(function () {

    if ($("input[name='img_id']").val() == '') {

        $('.removeimg').hide();

        $('.image_thumb .overflow_layer').css('display', 'none');

    } else {

        $('.removeimg').show();

        $('.image_thumb .overflow_layer').css('display', 'block');

    }



    $(document).on('click', '.removeimg', function (e) {

        $("input[name='img_id']").val('');

        $("input[name='image_url']").val('');

        $(".fileinput-new div img").attr("src", site_url + "/resources/images/upload_file.gif");



        if ($("input[name='img_id']").val() == '') {

            $('.removeimg').hide();

            $('.image_thumb .overflow_layer').css('display', 'none');

        } else {

            $('.removeimg').show();

            $('.image_thumb .overflow_layer').css('display', 'block');

        }

    });

});

/************** Remove Images Code end ****************/



//====================================================================

function initMap() {

    var map;

    geocoder = new google.maps.Geocoder();

    if (geocoder) {

        geocoder.geocode({

            'address': address

        }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {

                var lattitude = results[0].geometry.location.lat();

                var longitude = results[0].geometry.location.lng();



                map = new google.maps.Map(document.getElementById('map'), {

                    center: {

                        lat: lattitude,

                        lng: longitude

                    },

                    zoom: 15,

                    styles: [{

                            "elementType": "geometry",

                            "stylers": [{

                                    "color": "#ebe3cd"

                                }]

                        }, {

                            "elementType": "labels.text.fill",

                            "stylers": [{

                                    "color": "#523735"

                                }]

                        }, {

                            "elementType": "labels.text.stroke",

                            "stylers": [{

                                    "color": "#f5f1e6"

                                }]

                        }, {

                            "featureType": "administrative",

                            "elementType": "geometry.stroke",

                            "stylers": [{

                                    "color": "#c9b2a6"

                                }]

                        }, {

                            "featureType": "administrative.land_parcel",

                            "elementType": "geometry.stroke",

                            "stylers": [{

                                    "color": "#dcd2be"

                                }]

                        }, {

                            "featureType": "administrative.land_parcel",

                            "elementType": "labels.text.fill",

                            "stylers": [{

                                    "color": "#ae9e90"

                                }]

                        }, {

                            "featureType": "landscape.natural",

                            "elementType": "geometry",

                            "stylers": [{

                                    "color": "#dfd2ae"

                                }]

                        }, {

                            "featureType": "poi",

                            "elementType": "geometry",

                            "stylers": [{

                                    "color": "#dfd2ae"

                                }]

                        }, {

                            "featureType": "poi",

                            "elementType": "labels.text.fill",

                            "stylers": [{

                                    "color": "#93817c"

                                }]

                        }, {

                            "featureType": "poi.park",

                            "elementType": "geometry.fill",

                            "stylers": [{

                                    "color": "#a5b076"

                                }]

                        }, {

                            "featureType": "poi.park",

                            "elementType": "labels.text.fill",

                            "stylers": [{

                                    "color": "#447530"

                                }]

                        }, {

                            "featureType": "road",

                            "elementType": "geometry",

                            "stylers": [{

                                    "color": "#f5f1e6"

                                }]

                        }, {

                            "featureType": "road.arterial",

                            "elementType": "geometry",

                            "stylers": [{

                                    "color": "#fdfcf8"

                                }]

                        }, {

                            "featureType": "road.highway",

                            "elementType": "geometry",

                            "stylers": [{

                                    "color": "#f8c967"

                                }]

                        }, {

                            "featureType": "road.highway",

                            "elementType": "geometry.stroke",

                            "stylers": [{

                                    "color": "#e9bc62"

                                }]

                        }, {

                            "featureType": "road.highway.controlled_access",

                            "elementType": "geometry",

                            "stylers": [{

                                    "color": "#e98d58"

                                }]

                        }, {

                            "featureType": "road.highway.controlled_access",

                            "elementType": "geometry.stroke",

                            "stylers": [{

                                    "color": "#db8555"

                                }]

                        }, {

                            "featureType": "road.local",

                            "elementType": "labels.text.fill",

                            "stylers": [{

                                    "color": "#806b63"

                                }]

                        }, {

                            "featureType": "transit.line",

                            "elementType": "geometry",

                            "stylers": [{

                                    "color": "#dfd2ae"

                                }]

                        }, {

                            "featureType": "transit.line",

                            "elementType": "labels.text.fill",

                            "stylers": [{

                                    "color": "#8f7d77"

                                }]

                        }, {

                            "featureType": "transit.line",

                            "elementType": "labels.text.stroke",

                            "stylers": [{

                                    "color": "#ebe3cd"

                                }]

                        }, {

                            "featureType": "transit.station",

                            "elementType": "geometry",

                            "stylers": [{

                                    "color": "#dfd2ae"

                                }]

                        }, {

                            "featureType": "water",

                            "elementType": "geometry.fill",

                            "stylers": [{

                                    "color": "#b9d3c2"

                                }]

                        }, {

                            "featureType": "water",

                            "elementType": "labels.text.fill",

                            "stylers": [{

                                    "color": "#92998d"

                                }]

                        }]

                });



                var infowindow = new google.maps.InfoWindow({

                    content: pinaddress

                });



                var marker = new google.maps.Marker({

                    position: {

                        lat: lattitude,

                        lng: longitude

                    },

                    map: map

                });



                marker.addListener('click', function () {

                    infowindow.open(map, marker);

                });

                infowindow.open(map, marker);



            }

        });

    }

}

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