var ignoreItems = '';
var selectedItems = '';
var recTitle = [];

var OurClientModule = function () {
    // public functions
    return {
        reInitSortable: function () {
            $("#section-container").sortable('destroy');
            $("#section-container").sortable({
                placeholder: "ui-state-highlight",
                handle: '.fa-arrows-alt'
            });
        },
        moduleSectionsOurClient: function (caption, config, configTxt, recids, recTitle, edit, template, layoutType, extra_class) {
            recids = recids.split(',');
            recTitle = recTitle.split(',');

            if (recids == '') {
                recids = [];
                recTitle = [];
            }

            recids = $.unique(recids);
            recTitle = $.unique(recTitle);

            var section = '';

            if (edit == 'N') {
                var iCount = 'item-' + ($('.ui-state-default').length + 1);

                section += '<div class="ui-state-default">';
                section += '<i title="Drag" class="action-icon move fa fa-arrows-alt"></i>';
                section += '<a href="javascript:;" data-filter="' + template + '" class="close-btn" title="Delete">';
                section += '<i class="action-icon delete fa fa-trash"></i>';
                section += '</a>';
                section += '<a href="javascript:;" data-filter="' + template + '" title="Edit" data-id="' + iCount + '" class="ourclient-module">';
                section += '<i class="action-icon edit fa fa-pencil"></i>';
                section += '</a>';
                section += '<div class="clearfix"></div>';
                section += '<div class="section-item defoult-module module" data-editor="' + iCount + '">';
                section += '<div class="col-md-12">';
                section += '<label><b>' + caption + '</b></label>';
                section += '<ul class="record-list">';
                $.each(recids, function (index, value) {
                    section += '<li data-id="' + value + '" id="' + value + '-item-' + iCount + '">' + recTitle[index] + '<a href="javascript:;" class="close-icon" title="Delete"><i class="fa fa-times" aria-hidden="true"></i></a></li>';
                });
                section += '</ul>';
                section += '<a data-id="' + iCount + '" data-filter="' + template + '" title="Add more" class="add-link ourclient-module" href="javascript:;">';
                section += '<i class="fa fa-plus"></i>&nbsp;Add more';
                section += '</a>';
                section += '</div>';
                section += '<input id="' + iCount + '" data-extclass="' + extra_class + '" data-filter="' + template + '" type="hidden" data-config="' + config + '" data-layout="' + layoutType + '" data-caption="' + caption + '" data-type="module" value="ourclient" />';
                section += '<div class="clearfix"></div>';
                section += '</div>';

                if ($('#section-container .ui-state-default').length > 0) {
                    $(section).insertAfter($('#section-container .ui-state-default:last'));
                } else {
                    $('#section-container').append(section);
                }
            } else {
                var ourclientIds = [];
                var ourclientTitles = [];
                var ourclientCustomized = [];
                var ourclientDescription = [];


                $('.section-item[data-editor=' + edit + '] li').each(function (key, val) {
                    var iId = $(this).data('id');
                    ourclientIds.push(iId);

                    var iTitle = $(this).text();
                    ourclientTitles.push(iTitle);

                    var Icustomized = $(this).data('customized');
                    if (typeof Icustomized != 'undefined') {
                        ourclientCustomized.push(Icustomized);
                    }


                    var Idescription = $(this).data('description');
                    if (typeof Idescription != 'undefined') {
                        ourclientDescription.push(Idescription.toString());
                    }


                });

                $.each(recids, function (index, value) {
                    ourclientIds.push(value);
                    ourclientTitles.push(recTitle[index]);
                    ourclientCustomized.push(false);
                    ourclientDescription.push('');
                });

                section += '<div class="col-md-12">';
                section += '<label><b>' + caption + '</b></label>';
                section += '<ul class="record-list">';
                $.each(ourclientIds, function (index, value) {
                    if (value != '') {
                        section += '<li data-customized="' + ourclientCustomized[index] + '"  data-description="' + ourclientDescription[index] + '" data-id="' + value + '" id="' + value + '-item-' + edit + '">' + ourclientTitles[index] + '<a href="javascript:;" class="close-icon" title="Delete"><i class="fa fa-times" aria-hidden="true"></i></a></li>';
                    }
                });
                section += '</ul>';
                section += '<a data-id="' + edit + '" data-filter="' + template + '" title="Add more" class="add-link ourclient-module" href="javascript:;">';
                section += '<i class="fa fa-plus"></i>&nbsp;Add more';
                section += '</a>';
                section += '</div>';
                section += '<input id="' + edit + '" data-extclass="' + extra_class + '" data-filter="' + template + '" type="hidden" data-config="' + config + '" data-layout="' + layoutType + '" data-caption="' + caption + '" data-type="module" value="ourclient" />';
                section += '<div class="clearfix"></div>';
                $('#section-container').find('div[data-editor=' + edit + ']').html(section);
            }
        },
        ourclientTemplate: function (val, config, template, edit, configTxt, layout, extra_class, sectiondesc) {
            var section = '';
            
            if (edit == 'N') {
                
                var iCount = 'item-' + ($('.ui-state-default').length + 1);
                section += '<div class="ui-state-default">';
                section += '<i title="Drag" class="action-icon move fa fa-arrows-alt"></i>';
                section += '<a href="javascript:;" data-filter="' + template + '" class="close-btn" title="Delete">';
                section += '<i class="action-icon delete fa fa-trash"></i>';
                section += '</a>';
                section += '<a href="javascript:;" data-filter="' + template + '" title="Edit" data-id="' + iCount + '" class="ourclient-template">';
                section += '<i class="action-icon edit fa fa-pencil"></i>';
                section += '</a>';
                section += '<div class="clearfix"></div>';
                section += '<div class="defoult-module section-item ourclientTemplate" data-editor="' + iCount + '">';
                section += '<div class="col-md-12"><label><b>' + val + '</b></label><ul><li>Template: ' + template + '</li></ul></div>';
                section += '<input data-extclass="' + extra_class + '" id="' + iCount + '" data-layout="' + layout + '" data-type="' + template + '" data-config="' + config + '" data-sectiondesc="' + sectiondesc + '" type="hidden" class="txtip" value="' + val + '"/>';
                section += '<div class="clearfix"></div>';
                section += '</div>';
                section += '</div>';

                if ($('#section-container .ui-state-default').length > 0) {
                    $(section).insertAfter($('#section-container .ui-state-default:last'));
                } else {
                    $('#section-container').append(section);
                }

            } else {
                section += '<div class="col-md-12"><label><b>' + val + '</b></label><ul><li>Template: ' + template + '</li></ul></div>';
                section += '<input id="' + edit + '" data-extclass="' + extra_class + '" data-layout="' + layout + '" data-type="' + template + '" data-config="' + config + '" data-sectiondesc="' + sectiondesc + '" type="hidden" class="txtip" value="' + val + '"/>';
                section += '<div class="clearfix"></div>';
                $('#section-container').find('div[data-editor=' + edit + ']').html(section);
            }
        },
        moduleSectionsOurExpertise: function (caption, config, configTxt, recids, recTitle, edit, template, layoutType, extra_class, section_description) {
            recids = recids.split(',');
            recTitle = recTitle.split(',');
        
            if (recids == '') {
                recids = [];
                recTitle = [];
            }
        
            recids = $.unique(recids);
            recTitle = $.unique(recTitle);
        
            var section = '';
        
            if (edit == 'N') {
                var iCount = 'item-' + ($('.ui-state-default').length + 1);
        
                section += '<div class="ui-state-default">';
                section += '<i title="Drag" class="action-icon move fa fa-arrows-alt"></i>';
                section += '<a href="javascript:;" data-filter="' + template + '" class="close-btn" title="Delete">';
                section += '<i class="action-icon delete fa fa-trash"></i>';
                section += '</a>';
                section += '<a href="javascript:;" data-filter="' + template + '" title="Edit" data-id="' + iCount + '" class="ourexpertise-module">';
                section += '<i class="action-icon edit fa fa-pencil"></i>';
                section += '</a>';
                section += '<div class="clearfix"></div>';
                section += '<div class="section-item defoult-module module" data-editor="' + iCount + '">';
                section += '<div class="col-md-12">';
                section += '<label><b>' + caption + '</b></label>';
                section += '<ul class="record-list">';
                $.each(recids, function (index, value) {
                    section += '<li data-id="' + value + '" id="' + value + '-item-' + iCount + '">' + recTitle[index] + '<a href="javascript:;" class="close-icon" title="Delete"><i class="fa fa-times" aria-hidden="true"></i></a></li>';
                });
                section += '</ul>';
                section += '<a data-id="' + iCount + '" data-filter="' + template + '" title="Add more" class="add-link ourexpertise-module" href="javascript:;">';
                section += '<i class="fa fa-plus"></i>&nbsp;Add more';
                section += '</a>';
                section += '</div>';
                section += '<input id="' + iCount + '" data-extclass="' + extra_class + '" data-section_description="' + section_description + '" data-filter="' + template + '" type="hidden" data-config="' + config + '" data-layout="' + layoutType + '" data-caption="' + caption + '" data-type="module" value="ourexpertise" />';
                section += '<div class="clearfix"></div>';
                section += '</div>';
        
                if ($('#section-container .ui-state-default').length > 0) {
                    $(section).insertAfter($('#section-container .ui-state-default:last'));
                } else {
                    $('#section-container').append(section);
                }
            } else {
                var ourclientIds = [];
                var ourclientTitles = [];
                var ourclientCustomized = [];
                var ourclientDescription = [];
        
        
                $('.section-item[data-editor=' + edit + '] li').each(function (key, val) {
                    var iId = $(this).data('id');
                    ourclientIds.push(iId);
        
                    var iTitle = $(this).text();
                    ourclientTitles.push(iTitle);
        
                    var Icustomized = $(this).data('customized');
                    if (typeof Icustomized != 'undefined') {
                        ourclientCustomized.push(Icustomized);
                    }
        
        
                    var Idescription = $(this).data('description');
                    if (typeof Idescription != 'undefined') {
                        ourclientDescription.push(Idescription.toString());
                    }
        
        
                });
        
                $.each(recids, function (index, value) {
                    ourclientIds.push(value);
                    ourclientTitles.push(recTitle[index]);
                    ourclientCustomized.push(false);
                    ourclientDescription.push('');
                });
        
                section += '<div class="col-md-12">';
                section += '<label><b>' + caption + '</b></label>';
                section += '<ul class="record-list">';
                $.each(ourclientIds, function (index, value) {
                    if (value != '') {
                        section += '<li data-customized="' + ourclientCustomized[index] + '"  data-description="' + ourclientDescription[index] + '" data-id="' + value + '" id="' + value + '-item-' + edit + '">' + ourclientTitles[index] + '<a href="javascript:;" class="close-icon" title="Delete"><i class="fa fa-times" aria-hidden="true"></i></a></li>';
                    }
                });
                section += '</ul>';
                section += '<a data-id="' + edit + '" data-filter="' + template + '" title="Add more" class="add-link ourexpertise-module" href="javascript:;">';
                section += '<i class="fa fa-plus"></i>&nbsp;Add more';
                section += '</a>';
                section += '</div>';
                section += '<input id="' + edit + '" data-extclass="' + extra_class + '" data-section_description="' + section_description + '" data-filter="' + template + '" type="hidden" data-config="' + config + '" data-layout="' + layoutType + '" data-caption="' + caption + '" data-type="module" value="ourexpertise" />';
                section += '<div class="clearfix"></div>';
                $('#section-container').find('div[data-editor=' + edit + ']').html(section);
            }
        },
        submitFrmSectionOurClientModuleTemplate: function () {
            if ($('#frmSectionOurClientModuleTemplate').validate().form()) {
                var edit = $('#frmSectionOurClientModuleTemplate input[name=editing]').val() != '' ? $('#frmSectionOurClientModuleTemplate input[name=editing]').val() : 'N';
                $('#no-content').addClass('hide');
                $('#has-content').removeClass('hide');
                var val = $('#frmSectionOurClientModuleTemplate input[name=section_title]').val();
                var extra_class = $('#frmSectionOurClientModuleTemplate input[name=extra_class]').val();
                var template = $('#frmSectionOurClientModuleTemplate input[name=template]').val();
                var sectiondesc = $('#frmSectionOurClientModuleTemplate textarea[name=content]').val();
                var config = $('#frmSectionOurClientModuleTemplate select[name=section_config]').val();
                var configTxt = $('#frmSectionOurClientModuleTemplate .config option:selected').text();
                var layout = $('#frmSectionOurClientModuleTemplate select[name=layoutType]').val();
                OurClientModule.ourclientTemplate(val, config, template, edit, configTxt, layout, extra_class, sectiondesc);
                $('#sectionOurClientModuleTemplate').modal('hide');
            }
        },
        submitFrmSectionOurClientModule: function () {
            if ($('#frmSectionOurClientModule').validate().form()) {
                var edit = $('#frmSectionOurClientModule input[name=editing]').val() != '' ? $('#frmSectionOurClientModule input[name=editing]').val() : 'N';
                $('#no-content').addClass('hide');
                $('#has-content').removeClass('hide');
                var template = $('#frmSectionOurClientModule input[name=template]').val();
                var extra_class = $('#frmSectionOurClientModule input[name=extra_class]').val();
                var imgCaption = $('#frmSectionOurClientModule input[name=section_title]').val();
                var config = $('#frmSectionOurClientModule .config').val();
                var configTxt = $('#frmSectionOurClientModule .config option:selected').text();
                var layoutType = $('#frmSectionOurClientModule select[name=layoutType]').val();
                var recids = $('#frmSectionOurClientModule input[name=selectedIds]').val();
                var recTitle = $('#frmSectionOurClientModule input[name=selectedTitles]').val();

                OurClientModule.moduleSectionsOurClient(imgCaption, config, configTxt, recids, recTitle, edit, template, layoutType, extra_class);
                OurClientModule.reInitSortable();
                $('#sectionOurClientModule').modal('hide');
            }
        },
        submitFrmSectionOurExpertiseModule: function () {
            if ($('#frmSectionOurExpertiseModule').validate().form()) {
                var edit = $('#frmSectionOurExpertiseModule input[name=editing]').val() != '' ? $('#frmSectionOurExpertiseModule input[name=editing]').val() : 'N';
                $('#no-content').addClass('hide');
                $('#has-content').removeClass('hide');
                var template = $('#frmSectionOurExpertiseModule input[name=template]').val();
                var extra_class = $('#frmSectionOurExpertiseModule input[name=extra_class]').val();
                var imgCaption = $('#frmSectionOurExpertiseModule input[name=section_title]').val();
                var config = $('#frmSectionOurExpertiseModule .config').val();
                var configTxt = $('#frmSectionOurExpertiseModule .config option:selected').text();
                var layoutType = $('#frmSectionOurExpertiseModule select[name=layoutType]').val();
                var recids = $('#frmSectionOurExpertiseModule input[name=selectedIds]').val();
                var recTitle = $('#frmSectionOurExpertiseModule input[name=selectedTitles]').val();
                var section_description = $('#frmSectionOurExpertiseModule textarea[name=section_description]').val();
        
                OurClientModule.moduleSectionsOurExpertise(imgCaption, config, configTxt, recids, recTitle, edit, template, layoutType, extra_class, section_description);
                OurClientModule.reInitSortable();
                $('#sectionOurExpertiseModule').modal('hide');
            }
        }
    };
}();

