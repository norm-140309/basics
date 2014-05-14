$(document).on("click", ".popup", function(e) {
	var img_src = "<img src='"+$(this).find('a:first').attr('href')+"' class='expand-img' >";
	bootbox.dialog({
          message: img_src
    }).find("div.modal-dialog").addClass("photobox");
});

