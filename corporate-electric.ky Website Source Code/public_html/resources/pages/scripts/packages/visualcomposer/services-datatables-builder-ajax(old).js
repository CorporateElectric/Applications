var ignoreItems = '';
var selectedItems = '';
var recTitle = [];

var ServiceModule = function () {
    // public functions
    return {
        reInitSortable: function () {
            $("#section-container").sortable('destroy');
            $("#section-container").sortable({
                placeholder: "ui-state-highlight",
                handle: '.fa-arrows-alt'
            });
        },
        moduleSectionsServices: function (caption, config, configTxt, recids, recTitle, edit, template, layoutType, extra_class, section_description) {
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
                section += '<a href="javascript:;" data-filter="' + template + '" title="Edit" data-id="' + iCount + '" class="service-module">';
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
                section += '<a data-id="' + iCount + '" data-filter="' + template + '" title="Add more" class="add-link service-module" href="javascript:;">';
                section += '<i class="fa fa-plus"></i>&nbsp;Add more';
                section += '</a>';
                section += '</div>';
                section += '<input id="' + iCount + '" data-extclass="' + extra_class + '" data-section_description="' + section_description + '" data-filter="' + template + '" type="hidden" data-config="' + config + '" data-layout="' + layoutType + '" data-caption="' + caption + '" data-type="module" value="service" />';
                section += '<div class="clearfix"></div>';
                section += '</div>';

                if ($('#section-container .ui-state-default').length > 0) {
                    $(section).insertAfter($('#section-container .ui-state-default:last'));
                } else {
                    $('#section-container').append(section);
                }
            } else {
                var serviceIds = [];
                var serviceTitles = [];
                var serviceCustomized = [];
                var serviceDescription = [];


                $('.section-item[data-editor=' + edit + '] li').each(function (key, val) {
                    var iId = $(this).data('id');
                    serviceIds.push(iId);

                    var iTitle = $(this).text();
                    serviceTitles.push(iTitle);

                    var Icustomized = $(this).data('customized');
                    if (typeof Icustomized != 'undefined') {
                        serviceCustomized.push(Icustomized);
                    }

                    
                    var Idescription = $(this).data('description');
                    if (typeof Idescription != 'undefined') {
                        serviceDescription.push(Idescription.toString());
                    }


                });

                $.each(recids, function (index, value) {
                    serviceIds.push(value);
                    serviceTitles.push(recTitle[index]);
                    serviceCustomized.push(false);
                    serviceDescription.push('');
                });

                section += '<div class="col-md-12">';
                section += '<label><b>' + caption + '</b></label>';
                section += '<ul class="record-list">';
                $.each(serviceIds, function (index, value) {
                    if (value != '') {
                        section += '<li data-customized="' + serviceCustomized[index] + '"  data-description="' + serviceDescription[index] + '" data-id="' + value + '" id="' + value + '-item-' + edit + '">' + serviceTitles[index]  + '<a href="javascript:;" class="close-icon" title="Delete"><i class="fa fa-times" aria-hidden="true"></i></a></li>';
                    }
                });
                section += '</ul>';
                section += '<a data-id="' + edit + '" data-filter="' + template + '" title="Add more" class="add-link service-module" href="javascript:;">';
                section += '<i class="fa fa-plus"></i>&nbsp;Add more';
                section += '</a>';
                section += '</div>';
                section += '<input id="' + edit + '" data-extclass="' + extra_class + '" data-section_description="' + section_description + '" data-filter="' + template + '" type="hidden" data-config="' + config + '" data-layout="' + layoutType + '" data-caption="' + caption + '" data-type="module" value="service" />';
                section += '<div class="clearfix"></div>';
                $('#section-container').find('div[data-editor=' + edit + ']').html(section);
            }
        },
        moduleSectionsRelatedServices: function (caption, config, configTxt, recids, recTitle, edit, template, layoutType, extra_class, section_description) {
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
                section += '<a href="javascript:;" data-filter="' + template + '" title="Edit" data-id="' + iCount + '" class="relatedservice-module">';
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
                section += '<a data-id="' + iCount + '" data-filter="' + template + '" title="Add more" class="add-link relatedservice-module" href="javascript:;">';
                section += '<i class="fa fa-plus"></i>&nbsp;Add more';
                section += '</a>';
                section += '</div>';
                section += '<input id="' + iCount + '" data-extclass="' + extra_class + '" data-section_description="' + section_description + '" data-filter="' + template + '" type="hidden" data-config="' + config + '" data-layout="' + layoutType + '" data-caption="' + caption + '" data-type="module" value="relatedservice" />';
                section += '<div class="clearfix"></div>';
                section += '</div>';
        
                if ($('#section-container .ui-state-default').length > 0) {
                    $(section).insertAfter($('#section-container .ui-state-default:last'));
                } else {
                    $('#section-container').append(section);
                }
            } else {
                var serviceIds = [];
                var serviceTitles = [];
                var serviceCustomized = [];
                var serviceDescription = [];
        
        
                $('.section-item[data-editor=' + edit + '] li').each(function (key, val) {
                    var iId = $(this).data('id');
                    serviceIds.push(iId);
        
                    var iTitle = $(this).text();
                    serviceTitles.push(iTitle);
        
                    var Icustomized = $(this).data('customized');
                    if (typeof Icustomized != 'undefined') {
                        serviceCustomized.push(Icustomized);
                    }
        
                    
                    var Idescription = $(this).data('description');
                    if (typeof Idescription != 'undefined') {
                        serviceDescription.push(Idescription.toString());
                    }
        
        
                });
        
                $.each(recids, function (index, value) {
                    serviceIds.push(value);
                    serviceTitles.push(recTitle[index]);
                    serviceCustomized.push(false);
                    serviceDescription.push('');
                });
        
                section += '<div class="col-md-12">';
                section += '<label><b>' + caption + '</b></label>';
                section += '<ul class="record-list">';
                $.each(serviceIds, function (index, value) {
                    if (value != '') {
                        section += '<li data-customized="' + serviceCustomized[index] + '"  data-description="' + serviceDescription[index] + '" data-id="' + value + '" id="' + value + '-item-' + edit + '">' + serviceTitles[index]  + '<a href="javascript:;" class="close-icon" title="Delete"><i class="fa fa-times" aria-hidden="true"></i></a></li>';
                    }
                });
                section += '</ul>';
                section += '<a data-id="' + edit + '" data-filter="' + template + '" title="Add more" class="add-link relatedservice-module" href="javascript:;">';
                section += '<i class="fa fa-plus"></i>&nbsp;Add more';
                section += '</a>';
                section += '</div>';
                section += '<input id="' + edit + '" data-extclass="' + extra_class + '" data-section_description="' + section_description + '" data-filter="' + template + '" type="hidden" data-config="' + config + '" data-layout="' + layoutType + '" data-caption="' + caption + '" data-type="module" value="relatedservice" />';
                section += '<div class="clearfix"></div>';
                $('#section-container').find('div[data-editor=' + edit + ']').html(section);
            }
        },
        serviceTemplate: function (val, config, template, edit, configTxt, layout, extra_class) {
            var section = '';

            if (edit == 'N') {
                var iCount = 'item-' + ($('.ui-state-default').length + 1);
                section += '<div class="ui-state-default">';
                section += '<i title="Drag" class="action-icon move fa fa-arrows-alt"></i>';
                section += '<a href="javascript:;" data-filter="' + template + '" class="close-btn" title="Delete">';
                section += '<i class="action-icon delete fa fa-trash"></i>';
                section += '</a>';
                section += '<a href="javascript:;" data-filter="' + template + '" title="Edit" data-id="' + iCount + '" class="service-template">';
                section += '<i class="action-icon edit fa fa-pencil"></i>';
                section += '</a>';
                section += '<div class="clearfix"></div>';
                section += '<div class="defoult-module section-item serviceTemplate" data-editor="' + iCount + '">';
                section += '<div class="col-md-12"><label><b>' + val + '</b></label><ul><li>Template: ' + template + '</li></ul></div>';
                section += '<input data-extclass="' + extra_class + '" id="' + iCount + '" data-layout="' + layout + '" data-type="' + template + '" data-config="' + config + '" type="hidden" class="txtip" value="' + val + '"/>';
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
                section += '<input id="' + edit + '" data-extclass="' + extra_class + '" data-layout="' + layout + '" data-type="' + template + '" data-config="' + config + '" type="hidden" class="txtip" value="' + val + '"/>';
                section += '<div class="clearfix"></div>';
                $('#section-container').find('div[data-editor=' + edit + ']').html(section);
            }
        },
        otherserviceTemplate: function (val, config, template, edit, configTxt, layout, extra_class) {
            var section = '';
        
            if (edit == 'N') {
                var iCount = 'item-' + ($('.ui-state-default').length + 1);
                section += '<div class="ui-state-default">';
                section += '<i title="Drag" class="action-icon move fa fa-arrows-alt"></i>';
                section += '<a href="javascript:;" data-filter="' + template + '" class="close-btn" title="Delete">';
                section += '<i class="action-icon delete fa fa-trash"></i>';
                section += '</a>';
                section += '<a href="javascript:;" data-filter="' + template + '" title="Edit" data-id="' + iCount + '" class="other-services">';
                section += '<i class="action-icon edit fa fa-pencil"></i>';
                section += '</a>';
                section += '<div class="clearfix"></div>';
                section += '<div class="defoult-module section-item otherserviceTemplate" data-editor="' + iCount + '">';
                section += '<div class="col-md-12"><label><b>' + val + '</b></label><ul><li>Template: ' + template + '</li></ul></div>';
                section += '<input data-extclass="' + extra_class + '" id="' + iCount + '" data-layout="' + layout + '" data-type="' + template + '" data-config="' + config + '" type="hidden" class="txtip" value="' + val + '"/>';
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
                section += '<input id="' + edit + '" data-extclass="' + extra_class + '" data-layout="' + layout + '" data-type="' + template + '" data-config="' + config + '" type="hidden" class="txtip" value="' + val + '"/>';
                section += '<div class="clearfix"></div>';
                $('#section-container').find('div[data-editor=' + edit + ']').html(section);
            }
        },  
        submitFrmSectionServiceModuleTemplate: function () {
            if ($('#frmSectionServiceModuleTemplate').validate().form()) {
                var edit = $('#frmSectionServiceModuleTemplate input[name=editing]').val() != '' ? $('#frmSectionServiceModuleTemplate input[name=editing]').val() : 'N';
                $('#no-content').addClass('hide');
                $('#has-content').removeClass('hide');
                var val = $('#frmSectionServiceModuleTemplate input[name=section_title]').val();
                var extra_class = $('#frmSectionServiceModuleTemplate input[name=extra_class]').val();
                var template = $('#frmSectionServiceModuleTemplate input[name=template]').val();
                var config = $('#frmSectionServiceModuleTemplate select[name=section_config]').val();
                var configTxt = $('#frmSectionServiceModuleTemplate .config option:selected').text();
                var layout = $('#frmSectionServiceModuleTemplate select[name=layoutType]').val();
                ServiceModule.serviceTemplate(val, config, template, edit, configTxt, layout, extra_class);
                $('#sectionServiceModuleTemplate').modal('hide');
            }
        },
        submitFrmOtherSectionServiceModuleTemplate: function () {
            if ($('#frmSectionOtherServiceModuleTemplate').validate().form()) {
                var edit = $('#frmSectionOtherServiceModuleTemplate input[name=editing]').val() != '' ? $('#frmSectionOtherServiceModuleTemplate input[name=editing]').val() : 'N';
                $('#no-content').addClass('hide');
                $('#has-content').removeClass('hide');
                var val = $('#frmSectionOtherServiceModuleTemplate input[name=section_title]').val();
                var extra_class = $('#frmSectionOtherServiceModuleTemplate input[name=extra_class]').val();
                var template = $('#frmSectionOtherServiceModuleTemplate input[name=template]').val();
                var config = $('#frmSectionOtherServiceModuleTemplate select[name=section_config]').val();
                var configTxt = $('#frmSectionOtherServiceModuleTemplate .config option:selected').text();
                var layout = $('#frmSectionOtherServiceModuleTemplate select[name=layoutType]').val();
                ServiceModule.otherserviceTemplate(val, config, template, edit, configTxt, layout, extra_class);
                $('#sectionOtherServiceModuleTemplate').modal('hide');
            }
        },
        submitFrmSectionServiceModule: function () {
            if ($('#frmSectionServiceModule').validate().form()) {
                var edit = $('#frmSectionServiceModule input[name=editing]').val() != '' ? $('#frmSectionServiceModule input[name=editing]').val() : 'N';
                $('#no-content').addClass('hide');
                $('#has-content').removeClass('hide');
                var template = $('#frmSectionServiceModule input[name=template]').val();
                var extra_class = $('#frmSectionServiceModule input[name=extra_class]').val();
                var section_description = $('#frmSectionServiceModule textarea[name=section_description]').val();
                var imgCaption = $('#frmSectionServiceModule input[name=section_title]').val();
                var config = $('#frmSectionServiceModule .config').val();
                var configTxt = $('#frmSectionServiceModule .config option:selected').text();
                var layoutType = $('#frmSectionServiceModule select[name=layoutType]').val();
                var recids = $('#frmSectionServiceModule input[name=selectedIds]').val();
                var recTitle = $('#frmSectionServiceModule input[name=selectedTitles]').val();

                ServiceModule.moduleSectionsServices(imgCaption, config, configTxt, recids, recTitle, edit, template, layoutType, extra_class, section_description);
                ServiceModule.reInitSortable();
                $('#sectionServiceModule').modal('hide');
            }
        },
        submitFrmSectionRelatedServiceModule: function () {
            if ($('#frmRelatedSectionServiceModule').validate().form()) {
                var edit = $('#frmRelatedSectionServiceModule input[name=editing]').val() != '' ? $('#frmRelatedSectionServiceModule input[name=editing]').val() : 'N';
                $('#no-content').addClass('hide');
                $('#has-content').removeClass('hide');
                var template = $('#frmRelatedSectionServiceModule input[name=template]').val();
                var extra_class = $('#frmRelatedSectionServiceModule input[name=extra_class]').val();
                var section_description = $('#frmRelatedSectionServiceModule textarea[name=section_description]').val();
                var imgCaption = $('#frmRelatedSectionServiceModule input[name=section_title]').val();
                var config = $('#frmRelatedSectionServiceModule .config').val();
                var configTxt = $('#frmRelatedSectionServiceModule .config option:selected').text();
                var layoutType = $('#frmRelatedSectionServiceModule select[name=layoutType]').val();
                var recids = $('#frmRelatedSectionServiceModule input[name=selectedIds]').val();
                var recTitle = $('#frmRelatedSectionServiceModule input[name=selectedTitles]').val();
        
                ServiceModule.moduleSectionsRelatedServices(imgCaption, config, configTxt, recids, recTitle, edit, template, layoutType, extra_class, section_description);
                ServiceModule.reInitSortable();
                $('#sectionRelatedServiceModule').modal('hide');
            }
        }
    };
}();

