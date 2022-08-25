var dd_main = document.querySelector(".dd_main");

	dd_main.addEventListener("click", function(){
		this.classList.toggle("active");
	})


    // 서치박스
    // $(".default_option").click(function(){
    //     $(".dropdown ul").addClass("active");
    // });
    
    // $(".dropdown ul li").click(function(){
    //     var text = $(this).text();
    //     $(".default_option").text(text);
    //     $(".dropdown ul").removeClass("active");
    // });

const toggleBtn = document.querySelector('.default_option');
const menu = document.querySelector('.dropdown ul');
const icons = document.querySelector('.navbar_linkicon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});