var OurClientDataTable = function () {
    // public functions
    return {
        //main function
        init: function (from, to) {
            var sort = $('#sectionOurClientModule #columns').val();
            var ajaxUrl = site_url + '/powerpanel/ourclient/get_builder_list';

            jQuery.ajax({
                type: "POST",
                url: ajaxUrl,
                dataType: 'JSON',
                data: {
                    critaria: $('#frmSectionOurClientModule input[name=template]').val(),
                    columns: sort[0],
                    order: sort[1],
                    catValue: $('#sectionOurClientModule #category-id').val(),
                    status: '',
                    searchValue: $('#sectionOurClientModule #searchfilter').val(),
                    start: from,
                    length: to,
                    ignore: ignoreItems,
                    selected: selectedItems
                },
                async: false,
                success: function (result) {
                    $('#sectionOurClientModule #record-table').append(result.data);
                    $('input[name=total_records]').val(result.recordsTotal);
                    $('input[name=found]').val(result.found);
                    if (result.recordsTotal == 0 || result.found == 0) {
                        $('#frmSectionOurClientModule').find('.addSection').attr('disabled', 'disabled');
                    } else {
                        $('#frmSectionOurClientModule').find('.addSection').removeAttr('disabled');
                    }

                },
                error: function (req, err) {
                    console.log('error:' + err);
                }
            });
        },
        getCategory: function () {

            var ajaxUrl = site_url + '/powerpanel/ourclient/get_builder_list';
            jQuery.ajax({
                type: "POST",
                url: ajaxUrl,
                dataType: 'HTML',
                async: false,
                success: function (result) {
                    $('#sectionOurClientModule #category-id').html(result);
                }
            });

        }
    };
}();