var ServiceDataTable = function () {
    // public functions
    return {
        //main function
        init: function (from, to) {
            var sort = $('#sectionServiceModule #columns').val();
            var ajaxUrl = site_url + '/powerpanel/services/get_builder_list';

            jQuery.ajax({
                type: "POST",
                url: ajaxUrl,
                dataType: 'JSON',
                data: {
                    critaria: $('#frmSectionServiceModule input[name=template]').val(),
                    columns: sort[0],
                    order: sort[1],
                    catValue: $('#sectionServiceModule #category-id').val(),
                    status: '',
                    searchValue: $('#sectionServiceModule #searchfilter').val(),
                    start: from,
                    length: to,
                    ignore: ignoreItems,
                    selected: selectedItems
                },
                async: false,
                success: function (result) {
                    $('#sectionServiceModule #record-table').append(result.data);
                    $('input[name=total_records]').val(result.recordsTotal);
                    $('input[name=found]').val(result.found);
                    if(result.recordsTotal == 0 || result.found == 0) {
                        $('#frmSectionServiceModule').find('.addSection').attr('disabled','disabled');
                    }else{
                        $('#frmSectionServiceModule').find('.addSection').removeAttr('disabled');
                    }

                },
                error: function (req, err) {
                    console.log('error:' + err);
                }
            });
        },
        getCategory: function () {

            var ajaxUrl = site_url + '/powerpanel/service-category/get_builder_list';
            jQuery.ajax({
                type: "POST",
                url: ajaxUrl,
                dataType: 'HTML',
                async: false,
                success: function (result) {
                    $('#sectionServiceModule #category-id').html(result);
                }
            });

        }
    };
}();

