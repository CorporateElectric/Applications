$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $(".cmsPages").click(function () {
        var cmspage_id = this.id;
        $.ajax({
            url: site_url + '/powerpanel/dashboard/ajax',
            data: {type: 'cms', id: cmspage_id},
            type: "POST",
            dataType: "json",
            success: function (data) {
                var html = '';
                if (data != null && data != '') {
                    html += '<div class="modal-dialog">';
                    html += '<div class="modal-vertical">';
                    html += '<div class="modal-content">';
                    html += '<div class="modal-header">';
                    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>';
                    html += '<h3 class="modal-title">' + data.varTitle + '</h3>';
                    html += '</div>';
                    html += '<div class="modal-body">';
                    html += '<p>' + data.varTitle + '</p>';
                    html += '<p>' + data.txtDescription + '</p>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    $('.detailsCmsPage').html(html);
                    $('.detailsCmsPage').modal('show');
                }
            },
            error: function () {
                console.log('error!');
            }
        });
    });
    $(".contactUsLead").click(function ()
    {
        var contactuslead_id = this.id;
        $.ajax({
            url: site_url + '/powerpanel/dashboard/ajax',
            data: {type: 'contactuslead', id: contactuslead_id},
            type: "POST",
            dataType: "json",
            success: function (data) {
                var html = '';
                if (data != null && data != '') {
                    html += '<div class="modal-dialog">';
                    html += '<div class="modal-vertical">';
                    html += '<div class="modal-content">';
                    html += '<div class="modal-header">';
                    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>';
                    html += '<h3 class="modal-title">' + data.varFirstName + '</h3>';
                    html += '</div>';
                    html += '<div class="modal-body">';
                    html += '<p><strong>Email:</strong> ' + data.varEmail + '</p>';
                    if (data.varPhoneNo == null || data.varPhoneNo == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Phone:</strong> ' + data.varPhoneNo + '</p>';
                    }
                    if (data.txtReason == null || data.txtReason == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Reason:</strong> ' + data.txtReason + '</p>';
                    }
                    if (data.txtUserMessage == null || data.txtUserMessage == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Message:</strong> ' + data.txtUserMessage + '</p>';
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    $('.detailsContactUsLead').html(html);
                    $('.detailsContactUsLead').modal('show');
                }
            },
            error: function () {
                console.log('error!');
            }
        });
    });
    $(".getaEstimateLead").click(function ()
    {
        var getaestimateleads_id = this.id;
        $.ajax({
            url: site_url + '/powerpanel/dashboard/ajax',
            data: {type: 'getaestimatelead', id: getaestimateleads_id},
            type: "POST",
            dataType: "json",
            success: function (data) {
                var html = '';
                if (data != null && data != '') {
                    html += '<div class="modal-dialog">';
                    html += '<div class="modal-vertical">';
                    html += '<div class="modal-content">';
                    html += '<div class="modal-header">';
                    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>';
                    html += '<h3 class="modal-title">' + data.varName + '</h3>';
                    html += '</div>';
                    html += '<div class="modal-body">';
                    html += '<p><strong>Email Address:</strong> ' + data.varEmail + '</p>';
                    if (data.varPhoneNo == null || data.varPhoneNo == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Phone:</strong> ' + data.varPhoneNo + '</p>';
                    }
                    if (data.txtUserMessage == null || data.txtUserMessage == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Message:</strong> ' + data.txtUserMessage + '</p>';
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    $('.detailsGetaEstimateLead').html(html);
                    $('.detailsGetaEstimateLead').modal('show');
                }
            },
            error: function () {
                console.log('error!');
            }
        });
    });
    $(".requestQuotationLead").click(function ()
    {
        var requestquotationleads_id = this.id;
        $.ajax({
            url: site_url + '/powerpanel/dashboard/ajax',
            data: {type: 'requestquotationlead', id: requestquotationleads_id},
            type: "POST",
            dataType: "json",
            success: function (data) {
                var html = '';
                if (data != null && data != '') {
                    html += '<div class="modal-dialog">';
                    html += '<div class="modal-vertical">';
                    html += '<div class="modal-content">';
                    html += '<div class="modal-header">';
                    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>';
                    html += '<h3 class="modal-title">' + data.varName + '</h3>';
                    html += '</div>';
                    html += '<div class="modal-body">';
                    html += '<p><strong>Email Address:</strong> ' + data.varEmail + '</p>';
                    if (data.varPhoneNo == null || data.varPhoneNo == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Telephone Number:</strong> ' + data.varPhoneNo + '</p>';
                    }
                    if (data.varPhysicalAddress == null || data.varPhysicalAddress == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Physical Address:</strong> ' + data.varPhysicalAddress + '</p>';
                    }
                    if (data.varMailingAddress == null || data.varMailingAddress == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Mailing Address:</strong> ' + data.varMailingAddress + '</p>';
                    }
                    if (data.txtUserMessage == null || data.txtUserMessage == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Additional Information:</strong> ' + data.txtUserMessage + '</p>';
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    $('.detailsRequestQuotationLead').html(html);
                    $('.detailsRequestQuotationLead').modal('show');
                }
            },
            error: function () {
                console.log('error!');
            }
        });
    });
    $(".requestServiceLead").click(function ()
    {
        var requestserviceleads_id = this.id;
        $.ajax({
            url: site_url + '/powerpanel/dashboard/ajax',
            data: {type: 'requestservicelead', id: requestserviceleads_id},
            type: "POST",
            dataType: "json",
            success: function (data) {
                var html = '';
                if (data != null && data != '') {
                    html += '<div class="modal-dialog">';
                    html += '<div class="modal-vertical">';
                    html += '<div class="modal-content">';
                    html += '<div class="modal-header">';
                    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>';
                    html += '<h3 class="modal-title">' + data.varName + '</h3>';
                    html += '</div>';
                    html += '<div class="modal-body">';
                    html += '<p><strong>Email Address:</strong> ' + data.varEmail + '</p>';
                    if (data.varPhoneNo == null || data.varPhoneNo == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Telephone Number:</strong> ' + data.varPhoneNo + '</p>';
                    }
                    if (data.varPhysicalAddress == null || data.varPhysicalAddress == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Physical Address:</strong> ' + data.varPhysicalAddress + '</p>';
                    }
                    if (data.varMailingAddress == null || data.varMailingAddress == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Mailing Address:</strong> ' + data.varMailingAddress + '</p>';
                    }
                    if (data.txtUserMessage == null || data.txtUserMessage == '') {
                        html += '';
                    } else {
                        html += '<p><strong>Comment:</strong> ' + data.txtUserMessage + '</p>';
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    $('.detailsRequestServiceLead').html(html);
                    $('.detailsRequestServiceLead').modal('show');
                }
            },
            error: function () {
                console.log('error!');
            }
        });
    });
    $(".FaqRecord").click(function () {
        var faq_id = this.id;
        $.ajax({
            url: site_url + '/powerpanel/dashboard/ajax',
            data: {type: 'faq', id: faq_id},
            type: "POST",
            dataType: "json",
            success: function (data) {
                var html = '';
                if (data != null && data != '') {
                    html += '<div class="modal-dialog">';
                    html += '<div class="modal-vertical">';
                    html += '<div class="modal-content">';
                    html += '<div class="modal-header">';
                    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>';
                    html += '<h3 class="modal-title">FAQ</h3>';
                    html += '</div>';
                    html += '<div class="modal-body">';
                    html += '<p>' + data.question + '</p>';
                    html += '<p>' + data.answer + '</p>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    $('.FAQDetails').html(html);
                    $('.FAQDetails').modal('show');
                }
            },
            error: function () {
                console.log('error!');
            }
        });
    });
    $(".BlogRecord").click(function () {
        var blog_id = this.id;
        $.ajax({
            url: site_url + '/powerpanel/dashboard/ajax',
            data: {type: 'blog', blog_alias: blog_id},
            type: "POST",
            dataType: "json",
            success: function (data) {
                var html = '';
                if (data != null && data != '') {
                    html += '<div class="modal-dialog">';
                    html += '<div class="modal-vertical">';
                    html += '<div class="modal-content">';
                    html += '<div class="modal-header">';
                    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>';
                    html += '<h3 class="modal-title">Blog</h3>';
                    html += '</div>';
                    html += '<div class="modal-body">';
                    html += '<p>' + data.title + '</p>';
                    html += '<p>' + data.description + '</p>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    $('.BlogDetails').html(html);
                    $('.BlogDetails').modal('show');
                }
            },
            error: function () {
                console.log('error!');
            }
        });
    });
});