var validateSectionOurClient = function () {
    var handleSectionOurClient = function () {
        $("#frmSectionOurClientModule").validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            ignore: [],
            rules: {
                section_title: {
                    required: true,
                    noSpace: true
                },
                // section_config: {
                //     required: true,
                //     noSpace: true
                // },
                // layoutType: {
                //     required: true,
                // },
                'delete[]': {
                    required: {
                        depends: function () {
                            return $('#frmSectionOurClientModule input[name="editing"]').val() == '';
                        }
                    }
                }
            },
            messages: {
                section_title: "Caption is required",
                // section_config: "Configurations is required",
                // layoutType: "Please select layout",
                'delete[]': "Please select at least one record",
            },
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else if (element.hasClass('chkChoose')) {
                    error.insertBefore($('#frmSectionOurClientModule .table-container .table:first'));
                } else if (element.attr('class') == 'ck-area') {
                    error.insertAfter(element.next('.ck-editor'));
                } else if (element.attr('name') == 'selector') {
                    error.insertAfter(element.closest('ul'));
                } else {
                    error.insertAfter(element);
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                var errors = validator.numberOfInvalids();
                if (errors) {
                    $.loader.close(true);
                }
                $('.alert-danger', $('#frmSectionOurClientModule')).show();
            },
            highlight: function (element) { // hightlight error inputs
                if ($(element).hasClass('chkChoose')) {
                    $(element).closest('td').addClass('has-error'); // set error class to the control group       
                } else {
                    $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
                }
            },
            unhighlight: function (element) {
                if ($(element).hasClass('chkChoose')) {
                    $(element).closest('td').removeClass('has-error');
                } else {
                    $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
                }
            },
            submitHandler: function (form) {
                OurClientModule.submitFrmSectionOurClientModule();
                return false;
            }
        });

        $('#frmSectionOurClientModule input').keypress(function (e) {
            if (e.which == 13) {
                OurClientModule.submitFrmSectionOurClientModule();
                return false;
            }
        });
    }
    return {
        //main function to initiate the module
        init: function () {
            handleSectionOurClient();
        },
        reset: function () {
            var validator = $("#frmSectionOurClientModule").validate();
            validator.resetForm();
        }
    };
}();