var validateSectionService = function () {
    var handleSectionService = function () {
   
        $("#frmSectionServiceModule").validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            ignore: [],
            rules: {
                section_title: {
                    required: true,
                    noSpace: true
                },
                section_config: {
                    required: true,
                    noSpace: true
                },
                layoutType: {
                    required: true,
                },
                'delete[]': {
                    required: {
                        depends: function () {
                            return $('#frmSectionServiceModule input[name="editing"]').val() == '';
                        }
                    }
                }
            },
            messages: {
                section_title: "Caption is required",
                section_config: "Configurations is required",
                layoutType: "Please select layout",
                'delete[]': "Please select at least one record",
            },
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else if (element.hasClass('chkChoose')) {
                    error.insertBefore($('#frmSectionServiceModule .table-container .table:first'));
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
                $('.alert-danger', $('#frmSectionServiceModule')).show();
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
                ServiceModule.submitFrmSectionServiceModule();
                return false;
            }
        });

        $('#frmSectionServiceModule input').keypress(function (e) {
            if (e.which == 13) {
                ServiceModule.submitFrmSectionServiceModule();
                return false;
            }
        });
    }
    return {
        //main function to initiate the module
        init: function () {
            handleSectionService();
        },
        reset: function () {
            var validator = $("#frmSectionServiceModule").validate();
            validator.resetForm();
        }
    };
}();

