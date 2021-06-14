const upBtn = document.querySelector(".up-button"),
	downBtn = document.querySelector(".down-button"),
	sideBar = document.querySelector(".sidebar"),
	sideBarDescriptionsLength = sideBar.querySelectorAll("div").length,
	mainSlide = document.querySelector(".main-slide")

sideBar.style.top = `-${(sideBarDescriptionsLength - 1) * 100}vh`

let activeSlideIndex = 0

const changeSlide = (direction) => {
	if (direction === "up") {
		activeSlideIndex++
		if (activeSlideIndex === sideBarDescriptionsLength) {
			activeSlideIndex = 0
		}
	} else if (direction === "down") {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = sideBarDescriptionsLength - 1
		}
	}

	mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
	sideBar.style.transform = `translateY(+${activeSlideIndex * 100}vh)`
}

upBtn.addEventListener("click", () => changeSlide("up"))
downBtn.addEventListener("click", () => changeSlide("down"))