var ourclientTemplate = function () {
    var ourclientTemplate = function () {
        $("#frmSectionOurClientModuleTemplate").validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            ignore: [],
            rules: {
                section_title: {
                    required: true,
                    noSpace: true
                },
                // layoutType: {
                //     required: true
                // },
                // section_config: {
                //     required: true,
                //     noSpace: true
                // }
            },
            messages: {
                section_title: {
                    required: "Title is required"
                },
                // layoutType: {
                //     required: "Layout is required"
                // },
                // section_config: {
                //     required: "Configurations is required"
                // }
            },
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else if (element.hasClass('select2')) {
                    error.insertAfter(element.next('span'));
                } else if (element.attr('class') == 'ck-area') {
                    error.insertAfter(element.next('.ck-editor'));
                } else {
                    error.insertAfter(element);
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                var errors = validator.numberOfInvalids();
                if (errors) {
                    $.loader.close(true);
                }
                $('.alert-danger', $('#frmSectionOurClientModuleTemplate')).show();
            },
            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            submitHandler: function (form) {
                OurClientModule.submitFrmSectionOurClientModuleTemplate();
                return false;
            }
        });
        $('#frmSectionOurClientModuleTemplate input').keypress(function (e) {
            if (e.which == 13) {
                OurClientModule.submitFrmSectionOurClientModuleTemplate();
                return false;
            }
        });
    }
    return {
        //main function to initiate the module
        init: function () {
            ourclientTemplate();
        },
        reset: function () {
            var validator = $("#frmSectionOurClientModuleTemplate").validate();
            validator.resetForm();
        }
    };
}();


var range = 5;
var start = 0;
var end = range;

//..Open while add or edit section
var id = '';
var caption = '';
var template = '';

$(document).on('click', '.ourclient-module', function (event) {
    id = $(this).data('id');
    caption = $(this).text();
    template = $(this).data('filter');
    $('#pgBuiderSections').modal('hide');
    $('#sectionOurClientModule').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#sectionOurClientModule [data-dismiss="modal"]').attr("data-toggle", "");
    $('#sectionOurClientModule [data-dismiss="modal"]').attr("data-target", "");
});


$(document).on('click', '.ourclient', function (event) {
    caption = $(this).text();
    template = $(this).data('filter');
    id = '';
    ignoreItems = '';
    $('#pgBuiderSections').modal('hide');
    $('#sectionOurClientModule').modal({
        backdrop: 'static',
        keyboard: false,
        show: true
    });
});

