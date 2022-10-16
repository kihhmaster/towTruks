// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/node_modules/jquery/dist/jquery.min.js'

	document.addEventListener('DOMContentLoaded', () => {

		$(".gallery").slice(0, 2).show().css('display', 'flex');
		$("#loadMore").on("click", function(e){
			e.preventDefault();
			$(".gallery:hidden").slice(0, 1).css('display', 'flex').slideDown();
			if($(".gallery:hidden").length == 0) {
				$("#loadMore").fadeOut("slow");
				// $("#loadMore").text("свернуть").addClass("noContent");
				// $(".gallery:visible").slice(0, 2).show().css('display', 'flex');

			}
		});
			
		

})
