const item = document.querySelector(".item"),
	placeholders = document.querySelectorAll(".placeholder")

placeholders.forEach(placeholder => {
	placeholder.addEventListener("dragover", (e) => {
		e.preventDefault()
	})
	placeholder.addEventListener("dragenter", (e) => {
		if (e.target.dataset.class === "start") e.target.classList.add("start")
		if (e.target.dataset.class === "progress") e.target.classList.add("progress")
		if (e.target.dataset.class === "done") e.target.classList.add("done")
	})
	placeholder.addEventListener("dragleave", (e) => {
		e.target.className = "placeholder"
	})
	placeholder.addEventListener("drop", (e) => {
		e.target.append(item)
		e.target.className = "placeholder"
	})
})

item.addEventListener("dragstart", (e) => {
	e.target.classList.add("hold")
	setTimeout(() => {
		e.target.classList.add("hide")
	}, 0)
})
item.addEventListener("dragend", (e) => {
	e.target.classList.remove("hold", "hide")
})