$(document).on('click', '.ourclient-template', function (event)
{
    $('#sectionOurClientModuleTemplate [data-dismiss="modal"]').attr("data-toggle", "");
    $('#sectionOurClientModuleTemplate [data-dismiss="modal"]').attr("data-target", "");

    $('#pgBuiderSections').modal('hide');
    $('#sectionOurClientModuleTemplate').modal({
        backdrop: 'static',
        keyboard: false
    });

    var id = $(this).data('id');
    var layout = '';
    if (typeof id != 'undefined')
    {
        var extclass = $('#' + id).data('extclass');
        var sectiondesc = $('#' + id).data('sectiondesc');
        var value = $('#' + id).val();
        layout = $('#' + id).data('layout');
        var config = $('#' + id).data('config');
       
        $('#frmSectionOurClientModuleTemplate input[name=editing]').val(id);
        $('#frmSectionOurClientModuleTemplate input[name=section_title]').val($.trim(value));
        $('#frmSectionOurClientModuleTemplate select[name=layoutType] option[value=' + layout + ']').prop('selected', true);
        $('#frmSectionOurClientModuleTemplate .config option[value=' + config + ']').prop('selected', true);
        $('#frmSectionOurClientModuleTemplate input[name=extra_class]').val(extclass);
        $('#frmSectionOurClientModuleTemplate textarea[name=content]').val(sectiondesc);
        $('#frmSectionOurClientModuleTemplate .addSection').text('Update');
        $('#frmSectionOurClientModuleTemplate #exampleModalLabel b').text('Edit Client');

    } else {

        var value = $(this).text();
        $('#frmSectionOurClientModuleTemplate input[name=editing]').val('');
        $('#frmSectionOurClientModuleTemplate input[name=section_title]').val($.trim(value));
        //$('#frmSectionOurClientModuleTemplate select[name=layoutType] option:first').prop('selected', true);
        $('#frmSectionOurClientModuleTemplate input[name=extra_class]').val('');
        $('#frmSectionOurClientModuleTemplate textarea[name=content]').val('');
        $('#frmSectionOurClientModuleTemplate .addSection').text('Add');
        $('#frmSectionOurClientModuleTemplate #exampleModalLabel b').text('Add Client');

        $('#sectionOurClientModuleTemplate [data-dismiss="modal"]').attr("data-toggle", "modal");
//        $('#sectionOurClientModuleTemplate [data-dismiss="modal"]').attr( "data-target", "#pgBuiderSections" );

    }

    $('#frmSectionOurClientModuleTemplate').find('input[name=template]').val($(this).data('filter'));

});

$('#frmSectionOurClientModuleTemplate').on('submit', function (e) {
    e.preventDefault();
});

//..End Open while add or edit section

$('#sectionOurClientModule').on('shown.bs.modal', function () {
    caption = $.trim(caption);
    //$('#datatable_ourclient_ajax').closest('.col-md-12').loading('start');
    validateSectionOurClient.init();
    $(this).find('.group-checkable').prop('checked', false);
    selectedItems = [];
    recTitle = [];
    ignoreItems = [];
    $('#sectionOurClientModule input[name=selectedIds]').val(null);
    $('#sectionOurClientModule input[name=selectedTitles]').val(null);
    $('select').selectpicker('destroy');
    OurClientDataTable.getCategory();
    $('#frmSectionOurClientModule #category-id option:first').prop('selected', true);
    $('#frmSectionOurClientModule #columns option:selected').prop('selected', false);
    $('#frmSectionOurClientModule #columns option[value=varTitle]').prop('selected', true);
    $('#frmSectionOurClientModule #columns option[value=asc]').prop('selected', true);
    $('#frmSectionOurClientModule input[name=template]').val(template);
    var layout = '';
    if (id != '') {
        caption = $('#' + id).data('caption');
        layout = $('#' + id).data('layout');
        var config = $('#' + id).data('config');
        var extClass = $('#' + id).data('extclass');
        $('#frmSectionOurClientModule input[name=editing]').val(id);
        $('#frmSectionOurClientModule input[name=extra_class]').val(extClass);
        $('#frmSectionOurClientModule select[name=layoutType] option[value=' + layout + ']').prop('selected', true);
        $('#frmSectionOurClientModule .config').children('option[value=' + config + ']').prop('selected', true);

        $('.section-item[data-editor=' + id + '] li').each(function (key, val) {
            var iId = $(this).data('id');
            ignoreItems.push(iId);
        });

        $('#sectionOurClientModule .addSection').text('Update');
        $('#sectionOurClientModule #exampleModalLabel b').text('Update Client');
    } else {
        $('#frmSectionOurClientModule input[name=editing]').val('');
        $('#frmSectionOurClientModule input[name=extra_class]').val('');
        //$('#frmSectionOurClientModule select[name=layoutType] option:first').prop('selected', true);
        $('#frmSectionOurClientModule .config').children('option[value=7]').prop('selected', true);

        $('#sectionOurClientModule .addSection').text('Add');
        $('#sectionOurClientModule #exampleModalLabel b').text('Client');

        $('#sectionOurClientModule [data-dismiss="modal"]').attr("data-toggle", "modal");
//        $('#sectionOurClientModule [data-dismiss="modal"]').attr( "data-target", "#pgBuiderSections" );
    }

    $('#frmSectionOurClientModule input[name=section_title]').val(caption);
    $('select').selectpicker();
    OurClientDataTable.init(start, range);
    $("#frmSectionOurClientModule #mcscroll").mCustomScrollbar({
        axis: "y",
        theme: "dark",
        callbacks: {
            onTotalScroll: function () {
                if ($('input[name=found]').val() > 0) {
                    if ($('#sectionOurClientModule').find('#record-table tr').length < $('input[name=total_records]').val()) {
                        start += range;
                        end += range;
                        OurClientDataTable.init(start, range);
                    }
                }
            }
        }
    });

}).on('hidden.bs.modal', function () {

    range = 10;
    start = 0;
    end = range;
    $('#sectionOurClientModule select[name=layoutType] option[class=list]').show();
    $('#sectionOurClientModule #record-table').html('');
    $(".record-list").sortable().disableSelection();
    $('#sectionOurClientModule select').selectpicker('destroy');
    validateSectionOurClient.reset();

});