var serviceTemplate = function () {
    var serviceTemplate = function () {
        $("#frmSectionServiceModuleTemplate").validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            ignore: [],
            rules: {
                section_title: {
                    required: true,
                    noSpace: true
                },
                layoutType: {
                    required: true
                },
                section_config: {
                    required: true,
                    noSpace: true
                }
            },
            messages: {
                section_title: {
                    required: "Title is required"
                },
                layoutType: {
                    required: "Layout is required"
                },
                section_config: {
                    required: "Configurations is required"
                }
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
                $('.alert-danger', $('#frmSectionServiceModuleTemplate')).show();
            },
            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            submitHandler: function (form) {
                ServiceModule.submitFrmSectionServiceModuleTemplate();
                return false;
            }
        });
        $('#frmSectionServiceModuleTemplate input').keypress(function (e) {
            if (e.which == 13) {
                ServiceModule.submitFrmSectionServiceModuleTemplate();
                return false;
            }
        });
    }
    return {
        //main function to initiate the module
        init: function () {
            serviceTemplate();
        },
        reset: function () {
            var validator = $("#frmSectionServiceModuleTemplate").validate();
            validator.resetForm();
        }
    };
}();

var otherserviceTemplate = function () {
    var otherserviceTemplate = function () {
        $("#frmSectionOtherServiceModuleTemplate").validate({
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
                $('.alert-danger', $('#frmSectionOtherServiceModuleTemplate')).show();
            },
            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            submitHandler: function (form) {
                ServiceModule.submitFrmOtherSectionServiceModuleTemplate();
                return false;
            }
        });
        $('#frmSectionOtherServiceModuleTemplate input').keypress(function (e) {
            if (e.which == 13) {
                ServiceModule.submitFrmOtherSectionServiceModuleTemplate();
                return false;
            }
        });
    }
    return {
        //main function to initiate the module
        init: function () {
            otherserviceTemplate();
        },
        reset: function () {
            var validator = $("#frmSectionOtherServiceModuleTemplate").validate();
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

$(document).on('click', '.service-module', function(event) {
    id = $(this).data('id');
    caption = $(this).text();
    template = $(this).data('filter');
    $('#pgBuiderSections').modal('hide');
    $('#sectionServiceModule').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#sectionServiceModule [data-dismiss="modal"]').attr( "data-toggle", "" );
    $('#sectionServiceModule [data-dismiss="modal"]').attr( "data-target", "" );
});


$(document).on('click', '.services', function (event) {
    caption = $(this).text();
    template = $(this).data('filter');
    id = '';
    ignoreItems = '';
    $('#pgBuiderSections').modal('hide');
    $('#sectionServiceModule').modal({
        backdrop: 'static',
        keyboard: false,
        show: true
    });
});

$(document).on('click', '.service-template', function (event) 
{
    $('#sectionServiceModuleTemplate [data-dismiss="modal"]').attr( "data-toggle", "" );
    $('#sectionServiceModuleTemplate [data-dismiss="modal"]').attr( "data-target", "" );

    $('#pgBuiderSections').modal('hide');
    $('#sectionServiceModuleTemplate').modal({
        backdrop: 'static',
        keyboard: false
    });

    var id = $(this).data('id');
    var layout = '';
    if (typeof id != 'undefined') 
    {
        var extclass = $('#' + id).data('extclass');
        var value = $('#' + id).val();
        layout = $('#' + id).data('layout');
        var config = $('#' + id).data('config');

        $('#frmSectionServiceModuleTemplate input[name=editing]').val(id);
        $('#frmSectionServiceModuleTemplate input[name=section_title]').val($.trim(value));
        $('#frmSectionServiceModuleTemplate select[name=layoutType] option[value=' + layout + ']').prop('selected', true);
        $('#frmSectionServiceModuleTemplate .config option[value=' + config + ']').prop('selected', true);
        $('#frmSectionServiceModuleTemplate input[name=extra_class]').val(extclass);
        $('#frmSectionServiceModuleTemplate .addSection').text('Update');
        $('#frmSectionServiceModuleTemplate #exampleModalLabel b').text('Edit Service');

    } else {

        var value = $(this).text();
        $('#frmSectionServiceModuleTemplate input[name=editing]').val('');
        $('#frmSectionServiceModuleTemplate input[name=section_title]').val($.trim(value));
        //$('#frmSectionServiceModuleTemplate select[name=layoutType] option:first').prop('selected', true);
        $('#frmSectionServiceModuleTemplate input[name=extra_class]').val('');
        $('#frmSectionServiceModuleTemplate .addSection').text('Add');
        $('#frmSectionServiceModuleTemplate #exampleModalLabel b').text('Add Service');

        $('#sectionServiceModuleTemplate [data-dismiss="modal"]').attr( "data-toggle", "modal" );
//        $('#sectionServiceModuleTemplate [data-dismiss="modal"]').attr( "data-target", "#pgBuiderSections" );

    }

    $('#frmSectionServiceModuleTemplate').find('input[name=template]').val($(this).data('filter'));

});


$('#frmSectionServiceModuleTemplate').on('submit', function (e) {
    e.preventDefault();
});

$(document).on('click', '.other-services', function (event) 
{
    $('#sectionOtherServiceModuleTemplate [data-dismiss="modal"]').attr( "data-toggle", "" );
    $('#sectionOtherServiceModuleTemplate [data-dismiss="modal"]').attr( "data-target", "" );

    $('#pgBuiderSections').modal('hide');
    $('#sectionOtherServiceModuleTemplate').modal({
        backdrop: 'static',
        keyboard: false
    });

    var id = $(this).data('id');
    var layout = '';
    if (typeof id != 'undefined') 
    {
        var extclass = $('#' + id).data('extclass');
        var value = $('#' + id).val();
        layout = $('#' + id).data('layout');
        var config = $('#' + id).data('config');

        $('#frmSectionOtherServiceModuleTemplate input[name=editing]').val(id);
        $('#frmSectionOtherServiceModuleTemplate input[name=section_title]').val($.trim(value));
        $('#frmSectionOtherServiceModuleTemplate select[name=layoutType] option[value=' + layout + ']').prop('selected', true);
        $('#frmSectionOtherServiceModuleTemplate .config option[value=' + config + ']').prop('selected', true);
        $('#frmSectionOtherServiceModuleTemplate input[name=extra_class]').val(extclass);
        $('#frmSectionOtherServiceModuleTemplate .addSection').text('Update');
        $('#frmSectionOtherServiceModuleTemplate #exampleModalLabel b').text('Edit Other Service');

    } else {

        var value = $(this).text();
        $('#frmSectionOtherServiceModuleTemplate input[name=editing]').val('');
        $('#frmSectionOtherServiceModuleTemplate input[name=section_title]').val($.trim(value));
        //$('#frmSectionOtherServiceModuleTemplate select[name=layoutType] option:first').prop('selected', true);
        $('#frmSectionOtherServiceModuleTemplate input[name=extra_class]').val('');
        $('#frmSectionOtherServiceModuleTemplate .addSection').text('Add');
        $('#frmSectionOtherServiceModuleTemplate #exampleModalLabel b').text('Add Other Service');

        $('#sectionOtherServiceModuleTemplate [data-dismiss="modal"]').attr( "data-toggle", "modal" );
//        $('#sectionOtherServiceModuleTemplate [data-dismiss="modal"]').attr( "data-target", "#pgBuiderSections" );

    }

    $('#frmSectionOtherServiceModuleTemplate').find('input[name=template]').val($(this).data('filter'));

});

$(document).on('click', '.relatedservice-module', function(event) {
    id = $(this).data('id');
    caption = $(this).text();
    template = $(this).data('filter');
    $('#pgBuiderSections').modal('hide');
    $('#sectionRelatedServiceModule').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#sectionRelatedServiceModule [data-dismiss="modal"]').attr( "data-toggle", "" );
    $('#sectionRelatedServiceModule [data-dismiss="modal"]').attr( "data-target", "" );
});

$('#frmSectionOtherServiceModuleTemplate').on('submit', function (e) {
    e.preventDefault();
});

//..End Open while add or edit section

$('#sectionServiceModule').on('shown.bs.modal', function () {
    caption = $.trim(caption);
    //$('#datatable_service_ajax').closest('.col-md-12').loading('start');
    validateSectionService.init();
    $(this).find('.group-checkable').prop('checked', false);
    selectedItems = [];
    recTitle = [];
    ignoreItems = [];
    $('#sectionServiceModule input[name=selectedIds]').val(null);
    $('#sectionServiceModule input[name=selectedTitles]').val(null);
     $('select').selectpicker('destroy');
    ServiceDataTable.getCategory();
    $('#frmSectionServiceModule #category-id option:first').prop('selected', true);
    $('#frmSectionServiceModule #columns option:selected').prop('selected', false);
    $('#frmSectionServiceModule #columns option[value=varTitle]').prop('selected', true);
    $('#frmSectionServiceModule #columns option[value=asc]').prop('selected', true);
    $('#frmSectionServiceModule input[name=template]').val(template);
    var layout = '';
    if (id != '') {
        caption = $('#' + id).data('caption');
        layout = $('#' + id).data('layout');
        var config = $('#' + id).data('config');
        var extClass = $('#' + id).data('extclass');
        var section_description = $('#' + id).data('section_description');
        $('#frmSectionServiceModule input[name=editing]').val(id);
        $('#frmSectionServiceModule input[name=extra_class]').val(extClass);
        $('#frmSectionServiceModule textarea[name=section_description]').val(section_description);
        $('#frmSectionServiceModule select[name=layoutType] option[value=' + layout + ']').prop('selected', true);
        $('#frmSectionServiceModule .config').children('option[value=' + config + ']').prop('selected', true);

        $('.section-item[data-editor=' + id + '] li').each(function (key, val) {
            var iId = $(this).data('id');
            ignoreItems.push(iId);
        });

        $('#sectionServiceModule .addSection').text('Update');
        $('#sectionServiceModule #exampleModalLabel b').text('Update Service');
    } else {
        $('#frmSectionServiceModule input[name=editing]').val('');
        $('#frmSectionServiceModule input[name=extra_class]').val('');
        $('#frmSectionServiceModule textarea[name=section_description]').val('');
        //$('#frmSectionServiceModule select[name=layoutType] option:first').prop('selected', true);
        $('#frmSectionServiceModule .config').children('option[value=7]').prop('selected', true);

        $('#sectionServiceModule .addSection').text('Add');
        $('#sectionServiceModule #exampleModalLabel b').text('Service');

        $('#sectionServiceModule [data-dismiss="modal"]').attr( "data-toggle", "modal" );
//        $('#sectionServiceModule [data-dismiss="modal"]').attr( "data-target", "#pgBuiderSections" );
    }

    $('#frmSectionServiceModule input[name=section_title]').val(caption);
    $('select').selectpicker();
    ServiceDataTable.init(start, range);
    $("#frmSectionServiceModule #mcscroll").mCustomScrollbar({
        axis: "y",
        theme: "dark",
        callbacks: {
            onTotalScroll: function () {
                if ($('input[name=found]').val() > 0) {
                    if ($('#sectionServiceModule').find('#record-table tr').length < $('input[name=total_records]').val()) {
                        start += range;
                        end += range;
                        ServiceDataTable.init(start, range);
                    }
                }
            }
        }
    });

}).on('hidden.bs.modal', function () {

    range = 10;
    start = 0;
    end = range;
    $('#sectionServiceModule select[name=layoutType] option[class=list]').show();
    $('#sectionServiceModule #record-table').html('');
    $(".record-list").sortable().disableSelection();
     $('#sectionServiceModule select').selectpicker('destroy');
    validateSectionService.reset();

});


$('#sectionServiceModuleTemplate').on('shown.bs.modal', function () {
$('#sectionServiceModuleTemplate select').selectpicker('');
    serviceTemplate.init();
}).on('hidden.bs.modal', function () {
     $('#sectionServiceModuleTemplate select').selectpicker('destroy');
    serviceTemplate.reset();
});

$('#sectionOtherServiceModuleTemplate').on('shown.bs.modal', function () {
    $('#sectionOtherServiceModuleTemplate select').selectpicker('');
        otherserviceTemplate.init();
    }).on('hidden.bs.modal', function () {
        $('#sectionOtherServiceModuleTemplate select').selectpicker('destroy');
        otherserviceTemplate.reset();
});

$(document).ajaxStart(function () {
    $('.table-scrollable').loader(loaderConfig);
}).ajaxComplete(function () {
    setTimeout(function () {
        $.loader.close(true);
    }, 500);
});

$(document).on('keyup', '#sectionServiceModule #searchfilter', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionServiceModule #record-table').html('');
    ServiceDataTable.init(start, range);
});

$(document).on('change', '#sectionServiceModule #columns', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionServiceModule #record-table').html('');
    ServiceDataTable.init(start, range);
});

