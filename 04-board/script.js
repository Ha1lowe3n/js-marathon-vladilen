const board = document.getElementById("board"),
	SQUARES_NUMBER = 500
	const colors = [
		"#FF0000", "green",
		"yellow", "orange", "#39FF14",
		"#0000FF", "#FF00C3", "#4824FF"
	]

const getRandomColor = () => {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}
const setColor = (el) => {
	const color = getRandomColor()
	el.style.backgroundColor = color
	el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
const removeColor = (el) => {
	el.style.backgroundColor = ""
	el.style.boxShadow = ``
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement("div")
	square.classList.add("square")

	square.addEventListener("mouseenter", () => {
		setColor(square)
	})
	square.addEventListener("mouseleave", () => {
		removeColor(square)
	})

	board.append(square)
}