$('#sectionOurClientModuleTemplate').on('shown.bs.modal', function () {
    $('#sectionOurClientModuleTemplate select').selectpicker('');
    ourclientTemplate.init();
}).on('hidden.bs.modal', function () {
    $('#sectionOurClientModuleTemplate select').selectpicker('destroy');
    ourclientTemplate.reset();
});

$(document).ajaxStart(function () {
    $('.table-scrollable').loader(loaderConfig);
}).ajaxComplete(function () {
    setTimeout(function () {
        $.loader.close(true);
    }, 500);
});

$(document).on('keyup', '#sectionOurClientModule #searchfilter', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionOurClientModule #record-table').html('');
    OurClientDataTable.init(start, range);
});

$(document).on('change', '#sectionOurClientModule #columns', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionOurClientModule #record-table').html('');
    OurClientDataTable.init(start, range);
});

$(document).on('change', '#sectionOurClientModule #category-id', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionOurClientModule #record-table').html('');
    OurClientDataTable.init(start, range);
});


//Group checkbox checking
$(document).on('change', '#sectionOurClientModule .group-checkable', function () {

    if ($(this).prop('checked')) {
        $('#sectionOurClientModule #record-table .chkChoose').prop('checked', true);
        $('#sectionOurClientModule #record-table .chkChoose').parent().parent().parent().addClass('selected-record');
        $('#sectionOurClientModule #record-table .chkChoose:checked').each(function (index, value) {
            var id = $(this).val();
            if (!selectedItems.includes(id)) {
                selectedItems.push(id);
                recTitle.push($(this).data('title'));
            }
        });
    } else {
        $('#sectionOurClientModule #record-table .chkChoose').prop('checked', false);
        $('#sectionOurClientModule #record-table .chkChoose').parent().parent().parent().removeClass('selected-record');
        selectedItems = [];
        recTitle = [];
    }
    $('#sectionOurClientModule input[name=selectedIds]').val(selectedItems);
    $('#sectionOurClientModule input[name=selectedTitles]').val(recTitle);
});

$(document).on('change', '#sectionOurClientModule #record-table .chkChoose', function () {
    var id = $(this).val();
    if ($(this).prop('checked')) {

        if (!selectedItems.includes(id)) {
            selectedItems.push(id);
            recTitle.push($(this).data('title'));
        }

        $(this).parent().parent().parent().addClass('selected-record');

    } else {
        selectedItems.pop(id);
        recTitle.pop($(this).data('title'));
        $(this).parent().parent().parent().removeClass('selected-record');
    }

    if ($('#sectionOurClientModule #record-table .chkChoose:checked').length == $('#sectionOurClientModule #record-table tr .chkChoose').length) {
        $('#sectionOurClientModule .group-checkable').prop('checked', true);
    } else {
        $('#sectionOurClientModule .group-checkable').prop('checked', false);
    }

    $('#sectionOurClientModule input[name=selectedIds]').val(selectedItems);
    $('#sectionOurClientModule input[name=selectedTitles]').val(recTitle);
});

$(document).on('click', '#sectionOurClientModule #record-table tr', function (e) {
    var $cell = $(e.target).closest('td');
    if ($cell.index() > 0) {
        if ($(this).find('.chkChoose').prop('checked')) {
            $(this).find('.chkChoose').prop('checked', false).trigger('change');
            $(this).removeClass('selected-record');
        } else {
            $(this).find('.chkChoose').prop('checked', true).trigger('change');
            $(this).addClass('selected-record');
        }
    }
});

$(document).on('change', '#sectionOurClientModule #columns', function () {
    if ($(this).find('option:selected').length > 1) {
        //$('#mCSB_1_container').trigger('click');
    }
});
//..Group checkbox checking

$(document).on('click', '.ourexpertise', function (event) {
    caption = $(this).text();
    template = $(this).data('filter');
    id = '';
    ignoreItems = '';
    $('#pgBuiderSections').modal('hide');
    $('#sectionOurExpertiseModule').modal({
        backdrop: 'static',
        keyboard: false,
        show: true
    });
});

$(document).on('click', '.ourexpertise-module', function (event) {
    id = $(this).data('id');
    caption = $(this).text();
    template = $(this).data('filter');
    $('#pgBuiderSections').modal('hide');
    $('#sectionOurExpertiseModule').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#sectionOurExpertiseModule [data-dismiss="modal"]').attr("data-toggle", "");
    $('#sectionOurExpertiseModule [data-dismiss="modal"]').attr("data-target", "");
});