$(document).on('change', '#sectionServiceModule #category-id', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionServiceModule #record-table').html('');
    ServiceDataTable.init(start, range);
});


//Group checkbox checking
$(document).on('change', '#sectionServiceModule .group-checkable', function () {

    if ($(this).prop('checked')) {
        $('#sectionServiceModule #record-table .chkChoose').prop('checked', true);
        $('#sectionServiceModule #record-table .chkChoose').parent().parent().parent().addClass('selected-record');
        $('#sectionServiceModule #record-table .chkChoose:checked').each(function (index, value) {
            var id = $(this).val();
            if (!selectedItems.includes(id)) {
                selectedItems.push(id);
                recTitle.push($(this).data('title'));
            }
        });
    } else {
        $('#sectionServiceModule #record-table .chkChoose').prop('checked', false);
        $('#sectionServiceModule #record-table .chkChoose').parent().parent().parent().removeClass('selected-record');
        selectedItems = [];
        recTitle = [];
    }
    $('#sectionServiceModule input[name=selectedIds]').val(selectedItems);
    $('#sectionServiceModule input[name=selectedTitles]').val(recTitle);
});

$(document).on('change', '#sectionServiceModule #record-table .chkChoose', function () {
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

    if ($('#sectionServiceModule #record-table .chkChoose:checked').length == $('#sectionServiceModule #record-table tr .chkChoose').length) {
        $('#sectionServiceModule .group-checkable').prop('checked', true);
    } else {
        $('#sectionServiceModule .group-checkable').prop('checked', false);
    }

    $('#sectionServiceModule input[name=selectedIds]').val(selectedItems);
    $('#sectionServiceModule input[name=selectedTitles]').val(recTitle);
});

