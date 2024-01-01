const selectTags = document.querySelectorAll("select")

selectTags.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id === 0 ? (country_code === "en" ? "selected" : "")
    }
})