$('#sectionOurExpertiseModule').on('shown.bs.modal', function () {
    caption = $.trim(caption);
    //$('#datatable_ourclient_ajax').closest('.col-md-12').loading('start');
    validateSectionOurExpertise.init();
    $(this).find('.group-checkable').prop('checked', false);
    selectedItems = [];
    recTitle = [];
    ignoreItems = [];
    $('#sectionOurExpertiseModule input[name=selectedIds]').val(null);
    $('#sectionOurExpertiseModule input[name=selectedTitles]').val(null);
    $('select').selectpicker('destroy');
    OurExpertiseDataTable.getCategory();
    $('#frmSectionOurExpertiseModule #category-id option:first').prop('selected', true);
    $('#frmSectionOurExpertiseModule #columns option:selected').prop('selected', false);
    $('#frmSectionOurExpertiseModule #columns option[value=varTitle]').prop('selected', true);
    $('#frmSectionOurExpertiseModule #columns option[value=asc]').prop('selected', true);
    $('#frmSectionOurExpertiseModule input[name=template]').val(template);
    var layout = '';
    if (id != '') {
        caption = $('#' + id).data('caption');
        layout = $('#' + id).data('layout');
        var config = $('#' + id).data('config');
        var extClass = $('#' + id).data('extclass');
        var section_description = $('#' + id).data('section_description');
        $('#frmSectionOurExpertiseModule input[name=editing]').val(id);
        $('#frmSectionOurExpertiseModule input[name=extra_class]').val(extClass);
        $('#frmSectionOurExpertiseModule textarea[name=section_description]').val(section_description);
        $('#frmSectionOurExpertiseModule select[name=layoutType] option[value=' + layout + ']').prop('selected', true);
        $('#frmSectionOurExpertiseModule .config').children('option[value=' + config + ']').prop('selected', true);

        $('.section-item[data-editor=' + id + '] li').each(function (key, val) {
            var iId = $(this).data('id');
            ignoreItems.push(iId);
        });

        $('#sectionOurExpertiseModule .addSection').text('Update');
        $('#sectionOurExpertiseModule #exampleModalLabel b').text('Update Our Expertise');
    } else {
        $('#frmSectionOurExpertiseModule input[name=editing]').val('');
        $('#frmSectionOurExpertiseModule input[name=extra_class]').val('');
        //$('#frmSectionOurExpertiseModule select[name=layoutType] option:first').prop('selected', true);
        $('#frmSectionOurExpertiseModule .config').children('option[value=7]').prop('selected', true);

        $('#sectionOurExpertiseModule .addSection').text('Add');
        $('#sectionOurExpertiseModule #exampleModalLabel b').text('Our Expertise');

        $('#sectionOurExpertiseModule [data-dismiss="modal"]').attr("data-toggle", "modal");
//        $('#sectionOurExpertiseModule [data-dismiss="modal"]').attr( "data-target", "#pgBuiderSections" );
    }

    $('#frmSectionOurExpertiseModule input[name=section_title]').val(caption);
    $('select').selectpicker();
    OurExpertiseDataTable.init(start, range);
    $("#frmSectionOurExpertiseModule #mcscroll").mCustomScrollbar({
        axis: "y",
        theme: "dark",
        callbacks: {
            onTotalScroll: function () {
                if ($('input[name=found]').val() > 0) {
                    if ($('#sectionOurExpertiseModule').find('#record-table tr').length < $('input[name=total_records]').val()) {
                        start += range;
                        end += range;
                        OurExpertiseDataTable.init(start, range);
                    }
                }
            }
        }
    });
    
}).on('hidden.bs.modal', function () {

    range = 10;
    start = 0;
    end = range;
    $('#sectionOurExpertiseModule select[name=layoutType] option[class=list]').show();
    $('#sectionOurExpertiseModule #record-table').html('');
    $(".record-list").sortable().disableSelection();
    $('#sectionOurExpertiseModule select').selectpicker('destroy');
    validateSectionOurExpertise.reset();

});

var validateSectionOurExpertise = function () {
    var handleSectionOurExpertise = function () {
        $("#frmSectionOurExpertiseModule").validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            ignore: [],
            rules: {
                section_title: {
                    required: true,
                    noSpace: true
                },
                section_description: {
                    required: true,
                    noSpace: true
                },
                // section_config: {
                //     required: true,
                //     noSpace: true
                // },
                // layoutType: {
                //     required: true,
                // },
                'delete[]': {
                    required: {
                        depends: function () {
                            return $('#frmSectionOurExpertiseModule input[name="editing"]').val() == '';
                        }
                    }
                }
            },
            messages: {
                section_title: "Title is required.",
                section_description: "Description is required.",
                // section_config: "Configurations is required",
                // layoutType: "Please select layout",
                'delete[]': "Please select at least one record.",
            },
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else if (element.hasClass('chkChoose')) {
                    error.insertBefore($('#frmSectionOurExpertiseModule .table-container .table:first'));
                } else if (element.attr('class') == 'ck-area') {
                    error.insertAfter(element.next('.ck-editor'));
                } else if (element.attr('name') == 'selector') {
                    error.insertAfter(element.closest('ul'));
                } else {
                    error.insertAfter(element);
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                var errors = validator.numberOfInvalids();
                if (errors) {
                    $.loader.close(true);
                }
                $('.alert-danger', $('#frmSectionOurExpertiseModule')).show();
            },
            highlight: function (element) { // hightlight error inputs
                if ($(element).hasClass('chkChoose')) {
                    $(element).closest('td').addClass('has-error'); // set error class to the control group       
                } else {
                    $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
                }
            },
            unhighlight: function (element) {
                if ($(element).hasClass('chkChoose')) {
                    $(element).closest('td').removeClass('has-error');
                } else {
                    $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
                }
            },
            submitHandler: function (form) {
                OurClientModule.submitFrmSectionOurExpertiseModule();
                return false;
            }
        });

        $('#frmSectionOurExpertiseModule input').keypress(function (e) {
            if (e.which == 13) {
                OurClientModule.submitFrmSectionOurExpertiseModule();
                return false;
            }
        });
    }
    return {
        //main function to initiate the module
        init: function () {
            handleSectionOurExpertise();
        },
        reset: function () {
            var validator = $("#frmSectionOurExpertiseModule").validate();
            validator.resetForm();
        }
    };
}();