$(document).on('click', '#sectionServiceModule #record-table tr', function (e) {
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

$(document).on('change', '#sectionServiceModule #columns', function () {
    if ($(this).find('option:selected').length > 1) {
        //$('#mCSB_1_container').trigger('click');
    }
});
//..Group checkbox checking

$(document).on('click', '.related-services', function (event) {
    caption = $(this).text();
    template = $(this).data('filter');
    id = '';
    ignoreItems = '';
    $('#pgBuiderSections').modal('hide');
    $('#sectionRelatedServiceModule').modal({
        backdrop: 'static',
        keyboard: false,
        show: true
    });
});

$('#sectionRelatedServiceModule').on('shown.bs.modal', function () {
    caption = $.trim(caption);
    //$('#datatable_service_ajax').closest('.col-md-12').loading('start');
    validateSectionRelatedService.init();
    $(this).find('.group-checkable').prop('checked', false);
    selectedItems = [];
    recTitle = [];
    ignoreItems = [];
    $('#sectionRelatedServiceModule input[name=selectedIds]').val(null);
    $('#sectionRelatedServiceModule input[name=selectedTitles]').val(null);
     $('select').selectpicker('destroy');
    RelatedServiceDataTable.getCategory();
    $('#frmRelatedSectionServiceModule #category-id option:first').prop('selected', true);
    $('#frmRelatedSectionServiceModule #columns option:selected').prop('selected', false);
    $('#frmRelatedSectionServiceModule #columns option[value=varTitle]').prop('selected', true);
    $('#frmRelatedSectionServiceModule #columns option[value=asc]').prop('selected', true);
    $('#frmRelatedSectionServiceModule input[name=template]').val(template);
    var layout = '';
    if (id != '') {
        caption = $('#' + id).data('caption');
        layout = $('#' + id).data('layout');
        var config = $('#' + id).data('config');
        var extClass = $('#' + id).data('extclass');
        var section_description = $('#' + id).data('section_description');
        $('#frmRelatedSectionServiceModule input[name=editing]').val(id);
        $('#frmRelatedSectionServiceModule input[name=extra_class]').val(extClass);
        $('#frmRelatedSectionServiceModule textarea[name=section_description]').val(section_description);
        $('#frmRelatedSectionServiceModule select[name=layoutType] option[value=' + layout + ']').prop('selected', true);
        $('#frmRelatedSectionServiceModule .config').children('option[value=' + config + ']').prop('selected', true);

        $('.section-item[data-editor=' + id + '] li').each(function (key, val) {
            var iId = $(this).data('id');
            ignoreItems.push(iId);
        });

        $('#sectionRelatedServiceModule .addSection').text('Update');
        $('#sectionRelatedServiceModule #exampleModalLabel b').text('Update Related Service');
    } else {
        $('#frmRelatedSectionServiceModule input[name=editing]').val('');
        $('#frmRelatedSectionServiceModule input[name=extra_class]').val('');
        $('#frmRelatedSectionServiceModule textarea[name=section_description]').val('');
        //$('#frmRelatedSectionServiceModule select[name=layoutType] option:first').prop('selected', true);
        $('#frmRelatedSectionServiceModule .config').children('option[value=7]').prop('selected', true);

        $('#sectionRelatedServiceModule .addSection').text('Add');
        $('#sectionRelatedServiceModule #exampleModalLabel b').text('Related Service');

        $('#sectionRelatedServiceModule [data-dismiss="modal"]').attr( "data-toggle", "modal" );
//        $('#sectionRelatedServiceModule [data-dismiss="modal"]').attr( "data-target", "#pgBuiderSections" );
    }

    $('#frmRelatedSectionServiceModule input[name=section_title]').val(caption);
    $('select').selectpicker();
    RelatedServiceDataTable.init(start, range);
    $("#frmRelatedSectionServiceModule #mcscroll").mCustomScrollbar({
        axis: "y",
        theme: "dark",
        callbacks: {
            onTotalScroll: function () {
                if ($('input[name=found]').val() > 0) {
                    if ($('#sectionRelatedServiceModule').find('#record-table tr').length < $('input[name=total_records]').val()) {
                        start += range;
                        end += range;
                        RelatedServiceDataTable.init(start, range);
                    }
                }
            }
        }
    });

}).on('hidden.bs.modal', function () {

    range = 10;
    start = 0;
    end = range;
    $('#sectionRelatedServiceModule select[name=layoutType] option[class=list]').show();
    $('#sectionRelatedServiceModule #record-table').html('');
    $(".record-list").sortable().disableSelection();
     $('#sectionRelatedServiceModule select').selectpicker('destroy');
    validateSectionRelatedService.reset();

});

var validateSectionRelatedService = function () {
    var handleSectionRelatedService = function () {
   
        $("#frmRelatedSectionServiceModule").validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            ignore: [],
            rules: {
                section_title: {
                    required: true,
                    noSpace: true
                },
                section_config: {
                    required: true,
                    noSpace: true
                },
                layoutType: {
                    required: true,
                },
                'delete[]': {
                    required: {
                        depends: function () {
                            return $('#frmRelatedSectionServiceModule input[name="editing"]').val() == '';
                        }
                    }
                }
            },
            messages: {
                section_title: "Caption is required",
                section_config: "Configurations is required",
                layoutType: "Please select layout",
                'delete[]': "Please select at least one record",
            },
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else if (element.hasClass('chkChoose')) {
                    error.insertBefore($('#frmRelatedSectionServiceModule .table-container .table:first'));
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
                $('.alert-danger', $('#frmRelatedSectionServiceModule')).show();
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
                ServiceModule.submitFrmSectionRelatedServiceModule();
                return false;
            }
        });

        $('#frmRelatedSectionServiceModule input').keypress(function (e) {
            if (e.which == 13) {
                ServiceModule.submitFrmSectionRelatedServiceModule();
                return false;
            }
        });
    }
    return {
        //main function to initiate the module
        init: function () {
            handleSectionRelatedService();
        },
        reset: function () {
            var validator = $("#frmRelatedSectionServiceModule").validate();
            validator.resetForm();
        }
    };
}();