var OurExpertiseDataTable = function () {
    // public functions
    return {
        //main function
        init: function (from, to) {
            var sort = $('#sectionOurExpertiseModule #columns').val();
            var ajaxUrl = site_url + '/powerpanel/ourclient/get_builder_list';

            jQuery.ajax({
                type: "POST",
                url: ajaxUrl,
                dataType: 'JSON',
                data: {
                    critaria: $('#frmSectionOurExpertiseModule input[name=template]').val(),
                    columns: sort[0],
                    order: sort[1],
                    catValue: $('#sectionOurExpertiseModule #category-id').val(),
                    status: '',
                    searchValue: $('#sectionOurExpertiseModule #searchfilter').val(),
                    start: from,
                    length: to,
                    ignore: ignoreItems,
                    selected: selectedItems
                },
                async: false,
                success: function (result) {
                    $('#sectionOurExpertiseModule #record-table').append(result.data);
                    $('input[name=total_records]').val(result.recordsTotal);
                    $('input[name=found]').val(result.found);
                    if (result.recordsTotal == 0 || result.found == 0) {
                        $('#frmSectionOurExpertiseModule').find('.addSection').attr('disabled', 'disabled');
                    } else {
                        $('#frmSectionOurExpertiseModule').find('.addSection').removeAttr('disabled');
                    }

                },
                error: function (req, err) {
                    console.log('error:' + err);
                }
            });
        },
        getCategory: function () {

            var ajaxUrl = site_url + '/powerpanel/ourclient/get_builder_list';
            jQuery.ajax({
                type: "POST",
                url: ajaxUrl,
                dataType: 'HTML',
                async: false,
                success: function (result) {
                    $('#sectionOurExpertiseModule #category-id').html(result);
                }
            });

        }
    };
}();

$(document).on('keyup', '#sectionOurExpertiseModule #searchfilter', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionOurExpertiseModule #record-table').html('');
    OurExpertiseDataTable.init(start, range);
});

$(document).on('change', '#sectionOurExpertiseModule #columns', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionOurExpertiseModule #record-table').html('');
    OurExpertiseDataTable.init(start, range);
});

$(document).on('change', '#sectionOurExpertiseModule #category-id', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionOurExpertiseModule #record-table').html('');
    OurExpertiseDataTable.init(start, range);
});


//Group checkbox checking
$(document).on('change', '#sectionOurExpertiseModule .group-checkable', function () {

    if ($(this).prop('checked')) {
        $('#sectionOurExpertiseModule #record-table .chkChoose').prop('checked', true);
        $('#sectionOurExpertiseModule #record-table .chkChoose').parent().parent().parent().addClass('selected-record');
        $('#sectionOurExpertiseModule #record-table .chkChoose:checked').each(function (index, value) {
            var id = $(this).val();
            if (!selectedItems.includes(id)) {
                selectedItems.push(id);
                recTitle.push($(this).data('title'));
            }
        });
    } else {
        $('#sectionOurExpertiseModule #record-table .chkChoose').prop('checked', false);
        $('#sectionOurExpertiseModule #record-table .chkChoose').parent().parent().parent().removeClass('selected-record');
        selectedItems = [];
        recTitle = [];
    }
    $('#sectionOurExpertiseModule input[name=selectedIds]').val(selectedItems);
    $('#sectionOurExpertiseModule input[name=selectedTitles]').val(recTitle);
});

$(document).on('change', '#sectionOurExpertiseModule #record-table .chkChoose', function () {
    var id = $(this).val();
    if ($(this).prop('checked')) {

        if (!selectedItems.includes(id)) {
            selectedItems.push(id);
            recTitle.push($(this).data('title'));
        }

        $(this).parent().parent().parent().addClass('selected-record');

    } else {
        selectedItems.pop(id);
        recTitle.pop($(this).data('title'));
        $(this).parent().parent().parent().removeClass('selected-record');
    }

    if ($('#sectionOurExpertiseModule #record-table .chkChoose:checked').length == $('#sectionOurExpertiseModule #record-table tr .chkChoose').length) {
        $('#sectionOurExpertiseModule .group-checkable').prop('checked', true);
    } else {
        $('#sectionOurExpertiseModule .group-checkable').prop('checked', false);
    }

    $('#sectionOurExpertiseModule input[name=selectedIds]').val(selectedItems);
    $('#sectionOurExpertiseModule input[name=selectedTitles]').val(recTitle);
});

$(document).on('click', '#sectionOurExpertiseModule #record-table tr', function (e) {
    var $cell = $(e.target).closest('td');
    if ($cell.index() > 0) {
        if ($(this).find('.chkChoose').prop('checked')) {
            $(this).find('.chkChoose').prop('checked', false).trigger('change');
            $(this).removeClass('selected-record');
        } else {
            $(this).find('.chkChoose').prop('checked', true).trigger('change');
            $(this).addClass('selected-record');
        }
    }
});

$(document).on('change', '#sectionOurExpertiseModule #columns', function () {
    if ($(this).find('option:selected').length > 1) {
        //$('#mCSB_1_container').trigger('click');
    }
});
//..Group checkbox checking