var RelatedServiceDataTable = function () {
    // public functions
    return {
        //main function
        init: function (from, to) {
            var sort = $('#sectionRelatedServiceModule #columns').val();
            var ajaxUrl = site_url + '/powerpanel/services/get_builder_list';

            jQuery.ajax({
                type: "POST",
                url: ajaxUrl,
                dataType: 'JSON',
                data: {
                    critaria: $('#frmRelatedSectionServiceModule input[name=template]').val(),
                    columns: sort[0],
                    order: sort[1],
                    catValue: $('#sectionRelatedServiceModule #category-id').val(),
                    status: '',
                    searchValue: $('#sectionRelatedServiceModule #searchfilter').val(),
                    start: from,
                    length: to,
                    ignore: ignoreItems,
                    selected: selectedItems
                },
                async: false,
                success: function (result) {
                    $('#sectionRelatedServiceModule #record-table').append(result.data);
                    $('input[name=total_records]').val(result.recordsTotal);
                    $('input[name=found]').val(result.found);
                    if(result.recordsTotal == 0 || result.found == 0) {
                        $('#frmRelatedSectionServiceModule').find('.addSection').attr('disabled','disabled');
                    }else{
                        $('#frmRelatedSectionServiceModule').find('.addSection').removeAttr('disabled');
                    }

                },
                error: function (req, err) {
                    console.log('error:' + err);
                }
            });
        },
        getCategory: function () {

            var ajaxUrl = site_url + '/powerpanel/service-category/get_builder_list';
            jQuery.ajax({
                type: "POST",
                url: ajaxUrl,
                dataType: 'HTML',
                async: false,
                success: function (result) {
                    $('#sectionRelatedServiceModule #category-id').html(result);
                }
            });

        }
    };
}();

//Group checkbox checking
$(document).on('change', '#sectionRelatedServiceModule .group-checkable', function () {

    if ($(this).prop('checked')) {
        $('#sectionRelatedServiceModule #record-table .chkChoose').prop('checked', true);
        $('#sectionRelatedServiceModule #record-table .chkChoose').parent().parent().parent().addClass('selected-record');
        $('#sectionRelatedServiceModule #record-table .chkChoose:checked').each(function (index, value) {
            var id = $(this).val();
            if (!selectedItems.includes(id)) {
                selectedItems.push(id);
                recTitle.push($(this).data('title'));
            }
        });
    } else {
        $('#sectionRelatedServiceModule #record-table .chkChoose').prop('checked', false);
        $('#sectionRelatedServiceModule #record-table .chkChoose').parent().parent().parent().removeClass('selected-record');
        selectedItems = [];
        recTitle = [];
    }
    $('#sectionRelatedServiceModule input[name=selectedIds]').val(selectedItems);
    $('#sectionRelatedServiceModule input[name=selectedTitles]').val(recTitle);
});

$(document).on('keyup', '#sectionRelatedServiceModule #searchfilter', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionRelatedServiceModule #record-table').html('');
    RelatedServiceDataTable.init(start, range);
});

$(document).on('change', '#sectionRelatedServiceModule #columns', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionRelatedServiceModule #record-table').html('');
    RelatedServiceDataTable.init(start, range);
});

$(document).on('change', '#sectionRelatedServiceModule #category-id', function () {
    range = 10;
    start = 0;
    end = range;
    $('#sectionRelatedServiceModule #record-table').html('');
    RelatedServiceDataTable.init(start, range);
});

$(document).on('change', '#sectionRelatedServiceModule #record-table .chkChoose', function () {
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

    if ($('#sectionRelatedServiceModule #record-table .chkChoose:checked').length == $('#sectionRelatedServiceModule #record-table tr .chkChoose').length) {
        $('#sectionRelatedServiceModule .group-checkable').prop('checked', true);
    } else {
        $('#sectionRelatedServiceModule .group-checkable').prop('checked', false);
    }

    $('#sectionRelatedServiceModule input[name=selectedIds]').val(selectedItems);
    $('#sectionRelatedServiceModule input[name=selectedTitles]').val(recTitle);
});

$(document).on('click', '#sectionRelatedServiceModule #record-table tr', function (e) {
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

$(document).on('change', '#sectionRelatedServiceModule #columns', function () {
    if ($(this).find('option:selected').length > 1) {
        //$('#mCSB_1_container').trigger('click');
    }
});
//..Group checkbox checking        